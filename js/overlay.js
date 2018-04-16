var elm = document.querySelectorAll('#works > img');
for(var i = 0; i < elm.length; i++){
  elm[i].addEventListener('click', function(){
    console.log(i);
  }, false);
}

/*
imgを全て取り出して、一つずつfor文でイベントを検知（？）して、
その検知した時のimgの次の.overlayをdisplay = "block"にして…
みたいなことをやりたかったけど、iが2になってしまうので、elm[i]がundefinedになる
わけわからん
*/


var obj = document.querySelector('#works > img');
obj.addEventListener('click', function(){
  obj.nextElementSibling.style.display = "block";
  obj.nextElementSibling.firstElementChild.style.display = "block";
  obj.nextElementSibling.firstElementChild.style.margin = "auto";
});

obj.nextElementSibling.addEventListener('click', function(){
  obj.nextElementSibling.style.display = "none";
  obj.nextElementSibling.firstElementChild.style.display = "none";
})

/*
とりあえずひとつめだけに実装してみようとした
display:none;になっているからなのか、margin:auto;が効いていないっぽい？
→じゃあblockにしたあとにmarginもautoにすればいいのでは！？
と思ったら上手くいかない
もう無理…
*/
