
"use strict";

// custom input file 

document.querySelector("html").classList.add('js');

var fileInputs = document.querySelectorAll(".input-file"),
    buttons = document.querySelectorAll(".input-file-trigger"),
    the_returns = document.querySelectorAll(".file-return"),
    fileInputArr = _toConsumableArray(fileInputs),
    buttonsArr = _toConsumableArray(buttons),
    the_returnsArr = _toConsumableArray(the_returns);

for (var i = 0; i < fileInputArr.length; i++) {
  $(buttonsArr[i]).on("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      fileInputArr[i].focus();
    }
  });
  // buttonsArr[i].addEventListener("click", function (event) {
  //   console.log( buttonsArr[0])
  //   console.log( fileInputs[0])
  //   // fileInputArr[i].focus();
  //   return false;
  // });
  fileInputArr[i].addEventListener("change", function (event) {
    console.log("changed");
    $(this).parent().parent().next().text(this.files[0].name);
  });
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
} // hide Loader


$("html").removeClass("overflowHidden");

window.onload = function () {
  // WOW ANIMATION
  new WOW().init();
  $('#loading').fadeOut();
  $("html").removeClass("overflowHidden");
};

$(document).ready(function () {
  // swiper init
  var swiper = new Swiper('header .swiper-container', {
    autoplay:{
        delay: 4500,
        disableOnInteraction: true,
        waitForTransition:true
    } ,
    
    loop: true,
    slidesPerView: 1,
    speed: 1500,
    navigation: {
      nextEl: 'header .swiper-button-next_w',
      prevEl: 'header .swiper-button-prev_w'
    }
  });
  var swiper2 = new Swiper('.ourProjects .swiper-container', {
    autoplay: {
      delay: 4500,
      disableOnInteraction: true
    },
    loop: true,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
      nextEl: '.ourProjects .swiper-button-next_w',
      prevEl: '.ourProjects .swiper-button-prev_w'
    }
  })

  var swiper3 = new Swiper('.values .swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 80,
    speed: 1100,
    navigation: {
      nextEl: '.values .swiper-button-next_w',
      prevEl: '.values .swiper-button-prev_w'
    }
  });
  var swiper4 = new Swiper('.single_slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.single_slider .swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.single_slider .swiper-button-next_w',
      prevEl: '.single_slider .swiper-button-prev_w'
    }
  }); // make navbars position sticky

     

    $(".swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
        
    }, function() {
        (this).swiper.autoplay.start();
    });
    

  function fixNav(el) {
    var currentScroll = $(window).scrollTop(); // get current position

    if ($("body").hasClass("homePage")) {
      if (currentScroll >= "70") {
        // apply position: fixed if you
        $(el).addClass('fixme');
        $(".nav_search img").attr("src", $(".nav_search img").attr("src_b"));
        $(".navbar li a img").each(function(i,el) {
          $(el).attr("src", $(".navbar.fixme").attr("imgSrc2"));
          
        })
      } else {
        $(el).removeClass('fixme');
        $(".nav_search img").attr("src", $(".nav_search img").attr("src_w"));
        $(".navbar li a img").each(function(i,el) {
          $(el).attr("src", $(".navbar").attr("imgSrc"));
          
        })
      }
    } else {
      $(".nav_search img").attr("src", $(".nav_search img").attr("src_b"));
    }
  }


  if ( $(".navbar").hasClass("fixme")){
    $(".navbar li a img").each(function(i,el) {
      $(el).attr("src", $(".navbar.fixme").attr("imgSrc2"));
      
    })
  } else {
    $(".navbar li a img").each(function(i,el) {
      $(el).attr("src", $(".navbar.fixme").attr("imgSrc"));
      
    })
  }





  var nav = $('.homePage .navbar');
  $(window).scroll(function () {
    fixNav(nav);
  });
  fixNav(nav); // open and close menu 

  $("#navbar__menu").on("click", function (e) {
    e.preventDefault();
    $("#Menupopup").fadeToggle();
    $("html").addClass("overflowHidden");
    $("#outerWrapper").addClass("overflowHidden");
  });
  $("#Menupopup, .closeMenu").on("click", function () {
    $("#Menupopup").fadeToggle();
    $("html").removeClass("overflowHidden");
    $("#outerWrapper").removeClass("overflowHidden");
  });
  $(".popup__container").click(function (e) {
    e.stopPropagation();
  }); // open and close search div

  $(".nav_search").on("click", function (e) {
    e.preventDefault();
    $("#searchDiv").fadeToggle();
    $("body").addClass("overflowHidden");
    $("#outerWrapper").addClass("overflowHidden");
  });
  $(" .closeSearch").on("click", function () {
    $("#searchDiv").fadeToggle();
    $("body").removeClass("overflowHidden");
    $("#outerWrapper").removeClass("overflowHidden");
  }); // dynamic tabs

  $(".tabs.main li a").each(function (i, el) {
    $(el).on("click", function () {
      $(".tabs.main li a").removeClass("active");
      $(el).addClass("active");
      var tabName = $(el).attr("data-href");
      $(".tabData").fadeOut().removeClass("active");
      $(".tabData[data-target=".concat(tabName, "]")).fadeIn().addClass("active");
     
    });
    
  });
  $(".tabs.secondery li a").each(function (i, el) {
    $(el).on("click", function () {
      $(".tabs.secondery li a").removeClass("active");
      $(el).addClass("active");
      $('html, body').animate({
        scrollTop: $(".horizontalTabs .col2of3.data_cont").offset().top - 100
    }, 600);
      var tabName = $(el).attr("data-href");
      $(".prodLines .dataDiv").css("display", "none").removeClass("active");
      $(".prodLines .dataDiv[data-target=".concat(tabName, "]")).fadeIn(700).addClass("active");
    });
  });

  $("#tab_mobile").on("change", function () {
    var relatedData = $("#tab_mobile").val();
    $(".prodLines .dataDiv").css("display", "none").removeClass("active");
    $(".prodLines .dataDiv[data-target=".concat(relatedData, "]")).fadeIn().addClass("active");
  });

  $(".tabs.third li a").each(function (i, el) {
    $(el).on("click", function () {
      $(".tabs.third li a").removeClass("active");
      $(el).addClass("active");
      $('html, body').animate({
        scrollTop: $(".horizontalTabs .col2of3.data_cont").offset().top - 100
    }, 800);
      var tabName = $(el).attr("data-href");
      $(".indSectors .dataDiv").fadeOut().removeClass("active");
      $(".indSectors .dataDiv[data-target=".concat(tabName, "]")).fadeIn().addClass("active");
      console.log("yees")
     
    });
  });
  $("#tab_mobile2").on("change", function () {
    var relatedData = $("#tab_mobile2").val();
    var selectedImgSrc = $(".indSectors .tabs").find($("[data-href=".concat(relatedData, "]"))).find(".icon").attr("src");
    $("#tab_mobile2").css("background-image", 'url(' + selectedImgSrc + ')');
    $(".indSectors .dataDiv").fadeOut().removeClass("active");
    $(".indSectors .dataDiv[data-target=".concat(relatedData, "]")).fadeIn().addClass("active");
  }); // careers page

  $('.careers_loc_tabs a ').each(function (i, ele) {
    $(ele).click(function () {
      $('.careers_loc_tabs a ').removeClass("active");
      $(ele).addClass("active");
      $(".careers_loc_content").css("display", "none");
      $(".careers_loc_content").each(function (i, el) {
        if ($(el).hasClass($(ele).attr("data-target"))) {
          $(el).fadeIn();
        }
      });
    });
  });
  $("#careers_loc_tabs_select").on("change", function () {
    $(".careers_loc_content").css("display", "none");
    $(".careers_loc_content").each(function (i, el) {
      if ($(el).hasClass($("#careers_loc_tabs_select").val())) {
        $(el).fadeIn();
      }
    });
  });
  $(".careers_loc_content > .careers_loc_content_head").not(".careers_loc_content_head.careers_loc_content_body").each(function (i, el) {
    $(el).on("click", function () {
      $(el).closest(".careers_loc_content").find(".careers_loc_content_body").slideToggle().css("display", "flex");
      $(el).find("img").toggleClass("open");
    });
  }); // career apply now btn scroll to form 

  $(".apply_now_btn a ").each(function (i, el) {
    $(el).on("click", function (e) {
      e.preventDefault();
      var jobName = $(el).closest(".careers_loc_content").find(".careers_loc_content_head-title h3").text().toLowerCase();
      $('html, body').animate({
        scrollTop: $(".application_form_form").offset().top
      }, 800);
      var jobPos = $(".application_form_form").find(".custom_input #Position");
      $(jobPos).val(jobName);

      if ($(el).closest(".careers_loc_content").hasClass("EGYPT")) {
        $("#loc").val("EGYPT");
      } else if ($(el).closest(".careers_loc_content").hasClass("POLAND")) {
        $("#loc").val("POLAND");
      } else if ($(el).closest(".careers_loc_content").hasClass("UAE")) {
        $("#loc").val("UAE");
      }
    });
  }); // 

  var projectToggler = ".ourProjects .main_slider .main_slider_footer";
  var projectImg = ".ourProjects .project .project_img";

  if ($(window).width() > "600") {
    $(projectToggler).each(function (i, el) {
      $(el).css('left', $(".ourProjects").find(".project_img").width());
    });
  } // in careers change submit btn position in smaller screen


  if ($(window).width() < 1200) {
    var submitBtn = $(".application_form").find(".submit_form").detach();
    console.log($(".application_form").find(".custom_input_group").eq(1));
    $(".application_form").find(".custom_input_group").eq(1).append(submitBtn);
  }


  

  function addArrowBefore(parent, child) {
    $(parent).find(child).each(function(i,el) {
      $(el).prepend(`<img  src="${$(parent).attr("imgSrc")}" />`);
      $(el).addClass("tri_bull")
    })
  }

  function addArrowAfter(parent, child) {
    $(parent).find(child).each(function(i,el) {
      $(el).append(`<img  src="${$(parent).attr("imgSrc")}" />`);
      $(el).addClass("tri_bull")
    })
  }

  function addArrowBlueAfter(parent, child) {
    $(parent).find(child).each(function(i,el) {
      $(el).append(`<img  src="${$(parent).attr("imgSrc2")}" />`);
      $(el).addClass("tri_bull")
    })
  }

  addArrowBefore(".construction_sec2 .col2of3", "li");
  addArrowBefore(".construction_sec2 .col1of3", "li");
  addArrowBefore(".horizontalTabs .secondery", "a");
  addArrowBefore(".quality_sec2 .text", "li");
  addArrowBefore(".hse_sec2:not('.hse_sec3') .text", "li");
  addArrowBefore(".hse_sec3:not('.quality3') .text", "li");
  addArrowBefore(".prodLines .data_cont", "li");
  addArrowBefore(".footer_links ", "li a");
  addArrowAfter(".homePage .navbar ", "li a");
  addArrowBlueAfter(" .navbar.fixme ", "li a");


  

  $(".popup .menu-item  a").each(function(i,el) {
    $(el).prepend(`<img class="tri" src="${$(".popup .main").attr("imgSrc")}" alt=""/>`);
    
  })








}); //jquery end




