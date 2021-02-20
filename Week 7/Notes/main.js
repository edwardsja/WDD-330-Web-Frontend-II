//Example 5.3 EJS Sandbox
function every_loop(array, test) {
let true_statement = true;
    for (let i = 0; i < array.length; i++) {
        if (!(test(array[i]))) {
            true_statement = !true_statement;
        }
    }
    document.getElementById('test1').innerHTML = true_statement;
}

function every_method(array, test) {
    let true_statement = array.every(test);
    document.getElementById('test2').innerHTML = true_statement;
}

//Example 18.2 EJS Sandbox
function display_code() {
    let user_code = '';
    user_code = document.getElementById('code').value;

    try {
        new Function(user_code);
    }
    catch(error) {
        document.getElementById('output').innerHTML = error.message;
        return;
    }
    
    let user_function = new Function(user_code);

    let user_result = user_function();

    document.getElementById('output').innerHTML = user_result;
}