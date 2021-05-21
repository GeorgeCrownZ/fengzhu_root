$(function(){
	//底部菜单的js
	$(".footer li").click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	//点击账号登录，登录按钮和内容隐藏；验证码按钮和内容显示
	$(".h_zhbtn").click(function(){
		$(this).hide()
		$(".w_zhlogin").hide()
		$(".h_yzmbtn").show()
		$(".w_yzmlogin").show()
	})
	//点击验证码登录，验证码按钮和内容隐藏；登录按钮和内容显示
	$(".h_yzmbtn").click(function(){
		$(this).hide()
		$(".w_yzmlogin").hide()
		$(".h_zhbtn").show()
		$(".w_zhlogin").show()
	})
	
	

	//分类中的js
	// var value = $('.h_number input').value;
	// $(".h_add").click(function(){
	// 	alert('a');
	// 	$(this).prev("input").show()
	// 	$(this).prev().prev().show()
	// })
	
})