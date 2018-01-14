$(window).on("scroll", function () {

    if (($("#wrapper2f").position().top - $(window).scrollTop()) < 0) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("header").removeClass("active");
    }
});

$(document).ready(function () {
    $('.toggle-menu').jPushMenu();
});
$(document).on('click', ' .intersearch2f', function (e) {
    e.stopPropagation()
});


// HAMBURGLERv2

function togglescroll() {
    $('body').on('touchstart', function (e) {});
}
$(document).ready(function () {
    togglescroll()
    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $("body").toggleClass("noscroll");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });

    $(".ratings").rating({
        'size':'xs',
        'displayOnly': true,
        'readonly': true,
        'step': 0.5
    });
    /* if not image give add no-image.png */
    var currURL = window.location.href
    var arrURL = currURL.split("/");
    var protocol = arrURL[0];
    var module = $('input#hModule').val();
    var img = $('img');
    var default_url = protocol + "//" + document.domain + "/statics/sites/" + module + "/assets/images/no-image.png";

    img.error(function () {

        $(this).attr('src', default_url)
    });








});

// PUSH ESC KEY TO EXIT

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".mobilenav").fadeOut(500);
        $(".top-menu").removeClass("top-animate");
        $("body").removeClass("noscroll");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");
    }


$('#autocomplete').keydown(function() {
    var dInput = this.value;
    var catID = $('select[name="sCategory"]').val();
    var districtID = $('select[name="sDistrict"]').val();
    var amphurID = $('select[name="sAmphur"]').val();
    var url = $('input#pageAutocomplate').val();
    

    // console.log(dInput);
    var stringRequest = '';
    var baseurl = '';
    
    if (catID != '')
        stringRequest += 'category_id=' + catID;

    if (amphurID != '' && catID != '') {
        stringRequest += '&';
    }
  
    
    if (amphurID != '')
        stringRequest += 'amphur_id=' + amphurID;

    if (amphurID != '' && districtID != '') {
        stringRequest += '&';
    }

    if (districtID != '')
        stringRequest += 'district_id=' + districtID;
    
    if (stringRequest != '')
        baseurl = url + '?' + stringRequest
    else
        baseurl = url;

    // console.log(baseurl);
   

    // var request = $.ajax({
    //   url: baseurl,
    //   method: "POST",
    //   data: { keywords: keywords },
    //   dataType: "json"
    // });
     
    // request.done(function( msg ) {
    //   console.log(msg);
    // });

      
    // $(".autocomplete").autocomplete({
    //     source: availableTags
    // });
});

});


function filterAutocomplate(){
    var catID = $('select[name="sCategory"]').val();
    var districtID = $('select[name="sDistrict"]').val();
    var amphurID = $('select[name="sAmphur"]').val();
    var url = $('input#pageAutocomplate').val();
    var dInput = $('input[name="search_data"').val();
    // var dInput = this.value;

    // console.log(dInput);
    var stringRequest = '';
    var baseurl = '';
    
    if (catID != '')
        stringRequest += 'category_id=' + catID;

    if (amphurID != '' && catID != '') {
        stringRequest += '&';
    }
  
    
    if (amphurID != '')
        stringRequest += 'amphur_id=' + amphurID;

    if (amphurID != '' && districtID != '') {
        stringRequest += '&';
    }

    if (districtID != '')
        stringRequest += 'district_id=' + districtID;
    
    if (stringRequest != '')
        baseurl = url + '?' + stringRequest
    else
        baseurl = url;

        var result = [];
        var request = $.ajax({
          url: baseurl,
          method: "POST",
          data: { keywords: dInput , categoryID: catID , districtID : districtID , amphurID : amphurID},
          dataType: 'json'
        });
         
        request.success(function( msg ) {
            var json_data = msg.data;
            $.each(json_data ,function(key , v){
                result.push(v.name);
            }); 
        });
       
        $(".autocomplete").autocomplete({
            source: result
        });
  
}

function filterSearch() {
    var amphurID = $('select[name="sAmphur"]').val();
    var districtID = $('select[name="sDistrict"]').val();
    var catID = $('select[name="sCategory"]').val();
    var url = $('input#pageURL').val();


    var stringRequest = '';

    
    if (catID != '')
        stringRequest += 'category_id=' + catID;

    if (amphurID != '' && catID != '') {
        stringRequest += '&';
    }
  
    
    if (amphurID != '')
        stringRequest += 'amphur_id=' + amphurID;

    if (amphurID != '' && districtID != '') {
        stringRequest += '&';
    }

    if (districtID != '')
        stringRequest += 'district_id=' + districtID;
    
    if (stringRequest != '')
        window.location.href = url + '?' + stringRequest
    else
        window.location.href = url;
}

function filterPlaces() {
    var provID = $('select[name="sProvince"]').val();
    var catID = $('select[name="sCategory"]').val();
    var url = $('input#pageURL').val();

    var stringRequest = '';
    
    
    if (catID != '')
        stringRequest += 'category_id=' + catID;

    if (provID != '' && catID != '') {
        stringRequest += '&';
    }
    
    if (provID != '')
        stringRequest += 'province_id=' + provID;

    if (stringRequest != '')
        window.location.href = url + '?' + stringRequest
    else
        window.location.href = url;
}