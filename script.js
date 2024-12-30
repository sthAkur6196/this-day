document.querySelectorAll(".card").forEach((card) => {
    gsap.to(card,{
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            scrub: true,
        }
    })    
})
