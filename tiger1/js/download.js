define(function(require, exports, module) {

    var hanxu = {
        initPage: function() {
            this.helpFn();
            this.clickFn();
            this.slide();
            
        },
        
        helpFn: function() {
            var header = require('view/header.html');
            var footer = require('view/footer.html');
            var download = require('view/download.html');


            var _h = _.template(header);
            var _f = _.template(footer);
            var _d = _.template(download);



            $('.nav').html(_h());
            $('.footer').html(_f());
            $('.container').html(_d());
        },
        slide: function() {
            var util = require('./util.js');

            util.nav();
            
           
        },

        clickFn:function(){
        function scrollnumber(element, cssname, offset) {
            var a, b, c, d;
            d = $(element).offset().top;
            a = eval(d + offset);
            b = $(window).scrollTop();
            c = $(window).height();
            if (b + c > a) {
                $((element)).addClass((cssname));
            }
        }
       
         
        function scrollfun() {
            scrollnumber("#download", 'fadeInDown2 animated', 0);
            scrollnumber("#d-phone", 'fadeInUp1 animated', 0);
            scrollnumber(".d-n", 'zoomIn animated', 0);



        }

        $(document).ready(function(e) {
            scrollfun();
            $(window).scroll(function() {
                scrollfun();
            });
        });
    }

    }
    module.exports = hanxu;
});
