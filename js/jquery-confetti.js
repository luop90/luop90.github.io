/**
 *	jquery confetti
 *	jQuery required.
 *
 *	* Copyright 2014 (c) kamem
 *	* http://develo.org/
 *	* Licensed Under the MIT.
 *
 *	Date: 2014.06.28
 */
!function(a){a.fn.confetti=function(b){function c(b,c,d,e){for(var f=0;d>f;f++)a("body").append('<div class="'+className+f+'"></div>'),h[f]={},h[f].left=2*Math.random()*e-e,h[f].top=2*Math.random()*e-e,h[f].bgColor="#"+Math.floor(16777215*Math.random()).toString(16);a("[class*="+className+"]").css({left:b+"px",top:c+"px"})}function d(b,c,d,f){a("[class*="+className+"]").each(function(g){a(this).css({background:h[g].bgColor}),e(a(this),h[g].left,h[g].top,b,c,d,f)})}function e(b,c,d,e,f,h,k){var l=setInterval(function(){var h=b.position().left,m=b.position().top;c*=e,d=d*e+f,b.css({left:h+c+"px",top:m+d+"px"}),a("body").height()<m+d&&(i++,b.remove()),i===g.num&&(clearTimeout(l),k&&!j&&(k(),j=!0))},h)}var f=this,g=a.extend({x:f.offset().left+f.width()/2,y:f.offset().top+f.height()/2,num:20,speedRange:10,airResistanceNum:.95,gravityNum:.45,intervalSpeed:30,complate:!1},b),h=[],i=0,j=!1;className="confetti",c(g.x,g.y,g.num,g.speedRange),d(g.airResistanceNum,g.gravityNum,g.intervalSpeed,g.complate)}}(jQuery,this);
