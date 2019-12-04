var row = $('.rowContainer');
var count = 0;
var timer = $('.timer');
var changeTime;
var randomBlack = 0;
row.each(function () {
    randomBlack = parseInt(Math.random() * 4);
    $($(this).children()[randomBlack]).addClass('black')
});
// d:100 f:102 j:106 k:107
var pressIndex = -1;
$(document).keypress(function (e) {
    switch (e.which) {
        case 100:
            pressIndex = 0;
            break;
        case 102:
            pressIndex = 1;
            break;
        case 106:
            pressIndex = 2;
            break;
        case 107:
            pressIndex = 3;
            break;
        default:
            pressIndex = -1;
            break;
    }
    if (pressIndex >= 0 && pressIndex <= 3) {
        if($(row.last().children()[pressIndex]).hasClass('black')){
            if(timer.text() === '20.00'){
                timerStart();
            }
            count += 1;
            row.first().before(row.last());
            row.last().children().removeClass('black');
            $(row.last().children()[parseInt(Math.random() * 4)]).addClass('black');
            row = $('.rowContainer');
        }
        else{
            clearInterval(changeTime);
            alert('游戏结束，你的成绩：'+count+'\n点击确定重新开始');
            window.location.reload();
        }
    }
});
function timerStart(){
    changeTime = setInterval(function(){
        timer.text((timer.text()*1-0.01).toFixed(2));
        if(timer.text() === '-0.01'){
            timer.text('0.00');
            clearInterval(changeTime);
            alert('游戏结束，你的成绩：'+count+'\n点击确定重新开始');
            window.location.reload();
        }
    },10);
}