$(document).ready(()=>{
    //SCROLL 
    $(window).scroll(()=>{
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }
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

})