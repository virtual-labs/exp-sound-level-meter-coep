
function tableCreate1(masterJson) {
//	console.log(masterJson);
	var tableMainDiv =''
	tableMainDiv+= '<div class="col-sm-12" >'
		+'<center class="textheadingTable"> TAKE ALL READINGS FROM SOUND PRESSURE </center>'
		+ '<table class=" table table-bordered  " style=" text-align: center;    font-size: large;">'
		+ ' <thead>'
		+ '  <tr >'
		
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Sound pressure (&micro;bar)</center></th>'
		+ '   <th scope="col"><center >Sound pressure level (dB)</center></th>'
//		+ '   <th scope="col"><center >Sound Level(dB)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < masterJson.demo.length; i++, p++) {
		tableMainDiv +='<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center style="color:red;">' + masterJson.demo[i].p + '</center></td>'
			+ '   <td><center style="color:red;">' + masterJson.demo[i].ans + '</center></td>'
//			+ ' <td><center style="color:red;">' + masterJson.demo[i].soundDB + '</center></td>'
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
			
		tableMainDiv += '<div class="col-sm-12"><button type="button" class="btn btn-danger btnStyle" id="finish" hidden ><b>GO TO NEXT LEVEL </b></button></div>'
		
		tableMainDiv += ' </div>'

		+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "finish" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'

	

	$("#tableDesign").html(tableMainDiv);
	
	
	if (masterJson.demo.length == 9) {
		 $("#soundPressure").prop("disabled",true);
		 $("#finish").prop("hidden",false); 
		 $("#modelMsg").html('<b style="color:#a94442">GO TO NEXT LEVEL .</b>');
		 //console.log(masterJson);
		 
	}
//	
	$("#finish").click(function() {
//alert("Experiment successfully completed");
			$("#modelMsg").html('<b style="color:#a94442">GO TO NEXT LEVEL .</b>');
			mainPage();
	});
}

