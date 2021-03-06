(function() {
  'use strict';

  /**
   * {Factory} sessionSrv
   * @fileOverview Retrieve the session information.
   */
  angular
      .module('ci_session', ['ci_params'])
      .factory('sessionSrv', [
        '$cookies',
        'paramsSrv',
        function($cookies, paramsSrv) {
          var self = {};
          self.params = false;

          /**
           * @name getSessionParameter
           * @description Sets the Session, UN, TA for the current session.
           */
          self.getSessionParameter = function(_update) {
            if (!self.params || _update) {
              var username = paramsSrv.UN || paramsSrv.TA || paramsSrv.CLC;
              var UNFlag = (typeof paramsSrv.UN!= 'undefined');
              self.params = {
                Session: paramsSrv.SN,
                UserName: username,
                TradingAccount: paramsSrv.CLC,
                UNIsDefined: UNFlag
              };
              $cookies.CLC = paramsSrv.CLC;
              $cookies.SN = paramsSrv.SN;
              $cookies.UN = paramsSrv.UN;
              $cookies.TA = paramsSrv.TA;
            }
            return self.params;
          };

          return self;
        }
      ]);
})();
