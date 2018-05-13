var v = document.getElementsByTagName('video');
for(var i=0; i < v.length; i++){
	v[i].volume = 0.3;
  v[i].currentTime = 0;
}

window.addEventListener('load', function(){
	var navElm = document.querySelectorAll('nav > ul > li');
	var scrollElm = document.querySelectorAll('.contents');
	scrollElm = Array.prototype.slice.call(scrollElm);
	navElm[0].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('#main').scrollIntoView({behavior: 'smooth', block: 'start'});
	});
	navElm.forEach(function(elm, index){
		elm.addEventListener('click', function(e) {
			e.preventDefault();
			if(index != 0){
				scrollElm[index - 1].scrollIntoView({behavior: 'smooth', block: 'start'});
			}
		});
	});

	/*
	navElm[1].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('#profile').scrollIntoView({behavior: 'smooth'});
	});
	navElm[2].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('#works').scrollIntoView({behavior: 'smooth'});
	});
	navElm[3].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('#link').scrollIntoView({behavior: 'smooth'});
	});
	navElm[4].addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('#extra').scrollIntoView({behavior: 'smooth'});
	});
	*/
});
