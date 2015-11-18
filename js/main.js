$(function(){

        /*
            ** Chosen dropdown bindings
        */

        $('.chosen-select').chosen({
            allow_single_deselect: true,
            disable_search_threshold:6,
            display_selected_options: false,
            placeholder_text_single: 'Select chart option',
            no_results_text:'Oops, nothing found!',
            width: '100%',
            search_contains: true
        });


        /* 
            **Chart holder method and bindings 
            **
        */
        //#chartHolder

        var chartHolder = $('.jsChartHolderContainer'),
            chartHolderDiv = $('#chartHolder'),
            compPanel = $('.jsCompPanel'),
            chartTypeDD = $('.jsChartTypeDropDown'), 
            chartPanel = $('.jsChartTypeDropDownPanel'),
            propObj = {};

        $(document).on('change','.jsChartTypeDropDown',function(){

            /* ddlExportGraph make it selected to 0 index on each change */
            $('#ContentPlaceHolder1_ddlExportGraph').find('option:eq(0)')
                .prop('selected', true)
                .attr('selected', true);


            var me                    = $(this), 
                hidEle                = $.trim(me.val()), 
                chartTypeVal          = $.trim(me.find('option:selected').data('chart-type')), 
                chartHeightVal        = $.trim(me.find('option:selected').data('chart-height')),                            
                chartCustomLabel      = $.trim(me.find('option:selected').data('chart-custom-label')),    
                chartTitle            = $.trim(me.find('option:selected').text()),
                chartSubTitle         = $.trim(me.find('option:selected').data('sub-title')),
                chartExporting        = $.trim(me.find('option:selected').data('chart-exporting')),
                yAxisText             = $.trim(me.find('option:selected').data('yaxis-text')),
                yAxisDataTableDecimal = $.trim(me.find('option:selected').data('yaxis-datalabels-decimal')),
                hideYaxisDataLabels = $.trim(me.find('option:selected').data('hide-yaxis-datalabels')),
                yAxisBothSide         = $.trim(me.find('option:selected').data('yaxis-both-side')),
                yAxisOppSideTitle     = $.trim(me.find('option:selected').data('yaxis-oppside-title')),
                yAxisColLabelFormat   = $.trim(me.find('option:selected').data('yaxis-column-label-format')),
                yAxisLeftLabelFormat  = $.trim(me.find('option:selected').data('yaxis-left-label-format')),
                yAxisOppLabelFormat   = $.trim(me.find('option:selected').data('yaxis-opp-label-format')),
                yAxisTickInterval     = $.trim(me.find('option:selected').data('yaxis-tick-interval')),
                columnStacking        = $.trim(me.find('option:selected').data('stacking')),
                marker                = $.trim(me.find('option:selected').data('marker')),
                markerColor           = $.trim(me.find('option:selected').data('marker-color')),
                markerSize            = $.trim(me.find('option:selected').data('marker-size')),
                markerLineWidth       = $.trim(me.find('option:selected').data('marker-line-width')),
                markerLineColor       = $.trim(me.find('option:selected').data('marker-line-color')),
                secChartFieldId       = $.trim(me.find('option:selected').data('second-chart-field-id')),
                seriesColWidth        = $.trim(me.find('option:selected').data('series-point-width')),
                endOnTick             = $.trim(me.find('option:selected').data('end-on-tick')),
                seriesColor           = $.trim(me.find('option:selected').data('series-color')),
                hideXaxis0LevelLabel  = $.trim(me.find('option:selected').data('hide-xaxis-0level-label')),

                yAxisMax              = $.trim(me.find('option:selected').data('yaxis-max')),                            
                lastDataLablePos      = $.trim(me.find('option:selected').data('last-datalabels-pos')),                            
                
                plotKeys              = $.trim(me.find('option:selected').data('plot-keys'));


            //console.log(chartTypeVal + ' '+ chartTitle);


            if(hidEle != '' && hidEle != undefined){
                
                /* 
                    **Invoke Chart method to bind the respective chart type passed to the function param;
                    **Invoke the function in setTimeout to let the div get shown first
                */
                setTimeout(function(){
                    propObj = {
                        chartContainer          : 'benchmarkChart',
                        chartHeight             :  (chartHeightVal !== undefined && chartHeightVal != '') ? chartHeightVal : 650,
                        chartTitle              : chartTitle !== undefined ? chartTitle : '',
                        chartSubTitle           : chartSubTitle !== undefined ? chartSubTitle : '',
                        chartExportingVal       : (chartExporting !== undefined && chartExporting != '') ? chartExporting : false,
                        chartCustomLabelVal: (chartCustomLabel !== undefined && chartCustomLabel != '') ? chartCustomLabel : undefined,
                        yAxisDataTableDecimalVal: (yAxisDataTableDecimal !== undefined && yAxisDataTableDecimal != '') ? yAxisDataTableDecimal : 0,
                        hideYaxisDataLabelsVal: (hideYaxisDataLabels !== undefined && hideYaxisDataLabels != '') ? hideYaxisDataLabels : true,
                        highlightCompanyBar     : 'SW Bremen',
                        yAxisText               : yAxisText !== undefined ? yAxisText : 'no yAxisText set',
                        yAxisBothSideObj        : yAxisBothSide !== undefined ? yAxisBothSide : undefined,
                        yAxisOppSideTitleVal   : yAxisOppSideTitle !== undefined ? yAxisOppSideTitle : '',
                        yAxisColLabelFormatVal     : yAxisColLabelFormat !== undefined ? yAxisColLabelFormat : '',
                        yAxisLeftLabelFormatVal     : yAxisLeftLabelFormat !== undefined ? '{value}' + yAxisLeftLabelFormat : '{value}',
                        yAxisOppLabelFormatVal     : yAxisOppLabelFormat !== undefined ? '{value}' + yAxisOppLabelFormat : '{value}',
                        yAxisTickIntervalVal        : (yAxisTickInterval !== undefined && yAxisTickInterval != '') ? parseInt(yAxisTickInterval) : null,
                        chartMarker             : marker !== undefined ? marker : '',
                        chartMarkerColor        : markerColor !== undefined ? markerColor : 'black',
                        chartMarkerSize         : markerSize !== undefined ? markerSize : 12,
                        chartMarkerLineWidth    : markerLineWidth !== undefined ? markerLineWidth : 1,
                        chartMarkerLineColor    : markerLineColor !== undefined ? markerLineColor : null, //null value inherit from seroes
                        columnStacking          : columnStacking !== undefined ? columnStacking : 'normal',
                        secChartFieldIdVal      : (secChartFieldId !== undefined && secChartFieldId != '') ? secChartFieldId : undefined,
                        seriesColWidthVal       : (seriesColWidth !== undefined && seriesColWidth != '') ? seriesColWidth : null,
                        endOnTickVal            : (endOnTick !== undefined && endOnTick != '') ? (endOnTick == 'false' ? false : true ): true,                                    
                        hideXaxis0LevelLabelVal : hideXaxis0LevelLabel !== undefined ? hideXaxis0LevelLabel : undefined,
                        yAxisMaxVal             : yAxisMax !== undefined ? yAxisMax : null,
                        lastDataLablePosVal     : (lastDataLablePos !== undefined && lastDataLablePos != '') ? lastDataLablePos : undefined,
                        seriesColorVal      : (seriesColor !== undefined && seriesColor != '') ? seriesColor : undefined,
                        totalPlotKeys           : plotKeys !== undefined ? plotKeys : undefined

                    };

                    /* Show the chart holder container */
                    chartHolder.fadeIn('fast');

                    if(chartTypeVal !== undefined && chartTypeVal === 'stackedColumn'){

                        var fetchData = $('input[id*="' + hidEle + '"').val(), parsedData;

                        parsedData = JSON.parse(fetchData);

                        /* Show the chart holder container hide component panels */
                        chartHolderDiv.fadeIn('fast');
                        compPanel.hide();

                        console.clear();
                        console.log(parsedData);
                        console.log(propObj);

                        if(parsedData.length != 0){

                            //Draw chart method called
                            benchmarkObj.drawBenchmarkStackedColChart(parsedData, propObj);
                        }
                    }

                    /* Show component, hide chartHolder vice versa */
                    if (chartTypeVal !== undefined && chartTypeVal == 'component') {
                        compPanel.hide();
                        $('#'+hidEle).fadeIn('fast');
                        $('.commentsContainer').fadeIn('fast');
                        chartHolderDiv.hide();
                    }

                },0);
                
                //Get Comments respect to graph selected on page

                var getCommentObj = {
                    CompanyID : $.trim($('#ContentPlaceHolder1_hdnCompanyID').val()),
                    strsurveyID : $.trim($('#ContentPlaceHolder1_hdnSurveyID').val()),
                    strGraphID : hidEle,
                    strGraphName : chartTitle,
                    strComments: '',
                    strTitle: '',
                    strCommentType:''
                };                           


            }else{

                /* Hide the chart holder panel */
                chartHolder.fadeOut('fast');

                console.log('There is no value set for current element, must be hidden element id');
            }
        }); //Change callback end
        

});
