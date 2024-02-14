

function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

init()

var overlay=document.querySelector("#overlay");
var cursor=document.querySelector("#corser");
overlay.addEventListener("mouseenter",function(dets){
    cursor.style.scale=1
})
overlay.addEventListener("mouseleave",function(dets){
    cursor.style.scale=0
})
overlay.addEventListener("mousemove",function(dets){
    cursor.style.left=`${dets.x  -40}px`
    cursor.style.top=`${dets.y -38 }px`
})

// const newLocal = $('#page1 h1').textillate({ in: { effect: 'rollIn' } });

gsap.to("#page2 img",{
    rotate:5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        start:"top 80%",
        end:"top 20%",
       
        scrub:3
    }
})


gsap.to("#page2 h1",{   
    startfunction(){
        $('#page2 h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 h1",
        scrub:true,
        start:"top 20%",
        end:"top 30%",
       
    }
})


gsap.to("svg",{
    scale:1,
    top:"5%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"svg",
        scrub:true,
        start:"top 40%",
        end:"top -20%",
    }
})
gsap.to("#navbar h3",{
    color: "black",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2",
        start:"top 25%",
        end:"top 25%",
    //    markers:true,
        scrub:3
    }
})
gsap.to("svg",{
   fill:"black",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2",
        scrub:true,
        start:"top 25%",
        end:"top 25%",
       
    }
})


gsap.to("#navbar h3",{
    color: "white",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        start:"top 25%",
        end:"top 25%",
        scrub:3
    }
})
gsap.to("svg",{
   fill:"white",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        scrub:true,
        start:"top 25%",
        end:"top 25%"
    }
})

var img=document.querySelector("#img");
var page3=document.querySelector("#overlay2");
page3.addEventListener("mouseenter",function(dets){
    img.style.scale=1  
})
page3.addEventListener("mouseleave",function(dets){
    img.style.scale=0
})
page3.addEventListener("mousemove",function(dets){
    img.style.left=`${dets.x -10 }px`
    img.style.top=`${dets.y -5 }px`
})


document.querySelector("#page4").addEventListener("mouseenter",function(dets){
    document.querySelector("#page4>img").style.scale=1  
    document.querySelector("#page4>button").style.scale=1  
})
document.querySelector("#page4").addEventListener("mouseleave",function(dets){
    document.querySelector("#page4>img").style.scale=0
    document.querySelector("#page4>button").style.scale=0
})


document.querySelector("#page4").addEventListener("mousemove",function(dets){
    document.querySelector("#page4>img").style.cssText = "left: " + dets.clientX
    + "px; top: "+dets.clientY + "px;";
    document.querySelector("#page4>button").style.left= `${dets.x -40 }px`
    document.querySelector("#page4>button").style.top= `${dets.y -50}px`
})

var elem=document.querySelectorAll(".elem");
elem.forEach(function(e){
    var data=e.getAttribute("data-img");
    e.addEventListener("mouseenter",function(){
        document.querySelector("#page4>img").setAttribute("src",data)
    })
}) 

gsap.from(".img1",{

    y:100,
    rotate:-5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        scrub:7,
        start:"top 0%",
        end:"top 25%",
        pin:true,
        // markers:true,
    }
})



gsap.from(".img2",{

    y:700,
    rotate:-10,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        scrub:8,
        start:"top 0%",
        end:"top 25%",
        pin:true,
        // markers:true,
    }
})

gsap.from("#page9>h1", {
    duration: 0.5,
    onStart: function () {
        $('#page9>h1').textillate({ in: { effect: 'filpInX',   delayScale: 0.5, } });
    },
    scrollTrigger:{
        trigger:"#page9>h1",
        scroller:"#main",
        start:"top 90%"
    }
})


gsap.from(".h1-2>h1", {
    duration: 0.5,
    onStart: function () {
        $('.h1-2>h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.5, } });
    },
    scrollTrigger:{
        trigger:".h1-2>h1",
        scroller:"#main",
        start:"top 90%",
    }
})



gsap.to(".box ",{
    x:500,
    width:100,
    height:200,
    scrollTrigger:{
        scroller:"#main",
        trigger:".box",
        scrub:true,
        start:"top 80%",
        end:"top 30%",
       
    }
})



