export function initApproachAnimation(gsap) {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".approach");
  const heading = section.querySelector(".approach__text");
  const wrapper = section.querySelector(".approach__list-wrapper");
  const videoCard = section.querySelector(".approach__video-card");

  // Match section height to video height
  const videoHeight = videoCard.offsetHeight;
  section.style.minHeight = videoHeight + "px";

  // Pin the heading while list scrolls behind
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: () => `+=${wrapper.scrollHeight}`,
    scrub: true,
    pin: heading,
    pinSpacing: false,
  });

  // Animate list items upward under the heading
  gsap.to(wrapper, {
    y: () => -(wrapper.scrollHeight - videoHeight + 100),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${wrapper.scrollHeight}`,
      scrub: true,
    },
  });
}

export function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grid: {
      rows: 3,
      fill: "row",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        grid: { rows: 3, fill: "row" },
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        grid: { rows: 2, fill: "row" },
      },
      1024: {
        slidesPerView: 3,
        grid: { rows: 2, fill: "row" },
      },
    },
  });
  return swiper;
}

// breakpoints: {
//   640: {
//     slidesPerView: 1,
//     grid: { rows: 1, fill: "row" },
//     slidesPerGroup: 1,
//   },
//   768: {
//     slidesPerView: 2,            // columns per row
//     grid: { rows: 2, fill: "column" }, // IMPORTANT: fill by column -> empties go to bottom
//     slidesPerGroup: 4,          // 2 cols * 2 rows = 4 slides per page
//   },
//   1024: {
//     slidesPerView: 3,
//     grid: { rows: 2, fill: "column" }, // columns-first fill keeps blanks at bottom
//     slidesPerGroup: 6,          // 3 * 2 = 6 slides per page
//   },
// },
