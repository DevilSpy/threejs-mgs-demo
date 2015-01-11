// muuttujien alustelua
var container, scene, camera, renderer, controls;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

// taulukoita törmäysten tarkasteluun
var collidableMeshList = [];
var collidableMeshList2 = [];
var collidableMeshList3 = [];
var collidableMeshList4 = [];

var width = window.innerWidth;
var height = window.innerHeight;

var boxCamera;

var pahvilaatikko;
var codec;
var game_over;
		
var found;
var codecopen;
var codecover;
var gameover;

var pressedP;


init();
animate();

function tee_meshesit() {
	tee_taivas();	
	tee_pahvilaatikko();
	tee_cubet();
	tee_planesit();
	tee_seinat();
	tee_huutomerkki();
	tee_lattia();
	tee_nurmi();
	tee_loppu();
	tee_muuri();
	tee_codec();
	tee_lopetus();
}

	
function init() {	
	pressedP = false;
	// scene
	scene = new THREE.Scene();
	// camera
	camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
	scene.add(camera);
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);
	
	boxCamera = new THREE.PerspectiveCamera(45, width/height, 0.1, 20000);
	scene.add(boxCamera);
	
	// renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	
	// yleisvalo
	var ambientlight = new THREE.AmbientLight(0xffffff);
	scene.add(ambientlight);
			
	// orbit controls, jotta hiirellä voi pyöritellä kameraa 
	//controls = new THREE.OrbitControls(camera, renderer.domElement);
	
	// event listener, joka muuttaa ruudun kokoa selaimen koon mukaan
	window.addEventListener('resize', function() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		renderer.setSize(width, height);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});
		
	// äänet
	found = document.createElement('audio');
	var source = document.createElement('source');
	source.src = 'sounds/found.wav';
	found.appendChild(source);
	
	var codeccall = document.createElement('audio');
	var source2 = document.createElement('source');
	source2.src = 'sounds/codeccall.wav';
	codeccall.appendChild(source2);
	codeccall.play();
	
	codecopen = document.createElement('audio');
	var source3 = document.createElement('source');
	source3.src = 'sounds/codecopen.wav';
	codecopen.appendChild(source3);
	window.setTimeout(function() {
		codecopen.play();
	}, 1000);
	
	codecover = document.createElement('audio');
	var source4 = document.createElement('source');
	source4.src = 'sounds/codecover.wav';
	codecover.appendChild(source4);
	
	gameover = document.createElement('audio');
	var source5 = document.createElement('source');
	source5.src = 'sounds/gameover.wav';
	gameover.appendChild(source5);
}


// animoidaan, jotta kaikki näkyy 
function animate() {
	requestAnimationFrame(animate);
	render();	
	update();
}

// päivitetään
function update() {

	var delta = clock.getDelta(); // seconds.
	var moveDistance = 200 * delta; // 200 pixels per second
	var rotateAngle = Math.PI / 2 * delta;   
	// pi /2 radians (90 degrees) per second
	
	// liikkuminen
		
	///*
	if (keyboard.pressed("W")) {
		pahvilaatikko.translateZ( -moveDistance );
	} 
	if (keyboard.pressed("S")) {
		pahvilaatikko.translateZ(  moveDistance );
	}
	if (keyboard.pressed("Q")) {
		pahvilaatikko.translateX( -moveDistance );
	}
	if (keyboard.pressed("E")) {
		pahvilaatikko.translateX(  moveDistance );	
	}
	if (keyboard.pressed("P")) {
		if (pressedP == false) {
			scene.remove(codec);
			codecover.play();
			pressedP = true;
		}
	}
	
		
	// kääntyminen
	var rotation_matrix = new THREE.Matrix4().identity();
	if ( keyboard.pressed("A") )
		pahvilaatikko.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
	if ( keyboard.pressed("D") )
		pahvilaatikko.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
		
	// kameran kulmat vaihtuu tästä
	var relativeCameraOffset = new THREE.Vector3(0,100,150); // normaali
	
	var cameraOffset = relativeCameraOffset.applyMatrix4( pahvilaatikko.matrixWorld );
	
	camera.position.x = cameraOffset.x;
	camera.position.y = cameraOffset.y;
	camera.position.z = cameraOffset.z;
	camera.lookAt( pahvilaatikko.position );
	
	camera.updateMatrix();
	camera.updateProjectionMatrix();
	
	// boxcamera
	if (keyboard.pressed("B")) {
		var relativeCameraOffset = new THREE.Vector3(0,0,1);
		var cameraOffset = pahvilaatikko.matrixWorld.multiplyVector3( relativeCameraOffset );
		boxCamera.position.x = cameraOffset.x;
		boxCamera.position.y = cameraOffset.y;
		boxCamera.position.z = cameraOffset.z;
		var relativeCameraLookOffset = new THREE.Vector3(0,0,-1);
		var cameraLookOffset = relativeCameraLookOffset.applyMatrix4( pahvilaatikko.matrixWorld );
		boxCamera.lookAt( cameraLookOffset );
	
	}
	//*/
		
	// törmäysten tarkastelu
	var originPoint = pahvilaatikko.position.clone();
		
		
	for (var vertexIndex = 0; vertexIndex < pahvilaatikko.geometry.vertices.length; vertexIndex++) {		
		var localVertex = pahvilaatikko.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4( pahvilaatikko.matrix );
		var directionVector = globalVertex.sub( pahvilaatikko.position );
	
		var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
		var collisionResults = ray.intersectObjects( collidableMeshList );
			
		// jos osuu seinään niin stoppaa
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) {
			var reversee = moveDistance * -1;
			pahvilaatikko.translateZ(moveDistance);	
		}
			
		// jos osuu huutomerkkiin niin soi alert-ääni
		var collision2Results = ray.intersectObjects(collidableMeshList2);
		if (collision2Results.length > 0 && collision2Results[0].distance < directionVector.length() ) {
			found.play();
		}
		
		// lopetus
		var collision3Results = ray.intersectObjects(collidableMeshList4);
		if (collision3Results.length > 0 && collision3Results[0].distance < directionVector.length() ) {
			console.log("Loppu");	
			gameover.play();
			tee_gameover();
			pahvilaatikko.position.set(-1000, 25, 1000);
		}
			
			
	}	
}

// renderöidään
function render() {
	renderer.render(scene,camera);	
	
	if(keyboard.pressed("B") ){
		renderer.render(scene, boxCamera);
	}
}
