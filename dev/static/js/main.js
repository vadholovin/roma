$(document).ready(function () {
  
  /**
   * Menu
   */
  let toggleMenu = function () {
    $('.hamburger').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('is-active');
      $('.mobile-nav').toggleClass('is-active');
    });
  
    $('.mobile-nav__overlay, .mobile-nav a').click(function () {
      $('.mobile-nav').removeClass('is-active');
      $('.hamburger').removeClass('is-active');
    });
  };


  /**
   * Scroll Header
   */
  let scrollHeader = function () {
    $(window).scroll(function(){
      let body = $('body'),
          b = $(window).scrollTop(),
          windowWidth = $(window).width();
          header = $('.header'),
          extraClass = 'header--scrollable',
          headerHeight = header.outerHeight();
  
      if (windowWidth < 769 && b > 100) {
        header.addClass(extraClass);
        body.css('padding-top', headerHeight);
      } else if ( b < 100) {
        header.removeClass(extraClass);
        body.css('padding-top', 0);
      }
  
    });
  };



  /**
   * Tabs
   */
  let clickTabs = function () { 
    let tabBtn = $('.js-tabs-nav > *'),
        tabContent = $('.tab'),
        tabName;
    
    tabBtn.click(function (e) {
      e.preventDefault();
      tabBtn.removeClass('is-active');
      $(this).addClass('is-active');
      tabName = $(this).data('tab-name');
      selectTab(tabName);
    });

    function selectTab(tabName) {
      tabContent.each(function() {
        if ($(this).hasClass(tabName)) {
          $(this).addClass('is-active')
        } else {
          $(this).removeClass('is-active');
        }
      });
    }
  };


  /**
   * Dropdown
   */
  let awardsDropdown = function () {
    let toggler = $('.js-tabs-nav-toggler'),
        value = $('.js-tabs-nav-value'),
        nav = $('.awards-tabs__nav'),
        navItem = $('.awards-tabs__nav > *');
    
    toggler.click(function (e) {
      e.preventDefault();
      if (nav.is(':hidden')) {
        nav.show(500);
      } else {
        nav.hide(500);
      }
    });

    navItem.click(function (e) { 
      e.preventDefault();
      let textValue = $(this).text()
      value.text(textValue);
      if ($(window).width() < 768) {
        nav.hide(500);
      }
    });

    if ($(window).width() >= 768) {
      nav.removeAttr('style');
    }
  };


  /**
   * Show youtube video
   */
  let showVideo = function () {
    let iframe = $('.gallery-video__media iframe');
    
    iframe.each(function () {
      let iframe_src       = $(this).attr('src');
      let youtube_video_id = iframe_src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
      
      if (youtube_video_id.length == 11) {
        let imageUrl = '//img.youtube.com/vi/'+youtube_video_id+'/0.jpg';
        $(this).siblings('.gallery-video__play').css('background-image', 'url(' + imageUrl + ')');
      }
    });

    $('.gallery-video__play').click(function() {
      $(this).prev().css('display','block');
      $(this).css('display','none');
    });
  };


  toggleMenu();
  scrollHeader();
  clickTabs();
  awardsDropdown();
  showVideo();
});