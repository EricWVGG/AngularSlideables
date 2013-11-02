angular.module('angularSlideables', [])

.directive('slideable', function () {
    return {
        restrict:'C',
        transclude: true,
        scope: false,
        template: '<div class="slideable_content" style="margin:0 !important; padding:0 !important" ng-transclude ></div>',
        link:function (scope, element, attrs) {
            // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
            element.css({
                'overflow' : 'hidden',
                'height' : '0px',
                'transitionProperty' : 'height',
                'transitionDuration' : attrs.duration,
                'transitionTimingFunction' : attrs.easing,
                'webkitTransitionProperty' : 'height',
                'webkitTransitionDuration' : attrs.duration,
                'webkitTransitionTimingFunction' : attrs.easing,
            }).addClass('contracted');
            
            var expanded = false;
            scope.$on('slideToggle', function(e, data) {
                if(data.id == attrs.id) {
                    if(!expanded) {
                        var content = element.find('div')[0];
                        content.style.border = '1px solid rgba(0,0,0,0)';
                        var y = content.clientHeight;
                        content.style.border = '0px';
                        element.css('height', y + 'px').addClass('expanded').removeClass('contracted');
                    } else {
                        element.css('height', '0px').removeClass('expanded').addClass('contracted');
                    }
                    expanded = !expanded;
                }
            });
        }
    };
})

.directive('slideToggle', ['$rootScope', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.expanded = false;
            element.bind('click', function() {
                $rootScope.$broadcast( 'slideToggle', {id: attrs.slideToggle} );
            });
        }
    }
}]);


