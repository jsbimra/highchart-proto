var benchmarkObj = {
    drawBenchmarkStackedColChart : function(parsedData, propObj){

        /*
            First empty the chart holder container each time this function is called as 
            its created dynamically in for loop below
        */
       // $('#chartHolder').empty();


        //If its length is 1 plot the contains single chart data else contains dual chart data.
        if(parsedData.length != 0){

            var xAxisDisableFlag = false;

            //:Loop array of chart data and pass dynamic values to plot the chart            
            for(var mainloopCnt = 0; mainloopCnt < parsedData.length; mainloopCnt++){

                var chartData = parsedData[mainloopCnt];

                //console.log(chartData);

                var renderToEle = propObj.chartContainer; //'benchmarkChart'+mainloopCnt;

                /* Plotting double chart dynamically, if mainloopCnt reached to 1 as 2nd array element traced */
                if(mainloopCnt == 1){
                    $('#'+renderToEle).after('<div class="chart-container" id="'+propObj.chartContainer+'SiblingGraph'+mainloopCnt+'"></div>');
                    renderToEle = propObj.chartContainer+'SiblingGraph'+mainloopCnt;
                }

                if(chartData !== undefined && propObj !== undefined){

                    var yAxisBothObj = {title:''};

                    /* Plot Y-Axis on both the sides if its requested by the type of graph */
                    if('yAxisBothSideObj' in propObj){
                        if(propObj.yAxisBothSideObj && propObj.yAxisBothSideObj == 'yes'){
                            yAxisBothObj = {
                                title: {
                                    text: propObj.yAxisOppSideTitleVal
                                },
                                gridLineWidth: 1,
                                gridLineDashStyle: 'dash',            
                                //gridLineColor: '#197F07',
                                tickInterval: propObj.yAxisTickIntervalVal,
                                //linkedTo:0, //commented for mapping series data on oppostie yaxis
                                opposite:true
                            };
                        }
                    }

                    //Set Opposite yAxis label format value
                    if(propObj.yAxisOppLabelFormatVal !== undefined){
                        if(yAxisBothObj){
                            yAxisBothObj['labels'] =  {
                                format: propObj.yAxisOppLabelFormatVal
                            }
                        }
                    }

                    /*  If parsedData.length is greater than 1, then set chart option 
                        for second chart with dynamic values from its corresponding hidden input field attrs
                    */
                    //console.log(mainloopCnt);

                    if(mainloopCnt > 0){

                        //Empty the Highcharts.charts array on re-build's of chart from choosen options
                        //Highcharts.charts = [];

                        if('secChartFieldIdVal' in propObj){
                            if(propObj.secChartFieldIdVal !== undefined){
                                propObj.chartTitle            = $('#'+propObj.secChartFieldIdVal).data('chart-title');
                                propObj.columnStacking        = $('#'+propObj.secChartFieldIdVal).data('stacking');
                                propObj.chartSubTitle         = $('#'+propObj.secChartFieldIdVal).data('sub-title');
                                propObj.chartCustomLabelVal   = $('#'+propObj.secChartFieldIdVal).data('chart-custom-label');
                                propObj.chartHeight           = $('#'+propObj.secChartFieldIdVal).data('chart-height');
                                propObj.yAxisText             = $('#'+propObj.secChartFieldIdVal).data('yaxis-text');
                                propObj.yAxisBothSideObj      = $('#'+propObj.secChartFieldIdVal).data('yaxis-both-side');
                                propObj.xAxisDisableState     = $('#'+propObj.secChartFieldIdVal).data('disable-x-axis');
                                //propObj.yAxisSeriesMap        = $('#'+propObj.secChartFieldIdVal).data('yaxis-series-map');
                                propObj.yAxisTickIntervalVal  = $('#'+propObj.secChartFieldIdVal).data('yaxis-tick-interval');
                                propObj.chartExportingVal     = $('#'+propObj.secChartFieldIdVal).data('chart-exporting');
                                propObj.lastDataLablePosVal   = $('#'+propObj.secChartFieldIdVal).data('last-datalabels-pos');
                                propObj.chartMarker           = $('#'+propObj.secChartFieldIdVal).data('marker');
                                propObj.chartMarkerLineWidth  = $('#'+propObj.secChartFieldIdVal).data('marker-line-width');
                                propObj.chartMarkerLineColor  = $('#'+propObj.secChartFieldIdVal).data('marker-line-color');
                                propObj.seriesColorVal        = $('#'+propObj.secChartFieldIdVal).data('series-color');
                                propObj.dataLabelDecimalsVal  = $('#'+propObj.secChartFieldIdVal).data('decimal-value');

                                //console.log(propObj);

                                //Set disable labels on xAxis
                                if(propObj.xAxisDisableState != undefined && propObj.xAxisDisableState == 'yes'){
                                    xAxisDisableFlag = true;
                                }

                                //If opposite yAxis to plot
                                if(propObj.yAxisBothSideObj && propObj.yAxisBothSideObj == 'yes'){
                                   yAxisBothObj = {     
                                        title: {
                                            text: propObj.yAxisOppSideTitleVal
                                        }, 
                                        gridLineWidth: 1,
                                        gridLineDashStyle: 'dash',            
                                        //gridLineColor: '#197F07', 
                                        //linkedTo:0, //commented for mapping series data on oppostie yaxis
                                        
                                        opposite:true
                                    }
                                }

                                //Set tickInterval on yAxis
                                if(propObj.yAxisTickIntervalVal !== undefined){
                                    if(yAxisBothObj){
                                        yAxisBothObj['tickInterval'] =  parseInt(propObj.yAxisTickIntervalVal);
                                    }
                                }                          
                            }
                        }
                        
                        /* Update theme colors for second chart with different colors values */
                        Highcharts.theme = {
                            //colors: ["#785CB4", "#602870", "#814c3a", "#8c9192", "#804f9c", "#c3d600", "#d31b4f", "#a33f72", "#eec000", "#7aad33", "#aed07e", "#edea62"]
                            colors: ["#d31b4f", "#a73f72", "#ffc000", "#9aaf33", "#bcd07e", "#766a62", "#c0b9b4", "#0096cc", "#814c3a", "#8c9192", "#804f9c", "#c3d600"]
                        };

                        // Apply the theme
                        Highcharts.setOptions(Highcharts.theme);
                    }else{
                        
                        /* Apply default theme colors */
                        Highcharts.theme = {
                            //colors: ["#d31b4f", "#a73f72", "#ffc000", "#9aaf33", "#bcd07e", "#766a62", "#c0b9b4", "#0096cc", "#814c3a", "#8c9192", "#804f9c", "#c3d600"],
                            colors: ["#ff8400", "#de6148", "#ffd950", "#4ce087", "#4cb1e0", "#a0afbd", "#c96a04", "#ad3f29", "#a5871b", "#249852", "#318ab3", "#606b75"]
                        };

                        // Apply the theme
                        Highcharts.setOptions(Highcharts.theme);
                    }

                    /* Call to chart result after loops count */
                    var chartResult = this.getStackedColChartData(chartData, propObj),
                        xAxisArr    = chartResult.xAxisData !== undefined ? chartResult.xAxisData : [],
                        seriesArr   = chartResult.seriesData !== undefined ? chartResult.seriesData : [];

                    var htmlTitle = '';

                    if(propObj.chartTitle){
                        htmlTitle = '<div class="chartHTMLTitle" style="">'+propObj.chartTitle+'</div>';
                    }

                    var chartLabelsObj = {},
                        labelTopVal = mainloopCnt > 0 ? '-25px' : '-40px';
                    /* Forming labels for chart */
                    if(propObj.chartCustomLabelVal !== undefined){
                        chartLabelsObj = {
                            items: [{
                                html: '<h3 class="chart-label-'+mainloopCnt+'">'+propObj.chartCustomLabelVal+'</h3>',
                                style:{
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    left: '0',
                                    top: labelTopVal
                                }
                            }]
                        }
                    } //chart-custom-label condition end


                    //Create the chart object and initiate the chart to draw on page
                    window.chart = new Highcharts.Chart({                        
                        labels: chartLabelsObj,
                        exporting:{
                            enabled: propObj.chartExportingVal
                        },
                        title: {
                            text: htmlTitle
                        },
                        subtitle: {
                            text: propObj.chartSubTitle
                        },
                        yAxis: [{
                            endOnTick: propObj.endOnTickVal,
                            tickInterval: propObj.yAxisTickIntervalVal,
                            labels: {
                                format: propObj.yAxisLeftLabelFormatVal,
                            },
                            title: {
                                useHTML: true,
                                text: propObj.yAxisText
                            },
                            stackLabels: {
                                enabled: false, //For display total value for each columns
                                style: {
                                    //fontWeight: 'bold',
                                    //color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            },
                            gridZIndex: 3,
                            gridLineColor: '#ccc' //Required here as plotbands get overllaped with grid lines

                        }, 
                            yAxisBothObj //Appending dynamic object based on option selected
                        ],
                        chart: {
                            renderTo: renderToEle, //propObj.chartContainer,
                            type: "column",
                            height: propObj.chartHeight
                        },
                        plotOptions: {
                            column: {
                                stacking: propObj.columnStacking,
                                minPointLength : 15,
                                dataLabels: {
                                    allowOverlap: true,
                                    inside: true,
                                    enabled: true,
                                    crop: false,
                                    overflow: 'none',
                                    //rotation: 270,
                                    //y: -12,
                                    //format: '{y:.2f} '+propObj.yAxisColLabelFormatVal,
                                    formatter:function(){
                                        if(this.y > 0){
                                            var formatVal, yVal;

                                            if(propObj.yAxisDataTableDecimalVal !== undefined){

                                                var decVal = parseInt(propObj.yAxisDataTableDecimalVal);
                                               
                                                formatVal = Highcharts.numberFormat(this.y, decVal, '.','');
                                                yVal = formatVal + ' '+propObj.yAxisColLabelFormatVal;
                                                
                                            return yVal;
                                            }
                                                
                                        }
                                    },
                                    //color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                                    //color: propObj.endOnTickVal == true ? '#666' : '#ffeaf5'
                                }
                            },
                            series: {
                                maxPointWidth: 60,
                                negativeColor: '#0088FF'
                            }
                        },
                        xAxis: {
                            categories: xAxisArr,
                            labels: {
                                //rotation: -90
                                groupedOptions: [{
                                    y: 10
                                }],
                                formatter: function () {
                                    var obj = $.trim(this.value);

                                    if(typeof obj !== 'string'){

                                        if('name' in obj){
                                            if(obj.name != '' && obj.name != ' ' && obj.name != ','){
                                                return this.value;
                                            }
                                            if(obj.name == ' ,' || obj.name == ',' || obj.name == ''){
                                                return ' ';
                                            }
                                        }   
                                    }
                                    else {
                                        if(obj != '' && obj != ' ' && obj != ','){
                                            return this.value;
                                        }
                                        if(obj == ' ,' || obj == ',' || obj == ''){
                                            return ' ';
                                        }
                                    }
                                }
                            }
                        },
                        series: seriesArr
                    },
                    function (chart) {
    

                        //Plotting datalabels on top for specific chart's
                        if(propObj !== undefined){

                            if('lastDataLablePosVal' in propObj){
                                if(propObj.lastDataLablePosVal !== undefined && propObj.lastDataLablePosVal == 'top'){
                                    
                                    var atLastPos = chart.series.length-1;
                                    $.each(chart.series[atLastPos].data, function (i, d) {
                                        /*
                                            console.log(d.plotX + ' ' + d.pointWidth);
                                            console.log(d.plotX  -  d.pointWidth);
                                        */
                                        d.dataLabel.attr({
                                            y: -25,
                                            rotation: 0,
                                            color: '#666',
                                            inside: false,
                                            allowOverlap: false
                                        });
                                        d.dataLabel.attr({
                                            x: d.plotX - (d.pointWidth/2)
                                        });
                                    });
                                }

                                /* Show series legends and dataLabels for last node for Second Chart  */
                                if(propObj.lastDataLablePosVal === null || propObj.lastDataLablePosVal === 'null'){

                                    /* For seccond chart marker option if propObj.lastDataLablePosVal set to null or empty */
                                    var secondChartMarkerOptions = {
                                            enabled: true,
                                            symbol: 'circle',
                                            fillColor: 'yellow',
                                            lineWidth: propObj.chartMarkerLineWidth,
                                            lineColor: propObj.chartMarkerLineColor
                                        };

                                    if('chartMarker' in propObj){

                                        if(propObj.chartMarker !== undefined){
                                            var mark = propObj.chartMarker, shape, color;
                                            if(mark.indexOf('-') != -1){
                                                shape = mark.split('-')[0];
                                                color = mark.split('-')[2];
                                                secondChartMarkerOptions['symbol'] = shape;
                                                secondChartMarkerOptions['fillColor'] = color;
                                            }
                                        }
                                    }

                                    Highcharts.charts[Highcharts.charts.length-1].series[1].update({
                                        visible: true,
                                        showInLegend: true,
                                        dataLabels:{  
                                            enabled: false,
                                            //format: '{y:.2f}'
                                            format: '{y:.0f}'
                                        },
                                        type: 'scatter',
                                        marker: secondChartMarkerOptions !== undefined ? secondChartMarkerOptions : {}
                                    });

                                    Highcharts.charts[Highcharts.charts.length-1].redraw();
                                }
                            }   

                        } //propObj check end


                        //Hiding yaxis data labels in chart if hideYaxisDataLabelsVal
                        if('hideYaxisDataLabelsVal' in propObj){
                            if(propObj.hideYaxisDataLabelsVal !== undefined && propObj.hideYaxisDataLabelsVal == 'yes'){
                                var seriesLnth = Highcharts.charts[Highcharts.charts.length-1].series.length;
                                for(var i=0; i<seriesLnth; i++){
                                     Highcharts.charts[Highcharts.charts.length-1].series[i].update({                                       
                                        dataLabels:{ 
                                            enabled: false
                                        }
                                    });
                                 }                               
                            }                   
                        }

                        if ('dataLabelDecimalsVal' in propObj) {
                            if (propObj.dataLabelDecimalsVal !== undefined) {

                                var dlDecimalStr = propObj.dataLabelDecimalsVal, nodeAtStr, nodeAt = 0, dInteger;
                                var curChartLastSeriesName = [];

                                if (dlDecimalStr.indexOf(',') !== -1) {
                                    plotTooltipValues('commaSeparated', dlDecimalStr);
                                } else {
                                    plotTooltipValues('single', dlDecimalStr);
                                }
                                
                                /* Function defination for plotTooltipValues */
                                function plotTooltipValues(splitType, dlDecimalStr) {
                                    if (splitType === 'commaSeparated') {
                                        var commaSepArrays = dlDecimalStr.split(',');

                                        separateSplitsArray(commaSepArrays);
                                    }
                                    else {
                                        separateSplitsArray([dlDecimalStr]);
                                    }
                                }

                                /* Function defination for separateSplitsArray */
                                function separateSplitsArray(arraysValues) {

                                    if (arraysValues !== undefined && arraysValues.length != 0) {

                                        //Loop the arraysValues 
                                        for (var r = 0; r < arraysValues.length; r++) {

                                            if (arraysValues[r] !== undefined && arraysValues[r].indexOf('-') !== -1) {

                                                var splitVals = arraysValues[r].split('-');

                                                for (var i = 0; i < splitVals.length; i++) {

                                                    if ((splitVals.length / 2) == i) { break; }

                                                    nodeAtStr = splitVals[i];
                                                    dInteger = parseInt(splitVals[i + 1]);
                                                    //console.log(nodeAtStr + ' ' + dInteger);

                                                    nodeAt = (nodeAtStr === 'lastNode' ? 1 : nodeAt);
                                                    nodeAt = (nodeAtStr === 'lastNodeDown1' ? 2 : nodeAt);
                                                    nodeAt = (nodeAtStr === 'lastNodeDown2' ? 3 : nodeAt);


                                                    if (nodeAt !== undefined && dInteger !== undefined) {
                                                        var seriesLength = Highcharts.charts[Highcharts.charts.length - 1].series.length;

                                                        curChartLastSeriesName.push(Highcharts.charts[Highcharts.charts.length - 1].series[seriesLength - nodeAt].name);


                                                    }
                                                }//for end 
                                            }                                            
                                        }
                                    }
                                }

                                /* Function defination for updateTooltipOnHighChart */
                                function updateTooltipOnHighChart(curChartLastSeriesName, dInteger) {

                                    console.log(curChartLastSeriesName);

                                    if ((curChartLastSeriesName !== undefined && curChartLastSeriesName.length !=0) && dInteger !== undefined) {
                                        return {
                                            curChartLastSeriesName : curChartLastSeriesName,
                                            dInteger : dInteger
                                        }                                        
                                    }
                                }

                                Highcharts.charts[Highcharts.charts.length - 1].tooltip.options.formatter = function () {
                                
                                    //Call to update chart
                                    var tempObj = updateTooltipOnHighChart(curChartLastSeriesName, dInteger);
                                    console.log(tempObj);
                                
                                    var matchedFlag = false;
                                    for(var j=0; j<tempObj.curChartLastSeriesName.length; j++){

                                        if (tempObj.curChartLastSeriesName[j] == this.series.name) {
                                            //console.log('matched ');
                                            matchedFlag = true;
                                            break;
                                        } else {
                                            matchedFlag = false;
                                            //console.log('NOT matched ');                                                    
                                        }   
                                    }

                                    /*As need to sepearte based on flag because there is a return statement in the 
                                    code which doesn't allow to complete the for loop above, so need to break the code down
                                    */
                                    if(matchedFlag){
                                        if (this.x.name != '' && this.x.name != ' ') {
                                            return '<b>' + this.x + '</b><br/>' +
                                            this.series.name + ': ' + Highcharts.numberFormat(this.y, dInteger, '.', '');
                                        } else {
                                            return this.series.name + ': ' + Highcharts.numberFormat(this.y, dInteger, '.', '');
                                        }
                                    }else{
                                        if (this.x.name != '' && this.x.name != ' ') {
                                            return '<b>' + this.x + '</b><br/>' +
                                            this.series.name + ': ' + Highcharts.numberFormat(this.y, 0, '.', '');
                                        } else {
                                            return this.series.name + ': ' + Highcharts.numberFormat(this.y, 0, '.', '');
                                        }
                                    }
                                };
                            }
                        }
                        var plotBandsObj = [], plotParentCatBand = [],           
                            series       = Highcharts.charts[Highcharts.charts.length-1].series,
                            xAxis0       = Highcharts.charts[Highcharts.charts.length-1].xAxis[0],
                            curData      = series[0].data;

                        //Loop for series data array
                        $.each(curData, function(idx, obj){
                            //console.log(idx + ' ' + obj.category.name);

                            var name        = obj.category.name,
                                parseval    = isNaN(parseFloat(name));

                            if(parseval){
                                //if(name != ' ' && name != '' && name == propObj.highlightCompanyBar){   //For highlight specific company name
                                //if(name != ' ' && name != ''){   //For highlight all company names
                                
                                var fromVal, toVal, parentCatName;

                                if(name != ' ' && name != '' && name != propObj.highlightCompanyBar){   //For highlight all company names

                                    fromVal = idx - .5,
                                    toVal   = idx + .5;

                                    //console.log(parentCatName);
                                    //Theme for Average values
                                    plotBandsObj.push({ color: '#cbfbb3', borderColor: '#69b443', borderWidth: 2, from: fromVal, to: toVal, zIndex: 2 });
                                    //plotBandsObj.push({ color: '#ccffb3', borderColor: '#66cc66', borderWidth: 2, from: fromVal, to: toVal, zIndex: 2 });
                                }

                                //Theme for Average values
                                if(name == ' ' && name != propObj.highlightCompanyBar){
                                    plotBandsObj.push({ color: '#cbfbb3', borderColor: '#69b443', borderWidth: 2, from: -0.5, to: 0.5, zIndex: 2 });
                                    //plotBandsObj.push({ color: '#ccffb3', borderColor: '#66cc66', borderWidth: 2, from: -0.5, to: 0.5, zIndex: 2 });
                                }
                                
                                if(name != ' ' && name != '' && name == propObj.highlightCompanyBar){   //For highlight specific company name

                                    fromVal = idx - .5,
                                    toVal   = idx + .5;
                                    parentCatName = obj.category.parent.name;

                                    //Theme for default company name band
                                    plotBandsObj.push({ color: '#fdf6ac', borderColor: '#d5c617', borderWidth: 2, from: fromVal, to: toVal, zIndex: 2 });
                                    //plotBandsObj.push({ color: '#dbfbff', borderColor: '#33ccff', borderWidth: 2, from: fromVal, to: toVal, zIndex: 2 });

                                    /* Plotting parent category band */
                                    $.each(xAxis0.categoriesTree,function(idx,treeObj){

                                        if((treeObj.name != '' && treeObj.name == parentCatName) && (parentCatName !='' && parentCatName != ' ')){
                                            var tickStartAt = treeObj.tick.startAt,
                                                tickEndAt   = treeObj.leaves + tickStartAt - 1;

                                            //console.log(tickStartAt + ' ' + tickEndAt);

                                            var fromVal2 = tickStartAt - .5,
                                                toVal2   = tickEndAt + .5;

                                            //console.log(fromVal2 + ' ' + toVal2 );
                                            //Background band theme
                                            plotParentCatBand.push({ color: '#c8ecf1', borderColor: '#8ec6ce', borderWidth: 2, from: fromVal2, to: toVal2, zIndex: 1 });
                                            //plotParentCatBand.push({ color: '#e9e9e9', borderColor: '#ccc', borderWidth: 2, from: fromVal2, to: toVal2, zIndex: 1 });
                                        }
                                    });
                                }
                            }
                        }); //loop end for series data array
                        
                        /*console.log(plotBandsObj[0]);
                        console.log(plotParentCatBand[0]);*/

                        if(plotParentCatBand.length != 0){
                            for(var i = 0; i< plotParentCatBand.length; i++){
                                Highcharts.charts[Highcharts.charts.length-1].xAxis[0].addPlotBand(plotParentCatBand[i]);
                            }

                        }

                        if(plotBandsObj.length != 0){
                            for(var i = 0; i< plotBandsObj.length; i++){
                                Highcharts.charts[Highcharts.charts.length-1].xAxis[0].addPlotBand(plotBandsObj[i]);
                            }
                        }
                        
                    });    

                }
            }//For loop end
            
            /* xAxisDisableFlag is made true based on disable property active */
            if(xAxisDisableFlag && xAxisDisableFlag === true){                
                //Fetching every last chart from array that is second chart to plot disable xAxis
                 Highcharts.charts[Highcharts.charts.length-1].xAxis[0].update({
                    labels: {
                        enabled: false
                    }
                });   
            }

            /* Set top padding to second chart to display label */
            if(propObj.chartCustomLabelVal !== undefined){
                var graphEleLnth = $('svg').length;
                    //console.log(propObj.chartCustomLabelVal);

                if(graphEleLnth > 1){
                    $('svg').eq(graphEleLnth-1).css({paddingTop: '15px'});
                }
            }

            /* Function for setting minPointLength on dataLabels to display on stacked column */
            (function (H) {
                H.wrap(H.seriesTypes.column.prototype, 'translate', function (proceed) {
                    var series = this,
                        chart = this.chart,
                        options = this.options,
                        stacking = this.options.stacking,
                        yAxis = this.yAxis,
                        threshold = options.threshold,
                        stackThreshold = options.startFromThreshold ? threshold : 0,
                        minPointLength = options.minPointLength;

                    proceed.call(this);

                    if(stacking != ''){
                    if (minPointLength) {
                        H.each(this.points, function (point, i) {
                            var neg = series.negStacks && point.y < (stackThreshold ? 0 : threshold),
                                s = series.index,
                                shapeArgs = point.shapeArgs,
                                otherPointArgs, otherPoint;

                            while (s--) {
                                if (chart.series[s].visible == false) // Ignore invisible charts
                                continue;
                                otherPoint = chart.series[s].points[i];
                                otherPointArgs = chart.series[s].points[i].shapeArgs;
                                if (shapeArgs.height === minPointLength) {
                                    if (!neg) {
                                        if(shapeArgs !== undefined && otherPointArgs !== undefined && otherPoint !== undefined){
                                            if (shapeArgs.y + shapeArgs.height > otherPointArgs.y && otherPoint.y != null) {
                                                shapeArgs.y = otherPointArgs.y - minPointLength;
                                                    //console.log(shapeArgs.y + ' Inside if: shapeArgs.y value after calculating');
                                            }
                                        }
                                    } else {
                                        if(shapeArgs !== undefined && otherPointArgs !== undefined && otherPoint !== undefined){
                                            if (shapeArgs.y < otherPointArgs.y + otherPointArgs.height && otherPoint.y != null) {
                                                shapeArgs.y = otherPointArgs.y + minPointLength;
                                                    //console.log(shapeArgs.y + ' Inside else: shapeArgs.y value after calculating');
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        }
                    }
                });

            }(Highcharts));
	    
            //Hide the Highcharts bookmark after chart is rendered on web-page
            //$('svg').find('text:last').css({display:'none'});
            //console.log(Highcharts.charts.length);
            Highcharts.charts[Highcharts.charts.length-1].redraw();
        }
        
    },
    getStackedColChartData : function(chartData, propObj){

        if(chartData && chartData !== undefined && propObj !== undefined){
            var categoriesArray = [], subCatArray = [], commonKeyValue = [], 
                seriesDataArray = [], strKeyNames, subCatObjArr = [];

            $.each(chartData, function(idx,parentObj){

                //console.log(idx);

                if(idx === 'key_name'){
                    strKeyNames = parentObj.length != 0 ? parentObj : [];
                }

                if(idx !== 'key_name'){                       

                    //Forming top level category from idx value
                    var name = idx != undefined ? idx.replace('_', ' ') : ''; 

                    if(strKeyNames !== undefined && strKeyNames.length != 0){
                        
                        //Form series data                        
                        $.each(parentObj,function(idx, childObj){
                            //Push current obj to array to use later with key names
                            subCatObjArr.push(childObj);

                            //Push to form sub-categories
                            subCatArray.push(childObj.companyname);

                        });

                        //Hide xAxis label based on hideXaxis0LevelLabelVal present in propObj
                        if('hideXaxis0LevelLabelVal' in propObj){
                            //console.log('inside ');
                            if(propObj.hideXaxis0LevelLabelVal !== undefined && propObj.hideXaxis0LevelLabelVal == 'yes'){
                                name = '';
                            }
                        }
                        //console.log(name);

                        //Form categories Array object's
                        categoriesArray.push({name: name, categories : subCatArray});

                        //Empty subCatArray again after adding to categoriesArray
                        subCatArray = [];   
                    }
                }
            });
        
            
            /* Forming Series Data  */
            if(subCatObjArr && subCatObjArr.length != 0 && strKeyNames && strKeyNames.length !=0){
                //console.log(strKeyNames); 
                //console.log(subCatObjArr);

                //Plot items on chart based on totalPlotKeys
                if('totalPlotKeys' in propObj){
                    if(propObj.totalPlotKeys !== undefined && propObj.totalPlotKeys.toLowerCase() == 'skiplast'){
                        strKeyNames.splice(-1,1);
                    }
                }

                $.each(strKeyNames,function(key,val){

                    $.each(subCatObjArr, function(idx,childObj2){

                        for(var k in childObj2) {
                            if(k == val){
                                var pushItem = childObj2[val];

                                /* If commonKeyValue is 0 then replace the 0 value with null */
                                if(pushItem == 0){
                                    pushItem = null;
                                   // minPointLength custom function causing simple column charts to stack rather plotting horizontally
                                   //Then we need to set minPointLength to 0 for that case: Other way of doing this is added
                                   //load event on chart itself.                                   
                                }

                                commonKeyValue.push(pushItem);
                            }
                        }
                         
                    });

                    //console.log(commonKeyValue);

                    //Push to seriesDataArray
                    seriesDataArray.push({name: val, data: commonKeyValue});

                    //Empty the array values to form new set of array values
                    commonKeyValue = [];
                });


                //console.log(seriesDataArray);

                /*  Last Series to be plot based on condition: 
                    if requested by that particulat type graph */

                var lastObjToPlot = {
                        showInLegend: false,
                        data: []
                    };

                //Plot marker's on series requested
                if('chartMarker' in propObj){

                    /* If Markers to be plot on graph */

                    if(propObj.chartMarker !== undefined){
                        var mark = propObj.chartMarker ? propObj.chartMarker : '';

                        //console.log(mark);

                        var shape, elePosition, markerColor, multipleMarkerArr = [], atSeriesPos;

                        if(mark.length != 0){

                            //Check if marker value contains ',' (comma) separated value or not
                            if(mark.indexOf(',') != -1){
                                //console.log('Yes there is a commma separated values');

                                multipleMarkerArr = mark.split(',');
                                //console.log(multipleMarkerArr);

                                if(multipleMarkerArr !== undefined && multipleMarkerArr.length !=0){
                                    $.each(multipleMarkerArr,function(key,val){
                                        if(val.indexOf('-') != -1){
                                            shape       = val.split('-')[0];
                                            elePosition = val.split('-')[1];
                                            markerColor = val.split('-')[2] !== undefined ? val.split('-')[2] : undefined;
                                        }

                                        if(elePosition !== undefined && elePosition == 'lastNode'){
                                            atSeriesPos = seriesDataArray.length-1;
                                        }
                                        if(elePosition !== undefined && elePosition == 'lastNodeDown1'){
                                            atSeriesPos = seriesDataArray.length-2; // -2 as pos from last element
                                        }
                                        if(elePosition !== undefined && elePosition == 'lastNodeDown2'){
                                            atSeriesPos = seriesDataArray.length-3;
                                        }

                                        makeMarkerForSeries(atSeriesPos, shape);
                                    });
                                }
                            }
                            else{
                                //console.log('No there is no comma separated values');
                                shape       = mark.split('-')[0]; //Spliting and assign the value of first array
                                elePosition = mark.split('-')[1];
                                markerColor = mark.split('-')[2] !== undefined ? mark.split('-')[2] : undefined;


                                if(elePosition !== undefined && elePosition == 'lastNode'){
                                    atSeriesPos = seriesDataArray.length-1;
                                }
                                if(elePosition !== undefined && elePosition == 'lastNodeDown1'){
                                    atSeriesPos = seriesDataArray.length-2;
                                }
                                if(elePosition !== undefined && elePosition == 'lastNodeDown2'){
                                    atSeriesPos = seriesDataArray.length-3;
                                }
                                
                                makeMarkerForSeries(atSeriesPos, shape);
                            }    

                            //console.log(shape + ' ' + elePosition);

                            function makeMarkerForSeries(atSeriesPos, shape){
                                if(atSeriesPos){                                        
                                    seriesDataArray[atSeriesPos]['marker'] = {    
                                        enabled: true,                 
                                        symbol: shape,
                                        lineWidth: propObj.chartMarkerLineWidth,
                                        lineColor: propObj.chartMarkerLineColor,
                                        fillColor: markerColor != undefined ? markerColor : propObj.chartMarkerColor
                                        /*width: propObj.chartMarkerSize,
                                        Causing marker to not appear on by default
                                        height: propObj.chartMarkerSize,*/
                                    };
                                   seriesDataArray[atSeriesPos]['yAxis'] =  1;
                                   seriesDataArray[atSeriesPos]['type'] =  'scatter';                                   
                                   seriesDataArray[atSeriesPos]['dataLabels'] =  {
                                        enabled: false
                                   };                                   
                                }
                            }   //makeMarkerForSeries end

                            
                        }  
                    }
                    
                } // Condition end

                //console.log(lastObjToPlot);

                //Hide series data in chart if lastDataLablePosVal
                if('lastDataLablePosVal' in propObj){
                    if(propObj.lastDataLablePosVal !== undefined){
                        if(propObj.lastDataLablePosVal == 'top'){
                            var lFormat;
                            if(propObj.lastDataLableDecimalsVal !== undefined){
                                lFormat = '{y:.'+propObj.lastDataLableDecimalsVal+'+f}';
                            }
                            atSeriesPos = seriesDataArray.length-1;

                            if(atSeriesPos !== undefined){                                    
                                seriesDataArray[atSeriesPos]['visible'] = false;       
                                seriesDataArray[atSeriesPos]['showInLegend'] = false;
                                seriesDataArray[atSeriesPos]['dataLabels'] = {  
                                    enabled: true,
                                    //format: '{y:.2f}'
                                    format: lFormat
                                };
                            }
                        }
                    }                   
                }

                //color for last series data
                if('seriesColorVal' in propObj){
                    if(propObj.seriesColorVal !== undefined){
                        var sColorVal = propObj.seriesColorVal, splitV1, splitV2;
                        if(sColorVal.indexOf('-') != -1){
                            splitV1 = sColorVal.split('-')[0],
                            splitV2 = sColorVal.split('-')[1];                                
                            if(splitV2 == 'lastNodeDown1'){
                                atSeriesPos = seriesDataArray.length-2; // on second last node of array
                            }
                            if(atSeriesPos !== undefined){        
                                seriesDataArray[atSeriesPos]['color'] = splitV1;
                            }
                        }else
                        {
                            atSeriesPos = seriesDataArray.length-1;
                            if(atSeriesPos !== undefined){        
                                seriesDataArray[atSeriesPos]['color'] = sColorVal;
                            }
                        }
                    }                   
                }

            }
            

            return {
                xAxisData : categoriesArray,
                seriesData : seriesDataArray
            }
        }
    }
}
                
                

                