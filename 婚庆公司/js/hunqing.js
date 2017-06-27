window.onload=function(){
    var oUl1=document.getElementsByClassName('lunbotu1')[0];
    var aLi1=oUl1.getElementsByTagName('li');
    var oUl2=document.getElementsByClassName('dotted')[0];
    var aLi2=oUl2.getElementsByTagName('li');
    var timer=null;
    var iNow=0;
    aLi2[iNow].style.background='#ff6600';
    var a=-aLi1[0].offsetWidth;
    oUl1.style.width=-a*aLi1.length+'px';
    timer=setInterval(sun,1000);
    function sun(){
        iNow==aLi1.length-1?iNow=0:iNow++;
        oUl1.style.left=iNow*a+'px';
        for (var i = 0; i < aLi2.length; i++) {
            aLi2[i].index=i;
            aLi2[i].style.background='#636363';
            }
            aLi2[iNow].style.background='#ff6600';
        };
        for (var i = 0; i < aLi2.length; i++) {
            aLi2[i].index=i;
            aLi2[i].onmouseover=function(){
                clearInterval(timer);
                for (var j = 0; j < aLi2.length; j++) {
                    aLi2[j].style.background='#636363';
                };
                aLi2[this.index].style.background='#ff6600';
                var iNow=this.index;
                oUl1.style.left=iNow*a+'px';
            }
            aLi2[i].onmouseout=function(){
                timer=setInterval(sun,1000);
            }
        };
        //选项卡
        var inrtNavChild1=document.getElementsByClassName('inrt-navchild1')[0];
        var inrtNavChild2=document.getElementsByClassName('inrt-navchild2')[0];
        var inRtNav=document.getElementsByClassName('in-rt-nav')[0];
        var inRtNavLi=inRtNav.getElementsByTagName('li');
        inRtNavLi[0].onmouseover=function(){
                inrtNavChild1.style.display='block'
                inrtNavChild2.style.display='none'
        }
        inRtNavLi[1].onmouseover=function(){
                inrtNavChild1.style.display='none'
                inrtNavChild2.style.display='block'
        }
        //左侧焦点轮播
        var leftCarouselFigure=document.getElementsByClassName('left_carousel_figure')[0];
        var LCFaLi=leftCarouselFigure.getElementsByTagName('li');
         var lcfdotted2=document.getElementsByClassName('dotted2')[0];
        var dotted=lcfdotted2.getElementsByTagName('li');
        var iNow1=0;
        var timer1=null;
        dotted[iNow].id='changecolor'
        timer1=setInterval(leftSun, 1000);
        var b=-LCFaLi[0].offsetHeight;
        function leftSun(){
            iNow1==3?iNow1=0:iNow1++;
            leftCarouselFigure.style.top=iNow1*b+'px';
            for (var i = 0; i < dotted.length; i++) {
                dotted[i].id='';
            };
            dotted[iNow1].id='changecolor';
        }
        for (var i = 0; i < dotted.length; i++) {
            dotted[i].index=i;
            dotted[i].onmouseover=function(){
                          clearInterval(timer1);
                for(var j=0; j<dotted.length;j++){
                    dotted[j].id='';
                }
                this.id='changecolor';
                leftCarouselFigure.style.top=this.index*b+'px';
                iNow1=this.index;
            }
            dotted[i].onmouseout=function(){
                  timer1= setInterval(leftSun, 1000);
            }
        };
}

