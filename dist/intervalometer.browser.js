/*! npm.im/intervalometer */
!function(t){"use strict";function e(t,e,n,r){function i(n){o=e(i,r),t(n-(u||n)),u=n}var o,u;return{start:function(){o||i(0)},stop:function(){n(o),o=null,u=0}}}function n(t){return e(t,requestAnimationFrame,cancelAnimationFrame)}function r(t,n){return e(t,setTimeout,clearTimeout,n)}t.intervalometer=e,t.frameIntervalometer=n,t.timerIntervalometer=r}(this.Intervalometer=this.Intervalometer||{});