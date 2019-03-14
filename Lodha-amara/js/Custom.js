
//Light gallery start

$(document).ready(function () {
    debugger
    $('#lightgallery').lightGallery();
    $('#lightgallery1').lightGallery();
    $('#lightgallery2').lightGallery();
    $('#lightgallery3').lightGallery();
    $('#lightgallery4').lightGallery();
    $('#lightgallery5').lightGallery();
    $('#lightgallery6').lightGallery();

//Light gallery end

    //global variables for Ip address and Browsername
    var Ipaddress;
    var objbrowserName = navigator.appName;
    var result = getBrowserName();
    var browser = result.browser.name;
    var currentTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    var device;

    //user Agent Info starts
    if
        (
            navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/Windows Phone/i)
        )
        {
            device = "Mobile";
        }

    else if
        (
            navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)

        )
        {
            device = "Tablet";
        }
    else if 
        (
            navigator.userAgent.match(/BlackBerry/i)
        )
        {
            device = "Blackberry";
        }
    else
    {
        device = "Desktop";
    }
    //User Agent Info Ends

    //Ip Address Detection start
    $.getJSON("http://jsonip.com?callback=?", function (data) {
        Ipaddress = data.ip;
    });
    //Ip Address End


    //Detect Browser Name starts
    function getBrowserName() {
        var parser = new UAParser();
        var result = parser.getResult();
        return result;
    }
    //browser Name Ends
    //Register Form
    $('#RegisterNowForm').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = "No Name";
        obj.p_email = "noemail@email.com";
        obj.p_mobilenumber = $('#getInstantCallNumber').val();
        obj.p_pref = "Get Instant Call Back Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        //obj.p_prospectid = MXCProspectId;
        SendLead(obj);
        return false;
    })
    //VertualTour Form code start 
    $("#VertualTourForm").on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#VertualTourname').val();
        obj.p_email = $('#VertualTouremail').val();
        obj.p_mobilenumber = $('#VertualTournumber').val();
        obj.p_pref = "360 view form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "214";
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;        
        SendLeadTour(obj);
        return false;
    })
    $("#FestivleOfferform").on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#FestivleOffername').val();
        obj.p_email = $('#VertualTouremail').val();
        obj.p_mobilenumber = $('#FestivleOffernumber').val();
        obj.p_pref = "diwali offer top homepage";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "214";
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);
        return false;
    })
    //Emi Caculator code start 
    $("#EmiForm").on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#EmiFormname').val();
        obj.p_email = $('#EmiFormemail').val();
        obj.p_mobilenumber = $('#EmiFormnumber').val();
        obj.p_pref = "Emi Calculator Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "214";
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        $("#EmiCalculator").modal('hide');
        SendLeadEMI(obj);
        return false;
    })
//Price info start
    $('#pricepopupfrm').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#txtname').val();
        obj.p_email = $('#txtemail').val();
        obj.p_mobilenumber = $('#txtnumber').val();
        obj.p_pref = "Know More Query Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);


        return false;
    })


    //Price info start
    $('#EnquireNowform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#EnquireNowname').val();
        obj.p_email = $('#EnquireNowemail').val();
        obj.p_mobilenumber = $('#EnquireNownumber').val();
        obj.p_pref = "Know More Query Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);


        return false;
    })


    $('#DetailsAmenitiesform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#DetailsAmenitiesname').val();
        obj.p_email = $('#DetailsAmenitiesemail').val();
        obj.p_mobilenumber = $('#DetailsAmenitiesnumber').val();
        obj.p_pref = "Know More About Amenities Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);


        return false;
    })


    $('#HomeMeetingform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#HomeMeetingname').val();
        obj.p_email = $('#HomeMeetingemail').val();
        obj.p_mobilenumber = $('#HomeMeetingnumber').val();
        obj.p_pref = "Request for a Presentation at your Home/Office Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);


        return false;
    })


    //Price info end
    //Map info start
    $('#MapForm').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#MapFormname').val();
        obj.p_email = $('#MapFormemail').val();
        obj.p_mobilenumber = $('#MapFormnumber').val();
        obj.p_pref = "Urgent Location Required";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);


        return false;
    })


    //Map info end
    //Virtual tour start
    $('#tourForm').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#tourname').val();
        obj.p_email = $('#touremail').val();
        obj.p_mobilenumber = $('#tournumber').val();
        obj.p_pref = "Virtual Tour Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        $('#virtual-tour').modal('hide');
        SendLeadTour(obj);
        return false;
    })

    //Virtual tour end

    //DropInqury start
    $('#dropAnEnquiry').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#dropname').val();
        obj.p_email = $('#dropemail').val();
        obj.p_mobilenumber = $('#dropnumber').val();
        obj.p_pref = "Top Contact Us Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);

        return false;
    })
    //DropInqury end

    //Bottom form start
    $('#bottomForm').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#enquiryName').val();
        obj.p_email = $('#enquiryemail').val();
        obj.p_mobilenumber = $('#enquirenumber').val();
        obj.p_pref = "Enquire Now Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
        //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);

        return false;
    })
    //Bottom form end

    //brochure form start
    $('#brochureform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#brochurename').val();
        obj.p_email = $('#brochureemail').val();
        obj.p_mobilenumber = $('#brochurenumber').val();
        obj.p_pref = "Download Brochure Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);
        return false;
    })
    //brochure form end
    //Price table code form start
    $('#PriceEnquiryForm').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#PriceEnquiryFormname').val();
        obj.p_email = $('#PriceEnquiryFormemail').val();
        obj.p_mobilenumber = $('#PriceEnquiryFormnumber').val();
        obj.p_pref = "Download Brochure Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);
        return false;
    })
    //Price table code form start
    //Video form start
    $('#CodeNamevideoform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#CodeNamevideoformname').val();
        obj.p_email = $('#CodeNamevideoformemail').val();
        obj.p_mobilenumber = $('#CodeNamevideoformnumber').val();
        obj.p_pref = "Lodha Code Name Gold Mine Video";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);
        return false;
    })
    //Video form start
    $('#CodeNamevideoform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#CodeNamevideoformname').val();
        obj.p_email = $('#CodeNamevideoformemail').val();
        obj.p_mobilenumber = $('#CodeNamevideoformnumber').val();
        obj.p_pref = "Lodha Code Name Gold Mine Video";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);
        return false;
    })

    $('#Directionform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#Directionformname').val();
        obj.p_email = $('#Directionformemail').val();
        obj.p_mobilenumber = $('#Directionformnumber').val();
        obj.p_pref = "Lodha Code Name Gold Mine Video";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLead(obj);
        return false;
    })
    //Video form end
    //Floor Plan form start
    $('#FloorPlanform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#FloorPlanformname').val();
        obj.p_email = $('#FloorPlanformemail').val();
        obj.p_mobilenumber = $('#FloorPlanformnumber').val();
        obj.p_pref = "Download Brochure Floor Plan";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLeadFloorPlan(obj);
        return false;
    })
    //Floor Plan form end
    //bustime start
    $('#bustime').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#clienttimename').val();
        obj.p_email = $('#clienttimeemail').val();
        obj.p_mobilenumber = $('#clienttimenumber').val();
        obj.p_pref = "Enquire Now Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        SendLeadTime(obj);
        $('#bustimetable').modal('hide');
        $('#popimagetime').show();
        return false;
    })

    //bustime end

    //emeraldthanevideo start
    $('#hoodivideoform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#hoodivideoname').val();
        obj.p_email = $('#hoodivideoemail').val();
        obj.p_mobilenumber = $('#hoodivideonumber').val();
        obj.p_pref = "Video Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        $("#hoodivideo").modal('hide');
        $("#videoplay").modal('show');
        $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {
            
        });

        //$('#bustimetable').modal('hide');
        //$('#popimagetime').show();
        return false;
    })
    //emeraldthanevideo end
  

    //directionform start
    $('#CodenameVideoform').on("submit", function () {
        debugger;
        var obj = {};

        obj.p_username = $('#CodenameVideoname').val();
        obj.p_email = $('#CodenameVideoemail').val();
        obj.p_mobilenumber = $('#CodenameVideonumber').val();
        obj.p_pref = "Videos Form";
		obj.p_leadtype = "Lodha Amara Thane";
		obj.p_source = "Website";
		obj.p_launchname = "Codename Crown Jewel";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        $("#CodenameVideo").modal('hide');
        $("#videoplay2").modal('show');
        obj.p_ipaddress = Ipaddress;
        obj.p_userbrowser = browser;
        obj.p_visittimestamp = currentTime;
        obj.p_useragent = device;
        $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {

        });
        return false;
    })

    //directionform start
    $('#getinstant').on("submit", function () {
        debugger;
        var obj = {};
        obj.p_username = "No Name";
        obj.p_email = "noemail@email.com";
        obj.p_mobilenumber = $('#getinstantnumber').val();
        obj.p_pref = "Instant Call Back Form";
        obj.p_leadtype = "Lodha Amara Thane";
        obj.p_launchname = "Codename Crown Jewel";
        obj.p_source = "Website";
        obj.p_projectid = "129";
       //obj.p_prospectid = MXCProspectId;
        $("#InstanCallBack").modal('hide');
        $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {

        });
        return false;
    })
});
//directionform end

//relevent code start 
var SendLead = function (obj) {


    $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {
        window.location.href = "Thankyou.html";

    });
    return false;
}
//Emi code start 
var SendLeadEMI = function (obj) {

    $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {
        alert("Thank You! Our Property Expert Will Get in Touch with You Soon");
        $("#EmiSection").slideDown("slow");


    });
}
//Floor Plan
var SendLeadFloorPlan = function (obj) {


    $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {
        window.location.href = "/Brochure/edited_Codename_Crown_Jewel_Plans_Book_Amara.pdf";

    });
    return false;
}

var SendLeadTour = function (obj) {


    $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {

        var redirectWindow = window.open('https://www.lodhagroup.com/droneviewamara/', '_blank');
        redirectWindow.location;
        window.location.reload();

        //window.open(http://pixeldo.com/showcase/00aerials/GodrejEMERALD/Emerald.html);

    });
    return false;
}


var SendLeadTime = function (obj) {
    debugger
    $.post("https://new.leads.craftproperty.com/api/leads", obj, function (data) {

    });
    return false;

}

function reload() {
    debugger
    window.location.reload();
}

//relevent code end 

//Number value start 
function character(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
    if (charCode > 33 && (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)) {
        alert("Enter only characters");
        return false;
    }
    return true;
}
//Number value end

//Chat section code start

window.$zopim || (function (d, s) {
    var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
    d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
        z.set.
        _.push(o)
    }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute('charset', 'utf-8');
    $.src = '//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4'; z.t = +new Date; $.
    type = 'text/javascript'; e.parentNode.insertBefore($, e)
})(document, 'script');

$zopim(function () {
    $zopim.livechat.button.setOffsetVerticalMobile(55);
    $zopim.livechat.button.setOffsetHorizontalMobile(10);
});

function showHide() {
    document.getElementById("hidden").style.display = "block";
}

//Chat section code end

//Initialise Bootstrap Carousel Touch Slider




