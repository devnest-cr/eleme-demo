// 切换外卖配送 / 到店自取，两个面板完全独立切换
function switchTab(idx) {
    // 切换标签高亮
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach((tab, i) => tab.classList.toggle('active', i + 1 === idx));
    // 获取两个独立面板
    const deliverPanel = document.getElementById('panelDeliver');
    const selfPanel = document.getElementById('panelSelf');
    const topTip = document.getElementById('topTip');
    const discountText = document.getElementById('discountText');
    const totalPrice = document.getElementById('totalPrice');

    if (idx === 1) {
        // 外卖配送：只显示配送面板，隐藏自取
        deliverPanel.classList.add('active');
        selfPanel.classList.remove('active');
        topTip.innerText = "远距离配送，配送费原价上调";
        discountText.innerText = "已优惠 ¥9.5 还有26元红包未洗 >";
        totalPrice.innerText = "¥58.68";
    } else {
        // 到店自取：只显示自取面板，隐藏配送
        deliverPanel.classList.remove('active');
        selfPanel.classList.add('active');
        topTip.innerText = "适量点餐，环保健康";
        discountText.innerText = "";
        totalPrice.innerText = "¥52.88";
    }
}
