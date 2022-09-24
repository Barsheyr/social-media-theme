const checkBox = document.getElementById("toggle")
const html = document.querySelector("html")


const toggleDark = function() {
    if (checkBox.checked) {
        console.log("light")
        html.classList.add("dark")
    } else {
        console.log("dark")
        html.classList.remove("dark")
    }
}

toggleDark();
checkBox.addEventListener("click", toggleDark);