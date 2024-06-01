import anime from "animejs";

export function slideY(targets, duration, from, to) {
  targets.style.transform = `translate( ${from}%,  )`;
  document.body.style.overflowX = "hidden";

  const translateY = `${to}%`;
  const anim = anime.timeline({
    easing: "easeInOutSine",
    duration,
  });

  anim.add({
    targets,
    translateY,
  });

  return anim.finished;
}

export function fadeOut(targets, duration) {
  targets.style.opacity = 1;
  const animation = anime.timeline({
    easing: "linear",
    duration,
  });

  animation.add({
    targets,
    opacity: 0,
  });

  return animation.finished;
}

export function fadeIn(targets, duration) {
  targets.style.opacity = 0;
  const animation = anime.timeline({
    easing: "linear",
    duration,
  });

  animation.add({
    targets,
    opacity: 1,
  });

  return animation.finished;
}

export function revealAll(next) {
  const revealables_nl = next.container.querySelectorAll(".revealable");
  const revealables = Array.from(revealables_nl);

  anime.set(revealables, { translateY: "40%", opacity: 0 });

  const animation = anime.timeline();

  animation.add({
    targets: revealables,
    opacity: {
      value: 1,
      duration: 1000,
    },
    translateY: 0,
    duration: 700,
    stragger: anime.stagger(200),
    easing: "easeInOutQuint",
  });

  return animation.finished;
}

export function homeOut(data) {
  const trigger = data.trigger;
  const logo = data.current.container.querySelector(".hero__logo");
  const other_half = trigger.classList.contains("hero__half--left")
    ? trigger.nextElementSibling
    : trigger.previousElementSibling;
  const links = data.current.container.querySelectorAll(".hero__link");
  const animation_ref = document
    .querySelector(".animation-ref")
    .getBoundingClientRect();
  const next_ref = data.next.container.querySelector(".first");
  const next_height = next_ref.getBoundingClientRect().top;
  const reverse = trigger.classList.contains("hero__half--left");

  anime.set(next_ref, { opacity: 0 });

  const animation = anime.timeline({
    easing: "easeInExpo",
    duration: 1500,
  });

  animation.add({
    targets: logo,
    translateY: "100%",
    duration: 500,
  });

  animation.add(
    {
      targets: links,
      opacity: 0,
      translateY: "10%",
      duration: 500,
    },
    0
  );

  animation.add(
    {
      targets: trigger,
      delay: 100,
      height: `${animation_ref.height}px`,
      translateY: `${next_height}px`,
      paddingLeft: `${animation_ref.left}px`,
      width: `${animation_ref.width}px`,
      zIndex: 1,
    },
    100
  );

  animation.add(
    {
      targets: other_half,
      delay: 100,
      translateX: reverse ? "100%" : "-100%",
      opacity: 0,
      width: reverse ? getGridWidth(5, 16) : 0,
    },
    100
  );

  animation.add(
    {
      targets: next_ref,
      opacity: 1,
    },
    500
  );

  animation.add({
    targets: trigger,
    opacity: 0,
    duration: 500,
  });

  return animation.finished;
}

export function listingIn(data) {
  const grid_items = data.next.container.querySelectorAll(".grid__item");
  const second = grid_items[1];

  const animation = anime.timeline({
    easing: "easeInExpo",
    duration: 1000,
    delay: 500,
  });
  animation.add({
    targets: data.next.container,
    opacity: 1,
    duration: 200,
  });

  if (second) {
    const wipe = second.querySelector(".selected__wipe");
    const img = second.querySelector("IMG")[0];
    anime.set(img, { opacity: 0 });
    anime.set(wipe, { height: "50%" });

    animation.add(
      {
        targets: img,
        delay: 500,
        opacity: 1,
      },
      500
    );

    animation.add({
      targets: wipe,
      height: 0,
      delay: 500,
    });
  }

  return animation.finished;
}

function getGridWidth(grid_size, grid_total) {
  return `${(grid_size / grid_total) * 100}%`;
}
