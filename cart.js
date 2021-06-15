let counter = 1
const unitPrice = document.getElementById("disc-pri").innerHTML;
document.getElementById("inc").addEventListener("click", function () {
    counter++;
    document.getElementById("qnty").value = counter;
    const price = document.getElementById("disc-pri");
    const finprice =document.getElementById("fp");
    price.innerHTML = (unitPrice * counter).toFixed(2);
    finprice.innerHTML=(unitPrice * counter).toFixed(2);

})

document.getElementById("dec").addEventListener("click", function () {
    counter--;
    document.getElementById("qnty").value = counter;
    const price = document.getElementById("disc-pri");
    const finprice =document.getElementById("fp");
    price.innerHTML = (unitPrice * counter).toFixed(2);
    finprice.innerHTML=(unitPrice * counter).toFixed(2);

})
// // document.getElementById("fp").innerText = unitPrice;
// let discount = document.getElementById("fd").innerText;
//  let delchg = document.getElementById("fdel").innerText;
