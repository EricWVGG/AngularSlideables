angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict:'C',
        link:function (scope, element, attrs) {
            // wrap tag
                var contents = element.html();
                element.html('<div class="slideable_content">' + contents + '</div>');
            // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
            element.css({
                'overflow' : 'hidden',
                'height' : '0px',
                'transitionProperty' : 'height',
                'transitionDuration' : attrs.duration,
                'transitionTimingFunction' : attrs.easing
            });
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    var y = content.offsetHeight;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});

