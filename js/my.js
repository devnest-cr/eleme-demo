function clickPanel(index) {
    if (index === 1) {
        document.getElementById("panel1").style.display = "";
        document.getElementById("panel2").style.display = "none";
        document.getElementById("panel3").style.display = "none";

    } else if (index === 2) {
        document.getElementById("panel1").style.display = "none";
        document.getElementById("panel2").style.display = "";
        document.getElementById("panel3").style.display = "none";

    } else {
        document.getElementById("panel1").style.display = "none";
        document.getElementById("panel2").style.display = "none";
        document.getElementById("panel3").style.display = "";
    }
}


function openModal() {
    document.getElementById('accountModal').style.display = 'block';
}

function closeModal(e) {
    if (!e || e.target.id === 'accountModal') {
        document.getElementById('accountModal').style.display = 'none';
    }
}
