$(function(){
  'use strict'

  var ch1 = new Chartist.Line('#ch1', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4],
      [10, 15, 10, 17, 8, 11, 16, 10]
    ]
  }, {
    high: 30,
    low: 0,
    axisY: {
      onlyInteger: true
    },
    showArea: true,
    fullWidth: true,
    chartPadding: {
      bottom: 0,
      left: 0
    }
  });

  // resize chart when container changest it's width
  new ResizeSensor($('.br-mainpanel'), function(){
    ch1.update();
    ch1.update();
  });

  $('#sparkline1').sparkline('html', {
    width: 100,
    height: 30,
    lineColor: '#0083CD',
    fillColor: 'rgba(0,131,205,0.2)',
  });

  $('#sparkline2').sparkline('html', {
    width: 100,
    height: 30,
    lineColor: '#1CAF9A',
    fillColor: 'rgba(28,175,154,0.2)',
  });

  $('#sparkline3').sparkline('html', {
    width: 100,
    height: 30,
    lineColor: '#F49917',
    fillColor: 'rgba(244,153,23,0.2)',
  });

  $('#sparkline4').sparkline('html', {
    width: 100,
    height: 30,
    lineColor: '#ED2475',
    fillColor: 'rgba(237,36,117,0.2)',
  });

  $('#sparkline5').sparkline('html', {
    width: 100,
    height: 30,
    lineColor: '#1CAF9A',
    fillColor: 'rgba(28,175,154,0.2)',
  });


  $('#sparkline6').sparkline('html', {
    type: 'bar',
    barWidth: 5,
    chartRangeMin: 0,
    chartRangeMax: 10,
    width: 100,
    height: 40,
    barColor: '#5E37A6'
  });

  $('#sparkline7').sparkline('html', {
    type: 'bar',
    barWidth: 5,
    chartRangeMin: 0,
    chartRangeMax: 10,
    width: 100,
    height: 40,
    barColor: '#17A2B8'
  });

  var line1 = new Rickshaw.Graph({
    element: document.querySelector('#chartLine1'),
    renderer: 'area',
    max: 80,
    series: [{
      data: [
        { x: 0, y: 30 },
        { x: 1, y: 35 },
        { x: 2, y: 30 },
        { x: 3, y: 20 },
        { x: 4, y: 32 },
        { x: 5, y: 40 },
        { x: 6, y: 25 },
        { x: 7, y: 20 },
        { x: 8, y: 25 },
        { x: 9, y: 35 },
        { x: 10, y: 20 },
        { x: 11, y: 30 },
        { x: 12, y: 35 },
        { x: 13, y: 40 }
      ],
      color: '#1061b4' //'rgba(255,255,255,0.2)'
    },{
      data: [
        { x: 0, y: 20 },
        { x: 1, y: 29 },
        { x: 2, y: 28 },
        { x: 3, y: 20 },
        { x: 4, y: 22 },
        { x: 5, y: 5 },
        { x: 6, y: 10 },
        { x: 7, y: 15 },
        { x: 8, y: 20 },
        { x: 9, y: 15 },
        { x: 10, y: 25 },
        { x: 11, y: 10 },
        { x: 12, y: 20 },
        { x: 13, y: 15 }
      ],
      color: 'rgba(255,255,255,0.4)'
    }]
  });
  line1.render();

  // Responsive Mode
  new ResizeSensor($('.br-mainpanel'), function(){
    line1.configure({
      width: $('#chartLine1').width(),
      height: $('#chartLine1').height()
    });
    line1.render();
  });

  // peity charts
  $('.peity-line').peity('line');
  $('.peity-donut').peity('donut');

});
