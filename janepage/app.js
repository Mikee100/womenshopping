

const product = [
{
    id: 0,
    image:  'bag1.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},
{
    id: 1,
    image:  'bag2.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},
{
    id: 2,
    image:  'bag3.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},
{
    id: 3,
    image:  'bag4.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},
{
    id: 4,
    image:  'bag5.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},
{
    id: 5,
    image:  'bag6.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},
{
    id: 6,
    image:  'bag7.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
},

{
    id: 7,
    image:  'bag8.jfif',
    title:  'Chanel Bag' ,
    price: 2500,
}
];

   
const categories = [  ...new Set(product.map((item) =>
    {return item}))]
    
    let i = 0;
    document.getElementById('root').innerHTML=categories.map((item) =>
    {

       var{image,title,price} = item;
       return(
        `  
      
            <div class='box'>
            <div class ='img-box'>
               <img class='images' src=${image}></img>
           </div>

               <div class= 'bottom'>
               <p class='bag_title'> ${title}</p>
               <h4 class='bag_price' >$ ${price}.00</h2>`+
               "<button class='addtocart_btn' onclick='addtocart("+(i++)+")' >Add to cart</button>" +
               `</div>
               
               </div>`
       )
    
}).join('')  





var cart = [];


function addtocart(a){
    cart.push({...categories[a]});
displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}



function displaycart(a){



let j = 0;
document.getElementById("count").innerHTML = cart.length;
if(cart.length ==0){
   document.getElementById('cartItem').innerHTML = "Your cart is empty";
}
else{
   document.getElementById('cartItem').innerHTML = cart.map((items) =>
   {
       var{image,title,price} = items;
       return(
           `<div class = 'cart-item'>
             
              
                    <img class = 'rowimg' src = ${image}>
                    
                  
                    <p class='item_name' >${title}</p>
                    <h4 class='item_price' > $${price}.00</h2>
                    "<i class='fa fa-trash' onclick='delElement("+(i++)+")' ></i>"
                   
               </div>
           `

       )

   });
}
}

let cart_container = document.getElementById("cart_container");


function openCart() {
    cart_container.classList.add("open-cart_container");
    
}
function removeCart() {
    cart_container.classList.remove("open-cart_container");
    
}














