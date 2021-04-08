(() => {
    'use stric'
    var control = { x: 0, y: 0, z: 700 }
    var scene, camera, esfera, renderer, texture, geometry, material, posicao, resultado;
    var aux = 0
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
    
    document.getElementById('btn5').addEventListener('click', teste5);

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

    function CubeMaker(x = 10, y = 10, z = 10, color = 'gold') {

        let geometry = new THREE.BoxGeometry(x, y, z);
        let material = new THREE.MeshBasicMaterial({ color: color });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);


    }

    function Terra(x = 0, y = 10, z = 10, color = 'red') {
        texture = new THREE.TextureLoader().load('resources/default/1_2/images/Terra.png')
        geometry = new THREE.SphereGeometry(x, y, z)
        material = new THREE.MeshBasicMaterial({ map: texture });
        esfera = new THREE.Mesh(geometry, material);
        posicao = esfera.position.z
        scene.add(esfera);
        

    }


    function MoonMaker() {

        let texture = new THREE.TextureLoader().load('resources/default/1_2/images/Lua.jpg')
        let geometry = new THREE.SphereGeometry(20, 20, 20);
        let material = new THREE.MeshBasicMaterial({ map: texture })

        let cube2 = new THREE.Mesh(geometry, material);
        cube2.position.z = 200
        cube2.position.y = 100
        scene.add(cube2)

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
       
   					document.getElementById('game1').value = camera.position.z
   					document.getElementById('game2').value = resultado
   				
        
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
    
    function teste5() {
		alert("desgracado")
        click5 = true
		
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
        
			
         	resultado = prompt("digite um valor")
			esfera.position.z = resultado
    }


})()