(() => {
    'use stric'
    var control = { x: 0, y: 100, z: 726}
    var scene, camera, renderer, texture, geometry, material, posicao, resultado, cube;
    var distanciaMoonX, distanciaMoonY, distanciaMoonZ, distanciaTerraX, distanciaTerraY, distanciaTerraZ, distanciaCubeX, distanciaCubeY, distanciaCubeZ
    var key = { event: " ", status: true };
    var click1 = false
    var click2 = false
    var click3 = false
    var click4 = false
	var click5 = false

    window.onload = BuilderGamer
    document.addEventListener("keydown", CaptureKeyDown)
    document.addEventListener("keyup", CaptureKeyUp)

    document.getElementById('btn1').addEventListener('touchstart', DownOn);
    document.getElementById('btn1').addEventListener('touchend', DownOff);
    document.getElementById('btn2').addEventListener('touchstart', LeftON);
    document.getElementById('btn2').addEventListener('touchend', LeftOff);
    document.getElementById('btn3').addEventListener('touchstart', RighON);
    document.getElementById('btn3').addEventListener('touchend', RighOff);
    document.getElementById('btn4').addEventListener('touchstart', UpON);
    document.getElementById('btn4').addEventListener('touchend', UpOff);
     
    document.getElementById('cuboY').addEventListener('click', teste5);

    function BuilderGamer() {

        SceneBuild()
        CubeMaker()
        addAxisInScene()
        MoonMaker()
        Terra()

    }

    function SceneBuild() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(1000, 1000);
        document.body.appendChild(renderer.domElement);
        camera.position.z = control.z

        animate()

    }

    function CubeMaker(x = 10, y = 6, z = 6, color = 'red') {

        let geometry = new THREE.BoxGeometry(x, y, z);
        let material = new THREE.MeshBasicMaterial({ color: color });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
		cube.position.y = 105
		distanciaCubeX = cube.position.x
		distanciaCubeY = cube.position.y
		distanciaCubeZ = cube.position.Z
		document.getElementById('cuboX').value = cube.position.x
		document.getElementById('cuboY').value = cube.position.y
    	document.getElementById('cuboZ').value = cube.position.z
    }

    function Terra(x = 103, y = 103, z = 103, color = 'red') {
        texture = new THREE.TextureLoader().load('resources/default/1_2/images/Terra.png')
        geometry = new THREE.SphereGeometry(x, y, z)
        material = new THREE.MeshBasicMaterial({ map: texture });
        terra = new THREE.Mesh(geometry, material);
        posicao = terra.position.z
        distanciaTerraX = terra.position.x
        distanciaTerraY = terra.position.y
        distanciaTerraZ = terra.position.z
        scene.add(terra);
        

    }


    function MoonMaker() {

        let texture = new THREE.TextureLoader().load('resources/default/1_2/images/Lua.jpg')
        let geometry = new THREE.SphereGeometry(13, 13, 13);
        let material = new THREE.MeshBasicMaterial({ map: texture })

        let moon = new THREE.Mesh(geometry, material);
        moon.position.x = 0
        moon.position.y = 384,4
        moon.position.z = 0
        distanciaMoonX = moon.position.x
        distanciaMoonY = moon.position.y
        distanciaMoonZ = moon.position.z
        scene.add(moon)

    }

    function CaptureKeyDown(event) {

        key.event = event.key
        key.status = true

    }

    function CaptureKeyUp(event) {

        key.event = event.key
        key.status = false

    }
    var axis;

    function addAxisInScene() {
        axis = new THREE.AxisHelper(200);
        scene.add(axis);
    }
    
   
	
    function animate() {
        JoyStick()
        teste1()
        teste2()
        teste3()
        teste4()
       				document.getElementById('luaX').value = distanciaMoonX
   					document.getElementById('luaY').value = distanciaMoonY
   					document.getElementById('luaZ').value = distanciaMoonZ		
        
        			document.getElementById('terraX').value = distanciaTerraX
   					document.getElementById('terraY').value = distanciaTerraY
   					document.getElementById('terraZ').value = distanciaTerraZ	
               
        if (key.status || click1 || click2 || click3 || click4) {

            camera.position.z = control.z
            camera.position.x = control.x
            camera.position.y = control.y

        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);

    }

    function JoyStick() {

        if (key.status) {

            switch (key.event) {
                case 'ArrowUp':
                    control.z -= 2

                    break
                case 'ArrowDown':
                    control.z += 2
                    break
                case 'ArrowRight':
                    control.x += 2
                    break
                case 'ArrowLeft':
                    control.x -= 2
                    break
                case 'Shift':
                    control.y += 2
                    break
                case 'Control':
                    control.y -= 2
                    break
                case 'Delete':
                    alert("vai da certo")
                    break
                    default:

            }


        }

        return control.z

    }

    function DownOn() {
        event.preventDefault();
        click1 = true
		
    }

    function DownOff() {

        click1 = false

    }

    function LeftON() {
        event.preventDefault();
        click2 = true

    }

    function LeftOff() {

        click2 = false

    }

    function RighON() {
        event.preventDefault();
        click3 = true
    }

    function RighOff() {

        click3 = false

    }

    function UpON() {
        event.preventDefault();
        click4 = true
    }

    function UpOff() {

        click4 = false

    }
    

    function teste1() {
        if (click1) {

            control.z += 10

        }
        return control
    }

    function teste2() {
        if (click2) {

            control.z -= 10

        }
        return control
    }

    function teste3() {
        if (click3) {

            control.x -= 10

        }
        return control
    }

    function teste4() {
        if (click4) {

            control.x += 10

        }
        return control
    }
	function teste5() {
        		
         	cube.position.y = prompt("digite um valor")
            document.getElementById('cuboY').value = cube.position.y
         
    }


})()