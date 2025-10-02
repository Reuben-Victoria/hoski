export function initApproachAnimation(gsap) {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".approach");
  const heading = section.querySelector(".approach__text");
  const wrapper = section.querySelector(".approach__list-wrapper");
  const videoCard = section.querySelector(".approach__video-card");

  if (!section || !heading || !wrapper || !videoCard) return;

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  if (isMobile) return;

  const wrapperHeight = wrapper.scrollHeight;
  const sectionHeight = section.offsetHeight;

  // Ensure heading and video card are above the list
  heading.style.position = "relative";
  heading.style.background =
    "linear-gradient(180deg, #0a0a0b 92.63%, rgba(0, 0, 0, 0) 100%)";
  heading.style.zIndex = 10;
  heading.style.paddingBottom = "16px";
  videoCard.style.position = "relative";
  videoCard.style.zIndex = 5;

  // Build one timeline to sync everything
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${wrapperHeight}`,
        scrub: true,
        pin: true,
      },
    })
    .to(
      wrapper,
      {
        y: () => -(wrapperHeight - 200),
        ease: "none",
      },
      0
    )
    .to(
      heading,
      {
        y: () => sectionHeight,
        ease: "none",
      },
      0
    );
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
