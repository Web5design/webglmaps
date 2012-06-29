goog.provide('webglmaps.transitions');


/**
 * @typedef {function(number, number, number): number}
 */
webglmaps.transitions.TransitionFn;


/**
 * @param {number} base Base.
 * @param {number} diff Diff.
 * @param {number} delta Delta.
 * @return {number} Value.
 */
webglmaps.transitions.instant = function(base, diff, delta) {
  return base + diff;
};


/**
 * @param {number} base Base.
 * @param {number} diff Diff.
 * @param {number} delta Delta.
 * @return {number} Value.
 */
webglmaps.transitions.linear = function(base, diff, delta) {
  return base + delta * diff;
};


/**
 * @param {number} base Base.
 * @param {number} diff Diff.
 * @param {number} delta Delta.
 * @return {number} Value.
 */
webglmaps.transitions.pop = function(base, diff, delta) {
  return base + Math.sin(delta * Math.PI / 2) * diff;
};


/**
 * @param {number} base Base.
 * @param {number} diff Diff.
 * @param {number} delta Delta.
 * @return {number} Value.
 */
webglmaps.transitions.splat = function(base, diff, delta) {
  return base + (1 - Math.cos(delta * Math.PI / 2)) * diff;
};


/**
 * @param {number} base Base.
 * @param {number} diff Diff.
 * @param {number} delta Delta.
 * @return {number} Value.
 */
webglmaps.transitions.superPop = function(base, diff, delta) {
  return base + Math.pow(1 - Math.cos(delta * Math.PI / 2), 2) * diff;
};


/**
 * @param {number} base Base.
 * @param {number} diff Diff.
 * @param {number} delta Delta.
 * @return {number} Value.
 */
webglmaps.transitions.swing = function(base, diff, delta) {
  return base + 0.5 * (1 - Math.cos(delta * Math.PI)) * diff;
};
