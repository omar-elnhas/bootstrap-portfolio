let sectionAbout = $('.about').offset().top


$(window).scroll(function(){
    if($(window).scrollTop()>= sectionAbout -20)
    {$('nav').css({backgroundColor : 'rgb(104, 104, 104, 1 )'})
    $('.fixed-arrow i').fadeIn(500)}
    else{
        $('nav').css({backgroundColor : 'transparent'})
        $('.fixed-arrow i').fadeOut(500)
    }
})

