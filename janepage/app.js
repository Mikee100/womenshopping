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
    document.getElementById('main_control').innerHTML=categories.map((item) =>
    {

       var{image,title,price} = item;
       return(
           ` <div class='main_control'>
           <div class='img_container1'>
               <img class='images' src=${image}</img> 
               </div>
            <div class ='bottom'>      
               <p style="margin-left:45px; font-size:13px; padding-bottom:5px; font-family: 'Kumbh Sans', sans-serif; color: rgb(197, 191, 191); " > ${title}</p>   
                  <p  style="font-size:12px;margin-left:45px;font-family: 'Kumbh Sans', sans-serif;font-weight:bolder;  color: rgb(197, 191, 191);" > $${price}.00 </p>`+ 
                
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button> "
             
       `</div>
           </div>  `
           
       )

    
}).join('')  
var cart = [];


function addtocart(a){
cart.push({...categories[a]});
displayCart();
}

function displayCart(a){

let j = 0;
if(cart.length ==0){
   document.getElementById(cart_container).innerHTML = "Your cart is empty";
}
else{
   document.getElementById(cart_container).innerHTML = cart.map((items) =>
   {
       var{image,title,name} = items;
       return(
           `<div class = 'cart-item'>
               <div class = 'row-img'>
                    <img class = 'rowimg' src = ${image}>
                    </div>
                    <p style= 'font-style:12px;'>${title}</p>
                    <h2 style= 'font-size:15px;'>${price}.00</h2>
                   
               </div>
           `

       )

   });
}
}










