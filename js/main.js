(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {


		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
			//console.log(audio);
			//audio.play();

			if (!audio) {return; }

			audio.currentTime = 0;
			audio.play();
			
			let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
			key.classList.add('playing');
	}
	function removePlayingClass(event){
		//debugger;
		if (event.propertyName !-- "transform") {
			return;
		} else {
			//remove the playing class here from the active div
			console.log('transition is done', `${event.propertyName}`);
			event.target.classList.remove('playing')

		}
	}
	const keys = Array.from(document.querySelectorAll('.keys'));
	keys.forEach(key => key.addEventListener("transitioned", removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);
})();
