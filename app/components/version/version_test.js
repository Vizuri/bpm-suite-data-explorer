'use strict';

describe('bpm_charts.version module', function() {
  beforeEach(module('bpm_charts.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
