


var visible_height=$(window).height();
//$(".main-box0").css('height',visible_height);
//$(".main-box").css('margin-top',visible_height);
//$(".main-box1").css('top',visible_height);
//$(".main-box4").css('height',visible_height);
var flow_two_li=$(".flow_two li").width()+56;
var flow_two_li_sum=flow_two_li*32;
$(".flow_two ul").css('width',flow_two_li_sum);
var num=0;
var inter_list=setInterval(function(){
    $(".flow_two ul").css('left',-num);
    num=flow_two_li+num;
    console.log(num+ '  '+flow_two_li+'  '+flow_two_li_sum);
    if(num>=flow_two_li_sum){
        num=0;
    }
},1500);
$(".flow_two ul,.btn_flow_two").mouseover(function(){
    clearInterval(inter_list);
})
$(".flow_two ul,.btn_flow_two").mouseout(function(){
    inter_list=setInterval(function(){
        $(".flow_two ul").css('left',-num);
        num=flow_two_li+num;
        if(num>=flow_two_li_sum){
            num=-flow_two_li;
        }
    },1500);
})
$(".flow_two_left").click(function(){
    clearInterval(inter_list);
    num=num+flow_two_li*2;
    $(".flow_two ul").css('left',-num);
})
$(".flow_two_right").click(function(){
    clearInterval(inter_list);
    num=num-flow_two_li*2;
    $(".flow_two ul").css('left',-num);
})

//动态图表创建开始
$(function () {
    $('#date_d').highcharts({
        chart: {
            zoomType: 'xy',
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
        title: {
            text: '逐小时预报'
        },
        subtitle: {
            text: '北京气象局'
        },
        xAxis: [{
            categories: ['10：00', '10：30', '11：00', '11：30', '12：00', '12：30',
                '13：00', '14：00', '15：00', '16：00', '17：00', '18：00'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '温度',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '降雨量',
                style: {
                    color: Highcharts.getOptions().colors[6]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[6]
                }
            }
        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: '气压',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} mb',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0)'
        },
        series: [{
            name: '降雨量',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }
        }, {
            name: '气压',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb'
            }
        }, {
            name: '温度',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: ' °C'
            }
        }]
    });
});
//动态图表创建结束

//底部折线图开始
$(function () {
    $('#qwdb_data').highcharts({
        chart: {
            //zoomType: 'xy',
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
        title: {
            text: '往年气温对比图',
            x: -20
        },
        subtitle: {
            text: '数据来源: 北京气象局',
            x: -20
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            title: {
                text: '温度 (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '近10天',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '近1月',
            data: [22, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '近3月',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '去年',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        },{
            name: '近10年',
            data: [22, 6, 3.5, 8.4, 15, 17.0, 1.6, 17.9, 14, 9.0, 3, 1.0]
        },{
            name: '近30年',
            data: [9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 1, 14.3, 9.0, 3, 1.0]
        }]
    });
});


$(function () {
    $('#jsdb_data').highcharts({
        chart: {
            //zoomType: 'xy',
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
        title: {
            text: '往年降水对比图',
            x: -20
        },
        subtitle: {
            text: '数据来源: 北京气象局',
            x: -20
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            title: {
                text: '降水 (mm)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'mm'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '近10天',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '近1月',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 1.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '近3月',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '去年',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        },{
            name: '近10年',
            data: [-9, 6, 3.5, 8.4, 15, 17.0, 1.6, 17.9, 14, 9.0, 3, 1.0]
        },{
            name: '近30年',
            data: [9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 1, 14.3, 9.0, 3, 1.0]
        }]
    });
});
//底部折线图结束
//需动态获取显示  ~~~~~~~~~~~~~~~
$(".box4-ul").children().eq(3).addClass("newPrompt_start");
//box4主特效
var box4_height=$(".box4-div").height();
var box4_widht=$(".main-box4").width();
$(".hid-div").css('height',box4_height).css('top',-box4_height).css('left',box4_widht);
$(".box4-ul li").click(function(){
    $(".hid-div").css('left',0)
})

$(".exit-span").click(function(){
    $(".hid-div").css('left',box4_widht)
})

//所有修改样式辅助js
$("#navbar li").eq(0).hover(
    function(){
        $(this).find('img').attr('src','img/sy2.png');
    },
    function(){
        $(this).find('img').attr('src','img/sy1.png');
    });
$("#navbar li").eq(1).hover(
    function(){
        $(this).find('img').attr('src','img/gc2.png');
    },
    function(){
        $(this).find('img').attr('src','img/gc1.png');
    });
$("#navbar li").eq(2).hover(
    function(){
        $(this).find('img').attr('src','img/yj2.png');
    },
    function(){
        $(this).find('img').attr('src','img/yj1.png');
    });
$("#navbar li").eq(3).hover(
    function(){
        $(this).find('img').attr('src','img/yb2.png');
    },
    function(){
        $(this).find('img').attr('src','img/yb1.png');
    });
$("#navbar li").eq(4).hover(
    function(){
        $(this).find('img').attr('src','img/ms2.png');
    },
    function(){
        $(this).find('img').attr('src','img/ms1.png');
    });
$("#navbar li").eq(5).hover(
    function(){
        $(this).find('img').attr('src','img/fwcp2.png');
    },
    function(){
        $(this).find('img').attr('src','img/fwcp1.png');
    });
$("#navbar li").eq(6).hover(
    function(){
        $(this).find('img').attr('src','img/qhtj2.png');
    },
    function(){
        $(this).find('img').attr('src','img/qhtj1.png');
    });


//预警文字滚动
$("#font_inner1 li:eq(0)").clone(true).appendTo($("#font_inner1"));
var liHeight1 = $("#swiper_wrap1").height();
var totalHeight1 = ($("#font_inner1 li").length *  $("#font_inner1 li").eq(0).height()) -liHeight1;
$("#font_inner1").height(totalHeight1);
var index01 = 0;
var autoTimer1 = 0;
var clickEndFlag1 = true;

function tab1(){
    $("#font_inner1").stop().animate({
        top: -index01 * liHeight1
    },400,function(){
        clickEndFlag1 = true;
        if(index01 == $("#font_inner1 li").length -1) {
            $("#font_inner1").css({top:0});
            index01 = 0;
        }
    })
}
function next1() {
    index01++;
    if(index01 > $("#font_inner1 li").length - 1) {
        index01= 0;
    }
    tab1();
}
function prev1() {
    index01--;
    if(index01 < 0) {
        index01 = $("#font_inner1 li").size() - 2;
        $("#font_inner1").css("top",- ($("#font_inner1 li").size() -1) * liHeight1);
    }
    tab1();
}
$("#swiper_wrap1 .gt").on("click",function() {
    if(clickEndFlag1) {
        next1();
        clickEndFlag1 = false;
    }
});
$("#swiper_wrap1 .lt").on("click",function() {
    if(clickEndFlag1) {
        prev1();
        clickEndFlag1 = false;
    }
});
autoTimer1 = setInterval(next1,3000);
$("#font_inner1 a").hover(function(){
    clearInterval(autoTimer1);
},function() {
    autoTimer1 = setInterval(next1,3000);
})

$("#swiper_wrap1 .lt,#swiper_wrap1 .gt").hover(function(){
    clearInterval(autoTimer1);
},function(){
    autoTimer1 = setInterval(next1,3000);
})

//预警滚动2
$("#font_inner2 li:eq(0)").clone(true).appendTo($("#font_inner2"));
var liHeight = $("#swiper_wrap2").height();
var totalHeight = ($("#font_inner2 li").length *  $("#font_inner2 li").eq(0).height()) -liHeight;
$("#font_inner2").height(totalHeight);
var index0 = 0;
var autoTimer = 0;
var clickEndFlag = true;

function tab(){
    $("#font_inner2").stop().animate({
        top: -index0 * liHeight
    },400,function(){
        clickEndFlag = true;
        if(index0 == $("#font_inner2 li").length -1) {
            $("#font_inner2").css({top:0});
            index0 = 0;
        }
    })
}
function next() {
    index0++;
    if(index0 > $("#font_inner2 li").length - 1) {
        index0 = 0;
    }
    tab();
}
function prev() {
    index0--;
    if(index0 < 0) {
        index0 = $("#font_inner2 li").size() - 2;
        $("#font_inner2").css("top",- ($("#font_inner2 li").size() -1) * liHeight);
    }
    tab();
}
$("#swiper_wrap2 .gt").on("click",function() {
    if(clickEndFlag) {
        next();
        clickEndFlag = false;
    }
});
$("#swiper_wrap2 .lt").on("click",function() {
    if(clickEndFlag) {
        prev();
        clickEndFlag = false;
    }
});
autoTimer = setInterval(next,3000);
$("#font_inner2 a").hover(function(){
    clearInterval(autoTimer);
},function() {
    autoTimer = setInterval(next,3000);
})

$("#swiper_wrap2 .lt,#swiper_wrap2 .gt").hover(function(){
    clearInterval(autoTimer);
},function(){
    autoTimer = setInterval(next,3000);
})

//自动匹配滚动字体颜色
var txt_sum=$(".flowearly li").length;
var txt_htm="";
var txt_len=0;
var show_htm="";
for(var r=0;r<txt_sum;r++){
    txt_htm= $(".flowearly li").eq(r).children().html();
    txt_len=txt_htm.length;
    show_htm=txt_htm.substr(0,16);
    $(".flowearly li").eq(r).children().html(show_htm);
    if(txt_htm.indexOf("蓝色")>=0){
        $(".flowearly li").eq(r).children().css('color','#00fffc');
    }else if(txt_htm.indexOf("红色")>=0){
        $(".flowearly li").eq(r).children().css('color','#fa6d6d');
    }else if(txt_htm.indexOf("橙色")>=0){
        $(".flowearly li").eq(r).children().css('color','#e2b838');
    }
}
//气温降水切换
var jsdb_width=$("#jsdb_data").width();
$("#qwdb_data").css('width',jsdb_width);
$("#jsdb").click(function(){
    $("#jsdb_data").css('display','inline-block');
    $("#qwdb_data").css('display','none');
})
$("#qwdb").click(function(){
    $("#qwdb_data").css('display','inline-block');;
    $("#jsdb_data").css('display','none');
})
//实现圆形动画关键代码
var box4div_width=$(".box4-div div").width();
$(".box4-div div").css('height',box4div_width);
var max_hid_width=$(".max_hid").height();
$(".list_hid").css('height',max_hid_width);
$(".box4-div div p").click(function(){
    $(this).addClass("but_hid");
    $(".box4-div div p span").css('display','none');
    $(".exit-span").css('display','inline-block');
    setTimeout(function(){
        $(".list_hid").css('opacity','1');
        $(".list_hid").css('display','block');
        $(".max_hid").css('display','none');
    },800)
})
$(".exit-span").click(function(){
    $(this).css('display','none');
    $(".box4-div div p").removeClass("but_hid");
    $(".box4-div div p span").css('display','inline-block');
    $(".list_hid").css('opacity','0');
    setTimeout(function(){
        $(".list_hid").css('display','none');
        $(".max_hid").css('display','block');
    },800)
})
//导航条代码
var nav_width=$(".nav_ap li").width();
var nav_height=$(".nav_ap").height();
$(".nav_bac").css({'width':nav_width,'height':nav_height});


function deltr(){
    var length=$(".table_tab").length;
    $(".table_tab tr").remove();
}
$(".box1_a").click(function(){
    $(".box1_ul_right").css('top','8%');
    deltr();
    var th='<tr>' +
        '<td></td>'+
        '<td>出现站点</td>'+
        '<td>要素质</td>';
    $(".table_tab").append(th);
    for(var t=0;t<6;t++){
        var tr='<tr>' +
            '<td>温度</td>' +
            '<td>地点'+t+'</td>' +
            '<td>'+t+'</td>';
        $(".table_tab").append(tr);
    }
})
$(".box1_b").click(function(){
    $(".box1_ul_right").css('top','32%');
    deltr();
    var th='<tr>' +
        '<td></td>'+
        '<td>出现时刻</td>'+
        '<td>出现站点</td>'+
        '<td>要素质</td>';
    $(".table_tab").append(th);
    for(var t=0;t<6;t++){
        var tr='<tr>' +
            '<td>温度</td>' +
            '<td>'+t+'</td>' +
            '<td>站点'+t+'</td>'+
            '<td>'+t+'</td>';
        $(".table_tab").append(tr);
    }
    $(".main-box1-p").css("display",'block')
})
$(".box1_c").click(function(){
    $(".box1_ul_right").css('top','56%');
    deltr();
    var th='<tr>' +
        '<td>站名</td>'+
        '<td>小时降水量</td>';
    $(".table_tab").append(th);
    for(var t=0;t<10;t++){
        var tr='<tr>' +
            '<td>地点'+t+'</td>' +
            '<td>'+t+'</td>';
        $(".table_tab").append(tr);
    }
})
$(".box1_d").click(function(){
    $(".box1_ul_right").css('top','80%');
    deltr();
    var th='<tr>' +
        '<td>站名</td>'+
        '<td>小时降水量</td>';
    $(".table_tab").append(th);
    for(var t=0;t<10;t++){
        var tr='<tr>' +
            '<td>地点'+(t+10)+'</td>' +
            '<td>'+t+'</td>';
        $(".table_tab").append(tr);
    }
})
$(".box1_a").hover(
    function(){
        $(this).find('img').attr('src','img/dqsk2.png')
    },
    function(){
        $(this).find('img').attr('src','img/dqsk1.png')
    }
)
$(".box1_a").mousedown(function(){
    $(this).find('img').attr('src','img/dqsk2.png')
})
$(".box1_b").hover(
    function(){
        $(this).find('img').attr('src','img/ztsk2.png')
    },
    function(){
        $(this).find('img').attr('src','img/ztsk1.png')
    }
)

$(".box1_c").hover(
    function(){
        $(this).find('img').attr('src','img/dqxs2.png')
    },
    function(){
        $(this).find('img').attr('src','img/dqxs1.png')
    }
)
$(".box1_d").hover(
    function(){
        $(this).find('img').attr('src','img/ljsk2.png')
    },
    function(){
        $(this).find('img').attr('src','img/ljsk1.png')
    }
)
//动态时间开始
function p(s) {
    return s < 10 ? '0' + s: s;
}
setInterval(function(){
    var mydate=new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth()+1;
    var date=mydate.getDate();
    var h=mydate.getHours();
    var m=mydate.getMinutes();
    var s=mydate.getSeconds();
    var timer=year+"/"+month+"/"+date+" "+h+":"+p(m)+":"+p(s);
    $(".d_time").html(timer);
},1000);
//动态时间结束
var right_fw_wi=$(".right_fw").width()*0.79;
$(".right_fw div").css('height',right_fw_wi);
$(".right_fw p").css({'width':right_fw_wi*0.9,'height':right_fw_wi*0.9});
$(".weather-img8").css({'width':right_fw_wi*0.6,'height':right_fw_wi*0.6});

var box1_hid_width=$(".box1-div").width();
var box1_hid_height=$(".box1-div").height();
$(".box1-hid").css({'height':box1_hid_height,'width':box1_hid_width});
$("#flow_p2").hover(
    function(){
        $(this).find('img').attr('src','img/wdth.png')
    },
    function(){
        $(this).find('img').attr('src','img/温度值.png')
    }
)