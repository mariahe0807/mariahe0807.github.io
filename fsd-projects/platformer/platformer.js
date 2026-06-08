$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(634,700,125,20, "green")
createPlatform(450,610,125,20, "green")
createPlatform(150,600,125,20, "green")
createPlatform(300,450,125,20, "green")
createPlatform(1200,630,125,20, "green")
createPlatform(732,525,125,20, "green")
createPlatform(900,650,125,20, "green")
createPlatform(125,358,125,20, "green")
createPlatform(600,400,125,20, "green")
createPlatform(850,275,125,20, "green")
createPlatform(743,125,125,20, "green")
createPlatform(977,493,125,20, "green")
createPlatform(1200,332,125,20, "green")
createPlatform(1039,180,125,20, "green")
createPlatform(450,300,125,20, "green")
createPlatform(250,200,125,20, "green")
createPlatform(500,100,125,20, "green")
createPlatform(1300,125,125,20, "green")
createPlatform(0,280,125,20, "green")
createPlatform(50,100,125,20, "green")


    // TODO 3 - Create Collectables

createCollectable("database",1350,70,1,1);
createCollectable("database",200,170,.5,.4);
createCollectable("database",50,50,0.5,1);
createCollectable("database",1035,450,1,1);
createCollectable("database",800,70,1,.7);
createCollectable("database",510,560,2,1);


    
    // TODO 4 - Create Cannons

createCannon("top",400,2000);
createCannon("right",300,5000);
createCannon("left",500,3000);
createCannon("top",1000,4000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
