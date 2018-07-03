'use strict';

google.charts.load('current', {
    packages: ['corechart']
});

// google.charts.setOnLoadCallback(function() {
//     angular.bootstrap(document.body, ['bpm_charts']);
// });

angular.module('bpm_charts.rateChart', ['ngRoute'])
    .config(function($logProvider) {
        $logProvider.debugEnabled(false);
    })
    .controller('rateChartCtrl', ['$scope', '$log', 'rateChartService', function($scope, $log, rateChartService) {
        $log.debug('Inside rateChartCtrl');
        rateChartService.initGraphData(); // Initialize Graph Data from rateChartService
        var options = { // Graph Options
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

        var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

        $scope.serverConfigOptions = [{ //ServerConfig CheckBox Model
            "value": "med_emb",
            "name": "Medium Embedded",
            checked: false
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
        $scope.evalutePersistanceOptions = function() {

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
            $scope.evaluteGraphOptions(); // Execute evaluateGraphOptions()
        };
        $scope.evaluteGraphOptions = function() { // Setting Test Case
            $log.debug("Inside evaluteGraphOptions", $scope.persistance);
            if ($scope.persistance === "No_Persistance") { // if selected Persistance is No_Persistance
                $log.debug("Check TestCase", $scope.testCase);
                if ($scope.testCase === "start_end") {
                    var noper_start_end_data = rateChartService.getNoPerStartEndData();
                    var no_persistance_view = new google.visualization.DataView(noper_start_end_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        no_persistance_view.setColumns(setCol);
                        chart.draw(no_persistance_view, options);
                    }
                }
                if ($scope.testCase === "seq_flow") {
                    var noper_seq_flow_data = rateChartService.getNoPerSeqFlowData();
                    var no_persistance_view = new google.visualization.DataView(noper_seq_flow_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        no_persistance_view.setColumns(setCol);
                        chart.draw(no_persistance_view, options);
                    }
                }
                if ($scope.testCase === "par_flow") {
                    var noper_par_flow_data = rateChartService.getNoPerParFlowData();
                    var no_persistance_view = new google.visualization.DataView(noper_par_flow_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        no_persistance_view.setColumns(setCol);
                        chart.draw(no_persistance_view, options);
                    }
                }
                if ($scope.testCase === "rule_task") {
                    var noper_rule_task_data = rateChartService.getNoPerRuleTaskData();
                    var no_persistance_view = new google.visualization.DataView(noper_rule_task_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        no_persistance_view.setColumns(setCol);
                        chart.draw(no_persistance_view, options);
                    }
                }
                if ($scope.testCase === "ext_signal") {
                    var noper_ext_signal_data = rateChartService.getNoPerExtSignalData();
                    var no_persistance_view = new google.visualization.DataView(noper_ext_signal_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        no_persistance_view.setColumns(setCol);
                        chart.draw(no_persistance_view, options);
                    }
                }
                if ($scope.testCase === "human_task") {
                    var noper_human_task_data = rateChartService.getNoPerHumanTaskData();
                    var no_persistance_view = new google.visualization.DataView(noper_human_task_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        no_persistance_view.setColumns(setCol);
                        chart.draw(no_persistance_view, options);
                    }
                }               
            }
            if ($scope.persistance === "Persistance") { // Checking if the selected RadioButton is Persistance
                if ($scope.testCase === "start_end") {
                    var per_start_end_data = rateChartService.getPerStartEndData();
                    var persistance_view = new google.visualization.DataView(per_start_end_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        persistance_view.setColumns(setCol);
                        chart.draw(persistance_view, options);
                    }
                }
                if ($scope.testCase === "seq_flow") {
                    var per_seq_flow_data = rateChartService.getPerSeqFlowData();
                    var persistance_view = new google.visualization.DataView(per_seq_flow_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        persistance_view.setColumns(setCol);
                        chart.draw(persistance_view, options);
                    }
                }
                if ($scope.testCase === "par_flow") {
                    var per_par_flow_data = rateChartService.getPerParFlowData();
                    var persistance_view = new google.visualization.DataView(per_par_flow_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        persistance_view.setColumns(setCol);
                        chart.draw(persistance_view, options);
                    }
                }
                if ($scope.testCase === "rule_task") {
                    var per_rule_task_data = rateChartService.getPerRuleTaskData();
                    var persistance_view = new google.visualization.DataView(per_rule_task_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        persistance_view.setColumns(setCol);
                        chart.draw(persistance_view, options);
                    }
                }
                if ($scope.testCase === "ext_signal") {
                    var per_ext_signal_data = rateChartService.getPerExtSignalData();
                    var persistance_view = new google.visualization.DataView(per_ext_signal_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        persistance_view.setColumns(setCol);
                        chart.draw(persistance_view, options);
                    }
                }
                if ($scope.testCase === "human_task") {
                    var per_human_task_data = rateChartService.getPerHumanTaskData();
                    var persistance_view = new google.visualization.DataView(per_human_task_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                        }
                        persistance_view.setColumns(setCol);
                        chart.draw(persistance_view, options);
                    }
                }                
            }
            if ($scope.persistance === "Persistance_W_Auditing") { // Checking if the selected RadioButton is Persistance_W_Auditing
                if ($scope.testCase === "start_end") {
                    var per_auditing_start_end_data = rateChartService.getPerAuditingStartEndData();
                    var persistance_auditing_view = new google.visualization.DataView(per_auditing_start_end_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_remote") {
                                setCol.push(3);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                                setCol.push(4);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                                setCol.push(5);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_singleton") {
                                setCol.push(6);
                            }                            
                        }
                        persistance_auditing_view.setColumns(setCol);
                        chart.draw(persistance_auditing_view, options);
                    }
                }
                if ($scope.testCase === "seq_flow") {
                    var per_auditing_seq_flow_data = rateChartService.getPerAuditingSeqFlowData();
                    var persistance_auditing_view = new google.visualization.DataView(per_auditing_seq_flow_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_remote") {
                                setCol.push(3);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                                setCol.push(4);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                                setCol.push(5);
                            } 
                            if ($scope.serverConfigOptions[i].value === "med_singleton") {
                                setCol.push(6);
                            }
                        }
                        persistance_auditing_view.setColumns(setCol);
                        chart.draw(persistance_auditing_view, options);
                    }
                }
                if ($scope.testCase === "par_flow") {
                    var per_auditing_par_flow_data = rateChartService.getPerAuditingParFlowData();
                    var persistance_auditing_view = new google.visualization.DataView(per_auditing_par_flow_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_remote") {
                                setCol.push(3);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                                setCol.push(4);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                                setCol.push(5);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_singleton") {
                                setCol.push(6);
                            }
                        }
                        persistance_auditing_view.setColumns(setCol);
                        chart.draw(persistance_auditing_view, options);
                    }
                }
                if ($scope.testCase === "rule_task") {
                    var per_auditing_rule_task_data = rateChartService.getPerAuditingRuleTaskData();
                    var persistance_auditing_view = new google.visualization.DataView(per_auditing_rule_task_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_remote") {
                                setCol.push(3);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                                setCol.push(4);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                                setCol.push(5);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_singleton") {
                                setCol.push(6);
                            }
                        }
                        persistance_auditing_view.setColumns(setCol);
                        chart.draw(persistance_auditing_view, options);
                    }
                }
                if ($scope.testCase === "ext_signal") {
                    var per_auditing_ext_signal_data = rateChartService.getPerAuditingExtSignalData();
                    var persistance_auditing_view = new google.visualization.DataView(per_auditing_ext_signal_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_remote") {
                                setCol.push(3);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                                setCol.push(4);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                                setCol.push(5);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_singleton") {
                                setCol.push(6);
                            }
                        }
                        persistance_auditing_view.setColumns(setCol);
                        chart.draw(persistance_auditing_view, options);
                    }
                }
                if ($scope.testCase === "human_task") {
                    var per_auditing_human_task_data = rateChartService.getPerAuditingHumanTaskData();
                    var persistance_auditing_view = new google.visualization.DataView(per_auditing_human_task_data);
                    var setCol = [0];
                    for (var i = 0; i < $scope.serverConfigOptions.length; i++) {
                        if ($scope.serverConfigOptions[i].checked) {
                            if ($scope.serverConfigOptions[i].value === "med_emb") {
                                setCol.push(1);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_emb") {
                                setCol.push(2);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_remote") {
                                setCol.push(3);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_clus_remote") {
                                setCol.push(4);
                            }
                            if ($scope.serverConfigOptions[i].value === "lg_med_remote") {
                                setCol.push(5);
                            }
                            if ($scope.serverConfigOptions[i].value === "med_singleton") {
                                setCol.push(6);
                            }
                        }
                        persistance_auditing_view.setColumns(setCol);
                        chart.draw(persistance_auditing_view, options);
                    }
                }               
            }

        };
    }]);
