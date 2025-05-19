let productdesc=document.getElementById("productdesc")
let datafromlocalstorage=JSON.parse(localStorage.getItem('singleproduct'))

productdesc.innerHTML=`
<div class="bg-gray-100 dark:bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img class="w-full h-full object-cover" src="${datafromlocalstorage.images[0]}" alt="Product Image">
                        </div>
                        <div class="flex -mx-2 mb-4">
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onclick="addtocart()">Add to Cart</button>
                            </div>
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${datafromlocalstorage.title}</h2>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          ${datafromlocalstorage.price} 
                        </p>
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span class="text-gray-600 dark:text-gray-300">$${datafromlocalstorage.price}</span>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                <span class="text-gray-600 dark:text-gray-300">${datafromlocalstorage.availabilityStatus}</span>
                            </div>
                        </div>
                        
                        
                        <div>
                            <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                ${datafromlocalstorage.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
let reviewcnt=document.getElementById("review")
let reviews=datafromlocalstorage.reviews
let input=''
reviews.map((e)=>{
    input+=`
    <div class='reviewCnt'>
    <div class='ratingcnt'>
    <p>${e.rating}</p>
    <h3>${e.comment}</h3>
    </div>
    <div class='likecnt'>
    <p> <i class="fa-solid fa-circle-check"></i> ${e.reviewerName}  ${e.date.slice(0,10)}</p>
    <p><i class="fa-solid fa-thumbs-up"></i>${Math.round(Math.random()*10000)}   <i class="fa-solid fa-thumbs-down"></i>${Math.round(Math.random()*10000)}</p>
    
    </div>
    </div>
    `
})
reviewcnt.innerHTML=input
function addtocart(){
    let cartData=JSON.parse(localStorage.getItem("cart"))||[]
    let findProduct=cartData.find((val)=>{
        return val.id===datafromlocalstorage.id
    })
    if(findProduct){
        alert("product has been already added to the cart")
    }
    else{
        cartData.push(datafromlocalstorage)
        localStorage.setItem("cart",JSON.stringify(cartData))
        alert("product has been added to the cart")
    }
}




