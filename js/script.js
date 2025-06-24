function toggleVideo() {
    const desktopVideo = document.querySelector(".desktop-video");
    const mobileVideo = document.querySelector(".mobile-video");
    const icon = document.getElementById("video-icon");
    const video = window.innerWidth <= 767 ? mobileVideo : desktopVideo;

    if (video.paused) {
      video.play();
      icon.classList.remove("bi-play-fill");
      icon.classList.add("bi-pause-fill");
    } else {
      video.pause();
      icon.classList.remove("bi-pause-fill");
      icon.classList.add("bi-play-fill");
    }
  }