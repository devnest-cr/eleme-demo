//移动横向的方法
function moveLine(activeItem) {
    // activeItem.offsetLeft：当前菜单距离父容器左边的距离
    // activeItem.offsetWidth：当前菜单的宽度
    const lineWidth = activeItem.offsetWidth * 0.3;
    const lineLeft = activeItem.offsetLeft + ((activeItem.offsetWidth - lineWidth) / 2);
    document.getElementById("menu-line").style.width = lineWidth + "px";
    document.getElementById("menu-line").style.left = lineLeft + "px";
}

window.onload = function () {
    //获取所有菜单项
    const menuItems = document.querySelectorAll('.menu-item');
    //默认选中的菜单项
    const activeMenuItem = document.querySelector('.menu-item.active');
    moveLine(activeMenuItem);
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // 先移除所有菜单的 active
            menuItems.forEach(i => i.classList.remove("active"));
            // 给当前点击的菜单添加 active
            this.classList.add("active");
            //横线移动到当前菜单下
            moveLine(this);
        });
    });
}


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


// 点击订单跳转到订单详情
function goOrderDetail() {
    // 以后你写真实页面：
    window.location.href = "businessinfo.html";
}