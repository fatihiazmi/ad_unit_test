// add timeline

let tl = gsap.timeline()

//set timeline & animate

tl.from('.logo', { duration: 1, autoAlpha: 0, delay: .5 })
    .from('.headline-2', { duration: 1, autoAlpha: 0 })
    .to('.flag', { duration: 1, ease: "power4.out", autoAlpha: 0, x: 300 }, 3)
    .to('.logo', { duration: 1, ease: "power4.out", autoAlpha: 0, x: 200 }, 3.5)
    .to('.headline-2', { duration: 1, ease: "power4.out", autoAlpha: 0, x: 200 }, 3.5)
    .to('.ad-after', { duration: 1, autoAlpha: 1 }, 4)
    .from('.headline-1', { duration: 1,ease: "power3.out", x: -200 }, 4)
    .to('.headline-1', { duration: 1, autoAlpha: 0, delay: 1}, 5)
    .from('.headline-after', { duration: 1,autoAlpha:0, delay:1}, 6)
    .from('.product', { duration: 1, ease: "elastic.out", x: -200 }, 4.5)
    .to('.product',0.7,{rotation:30})
    .to('.product', 7, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) })
    .from('.cta-btn', { scale: 0.8, duration: 1, ease: "power4.out" }, 8)
    


