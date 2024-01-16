/* Script per gestire la barra di navigazione in mobile */
$(document).ready(function() {

    var menu_btn   = $('#nav-mobile .menu-btn');
    var menu       = $('#nav-mobile .menu');
    var menu_item  = $('#nav-mobile .menu li a');
    
    // apro e chiudo il menu
    $(menu_btn).click(function() {
        $(menu).slideToggle("swing");

        // chiudo il menu in automatico quando clicco sul link
        $(menu_item).click(function() {
            $(menu).slideUp("swing");
        });
    });
});