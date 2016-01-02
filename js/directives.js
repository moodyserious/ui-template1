var directives = angular.module("Mydirectives", []);

directives.directive("secondSection", function(){
    return {
        restrict: "EA",
        templateUrl : "templates/secondSection.html"
    }
});

directives.directive("thirdSection", function(){
    return {
        restrict: "EA",
        templateUrl : "templates/thirdSection.html"
    }
});

directives.directive("fourthSection", function(){
    return {
        restrict: "EA",
        templateUrl : "templates/fourthSection.html"
    }
});

directives.directive("lastSection", function(){
    return {
        restrict: "EA",
        templateUrl : "templates/lastSection.html"
    }
});