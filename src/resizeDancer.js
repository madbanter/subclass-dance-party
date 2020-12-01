var ResizeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

ResizeDancer.prototype = Object.create(Dancer.prototype);
ResizeDancer.prototype.constructor = ResizeDancer;

ResizeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  var randomNumber = Math.floor(Math.random() * 250);
  var dancerSize = {
    'border-radius': `${randomNumber}px`,
    'border': `${randomNumber}px solid red`,
    'height': `${randomNumber}px`,
    'width': `${randomNumber}px`
  };
  this.$node.animate(dancerSize, 3000);
};