
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;

    	parent_fieldset.find('input[type="text"], input[type="email"] ,input[type="password"], textarea, select').each(function(id) {
			id = $(this).attr("id");
				$(this).siblings("span").html("");
				var regex = /[0-9 %*()$#@./,<>&[\|{}]/g;
				var errOut =$(this).siblings("span");
				// $(this).val().match(regex) ||
				if($(this).val() === "" && id === "companyname"){
					$(this).addClass('input-error');
    	 			next_step = false;
					//var errmsg = $(this).val().match(regex) ? errOut.html("Invalid character(s) entered") : 
					errOut.html("* Field required");
				} 
				else if(id === "companyaddress" && $(this).val() === ""){
					$(this).addClass('input-error');
    	 			next_step = false;
					errOut.html("* Field required");					 
				}
				else if(id === "products" && $(this).val() === ""){
					$(this).addClass('input-error');
    	 			next_step = false;
					errOut.html("* Please select an option");
				}
				else if(id === "contactperson"){
					if($(this).val() === "" || $(this).val().match(regex)){
						$(this).addClass('input-error');
    	 				next_step = false;
						var errmsg = $(this).val().match(regex) ? errOut.html("Invalid character(s) entered") : 
						errOut.html("* Field required");
					} 
				} 
				else if(id === "phoneno"){
					regex = /\d/g;
					if($(this).val() === "" || !$(this).val().match(regex)){
						$(this).addClass('input-error');
    	 				next_step = false;
						var errmsg = !$(this).val().match(regex) ? errOut.html("Invalid character(s) entered") : 
						errOut.html("* Field required");
					} 
				} 
				else if(id === "email"){
					regex = /([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g;
					if($(this).val() === "" || !$(this).val().match(regex)){
						$(this).addClass('input-error');
    	 				next_step = false;
						var errmsg = !$(this).val() == "" ? errOut.html("Invalid email address") : 
						errOut.html("* Field required");
					}
				}
				else if(id === "logistics" &&  $(this).val() == ""){
					$(this).addClass('input-error');
    	 			next_step = false;
					errOut.html("* Please select an option");
				} 
				else if(id === "locations" &&  $(this).val() == ""){
					$(this).addClass('input-error');
    	 			next_step = false;
					errOut.html("* Please select an option");
				} 
				else if(id === "customerbase" &&  $(this).val() == ""){
					$(this).addClass('input-error');
    	 			next_step = false;
					errOut.html("* Please select an option");
				}
				else if(id === "erp" &&  $(this).val() == ""){
					$(this).addClass('input-error');
    	 			next_step = false;
					errOut.html("* Please select an option");
				}
				else {
					$(this).removeClass('input-error');
				}

    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
