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
            var log = require('view/log.html');

            var _h = _.template(header);
            var _f = _.template(footer);
            var _l = _.template(log);

            $('.nav').html(_h());
            $('.footer').html(_f());
            $('.container').html(_l());
        },
        clickFn: function() {

            $(".input-text").click(function() {
                $(this).addClass("active").siblings().removeClass("active");
            })

            $(".i1").click(function() {
                $(".e2").fadeOut();
            })
            window.onload = function() {
                var inpEle = document.getElementById('inp');
                var myreg = /^1[3458]\d{9}$/;
                inpEle.onblur = function() {
                    var inpVal = this.value;
                    if (!myreg.exec(inpVal)) {
                        $(".e1").fadeIn();
                        $(".i1").css({ borderColor: "red" })
                            // alert('请输入有效的手机号');
                    } else {
                        // alert('ok');
                        $(".e1").fadeOut();
                        $(".i1").css({ borderColor: "#ccc" })
                    }
                }
                var pwdEle = document.getElementById('pwd');
                pwdEle.onblur = function() {
                    var pwdVal = this.value;
                    if (pwdVal != "") {
                        $(".e2").fadeOut();
                        $(".i2").css({ borderColor: "#ccc" })

                    } else {
                        $(".e2").fadeIn();
                        $(".i2").css({ borderColor: "red" })

                    }
                }
            }
        }

    }
    module.exports = hanxu;
})
