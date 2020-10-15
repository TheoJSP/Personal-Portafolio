$(document).ready(()=>{
    //SCROLL 
    $(window).scroll(()=>{
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }

        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show")
        }else{
            $(".scroll-up-btn").removeClass("show")
        }
    

    });
    //SLIDE-UP 
    $(".scroll-up-btn").click(()=>{
        $("html").animate({scrollTop: 0});
    });
    
    //NAVBAR SCRIPT
    $(".menu-btn").click(()=>{
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })

    //TYPING ANIMATION
    var typed = new Typed(".typing", {
        strings: ["Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


})