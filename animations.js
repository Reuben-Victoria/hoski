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
    end: () => `+=${wrapper.scrollHeight}`, // scroll until all list items pass
    scrub: true,
    pin: heading,
    pinSpacing: false
  });

  // Animate list items upward under the heading
  gsap.to(wrapper, {
    y: () => -(wrapper.scrollHeight - videoHeight + 100), // adjust so last item passes under heading
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${wrapper.scrollHeight}`,
      scrub: true
    }
  });
}
