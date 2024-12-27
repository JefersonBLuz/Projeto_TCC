<script src="./script.js"></script>
<template>
    <div class="container-chart">
        <div class="periodo">
            <b>Período</b>
            <div id="slider"></div>

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