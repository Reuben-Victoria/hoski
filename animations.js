export function initApproachAnimation(gsap) {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".approach");
  const heading = section.querySelector(".approach__text");
  const wrapper = section.querySelector(".approach__list-wrapper");
  const videoCard = section.querySelector(".approach__video-card");

  // Check if we're on mobile (viewport width < 768px)
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return; // Exit early on mobile
  }

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
