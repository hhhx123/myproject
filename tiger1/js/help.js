define(function(require, exports, module) {

    var hanxu = {
        initPage: function() {
            this.helpFn();

            this.showFn();

        },
        helpFn: function() {

            var that = this;
            var header = require('view/header.html');
            var footer = require('view/footer.html');
            var help = require('view/help.html');

            var _h = _.template(header);
            var _f = _.template(footer);
            var _p = _.template(help);


            $('.nav').html(_h());
            $('.footer').html(_f());
            // $('.container').html(_p());

            $.ajax({
                url: 'json/help.json',
                success: function(res) {
                    // console.log(res);
                    var txt = res.txt;
                    $('.container').html(_p({
                        txt: txt
                    }));
                    that.clickFn();
                    hanxu.slide();
                }
               
             })
                
         },  
         showFn: function() {
            $('.helpfaq').click(function() {
                console.log('1111');
            })
        },
        slide: function() {
            var util = require('./util.js');

            util.nav();


        },
        clickFn: function() {

            $('.helpfaq').click(function() {
                console.log('1111');
            })

            $(".main").sliphover({
                target: ".help a"
            });

            $(".helpfaq h5").click(function() {
                var index = $(".helpfaq h5").index($(this));
                console.log(index);
                $(".helpfaq p").eq(index).slideToggle(500);
                $(".helpfaq h5 span").eq(index).toggleClass("icon1");
            })
        }
    }
   module.exports = hanxu;
 
})
   
    

