var data = [
    {
        song: '绿色',
        singer: '陈雪凝',
        pic: 'imagse/boflogo162x.png',
        url: '绿色.m4a'
    }, {
        song: '可乐',
        singer: '赵紫骅',
        pic: 'imagse/kele2.jpg',
        url: '可乐.m4a'
    }, {
        song: '千与千寻',
        singer: '木村弓',
        pic: 'imagse/qianyu1.jpg',
        url: '千与千寻.m4a'
    }, {
        song: '浪子回头',
        singer: '王玉萌',
        pic: 'imagse/laziht.jpg',
        url: '浪子回头.m4a'
    }

];

var audio = document.querySelector('audio');
var pic = document.querySelector('.wocao');
var song = document.querySelector('.top_play span');
var singer = document.querySelector('.top_massage .singerName');
var start = document.querySelector('.foot_play2 p .start');
var stop = document.querySelector('.foot_play2 p .stop');
var end_time = document.querySelector('.end_time');
var start_time = document.querySelector('.start_time');
var Bar = document.querySelector('.bar');
var total = document.querySelector('.total');
var ctrBar =document.querySelector('.ctr-bar');
var now = document.querySelector('.now');
// 标识当前第几首歌

var index = 0;

var rotateDeg = 0;

var timer;
// audio.play();
// console.log(audio);
function init() {
    // 初始化专辑封面，歌手歌曲
    pic.src = data[index].pic;
    audio.src = data[index].url;
    song.innerHTML = data[index].song;
    singer.innerHTML = data[index].singer;

}

init();

// 播放按钮
function play() {
    clearInterval(timer);
    timer = setInterval(function () {
        rotateDeg++;
        /*pic.style.transform = 'rotate('+ rotateDeg +' deg)' ;*/
        $('.wocao').css('transform', 'rotate(' + rotateDeg + 'deg)');
    }, 30);
    // console.log(rotateDeg);
}

$('.start').on('click', function () {
    audio.play();
    // 播放按扭变成暂停
    play();
    start.style.display = 'none';
    stop.style.display = 'block';
    stop.style.marginRight = .84 + 'rem';
    // 播放音乐
});


// 暂停按扭变成播放


$('.stop').on('click', function () {
    // 暂停音乐
    audio.pause();
    start.style.display = 'block';
    stop.style.display = 'none';
    stop.style.marginRight = .84 + 'rem';
    clearInterval(timer);
});

$('.shang').on('click', function () {
    index = --index < 0 ? data.length - 1 : index;
    // index--;
    // if (index < 0) {
    //     index = data.length - 1;
    // }
    // console.log(index);
    // start.style.display = 'block';
    // stop.style.display = 'none';
    // stop.style.marginRight = .84 + 'rem';

    init();
    audio.play();
});
$('.xia').on('click', function () {
    index = ++index > data.length - 1 ? 0 : index;
    // console.log(index);

    init();
    audio.play();
});


audio.addEventListener('canplay', function () {
    console.log(audio.duration);
    var min = parseInt(audio.duration / 60);
    var se = parseInt(audio.duration % 60);
    // console.log(se);
    // console.log(min);
    end_time.innerHTML = formatTime(min) + ':' + formatTime(se);

    audio.addEventListener('timeupdate', function () {
        var currentMin = parseInt(audio.currentTime / 60);
        var currentSe = parseInt(audio.currentTime % 60);
        start_time.innerHTML = formatTime(currentMin) + ':' + formatTime(currentSe);

        // console.log(audio.currentTime);

         var left = audio.currentTime / audio.duration * Bar .clientWidth;
        ctrBar.style.left =  left + 'px';
        now.style.width =  + left + 'px';
        ctrBar.style.marginLeft = 1 + 'rem';


    });

    total .addEventListener('click', function (e) {
        audio.currentTime = e.offsetX / total .clientWidth * audio.duration;
        console.log(e.offsetX);
        console.log(e.offsetY);


    });


});


function formatTime(time) {
    return time > 9 ? time : '0' + time;
}

// shang.addEventListener('touchstart',function () {
//
// });





