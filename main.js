gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
    ease: "power2.out",
    scrollTrigger: {
        scrub: 0.3,
    }
})
// Animaciones de Episodio 1
tl.to('#ep1_sec1_img1', {
    duration: 0.6, scale: 1.2,
}).from('#ep1_sec1_text1', {
    duration: 0.2, autoAlpha: 0, x: -100,
}, '<').from('#ep1_sec1_text2', {
    duration: 0.2, autoAlpha: 0, x: -100,
}, '<+=0.2').from('#ep1_sec1_text3', {
    duration: 0.2, autoAlpha: 0, x: -100,
}, '<+=0.2').to('#ep1_sec1', {
    duration: 0.1, autoAlpha: 0
}, '+=0.2').to('#ep1_sec2', {
    duration: 0.1, autoAlpha: 1
}).from('#ep1_sec2_text1', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep1_sec2', {
    duration: 0.1, autoAlpha: 0
}).to('#ep1_sec3', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep1_sec3_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep1_sec3', {
    duration: 0.1, autoAlpha: 0
})

// Animaciones de Episodio 2
tl.to('#ep2_sec1', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep2_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}).fromTo('#ep2_sec1_text2', { xPercent: 100, x: 0 }, { xPercent: 0, duration: 1 }).to('#ep2_sec1', {
    duration: 0.1, autoAlpha: 0
}, '+=0.2').to('#ep2_sec2', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep2_sec2_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep2_sec2', {
    duration: 0.1, autoAlpha: 0
})

// Animaciones Episodio 3
tl.to('#ep3_sec1', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep3_sec1_text1', {
    duration: 0.2, autoAlpha: 0, y: -50,
}, '<+=0.2').from('#ep3_sec1_text2', {
    duration: 0.2, autoAlpha: 0, y: -50,
}, '<+=0.2').from('#ep3_sec1_text3', {
    duration: 0.2, autoAlpha: 0, y: -50,
}, '<+=0.2').from('#ep3_sec1_text4', {
    duration: 0.2, autoAlpha: 0, y: -50,
}, '<+=0.2').to('#ep3_sec1_text', {
    duration: 0.2, autoAlpha: 0
}).from('#ep3_sec1_text5', {
    duration: 0.2, autoAlpha: 0,
}).to('#ep3_sec1_img1', {
    duration: 0.4, scale: 1.1
}).to('#ep3_sec1', {
    duration: 0.1, autoAlpha: 0
}, '+=0.2').to('#ep3_sec2', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep3_sec2_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep3_sec2', {
    duration: 0.1, autoAlpha: 0
})

// Animacion Episodio 4
tl.to('#ep4_sec1', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep4_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep4_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').from('#ep4_sec1_text2', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep4_sec1_text2', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').from('#ep4_sec1_text3', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep4_sec1_text3', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep4_sec1', {
    duration: 0.1, autoAlpha: 0
}).to('#ep4_sec2', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep4_sec2_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep4_sec2', {
    duration: 0.1, autoAlpha: 0
})

// Animacion Episodio 5
tl.to('#ep5_sec1', {
    duration: 0.1, autoAlpha: 1
}).from('#ep5_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep5_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').from('#ep5_sec1_text2', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep5_sec1_text2', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').from('#ep5_sec1_text3', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep5_sec1', {
    duration: 0.1, autoAlpha: 0
}, '+=0.2').to('#ep5_sec2', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep5_sec2_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep5_sec2', {
    duration: 0.1, autoAlpha: 0
})

// Animacion Episodio 6
tl.to('#ep6_sec1', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep6_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.2').from('#ep6_sec1_text2', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep6_sec1_text2', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep6_sec1_text3', {
    duration: 0.4, autoAlpha: 1,
}).to('#ep6_sec1_text3', {
    duration: 0.4, autoAlpha: 0
}).to('#ep6_sec1_text4', {
    duration: 0.4, autoAlpha: 1
}).to('#ep6_sec1', {
    duration: 0.1, autoAlpha: 0
}, '+=0.2').to('#ep6_sec2', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep6_sec2_img1', {
    duration: 0.4, scale: 1.1
}).to('#ep6_sec2', {
    duration: 0.1, autoAlpha: 0
})

// Animacion Episodio 7
tl.to('#ep7_sec1', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep7_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}).to('#ep7_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep7_sec2', {
    duration: 0.1, autoAlpha: 1
}).fromTo('#ep7_sec2_img1', { yPercent: 0 }, { yPercent: -100, duration: 1, autoAlpha: 1 }).fromTo('#ep7_sec2_img2', { yPercent: 0 }, { yPercent: -100, duration: 1 }, '<').from('#ep7_sec2_text1', { duration: 0.4, autoAlpha: 0 }).to('#ep7_sec1', {
    duration: 0.1, autoAlpha: 0,
}).to('#ep7_sec2', {
    duration: 0.1, autoAlpha: 0
}).to('#ep7_sec3', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep7_sec3_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep7_sec3', {
    duration: 0.1, autoAlpha: 0
})

// Animacion Episodio 8
tl.to('#ep8_sec1', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep8_sec1_img1', {
    duration: 2.5, scale: 1.2
}, '<+=0.1').fromTo('#ep8_sec1_text1', { xPercent: 50, x: 0 }, { xPercent: -100, duration: 2.5 }, '<').to('#ep8_sec1', {
    duration: 0.1, autoAlpha: 0
}).to('#ep8_sec2', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep8_sec2_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1').to('#ep8_sec2', {
    duration: 0.1, autoAlpha: 0
})

// Animacion Episodio 9
tl.to('#ep9_sec1', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep9_sec1_text1', {
    duration: 0.4, autoAlpha: 0, y: 50,
}).to('#ep9_sec1_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep9_sec2', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep9_sec2_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep9_sec3', {
    duration: 0.1, autoAlpha: 1,
}).from('#ep9_sec3_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep9_sec3_text1', {
    duration: 0.4, autoAlpha: 0,
}, '<+=0.4').to('#ep9_sec3_img1', {
    duration: 0.4, scale: 1.2
}, '<').to('#ep9_sec4', {
    duration: 0.1, autoAlpha: 1,
}).fromTo('#ep9_sec4_text1', { xPercent: 200, x: 0 }, { xPercent: -200, duration: 2 }).to('#ep9_sec1', {
    duration: 0.1, autoAlpha: 0
}, '<').to('#ep9_sec2', {
    duration: 0.1, autoAlpha: 0,
}, '<').to('#ep9_sec3', {
    duration: 0.1, autoAlpha: 0,
}, '<').to('#ep9_sec4', {
    duration: 0.1, autoAlpha: 0,
}).to('#ep9_sec5', {
    duration: 0.1, autoAlpha: 1,
}).to('#ep9_sec5_img1', {
    duration: 0.4, scale: 1.1
}, '<+=0.1')

// Footer
tl.to('#footer', {
    duration: 0.1, autoAlpha: 1
})