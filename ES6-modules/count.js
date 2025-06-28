let count = 0;

function increment(){
    count++;
    return count;
}

function decrement(){
    count--;
    return count;
}

function reset(){
    count = 0;
    return count;
}

export {increment, decrement, reset};