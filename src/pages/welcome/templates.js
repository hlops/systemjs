'use strict';

cacheTemplates.$inject = ['$templateCache'];
export default function cacheTemplates($templateCache) {
  $templateCache.put('page-welcome', '/src/pages/welcome/welcome.html');
}
