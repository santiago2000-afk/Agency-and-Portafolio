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
               var icon = toggler.find('svg');
               icon.attr("data-feather", "x");
               feather.replace();
            });

        },
    }

});