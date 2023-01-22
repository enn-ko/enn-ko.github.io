

// typting
var typed = new Typed('.typing', {
    strings: ["Front-end developer","Web developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

let screenHeight = $(window).height();
// console.log(screenHeight);



new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav.active");
        if(oldNavLink != null){
            oldNavLink.classList.remove("active");
        }
        let currentNavLink = document.querySelector(`[href="#home"]`);
        currentNavLink.classList.add('active');
    },
    offset: "10%"
});


function setActive(current){
    $(".nav").removeClass("active");
    $(`.nav[href="#${current}"]`).addClass("active")
}

function navScroll(){
    let currentSection = $("section[id]");
    currentSection.waypoint(function(direction){
        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSectionId);
            setActive(currentSectionId)
        }
    },{offset:'10px'})

    currentSection.waypoint(function(direction){
        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId)
        }
    },{offset:'-10px'})
}
navScroll()
new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav.active");
        oldNavLink.classList.remove("active");
        let currentNavLink = document.querySelector(`[href="#contact"]`);
        currentNavLink.classList.add('active');
    },
    offset: "80%"
})

//mobile nav
$(".menu-icon").on("click",function(){
    $(".aside").toggleClass("d-none")
    let result = $(".aside").hasClass("d-none")
    console.log(result)
    if(result){
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    }else{
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");

    }
})