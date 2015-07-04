'use strict';

import 'bootstrap-slider';

function sliderDirective() {
    return {
        restrict: 'EA',
        replace: true,
        require: '^ngModel',
        template: '<div>' +
        '<div class="wiz-slider">' +
        '<input type="text"/>' +
        '</div>' +
        '<div class="scales"></div>' +
        '<div style="position: relative" class="slider-markup">' +
        '<div id="min-value"></div>' +
        '<div id="max-value"></div>' +
        '</div>' +
        '</div>',
        link: function (scope, element, attr, ngModelController) {
            var id = attr.id,
                $slider = element.find('input'),
                $min = $('#min-value'),
                $max = $('#max-value');

            $slider.attr('id', id);
            $slider.attr('data-slider-id', id + '-slider');
            $slider.attr('data-slider-value', attr.sliderValue);
            $slider.attr('data-slider-step', attr.sliderStep);
            $slider.attr('data-slider-min', attr.sliderMin);
            $slider.attr('data-slider-max', attr.sliderMax);

            $min.attr('id', attr.id + 'min');
            $min.html(attr.sliderMin);
            $max.attr('id', attr.id + 'max');
            $max.html(attr.sliderMax);

            $slider.slider({
                formatter: function (value) {
                    return value;
                },
                tooltip: 'always'
            });

            $slider.on('slide', function (event) {
                ngModelController.$setViewValue(event.value);
            });
            ngModelController.$setViewValue(attr.sliderValue);
        }
    };
}

export default sliderDirective;