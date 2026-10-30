function counterNumber(num) {
    if (num >= 0) {
        console.log(num);
        num--
        counterNumber(num)
    }
}

counterNumber(5)