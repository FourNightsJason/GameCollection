var blockHtml = '<div class="block"></div>'
var container = $(".container");
var block = $(".block");
var randomBlock = 0;
var blockFrame = $('.blockFrame');
var nextBlock = $('.blockFrame .block');
var rowAmount = 0;
var score = 0;
var downtimer;
var speed = 500;
down = 15;
left = -1;
right = 1;
begin = 7;
isStart = false;
kind = -1;
tempKind = -1;
style0 = 0;
style1 = 0;
style2 = 0;
style3 = 0;
style4 = 0;
style5 = 0;
style6 = 0;
// style = 0;
// ⬅:37 ⬆:38 ⬅:39 ⬇:40
$(document).keydown(function (e) {
	switch (e.which) {
		case 37:
			pressLeft();
			break;
		case 38:
			pressUp();
			break;
		case 39:
			pressRight();
			break;
		case 40:
			pressDown();
			break;
		case 13:
			// $('.start').click();
			break;
	}
});
// $(document).ready(function () {
// console.log(1);
for (var i = 0; i < 25 * 15; i++) {
	container.html(container.html() + blockHtml);
}
showBlock();
$('.start').click(function () {
	if (!isStart) {
		// if ($('.gameOver').css('display') != 'none') {
		// $('.gameOver').css('display', 'none');
		// container.children().removeClass('black');
		// }
		isStart = true;
		playBlock(kind);
		showBlock();
		paintBlock();
	}
});
$('.reStart').click(function () {
	window.location.reload();
})

function showBlock() {
	blockFrame.width('0');
	blockFrame.height('0');
	blockFrame.css('margin', '0');
	nextBlock.css('top', '0').css('left', '0');
	randomBlock = parseInt(Math.random() * 7);
	switch (randomBlock) {
		case 0:
			blockFrame.width('20px');
			blockFrame.height('80px');
			blockFrame.css('margin', '10px 40px');
			break;
		case 1:
			blockFrame.width('40px');
			blockFrame.height('60px');
			blockFrame.css('margin', '20px 30px');
			nextBlock.each(function () {
				that = $(this);
				switch (that.index()) {
					case 0:
						that.css('top', '0').css('left', '0');
						break;
					case 1:
						that.css('top', '20px').css('left', '-20px');
						break;
					case 2:
					// that.css('top', '20px').css('left', '0');
					// break;
					case 3:
						that.css('top', '20px').css('left', '0');
						break;
				}
			});
			break;
		case 2:
			blockFrame.width('40px');
			blockFrame.height('60px');
			blockFrame.css('margin', '20px 30px');
			nextBlock.each(function () {
				that = $(this);
				switch (that.index()) {
					case 0:
						that.css('top', '0').css('left', '20px');
						break;
					case 1:
					// that.css('top', '20px').css('left', '0');
					// break;
					case 2:
					// that.css('top', '20px').css('left', '0');
					// break;
					case 3:
						that.css('top', '20px').css('left', '0');
						break;
				}
			})
			break;
		case 3:
			blockFrame.width('40px');
			blockFrame.height('60px');
			blockFrame.css('margin', '20px 30px');
			nextBlock.each(function () {
				that = $(this);
				switch (that.index()) {
					case 0:
					// that.css('top', '0').css('left', '0');
					// break;
					case 2:
						that.css('top', '0').css('left', '0');
						break;
					case 1:
					// that.css('top', '20px').css('left', '0');
					// break;
					case 3:
						that.css('top', '20px').css('left', '0');
						break;
				}
			})
			break;
		case 4:
			blockFrame.width('40px');
			blockFrame.height('60px');
			blockFrame.css('margin', '20px 30px');
			nextBlock.each(function () {
				that = $(this);
				switch (that.index()) {
					case 0:
					// that.css('top', '20px').css('left', '0');
					// break;
					case 2:
						that.css('top', '20px').css('left', '0');
						break;
					case 1:
					// that.css('top', '0').css('left', '0');
					// break;
					case 3:
						that.css('top', '0').css('left', '0');
						break;
				}
			})
			break;
		case 5:
			blockFrame.width('40px');
			blockFrame.height('40px');
			blockFrame.css('margin', '30px');
			break;
		case 6:
			blockFrame.width('40px');
			blockFrame.height('60px');
			blockFrame.css('margin', '20px 30px');
			nextBlock.each(function () {
				that = $(this);
				switch (that.index()) {
					case 0:
					// that.css('top', '0').css('left', '0');
					// break;
					case 2:
						that.css('top', '0').css('left', '0');
						break;
					case 1:
						that.css('top', '20px').css('left', '0');
						break;
					case 3:
						that.css('top', '20px').css('left', '-20px');
						break;
				}
			})
	}
	tempKind = randomBlock;
	if (!isStart) {
		kind = tempKind;
	}
	// kind = 1;
	// if (isStart) {
	// playBlock(kind);
	// }
}

function playBlock(kind) {
	blockFrame = $('.blockFrame');
	switch (kind) {
		case 0:
			second = begin + down;
			third = second + down;
			last = third + down;
			judgeLose(begin, second, third, last);
			// if (!$(container.children()[begin]).hasClass('black') &&
			//     !$(container.children()[second]).hasClass('black') &&
			//     !$(container.children()[third]).hasClass('black') &&
			//     !$(container.children()[last]).hasClass('black')) {

			// }
			// $(container.children()[begin]).addClass('black un');
			// $(container.children()[second]).addClass('black un');
			// $(container.children()[third]).addClass('black un');
			// $(container.children()[last]).addClass('black un');
			break;
		case 1:
			second = begin + down;
			third = second + down;
			last = third + right;
			judgeLose(begin, second, third, last);
			// $(container.children()[begin]).addClass('black un');
			// $(container.children()[second]).addClass('black un');
			// $(container.children()[third]).addClass('black un');
			// $(container.children()[last]).addClass('black un');
			break;
		case 2:
			second = begin + down;
			third = second + down;
			last = third + left;
			judgeLose(begin, second, third, last);
			// $(container.children()[begin]).addClass('black un');
			// $(container.children()[second]).addClass('black un');
			// $(container.children()[third]).addClass('black un');
			// $(container.children()[last]).addClass('black un');
			break;
		case 3:
			second = begin + down;
			third = second + right;
			last = third + down;
			judgeLose(begin, second, third, last);
			// $(container.children()[begin]).addClass('black un');
			// $(container.children()[second]).addClass('black un');
			// $(container.children()[third]).addClass('black un');
			// $(container.children()[last]).addClass('black un');
			break;
		case 4:
			second = begin + down;
			third = second + left;
			last = third + down;
			judgeLose(begin, second, third, last);
			// $(container.children()[begin]).addClass('black un');
			// $(container.children()[second]).addClass('black un');
			// $(container.children()[third]).addClass('black un');
			// $(container.children()[last]).addClass('black un');
			break;
		case 5:
			second = begin + right;
			third = second + down;
			last = third + left;
			judgeLose(begin, second, third, last);
			// $(container.children()[begin]).addClass('black un');
			// $(container.children()[second]).addClass('black un');
			// $(container.children()[third]).addClass('black un');
			// $(container.children()[last]).addClass('black un');
			break;
		case 6:
			second = begin + down;
			third = second + right;
			last = third + down + left;
			judgeLose(begin, second, third, last);
	}
}

function paintBlock() {
	// down = 15;
	end = false;
	go = true;
	downtimer = setInterval(function () {
		paint = $('.container .black.un');
		paint.each(function () {
			if (($(container.children()[$(this).index() + down]).hasClass('black')) &&
				!($(container.children()[$(this).index() + down]).hasClass('un'))) {
				container.children().removeClass('un');
				clearInterval(downtimer);
				end = true;
				go = false;
				style0 = 0;
				style1 = 0;
				style2 = 0;
				style3 = 0;
				style4 = 0;
				style5 = 0;
				style6 = 0;
				boom(paint);
				return false;
			}
		});
		if (go) {
			$(paint.toArray().reverse()).each(function () {
				if ($(this).index() / 15 < 24 && !$(container.children()[$(this).index() + down]).hasClass('black')) {
					$(container.children()[$(this).index()]).removeClass('black un');
					$(container.children()[$(this).index() + down]).addClass('black un');
				} else {
					container.children().removeClass('un');
					clearInterval(downtimer);
					end = true;
					style0 = 0;
					style1 = 0;
					style2 = 0;
					style3 = 0;
					style4 = 0;
					style5 = 0;
					style6 = 0;
					boom(paint);
					return false;
				}
			});
		}
		if (end) {
			kind = tempKind;
			playBlock(kind);
			showBlock();
			paintBlock();
		}
	}, speed);
}

function pressLeft() {
	can = true;
	paint = $('.container .black.un');
	paint.each(function () {
		if ((($(container.children()[$(this).index() + left]).hasClass('black')) &&
			!($(container.children()[$(this).index() + left]).hasClass('un'))) ||
			$(this).index() % 15 === 0) {
			can = false;
			return false;
		}
	});
	if (can) {
		paint.each(function () {
			$(container.children()[$(this).index()]).removeClass('black un');
			$(container.children()[$(this).index() + left]).addClass('black un');
		})
	}
}

function pressRight() {
	can = true;
	paint = $('.container .black.un');
	paint.each(function () {
		if ((($(container.children()[$(this).index() + right]).hasClass('black')) &&
			!($(container.children()[$(this).index() + right]).hasClass('un'))) ||
			$(this).index() % 15 === 14) {
			// container.children().removeClass('un');
			can = false;
			return false;
		}
	});
	if (can) {
		$(paint.toArray().reverse()).each(function () {
			$(container.children()[$(this).index()]).removeClass('black un');
			$(container.children()[$(this).index() + right]).addClass('black un');
		})
	}
}

function pressDown() {
	can = true;
	paint = $('.container .black.un');
	paint.each(function () {
		if ((($(container.children()[$(this).index() + down]).hasClass('black')) &&
			!($(container.children()[$(this).index() + down]).hasClass('un'))) ||
			parseInt($(this).index() / 15) === 24) {
			// container.children().removeClass('un');
			can = false;
			return false;
		}
	});
	if (can) {
		$(paint.toArray().reverse()).each(function () {
			$(container.children()[$(this).index()]).removeClass('black un');
			$(container.children()[$(this).index() + down]).addClass('black un');
		})
	}
}

function pressUp() {
	can = true;
	paint = $('.container .black.un');
	n = 0;
	switch (kind) {
		case 0:
			if (style0 === 0) {
				n = $(paint[2]).index();
				// style0 = 1;
			} else if (style0 === 1) {
				n = $(paint[1]).index();
				// style0 = 0;
			}
			if (n % 15 <= 0 || n % 15 >= 13 ||
				($(container.children()[n + 15]).hasClass('black') &&
					(!$(container.children()[n + 15]).hasClass('un'))) ||
				($(container.children()[n - 15]).hasClass('black') &&
					(!$(container.children()[n - 15]).hasClass('un'))) ||
				($(container.children()[n + 1]).hasClass('black') &&
					(!$(container.children()[n + 1]).hasClass('un'))) ||
				($(container.children()[n - 1]).hasClass('black') &&
					(!$(container.children()[n - 1]).hasClass('un'))) ||
				($(container.children()[n + 16]).hasClass('black') &&
					(!$(container.children()[n + 16]).hasClass('un'))) ||
				($(container.children()[n - 14]).hasClass('black') &&
					(!$(container.children()[n - 14]).hasClass('un'))) ||
				($(container.children()[n + 14]).hasClass('black') &&
					(!$(container.children()[n + 14]).hasClass('un'))) ||
				($(container.children()[n - 16]).hasClass('black') &&
					(!$(container.children()[n - 16]).hasClass('un'))) ||
				($(container.children()[n + 2]).hasClass('black') &&
					(!$(container.children()[n + 2]).hasClass('un')))) {
				can = false;
			}
			if (can) {
				$(container.children()[n - 30]).toggleClass('black un');
				$(container.children()[n - 15]).toggleClass('black un');
				$(container.children()[n - 1]).toggleClass('black un');
				$(container.children()[n + 1]).toggleClass('black un');
				$(container.children()[n + 2]).toggleClass('black un');
				$(container.children()[n + 15]).toggleClass('black un');
				if (style0 === 0) {
					style0 = 1;
				} else {
					style0 = 0;
				}
			}
			break;
		case 1:
			if (style1 === 0) {
				n = $(paint[1]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 14]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					$(container.children()[n + 16]).toggleClass('black un');
					style1 = 1;
				}
			} else if (style1 === 1) {
				n = $(paint[1]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 16]).toggleClass('black un');
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 14]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					style1 = 2;
				}
			} else if (style1 === 2) {
				n = $(paint[2]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 16]).toggleClass('black un');
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 14]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					style1 = 3;
				}
			} else if (style1 === 3) {
				n = $(paint[2]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 14]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					$(container.children()[n + 16]).toggleClass('black un');
					style1 = 0;
				}
			}
			break;
		case 2:
			if (style2 === 0) {
				n = $(paint[1]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 16]).toggleClass('black un');
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 14]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					style2 = 1;
				}
			} else if (style2 === 1) {
				n = $(paint[2]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 16]).toggleClass('black un');
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 14]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					style2 = 2;
				}
			} else if (style2 === 2) {
				n = $(paint[2]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 14]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					$(container.children()[n + 16]).toggleClass('black un');
					style2 = 3;
				}
			} else if (style2 === 3) {
				n = $(paint[1]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 14]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
					$(container.children()[n + 16]).toggleClass('black un');
					style2 = 0;
				}
			}
			break;
		case 3:
			if (style3 === 0) {
				n = $(paint[2]).index();
				// style3 = 1;
			} else if (style3 === 1) {
				n = $(paint[3]).index();
				// style3 = 0;
			}
			if (n % 15 <= 0 || n % 15 >= 14 ||
				($(container.children()[n + 15]).hasClass('black') &&
					(!$(container.children()[n + 15]).hasClass('un'))) ||
				($(container.children()[n - 15]).hasClass('black') &&
					(!$(container.children()[n - 15]).hasClass('un'))) ||
				($(container.children()[n + 1]).hasClass('black') &&
					(!$(container.children()[n + 1]).hasClass('un'))) ||
				($(container.children()[n - 1]).hasClass('black') &&
					(!$(container.children()[n - 1]).hasClass('un'))) ||
				($(container.children()[n + 16]).hasClass('black') &&
					(!$(container.children()[n + 16]).hasClass('un'))) ||
				($(container.children()[n - 14]).hasClass('black') &&
					(!$(container.children()[n - 14]).hasClass('un'))) ||
				($(container.children()[n + 14]).hasClass('black') &&
					(!$(container.children()[n + 14]).hasClass('un'))) ||
				($(container.children()[n - 16]).hasClass('black') &&
					(!$(container.children()[n - 16]).hasClass('un')))) {
				can = false;
			}
			if (can) {
				$(container.children()[n - 16]).toggleClass('black un');
				$(container.children()[n - 15]).toggleClass('black un');
				$(container.children()[n - 14]).toggleClass('black un');
				$(container.children()[n + 15]).toggleClass('black un');
				if (style3 === 0) {
					style3 = 1;
				} else {
					style3 = 0;
				}
			}
			break;
		case 4:
			if (style4 === 0) {
				n = $(paint[1]).index();
				// style4 = 1;
			} else if (style4 === 1) {
				n = $(paint[1]).index();
				// style4 = 0;
			}
			if (n % 15 <= 0 || n % 15 >= 14 ||
				($(container.children()[n + 15]).hasClass('black') &&
					(!$(container.children()[n + 15]).hasClass('un'))) ||
				($(container.children()[n - 15]).hasClass('black') &&
					(!$(container.children()[n - 15]).hasClass('un'))) ||
				($(container.children()[n + 1]).hasClass('black') &&
					(!$(container.children()[n + 1]).hasClass('un'))) ||
				($(container.children()[n - 1]).hasClass('black') &&
					(!$(container.children()[n - 1]).hasClass('un'))) ||
				($(container.children()[n + 16]).hasClass('black') &&
					(!$(container.children()[n + 16]).hasClass('un'))) ||
				($(container.children()[n - 14]).hasClass('black') &&
					(!$(container.children()[n - 14]).hasClass('un'))) ||
				($(container.children()[n + 14]).hasClass('black') &&
					(!$(container.children()[n + 14]).hasClass('un'))) ||
				($(container.children()[n - 16]).hasClass('black') &&
					(!$(container.children()[n - 16]).hasClass('un')))) {
				can = false;
			}
			if (can) {
				$(container.children()[n - 14]).toggleClass('black un');
				$(container.children()[n - 1]).toggleClass('black un');
				$(container.children()[n + 1]).toggleClass('black un');
				$(container.children()[n + 16]).toggleClass('black un');
				if (style4 === 0) {
					style4 = 1;
				} else {
					style4 = 0;
				}
			}
			break;
		case 5:
			break;
		case 6:
			if (style6 === 0) {
				n = $(paint[1]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					style6 = 1;
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n - 1]).toggleClass('black un');
				}
			} else if (style6 === 1) {
				n = $(paint[1]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					style6 = 2;
					$(container.children()[n - 15]).toggleClass('black un');
					$(container.children()[n + 1]).toggleClass('black un');
				}
			} else if (style6 === 2) {
				n = $(paint[2]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					style6 = 3;
					$(container.children()[n + 1]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
				}
			} else if (style6 === 3) {
				n = $(paint[2]).index();
				if (n % 15 <= 0 || n % 15 >= 14 ||
					($(container.children()[n + 15]).hasClass('black') &&
						(!$(container.children()[n + 15]).hasClass('un'))) ||
					($(container.children()[n - 15]).hasClass('black') &&
						(!$(container.children()[n - 15]).hasClass('un'))) ||
					($(container.children()[n + 1]).hasClass('black') &&
						(!$(container.children()[n + 1]).hasClass('un'))) ||
					($(container.children()[n - 1]).hasClass('black') &&
						(!$(container.children()[n - 1]).hasClass('un'))) ||
					($(container.children()[n + 16]).hasClass('black') &&
						(!$(container.children()[n + 16]).hasClass('un'))) ||
					($(container.children()[n - 14]).hasClass('black') &&
						(!$(container.children()[n - 14]).hasClass('un'))) ||
					($(container.children()[n + 14]).hasClass('black') &&
						(!$(container.children()[n + 14]).hasClass('un'))) ||
					($(container.children()[n - 16]).hasClass('black') &&
						(!$(container.children()[n - 16]).hasClass('un')))) {
					can = false;
				}
				if (can) {
					style6 = 0;
					$(container.children()[n - 1]).toggleClass('black un');
					$(container.children()[n + 15]).toggleClass('black un');
				}
			}
			break;
	}
}

function boom(finBlock) {
	boomBlock = $('.container .block');
	oneTimeBoom = 0;
	finBlock.each(function () {
		row = parseInt($(this).index() / 15);
		bBlock = $(boomBlock.get(15 * row));
		for (var i = 0; i < 15; i++) {
			if (bBlock.hasClass('black')) {
				if (i < 14) {
					bBlock = bBlock.next();
				} else {
					oneTimeBoom += 1;
					rowAmount += 1;
					$('.rowBoom span').text(rowAmount);
					// console.log(bBlock,'boom');
					fBlock = bBlock;
					for (var j = 0; j < 15; j++) {
						bBlock.removeClass('black');
						bBlock = bBlock.prev();
					}
					// console.log(k);
					k = fBlock.index();
					for (k; k >= 0; k--) {
						if (k / 15 >= 1) {
							if (bBlock.hasClass('black')) {
								fBlock.addClass('black');
								bBlock = bBlock.prev();
								fBlock = fBlock.prev();
							} else {
								fBlock.removeClass('black');
								bBlock = bBlock.prev();
								fBlock = fBlock.prev();
							}
						} else {
							fBlock.removeClass('black');
						}
					}
				}
			} else {
				break;
			}
		}
	});
	switch (oneTimeBoom) {
		case 0:
			break;
		case 1:
			score += 10;
			break;
		case 2:
			score += 30;
			break;
		case 3:
			score += 60;
			break;
		case 4:
			score += 100;
			break;
	}
	speed = 1000 - parseInt(score / 10)
	$('.score span').text(score);
}

function judgeLose(begin, second, third, last) {
	if (!$(container.children()[begin]).hasClass('black') &&
		!$(container.children()[second]).hasClass('black') &&
		!$(container.children()[third]).hasClass('black') &&
		!$(container.children()[last]).hasClass('black')) {
		$(container.children()[begin]).addClass('black un');
		$(container.children()[second]).addClass('black un');
		$(container.children()[third]).addClass('black un');
		$(container.children()[last]).addClass('black un');
	} else {
		$('.gameOver').css('display', 'block');
		$('.boomTip span').text(rowAmount);
		$('.scoreTip span').text(score);
		$('.start').css('display', 'none');
		// clearInterval(downtimer);
		// isStart = false;
		// speed = 1000;
		// rowAmount = 0;
		// score = 0;
		// showBlock();
		// window.location.reload();
	}
}
