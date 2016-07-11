'use strict';
import _ from 'lodash/lodash';

AboutController.$inject = [];
export default function AboutController() {
  var model = {
    testValue: 42
  };

  return _.extend(this, {
    model: model
  });
}
