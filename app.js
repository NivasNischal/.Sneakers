 const wrapper = document.querySelector(".sliderWrapper");
 const menuItems = document.querySelectorAll(".menuItem");

 const products = [
    {
        id: 1,
        title: "Air Force",
        price: 9988,
        colours: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordon",
        price: 10988,
        colours: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],   
    },
    {
        id: 3,
        title: "Blazer",
        price: 11999,
        colours: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],   
    },
    {
        id: 4,
        title: "Crater",
        price: 12099,
        colours: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgrey",
                img: "./img/crater2.png",
            },
        ],   
    },
    {
        id: 5,
        title: "Hippie",
        price: 8999,
        colours: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],   
    },
 ];

 let ChoosenProduct = products

 const currentProductImg = document.querySelector(".productImage");
 const currentProductTitle = document.querySelector(".productTitle");
 const currentProductPrice = document.querySelector(".productPrice");
 const currentProductColours = document.querySelectorAll(".Colour");
 const currentProductSizes = document.querySelectorAll(".Size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //Change the current slide
       wrapper.style.transform = `translateX(${-100 *index}vw)`;

       //Change the chossen product
       ChoosenProduct = products[index];

       //Change texts of currentProduct
       currentProductTitle.textContent = ChoosenProduct.title;
       currentProductPrice.textContent = ChoosenProduct.price + "₹";
       currentProductImg.src = ChoosenProduct.colours[0].img;
       
       //Assigning new colours 
       currentProductColours.forEach((colour,index) => {
          colour.style.backgroundColor = ChoosenProduct.colours[index].code;  
       });
    });
});

currentProductColours.forEach((colour,index) => {
     colour.addEventListener("click", ()=> {
        currentProductImg.src = ChoosenProduct.colours[index].img;
     });
});

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", () => {

        currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
}); 
close.addEventListener("click", () => {
    payment.style.display = "none";
}); 