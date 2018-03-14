'use strict';

var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$rootScope', '$interval', '$timeout', 'data', 'task', function($scope, $rootScope, $interval, $timeout, data, task){
  $scope.items = data.items;
  $scope.moveSlider = (index) => {
    task.slideItem(index);
  }
  $timeout(() => {
    task.preScrollSlider();
  })
}]);

app.service('data', function($rootScope, $interval, $timeout){

  this.items = [
    {name: 'one'},
    {name: 'two'},
    {name: 'three'},
    {name: 'four'},
    {name: 'five'},
    {name: 'six'},
    {name: 'seven'},
    {name: 'eight'},
    {name: 'nine'},
    {name: 'ten'}
  ]

});


app.service('task', function($rootScope, $interval, $timeout){
  this.preScrollSlider = () => {
    this.slideItem(1);
  }
  this.slideItem = (index) => {
    //remove the selected class from all sildes
    $('.slideItems').removeClass('selectedSlide');
    //add the slider class to target
    $('.slideItems[data="' + index + '"]').addClass('selectedSlide');
    //with of the slider item
    const itemContainerWidth = $('.slideItems').width();
    //th position to slide the parent element
    const slidePosition = (itemContainerWidth * (index - 1));
    //animate slider
    $('#slideShowContainer').animate({ scrollLeft: slidePosition }, 500);
    //scroll to the initial position without animation
    //document.getElementById('slideShowContainer').scrollLeft = (itemContainerWidth * (index - 1));
  }
});
