/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

  /** @ngInject */
  function DashboardLineChartCtrl(baConfig, layoutPaths, baUtil) {
    var layoutColors = baConfig.colors;
    var graphColor = baConfig.theme.blur ? '#000000' : layoutColors.primary;
    var chartData = [
      { date: new Date(2012, 11), value: 0, value0: 0 },
      { date: new Date(2013, 0), value: 15, value0: 19},
      { date: new Date(2013, 1), value: 30, value0: 20},

      { date: new Date(2013, 2), value: 25, value0: 22},
      { date: new Date(2013, 3), value: 21, value0: 25},
      { date: new Date(2013, 4), value: 24, value0: 29},
      { date: new Date(2013, 5), value: 31, value0: 26},
      { date: new Date(2013, 6), value: 40, value0: 25},
      { date: new Date(2013, 7), value: 37, value0: 20},
      { date: new Date(2013, 8), value: 18, value0: 22},
      { date: new Date(2013, 9), value: 50, value0: 26},
      { date: new Date(2013, 10), value: 40, value0: 30},
      { date: new Date(2013, 11), value: 20, value0: 25},
      { date: new Date(2014, 0), value: 50, value0: 13},

      { date: new Date(2014, 1), value: 30, value0: 13},
      { date: new Date(2014, 2), value: 18, value0: 13},
      { date: new Date(2014, 3), value: 10, value0: 13},
      { date: new Date(2014, 4), value: 25, value0: 13},
      { date: new Date(2014, 5), value: 21, value0: 13},
      { date: new Date(2014, 6), value: 65, value0: 13},
      { date: new Date(2014, 7), value: 11, value0: 13},
      { date: new Date(2014, 8), value: 17, value0: 13},
      { date: new Date(2014, 9), value: 26, value0: 13},
      { date: new Date(2014, 10), value: 14, value0: 13},
      { date: new Date(2014, 11), value: 35, value0: 13},
      { date: new Date(2015, 0), value: 54, value0: 13},
      { date: new Date(2015, 1), value: 49, value0: 13}
    ];

    var chart = AmCharts.makeChart('amchart', {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      dataProvider: chartData,
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.5),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    });

    function zoomChart() {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    }

    chart.addListener('rendered', zoomChart);
    zoomChart();
    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
})();