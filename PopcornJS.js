var PopcornJS = {
    init: function() {
        this.videoEl = document.getElementById("popcornjs");
        this.uploadEl = document.getElementById("upfile");
        window.addEventListener("change", function() {
            PopcornJS.uploadFile();
        })
        this.setProgressBarWidth = this.setProgressBarWidth.bind(this);
        this.videoEl.addEventListener("timeupdate", PopcornJS.setProgressBarWidth, false);
    },
    play: function() {
        this.videoEl.play();
        console.info("Playing");
    },
    pause: function() {
        this.videoEl.pause();
        console.info("Paused");
    },
    stop: function() {
        this.videoEl.pause();
        this.videoEl.currentTime = 0;
        console.info("Stopped");
    },
    uploadFile: function() {
        var popcornjsVideo = document.getElementById("upfile").files[0];
        var video = window.URL.createObjectURL(popcornjsVideo);
        this.videoEl.src = video;
        console.info("Uploaded");
    },

    setCurrentTime: function(time) {
        this.videoEl.currentTime = time;
    },
    quit: function() {
        PopcornJS.stop();
        this.videoEl.src = "";
        console.info("Stopped PopcornJS. Ready to close.");
        var textQuit1 = document.getElementById("titleQuit1").innerHTML = "<b>You can close your window/tab now. Have a nice day!";
        var textQuit2 = document.getElementById("titleQuit2").innerHTML = "<b>You can check the source code of PopcornJS on <a href='https://github.com/loctauxphilippe/popcornjs'>Github</a>.";
    },
    printTime: function(event) {
        var minutesCurrent = Math.floor(event.currentTime / 60);
        var secondsCurrent = Math.floor(event.currentTime - minutesCurrent * 60);

        var minutesDuration = Math.floor(event.duration / 60);
        var secondsDuration = Math.floor(event.duration - minutesDuration * 60);

        var displayCurrent = minutesCurrent + ":" + secondsCurrent;
        var displayDuration = minutesDuration + ":" + secondsDuration;

        document.getElementById("printVideoTime").innerHTML = "<code>" + displayCurrent + " / " + displayDuration + "</code>"; 
    },
    setProgressBarWidth: function() {
        var whatsTheProgressDoctor = document.getElementById("theProgress");
        var whatsTheValueDoctorPlease = 0;
        whatsTheValueDoctorPlease = Math.floor(100*this.videoEl.currentTime) / this.videoEl.duration;
        whatsTheProgressDoctor.style.width = whatsTheValueDoctorPlease + "%";
    }
    

};

// Section of EventListner

window.addEventListener("load", function() {
    PopcornJS.init();
}, false);


