document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(TextPlugin)

    gsap.from('.navbar', {
        y : -150
    });
    gsap.to('.navbar', {
        duration:2,
        ease: "elastic.out(1,0.3)",
        y: 0
        });


    gsap.from('.tagline', {
        duration:2,
        opacity:0,
        delay: 0.9,
        ease: "slow(0.7,0.7,false)",
    });

    gsap.to('.product-text', {
        duration:3,
        delay:3,
        text: 'Oleh - Oleh Arab Haji & Umrah | Busana Muslim | Kurma | Madu | Herbal | Perlengkapan Sholat.'
    })


    // gsap.to('.hero-text', {
    //     duration:3,
    //     ease: "slow(0.7,0.7,false)",
    //     z:100
    // });

});