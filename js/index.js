/*
	@2016/4/19
	@irene
	*/

	var index_href = window.location.href;
	var iframe = document.getElementsByTagName('iframe');
	var menulist = document.getElementById('menu').getElementsByTagName('li');
	var num = index_href.indexOf('?');
// 获取href参数
var newCs = index_href.slice((function(){
	if(num == -1) {num=index_href.length}
		return num+1;
})(),index_href.length);
// iframe on 取消
function iframe_none(){
	for (var i = 0; i < iframe.length; i++) {				
		iframe[i].className = '';
	};
}

var indexnum =999;
// 判断显示哪个页面
switch(newCs){
	case "about_us":
	set_click(newCs,0)	
	break;
	case "pingtai":
	set_click(newCs,1)
	break;
	case "process":
	set_click(newCs,2)
	break;
	case "mode":
	set_click(newCs,3)
	break;
	case "contact_us":
	set_click(newCs,4)
	break;
	default:			
	var index = 0;		
	iframe[index].className = 'on'
	iframe[index].style.zIndex = indexnum;	
	var homepage = setInterval(homepage_fn,4000)
	function homepage_fn(){						
		index++;
		if(index>=iframe.length)index=0;
		iframe_none()
		mouse_over(iframe[index])
		iframe[index].className = 'on';
		iframe[index].style.zIndex = indexnum++;
	}
	break;
}

function set_click(newCs,num){
	// 清除动画
	clearInterval(homepage)
	iframe_none();
	// 显示当前点击页面索引
	document.getElementById(newCs).className = 'on';
	document.getElementById(newCs).style.zIndex = indexnum;
	// 菜单高亮显示
	menulist[num].className = 'in';
}

var mouse_move=[];
function mouse_over(id){
	var mouse = id.contentWindow.document.getElementsByName("mouse");
	console.log(mouse)
	for (var i = 0; i < mouse.length; i++) {
		mouse[i].onmouseover = function(){
			clearInterval(homepage)
		}
		mouse[i].onmouseout = function(){
			homepage = setInterval(homepage_fn,4000)
		}
	}
}

// mouse_over('about_us')

// mouse_over('contact_us')