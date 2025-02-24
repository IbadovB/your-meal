const basketOrders = document.querySelector('.basket-orders') 

function basketList(){
    basketOrders.style.display = block
} 
 
 const decreaseNumber = () =>{
    let itemval = document.querySelector('.display-box');

    if (itemval.value<0){
itemval.value = 0
    }else{
        itemval.value = parseInt(itemval.value) - 1;
    }
 }

 