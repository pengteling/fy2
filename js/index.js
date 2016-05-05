if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('../index.html');
    require("./../sass/style.scss");
}
;
require("./../sass/style.scss");
require("./pJqueryAppearAnimateCSS3/jac.js"); //动画

require("./superslide/jquery.SuperSlide.2.1.2.js");
//require("./../css/style.css");
//require("./../sass/style.scss");
//require("./../sass/style.less");

$(function(){
	jQuery(".slidebox").slide({titCell:".hd ul",mainCell:".bd", effect:"leftLoop",autoPlay:"true",autoPage:"true"});
})

