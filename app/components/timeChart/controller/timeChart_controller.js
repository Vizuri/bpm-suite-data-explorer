'use strict';

google.charts.load('current', {
    packages: ['corechart']
});

google.charts.setOnLoadCallback(function() {
    angular.bootstrap(document.body, ['bpm_charts']);
});

angular.module('bpm_charts.bpmChart', ['ngRoute'])
    .config(function($logProvider) {
        $logProvider.debugEnabled(false);
    })
    .controller('bpmChartCtrl', ['$scope', '$log', 'timeChartService', 'rateChartService', function($scope, $log, timeChartService, rateChartService) {

        $log.debug('Inside bpmChartCtrl');

        var chart = new google.visualization.LineChart(document.getElementById('chartdiv')); // chartdiv

        $scope.testCase = {};
        $scope.testCases = [{
                                "value": "start_end",
                                "name": "Start/End"
                            },
                            {
                                "value": "seq_flow",
                                "name": "Sequential flow"
                            },
                            {
                                "value": "par_flow",
                                "name": "Parrallel flow"
                            },
                            {
                                "value": "rule_task",
                                "name": "Rule Task"
                            },
                            {
                                "value": "ext_signal",
                                "name": "External Signal"
                            },
                            {
                                "value": "human_task",
                                "name": "Human Task"
                            }


        ];

        $scope.serverConfigOptions = [{ //ServerConfig CheckBox Model
            "value": "med_emb",
            "name": "Medium Embedded",
            checked: false,
        }, {
            "value": "lg_emb",
            "name": "Large Embedded",
            checked: false
        }, {
            "value": "med_remote",
            "name": "Medium Remote",
            checked: false
        }, {
            "value": "med_clus_remote",
            "name": "Clustered Medium Remote",
            checked: false
        }, {
            "value": "lg_med_remote",
            "name": "Large Remote",
            checked: false
        }, {
            "value": "med_singleton",
            "name": "Medium Singleton",
            checked: false
        }];

        function initTimeChart(){

            $log.debug("Inside initTimeChart");

            $scope.graphService = timeChartService;

            $scope.options = { // Graph Options
                title: 'Graph: Mean Time',
                //colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                legend: {
                    position: 'right'
                },
                titlePosition: 'none',
                vAxis: {
                    title: 'Mean Time (milliseconds)'
                },
                hAxis: {
                    title: 'Threads'
                },
                pointSize: 7
            };
        }

        function initRateChart(){

            $log.debug("Inside initRateChart");

            $scope.graphService = rateChartService;

            $scope.options = { // Graph Options
                title: 'Graph: Mean Rate',
                legend: {
                    position: 'right',
                    maxLines: 5
                },
                titlePosition: 'none',
                vAxis: {
                    title: 'Mean Rate (Processes/second)'
                },
                hAxis: {
                    title: 'Threads'
                },
                pointSize: 7
            };
        }

        $scope.changeGraphType = function (graphType){

            $log.debug("Inside changeGraphType", graphType);

            $scope.graphType = graphType;

            if (graphType === "rate"){


                initRateChart();
            }
            else if (graphType === "time"){
                initTimeChart();


            }

            $scope.evalutePersistanceOptions();
        };

        $scope.evalutePersistanceOptions = function() {

            $log.debug("Inside evalutePersistanceOptions", $scope.persistance);

            sessionStorage.setItem('persistance', $scope.persistance);

            //Need to disable & uncheck  the following three serverConfigOptions: med_remote, med_clus_remote, lg_med_remote for No Persistance & Persistance
            for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                if (($scope.persistance === "No_Persistance" || $scope.persistance === "Persistance") &&
                    ($scope.serverConfigOptions[i].value === "med_remote" ||
                        $scope.serverConfigOptions[i].value === "med_clus_remote" ||
                        $scope.serverConfigOptions[i].value === "lg_med_remote" ||
                        $scope.serverConfigOptions[i].value === "med_singleton")) {

                    $scope.serverConfigOptions[i].disabled = true;
                    $scope.serverConfigOptions[i].checked = false;
                } else {
                    $scope.serverConfigOptions[i].disabled = false; //Enable options
                }
            } // end for loop

            // some radio button options are not available for certain types of graphs
            for (var i = 0; i < $scope.testCases.length; i++) {
                if (($scope.persistance === "No_Persistance")  &&
                    ($scope.testCases[i].value === "human_task" ||
                     $scope.testCases[i].value === "ext_signal")) {

                    $scope.testCases[i].disabled = true;
                    //$log.debug("disable", $scope.testCases[i].value);

                } else {
                    $scope.testCases[i].disabled = false; //Enable options
                    //$log.debug("enable", $scope.testCases[i].value);
                }
            } // end for loop

            if (($scope.testCase.selection === "human_task" || $scope.testCase.selection === "ext_signal") &&
                $scope.persistance === "No_Persistance") {

                $log.debug("default to start_end when human task or ext_signal for No_Persistance");
                // if a value was previously selected that needs to be disabled we then default to start/end
                $scope.testCase.selection = "start_end";
            }

            $scope.evaluteGraphOptions(); // Execute evaluateGraphOptions()
        };

        $scope.evaluteGraphOptions = function() { // Main function that evaluates all of the graph options

            $log.debug("Inside evaluteGraphOptions", $scope.persistance, $scope.testCase.selection);


            sessionStorage.setItem('testCase', $scope.testCase.selection);
            sessionStorage.setItem('serverConfigOptions', JSON.stringify($scope.serverConfigOptions));

            var graph_data;
            var data_view;
            var setCol = [0];
            $scope.options.colors = [];


            if ($scope.persistance === "No_Persistance") { // if selected Persistance is No_Persistance

                //$log.debug("Check TestCase", $scope.testCase.selection);

                if ($scope.testCase.selection === "start_end") { // if selected start_end case

                    graph_data = $scope.graphService.getNoPerStartEndData();
                }
                else if ($scope.testCase.selection === "seq_flow") {

                    graph_data = $scope.graphService.getNoPerSeqFlowData();
                }
                else if ($scope.testCase.selection === "par_flow") {

                    graph_data = $scope.graphService.getNoPerParFlowData();
                }
                else if ($scope.testCase.selection === "rule_task") {

                    graph_data = $scope.graphService.getNoPerRuleTaskData();
                }
                else if ($scope.testCase.selection === "ext_signal") {

                    graph_data = $scope.graphService.getNoPerExtSignalData();
                }
                else if ($scope.testCase.selection === "human_task") {

                    graph_data = $scope.graphService.getNoPerHumanTaskData();
                }
            } // No Persistance END
            else if ($scope.persistance === "Persistance") { // Checking if the selected RadioButton is Persistance
                if ($scope.testCase.selection === "start_end") {
                    graph_data = $scope.graphService.getPerStartEndData();

                }
                if ($scope.testCase.selection === "seq_flow") {
                    graph_data = $scope.graphService.getPerSeqFlowData();

                }
                if ($scope.testCase.selection === "par_flow") {
                    graph_data = $scope.graphService.getPerParFlowData();

                }
                if ($scope.testCase.selection === "rule_task") {
                    graph_data = $scope.graphService.getPerRuleTaskData();

                }
                if ($scope.testCase.selection === "ext_signal") {
                    graph_data = $scope.graphService.getPerExtSignalData();

                }
                if ($scope.testCase.selection === "human_task") {
                    graph_data = $scope.graphService.getPerHumanTaskData();

                }
            } // Persistance END
            else if ($scope.persistance === "Persistance_W_Auditing") { // Checking if the selected RadioButton is Persistance_W_Auditing

                if ($scope.testCase.selection === "start_end") {
                    graph_data = $scope.graphService.getPerAuditingStartEndData();

                }
                if ($scope.testCase.selection === "seq_flow") {
                    graph_data = $scope.graphService.getPerAuditingSeqFlowData();

                }
                if ($scope.testCase.selection === "par_flow") {
                    graph_data = $scope.graphService.getPerAuditingParFlowData();

                }
                if ($scope.testCase.selection === "rule_task") {
                    graph_data = $scope.graphService.getPerAuditingRuleTaskData();

                }
                if ($scope.testCase.selection === "ext_signal") {
                    graph_data = $scope.graphService.getPerAuditingExtSignalData();

                }
                if ($scope.testCase.selection === "human_task") {
                    graph_data = $scope.graphService.getPerAuditingHumanTaskData();

                }
            } // Persistance with auditing END


            for (var i = 0; i < $scope.serverConfigOptions.length; i++) {

                if ($scope.serverConfigOptions[i].checked) {

                    if ($scope.serverConfigOptions[i].value === "med_emb") {
                        //$log.debug("selected med_emb");
                        setCol.push(1);
                        $scope.options.colors.push('blue');
                    }
                    else if ($scope.serverConfigOptions[i].value === "lg_emb") {
                        //$log.debug("selected lg_emb");
                        setCol.push(2);
                        $scope.options.colors.push('red');
                    }
                    else if ($scope.serverConfigOptions[i].value === "med_remote") {
                        setCol.push(3);
                        $scope.options.colors.push('green');
                    }
                    else if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                        setCol.push(4);
                        $scope.options.colors.push('gray');
                    }
                    else if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                        setCol.push(5);
                        $scope.options.colors.push('orange');
                    }
                    else if ($scope.serverConfigOptions[i].value === "med_singleton") {
                        setCol.push(6);
                        $scope.options.colors.push('yellow');
                    }
                }

            }

            if (setCol.length === 1){
                $log.debug("Nothing selected");
                chart.clearChart();
            }
            else {

               data_view = new google.visualization.DataView(graph_data);

               data_view.setColumns(setCol);
               chart.draw(data_view, $scope.options);
            }

        }; //evaluteGraphOptions() END

        function init(){

            $log.debug("Inside init");

            timeChartService.initGraphData(); // Initialize Graph Data --
            rateChartService.initGraphData(); // Initialize Graph Data from rateChartService

            // Default settings
            $scope.graphType = sessionStorage.getItem('graphType');
            if ($scope.graphType == undefined){
                $scope.graphType = "time";
            }

            $scope.persistance = sessionStorage.getItem('persistance');
            if ($scope.persistance == undefined){
                $scope.persistance = "No_Persistance";
            }

            $scope.testCase.selection = sessionStorage.getItem('testCase');

            $log.debug("testCase.selection: ", $scope.testCase.selection);
            if ($scope.testCase.selection == undefined){

                $scope.testCase.selection = "start_end";
                $log.debug("default testCase.selection: " + $scope.testCase.selection);

            }

            var serOptions = sessionStorage.getItem('serverConfigOptions');
            if (serOptions != undefined){
                $scope.serverConfigOptions = JSON.parse(serOptions);
            }

            for (var i = 0; i < $scope.serverConfigOptions.length; i++) {


                if ($scope.serverConfigOptions[i].value === "med_emb") {
                    $scope.serverConfigOptions[i].checked = true;
                    $log.debug("set serverConfigOptions[med_emb] to true");
                }
                else if ($scope.serverConfigOptions[i].value === "lg_emb") {
                    $scope.serverConfigOptions[i].checked = true;
                    $log.debug("set serverConfigOptions[lg_emb] to true");
                }

            }

            $scope.evalutePersistanceOptions();

        }

        // default is time Chart
        initTimeChart();

        init();
    }]);
