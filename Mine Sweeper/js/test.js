var container = $('#container');
// console.log(container);
var column = 10;
var row = 10;
var mine = [];
mine.length = 10;
for (var i = 0; i < row; i++) {
	for (var j = 0; j < column; j++) {
		container.append('<div class="block"></div>');
	}
}
// var sideLength = Math.min(innerWidth / column, innerHeight / row);
// container.css({
// 	width: sideLength * column / innerWidth * 100 + '%',
// 	height: sideLength * row / innerHeight * 100 + '%',
// });
// console.log(container.height(), innerHeight);
// console.log(container.width(), innerWidth);
// $('.block').css({
// 	width: sideLength / container.width() * 100 + '%',
// 	height: sideLength / container.height() * 100 + '%',
// 	textAlign: 'center',
// 	lineHeight: container.he / Math.max(column, row) + 'vmin',
// 	fontSize: container.height() / Math.max(column, row) + 'vmin'
// })
for (var i = 0; i < mine.length; i++) {
	mine[i] = (Math.floor(Math.random() * $('.block').length));
	if (mine.indexOf(mine[i]) !== i) {
		i--;
	}
}
/*
-11	-10	-9
-1	0	1
9	10	11
*/
function showBomb() {
	for (var i = 0; i < mine.length; i++) {
		$('.block').eq(mine[i]).css('backgroundColor', 'black');
	}
}

function isBomb(index) {
	return mine.filter(element => index === element);
}
/*
-11	-10	-9
-1	0	1
9	10	11
*/
var block = $('.block');
block.on('mousedown', function () {
	window.oncontextmenu = function (e) {
		e.preventDefault();
	}
	//box-shadow: -2px -2px 2px gray;
	if ($(this).css('backgroundColor') !== 'rgb(245, 222, 179)') {
		$(this).css('box-shadow', '-3px -3px 3px gray');
	}
	// event.preventDefault();
});
var otherLeft = 0;
block.on('mouseup', function () {
	$(this).css('box-shadow', 'none');
	var that = $(this);
	var bombBeside = 0;
	var testBomb = isBomb(that.index());
	switch (event.which) {
		case 1:
			if (testBomb.length) {
				showBomb();
				that.css('backgroundColor', 'red');
				setTimeout(function () {
					alert('你输了，点击“确定”重新开始');
					location.reload();
				}, 100)
			} else {
				if (that.css('backgroundColor') !== 'rgb(245, 222, 179)') {
					otherLeft++;
					// console.log(otherLeft);
					if (row * column - mine.length <= otherLeft) {
						showBomb();
						setTimeout(function () {
							alert('你获胜了，点击“确认”重新开始');
							location.reload();
						}, 100);
					}
				}
				that.css('backgroundColor', 'wheat');
				if (that.index() % column !== 0) {
					bombBeside = isBomb(that.index() - column - 1).length ? bombBeside + 1 : bombBeside;
					bombBeside = isBomb(that.index() - 1).length ? bombBeside + 1 : bombBeside;
					bombBeside = isBomb(that.index() + column - 1).length ? bombBeside + 1 : bombBeside;
				}
				if (that.index() % column !== column - 1) {
					bombBeside = isBomb(that.index() - column + 1).length ? bombBeside + 1 : bombBeside;
					bombBeside = isBomb(that.index() + 1).length ? bombBeside + 1 : bombBeside;
					bombBeside = isBomb(that.index() + column + 1).length ? bombBeside + 1 : bombBeside;
				}
				bombBeside = isBomb(that.index() + column).length ? bombBeside + 1 : bombBeside;
				bombBeside = isBomb(that.index() - column).length ? bombBeside + 1 : bombBeside;

				if (bombBeside) {
					that.text(bombBeside);
				} else {
					that.text('');
					if (that.index() % column !== 0 && $(block[that.index() - 1]).css('backgroundColor') !== 'rgb(245, 222, 179)') {
						$(block[that.index() - 1]).mousedown();
						$(block[that.index() - 1]).mouseup();
					}
					if (that.index() % column !== 0 && $(block[that.index() - column - 1]).css('backgroundColor') !== 'rgb(245, 222, 179)') {
						$(block[that.index() - column - 1]).mousedown();
						$(block[that.index() - column - 1]).mouseup();
					}
					if (that.index() % column !== 0 && $(block[that.index() + column - 1]).css('backgroundColor') !== 'rgb(245, 222, 179)') {
						$(block[that.index() + column - 1]).mousedown();
						$(block[that.index() + column - 1]).mouseup();
					}
					if (that.index() % column !== column - 1 && $(block[that.index() + 1]).css('backgroundColor') !== 'rgb(245, 222, 179)') {
						$(block[that.index() + 1]).mousedown();
						$(block[that.index() + 1]).mouseup();
					}
					if (that.index() % column !== column - 1 && $(block[that.index() + column + 1]).css('backgroundColor') !== 'rgb(245, 222, 179)') {
						$(block[that.index() + column + 1]).mousedown();
						$(block[that.index() + column + 1]).mouseup();
					}
					if (that.index() % column !== column - 1 && $(block[that.index() - column + 1]).css('backgroundColor') !== 'rgb(245, 222, 179)') {
						$(block[that.index() - column + 1]).mousedown();
						$(block[that.index() - column + 1]).mouseup();
					}
					if (parseInt(that.index() / row) !== 0 && $(block[that.index() - column]).css('backgroundColor') !==
						'rgb(245, 222, 179)') {
						$(block[that.index() - column]).mousedown();
						$(block[that.index() - column]).mouseup();
					}
					if (parseInt(that.index() / row) !== row - 1 && $(block[that.index() + column]).css('backgroundColor') !==
						'rgb(245, 222, 179)') {
						$(block[that.index() + column]).mousedown();
						$(block[that.index() + column]).mouseup();
					}
				}
			}
			break;
		case 2:
			$(this).css('box-shadow', '3px 3px 3px gray');
			break;
		case 3:
			if ($(this).css('backgroundColor') !== 'rgb(245, 222, 179)') {
				if (that.text() === '') {
					that.text('🚩')
				} else if (that.text() === '🚩') {
					that.text('❔')
				} else if (that.text() === '❔') {
					that.text('');
				}
				$(this).css('box-shadow', '3px 3px 3px gray');
			}
			break;
	}
})