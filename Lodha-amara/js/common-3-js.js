/*==================== Start: DOWN Enquiry Ajax ===============*/

function getEnquiry_submit_popup()
{

var uname = $("input#downEnquiry_username").val();
var uemail = $("input#downEnquiry_email").val();
var umobile = $("input#downEnquiry_number").val();
var source_block = $("input#sourcedownEnquiry").val();
var ucomment = $("input#downEnquiry_comment").val();
var uReferer = $("input#rS_downEnquiry").val();
var timePicker = $("input#time-to-call-popUp").val();
var countryCode = $("#countryCode").val();
document.getElementById("validation-error_popup_dwn").style.display="block";
jQuery('#getEnquiry_submit_popup_wait').html('<div class="checksetform"><i class="fa fa-spinner fa-pulse"></i>Please Wait...</div>');
$("#validation-error_pop_dwn").html('<div style="padding:0 10px 10px 10px;"><img src="360assets/common/images/loading.gif" width="128" height="15" /> <span style="font-size:15px;">Please Wait..</span></div>');
jQuery.ajax({

type: "POST",
url:  "main/validate_mee_with_inline_message",
dataType: 'json',
data: {name: uname, email: uemail, mobile: umobile, source_block:source_block, comment: ucomment, referer:uReferer, timePicker:timePicker, countryCode:countryCode},
success: function(res) { 
if (res)
{
//jQuery("div#test").show();
if(res.st == 0)
{
jQuery("#fname-popup").html(res.fname);
jQuery("#email-popup").html(res.email);
jQuery("#mobile-popup").html(res.mobile);
jQuery('#getEnquiry_submit_popup_wait').replaceWith('<div id="getEnquiry_submit_popup_wait" class="inmicro"><input type="button" name="" value="submit" onclick="getEnquiry_submit_popup();"></div>');
$("#validation-error_popup_dwn").html('');

}

if(res.st == 1)
{
 jQuery('#getEnquiry_submit_popup_wait').html('<div class="submit_btn_pop CheckIcon"><i class="fa fa-spinner fa-pulse"></i>Please Wait...</div>'); 
 jQuery("div#validation-error_popup_dwn").html(res.msg);
 $('<iframe id="cnn" height="1" width="1" name="cnn" >').attr('src', "http://"+window.location.host+'/main/thanks').appendTo('body');
}

}

//document.getElementById("querybox_username").placeholder = "Enter Your Name";
//document.getElementById("querybox_email").placeholder = "Enter Your Email ID";
//document.getElementById("querybox_number").placeholder = "Enter Your Number";
}
});
}
/*==================== End: DOWN Enquiry Ajax ===============*/

// bottom js

$(window).scroll(function() {     
var scroll = $(window).scrollTop();
if (scroll > 300) {
$(".bottom-query").addClass("active1");
}
else {
$(".bottom-query").removeClass("active1");
}
});



/*==================== Start: Download Contact Us Ajax ===============*/


function contactUs_submit()
{
var uname = $("input#contactUs_username").val();
var uemail = $("input#contactUs_email").val();
var umobile = $("input#contactUs_number").val();
var source_block = $("input#sourcecontactUs").val();
var country=$("select#contactUs_country").val();
var ucomment = $("input#contactUs_comment").val();
var uReferer = $("input#rS_contactUs").val();
var timePicker = $("input#time-to-call-contactUs").val();
var countryCode = $("#countryCode").val();
document.getElementById("validation-error-contact-us").style.display="block";
jQuery('#contactUs_submit_wait').html('<div><button class="contsubmitsection" type="button"><i class="fa fa-spinner fa-pulse"></i> Please Wait...</button></div>');
//$("#validation-error-contact-us").html('<div style="padding:0 10px 10px 10px;"><img src="360assets/common/images/loading.gif" width="128" height="15" /> <span style="font-size:15px;">Please Wait..</span></div>');
jQuery.ajax({

type: "POST",
url:  "main/validate_mee_with_inline_message",
dataType: 'json',
data: {name: uname, email: uemail,country: country, mobile: umobile, source_block:source_block, comment: ucomment, referer:uReferer, timePicker:timePicker, countryCode:countryCode},
success: function(res) { 
if (res)
{
//jQuery("div#test").show();
if(res.st == 0)
{ 
jQuery("#fname-error-contact").html(res.fname);
jQuery("#email-error-contact").html(res.email);
jQuery("#mobile-error-contact").html(res.mobile);
$("#validation-error-contact-us").html('');
jQuery('#contactUs_submit_wait').replaceWith('<div class="col-md-12" id="contactUs_submit_wait"> <button type="button" class="contsubmitsection" onclick="contactUs_submit();">submit</button></div>');
}

if(res.st == 1)
{
	jQuery('#contactUs_submit_wait').html('<div class="contact-us-L-button contact-form-submit CheckIcon"><i class="fa fa-spinner fa-pulse"></i>Please Wait...</div>');
 jQuery("span#validation-error-contact-us").html(res.msg);
 $('<iframe id="cnn" height="1" width="1" name="cnn" >').attr('src', "http://"+window.location.host+'/main/thanks').appendTo('body');
}

}

document.getElementById("contactUs_username").placeholder = "Enter Your Name";
document.getElementById("contactUs_email").placeholder = "Enter Your Email ID";
document.getElementById("contactUs_number").placeholder = "Enter Your Number";
}
});

}
/*});
});*/
/*==================== End: Download Contact Us Ajax ===============*/

/*==================== Start: DOWN Enquiry Ajax ===============*/

function bottom_query_form1()
{
var uname = $("input#downEnquiry_username1").val();
var uemail = $("input#downEnquiry_email1").val();
var umobile = $("input#downEnquiry_number1").val();
var source_block = $("input#sourcequerybox1").val();
var ucomment = $("input#downEnquiry_comment1").val();
var uReferer = $("input#rS_downEnquiry1").val();
var timePicker = $("input#downEnquiry-tme-pick").val();
var countryCode = $("#countryCode").val();
document.getElementById("validation-error1").style.display="block";
jQuery('#bottom_query_form_wait').html('<div class="bottom-query-submit"><i class="fa fa-spinner fa-pulse"></i> Please Wait...</div>');
//$("#validation-error1").html('<div style="padding:0 10px 10px 10px;"><img src="360assets/common/images/loading.gif" width="128" height="15" /> <span style="font-size:15px;">Please Wait..</span></div>');
jQuery.ajax({

type: "POST",
url:  "main/validate_mee_with_inline_message",
dataType: 'json',
data: {name: uname, email: uemail, mobile: umobile,source_block:source_block, comment: ucomment, referer:uReferer,timePicker:timePicker, countryCode:countryCode},
success: function(res) { 
if (res)
{

if(res.st == 0)
{
jQuery("#fname-error2").html(res.fname);
jQuery("#email-error2").html(res.email);
jQuery("#mobile-error2").html(res.mobile);
jQuery('#bottom_query_form_wait').replaceWith('<div class="bottom-query-box pull-left" id="bottom_query_form_wait"><input name="" onclick="bottom_query_form1();" value="submit" class="bottom-query-submit" type="button"></div>');
$("#validation-error1").html('');
}

if(res.st == 1)
{
 jQuery("div#validation-error1").html(res.msg);
 jQuery('#bottom_query_form_wait').html('<div class="fixed-drop-enquiry-form-button fixed-drop-enu-pw CheckIcon col-md-3 col-xs-6"><i class="fa fa-spinner fa-pulse"></i> Please Wait...</div>');
 $('<iframe id="cnn" height="1" width="1" name="cnn" >').attr('src', "http://"+window.location.host+'/main/thanks').appendTo('body');
}

}

document.getElementById("downEnquiry_username1").placeholder = "Enter Your Name";
document.getElementById("downEnquiry_email1").placeholder = "Enter Your Email ID";
document.getElementById("downEnquiry_number1").placeholder = "Enter Your Number";
}
});
}
/*==================== End: DOWN Enquiry Ajax ===============*/



