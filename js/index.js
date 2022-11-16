let sectionAbout = $('.about').offset().top


$(window).scroll(function(){
    if($(window).scrollTop()>= sectionAbout-100)
    {$('nav').css({backgroundColor : 'pink', borderBottom : '5px solid aqua'})
    $('.fixed-arrow i').fadeIn(500)}
    else{
        $('nav').css({backgroundColor : 'transparent', borderBottom : 'none'})
        $('.fixed-arrow i').fadeOut(500)
    }
})

$('nav').