const form = document.getElementById("clubForm");

function submitConfirm() {
    return confirm("Are you sure you want to submit this form?");
}

function resetConfirm() {
    return confirm("Are you sure you want to clear all data? This action cannot be undone.");
}

function changeColor(element) {
    element.style.backgroundColor = "yellow";
}

function resetColor(element) {
    element.style.backgroundColor = "white";
}

function blurMark(element) {
    if (element.value.trim() === "") {
        element.style.borderColor = "red";
        element.style.borderWidth = "2px";
        element.style.borderStyle = "solid";
    } else {
        element.style.borderColor = "";
        element.style.borderWidth = "";
        element.style.borderStyle = "";
    }
}
