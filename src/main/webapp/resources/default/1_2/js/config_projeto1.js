var scene, camera, renderer;
var geometry, material, cube;
var keydown = [];
var id;

window.onload = function() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); 
    
    geometry = new THREE.BoxGeometry(100,100,100);
    material = new THREE.MeshBasicMaterial({ color: 'blue'});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

   camera.position.z = 500;
           
        window.onkeydown = function(e)
        {
        keydown[e.key]=true;
        }
        
        window.onkeyup = function(e)
        {
        keydown[e.key]=false;  
        }
        
        var animate = function()
        {	
        
        requestAnimationFrame(animate);
        
        if(keydown["ArrowUp"]) camera.position.z-=10;
         if(keydown["ArrowDown"]) camera.position.z+=10;
          if(keydown["ArrowRight"]) camera.position.x+=10;
           if(keydown["ArrowLeft"]) camera.position.x-=10;
                
         renderer.render(scene, camera);
             
        }
       
             
        animate();
       
  
    
       }
    
    

function mDown(obj)
{

 animate2();

}

function mUp(obj)
{

cancelAnimationFrame(id);

}


        var animate2 = function()
        {	
        
        id = requestAnimationFrame(animate2);
        
        camera.position.z-=10;
                         
         renderer.render(scene, camera);
             
        }






//--------------------------------- Explicação --------------------------//

//    * Estanciando objeto "THREE.Scene()". Objeto responsavel por criar a cena.
//scene = new THREE.Scene();

//    * Estanciando objeto "THREE.PerspectiveCamera". Objeto responsavel por criar camera.
//    * Atributo ".position" e logo após o eixo utilizado ".z" porém existem 3 eixos " x y z " cada um com sua caracteristica no plano cartesiano.
//camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
//camera.position.z = 1000;

//    * Estanciando objeto 3D primitivo. Neste caso é feito uma estancia de um Cubo usando o seguinte objeto "THREE.BoxGeometry". E suas dimensões logo após.
//geometry = new THREE.BoxGeometry(200, 200, 200);

//    * Material que sera aplicado no objeto neste caso as cores. Estanciando o objeto "THREE.MeshBasicMaterial". Wireframe exibe somente o "esqueleto" do objeto.
//material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

//    * Criando objeto 3D com material aplicado, estanciando o objeto "THREE.Mesh()". Parametros: 1º var "geometry" , 2º var "material"  
//mesh = new THREE.Mesh(geometry, material);
//    * Adicionando o objeto na cena. Utilizando o atributo ".add" logo em seguida a var "mesh".
//scene.add(mesh);

//    * Estancia do objeto "THREE.WebGLRenderer()" responsavel por renderizar a cena e o objeto.
//renderer = new THREE.WebGLRenderer();

//    * Atributo ".setSize" define a área de renderização. Neste caso sera as dimensões da janela do browser "window.innerWidth" e "window.innerHeight"
//renderer.setSize(window.innerWidth, window.innerHeight);

//    * Atribuindo local de renderização neste caso o elemento "body".
//document.body.appendChild(renderer.domElement);
//                       OU
//    * Atribuindo local de renderização pela tag "body" = <body>
//document.getElementsByTagName('body')[0].appendChild( renderer.domElement );

//    * Função usada para animar o objeto
//function animate() {

//    executando recursivamente
//    requestAnimationFrame(animate);

//    * Alterando os valores de rotação nos eixos para que ocorra uma animação
//    mesh.rotation.x += 0.01;
//    mesh.rotation.y += 0.02;

//    * Renderização de cena e camera. Usado para renderizar o resultado final.
//    renderer.render(scene, camera);

//}

//  * Executando função!
//  animate();
//}