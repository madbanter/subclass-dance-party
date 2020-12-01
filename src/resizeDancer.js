var ResizeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ResizeDancer.prototype = Object.create(Dancer.prototype);
ResizeDancer.prototype.constructor = ResizeDancer;

ResizeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomNumber = Math.floor(Math.random() * 250);
  var dancerSize = {
    'border-radius': `${randomNumber}px`,
    'border': `${randomNumber}px solid red`,
    'height': `${randomNumber}px`,
    'width': `${randomNumber}px`
  };
  this.$node.animate(dancerSize, 3000);
};