/**
 * Created by Administrator on 2017/8/4.
 */
var num2=[0,0,0,0];    //用于记录每个模块当前的显示序号
var index=0;
$('button').click(function() {
    num2.splice(index,1,num2[index]+1);
})