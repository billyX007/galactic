const { breakpoints } = require("../../variables.yml");

// import "focus-visible";
const EmblaCarousel = require("embla-carousel");
const Autoplay = require("embla-carousel-autoplay");
const ClassNames = require("embla-carousel-class-names");
const {
  setupPrevNextBtns,
  disablePrevNextBtns,
  setupDotBtns,
  selectDotBtn,
  handlePlayVideo,
  handleHPVideo,
  throttle,
  staggerFadeIn,
  handlUpdateHeading,
  playAutoplayVideos,
  loadPipedriveScript,
  buildThresholdList,
  getWindowWidth,
  getCookie,
  setCookie,
} = require("./helpers.js");

const Swiper = require("swiper/bundle");

const barba = require("@barba/core");

const { slideY, revealAll, fadeOut, fadeIn } = require("./animations.js");
const { LightBox } = require("./vendor/Lightbox.js");
const { NavHandler } = require("./vendor/NavHandler.js");

// export * from "./CookieConsentManager.js";

(() => {
  // Barba
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer--base");
  const back_to_top_button = document.querySelector(".back-to-top-button");
  const duration = 500;
  const scroll_pos_y = [0];

  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }

  // Global hooks
  console.log(barba);
  barba.hooks.once((data) => {
    revealAll(data.next);
    handleFilter();
    handleReadMore();
    if (data.next.namespace === "home") {
      handleHpSlideshows(data.next);
    }
  });
  barba.hooks.before(async (data) => {
    await new Promise((resolve) => {
      if (data.current.namespace === "home") {
        window.scrollTo(0, 0);
        setTimeout(resolve, 500);
      } else {
        resolve();
      }
    });
    closeNav();
    barba.wrapper.classList.add("is-animating");
  });

  barba.hooks.enter((data) => {
    if (data.trigger !== "back") {
      scroll_pos_y.push(barba.history.current.scroll.y);
    }
    handleNavAndFooter(data);
    handleCookieBanner(data);
    handleBodyClass(data);
    window.dispatchEvent(new Event("newpageload"));
  });

  barba.hooks.after((data) => {
    if (data.trigger !== "back") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, scroll_pos_y.pop());
    }
    barba.wrapper.classList.remove("is-animating");
    sendVirtualPageView(data.next.url.path, document.title);
    revealAll(data.next);
    playAutoplayVideos();
    loadPipedriveScript();
    handleFilter();
    handleReadMore();
    if (data.next.namespace === "home") {
      handleHpSlideshows(data.next);
    }
    barba.wrapper.classList.remove(data.current.namespace);
    barba.wrapper.classList.add(data.next.namespace);
    if (data.next.namespace == "contact") {
      loadTypeformScripts();
    }
  });

  // Init
  barba.init({
    debug: true,
    transitions: [
      {
        name: "default",
        leave({ current }) {
          fadeOut(current.container, duration);
        },
        enter({ next }) {
          fadeIn(next.container, duration);
        },
      },
      {
        name: "home",
        to: {
          namespace: "home",
        },
        once: ({ next }) => revealAll(next),
      },
      {
        name: "to-project",
        sync: true,
        to: {
          namespace: ["project_archive"],
        },
        enter: ({ next }) => slideY(next.container, duration, 100, 0),
      },
      {
        name: "project-close",
        sync: true,
        from: {
          namespace: ["project_archive", "case_study"],
        },
        to: {
          namespace: ["architecture", "index"],
        },
        leave: ({ current }) => slideY(current.container, duration, 0, 100),
        beforeEnter({ next }) {
          next.container.style.zIndex = -1;
        },
        afterEnter({ next }) {
          next.container.style.zIndex = 0;
        },
      },
    ],
  });

  function loadTypeformScripts() {
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.setAttribute("src", "//embed.typeform.com/next/embed.js");
      script.onload = resolve;
      document.head.appendChild(script);

      const cssLink = document.createElement("link");
      cssLink.setAttribute("rel", "stylesheet");
      cssLink.setAttribute("href", "//embed.typeform.com/next/css/slider.css");
      document.head.appendChild(cssLink);
    }).then(() => {
      window.tf.load();
    });
  }

  function closeNav() {
    document.body.classList.toggle("nav-open", false);
  }

  function handleNavAndFooter(data) {
    // Reset header & footer
    header.classList = "header";
    footer.classList = "footer footer--base";

    // Handle header/footer display
    if (data.next.namespace === "project_archive") {
      header.classList.add("header--hidden");
      footer.classList.add("footer--hidden");
      return;
    }
    if (
      data.next.namespace === "case_study" ||
      data.next.namespace === "services"
    ) {
      header.classList.add("header--invert");
    }
    if (data.next.namespace === "home") {
      header.classList.add("header--logo-hidden");
      footer.classList.add("footer--hidden");
      header.classList.add("header--invert");
    }
  }

  function handleCookieBanner(data) {
    if (data.next.url.path === "/legal/cookies") {
      document.body.classList.toggle("cookie-manager-open", false);
    } else if (!getCookie("ten4_cookie_consent")) {
      document.body.classList.toggle("cookie-manager-open", true);
    }
  }

  function handleBodyClass(data) {
    document.body.classList.toggle("home", data.next.namespace === "home");
  }

  function getCookie(cname) {
    const name = cname + "=";
    const decoded_cookie = decodeURIComponent(document.cookie);
    const ca = decoded_cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function sendVirtualPageView(path, title) {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "PageView",
        virtualPagePath: path,
        virtualPageTitle: title,
      });
    }
  }

  function handleHpSlideshows(next) {
    const scroll_container = next.container.querySelector(".scroll-container");
    const hp_sections = next.container.querySelectorAll(
      ".scroll-container__section"
    );
    if (!scroll_container && !hp_sections) {
      return;
    }

    back_to_top_button.addEventListener("click", () => {
      scroll_container.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    const main_nav = next.container.querySelector(".header");
    const nav = next.container.querySelector(".carousel-nav");
    const nav_scroll_container = nav.querySelector(".carousel-nav__ul");
    const nav_items = next.container.querySelectorAll(".carousel-nav__item");
    const section_ids = [
      "cgis-animations-cinemagraphs",
      "digital-twins",
      "marketing-films",
      "realspace",
      "virtual-showrooms",
      "virtual-tours",
    ];

    hp_sections.forEach((section) => {
      const carousel = section.querySelector(".hp-carousel");

      if (carousel) {
        const viewport = carousel.querySelector(".hp-carousel__viewport");
        const prev = carousel.querySelector(".carousel__button--prev");
        const next = carousel.querySelector(".carousel__button--next");

        const setup_click_event = (carousel) => {
          const root_node = carousel.rootNode();
          root_node.addEventListener("click", root_node.focus);
        };

        const setup_key_events = (carousel) => {
          document.addEventListener("keyup", (event) => {
            const focused_carousel =
              document.activeElement === carousel.rootNode();
            if (!focused_carousel) {
              return;
            }

            switch (event.code) {
              case "ArrowLeft":
                carousel.scrollPrev();
                break;
              case "ArrowRight":
                carousel.scrollNext();
                break;
            }
          });

          const play_video = handleHPVideo(embla);
          embla.on("select", play_video);
        };

        const default_options = {
          loop: true,
          align: "start",
        };

        const embla = EmblaCarousel(viewport, default_options, [
          ClassNames({ selected: "viewing" }),
        ]);
        setup_click_event(embla);
        setup_key_events(embla);

        const disable_buttons = disablePrevNextBtns(prev, next, embla);
        setupPrevNextBtns(prev, next, embla);
        embla.on("select", disable_buttons);
        embla.on("init", disable_buttons);
      }

      const options = {
        root: document.querySelector(".scroll-container"),
        rootMargin: "0px",
        threshold: buildThresholdList(),
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const current_slide = entry.target.querySelector(
            ".viewing.carousel__slide--video"
          );

          const main = entry.target.id === "home-main";
          let video;
          let is_playing;
          if (current_slide) {
            video = current_slide.querySelector("video");
            is_playing =
              video.currentTime > 0 &&
              !video.paused &&
              !video.ended &&
              video.readyState > video.HAVE_CURRENT_DATA;
          }

          if (video && entry.intersectionRatio > 0.9) {
            if (!is_playing) {
              video.play();
            }
          } else if (video && !entry.isIntersecting) {
            if (is_playing) {
              video.pause();
            }
          }
          if (main && entry.intersectionRatio < 0.9) {
            if (!main_nav.classList.contains("header--hide")) {
              main_nav.classList.add("header--hide");
              back_to_top_button.classList.add("back-to-top-button--show");
              scroll_container.classList.add("scroll-container--top-gradient");
            }
          } else if (main && entry.intersectionRatio > 0.9) {
            if (main_nav.classList.contains("header--hide")) {
              main_nav.classList.remove("header--hide");
              back_to_top_button.classList.remove("back-to-top-button--show");
              scroll_container.classList.remove(
                "scroll-container--top-gradient"
              );
            }
          }

          if (
            entry.intersectionRatio > 0.7 &&
            section_ids.indexOf(entry.target.id) !== -1
          ) {
            nav.classList.toggle("sticky", true);
            const current_item = nav.querySelector(
              `[data-id="${entry.target.id}"]`
            );
            nav_items.forEach((item) => {
              item.classList.toggle("carousel-nav__item--selected", false);
            });
            current_item.classList.toggle("carousel-nav__item--selected", true);
            if (
              getWindowWidth() < breakpoints.f.width &&
              entry.intersectionRatio === 1
            ) {
              nav_scroll_container.scrollTo({
                top: 0,
                left: current_item.offsetLeft - 20, //calculate left
                behavior: "smooth",
              });
            }
          } else if (
            section_ids.indexOf(entry.target.id) === -1 &&
            entry.intersectionRatio > 0.5
          ) {
            nav.classList.toggle("sticky", false);
          }
        });
      }, options);

      observer.observe(section);
    });
  }

  function handleFilter() {
    const segments = window.location.pathname.split("/");
    const filters_form = document.getElementById("js-listing-filters");
    const results_container = document.querySelector(".results");
    const filters_container = document.querySelector(".filter");
    const filters_clear = document.querySelector(".filter__clear");
    const applied_text = document.querySelector(".filter__applied-text");

    if (!filters_form || !results_container) {
      return;
    }

    const items = document.querySelectorAll(".listing__item");
    const toggle = document.querySelector(".filter__toggle");

    toggle.addEventListener("click", () => {
      const toggled = toggle.classList.toggle("toggled");
      filters_container.classList.toggle("filter-open");
      toggle.textContent = `${toggled ? "Hide filter" : "Show filter"}`;
    });

    filters_clear.addEventListener("click", () => {
      clearForm();
      filters_clear.classList.remove("filter__clear--visible");
      handleFormChange(true);
    });

    const options = {
      rootMargin: "-300px 0px -100px 0px",
      threshold: buildThresholdList(),
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        const delay = i * 100;
        const video = entry.target.querySelector("video");
        let is_playing;

        if (video && entry.intersectionRatio > 0.1) {
          if (!is_playing) {
            video.play();
          }
        } else if (video && !entry.isIntersecting) {
          if (is_playing) {
            video.pause();
          }
        }

        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("listing__item--hidden");
          }, delay);
        }
      });
    }, options);

    if (items.length) {
      items.forEach((item) => {
        observer.observe(item);
      });
    }

    filters_form.addEventListener("change", () => {
      handleFormChange();
    });

    function handleFormChange(clear = false) {
      const search_url = `${
        clear
          ? "?"
          : "?" + new URLSearchParams(new FormData(filters_form)).toString()
      }`;
      window.history.pushState(null, null, search_url);
      getResults(search_url);
      if (!clear) {
        filters_clear.classList.add("filter__clear--visible");
      }
    }

    function clearForm() {
      const checkboxes = document.querySelectorAll(".filter__option-input");

      filters_clear.classList.remove("filter__clear--visible");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }

    async function getResults(url) {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "text/plain",
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        const result = await response.text();
        results_container.innerHTML = result;

        const result_applied_text = results_container.querySelector(
          "[data-selected-category-text]"
        );

        applied_text.textContent =
          result_applied_text.dataset.selectedCategoryText;
        const items = results_container.querySelectorAll(".listing__item");

        const filtered_filter_groups = results_container.querySelector(
          "[data-filtered-filter-groups]"
        );
        filters_form.innerHTML = filtered_filter_groups.innerHTML;
        filtered_filter_groups.remove();

        if (items.length) {
          items.forEach((item) => {
            observer.observe(item);
          });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Error: ", error);
      }
    }
  }

  function handleReadMore() {
    const read_more = document.querySelector(".read-more");
    const rm_button = document.querySelector(".read-more__button");

    if (!read_more) {
      return;
    }

    rm_button.addEventListener("click", () => {
      const toggled = rm_button.classList.toggle("toggled");
      read_more.classList.toggle("read-more--open");
      rm_button.textContent = `${toggled ? "Read less" : "Read more"}`;
    });
  }
})();

(() => {
  // Navigation
  /* eslint-disable prefer-arrow-callback */
  // We use a function declarations because we want to use the 'this' keyword
  window.addEventListener("newpageload", () => {
    const menu_items = document.querySelectorAll(".has-subnav");

    Array.prototype.forEach.call(menu_items, function (item) {
      let timer = null;
      const button = item.querySelector("button");
      if (getWindowWidth() > breakpoints.f.width) {
        item.addEventListener("mouseover", function () {
          for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].parentElement.classList.remove("subnav-open");
            button.setAttribute("aria-expanded", false);
          }
          this.parentElement.classList.add("subnav-open");
          item.setAttribute("aria-expanded", true);
          clearTimeout(timer);
        });
        item.addEventListener("mouseout", function () {
          timer = setTimeout(function () {
            if (document.querySelector(".subnav-open")) {
              document
                .querySelector(".subnav-open")
                .classList.remove("subnav-open");
            }
            button.setAttribute("aria-expanded", false);
          }, 500);
        });
      }
      item.querySelector("button").addEventListener("click", function () {
        if (this.parentNode.classList.contains("subnav-open")) {
          document.body.classList.remove("subnav-open");
          this.parentNode.classList.remove("subnav-open");
          this.setAttribute("aria-expanded", false);
        } else {
          document.body.classList.add("subnav-open");
          this.parentNode.classList.add("subnav-open");
          this.setAttribute("aria-expanded", true);
        }
        return false;
      });
    });
  });
})();

(() => {
  // Header sticky on scroll
  window.addEventListener("newpageload", () => {
    let prev_scroll_top = 0;

    const scroll_listener = () => {
      const header = document.querySelector(".header");
      const main = document.querySelector("main");

      const scroll_top =
        window.pageYOffset || document.documentElement.scrollTop;
      const main_top_bounds = main.getBoundingClientRect().top;

      if (main_top_bounds < -200) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }

      if (scroll_top < prev_scroll_top) {
        // If scrolling up
        if (main_top_bounds < -500) {
          header.classList.add("header--reveal-sticky");
          document.body.classList.add("sticky-header-revealed");
        } else {
          header.classList.remove("header--reveal-sticky");
          document.body.classList.remove("sticky-header-revealed");
        }
      } else {
        header.classList.remove("header--reveal-sticky");
        document.body.classList.remove("sticky-header-revealed");
      }

      prev_scroll_top = scroll_top <= 0 ? 0 : scroll_top;
    };

    window.removeEventListener("scroll", scroll_listener);
    window.addEventListener("scroll", scroll_listener);
  });
})();

(() => {
  // Nav toggle
  window.addEventListener("newpageload", () => {
    const nav_toggle = document.getElementById("nav-toggle");
    if (!nav_toggle) {
      return;
    }

    new NavHandler();
  });
})();

(() => {
  // Swiper
  window.addEventListener("newpageload", () => {
    const swipers = document.querySelectorAll(".swiper");
    const swiper_instances = [];

    swipers.forEach((swiper) => {
      const auto_height = swiper.classList.contains("swiper--auto-height");
      swiper_instances.push(
        new Swiper(swiper, {
          autoHeight: auto_height,
          freeMode: {
            enabled: true,
            momentum: true,
          },
          slidesPerView: "auto",
          spaceBetween: 16,
          slidesOffsetAfter: 32,
          slidesOffsetBefore: 32,
          mousewheel: {
            enabled: true,
            releaseOnEdges: false,
          },
          pagination: {
            el: ".swiper__progress",
            type: "progressbar",
          },
          on: {
            slideChange: () => {
              const bounds = swiper.getBoundingClientRect();
              if (bounds.top > 0 && bounds.bottom < window.innerHeight) {
                return;
              }
              window.scrollTo({
                top:
                  bounds.top +
                  window.pageYOffset -
                  (window.innerHeight - swiper.scrollHeight) / 2,
                behavior: "smooth",
              });
            },
          },
        })
      );
    });
  });
})();

(() => {
  // Carousels
  window.addEventListener("newpageload", () => {
    const carousels = document.querySelectorAll(".carousel");
    if (!carousels) {
      return;
    }

    carousels.forEach((carousel) => {
      createCarousel(carousel);
    });

    function createCarousel(carousel) {
      const viewport = carousel.querySelector(".carousel__viewport");
      const extra_options = JSON.parse(carousel.getAttribute("data-options"));
      const dots = carousel.querySelectorAll(".carousel__pip");
      const count = carousel.querySelector(".carousel__slide-count");
      const prev = carousel.querySelector(".carousel__button--prev");
      const next = carousel.querySelector(".carousel__button--next");
      const refresh = carousel.querySelector(".carousel__refresh");
      const autoplay = carousel.hasAttribute("data-autoplay");
      const full_fade = carousel.classList.contains("carousel--full-fade");
      const dynamic_heading = carousel.querySelector(
        ".carousel__partner-heading--dynamic"
      );
      const autoplay_videos = carousel.getAttribute("data-autoplay-videos");
      const setup_click_event = (carousel) => {
        const root_node = carousel.rootNode();
        root_node.addEventListener("click", root_node.focus);
      };

      const setup_key_events = (carousel) => {
        document.addEventListener("keyup", (event) => {
          const focused_carousel =
            document.activeElement === carousel.rootNode();
          if (!focused_carousel) {
            return;
          }

          switch (event.code) {
            case "ArrowLeft":
              carousel.scrollPrev();
              break;
            case "ArrowRight":
              carousel.scrollNext();
              break;
          }
        });
      };

      let key;
      const all_options = {};
      const default_options = {
        loop: true,
        align: "start",
      };

      for (key in default_options) {
        if (Object.prototype.hasOwnProperty.call(default_options, key)) {
          all_options[key] = default_options[key];
        }
      }

      for (key in extra_options) {
        if (Object.prototype.hasOwnProperty.call(extra_options, key)) {
          all_options[key] = extra_options[key];
        }
      }

      if (full_fade) {
        all_options.inViewThreshold = 1;
        all_options.speed = 20;
      }

      let embla;
      if (autoplay) {
        embla = EmblaCarousel(viewport, all_options, [
          ClassNames({ selected: "viewing" }),
          Autoplay({ delay: 4000 }),
        ]);
      } else {
        embla = EmblaCarousel(viewport, all_options, [
          ClassNames({ selected: "viewing" }),
        ]);
      }

      setup_click_event(embla);
      setup_key_events(embla);

      if (carousel.classList.contains("carousel--project")) {
        embla.rootNode().focus();
      }

      if (prev && next) {
        const disable_buttons = disablePrevNextBtns(prev, next, embla);
        setupPrevNextBtns(prev, next, embla);
        embla.on("select", disable_buttons);
        embla.on("init", disable_buttons);
      }

      if (dots.length) {
        const set_selected_pip = selectDotBtn(dots, embla);
        setupDotBtns(dots, embla);
        embla.on("select", set_selected_pip);
        embla.on("init", set_selected_pip);
      }

      if (refresh) {
        refresh.addEventListener("click", () => {
          embla.scrollTo(0);
        });
      }

      if (count) {
        const current = count.querySelector(".carousel__slide-count-current");
        embla
          .on("init", () => {
            current.innerHTML = embla.selectedScrollSnap() + 1;
          })
          .on("select", () => {
            current.innerHTML = embla.selectedScrollSnap() + 1;
          });
      }

      if (full_fade) {
        const toggle_embla_ready = (event) => {
          const is_resize_event = event === "resize";
          const toggle_class = is_resize_event ? "remove" : "add";
          carousel.classList[toggle_class]("carousel--is-ready");
          if (is_resize_event) {
            embla.reInit();
          }
        };
        const stagger_reveal = staggerFadeIn(embla);

        embla.on("init", toggle_embla_ready);
        embla.on("init", stagger_reveal);
        embla.on("select", stagger_reveal);
        embla.on("resize", toggle_embla_ready);
        embla.on("reInit", toggle_embla_ready);

        // Inactivate transforms
        embla.internalEngine().translate.toggleActive(false);
        embla.internalEngine().translate.clear();
      }

      if (dynamic_heading) {
        const update_heading = handlUpdateHeading(dynamic_heading, embla);
        embla.on("init", update_heading);
        embla.on("select", update_heading);
      }

      const play_video = handlePlayVideo(embla, autoplay_videos);
      embla.on("select", play_video);
    }
  });
})();

(() => {
  // Fold outs
  window.addEventListener("newpageload", () => {
    const fo_toggles = document.querySelectorAll(".fold-out-toggle");
    if (!fo_toggles) {
      return;
    }

    fo_toggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        openFoldOut(toggle);
      });
    });
  });

  function openFoldOut(toggle) {
    const fo = document.querySelector(toggle.getAttribute("data-fold-out"));
    const close = fo.querySelector(".fold-out__close");
    fo.classList.add("open");
    document.body.classList.toggle("fold-out-open", true);
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("fold-out")) {
        closeFoldOut(fo);
      }
    });
    close.addEventListener("click", () => {
      closeFoldOut(fo);
    });
  }

  function closeFoldOut(fold_out) {
    fold_out.classList.remove("open");
    document.body.classList.toggle("fold-out-open", false);
  }
})();

(() => {
  // Video embeds
  function buildVideoPlayer(container) {
    const embed_url = container.getAttribute("data-embed-url");
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", 1376);
    iframe.setAttribute("height", 617);
    iframe.setAttribute("src", embed_url);
    iframe.setAttribute("title", "Embedded video content");
    iframe.setAttribute("frameborder", 0);
    iframe.setAttribute("allowfullscreen", true);
    iframe.setAttribute("allow", "autoplay");
    container.classList.add("flex-container");
    container.classList.add("video-embed--playing");
    container.innerHTML = "";
    container.appendChild(iframe);
  }

  function handleVideoClick(container) {
    return (event) => {
      event.preventDefault();
      buildVideoPlayer(container);
    };
  }
  window.addEventListener("newpageload", () => {
    const videos = document.querySelectorAll(".video-embed");
    for (let j = 0; j < videos.length; j += 1) {
      videos[j].addEventListener("click", handleVideoClick(videos[j]));
    }
  });
})();

(() => {
  // Simple video embed
  function handleSimpleVideoClick(video) {
    const vid = video.querySelector(".video-in-slideshow__video");
    const poster_vid = video.querySelector(".video-in-slideshow__video-poster");
    video.classList.toggle("video-in-slideshow--paused", false);
    if (poster_vid) {
      poster_vid.style.display = "none";
    }
    vid.play();
    vid.controls = !vid.controls;
  }

  window.addEventListener("newpageload", () => {
    const videos = document.querySelectorAll(".video-in-slideshow");
    for (let j = 0; j < videos.length; j += 1) {
      videos[j].addEventListener("click", () => {
        handleSimpleVideoClick(videos[j]);
      });
    }
  });
})();

(() => {
  // Before/after sliders
  window.addEventListener("newpageload", () => {
    const sliders = document.querySelectorAll(
      ".project-block__before-after-wrapper"
    );
    if (!sliders) {
      return;
    }

    const autoplay_observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videos = entry.target.querySelectorAll(
              "video.project-block__before-after-item"
            );
            videos.forEach((video) => {
              video.play();
            });
          }
        });
      },
      { threshold: 1 }
    );

    sliders.forEach((slider) => {
      const input = slider.querySelector('input[type="range"]');
      const after_item = slider.querySelector(
        ".project-block__before-after-item--after"
      );

      if (!after_item || !input) {
        return;
      }

      // Set default value on init to fix weird firefox issue
      input.value = "200";

      input.addEventListener("input", (e) => {
        const percentage = e.target.value / 4;
        const width_style =
          percentage > 50 ? `calc( ${percentage}% - 1px )` : `${percentage}%`;
        after_item.style.width = width_style;

        if (percentage === 100 || percentage === 0) {
          after_item.style.border = 0;
          return;
        }
        after_item.style.border = null;
      });

      if (
        slider.classList.contains("project-block__before-after-wrapper--video")
      ) {
        autoplay_observer.observe(slider);
      }
    });
  });
})();

(() => {
  // Boundary Explore Iframe
  window.addEventListener("newpageload", () => {
    const embeds = document.querySelectorAll(".iframe-container");
    if (!embeds) {
      return;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      embeds.forEach((embed) => {
        showTimedOverlay(embed);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showTimedOverlay(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    embeds.forEach((embed) => {
      observer.observe(embed);
    });
  });

  function showTimedOverlay(embed) {
    const overlay = embed.querySelector(".iframe-overlay");
    const frame = embed.querySelector(".tour");
    setTimeout(() => {
      overlay.classList.add("iframe-overlay--removed");
      frame.focus();
    }, 4000);
  }
})();

(() => {
  // Case study header video
  window.addEventListener("newpageload", () => {
    const video = document.querySelector(".hero-media");
    const poster = document.querySelector(".hero-media__poster");
    if (!video || !poster) {
      return;
    }

    video.addEventListener("canplay", () => {
      if (!poster.classList.contains("hero-media__poster--faded")) {
        poster.classList.add("hero-media__poster--faded");
      }
    });
  });
})();

(() => {
  // Autoplaying videos
  window.addEventListener("newpageload", () => {
    const videos = document.querySelectorAll(".video-autoplay");
    if (!videos) {
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });

    videos.forEach((video) => {
      io.observe(video);
    });
  });
})();

(() => {
  // Controlled videos
  window.addEventListener("newpageload", () => {
    const videos = document.querySelectorAll(".project-block__video--controls");
    if (!videos) {
      return;
    }

    videos.forEach((video) => {
      const video_element = video.querySelector(".video-controls");
      const video_poster = video.querySelector(".project-block__video-poster");
      const play_button = video.querySelector(
        ".project-block__video-play-button"
      );

      if (!video_element) {
        return;
      }

      play_button.onclick = () => {
        if (video_poster) {
          video_poster.style.display = "none";
        }
        video_element.play();
      };
      video_element.oncanplay = () => {
        video.classList.remove("project-block__video--loading");
      };
      video_element.onplaying = () => {
        video.classList.add("project-block__video--playing");
      };
      video_element.onpause = () => {
        video.classList.remove("project-block__video--playing");
      };
    });
  });
})();

(() => {
  // Images fade in
  lazyImagesLoaded();
  window.addEventListener("newpageload", () => {
    lazyImagesLoaded();
  });

  function lazyImagesLoaded() {
    const images = document.querySelectorAll(".lazy");
    if (!images) {
      return;
    }
    for (let i = 0; i < images.length; i++) {
      // add loaded class to images one by one
      if (images[i].complete) {
        window.setTimeout(() => {
          images[i].classList.add("loaded");
        }, 100 * i);
      } else {
        images[i].addEventListener("load", () => {
          images[i].classList.add("loaded");
        });
      }
    }
  }
})();

(() => {
  // Pause controlled videos when leaving viewport
  window.addEventListener("newpageload", () => {
    const videos = document.querySelectorAll(".controlled-video");
    if (!videos.length) {
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) {
          entry.target.pause();
        }
      });
    });

    videos.forEach((video) => {
      io.observe(video);
    });
  });
})();

(() => {
  // Back to top
  window.addEventListener("newpageload", () => {
    const back_to_top = document.querySelector(".back-to-top");
    if (!back_to_top) {
      return;
    }
    back_to_top.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  });
})();

(() => {
  // Parallax
  window.addEventListener("newpageload", () => {
    const parallax = document.querySelector(".parallax");
    if (!parallax) {
      return;
    }

    const hero_title = parallax.querySelector(".hero__title");

    window.addEventListener(
      "scroll",
      () =>
        throttle(
          window.requestAnimationFrame(() => {
            const scrolled = document.documentElement.scrollTop;
            parallax.style.transform = `translate3d( 0, ${
              scrolled * 0.2
            }px, 0)`;
            hero_title.style.transform = `translate3d( 0, ${
              scrolled * -0.2
            }px, 0)`;
          })
        ),
      50
    );
  });
})();

(() => {
  window.addEventListener("newpageload", () => {
    new LightBox();
  });
})();

(() => {
  // Locale selector
  window.addEventListener("newpageload", () => {
    const locale_toggle = document.getElementById("locale-toggle");
    if (!locale_toggle) {
      return;
    }

    document.body.classList.toggle("locale-open", false);

    window.addEventListener("click", (e) => {
      if (e.target.id === "locale-toggle") {
        document.body.classList.toggle("locale-open", true);
      }
      if (e.target.classList.contains("header__locale-option")) {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const expires = date.toGMTString();
        setCookie("ten4_locale_cookie", { manually_selected: true }, expires);
        window.location.href = e.target.dataset.url;
      }
    });

    // Close drop-down if the user scrolls ( it hits the top of the window )
    const scroll_listener = () => {
      const locale_toggle_top_bounds =
        locale_toggle.getBoundingClientRect().top;

      if (locale_toggle_top_bounds < 0) {
        document.body.classList.remove("locale-open");
      }
    };

    window.addEventListener("scroll", scroll_listener);
  });
})();

(() => {
  // Locale switcher
  window.addEventListener("newpageload", () => {
    const cookie_name = "ten4_locale_cookie";
    const cookie = getCookie(cookie_name);
    const cookie_value = cookie ? JSON.parse(cookie) : null;

    // Check for cookie value and return if the user selected a region manually
    if (cookie_value && cookie_value.manually_selected === true) {
      return;
    }

    // Get the user's region from Geolocation module
    const get_region = new Request("?action=geolocation/region/get-region");
    fetch(get_region)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((response) => {
        // response is location e.g. uk-and-europe
        const site_region =
          document.getElementById("locale-toggle").dataset.region;
        if (site_region === response) {
          return;
        }

        locale_link = document.querySelector(`#locale-link-${response}`);
        if (!locale_link) {
          return;
        }

        window.location.href = locale_link.dataset.url;
      });
  });
})();

(() => {
  // Breadcrumbs
  window.addEventListener("newpageload", () => {
    const breadcrumbs_bar = document.querySelector(".breadcrumbs-bar");
    if (!breadcrumbs_bar) {
      return;
    }

    const breadcrumbs_wrapper = breadcrumbs_bar.parentElement;
    const back_to_top = breadcrumbs_bar.querySelector(
      ".breadcrumbs-bar__back-to-top"
    );

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          breadcrumbs_bar.classList.remove("breadcrumbs-bar--sticky");
        } else {
          if (entry.boundingClientRect.top > 0) {
            breadcrumbs_bar.classList.remove("breadcrumbs-bar--sticky");
            return;
          }
          breadcrumbs_bar.classList.add("breadcrumbs-bar--sticky");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(breadcrumbs_wrapper);

    if (!back_to_top) {
      return;
    }

    back_to_top.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  });
})();

(() => {
  // Back to top button
  const back_to_top_button = document.querySelector(".back-to-top-button");

  back_to_top_button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.onscroll = () => {
    const top_scroll = document.body.getBoundingClientRect().top;
    if (top_scroll < -1000) {
      back_to_top_button.classList.add("back-to-top-button--show");
    } else {
      back_to_top_button.classList.remove("back-to-top-button--show");
    }
  };

  // Hide when showing page content's back-to-top
  window.addEventListener("newpageload", () => {
    back_to_top_button.classList.remove("back-to-top-button--show");

    const page_back_to_top = document.querySelector(".back-to-top");
    if (!page_back_to_top) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          back_to_top_button.classList.add("back-to-top-button--hide-override");
        } else {
          back_to_top_button.classList.remove(
            "back-to-top-button--hide-override"
          );
        }
      });
    });

    observer.observe(page_back_to_top);
  });
})();

window.dispatchEvent(new Event("newpageload", { init: true }));
