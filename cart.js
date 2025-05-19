cartcnt = document.getElementById("cartcnt");
let cartproduct = JSON.parse(localStorage.getItem("cart")) || []


function displayCartData() {
  if (cartproduct.length == 0) {
    cartcnt.innerHTML =

      `
        <h1>add product in cart</h1>
        `
  }
  else {

    input = ""
    let uniqueId = "priceqty"
    let incBtn = "incbtn"
    let decbtn = "decbtn"
    cartproduct.map((val) => {
      uniqueId = uniqueId + val.id;
      incBtn = incBtn + val.id;
      decbtn = decbtn + val.id;
      input +=
        `
            <tr>
    <td class="py-4">
        <div class="flex items-center">
            <a href="index.html">
            <img class="h-16 w-16 mr-4" src=${val.images[0]} alt="Product image">
            </a>
            <span class="font-semibold">${val.title}</span>
        </div>
    </td>
    <td class="py-4" >${val.price} </td>
    <td class="py-4">
        <div class="flex items-center">
            <button class="border rounded-md py-2 px-4 mr-2"  onclick="decrement(${val.price})">-</button>
        <span class="text-center w-8" id=${uniqueId}>1</span>
            <button class="border rounded-md py-2 px-4 ml-2" onclick="increment(${val.price})">+</button>
        </div>
    </td>
    <td class="py-4" id="totalPrice">${val.price}</td>
    <td class="py-4" onclick=deleteItem(${val.id})><i class="fa-solid fa-trash"></i></td>
    </tr> 
      `
    })
    let quantity = 1
    cartcnt.innerHTML = input;
    // logic for qty  
    let qty = document.getElementById(uniqueId)
    let totalPrice = document.getElementById("totalPrice")

    function decrement(p) {
      if (quantity > 0) {
        quantity--;
        qty.innerHTML = quantity;
        totalPrice.innerHTML = Math.round(quantity * p)
      }

    }
    function increment(p) {
      quantity++;
      qty.innerHTML = quantity;
      totalPrice.innerHTML = Math.round(quantity * p)
    }


  }

}

// logic for deleting product;
displayCartData()

function deleteItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart"))
  let matchingProd = cart.find((val) => { return val.id == id })
  let index = cart.indexOf(matchingProd);
  cart.splice(index, 1)
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html"
}