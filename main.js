$(function(){
    'use-strict';
    $(document).ready(function(){
        main.init();
    });

    var main = {
        init: function(){
           main.changeIconToggler();
        },

        changeIconToggler: function(){
            var toggler = $('.navbar-toggler');

            toggler.on('click', function(){
                var icon = $('.navbar-toggler i');
                icon.attr("data-feather", "circle");
                feather.replace();
            });
        },
    }

});