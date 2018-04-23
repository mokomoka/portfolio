function addEventListenerList(list, event, fn){
	for(var i = 0, len = list.length; i < len; i++){
		list[i].addEventListener(event, fn, false);
	}
}

var elm = document.querySelectorAll('#works > img');
var v = document.getElementsByTagName('video');
addEventListenerList(elm, 'click', function(){
  this.nextElementSibling.style.display = "block";
  this.nextElementSibling.firstElementChild.style.display = "block";
	document.body.style.overflow = "hidden";
  this.nextElementSibling.addEventListener('click', function(){
  	this.style.display = "none";
  	this.firstElementChild.style.display = "none";
		this.firstElementChild.querySelector('video').pause();
		this.firstElementChild.querySelector('video').currentTime = 0;
		document.body.style.overflow = "visible";
  });
});
