(()=> {
    'use stric'
	var control = { x: 0, y: 0, z: 500}
	var scene, camera, renderer;
	var key = { event: " ", status: true};

	window.onload = BuilderGamer
	document.addEventListener("keydown", CaptureKeyDown)
	document.addEventListener("keyup", CaptureKeyUp)
	function BuilderGamer(){
	
		SceneBuild()
		CubeMaker()
	}
	
	function SceneBuild(){
		scene = new THREE.Scene();
	    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	    renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
	    document.body.appendChild(renderer.domElement); 
	   	camera.position.z = control.z
	   	animate()
	}
	
	function CubeMaker(x=100,y=100,z=100, color='blue'){
			
	    let geometry = new THREE.BoxGeometry(x,y,z);
	    let material = new THREE.MeshBasicMaterial({ color: color});
	    let cube = new THREE.Mesh(geometry, material);
	    
	    scene.add(cube);
				
	}
	
	function CaptureKeyDown(event){
		key.event = event.key
		key.status = true
		  
	}
	
	function CaptureKeyUp(event){
		key.event = event.key
		key.status = false
	}
	
	function animate(){
		let joy = JoyStick()
			
		if (key.status){
		
			 camera.position.z = joy.z
			 camera.position.x = joy.x
			
			 console.log("animate: ", key,joy)
		}
	   	renderer.render(scene, camera);
	   	requestAnimationFrame(animate);
  	
	}

	function JoyStick(){
	
		if(key.status){
		
			switch(key.event){
				case 'ArrowUp':
					control.z -=10
					break
				case 'ArrowDown':
					control.z +=10
					break
				case 'ArrowRight':
					control.x +=10
					break
				case 'ArrowLeft':
					control.x -=10
					break
				default:
			}
			
		} 
	
		return control 
	}
	
	
		document.querySelector('p').addEventListener('touchstart', f);
		document.querySelector('p').addEventListener('touchend', f);
		document.querySelector('p').addEventListener('touchmove', f);
        
function f(ev){
    console.log( ev.touches, ev.type );
    alert('Te amo Xanita')
    camera.position.z = 0
}

})()

