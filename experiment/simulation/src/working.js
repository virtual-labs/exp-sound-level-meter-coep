masterJson={};
var arrayJson=[];
var arrP=["2 x 10⁵","2 x 10⁴","2 x 10³","2 x 10²","20","2","2 x 10⁻¹","2 x 10⁻²","2 x 10⁻³"];

var ansCount=0;
function working(){
	
	
	 $("#centerText1").html('DIAGRAM');
     $("#centerText2").html('WORKING');
     $("#canvas-div").html('<img src="images/soundimg.png" class="img-fluid img-responsive">');
   
//     animation();
     var selection  ='<div class="row">'
   	  +'<div class="col-sm-5" >'
      +'<center class=" frq">  <b> Frequency (KHz) : 1000  </b></center>'   
      +'</div>'
      +'<div class="col-sm-1" >'
      
      +'</div>'
      +'<div class="col-sm-5"  >'
      +'<center class=" frq">  <b>  P<sub>ref</sub> : 0.0002 &micro;bar  </b></center>'     
      +'</div>'
      +'</div>'  
      +'<br>'
      
      +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select sound pressure (&micro;bar): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control " id="soundPressure" style="height:auto;font-size: 17px;">'
	   +'<option value="-1">--- Select source pressure --- </option>'
//	   +'<option value="2" >2 &times; 10 <sup>4</sup> </option>'
	   for(var i=0,p=1;i<arrP.length;i++,p++){
		   selection+='<option value='+p+' >'+arrP[i]+'</option>' 
	   }
	   
	 
     selection+='</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   +'<br>'
	   +'<div class="row" >'
	   +'<div class="col-sm-6" >'
	    
	      +'</div>'
	   	  +'<div class="col-sm-6" >'
	    +'<span id="errorMsg" hidden></span>'
	      +'</div>'
	     
	      +'</div>'  
	   +'<br>' 
	   +'<div class="row" id="soundP" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate sound pressure level (dB): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="soundLevel1" style=padding: 10px; width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  class="btn btn-danger btnStyle" id="submitReading1" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
   
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
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'
	   $("#main-div-conf").html(selection);
     var soundPressure1=0;
     var p=0;
     var p_ref="0.0002";
     var temp_p;
     $("#soundPressure").change(function(){
    	 soundPressure1=parseFloat($("#soundPressure").children(":selected").attr("value"));
//    	  $("#soundP").prop("hidden",false);
    	  if(soundPressure1==-1){
    		  $("#errorMsg").prop("hidden",false);
    		  $("#soundPressure").prop("disabled",false);
			   $("#errorMsg").html("Select sound pressure level  ");
		   }else{
    	   
			   if(soundPressure1==1){
				   p="200000";
				   temp_p="2 * 10⁵";
			   }
			   else  if(soundPressure1==2){
				   p="20000";
				  
				   temp_p="2 x 10⁴";
			   }
			   else  if(soundPressure1==3){
				   p="2000";
				   temp_p="2 x 10³";
			   }
			   else if(soundPressure1==4){
				   p="200";
				   temp_p="2 x 10²";
			   }
			   else  if(soundPressure1==5){
				   p="20";
				   temp_p="20";
			   }
			   else  if(soundPressure1==6){
				   p="2";
				   temp_p="2";
			   }
			   else  if(soundPressure1==7){
				   p="0.2";
				   temp_p="2 x 10⁻¹";
			   }
			   else  if(soundPressure1==8){
				   p="0.02";
				   temp_p="2 x 10⁻²";
			   }
			   else  if(soundPressure1==9){
				   p="0.002";
				   temp_p="2 x 10⁻³";
			   }
//			   else  if(soundPressure1==10){
//				   p="0.0002";
//				   temp_p="2 x 10<sup>-4</sup>";
//			   }
			   $("#soundP").prop("hidden",false); 
    	   // console.log("soundPressure1 "+soundPressure1);
    	   // console.log("p "+p);
    	    $("#errorMsg").prop("hidden",true);
    	    $("#soundPressure").prop("disabled",true);
		   $("#soundPressure option[value="+soundPressure1+"]").css("background-color","#dacecf");
		   $("#soundPressure option[value="+soundPressure1+"]").attr("disabled",true);
		   }
     });
     id=0;
     var soundAns=1;
     $("#submitReading1").click(function() {
			 	ansCount++;
				$("body").css("padding","0px 0px 0px 0px");
				$("#modelMsg").css("font-size", "larger");
			//	console.log("soundPressure1 "+soundPressure1);
			    p_ref1=parseFloat(p_ref);
			    var temp2=parseFloat(p/p_ref1);
				var temp=parseFloat(20*Math.log10(temp2));
     		//	console.log("temp "+temp);
     				
     		   soundAns=	parseFloat($("#soundLevel1").val());
			   var flowAns=temp;
			   
			   if(soundAns=="" || isAlphabetical(soundAns)){
				   $("#modelMsg").css("color", "red");
					$("#modelMsg").html("Enter numeric value ");
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == soundAns) {
							
							
							 $("#modelMsg").css("color", "#a94442");
							$("#modelMsg").html(" <b>Select another sound pressure value</b> ");
							
							$("#soundP").prop("hidden",true);
							$("#checkConfg").prop("hidden",false);	
							 $("#soundPressure").prop("disabled",false);
							 $("#soundLevel1").val("");
							 id=0;
							addtoMasterJson();
							//tableCreate();
							
							
						} else if (flowAns != soundAns) {
							
							 $("#modelMsg").css("color", "red");
						$("#modelMsg").html("<b>Entered value is incorrect.Try again</b> ");
						
						}


					} else if (id == 4) {
						 $("#modelMsg").css("color", "#a94442");
						$("#modelMsg").html("<img src='images/formula12.png'><br><b>P = Sound pressure</b>  ");
						
					} else {
						soundAns = parseFloat($("#soundLevel1").val());
//						flow = flowAns.toFixed(2);
						if (flowAns == soundAns) {
							
							
							$("#modelMsg").css("color", "#a94442");
							$("#modelMsg").html("<b>Select another sound pressure value  </b> ");
							$("#soundP").prop("hidden",true);
							$("#checkConfg").prop("hidden",false);
							$("#soundPressure").prop("disabled",false);
							 $("#soundLevel1").val("");
							id=0;
							addtoMasterJson();
						//	tableCreate();
							
							
							
						} else {
							$("#modelMsg").css("color", "#a94442");
							$("#modelMsg").html("<b>Correct answer is " + flowAns+"</b>");
							

						}
					}
					id++;
					}
			   function addtoMasterJson()
				{
					tempJson={};
					tempJson.p = temp_p;
					tempJson.ans=temp;
					arrayJson.push(tempJson);
					masterJson.demo = arrayJson;
				//	console.log(masterJson);
					tempJson={};
					tempJson.workingCount=ansCount;
					resultMasterJson.working=tempJson;
				//	console.log(resultMasterJson);
					tableCreate1(masterJson);
//					tempJson={};
//					tempJson.stdPulsesCount=ansCount;
//					resultMasterJson.std=tempJson;
//					console.log(resultMasterJson);
				}
			   
			   
			   
				});
	
}