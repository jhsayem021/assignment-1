let allProducts = [];
const loadAllProducts = () =>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        allProducts = data;   
        trendyProducts(data);
    })
}
const loadAllProducts2 = () =>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        trendyProducts(data);
    })
}
const loadAllCategories = () =>{
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data))
}

const filterByCategory = (categoryName) => {

    if(categoryName === "all"){
        displayAllProducts(allProducts);
        return;
    }

    const filteredProducts = allProducts.filter(product =>
        product.category === categoryName
    );

    displayAllProducts(filteredProducts);
};

const displayCategory = (categories)=>{
console.log(categories)
loadAllProducts();
const allProductContainer = document.getElementById("service-cart-container")
    
const allCategories = document.getElementById("categories")
    allProductContainer.innerHTML = ""
    allCategories.innerHTML = ""
    allCategories.innerHTML = `<button onClick="loadAllProducts()"  class="btn border-1 border-[#3B25C1] hover:border-[#3B25C1] bg-[#FFFFFF] hover:bg-[#3B25C1] focus:bg-[#3B25C1] text-[#3B25C1] hover:text-[#FFFFFF] focus:text-[#FFFFFF]   rounded-full">  All</button>`

    for(let category of categories){
        const categoryDiv = document.createElement("button")
        categoryDiv.classList.add("btn", "border-1" ,"border-[#3B25C1]", "hover:border-[#3B25C1]", "bg-[#FFFFFF]", "hover:bg-[#3B25C1]", "focus:bg-[#3B25C1]", "text-[#3B25C1]", "hover:text-[#FFFFFF]", "focus:text-[#FFFFFF]" ,  "rounded-full");
        categoryDiv.innerHTML=`
        <button  > ${category}  </button>     `
        categoryDiv.onclick = () => {
            filterByCategory(category);   // ✅ Pass category name
        };
        allCategories.append(categoryDiv)
    }

};
const displayAllProducts = (products)=>{
console.log(products)

const allProductContainer = document.getElementById("service-cart-container")
    allProductContainer.innerHTML = ""

    for(let product of products){

        const productDiv = document.createElement("div")
        productDiv.classList.add("card" ,"bg-base-100", "w-84", "shadow-sm");
        productDiv.innerHTML=`
        
          <figure>
            <img class="max-h-[300px]" src="${product.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="bg-[#E0E7FF] text-[#3B25C1] text-[11px] font-bold px-3 py-1 rounded-full  text-center"> <p>${product.category}</p></div>
              <div class=""> <i class="fa-solid fa-star text-[#FED232]"></i>
                <span class="text-[#5B6473]">${product?.rating?.rate} (${product?.rating?.count})</span>
              </div>
            </div>
            <h2 class="card-title -mb-2 mt-4 truncate text-overflow: ellipsis;" >
              ${product.title}
            </h2>
            <p class="font-bold text-[15px]" >$ ${product.price}</p>
            <div class="card-actions justify-between mt-5">
              <button class="btn border-1 border-[#DBDEE4] hover:border-[#3B25C1] bg-[#FFFFFF] text-[#5B6473] hover:text-[#3B25C1] lg:w-34 w-28"> <i class="fa-regular fa-eye"></i> Default</button>
              <button class="btn border-1 border-[#3B25C1] hover:border-[#3B25C1] bg-[#3B25C1] hover:bg-[#FFFFFF] text-white hover:text-[#3B25C1] lg:w-34 w-28 "> <i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>
          </div>
        
        `
        allProductContainer.append(productDiv)
    }

};
const trendyProducts = (products)=>{
console.log(products)

const allProductContainer = document.getElementById("top-product-container")
    allProductContainer.innerHTML = ""
    const mostRatedProduct = products.filter(product =>(product?.rating?.count) === 300)
    console.log("most rated", mostRatedProduct)
    for(let product of mostRatedProduct){

        const productDiv = document.createElement("div")
        productDiv.classList.add("card" ,"bg-base-100", "w-84", "shadow-sm");
        productDiv.innerHTML=`
        
          <figure>
            <img class="max-h-[300px]" src="${product.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="bg-[#E0E7FF] text-[#3B25C1] text-[11px] font-bold px-3 py-1 rounded-full  text-center"> <p>${product.category}</p></div>
              <div class=""> <i class="fa-solid fa-star text-[#FED232]"></i>
                <span class="text-[#5B6473]">${product?.rating?.rate} (${product?.rating?.count})</span>
              </div>
            </div>
            <h2 class="card-title -mb-2 mt-4 truncate text-overflow: ellipsis;" >
              ${product.title}
            </h2>
            <p class="font-bold text-[15px]" >$ ${product.price}</p>
            <div class="card-actions justify-between mt-5">
              <button class="btn border-1 border-[#DBDEE4] hover:border-[#3B25C1] bg-[#FFFFFF] text-[#5B6473] hover:text-[#3B25C1] lg:w-34 w-28"> <i class="fa-regular fa-eye"></i> Default</button>
              <button class="btn border-1 border-[#3B25C1] hover:border-[#3B25C1] bg-[#3B25C1] hover:bg-[#FFFFFF] text-white hover:text-[#3B25C1] lg:w-34 w-28 "> <i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>
          </div>
        
        `
        allProductContainer.append(productDiv)
    }


};




loadAllProducts2();
loadAllProducts();
loadAllCategories();