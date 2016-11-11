define(function(require, exports, module) {

    var hanxu = {
        initPage: function() {
            this.helpFn();
            this.slide();
           },
            slide: function() {
            var util = require('./util.js');
            util.nav();
           }, 
           helpFn: function() {
            var header = require('view/header.html');
            var footer = require('view/footer.html');
            var open = require('view/open-account.html');

            var _h = _.template(header);
            var _f = _.template(footer);
            var _o = _.template(open);

            $('.nav').html(_h());
            $('.footer').html(_f());
            $('.container').html(_o());
        }
    }
    module.exports = hanxu;
})
 
           
        
        