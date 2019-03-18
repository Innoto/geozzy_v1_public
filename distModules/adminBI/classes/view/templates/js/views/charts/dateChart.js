//### Date Chart View: Manages the view for the Date Chart
'use strict';

define([
    'underscore',
    'backbone',
    'highstock-export-csv'
], function (_, Backbone) {
    // Creating DateChart template, used for charting a Date graph
    var DateChartView = Backbone.View.extend({
        el: '#result',
        // Initializes the chart element
        //* Creates the chart
        //* Creates the data list, pushing the Group, the UTC Date and the Index in there
        initialize: function (options) {
            if (_.size(this.$('#chart')) === 0) {
                this.$el.append('<div id=\'chart\'></div>');
            }
            this.$chart = this.$('#chart');

            var data = [];
            _.each(options.groups, function (elementGroup, index) {
                var dateGroup = elementGroup;
                var dateUTC = Date.UTC(dateGroup.year, dateGroup.month - 1, dateGroup.dayOfMonth, dateGroup.hour);
                var elementData = options.data[index];
                data.push([dateUTC, elementData]);
            });
            this.data = data;
            Highcharts.setOptions({
                global: {
                    // Returns the difference between the UTC and the local time
                    getTimezoneOffset: function () {
                        var now = new Date();
                        return now.getTimezoneOffset();
                    }
                }
            });
        },
        // Renders the chart using Highstock
        render: function () {
            this.chart =
                this.$chart.highcharts({
                    credits: {
                        enabled: false
                    },
                    //* Zoom used only for the X axis
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: ''
                    },
                    legend: {
                        enabled: false
                    },
                    //* Predefined configuration for the plotting
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, "#7cb5ec"],
                                    [1, "rgba(124,181,236,0)"]
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },
                    //* Introduces the data to show
                    series: [{
                        name: 'Datos Estadisticos',
                        type: 'area',
                        data: this.data
                    }],
                    //* Function added for exporting the CSV file type
                    exporting: {
                        csv: {
                            itemDelimiter: ";"
                        }
                    }
                });
        },
        remove: function () {
            this.$chart.remove();
        }
    });
    return DateChartView;
});
