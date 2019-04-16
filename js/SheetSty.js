$(function(){
	var colors = new Array(8);
	var images = new Array(8);
	colors[0]="deepskyblue";
	colors[1]="orangered";
	colors[2]="mediumseagreen";
	colors[3]="orange";
	colors[4]="mediumvioletred";
	colors[5]="#f4f4f4";
	colors[6]="pink";
	colors[7]="#666";
	var middlw= $(".middle_three_ul li");

	for(var i=0;i<colors.length;i++){
		middlw[i].setAttribute('style','background-color: '+colors[i]+';');
	}
})


$(function(){
	var win=$(".win");
	var links=$(".title a");
	var float=$(".float");
	var divs=$(".box div");
	var num1=0;  //ǰݵ±
	var num2=0;
	links.hover(function(){
		//
		divs.finish();
		float.stop(true);
		links.css("color","#009797");
		var that=$(this);
		var lefts=$(this).position().left;
		float.animate({left:lefts},function(){
			that.css("color","#fff");
		})
		//
		//ݱ仯
		var index=$(this).index(".title a");
		num2=index;
		if(num1==num2){
			return;
		}else if(num1<num2){
			divs.eq(num2).css("left",1600).animate({left:0});
			divs.eq(num1).animate({left:-1600});
		}else if(num1>num2){
			divs.eq(num2).css("left",-1600).animate({left:0});
			divs.eq(num1).animate({left:1600});
		}
		num1=num2;
		num2="";
	},function(){

	})
})

 new CanvasJS.Chart('chartContainer',{
        theme:'light7',//主题
        animationEnabled: true, 	
        title: {
            text: "每周消费统计表"
        },
        data: [
            {
                // 数据
                type: "column",
                dataPoints: [
                    { label: "美食", y: 10 },
                    { label: "交通", y: 15 },
                    { label: "电影", y: 25 },
                    { label: "音乐", y: 30 },
                    { label: "出游", y: 28 },
                    { label: "娱乐", y: 58 },
                    { label: "体育", y: 78 }
                ]
            }
        ]
    }).render();