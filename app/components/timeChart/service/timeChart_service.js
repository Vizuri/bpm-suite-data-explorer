angular.module('bpm_charts.bpmChart')
    .service('timeChartService', ['$log', function($log) {
        $log.debug("Inside timeChart Graph Service");
        $log.debug("Inside Graph Service");
        var noper_start_end_data;
        var noper_seq_flow_data;
        var noper_par_flow_data;
        var noper_rule_task_data;
        var noper_ext_signal_data
        var noper_human_task_data;
        var per_start_end_data;
        var per_seq_flow_data;
        var per_par_flow_data;
        var per_ext_signal_data;
        var per_rule_task_data;
        var per_human_task_data;
        var per_auditing_start_end_data;
        var per_auditing_seq_flow_data;
        var per_auditing_par_flow_data;
        var per_auditing_rule_task_data;
        var per_auditing_ext_signal_data;
        var per_auditing_human_task_data;

        this.initGraphData = function() {
            noper_start_end_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 3.14, 2.15],
                ['10', 23.7, 9.14],
                ['25', 42.81, 20.87],
                ['50', 79.48, 33.12]
            ]);
            noper_seq_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 3.48, 2.51],
                ['10', 23.59, 12.02],
                ['25', 48.06, 21.11],
                ['50', 73.64, 37.02]
            ]);
            noper_par_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 3.86, 2.25],
                ['10', 23.29, 10.16],
                ['25', 43.05, 20.58],
                ['50', 89.24, 45.5]
            ]);
            noper_rule_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 4, 2.57],
                ['10', 22.33, 12.25],
                ['25', 51.84, 21.78],
                ['50', 92.76, 37.29]
            ]);
            noper_ext_signal_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 3.65, 2.24],
                ['10', 21.6, 12.93],
                ['25', 51.2, 23.02],
                ['50', 86.89, 45.42]
            ]);
            noper_human_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 285.09, 400],
                ['10', 405.73, 460],
                ['25', 489.22, 1120],
                ['50', 561.37, 540]
            ]);
            //Persistance -- Data Start
            per_start_end_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 19.7, 49.93],
                ['10', 76.72, 59.54],
                ['25', 144.87, 93.37],
                ['50', 301.92, 175.36]
            ]);
            per_seq_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 19.06, 49.42],
                ['10', 75.23, 59.54],
                ['25', 164.74, 93.37],
                ['50', 292.96, 175.36]
            ]);
            per_par_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 20.4, 49.71],
                ['10', 66.67, 63.46],
                ['25', 147.88, 96.35],
                ['50', 275.66, 175.43]
            ]);
            per_rule_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 20.92, 53.43],
                ['10', 80.76, 68.38],
                ['25', 163.45, 99.16],
                ['50', 308.56, 177.43]
            ]);
            per_ext_signal_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 25.4, 87.98],
                ['10', 82.17, 96.09],
                ['25', 176.56, 132.85],
                ['50', 368.18, 212.32]
            ]);
            per_human_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 15.74, 84.15],
                ['10', 49.56, 91.28],
                ['25', 93.72, 127.2],
                ['50', 346.14, 334.36]
            ]);
            //Persistance_W_Auditing-- Data Start
            per_auditing_start_end_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 22.9, 67.05, 35, 55, 73, 21],
                ['10', 83.15, 80.86, 126, 110, 82, 108],
                ['25', 171.37, 114.8, 224, 162, 115, 260],
                ['50', 346.14, 200.22, 422, 234, 186, 520]
            ]);
            per_auditing_seq_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 29.9, 124.94, 41, 62, 124, 27],
                ['10', 97.96, 142.91, 94, 97, 126, 225],
                ['25', 214.68, 176.23, 226, 174, 159, 598],
                ['50', 406.73, 247.78, 464, 343, 240, 1221]
            ]);
            per_auditing_par_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 38.9, 200.78, 59, 89, 191, 45],
                ['10', 106.98, 215, 117, 126, 195, 396],
                ['25', 235, 253.28, 270, 226, 224, 1037],
                ['50', 456.69, 321.72, 555, 417, 311, 2121]
            ]);
            per_auditing_rule_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 27.53, 95.29, 35, 5, 95, 21],
                ['10', 93.39, 109.15, 89, 19, 99, 166],
                ['25', 200.68, 145.26, 213, 82, 132, 441],
                ['50', 375.7, 225.52, 436, 189, 217, 904]
            ]);
            per_auditing_ext_signal_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 31.72, 134.39, 31, 42, 75, 139],
                ['10', 99.44, 144.11, 62, 63, 79, 1216],
                ['25', 218, 178.76, 176, 161, 169, 3222],
                ['50', 428.42, 256.34, 252, 234, 240, 6707]
            ]);
            per_auditing_human_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 20.56, 115.62, 214, 232, 359, 226],
                ['10', 52.48, 125.19, 342, 335, 382, 2187],
                ['25', 121.95, 166.65, 718, 622, 604, 5753],
                ['50', 406.72, 418.56, 1809, 1299, 1349, 13069]
            ]);           
        };

        this.getNoPerStartEndData = function() {
            return noper_start_end_data;
        };
        this.getNoPerSeqFlowData = function() {
            return noper_seq_flow_data;
        };
        this.getNoPerParFlowData = function() {
            return noper_par_flow_data;
        };
        this.getNoPerRuleTaskData = function() {
            return noper_rule_task_data;
        };
        this.getNoPerExtSignalData = function() {
            return noper_ext_signal_data;
        };
        this.getNoPerExtSignalData = function() {
            return noper_ext_signal_data;
        };
        this.getNoPerHumanTaskData = function() {
            return noper_human_task_data;
        };
        this.getPerStartEndData = function() {
            return per_start_end_data;
        };
        this.getPerSeqFlowData = function() {
            return per_seq_flow_data;
        };
        this.getPerParFlowData = function() {
            return per_par_flow_data;
        };
        this.getPerRuleTaskData = function() {
            return per_rule_task_data;
        };
        this.getPerExtSignalData = function() {
            return per_ext_signal_data;
        };
        this.getPerHumanTaskData = function() {
            return per_human_task_data;
        };
        this.getPerAuditingStartEndData = function() {
            return per_auditing_start_end_data;
        };
        this.getPerAuditingSeqFlowData = function() {
            return per_auditing_seq_flow_data;
        };
        this.getPerAuditingParFlowData = function() {
            return per_auditing_par_flow_data;
        };
        this.getPerAuditingRuleTaskData = function() {
            return per_auditing_rule_task_data;
        };
        this.getPerAuditingExtSignalData = function() {
            return per_auditing_ext_signal_data;
        };
        this.getPerAuditingHumanTaskData = function() {
            return per_auditing_human_task_data;
        };
    }]);
