function tablegraph(){
	$("#procedure,#simDemo").prop("hidden",true);
	$("#noteV").prop("hidden",true);
	$("#main-div-conf,#canvas-div,#tableDesign").html("");
	$("#canvas-div").attr("style", "");
	 $("#centerText1").html(' WORKING');
     $("#centerText2").html('APPLICATIONS');
	table1();
	
	table2();
	graph1();
	graph2();
}
function table1()
{
	var tableMainDiv = '<div class="well well-lg" style="FONT-SIZE: large;">'
        + '<table class="table table-bordered" >'
		+ ' <thead>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Sound pressure (&micro;bar)</center></th>'
		+ '   <th scope="col"><center >Sound pressure level (dB)</center></th>'
//		+ '   <th scope="col"><center >Sound Level(dB)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < masterJson.demo.length; i++, p++) {
		tableMainDiv +='<tr>'
			+ '<td><center>' + p + '</center></td>'
			+ '   <td><center style="color:red;">' + masterJson.demo[i].p + '</center></td>'
			+ '   <td><center style="color:red;">' + masterJson.demo[i].ans + '</center></td>'
//			+ ' <td><center style="color:red;">' + masterJson.demo[i].soundDB + '</center></td>'
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		 + ' </div>'
		 $("#canvas-div").html(tableMainDiv);	
			

}
function table2()
{
	var tableMainDiv = '<div class="well well-lg" style="font-size:larger">'
        + '<table class="table table-bordered" >'
		+ ' <thead>'
+ '  <tr >'
		
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Source of Sound</center></th>'
//		+ '   <th scope="col"><center >Frequency(Hz)</center></th>'
		+ '   <th scope="col"><center >Sound Level (dBA)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < masterJson1.demo.length; i++, p++) {
		tableMainDiv +='<tr>'
			+ '<td><center>' + p + '</center></td>'
			+ '   <td><center style="color:red;">' + masterJson1.demo[i].srcOfSound + '</center></td>'
//			+ '   <td><center style="color:red;">' + masterJson.demo[i].frequency + '</center></td>'
			+ ' <td><center style="color:red;">' + masterJson1.demo[i].soundDB + '</center></td>'
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
		 + ' </div>'
		
		 $("#main-div-conf").html(tableMainDiv);
}

function graph1()
{
	
	
	const categories = [];
	const values = [];

	for (let i = 0; i < masterJson.demo.length; i++) {
	    categories.push(masterJson.demo[i].p);
	    values.push(masterJson.demo[i].ans);
	}
// Extract categories (x-axis) and data points (y-axis)


// Initialize Highcharts
Highcharts.chart('graph1', {
	credits: { enabled: false},
    chart: {
        type: 'scatter'
    },
    title: {
        text: '<h3>Sound pressure v/s Sound level (dB)</h3>',
        	style: {
                color: '#333333',   // Color for x-axis title
                fontWeight: 'bold',
                fontSize: '15px'
            }
    },
    xAxis: {
        categories: categories,
        title: {
            text: 'Sound pressure',
            style: {
                color: '#333333',   // Color for x-axis title
                fontWeight: 'bold',
                fontSize: '15px'
            }
        },
        labels: {
            style: {
                color: '#FF5733',   // Color for x-axis labels
                fontWeight: 'bold',
                fontSize: '15px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Sound level (dB)',
            style: {
                color: '#333333',   // Color for y-axis title
                fontWeight: 'bold',
                fontSize: '15px'
            }
        },
        labels: {
            style: {
                color: '#337AFF',   // Color for y-axis labels
                fontWeight: 'bold',
                fontSize: '15px'
            }
        }
    },
    tooltip: {
        style: {
            fontFamily: 'Arial, sans-serif',   // Font family for tooltip text
            fontSize: '14px',                  // Font size for tooltip text
            fontWeight: 'bold',                // Font weight for tooltip text
            color: '#333',                    // Color for tooltip text
            backgroundColor: 'rgba(0,0,0,0.75)',  // Background color of tooltip
            borderRadius: '5px',              // Border radius for rounded corners
            padding: '10px'                   // Padding inside the tooltip
        },
        formatter: function() {
            return `<b>Sound pressure :</b> ${this.x}<br><b>Sound level (dB) :</b> ${this.y}`;
        }
    },
    legend: {
        itemStyle: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px'  // Font size for legend text
        }
    },
    series: [{
    	name: 'Sound Level',
        data: values
    }]
});
}
function graph2()
{
	
	const categories = [];
	const values = [];

	for (let i = 0; i < masterJson1.demo.length; i++) {
	    categories.push(masterJson1.demo[i].srcOfSound);
	    values.push(masterJson1.demo[i].soundDB);
	}
// Extract categories (x-axis) and data points (y-axis)
	


// Initialize Highcharts
Highcharts.chart('graph2', {
	credits: { enabled: false},
    chart: {
        type: 'scatter'
    },
    title: {
        text: 'Sound of sound v/s Sound level (dBA)',
        style: {
            color: '#333333',   // Color for x-axis title
            fontWeight: 'bold',
            fontSize: '15px'
        }
    },
    xAxis: {
        categories: categories,
        
        title: {
            text: 'Source of sound',
            style: {
                color: '#333333',   // Color for x-axis title
                fontWeight: 'bold',
                fontSize: '15px'
            }
        },
        labels: {
            style: {
                color: '#FF5733',   // Color for x-axis labels
                fontWeight: 'bold',
                fontSize: '15px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Sound level (dBA)',
            style: {
                color: '#333333',   // Color for y-axis title
                fontWeight: 'bold',
                fontSize: '15px'
            }
        },
        labels: {
            style: {
                color: '#337AFF',   // Color for y-axis labels
                fontWeight: 'bold',
                fontSize: '15px'
            }
        }
    },
    tooltip: {
        style: {
            fontFamily: 'Arial, sans-serif',   // Font family for tooltip text
            fontSize: '14px',                  // Font size for tooltip text
            fontWeight: 'bold',                // Font weight for tooltip text
            color: '#333',                    // Color for tooltip text
            backgroundColor: 'rgba(0,0,0,0.75)',  // Background color of tooltip
            borderRadius: '5px',              // Border radius for rounded corners
            padding: '10px'                   // Padding inside the tooltip
        },
        formatter: function() {
            return `<b>Source of sound :</b> ${this.x}<br><b>Sound level (dBA) :</b> ${this.y}`;
        }
    },
    legend: {
        itemStyle: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px'  // Font size for legend text
        }
    },
    series: [{
        name: 'Sound Level',
        data: values
    }]
});
 htm='<div class="row">'
		  htm+='<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="result" ><b> RESULT </b></button>' 
	    +'</div>'
		  +'</div>'
		 $("#graph2").append(htm);
		 $("#result").on("click", function(){
	//console.log("dfgfg");
	result();
});


}