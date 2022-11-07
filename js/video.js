




window.onload = function(){

	var video = document.querySelector(".video");
	

	window.addEventListener("load", function() {

		console.log("Good job opening the window");
		video.autoplay = false;
		console.log("Autoplay set to " + video.autoplay);
		video.loop = false;
		console.log("Loop set to " + video.loop)
		
		
	});


	document.querySelector("#play").addEventListener("click", function() {

		console.log("Play Video");
		video.play();

		var slider = document.querySelector("#slider");
		
		console.log("The volume is " + slider.value);
		

		video.volume = slider.value/100;
		document.querySelector("#volume").innerHTML = slider.value + "%";
		
	});
	
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
	
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= .9;
		//video.setAttribute("playbackRate", video.getAttribute("playbackRate") * 0.9);
		console.log("Playback rate is " + video.playbackRate);
	});
	
	
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate *= 1.11111;
		//video.setAttribute("playbackRate", video.getAttribute("playbackRate") * 1.111111);
		console.log("Playback rate is " + video.playbackRate);
	});


	document.querySelector("#skip").addEventListener("click", function() {
		if ((video.currentTime+10)>video.duration){
			video.currentTime = 0;
		}
		else{
			video.currentTime += 10;
		}
		console.log("Current time of video: " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if(video.muted){
			video.muted = false;
		}
		else{
			video.muted = true;
		}
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.className = "video oldSchool"
	});


	document.querySelector("#orig").addEventListener("click", function() {
		video.className = "video"
	});



	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value/100;
		document.querySelector("#volume").innerHTML = this.value + "%";
		//console.log(this.value + "%");
	});

	

}




