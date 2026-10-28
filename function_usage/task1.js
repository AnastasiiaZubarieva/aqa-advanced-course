function handleNum (num, onEvenCb, onOddCb) {
    if (num % 2 === 0) {
        onEvenCb();
    } else {
        onOddCb();
    }
}

const handleEven = () => {
    console.log('Number is even');
};
const handleOdd = () => {
    console.log('Number is odd');
};

handleNum(4, handleEven, handleOdd);
handleNum(5, handleEven, handleOdd);