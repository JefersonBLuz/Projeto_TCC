<script setup>
import TheNavBar from '@/components/TheNavBar.vue';
Highcharts.chart('chart-abastecidos', {
    chart: {
        type: 'bar',
        // height: "auto",
    },
    title: {
        text: 'Abastecidos\n'
    },

    xAxis: {
        categories: ["Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septembro", "Outubro", "Novembro", "Dezembro"],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Volume (Litros)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' Litros'
    },
    plotOptions: {
        bar: {
            // borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        x: -60,
        y: 10,
        floating: true,
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Abastecido',
        data: [632, 727, 100, 100, 100, 727, 100, 100, 100, 632]
    }, {
        name: 'Necessario',
        data: [814, 841, 100, 100, 100, 727, 100, 100, 100, 632]
    }]
});

Highcharts.chart('chart-percentual', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        // plotShadow: false
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Percentual abastecido',
        align: 'center',
        verticalAlign: 'top'
    },
    tooltip: {
        enabled: false,
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '90%'],
            size: '200%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['', 85],
            ['', 15],
        ]
    }]
});
Highcharts.chart('chart-informacao', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Informação'
    },
    xAxis: {
        categories: ['regiao 1', 'regiao 2', 'regiao 3', 'regiao 4', 'regiao 4', 'regiao 5'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Litros'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Abastecido',
            data: [387749, 280000, 129000, 64300, 54000, 34300]
        },
        {
            name: 'L. Necessário',
            data: [45321, 140000, 10000, 140500, 19500, 113500]
        },
        {
            name: 'Nº de pessoas',
            type: 'spline',
            data: [45321, 140000, 10000, 140500, 19500, 113500],

        }
    ]
});

const OlMap = ol.Map,
    View = ol.View,
    TileLayer = ol.layer.Tile;
const XYZ = ol.source.XYZ;
const OSM = ol.source.OSM;
const map = new OlMap({
    target: 'map',
    view: new View({
        center: [-40.8294, -14.8576],
        projection: 'EPSG:4326',
        zoom: 11,
        maxZoom: 17,
        minZoom: 7
    }),
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ]
});

const olExtent = ol.extent;
map.on('moveend', e => {
    console.log('zoom', map.frameState_.viewState.zoom);
    const extent = map.frameState_.extent;
    console.log('extent', extent);
    console.log('TopLeft', olExtent.getTopLeft(extent));
    console.log('BottomRight', olExtent.getBottomRight(extent));
});

const Feature = ol.Feature;
const Point = ol.geom.Point;
const Style = ol.style.Style,
    CircleStyle = ol.style.Circle,
    Fill = ol.style.Fill,
    Stroke = ol.style.Stroke;
const VectorSource = ol.source.Vector,
    VectorLayer = ol.layer.Vector;
let count = 0;

let pontos = [
    [[-40.8294, -14.8576], 10],
    [[-40.9298, -14.9578], 20],
    [[-40.7298, -14.7578], 5],
    [[-40.7898, -14.7978], 15],
]
pontos.forEach(function (ponto) {

    const features = [];
    console.log(ponto[0]);

    const layers = map.getLayers();
    // layers.forEach(item => {
    //     if (item instanceof VectorLayer) map.removeLayer(item);
    // });

    const iconFeature = new Feature({
        geometry: new Point(ponto[0]),
        name: count++,
        location: ponto[0]
    });
    const style = new Style({
        image: new CircleStyle({
            radius: ponto[1],
            fill: new Fill({
                color: '#3db1ce'
            }),
            // stroke: new Stroke({
            //     color: '#836365',
            //     width: 1
            // })
        })
    });
    iconFeature.setStyle(style);
    features.push(iconFeature);
    const vectorSource = new VectorSource({
        features
    });
    const vectorLayer = new VectorLayer({
        source: vectorSource,
        opacity: 0.8
    });
    map.addLayer(vectorLayer);
});

</script>
<template>

    <head>
        <link href="https://refreshless.com/nouislider/dist/nouislider.css?v=1581" rel="stylesheet">
        <script src="https://refreshless.com/nouislider/dist/nouislider.js?v=1581"></script>


        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">
        <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    </head>
    <TheNavBar />
    <div class="container-chart">
        <div class="periodo">
            <b>Período</b>
            <div id="slider"></div>
            <script>
            function timestamp(str) {
          return new Date(str).getTime();
        }


        // portuguese day format
        function nth(d) {
          if (d > 0 && d < 2) return 'º de';
          if (d > 1) return ' de';
        }

        function formatDate(date) {
          return date.toISOString().slice(0, 10)
        }

        var date = new Date();

        // set previous month
        var previousMonth = new Date();
        previousMonth.setMonth(previousMonth.getMonth() - 1);

        var dateSlider = document.getElementById('slider');

        function toFormat(v) {
          return formatDate(new Date(v));
        }

        // nouislider settings
        noUiSlider.create(dateSlider, {
          behaviour: 'tap',
          connect: true,
          tooltips: [true, true],
          format: { to: toFormat, from: Number },
          range: {
            min: timestamp(date) - 5 * 360 * 24 * 60 * 60 * 1000,
            max: timestamp(date)
          },
          step: 1 * 24 * 60 * 60 * 1000,
          start: [timestamp(previousMonth), timestamp(date)]
        });

        // get range infos at html          
        var dateValues = [
          document.getElementById('event-start'), document.getElementById('event-end')
        ];

        dateSlider.noUiSlider.on('update', function (values, handle) {
          dateValues[handle].innerHTML = values[handle];
        });
      </script>

        </div>
        <div class="medias">
            <div class="media1">
                <b>Media 1</b>
                <div class="media">3.333</div>
                <span>Litros</span>
            </div>
            <div class="media2">
                <b>Media 2</b>
                <div class="media">4.322</div>
                <span>Litros</span>
            </div>
        </div>
        <div class="abastecidos">
            <!-- <b>Abastecidos</b> -->
            <div id="chart-abastecidos"></div>
        </div>
        <div class="percentual">
            <!-- <b>Percentual</b> -->
            <div id="chart-percentual"></div>
            <span id="percentual-text">85%</span>

        </div>

        <div class="familias">
            <!-- <b>Familias</b> -->
            <table>
                <tr>
                    <th>FAMILIA</th>
                    <th>Abastecido</th>
                    <th>%</th>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>100</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>

                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>


                <tr>
                    <td>Peter</td>
                    <td>14.000</td>
                    <td>65%</td>
                </tr>
            </table>

        </div>
        <div class="informacao">
            <!-- <b>Informacao</b> -->
            <div id="chart-informacao"></div>
        </div>
        <div class="mapa">
            <!-- <b>Mapa</b> -->
            <div id="map"></div>

        </div>

    </div>
</template>

<style>
body {
    margin: 0;
}

.container-chart {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    font-family: Verdana;
    overflow: hidden;
}

.container-chart>div {
    position: absolute;
    width: 25%;
    height: 15%;
    border: 5px solid #d6f7ff;
    background-color: #fff;
}

.container-chart>div>div {
    height: 100%;
}

.container-chart b {
    text-align: center;
    display: block;
}

.container-chart .periodo #slider {
    height: 20px;
    margin: 20px 30px;
}

.container-chart .periodo #slider .noUi-connect {
    background-color: #2caffe;
}

.medias {
    top: 15%;
}

.medias>div {
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    height: 100%;
}

.medias .media {
    font-size: 25px;
    margin: 15px 0;
}

.abastecidos {
    top: 30%;
    height: 70% !important;
}

.percentual {
    left: 25%;
    height: 30% !important;
}

#percentual-text {
    position: absolute;
    bottom: 20%;
    font-size: 25px;
    text-align: center;
    width: 100%;
}






.familias {
    top: 30%;
    left: 25%;
    height: 70% !important;
    overflow-y: scroll;
}

.container-chart .familias table {
    background-color: #fff;
    width: 100%;
}

/* .container-chart .familias table  */

.container-chart .familias tr:nth-child(1) {
    position: fixed;
    background-color: #fff;
    width: 25%;
    border-bottom: 2px solid #aaeeff;
}

.container-chart .familias table td {
    border-bottom: 1px solid rgb(214, 214, 214);
    white-space: nowrap;
}

/* .container-chart .familias table th:nth-child(1) {
    display: inline-block;
    text-align: left;
}
.container-chart .familias table th:nth-child(2) {
    text-align: center;
    display: inline-block;
}
.container-chart .familias table th:nth-child(3) {
    text-align: right;
    display: inline-block;
} */


.container-chart .familias table td:nth-child(2) {
    border-left: 2px solid #aaeeff;
    text-align: right;
    padding-right: 20px;
}



.informacao {
    left: 50%;
    width: 50% !important;
    height: 30% !important;
}

.mapa {
    top: 30%;
    left: 50%;
    width: 50% !important;
    height: 70% !important;
}
</style>