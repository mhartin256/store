const slideLeftBtn = document.querySelector("#slider-left")
const slideRightBtn = document.querySelector("#slider-right")
const slideImages = document.querySelectorAll("#slider img")

const product_container = document.querySelector("#products-container")

const searchBar = document.querySelector("#searchBar")
const SearchForm = document.querySelector("#form")

const products = [
    {
        id: "A001",
        name: "Samsung Electronics Galaxy Buds Live, True Wireless Earbuds W/Active Noise Cancelling (Wireless Charging Case Included), Mystic Red",
        price: 104.99,
        image: 'https://m.media-amazon.com/images/I/71qsNVFefKL._AC_UL320_.jpg',
        category: 'Electronics',
        rating: 4,
        addedToCart:false
    },
     {
        id: "A002",
        name: "Maruchan Ramen Chicken, 3.0 Oz, Pack of 24",
        price: 104.99,
        image: 'https://m.media-amazon.com/images/I/91xajJWygpL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A003",
        name: "Zise Women's Emmy Loose Crop T-Shirt",
        price: 14.9,
        image: 'https://m.media-amazon.com/images/I/61MxBLZ5jnL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A004",
        name: 'Intoval Wireless Charger, 3 in 1 Charger for iPhone/iWatch/Airpods, Qi-Certified Charging Station ',
        price: 8218,
        image: 'https://m.media-amazon.com/images/I/61rn2trxswL._AC_UL320_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A005",
        name: 'OREO Original, OREO Golden, CHIPS AHOY! & Nutter Butter Cookie Snacks Variety Pack, School Lunch Box Snacks ',
        price: 14,
        image: 'https://m.media-amazon.com/images/I/81p8sciFxCL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A006",
        name: "Ecrocoo Women's Swiss Dot A-Line Dress Crew Neck Flare Short Sleeve Tie Waist See-Through Mesh Mini Dress"
        ,
        price:26.99,
        image: 'https://m.media-amazon.com/images/I/61TNfFDuD1L._MCnd_AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A007",
        name: 'Belifu Dual Channel TENS EMS Unit 24 Modes Muscle Stimulator for Pain Relief Therapy, Electronic Pulse',
        price: 35105,
        image: 'https://m.media-amazon.com/images/I/71EP8ds034L._AC_UL320_.jpg',
        category: 'Electronics',
        rating: 3,
        addedToCart:false
    },
    {
        id: "A008",
        name: 'Chef Boyardee Beef in Tomato & Meat Sauce Ravioli, 7.5 Oz. (Pack of 12)',
        price: 645,
        image: 'https://m.media-amazon.com/images/I/81za90qtEZL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A009",
        name: 'Paitluc Womens Pullover Sweatshirts Womens Hoodies Crewneck Double Hoodied Long Sleeve Sweatshirts',
        price: 24,
        image: 'https://m.media-amazon.com/images/I/71mOXi6NwIL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A010",
        name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging ',
        price: 150,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41LR93r46HL.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A011",
        name: 'Knorr Pasta Sides For a Delicious Easy Pasta Meal Alfredo No Artificial Flavors 4.4 oz, 4 count',
        price: 150,
        image: 'https://m.media-amazon.com/images/I/91o5y9eZWCL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A012",
        name: 'Joviren Cotton Workout Crop Tank Top for Women Racerback Yoga Tank Tops Athletic Sports Shirts Exercise Undershirts 4 Pack ',
        price: 1150,
        image: 'https://m.media-amazon.com/images/I/61J8vriN8YL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 3,
        addedToCart:false
    },
    {
        id: "A013",
        name: 'Phone Card Holder, Phone Wallet, Phone Pocket, Leather Card Holder, Stick On Wallet, Adhesive Phone Wallet, Marble Card Holder, Black',
        price: 11.69,
        image: 'https://i.etsystatic.com/13645812/r/il/6995e4/2276990027/il_340x270.2276990027_qk4c.jpg',
        category: 'Electronics',
        rating:5,
        addedToCart:false
    },
    {
        id: "A014",
        name: "adidas Women's Puremotion Adapt Running Shoe",
        price: 59.95,
        image: 'https://m.media-amazon.com/images/I/61pW0bF4pzS._AC_UL320_.jpg',
        category: 'Fashion',
        rating:4,
        addedToCart:false
    },
    {
        id: "A015",
        name: "Starbucks, Refreshers with Coconut Water, 3 Flavor Variety Pack, 12 fl Oz. Cans (12 Pack)",
        price: 59.95,
        image: 'https://m.media-amazon.com/images/I/818pOvvxAPL._AC_UL320_.jpg',
        category: 'Food & health',
        rating:3,
        addedToCart:false
    },
    {
        id: "A016",
        name: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year',
        price: 62.99,
        image: 'https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg',
        category: 'Electronics',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A017",
        name: "Gildan Men's Fleece Hooded Sweatshirt, Style G18500",
        price: 12.29,
        image: 'https://m.media-amazon.com/images/I/611LES31cbS._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A018",
        name: 'Lenovo IdeaPad 5i Pro 16" Laptop, 16.0" QHD (2560 x 1600) Display, Intel Core i5-11300H Processor, 16GB',
        price: 929.99,
        image: 'https://m.media-amazon.com/images/I/718vTOENZ+L._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A019",
        name: 'Care Package (40 Count) Snacks veriety pack Food Cookies Bars Chips Candy Back to School Prime Gift Basket',
        price: 929.99,
        image: 'https://m.media-amazon.com/images/I/91xr4Xul3hS._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A020",
        name: 'Make It Real - Fashion Design Mega Set with Light Table. Kids Fashion Design Kit Includes Light Table, Colored',
        price: 435,
        image: 'https://m.media-amazon.com/images/I/71rquA5JT-L._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
     {
        id: "A021",
        name: 'Garlic Press, Upgrade Garlic Mincer Stainless Steel Garlic Press Rocker, Professional Kitchen Gadget with Ergonomic Handle,Garlic Peeler',
        price: 168,
        image: 'https://m.media-amazon.com/images/I/715gL4wJHdL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A022",
        name: 'HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS',
        price: 568,
        image: 'https://m.media-amazon.com/images/I/81skV7BufjL._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 3,
        addedToCart:false
    },
       {
        id: "A023",
        name: 'Dash Rapid Egg Cooker: 6 Egg Capacity Electric Egg Cooker for Hard Boiled Eggs, Poached Eggs, Scrambled Eggs',
        price: 16.99,
        image: 'https://m.media-amazon.com/images/I/616CPzzjKmL._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A024",
        name: 'Create Your Own Headband Hair Fashion DIY Arts Craft Kit for Girls - 60+ Craft Supplies Display Drawer Storage',
        price: 568,
        image: 'https://m.media-amazon.com/images/I/91Smd7Pjn5S._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A025",
        name: 'SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive',
        price: 974,
        image: 'https://m.media-amazon.com/images/I/81skV7BufjL._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A026",
        name: 'Mueller Austria Pro-Series 8 Blade Egg Slicer, Onion Mincer Chopper, Slicer, Vegetable Chopper, Cutter, Dicer,',
        price: 82.6,
        image: 'https://m.media-amazon.com/images/I/91IkszFDn6S._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A027",
        name: "Under Armour Men's Charged Assert 9 Running Shoe",
        price:65.10,
        image: 'https://m.media-amazon.com/images/I/51v1dR53epL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 4,
        addedToCart:false
    },
    {
        id: "A028",
        name: 'Samsung Galaxy A21S (64GB, 4GB) 6.5", Quad Camera, All Day Battery Dual SIM GSM Unlocked Global 4G LTE',
        price: 207,
        image: 'https://m.media-amazon.com/images/I/61HeM-Q0BML._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A029",
        name: 'Real Littles Locker + Handbag Bundle Pack! Each Pack Contains an Exclusive Locker, Duffle Bag + 15 Surprises',
        price: 22,
        image: 'https://m.media-amazon.com/images/I/91A70RULEgL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A030",
        name: 'Healthy Snacks Gift Basket Care Package - 32 Health Food Snacking Choices - Quick Ready To Go - For Adults, College Students Gifts, Kids,',
        price: 22,
        image: 'https://m.media-amazon.com/images/I/A1JrxZB1l-L._AC_UL320_.jpg',
        category: 'Food & health',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A031",
        name: '5 VARIETY PACK - Unisex Cute Animal Fashion Breathable Washable Reusable Face Mask For Kids Boys & Girls',
        price: 5.9,
        image: 'https://m.media-amazon.com/images/I/81rdeFuqzxL._AC_UL320_.jpg',
        category: 'Fashion',
        rating: 5,
        addedToCart:false
    },
    {
        id: "A032",
        name: 'PS5 Playstation 5 (US Plug) Blu-ray Disc Edition Console 4K-TV Gaming, 8K Output, Ultra-High Speed 825GB SSD, WiFi 6, Bluetooth 5.1, Etekdirect Accessory',
        price: 2265,
        image: 'https://m.media-amazon.com/images/I/31h1Ts8fBeL._AC_UY218_.jpg',
        category: 'Electronics',
        rating: 5,
        addedToCart:false
    }

];

let activeImage = 0;

slideLeftBtn.disabled = activeImage <= 0;


slideLeftBtn.addEventListener("click", ()=>{
    activeImage--;
    getActiveImage(activeImage)

})

slideRightBtn.addEventListener("click", ()=>{
    activeImage++;
    getActiveImage(activeImage)
 

})

const getActiveImage = (activeImage)=>{

    slideLeftBtn.disabled = activeImage <= 0;
    slideRightBtn.disabled = activeImage >= slideImages.length - 1;

    slideImages.forEach((image, index) => {
        if(activeImage == index){
            image.classList.remove("opacity-0");
            image.classList.add("opacity-1");
        }else{
            image.classList.remove("opacity-1");
            image.classList.add("opacity-0");
        }
    
    });
}



const transition = (activeImage)=>{

}

const product = (image, price, name, category)=>{
    return `
    <div class="bg-white object-contain h-[300px]">
        <img src=${image} alt="" class="bg-white object-contain h-[300px]">
    </div>
   <div class="flex flex-col gap-2">
   <span class = "py-2 text-xs font-bold"> ${category} </span>
    <h3 class="font-semibold line-clamp-3" title=${name}>
        ${name}
    </h3>
    <p>${price}</p>
    <button class="bg-orange-400 py-2 px-4 text-sm font-semibold mt-2">ADD TO CART</button>
    </div>
   `
}

function populateDom(products){

    product_container.innerHTML = " "

    products.forEach(({image, price, name, category})=>{
        const pdtEl = document.createElement("div")
        pdtEl.classList.add("product")
        pdtEl.innerHTML = product(image, price, name, category)
        product_container.appendChild(pdtEl)
        
        })
}

populateDom(products)

// SearchForm.addEventListener("submit", (e)=>{
//     const query = searchBar.value;
//     const queryArrray = query.split(" ")
//     console.log(queryArrray)
//     e.preventDefault();

//     let newProducts = products.filter(({name})=>{
//         for (let i = 0; i < queryArrray.length; i++) {
            
//         return name.toLowerCase().includes(queryArrray[i].toLowerCase())
            
//         }
       
//     })

//     console.log(newProducts)

//     populateDom(newProducts)

// })


