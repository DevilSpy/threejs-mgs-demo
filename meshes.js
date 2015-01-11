var betoniTexture = THREE.ImageUtils.loadTexture('textures/brickwall_texture.jpg');
betoniTexture.wrapS = betoniTexture.wrapT = THREE.RepeatWrapping;
var material1 = new THREE.MeshLambertMaterial({map: betoniTexture});
var kaanto = Math.PI / 2;
var pii = Math.PI;

var pos_y = 250;
var siz_y = 500;



function tee_taivas() {
	// skybox
	var skyBoxGeometry = new THREE.CubeGeometry(10000,10000,10000);
	var skyBoxMaterial = new THREE.MeshBasicMaterial({color: 0x9999ff, side: THREE.BackSide});
	var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
	scene.fog = new THREE.FogExp2(0x9999ff, 0.00025);
	scene.add(skyBox);	
}


function tee_pahvilaatikko() {
	// create an array with six textures for a cool cube
	var materialArray = [];
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/cardboard_long_side.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/cardboard_long_side.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/cardboard_up_side.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/cardboard_up_side.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/cardboard_short_side.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'textures/cardboard_short_side.jpg' ) }));
	var pahvilaatikkoMateriaali = new THREE.MeshFaceMaterial(materialArray);
	var pahvilaatikkoGeometry = new THREE.CubeGeometry( 50, 50, 100, 1, 1, 1, materialArray );
	pahvilaatikko = new THREE.Mesh( pahvilaatikkoGeometry, pahvilaatikkoMateriaali );
	pahvilaatikko.position.set(-1000, 25, 1000);
	scene.add( pahvilaatikko );		
}

function tee_cubet() {

	var geometry1 = new THREE.CubeGeometry(200, siz_y, 100);
	var cube1 = new THREE.Mesh(geometry1, material1);
	scene.add(cube1);
	cube1.position.set(250, pos_y, -50);
	collidableMeshList.push(cube1);
	
	var geometry2 = new THREE.CubeGeometry(300, siz_y, 100);
	var cube2 = new THREE.Mesh(geometry2, material1);
	scene.add(cube2);
	cube2.position.set(650, pos_y, -50);
	collidableMeshList.push(cube2);
	
	var geometry3 = new THREE.CubeGeometry(150, siz_y, 50);
	var cube3 = new THREE.Mesh(geometry3, material1);
	scene.add(cube3);
	cube3.position.set(75, pos_y, -475);
	collidableMeshList.push(cube3);
	
	var geometry4 = new THREE.CubeGeometry(200, siz_y, 250);
	var cube4 = new THREE.Mesh(geometry4, material1);
	scene.add(cube4);
	cube4.position.set(250, pos_y, -375);
	collidableMeshList.push(cube4);
		
	var geometry5 = new THREE.CubeGeometry(150, siz_y, 200);
	var cube5 = new THREE.Mesh(geometry5, material1);
	scene.add(cube5);
	cube5.position.set(575, pos_y, -350);
	collidableMeshList.push(cube5);
	
	var cube6 = new THREE.Mesh(geometry5, material1);
	scene.add(cube6);
	cube6.position.set(875, pos_y, -350);
	collidableMeshList.push(cube6);

	var geometry6 = new THREE.CubeGeometry(100, siz_y, 150);
	var cube7 = new THREE.Mesh(geometry6, material1);
	scene.add(cube7);
	cube7.position.set(1000, pos_y, -375);
	collidableMeshList.push(cube7);		
		
	var geometry7 = new THREE.CubeGeometry(50, siz_y, 300);
	var cube8 = new THREE.Mesh(geometry7, material1);
	scene.add(cube8);
	cube8.position.set(1225, pos_y, -300);
	collidableMeshList.push(cube8);
		
	var geometry8 = new THREE.CubeGeometry(150, siz_y, 150);
	var cube9 = new THREE.Mesh(geometry8, material1);
	scene.add(cube9);
	cube9.position.set(75, pos_y, -725)		
	collidableMeshList.push(cube9);
		
	var geometry9 = new THREE.CubeGeometry(350, siz_y, 50);
	var cube10 = new THREE.Mesh(geometry9, material1);
	scene.add(cube10);
	cube10.position.set(475, pos_y, -675);
	collidableMeshList.push(cube10);
		
	var cube11 = new THREE.Mesh(geometry3, material1);
	scene.add(cube11);
	cube11.position.set(575, pos_y, -625);
	collidableMeshList.push(cube11);
		
	var cube12 = new THREE.Mesh(geometry3, material1);
	scene.add(cube12);
	cube12.position.set(875, pos_y, -775);	
	collidableMeshList.push(cube12);	
		
	var cube13 = new THREE.Mesh(geometry3, material1);
	scene.add(cube13);
	cube13.rotation.y = kaanto;
	cube13.position.set(825, pos_y, -675);
	collidableMeshList.push(cube13);
		
	var cube14 = new THREE.Mesh(geometry9, material1);
	scene.add(cube14);
	cube14.rotation.y = kaanto;
	cube14.position.set(625, pos_y, -875);
	collidableMeshList.push(cube14);
		
	var cube15 = new THREE.Mesh(geometry2, material1);
	scene.add(cube15);
	cube15.position.set(300, pos_y, -1050);
	collidableMeshList.push(cube15);
		
		
	var cube16 = new THREE.Mesh(geometry3, material1);
	scene.add(cube16);
	cube16.position.set(525, pos_y, -1025);
	collidableMeshList.push(cube16);
		
	var geometry10 = new THREE.CubeGeometry(100, siz_y, 50);
	var cube17 = new THREE.Mesh(geometry10, material1);
	scene.add(cube17);
	cube17.position.set(700, pos_y, -975);
	collidableMeshList.push(cube17);
		
	var cube18 = new THREE.Mesh(geometry3, material1);
	scene.add(cube18);
	cube18.position.set(675, pos_y, -1225);
	collidableMeshList.push(cube18);
		
	var cube19 = new THREE.Mesh(geometry10, material1);
	scene.add(cube19);
	cube19.rotation.y = kaanto;
	cube19.position.set(775, pos_y, -1200);	
	collidableMeshList.push(cube19);
}

function tee_planesit() {
	// planes
	
	var pMaterial = new THREE.MeshLambertMaterial({map: betoniTexture, side: THREE.DoubleSide});	
		
	var pGeometry = new THREE.PlaneGeometry(250, siz_y);
	var plane1 = new THREE.Mesh(pGeometry, pMaterial);
	plane1.rotation.y = kaanto;
	scene.add(plane1);
	plane1.position.set(950, pos_y, -125);
	collidableMeshList.push(plane1);
		
	var pGeometry2 = new THREE.PlaneGeometry(100, siz_y);
	var plane2 = new THREE.Mesh(pGeometry2, pMaterial);
	plane2.rotation.y = kaanto;
	scene.add(plane2);
	plane2.position.set(1050, pos_y, -250);
	collidableMeshList.push(plane2);
		
	var plane3 = new THREE.Mesh(pGeometry2, pMaterial);
	plane3.rotation.y = pii;
	scene.add(plane3);
	plane3.position.set(1000, pos_y, -200);
	collidableMeshList.push(plane3);
		
	var pGeometry3 = new THREE.PlaneGeometry(150, siz_y);
	var plane4 = new THREE.Mesh(pGeometry3, pMaterial);
	plane4.rotation.y = kaanto;
	scene.add(plane4);
	plane4.position.set(300, pos_y, -775);
	collidableMeshList.push(plane4);
		
	var plane5 = new THREE.Mesh(pGeometry3, pMaterial);
	plane5.rotation.y = pii;
	scene.add(plane5);
	plane5.position.set(375, pos_y, -850);
	collidableMeshList.push(plane5);
		
	var plane6 = new THREE.Mesh(pGeometry, pMaterial);
	plane6.rotation.y = pii;
	scene.add(plane6);
	plane6.position.set(975, pos_y, -600);
	collidableMeshList.push(plane6);
		
	var pGeometry4 = new THREE.PlaneGeometry(350, siz_y);
	var plane7 = new THREE.Mesh(pGeometry4, pMaterial);
	plane7.rotation.y = kaanto;
	scene.add(plane7);
	plane7.position.set(1100, pos_y, -775);
	collidableMeshList.push(plane7);
		
	var plane8 = new THREE.Mesh(pGeometry4, pMaterial);
	plane8.rotation.y = pii;
	scene.add(plane8);
	plane8.position.set(925, pos_y, -950);
	collidableMeshList.push(plane8);
	
	var pGeometry5 = new THREE.PlaneGeometry(300, siz_y);
	var plane9 = new THREE.Mesh(pGeometry5, pMaterial);
	plane9.rotation.y = pii;
	scene.add(plane9);
	plane9.position.set(1100, pos_y, -1100); 	
	collidableMeshList.push(plane9);
}

function tee_seinat() {
	var wallTexture = THREE.ImageUtils.loadTexture('textures/wall_texture4.jpg');
	wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
	
	var pGeometryWall = new THREE.PlaneGeometry(1257, 500);
	var pMaterialWall = new THREE.MeshLambertMaterial({map: wallTexture, side: THREE.DoubleSide});
	
	var wall1 = new THREE.Mesh(pGeometryWall, pMaterialWall);
	wall1.rotation.y = kaanto;
	scene.add(wall1);
	wall1.position.set(-3, 250, -625);
	collidableMeshList.push(wall1);
	
	var pGeometryWall2 = new THREE.PlaneGeometry(1107, 500);
	var wall2 = new THREE.Mesh(pGeometryWall2, pMaterialWall);
	wall2.rotation.y = kaanto;
	scene.add(wall2);
	wall2.position.set(1253, 250, -550);
	collidableMeshList.push(wall2);
	
	var wall3 = new THREE.Mesh(pGeometryWall, pMaterialWall);
	wall3.rotation.y = pii;
	scene.add(wall3);
	wall3.position.set(625, 250, -1253);
	collidableMeshList.push(wall3);
	
	var wall4 = new THREE.Mesh(pGeometryWall2, pMaterialWall);
	wall4.rotation.y = pii;
	scene.add(wall4);
	wall4.position.set(700, 250, 3);
	collidableMeshList.push(wall4);	
}


function tee_muuri() {
	var geometryMuuri = new THREE.CubeGeometry(2500, 500, 50);
	var muuri1 = new THREE.Mesh(geometryMuuri, material1);
	scene.add(muuri1);
	muuri1.position.set(0, 247, 1250);	
	collidableMeshList.push(muuri1);
	
	var geometryMuuri2 = new THREE.CubeGeometry(1250, 500, 50);
	var muuri2 = new THREE.Mesh(geometryMuuri2, material1);
	scene.add(muuri2);
	muuri2.position.set(-630, 247, -1250);
	collidableMeshList.push(muuri2);
	
	var muuri3 = new THREE.Mesh(geometryMuuri, material1);
	muuri3.rotation.y = kaanto;
	scene.add(muuri3);
	muuri3.position.set(-1250, 247, 0);
	collidableMeshList.push(muuri3);
	
	var muuri4 = new THREE.Mesh(geometryMuuri2, material1);
	muuri4.rotation.y = kaanto;
	scene.add(muuri4);
	muuri4.position.set(1250, 247, 630);
	collidableMeshList.push(muuri4);
}


function tee_lattia() {
	var floorTexture = THREE.ImageUtils.loadTexture('textures/floor_texture.jpg');
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
	
	var lattiaMaterial = new THREE.MeshLambertMaterial({map: floorTexture, side: THREE.DoubleSide});
	var lattiaGeometry = new THREE.PlaneGeometry(1257, 1257);
	var lattia = new THREE.Mesh(lattiaGeometry, lattiaMaterial);
	lattia.rotation.x = kaanto;
	scene.add(lattia);
	lattia.position.set(625, 0, -625);	
}

function tee_nurmi() {
	var grassTexture = THREE.ImageUtils.loadTexture('textures/grass_texture.jpg');
	grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
	
	var grassMaterial = new THREE.MeshLambertMaterial({map: grassTexture, side: THREE.DoubleSide});
	var grassGeometry = new THREE.PlaneGeometry(2500, 2500);
	var grass = new THREE.Mesh(grassGeometry, grassMaterial);
	grass.rotation.x = kaanto;
	scene.add(grass);
	grass.position.set(0, -3, 0);		
}

function tee_loppu() {
	var loppuGeometry = new THREE.PlaneGeometry(152, 500);
	var loppuMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
	var loppu = new THREE.Mesh(loppuGeometry, loppuMaterial);
	loppu.rotation.y = kaanto;
	scene.add(loppu);
	loppu.position.set(1251, pos_y, -1178);	
}

function tee_lopetus() {
	var lopetusGeometry = new THREE.CubeGeometry(100, 100, 100);
	var lopetusMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
	var lopetus = new THREE.Mesh(lopetusGeometry, lopetusMaterial);
	scene.add(lopetus);
	lopetus.position.set(1400, 50, -1200);	
	collidableMeshList4.push(lopetus);
}

function tee_huutomerkki() {
	// huutomerkki
	var cylinder_geometry = new THREE.CylinderGeometry(20, 10, 50, 4, 4); // radiusTop, radiusBottom, height, radiusSegments, heightSegments
	var cylinder_material = new THREE.MeshBasicMaterial({color: 0xFF0000});
	var cylinder = new THREE.Mesh(cylinder_geometry, cylinder_material);
		
	var sphere_geometry = new THREE.SphereGeometry(15, 10, 10); // radius, widthSegments, heightSegments
	var sphere_material = new THREE.MeshBasicMaterial({color: 0xFF0000});
	var sphere = new THREE.Mesh(sphere_geometry, sphere_material);
	sphere.position.y = -50;
		
	var huutomerkki = new THREE.Object3D();
	huutomerkki.add(cylinder);
	huutomerkki.add(sphere);
	scene.add(huutomerkki);
	huutomerkki.position.set(-200, 100, 500);
	collidableMeshList2.push(sphere);	
}

function tee_codec() {
	var codecTexture = THREE.ImageUtils.loadTexture('textures/codec.jpg');
	var codecMaterial = new THREE.SpriteMaterial({map: codecTexture});
	codec = new THREE.Sprite(codecMaterial);
	codec.position.set(300, 250, 0);
	codec.scale.set(400, 300, 1.0);	
	window.setTimeout(function() {
		scene.add(codec);
	}, 1000);
}

function tee_gameover() {
	var gameoverTexture = THREE.ImageUtils.loadTexture('textures/game_over.jpg');
	var gameoverMaterial = new THREE.SpriteMaterial({map: gameoverTexture});
	game_over = new THREE.Sprite(gameoverMaterial);
	game_over.position.set(width/2, height/2, 0);
	game_over.scale.set(width, height, 1.0);
	scene.add(game_over);	
}