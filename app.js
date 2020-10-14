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
})