$(function () {
  // Toggle show | hide aside-hideable
  $('[data-toggle-js="aside-toggle"]').on('click', function () {
    $(this).toggleClass('active')
    const tabName = $('.tab-content.active').attr('data-tab-name')
    $('.aside-hideable').toggleClass('show')
    if ($('.aside-hideable').hasClass('show') !== true) {
      $('.btn-tab').removeClass('active')
    } else {
      $('[data-tab="' + tabName + '"]').addClass('active')
    }
  })
  
  // Toggle show more | show less products
  $('.has-show-more .toggle-show-less').on('click', function () {
    $(this).parents('.cards').toggleClass('has-show-more')
    const _text = $(this).find('span')
    if (_text.text() === 'Show more') {
      _text.text('Show less')
      $(this).find('.fa').attr('class', 'fa fa-angle-up')
    } else {
      _text.text('Show more')
      $(this).find('.fa').attr('class', 'fa fa-angle-down')
    }
  })
  
  // Target content tabs
  $('.btn-tab').on('click', function () {
    if ($('.aside-hideable').hasClass('show') !== true) {
      $('.aside-hideable').addClass('show')
    }
    $('.btn-tab, .tab-content').removeClass('active')
    $(this).addClass('active')
    const tabName = $(this).attr('data-tab')
    $('[data-tab-name="' + tabName + '"], .btn-double-left').addClass('active')
  })
  
  // show | hide box-account
  $('.btn-account').on('click', function () {
    $(this).next().toggleClass('show')
  })
  $('.aside-bottom .box-info-account').on('click', function (e) {
    if ($(e.target).hasClass('show')) {
      $(this).removeClass('show')
    }
  })
  
  // show | hide mega-menu
  $('.btn-toggle').on('click', function () {
    triggerClick('.btn-search', $(this))
    $('.mega-menu').toggleClass('show')
    $('aside').toggleClass('show')
    $('.btn-tab').removeClass('active')
    $('.aside-hideable').removeClass('show')
  })
  
  // show | hide mega-menu or box-search
  function triggerClick(pr, _this) {
    if ($(pr).hasClass('active')) {
      $(pr).trigger('click')
    }
    _this.toggleClass('active')
  }
  
  // show | hide box-search
  $('.btn-search').on('click', function () {
    triggerClick('.btn-toggle', $(this))
    $('.box-search').toggleClass('show')
  })
  
  // Add class active mega-menu
  $('.mega-item').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })
})
