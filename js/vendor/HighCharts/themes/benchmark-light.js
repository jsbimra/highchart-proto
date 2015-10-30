/**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
	href: '//fonts.googleapis.com/css?family=Dosis:400,600',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
	colors: ["#d099b2", "#b98da5", "#a17e90", "#977084", "#75415b", "#721f49", "#521132",
		"#420e28", "#310a1e", "#230515", "#17020d", "#090005"],
	chart: {
		alignTicks: false,
		backgroundColor: "#fff",
		style: {
			fontFamily: "Source Sans Pro, sans-serif", //"Open Sans Regular, sans-serif"
		}
	},
	credits:{
		enabled: false
	},
	title: {
		style: {
			fontSize: '22px',
			color: '#67153e',
		},
		useHTML: true,
        align: 'center',
        x: 0,
        y: 10,
        margin: 10
	},
	subtitle : {
		style: {
			color: '#666',
			fontSize: '14px'			
		},
		useHTML: true,
        x: 0,
        y: 52
	},
	tooltip: {
		borderWidth: 0,
		backgroundColor: 'rgba(250,250,250,0.8)',
		shadow: false,
		shared: false,
		//pointFormat: '<b>{point.x}</b><br/>{series.name}: {point.y:.2f}</b>',
		formatter: function () {
			if(this.x.name != '' && this.x.name != ' '){
				return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + Highcharts.numberFormat(this.y,2, '.','');	
			}else{
				return this.series.name + ': ' + Highcharts.numberFormat(this.y,2, '.','');
			}
            
        }
	},
	legend: {
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '14px'
		},
		itemDistance: 50
	},
	xAxis: {
		gridLineWidth: 0,
		gridLineColor: '#ccc',
		lineColor: '#ccc',
		tickColor: '#ccc',
		labels: {
			style: {
				fontSize: '12px'
			},
            autoRotation: false
		}
	},
	yAxis: {
		//minorTickInterval: 'auto',
		title: {
			style: {
				//textTransform: 'uppercase'
				color: '#666',
				fontSize: '12px'				
			}
		},
		labels: {
			style: {
				fontSize: '12px'
			}
		},
		gridLineColor: '#ccc',
		reversedStacks: false
	},
	plotOptions: {
		/*candlestick: {
			lineColor: '#404048'
		}*/
		column: {
            marker: {
                enabled: true,                
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        },
    	column: {
    		dataLabels: {
    			align: 'center',
    			style:{
                    fontSize: '10px',
                    color: '#BE1268', //#666, #eabbd0, d8d8d8 eabbd0
                    textShadow: null
                },
                states: {
                    hover: {
                        enabled: true
                    }
                }
               /*, borderRadius: 5,
                backgroundColor: 'rgba(252, 255, 197, 0.7)',
                borderWidth: 1,
                borderColor: '#AAA',
                y: -6*/
    		}
    	},
    	series: {
	        groupPadding: 0.12,
			point: {
			    events: {
			       /* mouseOver: function (e) {
			            this.dataLabel.css({
			                fontSize: "11px",
			                color: '#BE1268'
			            });
			        },
			        mouseOut: function (e) {
			            this.dataLabel.css({
			                fontSize: "10px",
			                color: '#BE1268'
			            });
			        }*/
			    }
			},
	        states: {
                hover: {
                    brightness: -0.3, // darken
                    color: '#f4f4d0'
                }
            }
	    } 
	},


	// General
	background2: '#000'
	
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
