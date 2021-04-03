(() => {
    'use stric'
    var control = { x: 0, y: 0, z: 500 }
    var scene, camera, renderer;
    var key = { event: " ", status: true };
    var click = true

    window.onload = BuilderGamer
    document.addEventListener("keydown", CaptureKeyDown)
    document.addEventListener("keyup", CaptureKeyUp)

    document.getElementById('btn1').addEventListener('touchstart', ZposON);
    document.getElementById('btn1').addEventListener('touchend', ZposOFF);
    document.getElementById('btn2').addEventListener('touchstart', ZnegON);
    document.getElementById('btn2').addEventListener('touchend', ZnegOFF);
    document.getElementById('btn3').addEventListener('touchstart', XposON);
    document.getElementById('btn3').addEventListener('touchend', XposOFF);
    document.getElementById('btn4').addEventListener('touchstart', XnegON);
    document.getElementById('btn4').addEventListener('touchend', XnegOFF);


    function BuilderGamer() {

        SceneBuild()
        CubeMaker()

    }

    function SceneBuild() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        camera.position.z = control.z
        animate()
    }

    function CubeMaker(x = 100, y = 100, z = 100, color = 'blue') {

        let geometry = new THREE.BoxGeometry(x, y, z);
        let material = new THREE.MeshBasicMaterial({ color: color });
        let cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

    }

    function CaptureKeyDown(event) {

        key.event = event.key
        key.status = true


    }

    function CaptureKeyUp(event) {

        key.event = event.key
        key.status = false

    }

    function animate() {
        let joy = JoyStick()


        if (key.status) {

            camera.position.z = joy.z
            camera.position.x = joy.x

        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

    }

    function JoyStick() {

        if (key.status) {

            switch (key.event) {
                case 'ArrowUp':
                    control.z -= 10
                    break
                case 'ArrowDown':
                    control.z += 10
                    break
                case 'ArrowRight':
                    control.x += 10
                    break
                case 'ArrowLeft':
                    control.x -= 10
                    break
                default:

            }

        }

        return control
    }


    function ZposON() {
        event.preventDefault();
        click = true

        booleana1()


    }

    function ZposOFF() {

        click = false



    }

    function ZnegON() {
        event.preventDefault();
        click = true

        booleana2()


    }

    function ZnegOFF() {

        click = false

    }

    function XposON() {
        event.preventDefault();
        click = true

        booleana3()

    }

    function XposOFF() {

        click = false

    }

    function XnegON() {
        event.preventDefault();
        click = true

        booleana4()

    }

    function XnegOFF() {

        click = false

    }

    function booleana1() {

        if (click == true) {

            camera.position.z += 2
            console.log("BTN1 :", camera.position.z)
        }

        renderer.render(scene, camera);
        requestAnimationFrame(booleana1);

    }

    function booleana2() {

        if (click == true) {

            camera.position.z -= 2
            console.log("BTN2 :", camera.position.z)

        }

        renderer.render(scene, camera);
        requestAnimationFrame(booleana2);

    }

    function booleana3() {

        if (click == true) {

            camera.position.x += 2

        }

        renderer.render(scene, camera);
        requestAnimationFrame(booleana3);

    }

    function booleana4() {

        if (click == true) {

            camera.position.x -= 2

        }

        renderer.render(scene, camera);
        requestAnimationFrame(booleana4);

    }



})()