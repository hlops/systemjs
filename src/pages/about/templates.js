'use strict';

cacheTemplates.$inject = ['$templateCache'];
export default function cacheTemplates($templateCache) {
  $templateCache.put('page-about', '/src/pages/welcome/about.html');
}
