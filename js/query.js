$('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active'), //cind apasam pe menu-btn se adauga clasul menu-active
        $('.nav').toggleClass('menu-active'),
        $('.logo').toggleClass('menu-active'),
        $('.my_header').toggleClass('menu-active');
        
});