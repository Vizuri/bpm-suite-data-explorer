'use strict';

// Declare app level module which depends on views, and components
angular.module('bpm_charts', [
    'ngRoute',
    'bpm_charts.bpmChart',
    'bpm_charts.rateChart',
    'bpm_charts.version'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.when('/rateChart', {
            templateUrl: 'components/rateChart/view/view_rateChart.html',
            controller: 'rateChartCtrl',
            service: 'rateChartService'

        })
        .when('/bpmChart', {
            templateUrl: 'components/timeChart/view/view_timeChart.html',
            controller: 'bpmChartCtrl',
            service: 'timeChartService'

        })
        .otherwise({redirectTo:'/bpmChart'});

    }])
    .config(['$logProvider', function ($logProvider) {
        var pageUrl = window.location.href || 'unknown';
        if (pageUrl.indexOf('localhost') != -1) {
            console.log("Enabled debug logging");
            $logProvider.debugEnabled(true); // default is false
        } else {
            console.log("Disabled debug logging");
            // It is set for $log.debug
            $logProvider.debugEnabled(false);
        }
    }]);
