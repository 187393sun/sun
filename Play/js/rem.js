window.onresize = function () {
    var ui_w =750;
    var wind_w = document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = (wind_w / ui_w) * 100 + 'px';
};

window.onload = function () {
    var ui_w = 750;
    var wind_w = document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementsByTagName('html')[0].style.fontSize = (wind_w / ui_w) * 100 + 'px';

};