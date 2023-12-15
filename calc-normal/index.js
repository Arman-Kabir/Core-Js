let result = document.getElementById('inputext');

let operators = ['+', '-', '*', '/', '%'];

let calculate = (number) => {
    // console.log(typeof (number));
    if (operators.includes(number)) {
        if (operators.includes(result.value.slice(-1))) {
            console.log(number, result.value.slice(-1));
            return;
        }

    }
    result.value += number;



}

let Result = () => {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert('Enter valid input');
    }
}

function clr() {
    result.value = ' ';
}

function del() {
    result.value = result.value.slice(0, -1);
}