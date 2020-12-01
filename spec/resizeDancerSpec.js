describe('resizeDancer', function() {

  var resizeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    resizeDancer = new ResizeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(resizeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(resizeDancer.$node, 'animate');
    resizeDancer.step();
    expect(resizeDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(resizeDancer, 'step');
      expect(resizeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(resizeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(resizeDancer.step.callCount).to.be.equal(2);
    });
  });
});