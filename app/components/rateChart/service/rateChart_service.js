angular.module('bpm_charts.rateChart')
    .service('rateChartService', ['$log', function($log) {
        $log.debug("Inside Graph Service");
        var noper_start_end_data;
        var noper_seq_flow_data;
        var noper_par_flow_data;
        var noper_rule_task_data;
        var noper_ext_signal_data;
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
                ['1', 285.09, 462.14],
                ['10', 405.73, 1004.14],
                ['25', 489.22, 1170.32],
                ['50', 561.37, 1274.04]
            ]);
            noper_seq_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 285.09, 396.41],
                ['10', 405.73, 782.09],
                ['25', 489.22, 1089.02],
                ['50', 561.37, 1194.26]
            ]);
            noper_par_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 257.58, 440.55],
                ['10', 405.28, 913.55],
                ['25', 461.23, 1086.97],
                ['50', 480.9, 1030.34]
            ]);
            noper_rule_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 247.95, 386.27],
                ['10', 400.47, 820.05],
                ['25', 451.86, 1022.69],
                ['50', 492.26, 1208.63]
            ]);
            noper_ext_signal_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 270.34, 443.55],
                ['10', 428.42, 748.38],
                ['25', 462.48, 1005.93],
                ['50', 498.63, 975.87]
            ]);
            noper_human_task_data = google.visualization.arrayToDataTable([
                 ['Threads', 'Medium Embedded', 'Large Embedded'],
                 ['1', 200, 400],
                 ['10', 400, 700],
                 ['25', 420, 900],
                 ['50', 450, 850]
             ]);
            //Persistance -- Data Start
            per_start_end_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 50.12, 19.92],
                ['10', 125.7, 149.6],
                ['25', 142, 245.81],
                ['50', 150.68, 261.76]
            ]);
            per_seq_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 51.79, 20.08],
                ['10', 123.68, 148.6],
                ['25', 133.13, 241.16],
                ['50', 152.62, 243.89]
            ]);
            per_par_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 48.64, 19.94],
                ['10', 126.4, 149.86],
                ['25', 141.44, 238.18],
                ['50', 151.43, 260.83]
            ]);
            per_rule_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 47.2, 18.6],
                ['10', 118.12, 142.33],
                ['25', 131.92, 235.74],
                ['50', 143.26, 249.64]
            ]);
            per_ext_signal_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 38.68, 19.94],
                ['10', 102.39, 98.84],
                ['25', 117.41, 183.43],
                ['50', 125.01, 222.46]
            ]);
            per_human_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded'],
                ['1', 19.99, 4.13],
                ['10', 59.98, 37.66],
                ['25', 69.01, 75.77],
                ['50', 63.91, 80.63]
                ]);         
            //Persistance_W_Auditing-- Data Start
            per_auditing_start_end_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 42.83, 14.81, 28.3, 10.5, 13.5, 46],
                ['10', 110.23, 116.74, 70.1, 84.3, 100.8, 78.9],
                ['25', 123.72, 202.79, 103, 166.1, 188.8, 87.8],
                ['50', 132.73, 230.37, 113.5, 212.9, 244.2, 90.7]
            ]);
            per_auditing_seq_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 32.81, 7.92, 24.2, 15.9, 8, 36.1],
                ['10', 91.38, 69.45, 89.9, 86.8, 69.2, 39.3],
                ['25', 100.71, 139.42, 102.5, 129.6, 140.3, 39.3],
                ['50', 108.92, 192.35, 103.5, 137.6, 193.4, 39.6]
            ]);
            per_auditing_par_flow_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 25.07, 4.92, 16.7, 11.1, 5.2, 22.2],
                ['10', 77.58, 45.7, 74.6, 69.3, 46.9, 22.7],
                ['25', 86.26, 99.06, 86.7, 101.7, 102.9, 22.9],
                ['50', 92.05, 150.69, 87.1, 113.4, 151.2, 22.9]
            ]);
            per_auditing_rule_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 35.6, 10.41, 28.1, 17.8, 10.5, 45.6],
                ['10', 88.69, 87.64, 94.4, 79.3, 84.3, 52.5],
                ['25', 107.88, 164.44, 108.1, 139.3, 166.1, 52.9],
                ['50', 117.03, 206.22, 109.9, 197.3, 212.9, 53.1]
            ]);
            per_auditing_ext_signal_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 30.72, 7.35, 5.6, 5.5, 3.9, 7.1],
                ['10', 83.4, 67.72, 34.4, 37.3, 32.8, 7.5],
                ['25', 98.82, 136.37, 40.6, 47.6, 44.8, 7.4],
                ['50', 103.12, 185.11, 39.5, 47, 44.6, 7.3]
            ]);
            per_auditing_human_task_data = google.visualization.arrayToDataTable([
                ['Threads', 'Medium Embedded', 'Large Embedded', 'Medium Remote', 'Clustered Medium Remote', 'Large Remote', 'Medium Singleton'],
                ['1', 42.83, 3.36, 3.2, 2.8, 1.7, 4.4],
                ['10', 110.23, 30.8, 18.4, 18.4, 15.9, 4.4],
                ['25', 123.72, 36.27, 20.1, 23.3, 25.2, 4.2],
                ['50', 132.73, 70.03, 17.2, 23.4, 23.8, 3.7]
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
