$(document).ready(function() {
  // Range prices
  const $inputPrice = $('.js-range-price')
  const $inputFromPrice = $('.js-range-input-from')
  const $inputToPrice = $('.js-range-input-to')
  let min = 0
  let max = 1000
  $inputPrice.ionRangeSlider({
    type: 'round',
    skin: 'round',
    min,
    max,
    from: 0,
    to: 300,
    hide_from_to: true,
    hide_min_max: true,
    onStart: updatePriceInputs,
    onChange: updatePriceInputs,
    onFinish: updatePriceInputs
  })
  const instancePrice = $inputPrice.data('ionRangeSlider')

  function updatePriceInputs(data) {
    from = data.from
    to = data.to

    $inputFromPrice.prop('value', from)
    $inputToPrice.prop('value', to)
  }

  $inputFromPrice.on('change', function () {
    let val = $(this).prop('value')

    // validate
    if (val < min) {
      val = min // 0
    } else if (val > to) {
      val = to
    }

    instancePrice.update({
      from: val
    })

    $(this).prop('value', val)
  })

  $inputToPrice.on('change', function () {
    let val = $(this).prop('value')

    // validate
    if (val < from) {
      val = from
    } else if (val > max) {
      val = max
    }

    instancePrice.update({
      to: val
    })

    $(this).prop('value', val)
  })

  // Ranage rating star
  const $ionRangeStar = $('.js-range-star')
  const $inputFromStar = $('.js-range-star-input-from')
  const $inputToStar = $('.js-range-star-input-to')
  $ionRangeStar.ionRangeSlider({
    type: 'round',
    skin: 'round',
    min: 1,
    max: 5,
    // grid: true,
    hide_from_to: true,
    hide_min_max: true,
    onStart: updateStartInputs,
    onChange: updateStartInputs
  })
  const instanceStar = $ionRangeStar.data('ionRangeSlider')
  function updateStartInputs(data) {
    fromStar = data.from
    toStar = data.to
    $inputFromStar.prop('value', fromStar)
    $inputToStar.prop('value', toStar)
  }

  $inputFromStar.on('change', function () {
    const val = $(this).prop('value')
    instanceStar.update({
      from: val
    })
    $(this).prop('value', val)
  })
  $inputToStar.on('change', function () {
    const val = $(this).prop('value')
    instanceStar.update({
      to: val
    })
    $(this).prop('value', val)
  })
})
