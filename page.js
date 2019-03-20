$(document)
    .ready(function () {
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });

        // $('img').hide();
        // $('img').show("slow");
    });



function toggleSidebar() {
    $('.ui.sidebar').sidebar('toggle');
}