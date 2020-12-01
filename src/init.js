$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $('.dancer').hover(function(event) {
      $(this).css("border-color", "green");
    },
    function(event) {
      $(this).css("border-color", "red");
    });

    $('.dancer').on('click', function(event) {
      var targetTop = parseFloat(this.style.top);
      var targetLeft = parseFloat(this.style.left);
      var targetDancer = this;
      var realTargetDancer;
      var minimum = Infinity;
      var closestDancer;

      window.dancers.forEach(function(dancer) {
        if (dancer.$node[0] !== targetDancer) {
          var distance = calculateDistance(targetTop, targetLeft, dancer.top, dancer.left);
          if (distance < minimum) {
            minimum = distance;
            closestDancer = dancer;
          }
        }

        if (dancer.$node[0] === targetDancer) {
          realTargetDancer = dancer;
        }
      });

      if (closestDancer) {
        realTargetDancer.$node.animate({top: closestDancer.top, left: closestDancer.left}, 2000);
        closestDancer.$node.animate({top: targetTop, left: targetLeft}, 2000);
      }
    });
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });
});

var calculateDistance = function(top1, left1, top2, left2) {
  let top = top1 - top2;
  let left = left1 - left2;
  let diagonal = Math.sqrt(Math.pow(top, 2) + Math.pow(left, 2));
  return diagonal;
};