var btn = document.querySelector('button');
var blk1 = document.querySelector('.black1');
var blk2 = document.querySelector('.black2');
var blk3 = document.querySelector('.black3');
var logo = document.querySelector('.logo');
var main = document.querySelector('.main');
var topplate = document.querySelector('.topplate')
var count = document.querySelector('.count')
var restart = document.querySelector('.restart')
var speed = 5; //速度
var timer = null; //定时器
flag = true;
btn.addEventListener('click', function () {
  btn.style.display = 'none';
  blk1.style.display = 'none';
  blk2.style.display = 'none';
  blk3.style.display = 'none';
  logo.style.display = 'none';
  topplate.style.display = 'block'
  // addqua = setInterval(function () {
  //   createDiv()
  // }, 500)
  move()
})
//创建方块
function createDiv() {
  var row = document.createElement('div');
  row.className = 'row';
  var index = Math.floor(Math.random() * 4);
  // 创建四个方块
  for (var i = 0; i < 4; i++) {
    var div = document.createElement('div');
    if (i == index) {
      div.className = 'color';

    }
    row.appendChild(div);

  }
  // 添加行
  main.insertBefore(row, main.children[0]);

}
// 移动

function move() {
  clearInterval(timer);
  timer = setInterval(function () {
    main.style.top = parseInt(main.offsetTop) + speed + 'px';
    // main top为0 创建一行
    if (parseInt(main.style.top) >= 0) {
      createDiv();
      main.style.top = '-150px'
    }
    //最后一行
    var len = main.children.length;
    if (len == 6) {
      for (var i = 0; i < 4; i++) {
        if (main.children[len - 1].children[i].classList.contains('color')) {
          count.innerHTML = count.innerHTML * 1 + 1
          clearInterval(timer);
          flag = false
        }
      }
      //删除最后一行
      main.removeChild(main.children[len - 1]);

    }
  }, 20)
  divClick();
}

function divClick() {
  main.addEventListener('click', function (event) {
    if (!flag) {
      return;
    }
    var target = event.target;
    if (target.className == 'color') {
      target.style.background = '#bbb';
      target.classList.remove('color');
      count.innerHTML++
    } else {
      // alert('游戏结束，你的得分为：' + num);
      count.innerHTML = count.innerHTML * 1 + 1
      var restart = document.querySelector('.restart');
      restart.style.display = 'block'
      clearInterval(timer);
      flag = false
    }
    if (num % 10 == 0) {
      speed++
    }
  })
}

restart.addEventListener("click", function () {
  count.innerHTML = 0;// 重置得分为0
  flag = true;
  // 清除游戏板上的所有方块
  while (main.firstChild) {
    main.removeChild(main.firstChild);
    clearInterval(timer); // 清除定时器，停止创建方块
    btn.style.display = 'block';
    blk1.style.display = 'block';
    blk2.style.display = 'block';
    blk3.style.display = 'block';
    logo.style.display = 'block';
    topplate.style.display = 'none'
    
  }
})


