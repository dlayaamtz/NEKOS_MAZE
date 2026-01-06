(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,960,600],[962,0,960,600],[0,602,960,600],[962,602,960,600],[0,1204,960,600],[962,1204,960,600]]},
		{name:"index_atlas_2", frames: [[0,0,960,600],[961,602,226,232],[0,602,959,386]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Flecha1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PLAY = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.PLAY();
	this.instance.setTransform(0,0,0.0917,0.0917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1217,scaleY:0.1217,x:-14,y:-6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-6,116.7,47);


(lib.Delante = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Flecha1();
	this.instance.setTransform(88.45,0,0.3914,0.3914,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4754,scaleY:0.4754,x:97.45,y:-10},0).wait(1).to({scaleX:0.3914,scaleY:0.3914,x:88.45,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,107.5,110.3);


(lib.Atras = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Flecha1();
	this.instance.setTransform(0,0,0.3914,0.3914);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4754,scaleY:0.4754,x:-9,y:-10},0).wait(1).to({scaleX:0.3914,scaleY:0.3914,x:0,y:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-10,107.5,110.3);


// stage content:
(lib.Animaciónintro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.Delante.addEventListener("click", ira1.bind(this));
		
		function ira1()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		
		this.Delante.addEventListener("click", ira2.bind(this));
		
		function ira2()
		{
			this.gotoAndStop(2);
		}
		
		
		this.Atras.addEventListener("click", ira0.bind(this));
		
		function ira0()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		
		this.Delante.addEventListener("click", ira3.bind(this));
		
		function ira3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.Atras.addEventListener("click", ira1.bind(this));
		
		function ira1()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		
		this.Delante.addEventListener("click", ira4.bind(this));
		
		function ira4()
		{
			this.gotoAndStop(4);
		}
		
		
		this.Atras.addEventListener("click", ira2.bind(this));
		
		function ira2()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		
		this.Delante.addEventListener("click", ira5.bind(this));
		
		function ira5()
		{
			this.gotoAndStop(5);
		}
		
		
		this.Atras.addEventListener("click", ira3.bind(this));
		
		function ira3()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_5 = function() {
		this.stop();
		
		
		this.Delante.addEventListener("click", ira6.bind(this));
		
		function ira6()
		{
			this.gotoAndStop(6);
		}
		
		
		this.Atras.addEventListener("click", ira4.bind(this));
		
		function ira4()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_6 = function() {
		this.stop();
		
		
		this.Atras.addEventListener("click", ira5.bind(this));
		
		function ira5()
		{
			this.gotoAndStop(5);
		}
		
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.CargarJuego.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("juego.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Boton_Play
	this.CargarJuego = new lib.Play();
	this.CargarJuego.name = "CargarJuego";
	this.CargarJuego.setTransform(890,537.7,1,1,0,0,0,44,17.7);
	this.CargarJuego._off = true;
	new cjs.ButtonHelper(this.CargarJuego, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.CargarJuego).wait(6).to({_off:false},0).wait(1));

	// Boton_Avance
	this.Delante = new lib.Delante();
	this.Delante.name = "Delante";
	this.Delante.setTransform(891.2,537.4,1,1,0,0,0,44.2,45.4);
	new cjs.ButtonHelper(this.Delante, 0, 1, 2, false, new lib.Delante(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Delante).to({_off:true},6).wait(1));

	// Boton_Retroseso
	this.Atras = new lib.Atras();
	this.Atras.name = "Atras";
	this.Atras.setTransform(782.2,537.4,1,1,0,0,0,44.2,45.4);
	this.Atras._off = true;
	new cjs.ButtonHelper(this.Atras, 0, 1, 2, false, new lib.Atras(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Atras).wait(1).to({_off:false},0).wait(6));

	// Ilustraciones
	this.instance = new lib._1();

	this.instance_1 = new lib._2();

	this.instance_2 = new lib._3();

	this.instance_3 = new lib._4();

	this.instance_4 = new lib._5();

	this.instance_5 = new lib._6();

	this.instance_6 = new lib._7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,300,480,300);
// library properties:
lib.properties = {
	id: 'E0831C348B2D4BB18656C203CB442344',
	width: 960,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E0831C348B2D4BB18656C203CB442344'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;