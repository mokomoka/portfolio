function addEventListenerList(list, event, fn){
	for(var i = 0, len = list.length; i < len; i++){
		list[i].addEventListener(event, fn, false);
	}
}

var elm = document.querySelectorAll('#works > img');
addEventListenerList(elm, 'click', function(){
  this.nextElementSibling.style.display = "block";
  this.nextElementSibling.firstElementChild.style.display = "block";
	document.body.style.overflow = "hidden";
  this.nextElementSibling.addEventListener('click', function(){
  	this.style.display = "none";
  	this.firstElementChild.style.display = "none";
		document.body.style.overflow = "visible";
  });
});

/*
imgを全て取り出して、一つずつfor文でイベントを検知（？）して、
その検知した時のimgの次の.overlayをdisplay = "block"にして…
みたいなことをやりたかったけど、iが2になってしまうので、elm[i]がundefinedになる
わけわからん
*/

/*
var obj = document.querySelector('#works > img');
obj.addEventListener('click', function(){
  obj.nextElementSibling.style.display = "block";
  obj.nextElementSibling.firstElementChild.style.display = "block";
});

obj.nextElementSibling.addEventListener('click', function(){
  obj.nextElementSibling.style.display = "none";
  obj.nextElementSibling.firstElementChild.style.display = "none";
});
*/
