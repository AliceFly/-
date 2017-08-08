/**
 * Created by Administrator on 2017/7/31.
 */
$(function() {
    /* 顶部的鼠标移入颜色变化 */
    // 1.发生的目标元素 a
    // 2. 什么事件 mouseover,mouseout
    // 3.改变链接颜色
    $('.top a').mouseover(function() {
        $(this).css('color','#fff');
    }).mouseout(function() {
        $(this).css('color','#a4b094');
    })
    /* 购物车特效 */
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /* 表单的输入特效 */
    $('.ser1').mouseover(function() {
        if(flag){
            $('.ser1 input').css('border','1px solid #aaa');
            $('.ser2').css('border','1px solid #aaa').css('borderLeft','none');
        }
    }).mouseout(function() {
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
        }

    })
    /* 表单获取焦点时的效果 */
    $('.ser1 input').focus(function() {
        flag = false;
        $('.ad').addClass('hide');
        $(this).css('border','1px solid #ff6700');
        $('.ser2').css({'border': '1px solid #ff6700','borderLeft': 'none'
        });
        $('.keywordsList').show().css({'border': '1px solid #ff6700','borderTop': 'none'})
    }).blur(function() {
        flag = true;
        $('.ad').removeClass('hide');
        $(this).css('border','1px solid #ccc');
        $('.ser2').css('border','1px solid #ccc');
        $('.keywordsList').hide().css('border','1px solid #ccc')
    })
    /* 关键词效果 */
    $('.keywordsList li').mouseover(function() {
        $(this).css('background','#fafafa');
    }).mouseout(function() {
        $(this).css('background','#fff');
    })
    /* 热门搜索的移入效果 */
    $('.ad a').mouseover(function() {
        $(this).css({'color': '#fff','background': '#ff6700'})
    }).mouseout(function() {
        $(this).css({'color': '#333','background': '#eee'})
    })
    /* 按钮移入后的效果 */
    $('.ser2').mouseover(function() {
        if(flag) {
            $('.ser1 input').css('border','1px solid #aaa');
            $(this).css({
                'color': '#fff',
                'background': '#ff6700'
            })
        }
    }).mouseout(function() {
        if(flag) {
            $('.ser1 input').css('border','1px solid #ccc');
            $(this).css({
                'color': '#000',
                'background': '#fff'
            })
        }
    })
    /* 导航效果 */
    $('.nav li').mouseover(function() {
        $(this).children('a').css('color','#ff6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            // finish() 停止当前正在运行的动画，删除所有排队的动画，并且目前的动画跳转到其最终值。
            $('.select').slideDown().finish();
            // $('.select').find('ul') 和 $('.select ul') 作用相同
            $('.select').find('ul').addClass('hide');
            $('.select ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function() {
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function() {
        $('.select').slideUp();
    })
    $('.select ul').mouseover(function() {
        $('.select').slideDown().finish();
    }).mouseout(function() {
        $('.select').slideUp();
    })
    /* 轮播图效果 */
    var num = 0;
    var timer;
    timer = setInterval(autoPlay,5000);
    $('.round li').mouseover(function() {
        clearInterval(timer);
        num = $(this).index();
        displayImg();
        });
    $('.banner').mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoPlay,5000);
    });
    // 上一张
    $('.direc-L').click(function() {
        clearInterval(timer);
        num = num - 1;
        if(num < 0) {
            num = 4;
        }
        displayImg();
    })
    // 下一张
    $('.direc-R').click(function() {
        clearInterval(timer);
        num = num + 1;
        if(num > 4) {
            num = 0;
        }
        displayImg();
    })
    var displayImg = function() {
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
        $('.round li').eq(num).css({
            'background': 'rgba(255,255,255,0.4)',
            'borderColor': 'rgba(0,0,0,0.3)'
        }).siblings().css({
            'borderColor': 'rgba(255,255,255,0.3)',
            'background': 'rgba(0,0,0,0.4)'
        });
    }
    function autoPlay() {
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /* 隐藏的导航 */
    $('.navL li').mouseover(function() {
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function() {
        $(this).css('background','transparent');
    })
    /* 鼠标移出二级导航的范围后，让它消失 */
    $('.navL').mouseout(function() {
        $('.navHide').addClass('hide');
    })
    /* 用户移入三级导航的时候，也要让它显示 */
    $('.ulHide').mouseover(function() {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function() {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })

    $('.ulHide li').mouseover(function(){
        $(this).find('p').css('color','#ff6700');
    }).mouseout(function(){
        $(this).find('p').css('color','#333333');
    });

    $('.buy').mouseover(function(){
        $(this).css({color:'#fff',background:'#ff6700'});
    }).mouseout(function(){
        $(this).css({color:'#ff6700',background:'#fff'});
    });
    /* 快速通道效果 */
    $('.channel ul li').mouseover(function() {
        $(this).find('a').css('color','#fff');
    }).mouseout(function() {
        $(this).find('a').css('color','#cfcdcb');
    })
    /* 商品推销效果 */
    $('.promo ul li').mouseover(function() {
        $(this).css({'boxShadow':'0 10px 30px #eee','marginTop': '-2px'});
    }).mouseout(function() {
        $(this).css({'boxShadow': 'none','marginTop': '0'});
    })
    /* 小米明星单品效果*/
    nextPlay($('.next'),1,$('.scroll'),$('.prev'));
    prevPlay($('.prev'),$('.scroll'),$('.next'));
    // 自动轮播
    $('.p').mouseover(function() {
        clearInterval(clockLR);
    }).mouseout(function() {
        clockLR=setInterval(autoLR,5000);
    })
    var clockLR = setInterval(autoLR,5000);
    function autoLR() {
        $('.scroll').css('left')!='0px' ? ($('.scroll').css('left','0px'),$('.next').css('color','#888'),$('.prev').css('color','rgb(223, 223, 224)')) :($('.scroll').css('left','-1240px'),$('.prev').css('color','#888'),$('.next').css('color','rgb(223, 223, 224)'));
    }
    // 智能硬件 阴影效果
    marginList('.product1'),marginList('.productYJ');
    // 搭配、配件、周边 评价效果
    $('.ProLi li').mouseover(function() {
        $(this).find('.slideDiv').stop(true,false).slideDown('fast');
    }).mouseout(function() {
        $(this).find('.slideDiv').stop(true,false).slideUp('fast');
    })
    // 搭配、配件、周边 tab切换效果
    displayList('.list41','.productR2'),displayList('.list42','.productR3'),displayList('.list5','.productR4');
    // 为你推荐效果
    $('.scroll2 li').mouseover(function(){
        $(this).find('img').css('marginTop','48px');
    }).mouseout(function(){
        $(this).find('img').css('marginTop','50px');
    });
    nextPlay($('.next2'),3,$('.scroll2'),$('.prev2'));
    prevPlay($('.prev2'),$('.scroll2'),$('.next2'));
    // 热评产品
    marginList('.hotList');
    /* 内容效果 */
    marginList('.contList');
    var num2 = [0,0,0,0]; // 用于记录每个模块当前的显示序号
    var index=0; // 获取下标
    $('.contList > li').mouseover(function() {
        index = $(this).index();
        $(this).find('.p2').css('opacity','1')
    }).mouseout(function() {
        $(this).find('.p2').css('opacity','0')
    })
    $('.contList > li').find('.l2').click(function() {
        if(num2[index] > 0) {
            num2.splice(index,1,num2[index]-1);
            contBox();
        }
    })
    $('.contList > li').find('.r2').click(function() {
        if(num2[index] < 3) {
            num2.splice(index,1,num2[index]+1);
            contBox();
        }
    })
    roundOver('.l2'),roundOver('.r2');
    $('.round2 p').click(function() {
        num2[index]=$(this).index();
        contBox();
    }).mouseover(function() {
        if(num2[index] != $(this).index())
            $(this).css('background','#ff6700')
    }).mouseout(function() {
        if(num2[index] != $(this).index())
            $(this).css('background','#b0b0b0')
    })
    $('.goTo').mouseover(function() {
        $(this).css({'background': $(this).css('color'),'color':'#fff'})
    }).mouseout(function() {
        $(this).css({'background': '#fff','color': $(this).parent().css('color')})
    })
    // 视频效果
    marginList('.videoList');
    $('.videoList li>img').mouseover(function() {
        $(this).next().css('color','#ff6700');
    }).mouseout(function() {
        $(this).next().css('color','#fff');
    })
    // 左边阴影效果
    publicList($('.productL li'));
    publicList($('.twoRow li'));
    // 查看全部效果
    $('.toAll a').mouseover(function() {
        $(this).css('color','#ff6700');
        $('.toAll a').find('i').css('color','#ff6700');
    }).mouseout(function() {
        $(this).css('color','rgb(66, 66, 66)');
        $('.toAll a').find('i').css('color','rgb(176, 176, 176)');
    })
    // 右边阴影效果
    $('.productR').find('li').mouseover(function() {
        if($(this).index() != 7)
            $(this).css({'marginTop': '12px','boxShadow': '0 0 28px #aaa'});
    }).mouseout(function() {
        if($(this).index() != 7)
            $(this).css({'marginTop': '14px','boxShadow': 'none'})
    })
    var number = 0; // 对应ul左偏移量
    var n = 0; // 鼠标点击的次数
    /**@intro  封装一个鼠标点击就显示相应产品的函数
     /* @param  obj1 指的是下一张的按钮
     /* @param  obj2 按钮点击的次数
     /* @param  obj3 指的是装下这些产品列表的ul的左偏移量
     /* @param  obj4 指的是上一张
     */
    function nextPlay(obj1,obj2,obj3,obj4) {
        obj1.click(function() {
            if(n < obj2){
                n++;
                number = -(n * 1226) + 'px';
                obj3.css('left',number);
                obj4.css('color','#888')
            }
            if(n == obj2) {
                $(this).css('color','rgb(223, 223, 224)');
            }
        }).mouseover(function() {
            if(n < obj2) {
                $(this).css('color','#ff6700');
            }
        }).mouseout(function() {
            if(n == obj2) {
                $(this).css('color','rgb(223, 223, 224)');
            }else {
                $(this).css('color','#888')
            }
        })
    }
    /**@intro  封装一个鼠标点击就显示相应产品的函数
     /* @param  obj1 指的是上一张的按钮
     /* @param  obj2 指的是装下这些产品列表的ul的左偏移量
     /* @param  obj3 指的是下一张
     */
    function prevPlay(obj1,obj2,obj3) {
        obj1.click(function() {
            if(n > 0){
                n--;
                number = -(n * 1226) + 'px';
                obj2.css('left',number);
                obj3.css('color','#888')
            }
            if(n == 0) {
                $(this).css('color','rgb(223, 223, 224)')
            }

        }).mouseover(function() {
            if(obj2.css('left') != '0px') {
                $(this).css('color','#ff6700')
            }
        }).mouseout(function() {
            if(obj2.css('left') != '0px') {
                $(this).css('color','#888')
            }
        })
    }
    /**@intro  封装一个鼠标移入相应产品的就出现阴影的函数
     /* @param  obj1 公共部分相应产品下的li
     */
    function marginList(obj1) {
        $(obj1).children('li').mouseover(function() {
            $(this).css({'marginTop': '12px','boxShadow': '0 0 28px #aaa'});
        }).mouseout(function() {
            $(this).css({'marginTop': '14px','boxShadow': 'none'});
        })
        return;
    }
    /**@intro  封装一个鼠标移入相应产品的就出现阴影的函数
     /* @param  obj1 产品li中含有ul的
     */
    function publicList(obj1) {
        obj1.mouseover(function() {
            $(this).css({'marginTop': '12px','boxShadow': '0 0 28px #aaa'});
            $(this).next().css('marginTop','16px');
        }).mouseout(function() {
            $(this).css({'marginTop': '14px','boxShadow': 'none'});
            $(this).next().css('marginTop','14px');
        })
        return;
    }
    /**@intro  封装一个鼠标移入相应分类就显示相应产品的函数*/
    function contBox() {
        $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide();
        $('.round2').eq(index).find('p').eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'}).siblings().css({border:'2px solid #fff', background:'#b0b0b0'});
    }
    /**@intro  封装一个鼠标移入内容区域的上/下一张的按钮效果的函数
     /* @param  name 指的是上/下一张的按钮
     */
    function roundOver(name) {
        $('.contList > li').find(name).mouseover(function() {
            $(this).css('background','#757575');
        }).mouseout(function() {
            $(this).css('background','#b0b0b0');
        })
    }
    /**@intro  封装一个鼠标移入相应分类就显示相应产品的函数
     /* @param  obj1 指的是装下这些产品列表的ul
     /* @param  obj1的子对象 指的是装下这些产品列表的li
     /* @param  obj2 相应分类的那个li,当鼠标移到这个li上时，显示相应分类的产品
     */
    function displayList(obj1,obj2){
        $(obj1).find('li').mouseover(function(){
            var a=$(this).index();
            $(obj1).find('li').css({color:'#000',borderBottom:'none'});
            $(this).css({color:'#FF6700',borderBottom:'2px solid #FF6700'});
            $(obj2).children('ul').addClass('hide');
            $(obj2).children('ul').eq(a).removeClass('hide');
        });
        return;
    }

})










