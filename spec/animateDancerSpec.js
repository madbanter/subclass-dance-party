describe('animateDancer', function() {

  var animateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    animateDancer = new AnimateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(animateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds a class to its $node object', function() {
    sinon.spy(animateDancer.$node, 'addClass');
    animateDancer.step();
    expect(animateDancer.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(animateDancer, 'step');
      expect(animateDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(animateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(animateDancer.step.callCount).to.be.equal(2);
    });
  });
});