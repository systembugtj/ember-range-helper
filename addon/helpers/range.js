import Ember from 'ember';

export function range(params/*, hash*/) {
  let pos = params[0] || 0;
  let current = params[1] || 0;
  let step = params[2] || 0;
  
  return pos <= current + step && pos >= current - step;
}

export default Ember.Helper.helper(range);
