


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
