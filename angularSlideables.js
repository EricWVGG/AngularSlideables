angular.module('angularSlideables', [])

.directive('slideable', function () {
    return {
        restrict:'C',
        transclude: true,
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
                if(data.id == '#'+attrs.id) {
                    if(!expanded) {
                        // find hidden node
                            var content = element.find('div')[0];
                        // make a border so we can correctly measure margins
                            content.style.border = '1px solid rgba(0,0,0,0)';
                        // measure node height and remove border
                            var y = content.clientHeight;
                            content.style.border = '0px';
                        // expand hidden node
                            element.css('height', y + 'px').addClass('expanded').removeClass('contracted');
                    } else {
                        // contract node
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


