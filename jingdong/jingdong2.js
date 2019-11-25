//关键字的轮播切换
var dataArr = ["投影仪家用", "联想笔记本", "婴幼儿奶粉"];
var input = document.getElementById('input');
var insertext = document.getElementById('insertext');
function insertextFun() {
    var last = dataArr.pop();
    var middle = dataArr.unshift(last);
    var first = dataArr.slice(0, 1);
    insertext.innerText = first;
}
setInterval("insertextFun()", 2000);
function inputFocus(value) {
    insertext.style.color = '#d8d1d1';
    insertext.style.display = 'none';
}
function inputBlur(value) {
    insertext.style.color = '#989898';
    insertext.style.display = 'block';
}

//navigationbarli的轮播切换
function navigationli() {
    var container = document.getElementById('navigationbarli');
    container.appendChild(container.firstChild);
}
setInterval("navigationli()", 500);

//文本框有文字时关键字出现，反之关键字消失
input.addEventListener('input', function () {
    a(this.value);
})
function a(val) {
    if (val.length <= 0) {
        insertext.style.display = 'block';
        input.removeEventListener('blur', myFun);
    }
    else {
        insertext.style.display = 'none';
        input.addEventListener('blur', myFun)
    }
}
function myFun() {
    insertext.style.display = 'none';
}

//点击下拉列表的历史纪录会在搜索框中出现
var baseArr = ["短袖", "长袖", "牛仔裤", "卫衣"];
var inputdown = document.getElementById('inputdown');
var inputdown1 = inputdown.children;
input.oninput = function () {
    inputdown.innerHTML = '';
    var value = this.value;
    baseArr.forEach(function (item) {
        if (item.indexOf(value) != -1) {
            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            var a = document.createElement('a');
            var text1 = document.createTextNode(item);
            var text2 = document.createTextNode('搜索历史');
            span1.appendChild(text1);
            span2.appendChild(text2);
            a.appendChild(span1);
            a.appendChild(span2);
            inputdown.appendChild(a);
            for (var i = 0; i < inputdown1.length; i++) {
                inputdown1[i].onmouseover = function () {
                    let inputdown2 = this.lastChild;
                    inputdown2.innerText = '删除';
                    inputdown2.style.color = 'rgb(8, 95, 224)';
                    this.style.backgroundColor = '#f4f4f4';
                }
                inputdown1[i].onmouseout = function () {
                    let inputdown2 = this.lastChild;
                    inputdown2.innerText = '搜素历史';
                    inputdown2.style.color = '#999999';
                    this.style.backgroundColor = 'white';
                }
            }
        }
    })
    if (input.value.length > 0) {
        showdiv();
    }
    else {
        unshowdiv();
    }
}
function showdiv() {//下拉列表出现
    inputdown.style.display = 'block'
}
function unshowdiv() {//下拉列表消失
    inputdown.style.display = 'none'
}
//自动匹配搜索框与下拉列表的值
inputdown.onclick = function () {//
    var e = event.target || event.srcElement;
    var input = document.getElementById('input');
    input.value = e.firstChild.innerText;
    inputdown.style.display = 'none';
}

//oneWrap的menu的样式变化
var menu = document.getElementById('menu');
var menuli = menu.children[0].children;
for (var i = 0; i < menuli.length; i++) {//menu样式变化
    menuli[i].onmouseover = function () {
        let item = this.getElementsByClassName('item')[0];
        item.style.display = 'block';
    }
    menuli[i].onmouseout = function () {
        let item = this.getElementsByClassName('item')[0];
        item.style.display = 'none';
    }
}
//鼠标停留.oneWrap .column上，触发透明度变化，左右轮播按钮出现
var column = document.getElementsByClassName('column')[0];
var btnBox = document.getElementsByClassName('btnBox')[0].children;
var columnImg = column.getElementsByClassName('columnImg')[0].children;
column.onmouseover = function () {
    for (var i = 0; i < columnImg.length; i++) {
        columnImg[i].index = i;
        columnImg[i].onmouseover = function () {
            for (var j = 0; j < columnImg.length; j++) {
                columnImg[j].style.opacity = '1';
            }
            this.style.opacity = '0.8';
        }
    }
    for (var i = 0; i < btnBox.length; i++) {
        btnBox[i].style.display = 'block'
    }
}
column.onmouseout = function () {
    for (var i = 0; i < columnImg.length; i++) {
        columnImg[i].style.opacity = '1';
    }
    for (var i = 0; i < btnBox.length; i++) {
        btnBox[i].style.display = 'none'
    }
}

// 轮播部分代码
var bannerDiv = document.getElementsByClassName('bannerDiv')[0];
var bannerUlNode = document.getElementsByClassName('bannerUl')[0].children;
var lBtn = document.getElementsByClassName('lbtn')[0];
var rBtn = document.getElementsByClassName('rbtn')[0];
var banner = document.getElementsByClassName('banner')[0];
var bannerDivNode = bannerDiv.children;
var twoCount2 = 0;
var twoDolit2 = 0;
var twoTimer3 = null;
twoTimer3 = setInterval(function () {
    twoDolit2++;
    twoCount2++
    changeImg();
    changeDolit3()
}, 2000)
function changeImg() {//切换图片轮播函数
    if (twoCount2 > bannerDivNode.length - 1) {
        twoCount2 = 0;
    }
    else if (twoCount2 <= -1) {
        twoCount2 = bannerDivNode.length - 1;
    }
    for (var i = 0; i < bannerDivNode.length; i++) {
        bannerDivNode[i].style.opacity = '0';
    }
    bannerDivNode[twoCount2].style.opacity = '1'
}
function changeDolit3() {//切换圆点颜色函数
    if (twoDolit2 > bannerUlNode.length - 1) {
        twoDolit2 = 0;
    }
    else if (twoDolit2 <= -1) {
        twoDolit2 = bannerUlNode.length - 1;
    }
    for (var i = 0; i < bannerUlNode.length; i++) {
        bannerUlNode[i].className = '';
    }
    bannerUlNode[twoDolit2].className = 'bannerActive';
}
lBtn.onclick = function () {
    twoDolit2--;
    twoCount2--;
    changeImg();
    changeDolit3();
}
rBtn.onclick = function () {
    twoDolit2++;
    twoCount2++;
    changeImg();
    changeDolit3();
}
banner.onmouseenter = function () {
    clearInterval(twoTimer3);
    console.log('s')
}
banner.onmouseleave = function () {
    twoTimer3 = setInterval(function () {
        twoDolit2++;
        twoCount2++
        changeImg();
        changeDolit3()
    }, 2000)
}
for (var i = 0; i < bannerUlNode.length; i++) {
    bannerUlNode[i].index = i;
    bannerUlNode[i].onmouseenter = function () {
        for (var j = 0; j < bannerUlNode.length; j++) {
            bannerUlNode[j].className = '';
        }
        bannerUlNode[this.index].className = 'bannerActive';
        twoCount2 = this.index;
        twoDolit2 = this.index;
        changeImg();
        changeDolit3()
    }
}
//实现tab的切换
var tabHeaderLi = document.getElementsByClassName('tabHeader')[0].getElementsByTagName('li');
var tabMainList = document.getElementsByClassName('tabMain')[0].children;
for (var i = 0; i < tabHeaderLi.length; i++) {
    tabHeaderLi[i].index = i
    tabHeaderLi[i].onmouseover = function () {
        for (var j = 0; j < tabMainList.length; j++) {
            tabMainList[j].style.display = 'none';
        }
        tabMainList[this.index].style.display = 'block'
    }
}
//鼠标放在话费的图标上话费详细页显示
var siderBottom = document.getElementsByClassName('siderBottom')[0];
var tabBox = document.getElementsByClassName('tabBox')[0];
var tabDel = document.getElementsByClassName('tabDel')[0];
siderBottom.onclick = function () {
    tabBox.style.top = '246px';
    tabBox.style.display = 'block'
}
tabBox.onclick = function () {
    tabBox.style.top = '';
    tabBox.style.display = 'none'
}
tabDel.onclick = function () {
    tabBox.style.display = 'none'
}
//京东秒杀时间跳动
var xiaoshi = document.getElementsByClassName('xiaoshi')[0];
var fenzhong = document.getElementsByClassName('fenzhong')[0];
var miao = document.getElementsByClassName('miao')[0];
window.onload = function () {
    var time = setInterval(function () {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var minutes = checkTime(minute);
        var seconds = checkTime(second);
        xiaoshi.innerHTML = hour;
        fenzhong.innerHTML = minutes;
        miao.innerHTML = seconds
    }, 500)
    function checkTime(i) {
        i = 60 - i;
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
}
//twoSiderM点击方向按钮，向左向右轮播，并且附有防暴力点击效果
var twoBtnL = document.getElementsByClassName('twoBtnL')[0];
var twoBtnR = document.getElementsByClassName('twoBtnR')[0];
var twoSiderMul = document.getElementsByClassName('ulBox')[0];
var twoUl = twoSiderMul.getElementsByTagName('ul');
var twoLi = twoSiderMul.getElementsByTagName('li');
var bannerUl = document.getElementsByClassName('bannerUl')[0];
var bannerUlLi = bannerUl.children;
var clone = twoUl[0].cloneNode(true);
twoSiderMul.appendChild(clone);
var index = 0;
var twoCount = 0;
var twoTimer = null;
var panduan = 0;
twoBtnR.onclick = function () {
    if (panduan == 0) {
        panduan = 1;
        index++;
        if (index > twoUl.length - 1) {
            twoSiderMul.style.left = 0;
            index = 1;
        }
        twoPlay(twoSiderMul, -index * twoUl[0].offsetWidth);
        setTimeout(function () { panduan = 0 }, 2000)//防暴力点击，时间间隔为2000毫秒
    }
}
twoBtnL.onclick = function () {
    index--;
    if (index <= -1) {
        twoSiderMul.style.left = -2400 + 'px';
        index = 2;
    }
    twoPlay(twoSiderMul, -index * twoUl[0].offsetWidth)
}
//封装函数
function twoPlay(obj, st) {
    clearInterval(obj.twoPlay);
    var speed = obj.offsetLeft < st ? 3 : -3;
    obj.twoPlay = setInterval(function () {
        var result = st - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + 'px';
        if (Math.abs(result) <= 3) {
            obj.style.left = st + 'px';
            clearInterval(obj.twoPlay)
        }
    }, 5)
}
function changeDolit2() {
    for (var i = 0; i < bannerUlLi.length; i++) {
        bannerUlLi[i].className = ''
    }
    bannerUlLi[index].className = 'bannerActive'
}
//twoSiderR轮播部分
var twoBoxList = document.getElementsByClassName('twoBoxList')[0];
var twoClone = twoBoxList.children[0].cloneNode(true);
var twoWidth = twoBoxList.children[0].offsetWidth;
var twoDolit = document.getElementsByClassName('twoDolit')[0];
var twoDolitLi = twoDolit.children;
var twoSiderR = document.getElementsByClassName('twoSiderR')[0];
twoBoxList.appendChild(twoClone);
var twoIndex = 0;
var dolitIndex = 0;
var twoTimer2 = null;
//自动运行函数
twoTimer2 = setInterval(function () {
    twoMove()
    changeDolit()
}, 2000)
function twoMove() {//图片轮播函数
    twoIndex++;
    if (twoIndex >= twoBoxList.children.length) {
        twoIndex = 1;
        twoBoxList.style.left = 0 + 'px'
    }
    fiveMove(twoBoxList, -twoIndex * twoBoxList.children[0].offsetWidth)
}
//运行函数
function fiveMove(name, distance) {
    clearInterval(name.twoTimer2)
    var twoSpeed = name.offsetLeft < distance ? 5 : -5;
    name.twoTimer2 = setInterval(function () {
        var fiveResult = distance - name.offsetLeft;
        name.style.left = name.offsetLeft + twoSpeed + 'px';
        if (Math.abs(fiveResult) <= 5) {
            clearInterval(name.twoTimer2)
            name.style.left = distance + 'px';
        }
    }, 10)
}
function changeDolit() {//封装圆点颜色切换函数
    dolitIndex++;
    if (dolitIndex > twoDolit.children.length - 1) {
        dolitIndex = 0;
    }
    for (var i = 0; i < twoDolit.children.length; i++) {
        twoDolit.children[i].style.backgroundColor = 'gray'
    }
    twoDolit.children[dolitIndex].style.backgroundColor = 'red'
}
for (var i = 0; i < twoDolitLi.length; i++) {
    twoDolitLi[i].index = i;
    twoDolitLi[i].onmouseover = function () {
        for (var j = 0; j < twoDolitLi.length; j++) {
            twoDolitLi[j].style.backgroundColor = 'gray';
        }
        this.style.backgroundColor = 'red';
        console.log(twoIndex)
        dolitIndex = this.index;
        if (twoIndex == twoBoxList.children.length - 1) {
            console.log(twoIndex)
            console.log(dolitIndex)
            if (dolitIndex == 1) {
                twoBoxList.style.left = 0 + 'px';
                twoIndex = 1;
                twoMove();
            }
            else {
                return false;
            }
        }
        twoIndex = this.index - 1;
        twoMove();
    }
}
twoSiderR.onmouseenter = function () {
    clearInterval(twoTimer2)
}
twoSiderR.onmouseleave = function () {
    twoTimer2 = setInterval(function () {
        twoMove()
        changeDolit()
    }, 2000)
}
//Tab选项卡的切换
var threeA = document.getElementsByClassName('threeLHR')[0].getElementsByTagName('a');
var threeBox = document.getElementsByClassName('threeLMain')[0].children;
for (var i = 0; i < threeA.length; i++) {
    threeA[i].index = i;
    threeA[i].onmouseover = function () {
        for (var j = 0; j < threeA.length; j++) {
            threeA[j].style.color = 'gray';
            threeA[j].style.fontWeight = 'normal';
            threeBox[j].style.display = 'none';
        }
        this.style.color = '#e1251b';
        this.style.fontWeight = '700';
        threeBox[this.index].style.display = 'block';
    }
}
//fourBanner图片轮播，进度条轮播，鼠标放在轮播图上进度条出现
var fourBanner = document.getElementsByClassName('fourBanner')[0];
var fourList = document.getElementsByClassName('fourList')[0];
var bannerLine = document.getElementsByClassName('bannerLine')[0];
var bannerLineSpan = bannerLine.getElementsByTagName('span')[0];
var fourClone = fourList.children[0].cloneNode(true);
fourList.appendChild(fourClone);
var fourTimer = null;
var maxSpan = bannerLine.offsetWidth - bannerLineSpan.offsetWidth;
var maxDiv = fourList.offsetWidth - fourList.children[0].offsetWidth;
function getStyle(obj, attr) {
    return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr])
}

//拖动流动条事件
bannerLineSpan.onmousedown = function (e) {
    clearInterval(this.fourTimer)
    var e = e || window.event;
    var innerLeft = e.clientX - this.offsetLeft;
    document.onmousemove = function (e) {
        clearInterval(fourTimer)
        var e = e || window.event;
        var toLeft = e.clientX - innerLeft;
        if (toLeft <= 0) {
            toLeft = 0;
        }
        else if (toLeft >= maxSpan) {
            toLeft = maxSpan
        }
        togetherMove(toLeft);
        console.log(toLeft)
        bannerLine.style.display = 'block';
        return false;
    }
    document.onmouseup = function () {
        clearInterval(fourTimer)
        document.onmousemove = null;
        fourTimer = setInterval(function () {
            togetherMove(getStyle(bannerLineSpan, 'left') + speed);
        }, 20)
    }
    bannerLineSpan.onclick = function () {
        clearInterval(fourTimer)
    }
}

//阻止流动条点击事件冒泡
bannerLineSpan.onclick = function (e) {
    (e || window.event).cancelBubble = true;
}

//流动条自动轮播事件
var speed = 0.29;
fourTimer = setInterval(function () {
    togetherMove(getStyle(bannerLineSpan, 'left') + speed);
}, 20)

function togetherMove(disL) {
    var iScale = disL / maxSpan;
    var fourListLeft = maxDiv * iScale;
    if (disL < 0) {
        disL = maxSpan;
    }
    else if (disL > maxSpan) {
        disL = 0;
    }
    bannerLineSpan.style.left = disL + 'px';
    fourList.style.left = -fourListLeft + 'px';
}
//鼠标放上fourBanner时停止轮播，进度条消失，鼠标离开则复原
fourBanner.onmouseover = function () {
    clearInterval(fourTimer);
    bannerLine.style.display = 'block';
}
fourBanner.onmouseout = function () {
    clearInterval(fourTimer)
    fourTimer = setInterval(function () {
        togetherMove(getStyle(bannerLineSpan, 'left') + speed);
    }, 20)
    bannerLine.style.display = 'block';
}
//鼠标放在图片上透明度发生变化
var fourLi = document.querySelectorAll('.fourList>ul>li>img');
for (var i = 0; i < fourLi.length; i++) {
    fourLi[i].index = i;
    fourLi[i].onmouseover = function () {
        for (var j = 0; j < fourLi.length; j++) {
            fourLi[j].style.opacity = '1'
        }
        this.style.opacity = '0.7';
    }
}
//fiveWrap部分
var fiveBox = document.getElementsByClassName('fiveBox')[0];
var fiveTimer = null;
var fiveCount = 0;
var fiveDolit = 0;
var fiveClone = fiveBox.children[0].cloneNode(true);
fiveBox.appendChild(fiveClone);
fiveBox.style.width = fiveBox.children[0].offsetWidth * fiveBox.children.length + 'px';
fiveTimer = setInterval(function () {
    fiveAutoPlay1();
}, 2000)
//点击轮播方向按钮进行轮播
var findBtnL = document.getElementsByClassName('findBtnL')[0];
var findBtnR = document.getElementsByClassName('findBtnR')[0];
var fiveLi = document.querySelectorAll('.findDolt>ul>li');
findBtnR.onclick = function () {
    fiveCount++;
    fiveDolit++;
    if (fiveDolit == 3 || fiveDolit == 0) {
        fiveDolit = 0
    }
    if (fiveCount >= fiveBox.children.length) {
        fiveCount = 1;
        fiveBox.style.left = 0 + 'px'
    }
    for (var i = 0; i < fiveLi.length; i++) {
        fiveLi[i].style.backgroundColor = 'gray';
        fiveLi[fiveDolit].style.backgroundColor = 'red'
    }
    fiveMove(fiveBox, -fiveCount * fiveBox.children[0].offsetWidth);
}
findBtnL.onclick = function () {
    fiveCount--;
    fiveDolit--;
    if (fiveDolit == -1) {
        fiveDolit = 2
    }
    if (fiveCount <= -1) {
        fiveCount = 2;
        fiveBox.style.left = -fiveBox.children[0].offsetWidth * (fiveBox.children.length - 1) + 'px'
    }
    for (var i = 0; i < fiveLi.length; i++) {
        fiveLi[i].style.backgroundColor = 'gray';
        fiveLi[fiveDolit].style.backgroundColor = 'red'
    }
    fiveMove(fiveBox, -fiveCount * fiveBox.children[0].offsetWidth);
}
//自动运行函数
function fiveAutoPlay1() {
    fiveCount++;
    fiveDolit++;
    if (fiveCount >= fiveBox.children.length) {
        fiveCount = 1;
        fiveBox.style.left = 0 + 'px'
    }
    if (fiveDolit == 3 || fiveDolit == 0) {
        fiveDolit = 0;
    }
    for (var i = 0; i < fiveLi.length; i++) {
        fiveLi[i].style.backgroundColor = 'gray';
        fiveLi[fiveDolit].style.backgroundColor = 'red'
    }
    fiveMove(fiveBox, -fiveCount * fiveBox.children[0].offsetWidth)
}
//运行函数
function fiveMove(name, distance) {
    clearInterval(name.fiveTimer)
    var fiveSpeed = name.offsetLeft < distance ? 5 : -5;
    name.fiveTimer = setInterval(function () {
        var fiveResult = distance - name.offsetLeft;
        name.style.left = name.offsetLeft + fiveSpeed + 'px';
        if (Math.abs(fiveResult) <= 5) {
            clearInterval(name.fiveTimer)
            name.style.left = distance + 'px';
        }
    }, 10)
}
//鼠标放在圆点上触发图片相应轮播且样式发生变化
for (var i = 0; i < fiveLi.length; i++) {
    fiveLi[i].index = i;
    fiveLi[i].onmouseover = function () {
        for (var j = 0; j < fiveLi.length; j++) {
            fiveLi[j].style.backgroundColor = 'gray';
        }
        this.style.backgroundColor = 'red';
        fiveDolit = this.index;
        if (fiveCount == 3) {
            if (fiveDolit == 1 || fiveDolit == 2) {
                fiveCount = this.index;
                fiveBox.style.left = 0 + 'px';
                fiveDolit++;
                fiveMove(fiveBox, -fiveCount * fiveBox.children[0].offsetWidth)
            }
            else if (fiveDolit == 0) {
                fiveBox.style.left = -fiveBox.children[0].offsetWidth * 3 + 'px';
            }
        }
        else {
            fiveDolit = this.index;
            fiveCount = this.index;
            fiveMove(fiveBox, -fiveCount * fiveBox.children[0].offsetWidth)
        }
    }
}