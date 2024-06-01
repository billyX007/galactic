export function getWindowHeight() {
  return window.innerHeight || document.documentElement.clientHeight;
}

export function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

export function setupPrevNextBtns(prev, next, embla) {
  prev.addEventListener(
    "click",
    () => {
      embla.scrollPrev();
    },
    false
  );
  next.addEventListener(
    "click",
    () => {
      embla.scrollNext();
    },
    false
  );
}

export function setupDotBtns(dots_array, embla) {
  dots_array.forEach((dot_node, i) => {
    if (dot_node.classList.contains("carousel__pip--selectable")) {
      dot_node.addEventListener("click", () => embla.scrollTo(i), false);
    }
  });
}

export function staggerFadeIn(embla) {
  return () => {
    const slide_nodes = embla.slideNodes();
    const current_slide = slide_nodes[embla.selectedScrollSnap()];
    const prev_slide = slide_nodes[embla.previousScrollSnap()];
    const revealables = current_slide.querySelectorAll(".stagger");
    const prev_revealables = prev_slide.querySelectorAll(".stagger");
    revealables.forEach((revealable, i) => {
      const time = i === 0 ? 500 : 0;
      setTimeout(() => {
        revealable.classList.remove("stagger--hidden");
      }, time);
    });
    prev_revealables.forEach((rerevealable) => {
      rerevealable.classList.add("stagger--hidden");
    });
  };
}

export function selectDotBtn(dots_array, embla) {
  return function () {
    const previous = embla.previousScrollSnap();
    const selected = embla.selectedScrollSnap();
    dots_array[previous].classList.remove("is-selected");
    dots_array[selected].classList.add("is-selected");
  };
}

export function disablePrevNextBtns(prev, next, embla) {
  return () => {
    if (embla.canScrollPrev()) {
      prev.removeAttribute("disabled");
    } else {
      prev.setAttribute("disabled", "disabled");
    }

    if (embla.canScrollNext()) {
      next.removeAttribute("disabled");
    } else {
      next.setAttribute("disabled", "disabled");
    }
  };
}

export function handlUpdateHeading(header, embla) {
  return () => {
    const current_slide = embla.slideNodes()[embla.selectedScrollSnap()];
    const heading = current_slide.dataset.heading;
    header.innerHTML = heading;
  };
}

export function handlePlayVideo(embla, autoplay_videos) {
  return () => {
    const previous_snap = embla.slideNodes()[embla.previousScrollSnap()];
    const current_snap = embla.slideNodes()[embla.selectedScrollSnap()];
    if (
      current_snap.classList.contains(
        "carousel__slide--video_slide" && autoplay_videos
      )
    ) {
      current_snap
        .querySelector(".video-in-slideshow")
        .classList.toggle("video-in-slideshow--paused", false);
      current_snap.querySelector("video").play();
    }
    if (previous_snap.classList.contains("carousel__slide--video_slide")) {
      previous_snap
        .querySelector(".video-in-slideshow")
        .classList.toggle("video-in-slideshow--paused", true);
      previous_snap.querySelector("video").pause();
    }
  };
}

export function handleHPVideo(embla) {
  return () => {
    const previous_snap = embla.slideNodes()[embla.previousScrollSnap()];
    const current_snap = embla.slideNodes()[embla.selectedScrollSnap()];
    if (current_snap.classList.contains("carousel__slide--video")) {
      current_snap.querySelector("video").play();
    }
    if (previous_snap.classList.contains("")) {
      previous_snap.querySelector("video").pause();
    }
  };
}

export function throttle(callback, limit) {
  let tick = false;
  return function () {
    if (!tick) {
      callback.call();
      tick = true;
      setTimeout(() => {
        tick = false;
      }, limit);
    }
  };
}

export function playAutoplayVideos() {
  const videos = document.querySelectorAll("video[autoplay]");
  if (!videos.length) {
    return;
  }
  videos.forEach((video) => {
    if (video.paused || video.ended) {
      video.play();
    }
  });
}

export function loadPipedriveScript() {
  const pipedrive_form = document.querySelector(".pipedriveWebForms");
  if (!pipedrive_form) {
    return;
  }
  const script = document.createElement("script");
  script.src = "https://webforms.pipedrive.com/f/loader";
  script.defer = true;
  document.body.appendChild(script);
}

export function buildThresholdList() {
  const thresholds = [];
  const num_steps = 10;

  for (let i = 1.0; i <= num_steps; i++) {
    const ratio = i / num_steps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

export function getCookie(cookie_name) {
  const location = "; " + document.cookie;
  const parts = location.split("; " + cookie_name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return "";
}

export function setCookie(cookie_name, cookie_value, expires) {
  const cookie_to_json = JSON.stringify(cookie_value);
  document.cookie =
    cookie_name +
    "=" +
    cookie_to_json +
    ";path=/;expires=" +
    expires +
    ";SameSite=Lax;Secure";
}
