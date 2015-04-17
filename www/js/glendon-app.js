function init_glendon_app() {
    $('#eclassurl').removeClass('ui-btn');
    $('#libraryurl').removeClass('ui-btn');
    $('#findapersonurl').removeClass('ui-btn');
    $('#studentservicesurl').removeClass('ui-btn');
    
    //load header
    $('.app-header').load('header.html');
    $('.app-footer').load('footer.html');
}