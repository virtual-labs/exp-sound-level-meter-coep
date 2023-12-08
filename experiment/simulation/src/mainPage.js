tableReading=0;
var musicfile= document.getElementById("myAudio"); 
function mainPage(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('ANIMATION');
      $("#centerText2").html('CONFIGURATION');
      var htm = '<img src="images/sLm.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
//      animation();
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select Frequency (KHz) : </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="frequency"  style="height:auto;">'
	   +'<option value="0">--- Select Frequency --- </option>'
	   	+'<option value="1" selected >1000</option>'
//	   +'<option value="100">100</option>'
//	   +'<option value="200">200</option>'
//	   +'<option value="300">300</option>'
//	   +'<option value="400">400</option>'
//	   +'<option value="500">500</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       
       +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Source of Sound : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="sound" " style="height:auto;">'
	   +'<option value="0">--- Select Source --- </option>'
	   +'<option value="20" >Sound of Wisper</option>'
	   +'<option value="40">Rusling of Leaves</option>'
	   +'<option value="60">Typewriter</option>'
	   +'<option value="80">light automobiles</option>'
	   +'<option value="100">Airport Noise</option>'
	   +'<option value="101">Train Whistle</option>'
	   +'<option value="102">Noisy Factory</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	    
   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b> MEASUREMENT OF SOUND LEVEL </b></button>' 
	    +'</div>'
      +'<br>' 
      +'<br>'
      
      +'<div class="row" id="soundAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Enter Sound Level Reading (dB): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="soundLevel" style=padding: 10px; width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="submitReading" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
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


    $("#sound").change(function(){
	 selectedMusic =$("#sound").children(":selected").attr("value");
//		   console.log("selectedMusic " +selectedMusic);
		  
		  if(selectedMusic==20)
		{
			setAudio='audio/wisper20.mp3';
		}
		else if(selectedMusic==40)
		{
			setAudio='audio/leaves40.mp3';
		}
		else if(selectedMusic==60)
		{
			setAudio='audio/typewriter60.mp3';
		}
		else if(selectedMusic==80)
		{
			setAudio='audio/lightAuto80.mp3';
		}
		else if(selectedMusic==100)
		{
			setAudio='audio/airplane100.mp3';
		}
		else if(selectedMusic==101)
		{
			setAudio='audio/train101.mp3';
		}
		else if(selectedMusic==102)
		{
			setAudio='audio/heavyfactory102.mp3';
		}
		
		$("#myAudio").attr("src",setAudio);
		
		
	});
    
    
     $("#submitconfig").click(function(){
	 	frequencySelect=$("#frequency").val();
		  soundSelect=$("#sound").val();

//		   console.log("main frequency  =  "+ frequencySelect);	  
//		     console.log("distance =   "+soundSelect);
		
		   
		   if(frequencySelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Frequency </b>");
	}else if(soundSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Source of Sound </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");		

		  animation(frequencySelect,soundSelect);
		  

		  
	}	


	
	});


id=0;
     $("#submitReading").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var soundAns = $("#soundLevel").val();
	
		
				if(soundAns==""){
					
					$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
						if (soundAns == soundDB) {
							$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#soundAnswer").prop('hidden',true);
							id=0;
							
							addToMasterJSON();
							$("#soundLevel").val('');
							
						} else if (soundAns != soundDB) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else {
						soundAns = $("#soundLevel").val();
//						flow = flowAns.toFixed(2);
						if (soundAns == soundDB) {
							
							$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#soundAnswer").prop('hidden',true);
							
							addToMasterJSON();
							$("#soundLevel").val('');
							id=0;
//					$("#submitconfig").prop('disabled',false);
						} else {

							 $("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +soundDB+'</b>');
						}
					}
					id++;
					}
		
		$("#frequency").prop("disabled",false);
  $("#submitconfig").prop("disabled",false);
  $("#sound").prop("disabled",false);			
					
				});



	
	             
}



