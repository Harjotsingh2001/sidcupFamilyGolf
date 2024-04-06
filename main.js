var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 30 + "px";
  cursor.style.top = dets.y + "px";
  blur.style.left = dets.x - 175 + "px";
  blur.style.top = dets.y - 175 + "px";
});

var navh4 = document.querySelectorAll("#nav h4");
navh4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: "0.5",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -75%",
    scrub: 2,
  },
});

gsap.from(".colon-left", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon-left",
    scroller: "body",
    markerss: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".colon-right", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon-left",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#pg4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#pg4 h1",
    scroller: "body",
    start: "top 70%",
    end: "top 75%",
    scrub: 3,
  },
});
