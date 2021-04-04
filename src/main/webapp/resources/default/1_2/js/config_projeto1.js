﻿(() => {
    'use stric'
    var control = { x: 0, y: 0, z: 500 }
    var scene, camera, renderer;
    var key = { event: " ", status: true };
    var click1 = false
    var click2 = false

    window.onload = BuilderGamer
    document.addEventListener("keydown", CaptureKeyDown)
    document.addEventListener("keyup", CaptureKeyUp)

    document.getElementById('btn1').addEventListener('touchstart', DownOn);
    document.getElementById('btn1').addEventListener('touchend', DownOff);
    document.getElementById('btn2').addEventListener('touchstart', LeftON);
    document.getElementById('btn2').addEventListener('touchend', LeftOff);
    document.getElementById('btn3').addEventListener('touchstart', RighON);
    document.getElementById('btn3').addEventListener('touchend', RighOff);


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
        JoyStick()
        teste1()
        teste2()

        if (key.status || click1) {

            camera.position.z = control.z
            camera.position.x = control.x

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
        alert("teste01")
        console.log("consolando")
    }

    function RighOff() {

        //click2 = false

    }

    function teste1() {
        if (click1) {

            control.z += 50
            console.log("teste1", camera.position.z)
        }
        return control
    }

    function teste2() {
        if (click2) {

            control.z -= 50
            console.log("teste2", camera.position.z)
        }
        return control
    }


})()