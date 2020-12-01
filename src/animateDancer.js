var AnimateDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

AnimateDancer.prototype = Object.create(Dancer.prototype);
AnimateDancer.prototype.constructor = AnimateDancer;

AnimateDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.addClass("homer");
};