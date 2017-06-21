  //remove zooming ios
document.documentElement.addEventListener('touchstart',function(event){
  if (event.touches.length>1){
    event.preventDefault();
  }
},false);
document.ontouchmove=function(event){
  event.preventDefault();
}
//end remove zooming




  var windowBreakPoint = 440;


  //LOADER
  $(".circle").click(function(){
    console.log(this);
    $(this).addClass("disappear");
    $(".content").animate({
      opacity: 1}, 600, function() {

      // we set a timer until is fully loaded
      window.setTimeout(function(){
        $(".loading-container").fadeOut("slow");
        $("#particles-background").remove();
        $("#particles-foreground").remove();
      },2000);   //600ms  default
    });
  });
  /*$(".bottom-trigger").click(function(){
    console.log(this);
    $(this).addClass("disappear");
    $(".content").animate({
      opacity: 1}, 600, function() {

      // we set a timer until is fully loaded
      window.setTimeout(function(){
        $(".loading-container").fadeOut("slow");
      },2000);   //600ms  default
    });
  });*/

  //RESPONSIVE PANELS

  var moreInfoaAbajo;
  var delayTime = 200;
  var topPanelOpen = false;
  var bottomPanelOpen = false;

  function subirMoreInfo(){
    $(".proyect-info").removeClass("more-info-down");
    $(".proyect-info").addClass("more-info-up");
    moreInfoaAbajo = false;
  }

  function bajarMoreInfo(){
    $(".proyect-info").removeClass("more-info-up");
    $(".proyect-info").addClass("more-info-down");
    moreInfoaAbajo = true;
  }

  function slideBottomPanelDown(){
    $(".bottom-elements").removeClass("slide-bottompanel-up");
    $(".bottom-spaces-container").removeClass("slide-bottompanel-spaces-up");
    $(".bottom-elements").addClass("slide-bottompanel-down");
    $(".bottom-spaces-container").addClass("slide-bottompanel-down").css("opacity","0");
    $(".down-arrow2").css("display","none");
    $(".up-arrow2").css("display","block");
    bottomPanelOpen = false;
  }

  function slideBottomPanelUpTimer(){
    window.setTimeout(function(){
      $(".bottom-elements").addClass("slide-bottompanel-up");
      $(".bottom-spaces-container").addClass("slide-bottompanel-spaces-up");
      $(".down-arrow2").css("display","block");
      $(".up-arrow2").css("display","none");
    },delayTime);
    bottomPanelOpen = true;
  }

  function slideBottomPanelUp(){
    $(".bottom-elements").removeClass("slide-bottompanel-down");
    $(".bottom-spaces-container").removeClass("slide-bottompanel-spaces-down");
    $(".bottom-elements").addClass("slide-bottompanel-up");
    $(".bottom-spaces-container").addClass("slide-bottompanel-spaces-up");
    $(".down-arrow2").css("display","block");
    $(".up-arrow2").css("display","none");
    bottomPanelOpen = true;
  }

  function slideLeftTopPanelTimer(){
    window.setTimeout(function(){
      $(".proyect-name").removeClass("slide-toppanel-right");
      $(".proyect-name").addClass("slide-toppanel-left");
      $(".left-arrow-icon").css("display","none");
      $(".right-arrow-icon").css("display","block");
    },delayTime);
    topPanelOpen = false;
  }

  function slideLeftTopPanel(){
    console.log("slideLeft");
    $(".proyect-name").removeClass("slide-toppanel-right");
    $(".proyect-name").addClass("slide-toppanel-left");
    $(".left-arrow-icon").css("display","none");
    $(".right-arrow-icon").css("display","block");
    $(".proyect-name-mask").fadeOut();
    topPanelOpen = false;
  }

  function slideRightTopPanel(){
    console.log("slideRight");
    $(".proyect-name-mask").fadeIn();
    $(".proyect-name").removeClass("slide-toppanel-left");
    $(".proyect-name").addClass("slide-toppanel-right");
    $(".right-arrow-icon").css("display","none");
    $(".left-arrow-icon").css("display","block");
    topPanelOpen = true;
  }

  var responsive = true;

  checkIfREsponsive();

  function checkIfREsponsive(){
    if (window.innerHeight > windowBreakPoint){
      normalActions();
    }
    else{
      responsiveActions();
    }
  }
  
  
  $(".left-info-div").click(function(){
    if (responsive==true){
      
      //y el de abajo esta abierto
      if( $(".bottom-spaces-container").css("transform") == "matrix(1, 0, 0, 1, 0, -130)" ){
          
          //cerramos primero el de abajo
          slideBottomPanelDown();

          //abrimos luego el de arriba
          slideRightTopPanel();

      //si el de abajo esta cerrado
      }else{

        //si el de arriba esta abierto lo cerramos
        //if( $(".proyect-name").css("transform") == "matrix(1, 0, 0, 1, 360, 0)"){
        if (topPanelOpen == false){
          slideLeftTopPanel();

        //sino lo abrimos y el de arriba cerrado
        }else{
          //esto ocurre cuando el de abajo y arriba estan cerrados
          slideRightTopPanel();


          //si le damos click al proyect name bajamos more info
          
        }
      }
    }
    else{
      //console.log($(".bottom-spaces-container").css("transform"));
     console.log(  $(".proyect-name").css("transform") );
      //if (!topPanelOpen) {slideRightTopPanel()}else{slideLeftTopPanel()}
      //if ( $(".proyect-name").css("transform") == "matrix(1, 0, 0, 1, -360, 0)" ) {
      if (topPanelOpen == false){
        slideRightTopPanel()
      }else{
        slideLeftTopPanel()

        console.log("clicking in normal");
      }
    }
  });

  $(".bottom-trigger").click(function(){
    if (responsive == true){
      if( $(".proyect-name").css("transform") == "matrix(1, 0, 0, 1, 360, 0)" ){

        if (moreInfoaAbajo){

          subirMoreInfo();
          slideLeftTopPanelTimer();
          slideBottomPanelUpTimer();

        }else{

          slideLeftTopPanelTimer();
          slideBottomPanelUpTimer();
        }
          
      //si el de arriba esta cerado
      }else{

        //necesito primero checar si este esta abierto
        if ( $(".bottom-spaces-container").css("transform") == "matrix(1, 0, 0, 1, 0, -130)" ) {

          //primero cerramos el de abajo
          slideBottomPanelDown();

        }else{
          //abrimos el de abajo
          slideBottomPanelUp();
        }
      }
    }
    else{
      console.log(  $(".bottom-spaces-container").css("transform") );
      //if (!bottomPanelOpen) {slideBottomPanelUp();} else{slideBottomPanelDown();}
      if (  $(".bottom-spaces-container").css("transform") == "matrix(1, 0, 0, 1, 0, 0)" || $(".bottom-spaces-container").css("transform") == "matrix(1, 0, 0, 1, 0, 130)" ) {slideBottomPanelUp();} else{slideBottomPanelDown();}
    }
  });

  $(".proyect-name").click(function(){
    console.log("click");
    if (responsive == true){
          //necesitamos validar si ya esta abajo
          if ($(".proyect-info").css("transform") == "matrix(1, 0, 0, 1, 0, 160)" ) {

            //subimos more info
            subirMoreInfo();

          }else{
            //si esta arriba, solo la bajamos
            bajarMoreInfo();
          }
            
    }
    else{
      //necesitamos validar si ya esta abajo
      if ($(".proyect-info").css("transform") == "matrix(1, 0, 0, 1, 0, 160)") {
        //subimos more info
        subirMoreInfo();
      }else{
        //si esta arriba, solo la bajamos
        bajarMoreInfo();
      }
    }
  });

  function responsiveActions(){
    responsive = true;
    console.log("responsive");

    //vamos a cerrar por default todos los panels
    subirMoreInfo();
    slideLeftTopPanelTimer();
    slideBottomPanelDown();
    
  }

  function normalActions(){
    responsive = false;
    console.log("normal");
  }

//MAP CONTROLS
function subirMapa(){
  $("#visor").slideUp("slow");
  mapAbajo = false;
}

function bajarMapa(){
  $("#visor").slideDown("slow");
  mapAbajo = true;
}

var mapAbajo = false; 
$(".icon-isotipo-interprika").click(function(){
  if (mapAbajo) {
    subirMapa();
  }else{
    bajarMapa();
  }
});
//END MAP CONTROLS

  const MAXCAMFOV=120;
  const MINCAMFOV=70;
  // Set the scene size.
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // Set some camera attributes.
  const VIEW_ANGLE = 100;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 1100;

  var customUniforms;
  var clock = new THREE.Clock();

  var imageSwitchTimeMultiplier = 2.0;

  var raycaster;
  var mouse = new THREE.Vector2(),INTERSECTED,isIntersecting;
  var camera, scene, renderer;
  var spriteSize = 1;
  var customCamHeight = 3.75;
  var simpleViewer;
  var lastSpriteObj,curSpriteObj;
  var isUserInteracting = false,
  onMouseDownMouseX = 0, onMouseDownMouseY = 0,
  lon = 0, onMouseDownLon = 0,
  lat = 0, onMouseDownLat = 0,
  phi = 0, theta = 0;

  var loadersGRP;

  init();
  //animate();

  function init(){
    isIntersecting=false;
    var container = document.getElementById( 'containerMain' );
    camera = createCamera(VIEW_ANGLE,ASPECT,NEAR,FAR);

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( WIDTH, HEIGHT );
    console.log(renderer);
    container.appendChild( renderer.domElement );

    

    customUniforms = {
        colorInterpolation: {value:1.0},
        mainTexture: {value:new THREE.TextureLoader().load("textures/360images/1.jpg")},
        backTexture: {value:new THREE.TextureLoader().load("textures/360images/1.jpg")}

    }
    var vertexShaderCode = " varying vec2 vUv;\
    void main()\
    {\
      vUv = uv;\
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\
      gl_Position = projectionMatrix * mvPosition;\
    }";
    var fragmentShaderCode = " varying vec2 vUv;\
    uniform float colorInterpolation;\
    uniform sampler2D mainTexture;\
    uniform sampler2D backTexture;\
    void main(void) {\
        vec3 color1 = texture2D(mainTexture, vUv).rgb;\
        vec3 color2 = texture2D(backTexture, vUv).rgb;\
        color1.rgb*=1.0-colorInterpolation;\
        color2.rgb*=colorInterpolation;\
        gl_FragColor = vec4(color1.rgb + color2.rgb, 1.0);\
    }";
    shaderMaterial = new THREE.ShaderMaterial({
      uniforms:customUniforms,
      vertexShader: vertexShaderCode,//document.getElementById( 'custom_vertex_shader' ).textContent,
      fragmentShader: fragmentShaderCode//document.getElementById( 'custom_fragment_shader' ).textContent
    })

    simpleViewer = new THREE.Group();
    loadersGRP = new THREE.Group();
    var sphereObject = createSphere(50,60,40,true,shaderMaterial);
    //var sphereObject = createSphere2(shaderMaterial);
    simpleViewer.add(camera);
    simpleViewer.add(sphereObject);
    scene.add(simpleViewer);
    simpleViewer.position.y = customCamHeight;
    scene.add(loadersGRP);

    

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
    document.addEventListener( 'wheel', onDocumentMouseWheel, false );
    document.addEventListener( 'touchstart', onDocumentTouch, false );

    window.addEventListener( 'resize', onWindowResize, false );



  window.billboObjects = function(){

  };
  var texturesFolder = "textures/360images/";
  var spritesFolder = "textures/sprites/";
  var STSpriteMaterial0 = new THREE.SpriteMaterial({ map: new THREE.TextureLoader().load(spritesFolder + "Icon_Walk.png") });
  billboObjects.billbo0 = createBillboard(spriteSize,-0,0,0,STSpriteMaterial0,texturesFolder + "1.jpg");
  billboObjects.billbo1 = createBillboard(spriteSize,-1000,0,0,STSpriteMaterial0,texturesFolder + "2.jpg");
  billboObjects.billbo2 = createBillboard(spriteSize,-3000,0,0,STSpriteMaterial0,texturesFolder + "3.2.jpg");
  billboObjects.billbo3 = createBillboard(spriteSize,-2000,0,0,STSpriteMaterial0,texturesFolder + "3.jpg");
  billboObjects.billbo4 = createBillboard(spriteSize,-4000,0,0,STSpriteMaterial0,texturesFolder + "4.jpg");
  billboObjects.billbo5 = createBillboard(spriteSize,-7000,0,0,STSpriteMaterial0,texturesFolder + "5.jpg");
  billboObjects.billbo6 = createBillboard(spriteSize,-9000,0,0,STSpriteMaterial0,texturesFolder + "6.2.jpg");
  billboObjects.billbo7 = createBillboard(spriteSize,-8000,0,0,STSpriteMaterial0,texturesFolder + "6.jpg");
  billboObjects.billbo8 = createBillboard(spriteSize,-10000,0,0,STSpriteMaterial0,texturesFolder + "7.jpg");
  billboObjects.billbo9 = createBillboard(spriteSize,-5000,0,0,STSpriteMaterial0,texturesFolder + "8.jpg");
  billboObjects.billbo10 = createBillboard(spriteSize,-6000,0,0,STSpriteMaterial0,texturesFolder + "9.jpg");
  billboObjects.billbo11 = createBillboard(spriteSize,-11000,0,0,STSpriteMaterial0,texturesFolder + "10.jpg");
  billboObjects.billbo12 = createBillboard(spriteSize,-13000,0,0,STSpriteMaterial0,texturesFolder + "11.jpg");
  billboObjects.billbo13 = createBillboard(spriteSize,-12000,0,0,STSpriteMaterial0,texturesFolder + "13.jpg");
  billboObjects.billbo14 = createBillboard(spriteSize,-31000,0,0,STSpriteMaterial0,texturesFolder + "14.jpg");
  billboObjects.billbo15 = createBillboard(spriteSize,-32000,0,0,STSpriteMaterial0,texturesFolder + "15.jpg");
  billboObjects.billbo16 = createBillboard(spriteSize,-33000,0,0,STSpriteMaterial0,texturesFolder + "16.jpg");
  billboObjects.billbo17 = createBillboard(spriteSize,-35000,0,0,STSpriteMaterial0,texturesFolder + "17.jpg");
  billboObjects.billbo18 = createBillboard(spriteSize,-36000,0,0,STSpriteMaterial0,texturesFolder + "19.jpg");
  billboObjects.billbo19 = createBillboard(spriteSize,-38000,0,0,STSpriteMaterial0,texturesFolder + "20.jpg");
  billboObjects.billbo20 = createBillboard(spriteSize,-40000,0,0,STSpriteMaterial0,texturesFolder + "1-a.jpg");
  billboObjects.billbo21 = createBillboard(spriteSize,-41000,0,0,STSpriteMaterial0,texturesFolder + "2-a.jpg");
  billboObjects.billbo22 = createBillboard(spriteSize,-39000,0,0,STSpriteMaterial0,texturesFolder + "3-a.jpg");
  billboObjects.billbo23 = createBillboard(spriteSize,-43000,0,0,STSpriteMaterial0,texturesFolder + "4-a.jpg");
  billboObjects.billbo24 = createBillboard(spriteSize,-44000,0,0,STSpriteMaterial0,texturesFolder + "5-a.jpg");
  billboObjects.billbo25 = createBillboard(spriteSize,-15000,0,0,STSpriteMaterial0,texturesFolder + "43.jpg");
  billboObjects.billbo26 = createBillboard(spriteSize,-16000,0,0,STSpriteMaterial0,texturesFolder + "23-a.jpg");
  billboObjects.billbo27 = createBillboard(spriteSize,-17000,0,0,STSpriteMaterial0,texturesFolder + "22-a.jpg");
  billboObjects.billbo28 = createBillboard(spriteSize,-18000,0,0,STSpriteMaterial0,texturesFolder + "42.jpg");
  billboObjects.billbo29 = createBillboard(spriteSize,-19000,0,0,STSpriteMaterial0,texturesFolder + "7-a.jpg");
  billboObjects.billbo30 = createBillboard(spriteSize,-20000,0,0,STSpriteMaterial0,texturesFolder + "6-a.jpg");
  billboObjects.billbo31 = createBillboard(spriteSize,-21000,0,0,STSpriteMaterial0,texturesFolder + "7.2-a.jpg");
  billboObjects.billbo32 = createBillboard(spriteSize,-22000,0,0,STSpriteMaterial0,texturesFolder + "7.3-a.jpg");
  billboObjects.billbo33 = createBillboard(spriteSize,-23000,0,0,STSpriteMaterial0,texturesFolder + "35.jpg");
  billboObjects.billbo34 = createBillboard(spriteSize,-24000,0,0,STSpriteMaterial0,texturesFolder + "18-a.jpg");
  billboObjects.billbo35 = createBillboard(spriteSize,-25000,0,0,STSpriteMaterial0,texturesFolder + "16-a.jpg");
  billboObjects.billbo36 = createBillboard(spriteSize,-26000,0,0,STSpriteMaterial0,texturesFolder + "17-a.jpg");
  billboObjects.billbo37 = createBillboard(spriteSize,-28000,0,0,STSpriteMaterial0,texturesFolder + "34.jpg");
  billboObjects.billbo38 = createBillboard(spriteSize,-37000,0,0,STSpriteMaterial0,texturesFolder + "8-a.jpg");
  billboObjects.billbo39 = createBillboard(spriteSize,-45000,0,0,STSpriteMaterial0,texturesFolder + "12.jpg");
  billboObjects.billbo40 = createBillboard(spriteSize,-48000,0,0,STSpriteMaterial0,texturesFolder + "10-a.jpg");
  billboObjects.billbo41 = createBillboard(spriteSize,-46000,0,0,STSpriteMaterial0,texturesFolder + "9-a.jpg");
  billboObjects.billbo42 = createBillboard(spriteSize,-47000,0,0,STSpriteMaterial0,texturesFolder + "18.jpg");
  billboObjects.billbo43 = createBillboard(spriteSize,-52000,0,0,STSpriteMaterial0,texturesFolder + "21.jpg");
  billboObjects.billbo44 = createBillboard(spriteSize,-49000,0,0,STSpriteMaterial0,texturesFolder + "22.jpg");
  billboObjects.billbo45 = createBillboard(spriteSize,-51000,0,0,STSpriteMaterial0,texturesFolder + "23.2.jpg");
  billboObjects.billbo46 = createBillboard(spriteSize,-50000,0,0,STSpriteMaterial0,texturesFolder + "23.jpg");
  billboObjects.billbo47 = createBillboard(spriteSize,-53000,0,0,STSpriteMaterial0,texturesFolder + "24.jpg");
  billboObjects.billbo48 = createBillboard(spriteSize,-54000,0,0,STSpriteMaterial0,texturesFolder + "25.jpg");
  billboObjects.billbo49 = createBillboard(spriteSize,-55000,0,0,STSpriteMaterial0,texturesFolder + "26.jpg");
  billboObjects.billbo50 = createBillboard(spriteSize,-56000,0,0,STSpriteMaterial0,texturesFolder + "27.jpg");
  billboObjects.billbo51 = createBillboard(spriteSize,-58000,0,0,STSpriteMaterial0,texturesFolder + "28.2.jpg");
  billboObjects.billbo52 = createBillboard(spriteSize,-57000,0,0,STSpriteMaterial0,texturesFolder + "28.jpg");
  billboObjects.billbo53 = createBillboard(spriteSize,-59000,0,0,STSpriteMaterial0,texturesFolder + "29.jpg");
  billboObjects.billbo54 = createBillboard(spriteSize,-63000,0,0,STSpriteMaterial0,texturesFolder + "30.jpg");
  billboObjects.billbo55 = createBillboard(spriteSize,-60000,0,0,STSpriteMaterial0,texturesFolder + "14-a.jpg");
  billboObjects.billbo56 = createBillboard(spriteSize,-62000,0,0,STSpriteMaterial0,texturesFolder + "31.jpg");
  billboObjects.billbo57 = createBillboard(spriteSize,-61000,0,0,STSpriteMaterial0,texturesFolder + "32.jpg");
  billboObjects.billbo58 = createBillboard(spriteSize,-64000,0,0,STSpriteMaterial0,texturesFolder + "33.jpg");
  billboObjects.billbo59 = createBillboard(spriteSize,-67000,0,0,STSpriteMaterial0,texturesFolder + "36.2.jpg");
  billboObjects.billbo60 = createBillboard(spriteSize,-66000,0,0,STSpriteMaterial0,texturesFolder + "36.jpg");
  billboObjects.billbo61 = createBillboard(spriteSize,-68000,0,0,STSpriteMaterial0,texturesFolder + "37.jpg");
  billboObjects.billbo62 = createBillboard(spriteSize,-69000,0,0,STSpriteMaterial0,texturesFolder + "38.jpg");
  billboObjects.billbo63 = createBillboard(spriteSize,-70000,0,0,STSpriteMaterial0,texturesFolder + "39.jpg");
  billboObjects.billbo64 = createBillboard(spriteSize,-72000,0,0,STSpriteMaterial0,texturesFolder + "19-a.jpg");
  billboObjects.billbo65 = createBillboard(spriteSize,-71000,0,0,STSpriteMaterial0,texturesFolder + "20-a.jpg");
  billboObjects.billbo66 = createBillboard(spriteSize,-73000,0,0,STSpriteMaterial0,texturesFolder + "40.jpg");
  billboObjects.billbo67 = createBillboard(spriteSize,-74000,0,0,STSpriteMaterial0,texturesFolder + "21-a.jpg");
  billboObjects.billbo68 = createBillboard(spriteSize,-76000,0,0,STSpriteMaterial0,texturesFolder + "41.jpg");
  billboObjects.billbo69 = createBillboard(spriteSize,-77000,0,0,STSpriteMaterial0,texturesFolder + "12-a.jpg");
  billboObjects.billbo70 = createBillboard(spriteSize,-78000,0,0,STSpriteMaterial0,texturesFolder + "13-a.jpg");
  billboObjects.billbo71 = createBillboard(spriteSize,-79000,0,0,STSpriteMaterial0,texturesFolder + "P1.jpg");
  billboObjects.billbo72 = createBillboard(spriteSize,-80000,0,0,STSpriteMaterial0,texturesFolder + "P2.jpg");
  billboObjects.billboref0 = createReferenceBillboard (spriteSize,-999.9898,0,8.070448,STSpriteMaterial0,billboObjects.billbo0);
  billboObjects.billboref1 = createReferenceBillboard (spriteSize,-2.186429,0,-11.55336,STSpriteMaterial0,billboObjects.billbo1);
  billboObjects.billboref2 = createReferenceBillboard (spriteSize,-2000.164,0,6.405451,STSpriteMaterial0,billboObjects.billbo1);
  billboObjects.billboref3 = createReferenceBillboard (spriteSize,-4010.362,0,3.905069,STSpriteMaterial0,billboObjects.billbo1);
  billboObjects.billboref4 = createReferenceBillboard (spriteSize,-7011.058,2.722697,-8.375177,STSpriteMaterial0,billboObjects.billbo1);
  billboObjects.billboref5 = createReferenceBillboard (spriteSize,-10009.13,0,3.09225,STSpriteMaterial0,billboObjects.billbo1);
  billboObjects.billboref6 = createReferenceBillboard (spriteSize,-15006.49,0,6.654331,STSpriteMaterial0,billboObjects.billbo1);
  billboObjects.billboref7 = createReferenceBillboard (spriteSize,-2000.053,0,-7.663764,STSpriteMaterial0,billboObjects.billbo2);
  billboObjects.billboref8 = createReferenceBillboard (spriteSize,-76005.88,0,9.202801,STSpriteMaterial0,billboObjects.billbo2);
  billboObjects.billboref9 = createReferenceBillboard (spriteSize,-15008.08,0,-3.093826,STSpriteMaterial0,billboObjects.billbo2);
  billboObjects.billboref10 = createReferenceBillboard (spriteSize,-1001.788,0,-9.842943,STSpriteMaterial0,billboObjects.billbo3);
  billboObjects.billboref11 = createReferenceBillboard (spriteSize,-2999.369,0,6.591219,STSpriteMaterial0,billboObjects.billbo3);
  billboObjects.billboref12 = createReferenceBillboard (spriteSize,-10007.26,0,-3.896969,STSpriteMaterial0,billboObjects.billbo3);
  billboObjects.billboref13 = createReferenceBillboard (spriteSize,-988.2743,0,-5.393488,STSpriteMaterial0,billboObjects.billbo4);
  billboObjects.billboref14 = createReferenceBillboard (spriteSize,-5008.818,0,0.2783143,STSpriteMaterial0,billboObjects.billbo4);
  billboObjects.billboref15 = createReferenceBillboard (spriteSize,-10003.38,0,7.950162,STSpriteMaterial0,billboObjects.billbo4);
  billboObjects.billboref16 = createReferenceBillboard (spriteSize,-3993.923,0,11.96761,STSpriteMaterial0,billboObjects.billbo5);
  billboObjects.billboref17 = createReferenceBillboard (spriteSize,-8005.242,0,-10.38113,STSpriteMaterial0,billboObjects.billbo5);
  billboObjects.billboref18 = createReferenceBillboard (spriteSize,-985.9702,0,4.43174,STSpriteMaterial0,billboObjects.billbo5);
  billboObjects.billboref19 = createReferenceBillboard (spriteSize,-7989.244,0,1.851485,STSpriteMaterial0,billboObjects.billbo6);
  billboObjects.billboref20 = createReferenceBillboard (spriteSize,-6991.886,0,5.69054,STSpriteMaterial0,billboObjects.billbo7);
  billboObjects.billboref21 = createReferenceBillboard (spriteSize,-9002.771,0,7.688807,STSpriteMaterial0,billboObjects.billbo7);
  billboObjects.billboref22 = createReferenceBillboard (spriteSize,-41008.18,0,3.354636,STSpriteMaterial0,billboObjects.billbo7);
  billboObjects.billboref23 = createReferenceBillboard (spriteSize,-4014.173,0,-4.355762,STSpriteMaterial0,billboObjects.billbo8);
  billboObjects.billboref24 = createReferenceBillboard (spriteSize,-1988.801,0,-2.706203,STSpriteMaterial0,billboObjects.billbo8);
  billboObjects.billboref25 = createReferenceBillboard (spriteSize,-15001.4,0,10.02223,STSpriteMaterial0,billboObjects.billbo8);
  billboObjects.billboref26 = createReferenceBillboard (spriteSize,-3992.596,0,-3.793073,STSpriteMaterial0,billboObjects.billbo9);
  billboObjects.billboref27 = createReferenceBillboard (spriteSize,-6007.026,0,6.785747,STSpriteMaterial0,billboObjects.billbo9);
  billboObjects.billboref28 = createReferenceBillboard (spriteSize,-4991.937,0,-7.119118,STSpriteMaterial0,billboObjects.billbo10);
  billboObjects.billboref29 = createReferenceBillboard (spriteSize,-11009.92,0,3.642503,STSpriteMaterial0,billboObjects.billbo10);
  billboObjects.billboref30 = createReferenceBillboard (spriteSize,-5992.186,0,-6.775285,STSpriteMaterial0,billboObjects.billbo11);
  billboObjects.billboref31 = createReferenceBillboard (spriteSize,-12009.74,0,2.034559,STSpriteMaterial0,billboObjects.billbo11);
  billboObjects.billboref32 = createReferenceBillboard (spriteSize,-13003.24,0,-10.11378,STSpriteMaterial0,billboObjects.billbo11);
  billboObjects.billboref33 = createReferenceBillboard (spriteSize,-10994.37,0,9.003666,STSpriteMaterial0,billboObjects.billbo12);
  billboObjects.billboref34 = createReferenceBillboard (spriteSize,-38996.46,0,-7.284993,STSpriteMaterial0,billboObjects.billbo12);
  billboObjects.billboref35 = createReferenceBillboard (spriteSize,-43003.93,0,-7.6032,STSpriteMaterial0,billboObjects.billbo12);
  billboObjects.billboref36 = createReferenceBillboard (spriteSize,-44010.2,0,3.13239,STSpriteMaterial0,billboObjects.billbo12);
  billboObjects.billboref37 = createReferenceBillboard (spriteSize,-10989.62,0,-4.59537,STSpriteMaterial0,billboObjects.billbo13);
  billboObjects.billboref38 = createReferenceBillboard (spriteSize,-31008.99,0,6.34907,STSpriteMaterial0,billboObjects.billbo13);
  billboObjects.billboref39 = createReferenceBillboard (spriteSize,-19997.89,0,15.40593,STSpriteMaterial0,billboObjects.billbo13);
  billboObjects.billboref40 = createReferenceBillboard (spriteSize,-44011.34,0,-10.9079,STSpriteMaterial0,billboObjects.billbo13);
  billboObjects.billboref41 = createReferenceBillboard (spriteSize,-22998.76,0,8.417054,STSpriteMaterial0,billboObjects.billbo14);
  billboObjects.billboref42 = createReferenceBillboard (spriteSize,-32003.18,0,6.365529,STSpriteMaterial0,billboObjects.billbo14);
  billboObjects.billboref43 = createReferenceBillboard (spriteSize,-11991.26,0,-9.83563,STSpriteMaterial0,billboObjects.billbo14);
  billboObjects.billboref44 = createReferenceBillboard (spriteSize,-33007.7,0,7.477794,STSpriteMaterial0,billboObjects.billbo14);
  billboObjects.billboref45 = createReferenceBillboard (spriteSize,-37000.73,0,-8.391622,STSpriteMaterial0,billboObjects.billbo14);
  billboObjects.billboref46 = createReferenceBillboard (spriteSize,-30994.72,0,-6.446972,STSpriteMaterial0,billboObjects.billbo15);
  billboObjects.billboref47 = createReferenceBillboard (spriteSize,-25995.93,0,5.907884,STSpriteMaterial0,billboObjects.billbo15);
  billboObjects.billboref48 = createReferenceBillboard (spriteSize,-33009.92,0,-4.029606,STSpriteMaterial0,billboObjects.billbo15);
  billboObjects.billboref49 = createReferenceBillboard (spriteSize,-38001.39,0,7.911587,STSpriteMaterial0,billboObjects.billbo15);
  billboObjects.billboref50 = createReferenceBillboard (spriteSize,-30986.61,0,4.061833,STSpriteMaterial0,billboObjects.billbo16);
  billboObjects.billboref51 = createReferenceBillboard (spriteSize,-31993.43,0,3.668083,STSpriteMaterial0,billboObjects.billbo16);
  billboObjects.billboref52 = createReferenceBillboard (spriteSize,-34008.37,0,7.675487,STSpriteMaterial0,billboObjects.billbo16);
  billboObjects.billboref53 = createReferenceBillboard (spriteSize,-35010.63,0,0.7779411,STSpriteMaterial0,billboObjects.billbo16);
  billboObjects.billboref54 = createReferenceBillboard (spriteSize,-47008.08,0,7.820669,STSpriteMaterial0,billboObjects.billbo16);
  billboObjects.billboref55 = createReferenceBillboard (spriteSize,-33991.02,0,9.253172,STSpriteMaterial0,billboObjects.billbo17);
  billboObjects.billboref56 = createReferenceBillboard (spriteSize,-36002.12,0,11.52167,STSpriteMaterial0,billboObjects.billbo17);
  billboObjects.billboref57 = createReferenceBillboard (spriteSize,-32986.64,0,7.253391,STSpriteMaterial0,billboObjects.billbo17);
  billboObjects.billboref58 = createReferenceBillboard (spriteSize,-46994.85,0,7.268664,STSpriteMaterial0,billboObjects.billbo17);
  billboObjects.billboref59 = createReferenceBillboard (spriteSize,-33986.21,0,2.365438,STSpriteMaterial0,billboObjects.billbo18);
  billboObjects.billboref60 = createReferenceBillboard (spriteSize,-34986.07,0,-0.6922727,STSpriteMaterial0,billboObjects.billbo18);
  billboObjects.billboref61 = createReferenceBillboard (spriteSize,-46989.25,0,2.547077,STSpriteMaterial0,billboObjects.billbo18);
  billboObjects.billboref62 = createReferenceBillboard (spriteSize,-47982.54,0,9.198308,STSpriteMaterial0,billboObjects.billbo18);
  billboObjects.billboref63 = createReferenceBillboard (spriteSize,-31996.31,0,-10.47981,STSpriteMaterial0,billboObjects.billbo19);
  billboObjects.billboref64 = createReferenceBillboard (spriteSize,-34009.58,0,-6.145635,STSpriteMaterial0,billboObjects.billbo19);
  billboObjects.billboref65 = createReferenceBillboard (spriteSize,-47011.68,0,-7.57191,STSpriteMaterial0,billboObjects.billbo19);
  billboObjects.billboref66 = createReferenceBillboard (spriteSize,-51999.57,0,9.944909,STSpriteMaterial0,billboObjects.billbo19);
  billboObjects.billboref67 = createReferenceBillboard (spriteSize,-38992.42,0,6.800567,STSpriteMaterial0,billboObjects.billbo20);
  billboObjects.billboref68 = createReferenceBillboard (spriteSize,-41005.18,0,-5.636786,STSpriteMaterial0,billboObjects.billbo20);
  billboObjects.billboref69 = createReferenceBillboard (spriteSize,-43009.39,0,3.966477,STSpriteMaterial0,billboObjects.billbo20);
  billboObjects.billboref70 = createReferenceBillboard (spriteSize,-39992.94,0,5.261599,STSpriteMaterial0,billboObjects.billbo21);
  billboObjects.billboref71 = createReferenceBillboard (spriteSize,-8000.417,0,-9.868465,STSpriteMaterial0,billboObjects.billbo21);
  billboObjects.billboref72 = createReferenceBillboard (spriteSize,-41993.21,0,-9.904656,STSpriteMaterial0,billboObjects.billbo21);
  billboObjects.billboref73 = createReferenceBillboard (spriteSize,-45011.43,0,-0.4114388,STSpriteMaterial0,billboObjects.billbo21);
  billboObjects.billboref74 = createReferenceBillboard (spriteSize,-13006.53,0,5.425238,STSpriteMaterial0,billboObjects.billbo22);
  billboObjects.billboref75 = createReferenceBillboard (spriteSize,-40005.68,0,-5.032198,STSpriteMaterial0,billboObjects.billbo22);
  billboObjects.billboref76 = createReferenceBillboard (spriteSize,-39995.09,0,-3.398916,STSpriteMaterial0,billboObjects.billbo23);
  billboObjects.billboref77 = createReferenceBillboard (spriteSize,-12996.34,0,6.22442,STSpriteMaterial0,billboObjects.billbo23);
  billboObjects.billboref78 = createReferenceBillboard (spriteSize,-43993.04,0,5.433638,STSpriteMaterial0,billboObjects.billbo23);
  billboObjects.billboref79 = createReferenceBillboard (spriteSize,-41985.5,0,-1.398257,STSpriteMaterial0,billboObjects.billbo23);
  billboObjects.billboref80 = createReferenceBillboard (spriteSize,-45006.95,0,-10.88154,STSpriteMaterial0,billboObjects.billbo23);
  billboObjects.billboref81 = createReferenceBillboard (spriteSize,-42993.21,0,-3.731225,STSpriteMaterial0,billboObjects.billbo24);
  billboObjects.billboref82 = createReferenceBillboard (spriteSize,-12991.15,0,3.769649,STSpriteMaterial0,billboObjects.billbo24);
  billboObjects.billboref83 = createReferenceBillboard (spriteSize,-11986.2,0,0.7701824,STSpriteMaterial0,billboObjects.billbo24);
  billboObjects.billboref84 = createReferenceBillboard (spriteSize,-9999.786,0,-12.5228,STSpriteMaterial0,billboObjects.billbo25);
  billboObjects.billboref85 = createReferenceBillboard (spriteSize,-995.7438,0,-8.884144,STSpriteMaterial0,billboObjects.billbo25);
  billboObjects.billboref86 = createReferenceBillboard (spriteSize,-16003.33,0,7.82486,STSpriteMaterial0,billboObjects.billbo25);
  billboObjects.billboref87 = createReferenceBillboard (spriteSize,-2989.976,0,-0.6326653,STSpriteMaterial0,billboObjects.billbo25);
  billboObjects.billboref88 = createReferenceBillboard (spriteSize,-14994.01,0,-7.428465,STSpriteMaterial0,billboObjects.billbo26);
  billboObjects.billboref89 = createReferenceBillboard (spriteSize,-16995.66,0,7.343836,STSpriteMaterial0,billboObjects.billbo26);
  billboObjects.billboref90 = createReferenceBillboard (spriteSize,-18016.42,0,0.2082005,STSpriteMaterial0,billboObjects.billbo26);
  billboObjects.billboref91 = createReferenceBillboard (spriteSize,-15996.5,0,-8.807893,STSpriteMaterial0,billboObjects.billbo27);
  billboObjects.billboref92 = createReferenceBillboard (spriteSize,-18012.13,0,-3.638176,STSpriteMaterial0,billboObjects.billbo27);
  billboObjects.billboref93 = createReferenceBillboard (spriteSize,-75988.2,0,6.150333,STSpriteMaterial0,billboObjects.billbo27);
  billboObjects.billboref94 = createReferenceBillboard (spriteSize,-15991.64,0,-5.894966,STSpriteMaterial0,billboObjects.billbo28);
  billboObjects.billboref95 = createReferenceBillboard (spriteSize,-16992.16,0,5.405003,STSpriteMaterial0,billboObjects.billbo28);
  billboObjects.billboref96 = createReferenceBillboard (spriteSize,-19012.49,0,5.772098,STSpriteMaterial0,billboObjects.billbo28);
  billboObjects.billboref97 = createReferenceBillboard (spriteSize,-17989.82,0,-6.816177,STSpriteMaterial0,billboObjects.billbo29);
  billboObjects.billboref98 = createReferenceBillboard (spriteSize,-20001.93,0,-8.651718,STSpriteMaterial0,billboObjects.billbo29);
  billboObjects.billboref99 = createReferenceBillboard (spriteSize,-23007.32,0,2.944614,STSpriteMaterial0,billboObjects.billbo29);
  billboObjects.billboref100 = createReferenceBillboard (spriteSize,-18997.84,0,11.32046,STSpriteMaterial0,billboObjects.billbo30);
  billboObjects.billboref101 = createReferenceBillboard (spriteSize,-20997.75,0,10.35027,STSpriteMaterial0,billboObjects.billbo30);
  billboObjects.billboref102 = createReferenceBillboard (spriteSize,-12009.59,0,-13.93819,STSpriteMaterial0,billboObjects.billbo30);
  billboObjects.billboref103 = createReferenceBillboard (spriteSize,-19002.06,0,-12.32219,STSpriteMaterial0,billboObjects.billbo31);
  billboObjects.billboref104 = createReferenceBillboard (spriteSize,-22003.62,0,9.231715,STSpriteMaterial0,billboObjects.billbo31);
  billboObjects.billboref105 = createReferenceBillboard (spriteSize,-20999.13,0,-12.18363,STSpriteMaterial0,billboObjects.billbo32);
  billboObjects.billboref106 = createReferenceBillboard (spriteSize,-23007.49,0,-7.677154,STSpriteMaterial0,billboObjects.billbo32);
  billboObjects.billboref107 = createReferenceBillboard (spriteSize,-24001.07,0,10.10255,STSpriteMaterial0,billboObjects.billbo32);
  billboObjects.billboref108 = createReferenceBillboard (spriteSize,-21988.38,0,-6.970503,STSpriteMaterial0,billboObjects.billbo33);
  billboObjects.billboref109 = createReferenceBillboard (spriteSize,-18994.24,0,-6.689001,STSpriteMaterial0,billboObjects.billbo33);
  billboObjects.billboref110 = createReferenceBillboard (spriteSize,-25010.04,0,-0.4129461,STSpriteMaterial0,billboObjects.billbo33);
  billboObjects.billboref111 = createReferenceBillboard (spriteSize,-23996.61,0,7.455784,STSpriteMaterial0,billboObjects.billbo33);
  billboObjects.billboref112 = createReferenceBillboard (spriteSize,-31012.64,0,-7.111569,STSpriteMaterial0,billboObjects.billbo33);
  billboObjects.billboref113 = createReferenceBillboard (spriteSize,-22001.29,0,-13.25081,STSpriteMaterial0,billboObjects.billbo34);
  billboObjects.billboref114 = createReferenceBillboard (spriteSize,-23001.19,0,-11.01944,STSpriteMaterial0,billboObjects.billbo34);
  billboObjects.billboref115 = createReferenceBillboard (spriteSize,-65988.54,0,4.484362,STSpriteMaterial0,billboObjects.billbo34);
  billboObjects.billboref116 = createReferenceBillboard (spriteSize,-22990.71,0,-1.560714,STSpriteMaterial0,billboObjects.billbo35);
  billboObjects.billboref117 = createReferenceBillboard (spriteSize,-25999.6,0,-8.90701,STSpriteMaterial0,billboObjects.billbo35);
  billboObjects.billboref118 = createReferenceBillboard (spriteSize,-27997.09,0,13.88748,STSpriteMaterial0,billboObjects.billbo35);
  billboObjects.billboref119 = createReferenceBillboard (spriteSize,-25000.72,0,7.142993,STSpriteMaterial0,billboObjects.billbo36);
  billboObjects.billboref120 = createReferenceBillboard (spriteSize,-32009.53,0,-11.46208,STSpriteMaterial0,billboObjects.billbo36);
  billboObjects.billboref121 = createReferenceBillboard (spriteSize,-25000.35,0,-8.361863,STSpriteMaterial0,billboObjects.billbo37);
  billboObjects.billboref122 = createReferenceBillboard (spriteSize,-63999.25,0,8.886813,STSpriteMaterial0,billboObjects.billbo37);
  billboObjects.billboref123 = createReferenceBillboard (spriteSize,-65992.7,0,-6.569347,STSpriteMaterial0,billboObjects.billbo37);
  billboObjects.billboref124 = createReferenceBillboard (spriteSize,-30996.44,0,10.16265,STSpriteMaterial0,billboObjects.billbo38);
  billboObjects.billboref125 = createReferenceBillboard (spriteSize,-42991,0,8.733116,STSpriteMaterial0,billboObjects.billbo39);
  billboObjects.billboref126 = createReferenceBillboard (spriteSize,-40995.98,0,-3.277252,STSpriteMaterial0,billboObjects.billbo39);
  billboObjects.billboref127 = createReferenceBillboard (spriteSize,-45988.73,0,-4.417561,STSpriteMaterial0,billboObjects.billbo40);
  billboObjects.billboref128 = createReferenceBillboard (spriteSize,-35994.37,0,-13.4315,STSpriteMaterial0,billboObjects.billbo40);
  billboObjects.billboref129 = createReferenceBillboard (spriteSize,-49002.09,0,9.080387,STSpriteMaterial0,billboObjects.billbo40);
  billboObjects.billboref130 = createReferenceBillboard (spriteSize,-34004.75,0,-11.319,STSpriteMaterial0,billboObjects.billbo41);
  billboObjects.billboref131 = createReferenceBillboard (spriteSize,-47003.8,0,-12.87746,STSpriteMaterial0,billboObjects.billbo41);
  billboObjects.billboref132 = createReferenceBillboard (spriteSize,-48006.09,0,4.758986,STSpriteMaterial0,billboObjects.billbo41);
  billboObjects.billboref133 = createReferenceBillboard (spriteSize,-37990.52,0,-0.886696,STSpriteMaterial0,billboObjects.billbo42);
  billboObjects.billboref134 = createReferenceBillboard (spriteSize,-45998.89,0,16.1817,STSpriteMaterial0,billboObjects.billbo42);
  billboObjects.billboref135 = createReferenceBillboard (spriteSize,-36010.32,0,3.183611,STSpriteMaterial0,billboObjects.billbo42);
  billboObjects.billboref136 = createReferenceBillboard (spriteSize,-35000.44,0,-10.47688,STSpriteMaterial0,billboObjects.billbo42);
  billboObjects.billboref137 = createReferenceBillboard (spriteSize,-32992.28,0,-7.242989,STSpriteMaterial0,billboObjects.billbo42);
  billboObjects.billboref138 = createReferenceBillboard (spriteSize,-50994.17,0,9.260418,STSpriteMaterial0,billboObjects.billbo43);
  billboObjects.billboref139 = createReferenceBillboard (spriteSize,-37998.87,0,-8.65751,STSpriteMaterial0,billboObjects.billbo43);
  billboObjects.billboref140 = createReferenceBillboard (spriteSize,-47999.7,0,-7.714816,STSpriteMaterial0,billboObjects.billbo44);
  billboObjects.billboref141 = createReferenceBillboard (spriteSize,-49990.78,0,1.551098,STSpriteMaterial0,billboObjects.billbo44);
  billboObjects.billboref142 = createReferenceBillboard (spriteSize,-50001.13,0,13.06645,STSpriteMaterial0,billboObjects.billbo45);
  billboObjects.billboref143 = createReferenceBillboard (spriteSize,-52007.34,0,-16.19941,STSpriteMaterial0,billboObjects.billbo45);
  billboObjects.billboref144 = createReferenceBillboard (spriteSize,-49009.8,0,-1.338555,STSpriteMaterial0,billboObjects.billbo46);
  billboObjects.billboref145 = createReferenceBillboard (spriteSize,-51001.09,0,-13.75027,STSpriteMaterial0,billboObjects.billbo46);
  billboObjects.billboref146 = createReferenceBillboard (spriteSize,-52986.26,0,0.138932,STSpriteMaterial0,billboObjects.billbo46);
  billboObjects.billboref147 = createReferenceBillboard (spriteSize,-50007.67,0,-1.692758,STSpriteMaterial0,billboObjects.billbo47);
  billboObjects.billboref148 = createReferenceBillboard (spriteSize,-53995.27,0,-8.157978,STSpriteMaterial0,billboObjects.billbo47);
  billboObjects.billboref149 = createReferenceBillboard (spriteSize,-76999.98,0,-7.479171,STSpriteMaterial0,billboObjects.billbo47);
  billboObjects.billboref150 = createReferenceBillboard (spriteSize,-53010.07,0,1.178126,STSpriteMaterial0,billboObjects.billbo48);
  billboObjects.billboref151 = createReferenceBillboard (spriteSize,-55004.33,0,-9.411242,STSpriteMaterial0,billboObjects.billbo48);
  billboObjects.billboref152 = createReferenceBillboard (spriteSize,-59003.04,0,-8.127724,STSpriteMaterial0,billboObjects.billbo48);
  billboObjects.billboref153 = createReferenceBillboard (spriteSize,-54014.28,0,0.849701,STSpriteMaterial0,billboObjects.billbo49);
  billboObjects.billboref154 = createReferenceBillboard (spriteSize,-55993.84,0,-8.453703,STSpriteMaterial0,billboObjects.billbo49);
  billboObjects.billboref155 = createReferenceBillboard (spriteSize,-57005.23,0,7.842368,STSpriteMaterial0,billboObjects.billbo49);
  billboObjects.billboref156 = createReferenceBillboard (spriteSize,-59995.79,0,-0.8841008,STSpriteMaterial0,billboObjects.billbo49);
  billboObjects.billboref157 = createReferenceBillboard (spriteSize,-55008.18,2.722697,6.442613,STSpriteMaterial0,billboObjects.billbo50);
  billboObjects.billboref158 = createReferenceBillboard (spriteSize,-59999.66,0,10.51357,STSpriteMaterial0,billboObjects.billbo50);
  billboObjects.billboref159 = createReferenceBillboard (spriteSize,-56999.51,0,-9.53325,STSpriteMaterial0,billboObjects.billbo51);
  billboObjects.billboref160 = createReferenceBillboard (spriteSize,-54991.68,0,-4.521222,STSpriteMaterial0,billboObjects.billbo52);
  billboObjects.billboref161 = createReferenceBillboard (spriteSize,-58000.27,0,12.56399,STSpriteMaterial0,billboObjects.billbo52);
  billboObjects.billboref162 = createReferenceBillboard (spriteSize,-62995.68,0,-14.41556,STSpriteMaterial0,billboObjects.billbo52);
  billboObjects.billboref163 = createReferenceBillboard (spriteSize,-53996.29,0,10.30412,STSpriteMaterial0,billboObjects.billbo53);
  billboObjects.billboref164 = createReferenceBillboard (spriteSize,-61000.46,0,-10.22396,STSpriteMaterial0,billboObjects.billbo53);
  billboObjects.billboref165 = createReferenceBillboard (spriteSize,-62003.37,0,-13.40964,STSpriteMaterial0,billboObjects.billbo53);
  billboObjects.billboref166 = createReferenceBillboard (spriteSize,-62013.27,2.722697,-0.9024892,STSpriteMaterial0,billboObjects.billbo54);
  billboObjects.billboref167 = createReferenceBillboard (spriteSize,-63997.44,0,-7.018884,STSpriteMaterial0,billboObjects.billbo54);
  billboObjects.billboref168 = createReferenceBillboard (spriteSize,-55010.17,2.722697,1.115254,STSpriteMaterial0,billboObjects.billbo55);
  billboObjects.billboref169 = createReferenceBillboard (spriteSize,-78988.25,0,0.2925926,STSpriteMaterial0,billboObjects.billbo55);
  billboObjects.billboref170 = createReferenceBillboard (spriteSize,-59002.02,0,11.39246,STSpriteMaterial0,billboObjects.billbo56);
  billboObjects.billboref171 = createReferenceBillboard (spriteSize,-62990.93,0,-0.5065821,STSpriteMaterial0,billboObjects.billbo56);
  billboObjects.billboref172 = createReferenceBillboard (spriteSize,-58996.17,0,10.34295,STSpriteMaterial0,billboObjects.billbo57);
  billboObjects.billboref173 = createReferenceBillboard (spriteSize,-63992.53,0,-0.3193125,STSpriteMaterial0,billboObjects.billbo57);
  billboObjects.billboref174 = createReferenceBillboard (spriteSize,-78008.77,0,4.461961,STSpriteMaterial0,billboObjects.billbo57);
  billboObjects.billboref175 = createReferenceBillboard (spriteSize,-63004.31,0,8.365466,STSpriteMaterial0,billboObjects.billbo58);
  billboObjects.billboref176 = createReferenceBillboard (spriteSize,-61010.19,0,-0.2514063,STSpriteMaterial0,billboObjects.billbo58);
  billboObjects.billboref177 = createReferenceBillboard (spriteSize,-28001.09,0,-9.034071,STSpriteMaterial0,billboObjects.billbo58);
  billboObjects.billboref178 = createReferenceBillboard (spriteSize,-65999.36,0,8.410274,STSpriteMaterial0,billboObjects.billbo59);
  billboObjects.billboref179 = createReferenceBillboard (spriteSize,-76017.81,2.722697,-19.9694,STSpriteMaterial0,billboObjects.billbo59);
  billboObjects.billboref180 = createReferenceBillboard (spriteSize,-71991.16,0,-3.261277,STSpriteMaterial0,billboObjects.billbo59);
  billboObjects.billboref181 = createReferenceBillboard (spriteSize,-28003.09,0,12.39071,STSpriteMaterial0,billboObjects.billbo60);
  billboObjects.billboref182 = createReferenceBillboard (spriteSize,-66999.07,0,-8.832308,STSpriteMaterial0,billboObjects.billbo60);
  billboObjects.billboref183 = createReferenceBillboard (spriteSize,-23998.3,0,-12.20528,STSpriteMaterial0,billboObjects.billbo60);
  billboObjects.billboref184 = createReferenceBillboard (spriteSize,-66006.67,0,-6.325641,STSpriteMaterial0,billboObjects.billbo61);
  billboObjects.billboref185 = createReferenceBillboard (spriteSize,-68991.21,0,0.6887611,STSpriteMaterial0,billboObjects.billbo61);
  billboObjects.billboref186 = createReferenceBillboard (spriteSize,-71000.8,0,-7.868294,STSpriteMaterial0,billboObjects.billbo61);
  billboObjects.billboref187 = createReferenceBillboard (spriteSize,-68009.34,0,0.84134,STSpriteMaterial0,billboObjects.billbo62);
  billboObjects.billboref188 = createReferenceBillboard (spriteSize,-70001.06,0,-9.515899,STSpriteMaterial0,billboObjects.billbo62);
  billboObjects.billboref189 = createReferenceBillboard (spriteSize,-69000.5,0,7.937426,STSpriteMaterial0,billboObjects.billbo63);
  billboObjects.billboref190 = createReferenceBillboard (spriteSize,-70999.12,0,9.716884,STSpriteMaterial0,billboObjects.billbo64);
  billboObjects.billboref191 = createReferenceBillboard (spriteSize,-73001.5,0,-7.312799,STSpriteMaterial0,billboObjects.billbo64);
  billboObjects.billboref192 = createReferenceBillboard (spriteSize,-67008.39,0,-0.1514131,STSpriteMaterial0,billboObjects.billbo64);
  billboObjects.billboref193 = createReferenceBillboard (spriteSize,-67999.78,0,6.119433,STSpriteMaterial0,billboObjects.billbo65);
  billboObjects.billboref194 = createReferenceBillboard (spriteSize,-71998.71,0,11.97616,STSpriteMaterial0,billboObjects.billbo66);
  billboObjects.billboref195 = createReferenceBillboard (spriteSize,-74001.9,0,-7.821769,STSpriteMaterial0,billboObjects.billbo66);
  billboObjects.billboref196 = createReferenceBillboard (spriteSize,-76017.15,2.722697,-13.69438,STSpriteMaterial0,billboObjects.billbo66);
  billboObjects.billboref197 = createReferenceBillboard (spriteSize,-72999.66,0,7.633758,STSpriteMaterial0,billboObjects.billbo67);
  billboObjects.billboref198 = createReferenceBillboard (spriteSize,-73991.74,0,-0.8687135,STSpriteMaterial0,billboObjects.billbo68);
  billboObjects.billboref199 = createReferenceBillboard (spriteSize,-72989.52,0,-5.639424,STSpriteMaterial0,billboObjects.billbo68);
  billboObjects.billboref200 = createReferenceBillboard (spriteSize,-66999.98,0,13.41756,STSpriteMaterial0,billboObjects.billbo68);
  billboObjects.billboref201 = createReferenceBillboard (spriteSize,-3001.052,0,-10.74888,STSpriteMaterial0,billboObjects.billbo68);
  billboObjects.billboref202 = createReferenceBillboard (spriteSize,-17007.55,0,-4.026194,STSpriteMaterial0,billboObjects.billbo68);
  billboObjects.billboref203 = createReferenceBillboard (spriteSize,-53000.27,0,10.34863,STSpriteMaterial0,billboObjects.billbo69);
  billboObjects.billboref204 = createReferenceBillboard (spriteSize,-77998.52,0,-9.526508,STSpriteMaterial0,billboObjects.billbo69);
  billboObjects.billboref205 = createReferenceBillboard (spriteSize,-76998.8,0,13.43204,STSpriteMaterial0,billboObjects.billbo70);
  billboObjects.billboref206 = createReferenceBillboard (spriteSize,-60990.57,0,-0.8828401,STSpriteMaterial0,billboObjects.billbo70);
  billboObjects.billboref207 = createReferenceBillboard (spriteSize,-60009.56,0,0.8950984,STSpriteMaterial0,billboObjects.billbo71);
  billboObjects.billboref208 = createReferenceBillboard (spriteSize,-79991.13,0,10.93725,STSpriteMaterial0,billboObjects.billbo71);
  billboObjects.billboref209 = createReferenceBillboard (spriteSize,-79010.41,0,-0.6130172,STSpriteMaterial0,billboObjects.billbo72);


    //endquickTest


    raycaster = new THREE.Raycaster();

  }
  function onLoadedSphereTexture(texture){
    loadingSphereTexture(false);
    customUniforms.backTexture.value = texture;
    customUniforms.colorInterpolation.value = 0;
    clock.getDelta();

    simpleViewer.position.set(curSpriteObj.position.x,customCamHeight,curSpriteObj.position.z);
    if (lastSpriteObj != null){
       loadersGRP.add (lastSpriteObj);
    }
    loadersGRP.remove (curSpriteObj);
    lastSpriteObj = curSpriteObj;

    console.log("ends");
  }
  function loadingSphereTexture(isLoading){
    if (isLoading == true){
      //console.log("isLoading");
      $(".content").fadeIn("fast");
    }
    if (isLoading == false){
      //console.log("finishedLoading");
      $(".content").fadeOut("slow");
    }
  }
  function setNewTexture(location){
    loadingSphereTexture(true);
    loadImageFromLocation(location,onLoadedSphereTexture);
  }
  function loadImageFromLocation(location,callback){
    var loader = new THREE.TextureLoader();
    loader.load(
    location,
    callback,
    function ( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function ( xhr ) {
      console.log( 'An error happened' );
    })


  }
  function onWindowResize() {
      checkIfREsponsive();

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

      console.log(window.innerHeight);

  }
  function createCamera(fov,aspect,near,far){
    camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.target = new THREE.Vector3( 0, 0, 0 );
    return camera;
  }
  function createSphere(radius, segments, rings, reverse, material){
      var sphereGeometry = new THREE.SphereGeometry(
        radius,segments,rings
      );

      if (reverse == true){
        sphereGeometry.scale( -1, 1, 1 );
      }
      var sphereMesh = new THREE.Mesh(
        sphereGeometry,material
      );
      sphereMesh.rotateY(-1.56);
      return sphereMesh;
      
  }

  function importModel(location,material){
    var manager = THREE.LoadingManager();
    var sphereMesh;
    var loader = new THREE.OBJLoader( manager );
      loader.load( location, function ( object ) {

        object.traverse( function ( child ) {

          if ( child instanceof THREE.Mesh ) {

            child.material = material;

          }

        } );
        sphereMesh = object;
        object.scale.set(96,96,96);
        simpleViewer.add(object);

        object.rotateY(-96);
        return object;
      });
    
    
      
  }


  function createBillboard(size, xpos,ypos,zpos, material, textureLocation){
    var sprite = new THREE.Sprite(material);
    sprite.position.set(xpos,ypos,zpos);
    sprite.scale.set(size,size,size);
    sprite.textureLocation = textureLocation;
    loadersGRP.add(sprite);
    return sprite;
  }
  function createReferenceBillboard(size, xpos,ypos,zpos, material, billboReference){
    var sprite = new THREE.Sprite(material);
    sprite.position.set(xpos,ypos,zpos);
    sprite.scale.set(size,size,size);
    sprite.tarBillboard = billboReference;
    loadersGRP.add(sprite);
    return sprite;
  }

  function onDocumentMouseDown( event ) {
    

    event.preventDefault();

    isUserInteracting = true;

    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;

  }

  function onDocumentTouch(event){
    //isUserInteracting = true;

    console.log(event.touches[0].pageX);
    /*onPointerDownPointerX = event.touclientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;*/
  }

  function onDocumentMouseMove( event ) {

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    if ( isUserInteracting == true ) {

      lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
      lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

      
    }
  }
  function onDocumentMouseUp( event ) {
    if (isIntersecting){
      if (INTERSECTED !=null){
        if (INTERSECTED.textureLocation !=null){
          triggerClickValue(INTERSECTED);
        }
        else{
          triggerClickValue(INTERSECTED.tarBillboard);
        }
        
      }
    }
    isUserInteracting = false;

  }
  function triggerClickValue(spriteObj){
    setNewTexture(spriteObj.textureLocation);
    /*if (lastSpriteObj == null){
      lastSpriteObj = spriteObj;
    }*/
    curSpriteObj = spriteObj;
  }
  function onDocumentMouseWheel( event ) {

    //sphere
    camera.fov += event.deltaY * 0.05;
    if (camera.fov > MAXCAMFOV)
      camera.fov = MAXCAMFOV;
    if (camera.fov < MINCAMFOV)
      camera.fov = MINCAMFOV;
    camera.updateProjectionMatrix();

  }

  function update () {
    // Draw!
    //var timer = Date.now()*0.0005;

    //shader section
    if(customUniforms.colorInterpolation.value < 1){
      customUniforms.colorInterpolation.value += clock.getDelta() * imageSwitchTimeMultiplier;
      if(customUniforms.colorInterpolation.value >= 1){
        //customUniforms.mainTexture.value = new THREE.TextureLoader().load("textures/panorama2.jpg")
        customUniforms.mainTexture.value = customUniforms.backTexture.value;
      }
      if (customUniforms.colorInterpolation.value > 1){
        customUniforms.colorInterpolation.value = 1;
      }
    }

     lat = Math.max( - 85, Math.min( 85, lat ) );
    phi = THREE.Math.degToRad( 90 - lat );
    theta = THREE.Math.degToRad( lon );

    camera.target.x = Math.sin( phi ) * Math.cos( theta );
    camera.target.y = Math.cos( phi );
    camera.target.z = Math.sin( phi ) * Math.sin( theta );

    camera.lookAt( camera.target );
    renderer.render(scene, camera);

    raycaster.setFromCamera( mouse, camera );  
    var intersects = raycaster.intersectObjects( loadersGRP.children );


    if ( intersects.length > 0 ) {
      document.body.style.cursor = "pointer";

      isIntersecting = true;
        if ( INTERSECTED != intersects[ 0 ].object ) {
          INTERSECTED = intersects[ 0 ].object;
           console.log(INTERSECTED.position);
        }
      }
      else{
        isIntersecting = false;
        document.body.style.cursor = "auto";

      }

    requestAnimationFrame(update);
  }

  // Schedule the first frame.
  requestAnimationFrame(update);