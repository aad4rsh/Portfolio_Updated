console.log("GSAP loaded?", typeof gsap !== "undefined");

document.fonts.ready.then(() => {
  gsap.from(".arrow-tip-text", {
    y: -750,
    duration: 2,
    ease: "power3.out",
    delay: 1.8
  });

  // Animate all arrows with .arrow-path class
  document.querySelectorAll('.arrow-path').forEach(function (path, index) {
    const length = path.getTotalLength ? path.getTotalLength() : 900;
    gsap.fromTo(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    }, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
      delay: 2 + (index * 0.2) // Stagger animation slightly
    });
  });

  // Animate all arrow heads
  document.querySelectorAll('.arrow-head').forEach(function (head, index) {
    gsap.fromTo(head, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.6,
      delay: 3.5 + (index * 0.1)
    });
  });
});


window.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(".pfp",
    { y: 550, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.6, ease: "power3.out" }
  );
});
gsap.set(".logo", { y: 0 });
gsap.to(".shake",
  {
    rotation: 4,
    duration: 1.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1.8 // holds for 2 seconds before starting
  }
);

//Tech Stack scroll animation
window.addEventListener("scroll", () => {
  const techStack = document.querySelector('.tech-stack-wrapper');
  const hero = document.querySelector('.hero-wrapper');
  if (!techStack || !hero) return;
  const techRect = techStack.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.7;
  if (techRect.top < triggerPoint) {
    // Animate hero out, tech stack in
    gsap.to(hero, { opacity: 0, duration: 0.8, ease: "power2.inOut" });
    gsap.to(techStack, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" });
  } else {
    // Reset if scrolled back up
    gsap.to(hero, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
    gsap.to(techStack, { opacity: 0, x: window.innerWidth, duration: 1.2, ease: "power2.in" });
  }
});
