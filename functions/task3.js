function checkOrder(availible, ordered) {
    if (availible < ordered) {
        console.log("Your order is too large, we don't have enough goods.")
    } 
    else if (ordered === 0) {
        console.log("Your order is empty.")
    }
    else if (availible >= ordered) {
        console.log("Your order is accepted.")
    }

}
checkOrder(10, 5);
checkOrder(10, 15);
checkOrder(undefined, 0);