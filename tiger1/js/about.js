define(function(require, exports, module) {

    var hanxu = {
        initPage: function() {
            this.helpFn();
            this.clickFn();
            this.slide();
        },
        slide: function() {
            var util = require('./util.js');

            util.nav();
            
           
        },
        helpFn: function() {
            var header = require('view/header.html');
            var footer = require('view/footer.html');
            var container = require('view/about.html');
           

            var _h = _.template(header);
            var _f = _.template(footer);
            var _c = _.template(container);
            


            $('.nav').html(_h());
            $('.footer').html(_f());
            $('.container').html(_c());
    },


 clickFn:function(){
function scrollnumber(element,cssname,offset){  
    var a,b,c,d;  
    d=$(element).offset().top;  
    a=eval(d + offset);  
    b=$(window).scrollTop();   
    c=$(window).height();  
    if(b+c>a){  
        $((element)).addClass((cssname));  
    }  
}  
  
function scrollfun(){  
    scrollnumber("#a-txt,#a-txt1,#a-txt2,#a-txt3",'fadeInUp1 animated',0);  
    scrollnumber(".a-show",'swing animated',0);  
    scrollnumber(".a-img",'pulse animated',0);  
    scrollnumber(".at-img",'fadeIn animated',0);  
    scrollnumber(".honor-img",'flip animated',0);  
    scrollnumber(".t3-img",'zoomInDown animated',0);  
     
    

}  
      
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  


$(".tab-nav a").click(function(){
    var count=$(this).parent("td").index();
   $(this).addClass("active").parent("td").siblings().find("a").removeClass("active");
      $(".a-container .about-page").eq(count).show().siblings().hide();
})
   }

   }
         module.exports=hanxu;
})
