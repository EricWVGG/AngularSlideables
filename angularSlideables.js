angular.module('angularSlideables', [])
.directive('slideable', function () {
    return {
        restrict: 'CA',
        transclude: true,
        template: '<div class="slideable_content" style="margin:0 !important; padding:0 !important" ng-transclude></div>',
        link: function(scope, element, attrs) {
            attrs.duration = (!attrs.duration) ? '100ms' : attrs.duration;
            attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
            var height = (attrs.expanded === 'true') ? '' : '0';
            element.css({
                'overflow': 'hidden',
                'height': height,
                'transitionProperty': 'height',
                'transitionDuration': attrs.duration,
                'transitionTimingFunction': attrs.easing
            });
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;
                        
            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');
                
                if(attrs.expanded === undefined) {
                    attrs.expanded = (target.getAttribute('expanded') == 'true') ? true : false;
                }
                
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});
