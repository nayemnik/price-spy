$(document).ready(function() {
  // Show | hide option product info
  function collapseProduct() {
    $('.collapse .btn-link').on('click', function () {
      $('[data-name="' + $(this).attr('data-js') + '"]').slideToggle()
      $('[data-js="' + $(this).attr('data-js') + '"]').find('.fa').toggleClass('fa-angle-down')
      $('[data-js="' + $(this).attr('data-js') + '"]').toggleClass('active')
    })
  }
  collapseProduct()

  $('.show-difference-product').on('change', function (event) {
    // fix double click label
    event.preventDefault()
    const itemProduct = []
    const itemCompareActive = []
    // Tìm số lượng item content của một sản phẩm
    $('.product.active .item-content').each(function (i, e) {
      let _text = $(e).text()
      _text = _text.replace(/\n/gi, '')
      _text = _text.trim()
      itemProduct.push(_text)
    })

    // So sánh để được một array active hoặc false
    $('.product').each(function (i, e) {
      const _text = $(e).find('.item-content')
      _text.each(function (index, el) {
        let _text = $(el).text().replace(/\n/gi, '')
        _text = _text.trim()
        if (itemProduct[index] === _text) {
          itemCompareActive[index] = 'false'
        } else {
          itemCompareActive[index] = 'active'
        }
      })
    })

    // Tìm tổng số lượng item content để set class active khi không giống nhau
    const _lenghtProduct = $('.product').length
    let setCompareActive = []
    // Không lấy các .item của thằng .product-placeholder
    for (var i = 0; i < _lenghtProduct - 1; i++) {
      setCompareActive = setCompareActive.concat(itemCompareActive)
    }
    if ($(this).find('input:checked').length != 0) {
      for (var i = 0; i < setCompareActive.length; i++) {
        if (setCompareActive[i] === 'active') {
          document.querySelectorAll('.product .item')[i].classList.add('active')
        }
      }
    } else {
      for (var i = 0; i < setCompareActive.length; i++) {
        if (setCompareActive[i] === 'active') {
          document.querySelectorAll('.product .item')[i].classList.remove('active')
        }
      }
    }
  })

  function countProduct() {
    const len = $('.product').length
    if (len < 3) {
      $('.product-placeholder').show()
    }
    if (len > 4) {
      $('.compare-body').addClass('full')
    } else {
      $('.compare-body').removeClass('full')
    }
  }
  countProduct()

  // Close button call fn countProduct add class active
  $('.product-info .btn-close').on('click', function() {
    $(this).parents('.product')
    const _parent = $(this).parents('.product')
    if (_parent.hasClass('active')) {
      _parent.next().addClass('active')
    }
    _parent.remove()
    countProduct()
  })

  $('.btn-add').on('click', function() {
    $('.compare-search').toggleClass('show')
    if ($(this).text() === 'Add') {
      $(this).text('Close')
    } else {
      $(this).text('Add')
    }
  })
  $('.compare-search').on('click', function(e) {
    if ($(e.target).hasClass('compare-search show')) {
      $(this).removeClass('show')
      $(this).find('.btn-add').text('Add')
    }
  })
})
