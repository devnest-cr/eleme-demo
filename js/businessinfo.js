// 点餐/评价/商家 标签切换
function switchContentTab(index) {
    // 切换标签高亮
    document.querySelectorAll(".content-tab .tab-item").forEach((tab, i) => {
        tab.classList.toggle("active", i + 1 === index);
    });

    // 切换内容显示
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    if (index === 1) {
        document.getElementById("tab-food").classList.add("active");
    } else if (index === 2) {
        document.getElementById("tab-comment").classList.add("active");
    } else if (index === 3) {
        document.getElementById("tab-shop").classList.add("active");
        // 隐藏购物车
        document.querySelector(".cart-bar").style.display = "none";
    } else {
        //显示购物车
        document.querySelector(".cart-bar").style.display = "flex";
    }
}

// 左侧商品分类全部切换
function switchCategory(idx) {
    // 左侧菜单高亮
    document.querySelectorAll('.category-item').forEach((item, i) => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.category-item')[idx - 1].classList.add('active');

    // 隐藏所有商品面板
    document.querySelectorAll('.cate-panel').forEach(panel => {
        panel.style.display = 'none';
    });

    // 显示当前点击的面板
    document.getElementById('cate' + idx).style.display = 'block';
}


// 购物车数据
let cart = [];

// 添加商品到购物车
function addToCart(el) {
    const goodsItem = el.closest('.goods-item');
    const name = goodsItem.querySelector('.goods-name').innerText;
    const price = parseFloat(goodsItem.querySelector('.sale').innerText.replace('¥', ''));

    // 商品已存在则数量+1，不存在则新增
    const hasGoods = cart.find(item => item.name === name);
    if (hasGoods) {
        hasGoods.count++;
    } else {
        cart.push({name, price, count: 1});
    }

    // 更新购物车显示
    updateCartUI();
}

// 更新界面
function updateCartUI() {
    // 总数量
    const totalCount = cart.reduce((a, b) => a + b.count, 0);
    // 总价格
    const totalPrice = cart.reduce((a, b) => a + b.price * b.count, 0).toFixed(1);

    // 赋值到页面
    document.querySelector('.cart-count').innerText = totalCount;
    document.getElementById('cartTotal').innerText = '¥' + totalPrice;

    // 超过10元就改变起送文字
    if (totalPrice >= 10) {
        document.getElementById('startTip').innerText = '去结算';
    } else {
        document.getElementById('startTip').innerText = '¥10起送';
    }
}


// 结算
function goPay() {
    let total = document.getElementById('cartTotal').innerText;
    if(total === '¥0'){
        alert('请先选购商品');
        return;
    }
    window.location.href = 'order-confirm.html';
}