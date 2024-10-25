var srcOfSound='';
//console.log("srcSound="+srcOfSound);
var soundDB;
var frequency;
var ArrayJson=[];
var TimeMasterJson={};
function animation(frequencySelect,soundSelect){
	
	$("#canvas-div").html('');	
    $("#centerText1").html('IDENTIFY SOUND LEVEL OF COMMON SOUNDS');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
	var h = 900;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	


//paper=new Raphael(document.getElementById('canvas'),1000,900);
var x=100;
var y=100;
var time=1000;


 soundDB=parseInt(soundSelect);
 frequency=1000;
var start=paper.rect((x+50),(y-100),110,35).attr({'fill':'pink'});
paper.text((x+105),(y-85),"START").attr({'font-size':20});

var stop=paper.rect((x+175),(y-100),110,35).attr({'fill':'pink'});
paper.text((x+230),(y-85),"STOP").attr({'font-size':20});

var locationFrame=paper.rect((x-85),(y-45),810,710).attr({'stroke-width':6,'fill':'45-#B8E2F2-#fff-#B8E2F2'});

//var speaker=paper.image("images/speaker.jpeg",x-85,y+200,300,320);
var meter=paper.image("images/soundMeter_preview.png",x+480,y+280,260,380);
var sUnit=paper.text(x+620,y+480,"dBA").attr({'fint-size':30,'font-weight':'bold'});

var t1=paper.text((x+620),(y+510),"").attr({'font-size':50,'font-weight':'bold'});

//font-family':'digital-clock-font'

var placeImg;
var Location_txt=paper.text((x+345),(y+745),"Source of Sound").attr({'font-size':35,'fill':'#363636'});
var counter=0;
function dBCounter(){ 		
	myTimer = setInterval(function(){ 				
			if(counter<soundDB){ 						
				counter++; 		
				t1.attr('text',counter); 			
//				console.log(" Counter= "+counter); 
				}
				
				},200); 		
					
}

 function playAudio(){ 
	
    musicfile.play(); 
    dBCounter();
} 

function pauseAudio(){ 
    musicfile.pause();
}

start.click(function(){
	$("#sound").children(":selected").css("background-color","#f7dddd").prop('disabled',true);
	if(soundDB==20){
		srcOfSound="Sound of Whisper";	
			placeImg=paper.image("images/whispering.gif",(x-80),(y-35),800,700);
			var strip=paper.rect((x-85),(y+640),810,35).attr({'stroke-width':6,'fill':'45-#fff-#B8E2F2-#fff'}).toFront();
	
}else if(soundDB==40){
	srcOfSound="Sound of Rusling of Leaves";
	placeImg=paper.image("images/leaves.gif",(x-80),(y-35),800,700);
//	 playAudio();
}else if(soundDB==60){
	srcOfSound="Sound of TypeWriter";
	placeImg=paper.image("images/typeWriter.gif",(x-80),(y-35),800,700);
//	 playAudio();
}else if(soundDB==80){
	srcOfSound="Sound of Light Automobile";
	placeImg=paper.image("images/lightAutomobile.gif",(x-80),(y-35),800,700);
//	 playAudio();
}else if(soundDB==100){
	srcOfSound="Sound of Airport";
	placeImg=paper.image("images/airport.gif",(x-80),(y-35),800,700);
//	 playAudio();
}else if(soundDB==101){
	srcOfSound="Sound of Train Whistle";
	placeImg=paper.image("images/train.gif",(x-80),(y-35),800,700);
//	 playAudio();
}else{
	srcOfSound="Sound of Noisy Factory";
	placeImg=paper.image("images/industry.gif",(x-80),(y-35),800,700);
	 
}
playAudio();

$("#frequency").prop("disabled",true);
  $("#submitconfig").prop("disabled",true);
  $("#sound").prop("disabled",true);
  $("#soundAnswer").prop("hidden",false);

meter.toFront();
t1.toFront();
sUnit.toFront();
})
  	
stop.click(function(){
			if(soundDB==20){
					srcOfSound="Sound of Whisper";	
						placeImg=paper.image("images/whispering20.png",(x-80),(y-35),800,700);			
			}else if(soundDB==40){
				
				placeImg=paper.image("images/leaves40.png",(x-80),(y-35),800,700);
			
			}else if(soundDB==60){
				
				placeImg=paper.image("images/typeW60.png",(x-80),(y-35),800,700);
			//	 playAudio();
			}else if(soundDB==80){
				
				placeImg=paper.image("images/automobile80.png",(x-80),(y-35),800,700);
			//	 playAudio();
			}else if(soundDB==100){
				
				placeImg=paper.image("images/IMG100.png",(x-80),(y-35),800,700);
			//	 playAudio();
			}else if(soundDB==101){
				
				placeImg=paper.image("images/train101.png",(x-80),(y-35),800,700);
			//	 playAudio();
			}else{
				
				placeImg=paper.image("images/factory102.png",(x-80),(y-35),800,700);
				 
			}
				pauseAudio();
				clearInterval(myTimer);
	meter.toFront();
t1.toFront();
sUnit.toFront();
})

}

function addToMasterJSON(){
	                  tempJson={};	
						tempJson.srcOfSound = srcOfSound;
						tempJson.frequency=frequency;
						tempJson.soundDB=soundDB;
						ArrayJson.push(tempJson);
						TimeMasterJson.demo = ArrayJson;
//						console.log(TimeMasterJson);
						tableCreate(TimeMasterJson);
//						console.log("animation JSON function");

}

