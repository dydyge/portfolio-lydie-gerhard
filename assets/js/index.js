const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth:true},
});
/*body color*/
scroll.on("scroll", () =>{
    if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#080d1c";
    document.body.style.color = "#d9cdcd";
    } else {
        document.body.style.background = "#d9cdcd";
        document.body.style.color = "#080d1c";    
    }
})