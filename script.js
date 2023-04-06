var input = ""

//Get all buttons on the page in form of list
let buttons = document.querySelectorAll('button');

// converting that list in an array
let arrayOfButtons = Array.from(buttons)

arrayOfButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
        if (event.target.innerHTML == "=") {
            input = eval(input)
            document.querySelector('.input').value = input
        }
        else if (event.target.innerHTML == "AC") {
            input = ""
            document.querySelector('.input').value = ""
        }

        else {
            console.log(event.target)
            input = input + event.target.innerHTML.replace(" &nbsp;", "");
            document.querySelector('.input').value = input
        }
    })
})