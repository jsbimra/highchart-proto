

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
	//Previous color scheme
	//colors: ["#b10034", "#a73f72", "#ffc000", "#9aaf33", "#bcd07e", "#766a62", "#c0b9b4", "#0096cc", "#814c3a", "#8c9192", "#804f9c", "#c3d600"],
	//New color scheme - dated 16-Nov-15
	//colors: ["#ff8400", "#de6148", "#ffd950", "#4ce087", "#4cb1e0", "#a0afbd", "#c96a04", "#ad3f29", "#a5871b", "#249852", "#318ab3", "#606b75"],
	//New colors for bar's
	//Green border color: #66cc66; bg color: #ccffb3
	//Blue border color: #33ccff; bg color: #dbfbff
	//Grey border color: #cccccc; bg color: #e9e9e9
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
        margin: 20
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
                this.series.name + ': ' + Highcharts.numberFormat(this.y,0, '.','');	
			}else{
				return this.series.name + ': ' + Highcharts.numberFormat(this.y,0, '.','');
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
			},
			margin: 20
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
                    color: '#000', //#666, #eabbd0, d8d8d8 eabbd0
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
			        /*mouseOver: function (e) {
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
