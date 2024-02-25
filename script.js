const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

document.querySelector('#footer h2').addEventListener('click', () =>
{
  scroll.scrollTo(0);
})


//Animation at loading first screen//
loaderAnimation = () => {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.6,
    duration: 0.7,
    ease: "ease.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
};
loaderAnimation();

var elems = document.querySelectorAll('.elem');
var page2 = document.querySelector('#page2');
elems.forEach(function (ele) {
  ele.addEventListener('mouseenter', function () {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage=`url(${bgimg})`
  })
})
