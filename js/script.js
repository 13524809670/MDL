$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})
$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});

	$('.btn-a').click(function(){
		var radio_a= $('input:radio[name="sex"]:checked').val();
	    if(radio_a==null){
	    	alert('亲，你想交白卷吗？');
	        return false;
        }
        else{
        	$('.main_body .tab').eq(1).css('display','block').siblings().css('display','none');
        }
	})

	$('.btn-b').click(function(){
		var radio_b= $('input:radio[name="sex1"]:checked').val();
        if(radio_b==null){
        	alert('亲，你想交白卷吗？');
            return false;
        }
        else{
        	$('.main_body .tab').eq(2).css('display','block').siblings().css('display','none');
        }
	})

	$('.btn-c').click(function(){
		var radio_c= $('input:radio[name="sex2"]:checked').val();
        if(radio_c==null){
    		alert('亲，你想交白卷吗？');
            return false;
        }
        else{
        	$('.main_body .tab').eq(3).css('display','block').siblings().css('display','none');
        	// window.location.href="Submit-info.html";
        }
	})


	// $("input[type='button']").click(function(){
	// 	if($("input[type='radio']").is(':checked')) {
	// 	    window.location.href="Question-two.html";
	// 	}
	// 	else{
	// 		alert('亲，你想交白卷吗？');
	// 	}
	// })	


	$('#submit').click(function(){
		var name = $('#name').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var company = $('#company').val();

		if(name==""){
			alert("请输入姓名");
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}
		if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email))){
			alert('请输入正确的邮箱地址');
			return false;
		}
		if(address==''){
			alert("联系地址不能为空");
			return false;
		}
		if(company==''){
			alert("公司名称不能为空");
			return false;
		}
		
		window.location.href="Submit-success.html";

		// $.ajax({
		// 	type : "post",
		// 	url : "XXXXXX",
		// 	// dataType : "json",
		// 	data : {
		// 		"name": name, 
		// 		"phone": phone,
		// 		"company": company,
		// 	},
		// 	success : function(data) {
		// 		window.laction.href = "Submit-success.html";
		// 	},
		// 	error : function() {
		// 		alert("页面出错！");
		// 	}
		// });
	})
})