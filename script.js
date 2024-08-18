let tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.5,
});

tl.from(".line1-part1", {
  opacity: 0,
  onStart: function () {
    let loaderTimer = document.querySelector(".line1-part1 h3");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        loaderTimer.innerHTML = grow++;
      } else {
        loaderTimer.innerHTML = grow;
      }
    }, 30);
  },
});

tl.to(".line h2",{
  AnimationName: "anime",
  opacity: 1
})

tl.to(".loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3.7,
});

tl.from(".page1",{
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease:Power4
});

tl.to(".loader", {
  display: 'none'
});
