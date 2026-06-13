function clickMenu(index) {
    if (index === 1) {
        document.getElementById("MenuHome").style.color="#EC602A";
        document.getElementById("MenuOrder").style.color="#404454";
        document.getElementById("MenuMy").style.color="#404454";
        window.location.href="index.html";
    }
    else if (index === 2) {
        document.getElementById("MenuHome").style.color="#404454";
        document.getElementById("MenuOrder").style.color="#EC602A";
        document.getElementById("MenuMy").style.color="#404454";
        window.location.href="order.html";
    }
    else {
        document.getElementById("MenuHome").style.color="#404454";
        document.getElementById("MenuOrder").style.color="#404454";
        document.getElementById("MenuMy").style.color="#EC602A";
        window.location.href = "my.html";
    }
}