'use strict';

angular.module('bpm_charts.version', [
  'bpm_charts.version.interpolate-filter',
  'bpm_charts.version.version-directive'
])

.value('version', '0.1');
