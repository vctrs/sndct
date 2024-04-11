import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';




var camera, scene, renderer, cube;
let object;

await init();
animate();


async function  init() {

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //environment
    const path = './public/textures/skybox/';
                    const format = '.jpg';
                    const urls = [
                        path + 'px' + format, path + 'nx' + format,
                        path + 'py' + format, path + 'ny' + format,
                        path + 'pz' + format, path + 'nz' + format
                    ];
    const textureCube = new THREE.CubeTextureLoader().load( urls );

    scene = new THREE.Scene();
    scene.background = textureCube;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //var controls = new OrbitControls( camera, renderer.domElement );

	// const onProgress = function ( xhr ) {
	// 	if ( xhr.lengthComputable ) {
	// 		const percentComplete = xhr.loaded / xhr.total * 100;
	// 		console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
	// 	}
	// };

	// const onError = function (e) { console.log(e)};
    //load object
    const loader = new OBJLoader();
    object = await loader.loadAsync('./public/models/clip.obj');
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

    // cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    object.traverse((mesh) => {
        // You can also check for id / name / type here.
        mesh.material = material
      });
    scene.add( object );

    camera.position.z = 1.5;

    // const axesHelper = new THREE.AxesHelper( 5 );
    // scene.add( axesHelper );
}

function animate() {
	requestAnimationFrame( animate );
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
	renderer.render( scene, camera );
}
