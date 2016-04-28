/*
	@2016/4/19
	@irene
 */

// 动态footer位置显示
var footer = document.getElementsByTagName('footer')[0];
if(footer.offsetTop <= (document.documentElement.clientHeight)){
	footer.style.position = 'fixed';
}else{
	footer.style.position = 'static';
}

// sidebar fixed;
var sidebar = document.querySelector(".leftsidebar"),
	sidebarTop = sidebar.offsetTop;
window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > sidebar.offsetTop){
		sidebar.style.position = 'fixed';
		sidebar.style.marginTop = '20px';
	}
	if(scrollTop <= sidebarTop){
		sidebar.style.position = 'static';
		sidebar.style.marginTop = '-40px';
	}
}