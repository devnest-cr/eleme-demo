// 返回上一页（回到我的页面 my.html）
function goBack() {
    window.history.back();
}

// 标签切换：红包 / 券
function switchTab(idx) {
    // 切换标签高亮
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach((item, i) => {
        item.classList.toggle('active', i + 1 === idx);
    });
    // 切换内容面板
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(item => item.classList.remove('active'));
    if (idx === 1) {
        document.getElementById('tabRed').classList.add('active');
    } else if (idx === 2) {
        document.getElementById('tabCoupon').classList.add('active');
    }
}
