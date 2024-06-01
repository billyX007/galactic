export class LightBox {
  constructor() {
    this.links = document.querySelectorAll(".lightbox-trigger");
    this.lightbox = document.createElement("div");
    this.lightbox_inner = document.createElement("div");
    this.lightbox_loader = document.createElement("span");
    this.lightbox_close = document.createElement("button");
    // this.lightbox_prev = document.createElement( 'button' );
    // this.lightbox_next = document.createElement( 'button' );
    this.lightbox_caption_container = document.createElement("div");
    this.lightbox_caption = document.createElement("div");

    this.current_link_id = 0;

    this.touchstartX = 0;
    this.touchendX = 0;

    this.init();
  }

  init() {
    this.buildLightBox();

    this.lightbox.addEventListener("click", this.handleLightboxClick());
    this.lightbox_close.addEventListener("click", (e) => this.hideLightBox(e));
    // this.lightbox_prev.addEventListener( 'click', this.goToSlideOffset( -1 ) );
    // this.lightbox_next.addEventListener( 'click', this.goToSlideOffset( 1 ) );
    this.lightbox.addEventListener(
      "touchstart",
      this.handleTouchStart(),
      false
    );
    this.lightbox.addEventListener("touchend", this.handleTouchEnd(), false);

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        // Escape
        this.hideLightBox();
      } else if (e.keyCode === 37) {
        // Left
        this.goToSlideOffset(-1)();
      } else if (e.keyCode === 39) {
        // Right
        this.goToSlideOffset(1)();
      }
    });

    window.addEventListener("resize", (e) => this.handleWindowResize(e));

    for (let i = 0; i < this.links.length; i += 1) {
      this.links[i].setAttribute("data-slide-id", i.toString());
      this.links[i].addEventListener(
        "click",
        this.handleLinkClick(this.links[i])
      );
    }
  }

  buildLightBox() {
    this.lightbox.className = "lightbox lightbox--disabled";
    this.lightbox_inner.className = "lightbox__inner";
    this.lightbox_loader.className = "lightbox__loader";
    this.lightbox_close.className = "lightbox__button lightbox__button--close";
    // this.lightbox_prev.className = 'lightbox__button lightbox__button--prev';
    // this.lightbox_next.className = 'lightbox__button lightbox__button--next';
    this.lightbox_caption_container.className = "lightbox__caption";

    this.lightbox_close.setAttribute("aria-label", "Close lightbox");
    // this.lightbox_prev.setAttribute( 'aria-label', 'Previous slide' );
    // this.lightbox_next.setAttribute( 'aria-label', 'Next slide' );

    this.lightbox.appendChild(this.lightbox_inner);
    this.lightbox.appendChild(this.lightbox_loader);
    this.lightbox.appendChild(this.lightbox_close);
    // this.lightbox.appendChild( this.lightbox_prev );
    // this.lightbox.appendChild( this.lightbox_next );
    this.lightbox.insertBefore(
      this.lightbox_caption_container,
      this.lightbox_inner
    );
    this.lightbox_caption_container.appendChild(this.lightbox_caption);
    document.body.insertBefore(this.lightbox, document.body.firstChild);
  }

  handleLightboxClick() {
    return (e) => {
      if (e.target === this.lightbox) {
        this.hideLightBox();
      }
    };
  }

  handleLinkClick(link) {
    return (e) => {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      e.stopPropagation();
      this.current_link_id = parseInt(link.getAttribute("data-slide-id"), 10);
      this.updateLightBoxContent();
      this.showLightBox();
    };
  }

  handleTouchStart() {
    return (e) => {
      this.touchstartX = e.changedTouches[0].screenX;
    };
  }

  handleTouchEnd() {
    return (e) => {
      this.touchendX = e.changedTouches[0].screenX;
      if (this.touchendX + 50 < this.touchstartX) {
        //Swipe left
        this.goToSlideOffset(1)();
      }
      if (this.touchendX - 50 > this.touchstartX) {
        //Swipe right
        this.goToSlideOffset(-1)();
      }
    };
  }

  handleWindowResize() {
    if (this.lightbox.classList.contains("lightbox--disabled")) {
      return;
    }
    this.centreLightBoxContent(this.lightbox_inner.childNodes[0]);
  }

  centreLightBoxContent(content) {
    const window_height =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const max_slide_height = window_height - 80;
    this.lightbox_inner.style.maxWidth = "";
    if (content.offsetHeight > max_slide_height) {
      const aspect_ratio = content.offsetWidth / content.offsetHeight;
      this.lightbox_inner.style.maxWidth =
        (aspect_ratio * max_slide_height).toString() + "px";
    }
    this.lightbox_inner.style.marginTop =
      Math.round((window_height - content.offsetHeight) / 2).toString() + "px";
  }

  updateLightBoxContent() {
    this.lightbox.classList.add("lightbox--loading");
    this.slideFromContent(
      this.links[this.current_link_id].getAttribute("data-lightbox-type"),
      this.links[this.current_link_id].getAttribute("href"),
      (content) => {
        this.clearLightBox();
        this.lightbox_inner.appendChild(content);
        this.centreLightBoxContent(content);
        this.lightbox.classList.remove("lightbox--loading");
      }
    );

    if (
      this.links[this.current_link_id].getAttribute("data-lightbox-caption")
    ) {
      this.lightbox_caption.innerHTML = this.links[
        this.current_link_id
      ].getAttribute("data-lightbox-caption");
      return;
    }
    this.lightbox_caption.innerHTML = "";
  }

  slideFromContent(type, content, loaded_callback) {
    let element;
    switch (type) {
      case "image": {
        element = document.createElement("img");
        element.addEventListener("load", () => {
          loaded_callback(element);
        });
        window.setTimeout(() => {
          element.src = content;
        }, 1);
        break;
      }

      case "video": {
        element = document.createElement("div");
        const video = document.createElement("video");
        element.className = "flex-container";
        element.appendChild(video);
        video.autoplay = "autoplay";
        // video.muted = 'muted';
        video.controls = true;
        video.addEventListener("loadeddata", () => {
          loaded_callback(element);
        });
        window.setTimeout(() => {
          video.src = content;
        }, 1);
        break;
      }

      case "iframe": {
        element = document.createElement("div");
        const iframe = document.createElement("iframe");
        element.className = "flex-container";
        element.appendChild(iframe);
        iframe.frameborder = 0;
        iframe.allowfullscreen = true;
        iframe.src = content;
        loaded_callback(element);
        break;
      }
    }
    return element;
  }

  goToSlideOffset(offset) {
    return () => {
      const new_slide_index =
        (this.links.length + (this.current_link_id + offset)) %
        this.links.length;
      this.current_link_id = new_slide_index;
      this.updateLightBoxContent();
    };
  }

  clearLightBox() {
    this.lightbox_inner.innerHTML = "";
  }

  hideLightBox() {
    this.lightbox.classList.add("lightbox--disabled");
    this.clearLightBox();
  }

  showLightBox() {
    this.lightbox.classList.remove("lightbox--disabled");
  }
}
