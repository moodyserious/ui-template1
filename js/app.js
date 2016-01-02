/**
 * Created by you on 2/12/2015.
 */
var app = angular.module("myApp", ["ui.bootstrap", "ui.router" ,"Mydirectives", "Mycontrollers", "Myservices"]);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/home.html',
                    controller: 'homecontroller'
                }
            }
        })


    $urlRouterProvider.otherwise('/home');
});