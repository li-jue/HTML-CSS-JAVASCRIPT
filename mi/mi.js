var hdShopItem = document.getElementsByClassName('hdShopItem')[0];
var hdShop = document.getElementsByClassName('hdShop')[0];
var hdShopBox = document.getElementsByClassName('hdShopBox')[0];
hdShop.onmouseenter = function () {
    hdShopBox.style.backgroundColor = 'white'
    hdShopItem.style.height = '95px';
    hdShopBox.style.color = 'orange'
    hdShopBox.children[0].style.color = 'orange'
}
hdShop.onmouseleave = function () {
    hdShopItem.style.height = 0 + 'px';
    setTimeout(function () {
        hdShopBox.style.color = ''
        hdShopBox.children[0].style.color = ''
        hdShopBox.style.backgroundColor = ''
    }, 300)
}
//鼠标触发搜索框样式
var mainSearch = document.getElementsByClassName('mainSearch')[0];
mainSearch.onmouseenter = function () {
    mainSearch.children[0].style.borderColor = '#BBB'
    mainSearch.children[1].style.borderColor = '#BBB'
    mainSearch.children[0].style.transition = '0.3s'
    mainSearch.children[1].style.transition = '0.3s'
    mainSearch.children[2].onmouseenter = function () {
        this.style.backgroundColor = '#ff6700';
        this.style.color = 'white';
        this.style.transition = '0.2s'
    }
    mainSearch.children[2].onmouseleave = function () {
        this.style.backgroundColor = ''
        this.style.color = ''
    }
    mainSearch.children[3].onmouseenter = function () {
        this.style.backgroundColor = '#ff6700';
        this.style.color = 'white';
        this.style.transition = '0.2s'
    }
    mainSearch.children[3].onmouseleave = function () {
        this.style.backgroundColor = ''
        this.style.color = ''
    }
}
mainSearch.children[1].onmouseenter = function () {
    this.style.backgroundColor = '#ff6700'
    this.style.color = 'white';
    this.style.transition = '0.2s'
}
mainSearch.children[1].onmouseleave = function () {
    this.style.backgroundColor = ''
    this.style.color = ''
}
mainSearch.onmouseleave = function () {
    mainSearch.children[0].style.borderColor = ''
    mainSearch.children[1].style.borderColor = ''
}
mainSearch.children[0].onfocus = function () {
    mainSearch.children[0].style.borderColor = '#ff6700'
    mainSearch.children[1].style.borderColor = '#ff6700'
    mainSearch.children[2].style.display = 'none'
    mainSearch.children[3].style.display = 'none';
    mainSearch.onmouseleave = false;
    mainSearch.onmouseenter = false;
}
mainSearch.children[0].onblur = function () {
    mainSearch.children[0].style.borderColor = ''
    mainSearch.children[1].style.borderColor = ''
    mainSearch.children[2].style.display = 'block'
    mainSearch.children[3].style.display = 'block';
    mainSearch.onmouseenter = function () {
        mainSearch.children[0].style.borderColor = 'black'
        mainSearch.children[1].style.borderColor = 'black';
        mainSearch.children[0].style.transition = '0.2s'
        mainSearch.children[1].style.transition = '0.2s'
    }
    mainSearch.onmouseleave = function () {
        mainSearch.children[0].style.borderColor = ''
        mainSearch.children[1].style.borderColor = ''
    }
}
//header二级导航栏，鼠标放在二级导航栏上触发三级导航栏下拉
var headerLi = document.querySelectorAll('.subNav>ul>li');
var headerUl = document.querySelector('.subNav>ul')
var headerA = document.querySelectorAll('.subNav>ul>li>a');
var subNavItem = document.querySelectorAll('.subNavItem');
var headerBottom = document.getElementsByClassName('headerBottom')[0]
for (var i = 0; i < headerLi.length; i++) {
    headerLi[i].index = i;
    headerLi[i].onmouseenter = function () {
        for (var j = 0; j < subNavItem.length; j++) {
            headerA[j].style.color = 'black';
            subNavItem[j].style.height = '0px'
            subNavItem[j].style.borderTop = '';
            subNavItem[j].style.transition = 'all 0s';
            subNavItem[j].style.display = 'none';
        }
        headerA[this.index].style.color = 'red';
        subNavItem[this.index].style.height = '221px';
        subNavItem[this.index].style.transition = 'all 0.5s';
        subNavItem[this.index].style.borderTop = '1px solid rgba(0,0,0,.18)';
        subNavItem[this.index].style.display = 'block';
    }
}
headerUl.onmouseleave = function () {
    for (var j = 0; j < subNavItem.length; j++) {
        headerA[j].style.color = 'black';
        subNavItem[j].style.height = '0px';
        subNavItem[j].style.display = 'block'
    }
    setTimeout(function () {
        for (var i = 0; i < subNavItem.length; i++) {
            this.index = i
            subNavItem[this.index].style.borderTop = '0px';
        }
    }, 500)
}
//图片轮播，点击，自动，触摸圆点轮播
var pic = document.getElementsByClassName('pic')[0];
var mainBtnL = document.getElementsByClassName('mainBtnL')[0];
var mainBtnR = document.getElementsByClassName('mainBtnR')[0];
var picLiWidth = pic.children[0].offsetWidth;
var picLi = pic.children;
var subBanner = document.getElementsByClassName('subBanner')[0];
var dolit = document.getElementsByClassName('dolit')[0];
var mainIndex = 0;
var timer = null;
//封装轮播函数
mainBtnR.onclick = function () {
    mainIndex++;
    changeImg();
    changeDolit();
}
mainBtnL.onclick = function () {
    mainIndex--;
    changeImg();
    changeDolit();
}
for (var i = 0; i < dolit.children.length; i++) {
    dolit.children[i].index = i;
    dolit.children[i].onmouseenter = function () {
        mainIndex = this.index;
        changeImg();
        changeDolit();
    }
}
subBanner.onmouseenter = function () {
    clearInterval(timer)
}
subBanner.onmouseleave = function () {
    timer = setInterval(function () {
        mainIndex++;
        changeImg();
        changeDolit();
    }, 2000)
}
timer = setInterval(function () {
    mainIndex++;
    changeImg();
    changeDolit();
}, 2000)
function changeImg() {
    if (mainIndex > picLi.length - 1) {
        mainIndex = 0;
    }
    else if (mainIndex < 0) {
        mainIndex = picLi.length - 1;
    }
    for (var i = 0; i < picLi.length; i++) {
        picLi[i].style.opacity = '0'
    }
    picLi[mainIndex].style.opacity = '1'
}
function changeDolit() {
    for (var i = 0; i < dolit.children.length; i++) {
        dolit.children[i].style.backgroundColor = 'black'
    }
    dolit.children[mainIndex].style.backgroundColor = 'white'
}
//鼠标放在侧边导航栏之上，触发对应子栏目的出现
var sideNavLi = document.getElementsByClassName('sideNavUl')[0].children;
var sideNavUl = document.getElementsByClassName('sideNavUl')[0];
var miDiv = document.getElementsByClassName('sideNav')[0].getElementsByClassName('sideNavItem')[0];
var sideNavItem = document.getElementsByClassName('sideNavUl')[0].getElementsByClassName('sideNavItem');
for (var i = 0; i < sideNavLi.length; i++) {
    sideNavLi[i].index = i;
    sideNavLi[i].onmouseenter = function () {
        for (var j = 0; j < sideNavItem.length; j++) {
            sideNavItem[j].style.display = 'none';
        }
        sideNavItem[this.index].style.display = 'block'
    }
    sideNavLi[i].onmouseleave = function () {
        for (var j = 0; j < sideNavItem.length; j++) {
            sideNavItem[j].style.display = 'none';
        }
    }
}
//倒计时
var span = document.getElementsByClassName('miMainUl')[0].getElementsByTagName('span')
window.onload = function () {
    var time = setInterval(function () {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var hours = changeTime(hour);
        var minutes = changeTime(minute);
        var seconds = changeTime(second);
        span[0].innerHTML = hours;
        span[2].innerHTML = minutes;
        span[4].innerHTML = seconds;
    }, 500)
    function changeTime(i) {
        i = 60 - i;
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
}
//小米闪购轮播
var miIndex = 0;
var miBannerUl = document.getElementsByClassName('miBannerUl')[0];
var miBtn = document.getElementsByClassName('miBtn')[0];
miBannerUl.style.width = miBannerUl.children[0].offsetWidth * miBannerUl.children.length + 'px'
miBtn.children[1].onclick = function () {
    miIndex++;
    miPlay(miIndex);
    console.log(miBannerUl.children[0].offsetWidth)
}
miBtn.children[0].onclick = function () {
    miIndex--;
    miPlay(miIndex);
}
function miPlay(a) {
    if (miIndex > miBannerUl.children.length - 1) {
        miIndex = miBannerUl.children.length - 1;
    }
    else if (miIndex < 0) {
        miIndex = 0;
    }
    miBannerUl.style.left = -miIndex * miBannerUl.children[0].offsetWidth + 'px';
}
//Tab切换
var aroundTap = document.getElementsByClassName('aroundTap')[0].getElementsByTagName('li');
var amRBox = document.getElementsByClassName('amRBox')[0].children;
for (var i = 0; i < aroundTap.length; i++) {
    aroundTap[i].index = i;
    aroundTap[i].onmouseenter = function () {
        for (var j = 0; j < aroundTap.length; j++) {
            amRBox[j].style.zIndex = '9';
        }
        amRBox[this.index].style.zIndex = '10'
    }
}
