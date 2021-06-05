<<<<<<< HEAD
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9
  };
  
  let revealCallback = (entries, self) => {
    entries.forEach((entry) => {
      let container = entry.target;
      let img = entry.target.querySelector("img");
      const easeInOut = "power3.out";
      const revealAnim = gsap.timeline({ ease: easeInOut });
  
      if (entry.isIntersecting) {
        revealAnim.set(container, {
          visibility: "visible"
        });
        revealAnim.fromTo(
          container,
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: easeInOut
          }
        );
        revealAnim.from(img, 4, {
          scale: 1.4,
          ease: easeInOut,
          delay: -1
        });
        self.unobserve(entry.target);
      }
    });
  };
  
  let revealObserver = new IntersectionObserver(revealCallback, options);
  
  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });
=======
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9
  };
  
  let revealCallback = (entries, self) => {
    entries.forEach((entry) => {
      let container = entry.target;
      let img = entry.target.querySelector("img");
      const easeInOut = "power3.out";
      const revealAnim = gsap.timeline({ ease: easeInOut });
  
      if (entry.isIntersecting) {
        revealAnim.set(container, {
          visibility: "visible"
        });
        revealAnim.fromTo(
          container,
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: easeInOut
          }
        );
        revealAnim.from(img, 4, {
          scale: 1.4,
          ease: easeInOut,
          delay: -1
        });
        self.unobserve(entry.target);
      }
    });
  };
  
  let revealObserver = new IntersectionObserver(revealCallback, options);
  
  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });
>>>>>>> 150eb903cee3eb356e6a82113e5c030bac8350a4
  