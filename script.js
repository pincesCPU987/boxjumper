/*

A Platformer by KirboCrafter39
Enjoy this cheap ASCII art.


__/\\\________/\\\______________________/\\\_____________________________/\\\\\\\\\_____________________________________/\\\\\________________________________________________/\\\\\\\\\\_______/\\\\\\\\\____        
 _\/\\\_____/\\\//______________________\/\\\__________________________/\\\////////____________________________________/\\\///_______________________________________________/\\\///////\\\____/\\\///////\\\__       
  _\/\\\__/\\\//______/\\\_______________\/\\\________________________/\\\/____________________________________________/\\\__________/\\\____________________________________\///______/\\\____/\\\______\//\\\_      
   _\/\\\\\\//\\\_____\///___/\\/\\\\\\\__\/\\\____________/\\\\\_____/\\\______________/\\/\\\\\\\___/\\\\\\\\\_____/\\\\\\\\\____/\\\\\\\\\\\_____/\\\\\\\\___/\\/\\\\\\\__________/\\\//____\//\\\_____/\\\\\_     
    _\/\\\//_\//\\\_____/\\\_\/\\\/////\\\_\/\\\\\\\\\____/\\\///\\\__\/\\\_____________\/\\\/////\\\_\////////\\\___\////\\\//____\////\\\////____/\\\/////\\\_\/\\\/////\\\________\////\\\____\///\\\\\\\\/\\\_    
     _\/\\\____\//\\\___\/\\\_\/\\\___\///__\/\\\////\\\__/\\\__\//\\\_\//\\\____________\/\\\___\///____/\\\\\\\\\\_____\/\\\_________\/\\\_______/\\\\\\\\\\\__\/\\\___\///____________\//\\\_____\////////\/\\\_   
      _\/\\\_____\//\\\__\/\\\_\/\\\_________\/\\\__\/\\\_\//\\\__/\\\___\///\\\__________\/\\\__________/\\\/////\\\_____\/\\\_________\/\\\_/\\__\//\\///////___\/\\\__________/\\\______/\\\____/\\________/\\\__  
       _\/\\\______\//\\\_\/\\\_\/\\\_________\/\\\\\\\\\___\///\\\\\/______\////\\\\\\\\\_\/\\\_________\//\\\\\\\\/\\____\/\\\_________\//\\\\\____\//\\\\\\\\\\_\/\\\_________\///\\\\\\\\\/____\//\\\\\\\\\\\/___ 
        _\///________\///__\///__\///__________\/////////______\/////___________\/////////__\///___________\////////\//_____\///___________\/////______\//////////__\///____________\/////////_______\///////////_____


888    d8P  d8b         888                .d8888b.                   .d888 888                   .d8888b.   .d8888b.  
888   d8P   Y8P         888               d88P  Y88b                 d88P"  888                  d88P  Y88b d88P  Y88b 
888  d8P                888               888    888                 888    888                       .d88P 888    888 
888d88K     888 888d888 88888b.   .d88b.  888        888d888 8888b.  888888 888888 .d88b.  888d888   8888"  Y88b. d888 
8888888b    888 888P"   888 "88b d88""88b 888        888P"      "88b 888    888   d8P  Y8b 888P"      "Y8b.  "Y888P888 
888  Y88b   888 888     888  888 888  888 888    888 888    .d888888 888    888   88888888 888   888    888        888 
888   Y88b  888 888     888 d88P Y88..88P Y88b  d88P 888    888  888 888    Y88b. Y8b.     888   Y88b  d88P Y88b  d88P 
888    Y88b 888 888     88888P"   "Y88P"   "Y8888P"  888    "Y888888 888     "Y888 "Y8888  888    "Y8888P"   "Y8888P"  





___    __            ___                    ____                       __                                        
`MM    d'  68b         MM                   6MMMMb/                    69MM                                       
 MM   d'  Y89         MM                  8P    YM                   6M' `/                                      
 MM  d'   ___ ___  __ MM____     _____   6M      Y ___  __    ___   _MM__/M      ____  ___  __   ____     ____   
 MM d'    `MM `MM 6MM MMMMMMb   6MMMMMb  MM        `MM 6MM  6MMMMb  MMMM/MMMMM  6MMMMb `MM 6MM  6MMMMb   6MMMMb  
 MMd'      MM  MM69 " MM'  `Mb 6M'   `Mb MM         MM69 " 8M'  `Mb  MM  MM    6M'  `Mb MM69 " MM'  `Mb 6M'  `Mb 
 MMYM.     MM  MM'    MM    MM MM     MM MM         MM'        ,oMM  MM  MM    MM    MM MM'          MM MM    MM 
 MM YM.    MM  MM     MM    MM MM     MM MM         MM     ,6MM9'MM  MM  MM    MMMMMMMM MM          .M9 MM    MM 
 MM  YM.   MM  MM     MM    MM MM     MM YM      6  MM     MM'   MM  MM  MM    MM       MM       MMMM   YM.  ,MM 
 MM   YM.  MM  MM     MM.  ,M9 YM.   ,M9  8b    d9  MM     MM.  ,MM  MM  YM.  ,YM    d9 MM          `Mb  YMMMMMM 
_MM_   YM._MM__MM_   _MYMMMM9   YMMMMM9    YMMMM9  _MM_    `YMMM9'Yb_MM_  YMMM9 YMMMM9 _MM_          MM       M9 
                                                                                                     MM     ,M9  
                                                                                               MM.  ,M9   ,MM9   
                                                                                                YMMMM9   d9'     


               ,,           ,,                                                  ,...                                       
`7MMF' `YMM'   db          *MM                    .g8"""bgd                   .d' ""mm                                     
  MM   .M'                  MM                  .dP'     `M                   dM`   MM                                     
  MM .d"     `7MM  `7Mb,od8 MM,dMMb.   ,pW"Wq.  dM'       ``7Mb,od8 ,6"Yb.   mMMmmmmMMmm .gP"Ya `7Mb,od8 pd""b.   .d*"*bg. 
  MMMMM.       MM    MM' "' MM    `Mb 6W'   `Wb MM           MM' "'8)   MM    MM    MM  ,M'   Yb  MM' "'(O)  `8b 6MP    Mb 
  MM  VMA      MM    MM     MM     M8 8M     M8 MM.          MM     ,pm9MM    MM    MM  8M""""""  MM         ,89 YMb    MM 
  MM   `MM.    MM    MM     MM.   ,M9 YA.   ,A9 `Mb.     ,'  MM    8M   MM    MM    MM  YM.    ,  MM       ""Yb.  `MbmmdM9 
.JMML.   MMb..JMML..JMML.   P^YbmdP'   `Ybmd9'    `"bmmmd' .JMML.  `Moo9^Yo..JMML.  `Mbmo`Mbmmd'.JMML.        88       .M' 
                                                                                                        (O)  .M'     .d9   
                                                                                                         bmmmd'    m"'     


 __  __             __              ____                      ___  __                     __       __      
/\ \/\ \  __       /\ \            /\  _`\                  /'___\/\ \__                /'__`\   /'_ `\    
\ \ \/'/'/\_\  _ __\ \ \____    ___\ \ \/\_\  _ __    __   /\ \__/\ \ ,_\    __   _ __ /\_\L\ \ /\ \L\ \   
 \ \ , < \/\ \/\`'__\ \ '__`\  / __`\ \ \/_/_/\`'__\/'__`\ \ \ ,__\\ \ \/  /'__`\/\`'__\/_/_\_<_\ \___, \  
  \ \ \\`\\ \ \ \ \/ \ \ \L\ \/\ \L\ \ \ \L\ \ \ \//\ \L\.\_\ \ \_/ \ \ \_/\  __/\ \ \/  /\ \L\ \\/__,/\ \ 
   \ \_\ \_\ \_\ \_\  \ \_,__/\ \____/\ \____/\ \_\\ \__/.\_\\ \_\   \ \__\ \____\\ \_\  \ \____/     \ \_\
    \/_/\/_/\/_/\/_/   \/___/  \/___/  \/___/  \/_/ \/__/\/_/ \/_/    \/__/\/____/ \/_/   \/___/       \/_/




    _/    _/  _/            _/                    _/_/_/                          _/_/    _/                          _/_/_/      _/_/    
   _/  _/        _/  _/_/  _/_/_/      _/_/    _/        _/  _/_/    _/_/_/    _/      _/_/_/_/    _/_/    _/  _/_/        _/  _/    _/   
  _/_/      _/  _/_/      _/    _/  _/    _/  _/        _/_/      _/    _/  _/_/_/_/    _/      _/_/_/_/  _/_/        _/_/      _/_/_/    
 _/  _/    _/  _/        _/    _/  _/    _/  _/        _/        _/    _/    _/        _/      _/        _/              _/        _/     
_/    _/  _/  _/        _/_/_/      _/_/      _/_/_/  _/          _/_/_/    _/          _/_/    _/_/_/  _/        _/_/_/    _/_/_/        



 ,ggg,        gg                                                ,gggg,                                                              ad888888b,  ad88888ba  
dP""Y8b       dP                   ,dPYb,                     ,88"""Y8b,                        ,dPYb,    I8                       d8"     "88 d8"     "88 
Yb, `88      d8'                   IP'`Yb                    d8"     `Y8                        IP'`Yb    I8                               a88 88       88 
 `"  88    ,dP'    gg              I8  8I                   d8'   8b  d8                        I8  8I 88888888                           ,88P 88       88 
     88aaad8"      ""              I8  8'                  ,8I    "Y88P'                        I8  8'    I8                            aad8"  Y8,    ,d88 
     88""""Yb,     gg    ,gggggg,  I8 dP         ,ggggg,   I8'            ,gggggg,    ,gggg,gg  I8 dP     I8     ,ggg,    ,gggggg,      ""Y8,   "PPPPPP"88 
     88     "8b    88    dP""""8I  I8dP   88gg  dP"  "Y8gggd8             dP""""8I   dP"  "Y8I  I8dP      I8    i8" "8i   dP""""8I        `88b          88 
     88      `8i   88   ,8'    8I  I8P    8I   i8'    ,8I  Y8,           ,8'    8I  i8'    ,8I  I8P      ,I8,   I8, ,8I  ,8'    8I         "88          8P 
     88       Yb,_,88,_,dP     Y8,,d8b,  ,8I  ,d8,   ,d8'  `Yba,,_____, ,dP     Y8,,d8,   ,d8b,,d8b,_   ,d88b,  `YbadP' ,dP     Y8,Y8,     a88 8b,    a8P  
     88        Y88P""Y88P      `Y88P'"Y88P"'  P"Y8888P"      `"Y8888888 8P      `Y8P"Y8888P"`Y8PI8"888888P""Y88888P"Y8888P      `Y8 "Y888888P' `"Y8888P'   
                                                                                                I8 `8,                                                     
                                                                                                I8  `8,                                                    
                                                                                                I8   8I                                                    
                                                                                                I8   8I                                                    
                                                                                                I8, ,8'                                                    
                                                                                                 "Y8P'                                                     

oooo    oooo  o8o            .o8                   .oooooo.                       .o88o.     .                        .oooo.    .ooooo.   
`888   .8P'   `"'           "888                  d8P'  `Y8b                      888 `"   .o8                      .dP""Y88b  888' `Y88. 
 888  d8'    oooo  oooo d8b  888oooo.   .ooooo.  888          oooo d8b  .oooo.   o888oo  .o888oo  .ooooo.  oooo d8b       ]8P' 888    888 
 88888[      `888  `888""8P  d88' `88b d88' `88b 888          `888""8P `P  )88b   888      888   d88' `88b `888""8P     <88b.   `Vbood888 
 888`88b.     888   888      888   888 888   888 888           888      .oP"888   888      888   888ooo888  888          `88b.       888' 
 888  `88b.   888   888      888   888 888   888 `88b    ooo   888     d8(  888   888      888 . 888    .o  888     o.   .88P      .88P'  
o888o  o888o o888o d888b     `Y8bod8P' `Y8bod8P'  `Y8bood8P'  d888b    `Y888""8o o888o     "888" `Y8bod8P' d888b    `8bd88P'     .oP'     




Btw I found where the CodeHS ASCII art came from: https://patorjk.com/software/taag/#p=display&f=Georgi16&t=CodeHS
The only way CodeHS actually made this art is if they also made the FONT on this website ^ (i don't think they did i checked)


   ____                  ___         ____    ____  ____   
  6MMMMb/                `MM         `MM'    `MM' 6MMMMb\ 
 8P    YM                 MM          MM      MM 6M'    ` 
6M      Y   _____     ____MM   ____   MM      MM MM       
MM         6MMMMMb   6MMMMMM  6MMMMb  MM      MM YM.      
MM        6M'   `Mb 6M'  `MM 6M'  `Mb MMMMMMMMMM  YMMMMb  
MM        MM     MM MM    MM MM    MM MM      MM      `Mb 
MM        MM     MM MM    MM MMMMMMMM MM      MM       MM 
YM      6 MM     MM MM    MM MM       MM      MM       MM 
 8b    d9 YM.   ,M9 YM.  ,MM YM    d9 MM      MM L    ,M9 
  YMMMM9   YMMMMM9   YMMMMMM_ YMMMM9 _MM_    _MM_MYMMMM9  



*/

var output = document.querySelector('#output');

var SCREENWIDTH = 600; // 600
var SCREENHEIGHT = 400; // 400
const BACKGROUNDCOLOR = '#000';

var outofboundscolor = 31;
var outofboundscolordirection = 1;

const PLAYERWIDTH = 20;
const PLAYERHEIGHT = 20;
const PLAYERCOLOR = '#00f';

var LEVELWIDTH = 16384; // 16384
var LEVELHEIGHT = 16384; // 16384
const LEVELCOLOR = '#0f0';

var RESPAWNX = 0;
var RESPAWNY = 0;

const ENEMYWIDTH = 16;
const ENEMYHEIGTH = 16;
const ENEMYCOLOR = '#f00';

var lastValue = 0;

var background = {
  render: (ctx) => {
    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0, 0, SCREENWIDTH, SCREENHEIGHT);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    ctx.fillStyle = '#400';
    analyser.getByteFrequencyData(dataArray);
    
    for (var i = 0; i < dataArray.length; i++) {
      ctx.fillRect(i * (SCREENWIDTH / dataArray.length), SCREENHEIGHT - ((dataArray[i] / 255) * SCREENHEIGHT), SCREENWIDTH / dataArray.length, ((dataArray[i] / 255) * SCREENHEIGHT));
    }
    
    const dataArray2 = new Uint8Array(bufferLength);
    
    ctx.strokeStyle = '#f00';
    analyser.getByteTimeDomainData(dataArray2);
    
    for (var i = 0; i < dataArray2.length; i++) {
      ctx.beginPath();
      ctx.moveTo((i - 1) * (SCREENWIDTH / dataArray2.length), ((255 - lastValue) / 255) * SCREENHEIGHT);
      ctx.lineTo(i * (SCREENWIDTH / dataArray2.length), ((255 - dataArray2[i]) / 255) * SCREENHEIGHT);
      ctx.stroke();
      lastValue = dataArray2[i];
    }
  },
}
var camera = {
  x: 0,
  y: 0,
}
var player = {
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  render: (ctx, x, y) => {
    ctx.fillStyle = PLAYERCOLOR;
    ctx.fillRect(x, y, PLAYERWIDTH, PLAYERHEIGHT);
  },
}

//var terrain = [createTerrainData({x: 0, y: 200, width: 500, height: 20})];
var terrain = [];

var generate;

/*
// Level 1 - Blocks (Small level)
terrain = [];

LEVELWIDTH = 1024;
LEVELHEIGHT = 1024;

for (var i = 0; i < LEVELHEIGHT; i += 256) {
  for (var j = 0; j < LEVELWIDTH; j += 128) {
    terrain.push({x: j, y: i + (j % 256) + 64, width: 128, height: 64});
  }
}

for (var i = 0; i < terrain.length; i++) {
  terrain[i] = createTerrainData(terrain[i]);
}
*/

/*
// Level 2 - Blocks (Smaller level)
terrain = [];

LEVELWIDTH = 256;
LEVELHEIGHT = 1024;

for (var i = 0; i < LEVELHEIGHT; i += 256) {
  for (var j = 0; j < LEVELWIDTH; j += 128) {
    terrain.push({x: j, y: i + (j % 256) + 64, width: 128, height: 64});
  }
}

for (var i = 0; i < terrain.length; i++) {
  terrain[i] = createTerrainData(terrain[i]);
}
*/

/*
// Level 3 - Blocks (Huge level)
terrain = [];

LEVELWIDTH = 16384;
LEVELHEIGHT = 16384;

for (var i = 0; i < LEVELHEIGHT; i += 256) {
  for (var j = 0; j < LEVELWIDTH; j += 128) {
    terrain.push({x: j, y: i + (j % 256) + 64, width: 128, height: 64});
  }
}

for (var i = 0; i < terrain.length; i++) {
  terrain[i] = createTerrainData(terrain[i]);
}
*/

/*
// Level 4 - Random Rectangles (Small level)
terrain = [];

LEVELWIDTH = 1024;
LEVELHEIGHT = 1024;

var numrects = 50;
var maxsize = 100;
var minsize = 32;

for (var i = 0; i < numrects; i++) {
  terrain.push({x: Math.floor(Math.random() * LEVELWIDTH), y: Math.floor(Math.random() * LEVELHEIGHT), width: Math.floor(Math.random() * (maxsize - minsize) + minsize), height: Math.floor(Math.random() * (maxsize - minsize) + minsize)});
}

for (var i = 0; i < terrain.length; i++) {
  terrain[i] = createTerrainData(terrain[i]);
}
*/

/*
// Level 5 - Random Rectangles (Huge level)
terrain = [];

LEVELWIDTH = 16384;
LEVELHEIGHT = 16384;

var numrects = 10000;
var maxsize = 200;
var minsize = 32;

for (var i = 0; i < numrects; i++) {
  terrain.push({x: Math.floor(Math.random() * LEVELWIDTH), y: Math.floor(Math.random() * LEVELHEIGHT), width: Math.floor(Math.random() * (maxsize - minsize) + minsize), height: Math.floor(Math.random() * (maxsize - minsize) + minsize)});
}

for (var i = 0; i < terrain.length; i++) {
  terrain[i] = createTerrainData(terrain[i]);
}
*/

var keyspressed = {}

var audioCtx;
async function getFile(audioContext, filepath) {
  var response = await fetch(filepath);
  var arrayBuffer = await response.arrayBuffer();
  var audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

var osc, gain, analyser;

// Initial body ////////////////////////////////////////////////////////////////
async function start() {
  generate();
  setUpInput();
  audioCtx = new AudioContext();
  analyser = audioCtx.createAnalyser();
  var buffer = await getFile(audioCtx, 'https://pincescpu987.github.io/files2/undergroundlong1.wav');
  var buffersource = audioCtx.createBufferSource();
  buffersource.buffer = buffer;
  buffersource.connect(analyser);
  analyser.connect(audioCtx.destination);
  buffersource.loop = true;
  buffersource.start();
  
  osc = audioCtx.createOscillator();
  osc.frequency.value = 440;
  osc.type = 'square';
  
  gain = audioCtx.createGain();
  gain.gain.value = 0;
  osc.connect(gain);
  gain.connect(analyser);
  
  osc.start();
  
  output.width = SCREENWIDTH;
  output.height = SCREENHEIGHT;
  //background.render();
  /*
    for (var i = 0; i < terrain.length; i++) {
        var o = terrain[i];
        add(o.render);
    }
    */
  /*
    player.render.setSize(PLAYERWIDTH, PLAYERHEIGHT);
    player.render.setColor(PLAYERCOLOR);
    */
  //generate();
  requestAnimationFrame(update);
}


// Main body ///////////////////////////////////////////////////////////////////
function update() {
  var ctx = output.getContext('2d');
  render(ctx);
  movement(ctx);
  collisions(ctx);
  requestAnimationFrame(update);
  //setTimeout(update, 100);
}


// Render functions ////////////////////////////////////////////////////////////
function render(ctx) {
  SCREENWIDTH = document.documentElement.clientWidth;
  SCREENHEIGHT = document.documentElement.clientHeight;
  
  output.width = SCREENWIDTH;
  output.height = SCREENHEIGHT;
  //outofboundscolor += outofboundscolordirection;
  ctx.clearRect(0, 0, SCREENWIDTH, SCREENHEIGHT);
  background.render(ctx);

  //player.render(ctx, player.x - camera.x, player.y - camera.y);
  
  camera.x = player.x - SCREENWIDTH / 2;
  camera.y = player.y - SCREENHEIGHT / 2;
  
  /*
  if (camera.x < 0) {
    camera.x = 0;
  }
  if (camera.x > LEVELWIDTH - SCREENWIDTH) {
    camera.x = LEVELWIDTH - SCREENWIDTH;
  }
  if (camera.y < 0) {
    camera.y = 0;
  }
  if (camera.y > LEVELHEIGHT - SCREENHEIGHT) {
    camera.y = LEVELHEIGHT - SCREENHEIGHT;
  }
  */
  
  camera.x += Math.floor(Math.random() * ((vibratedistance * 2) + 1)) - vibratedistance;
  camera.y += Math.floor(Math.random() * ((vibratedistance * 2) + 1)) - vibratedistance;
  
  osc.frequency.value = vibratedistance * 10;
  gain.gain.value = (vibratedistance > 0) / 4;
  
  camera.x = Math.round(camera.x);
  camera.y = Math.round(camera.y);
  
  for (var i = 0; i < terrain.length; i++) {
    var o = terrain[i];
    if ((((o.x + o.width) - camera.x) >= 0 && (o.x - camera.x) < SCREENWIDTH) && (((o.y + o.height) - camera.y) >= 0 && (o.y - camera.y) < SCREENHEIGHT)) {
      o.render(ctx, o.x - camera.x, o.y - camera.y, o.width, o.height);
    }
  }
  
  ctx.fillStyle = '#00' + Math.floor((outofboundscolor / 31) * 3).toString(16);
  if (camera.x + SCREENWIDTH > LEVELWIDTH) {
    ctx.fillRect(LEVELWIDTH - camera.x, 0, SCREENWIDTH - (LEVELWIDTH - camera.x), SCREENHEIGHT);
  }
  if (camera.x < 0) {
    ctx.fillRect(0, 0, -camera.x, SCREENHEIGHT);
  }
  
  if (camera.y + SCREENHEIGHT > LEVELHEIGHT) {
    ctx.fillRect(0, LEVELHEIGHT - camera.y, SCREENWIDTH, SCREENHEIGHT - (LEVELHEIGHT - camera.y));
  }
  if (camera.y < 0) {
    ctx.fillRect(0, 0, SCREENWIDTH, -camera.y);
  }
  
  player.render(ctx, Math.round(player.x - camera.x), Math.round(player.y - camera.y));
}


// Input functions /////////////////////////////////////////////////////////////

function setUpInput() {
  onkeydown = (e) => {
    keyspressed[e.code] = true;
    if (e.code == 'KeyX') {
      player.x = RESPAWNX;
      player.y = RESPAWNY;
      player.dx = 0;
      player.dy = 0;
      generate();
    } else if (e.code == 'KeyC' && e.ctrlKey) {
      window.location.reload();
    }
  }

  onkeyup = (e) => {
    keyspressed[e.code] = false;
  }
}


// Movement functions //////////////////////////////////////////////////////////
const JUMPSPEED = 8;
const WALLJUMPSPEED = 2;
const ACCELX = 0.125;
const ACCELY = 0.25;
const MAXSPEEDX = 4;
const MAXSPEEDY = 16;
//const PRECISIONX = 1;
//const PRECISIONY = 1;

var jumping = false;

function movement(ctx) {
  playermovement(ctx);
  playergravity(ctx);
}

function playermovement(ctx) {
  if (keyspressed.ArrowLeft && !keyspressed.ArrowRight) {
    player.dx -= ACCELX;
  }
  if (keyspressed.ArrowRight && !keyspressed.ArrowLeft) {
    player.dx += ACCELX;
  }
  
  if (player.dx > MAXSPEEDX) {
    player.dx = MAXSPEEDX;
  }
  if (player.dx < -MAXSPEEDX) {
    player.dx = -MAXSPEEDX;
  }
  
  if ((!keyspressed.ArrowLeft && !keyspressed.ArrowRight) || (keyspressed.ArrowLeft && keyspressed.ArrowRight)) {
    if (player.dx >= ACCELX) {
      player.dx -= ACCELX;
    }
    if (player.dx <= -ACCELX) {
      player.dx += ACCELX;
    }
    if (Math.abs(player.dx) < ACCELX) {
      player.dx = 0;
    }
  }
  if (keyspressed.Space) {
    /*
    if (keyspressed.ArrowLeft && touchingleft) {
      vibratedistance = Math.round(Math.abs(player.dx));
      player.dx = WALLJUMPSPEED;
      player.dy = JUMPSPEED;
    }
    if (keyspressed.ArrowRight && touchingright) {
      vibratedistance = Math.round(Math.abs(player.dx));
      player.dx = -WALLJUMPSPEED;
      player.dy = JUMPSPEED;
    }
    */
  }
  player.x += player.dx;
}

function playergravity(ctx) {
  if (keyspressed.Space && !jumping) {
    jumping = true;
    player.dy = JUMPSPEED;
  }
  player.y -= player.dy;
  player.dy -= ACCELY;
  if (player.dy < -MAXSPEEDY) {
    player.dy = -MAXSPEEDY;
  }
}


// Collision functions /////////////////////////////////////////////////////////
const COLLISIONBUFFERX = MAXSPEEDX + 1;
const COLLISIONBUFFERY = MAXSPEEDY + 1;

var vibrated = false;
var vibratedistance = 0;
var vibratestartdistance = 5;
var vibratedecrement = 0.5;

var touchingleft = false;
var touchingright = false;
var touchingup = false;
var touchingdown = false;
var colliding = false;

function collisions() {
  touchingleft = false;
  touchingright = false;
  touchingup = false;
  touchingdown = false;
  colliding = false;
  if (vibratedistance > 0) {
    vibratedistance -= vibratedecrement;
  }
  var reservedy = player.dy;
  for (var i = 0; i < terrain.length; i++) {
    var o = terrain[i];
    for (var j = player.y + 1; j < player.y + (PLAYERHEIGHT / 2); j++) {
      if (player.x > o.x - PLAYERWIDTH && player.x < (o.x - PLAYERWIDTH) + COLLISIONBUFFERX && (j >= o.y && j <= o.y + o.height)) {
        touchingright = true;
        colliding = true;
        if (keyspressed.Space && keyspressed.ArrowRight) {
          vibratedistance = Math.abs(player.dx) * 4;
          player.x = o.x - PLAYERWIDTH;
          player.dx = -WALLJUMPSPEED;
          player.dy = JUMPSPEED;
        } else {
          player.x = o.x - PLAYERWIDTH;
          player.dx = 0;
        }
      }
    }
    for (var j = player.y + 1; j < player.y + (PLAYERHEIGHT / 2); j++) {
      if (player.x < o.x + o.width && player.x > (o.x + o.width) - COLLISIONBUFFERX && (j >= o.y && j <= o.y + o.height)) {
        touchingleft = true;
        colliding = true;
        if (keyspressed.Space && keyspressed.ArrowLeft) {
          vibratedistance = Math.abs(player.dx) * 4;
          player.x = o.x + o.width;
          player.dx = WALLJUMPSPEED;
          player.dy = JUMPSPEED;
        } else {
          player.x = o.x + o.width;
          player.dx = 0;
        }
      }
    }
  }
  
  if (player.x + PLAYERWIDTH > LEVELWIDTH) {
    player.x = LEVELWIDTH - PLAYERWIDTH;
    player.dx = 0;
    touchingright = true;
    colliding = true;
  }
  if (player.x < 0) {
    player.x = 0;
    player.dx = 0;
    touchingleft = true;
    colliding = true;
  }
  if (player.y + PLAYERHEIGHT >= LEVELHEIGHT) {
    //player.y = LEVELHEIGHT - PLAYERHEIGHT;
    player.x = RESPAWNX;
    player.y = RESPAWNY;
    player.dx = 0;
    player.dy = 0;
    touchingdown = true;
    colliding = true;
    //generate();
  }
  if (player.y < 0) {
    player.y = 0;
    player.dy = 0;
    touchingup = true;
    colliding = true;
  }

  for (var i = 0; i < terrain.length; i++) {
    var o = terrain[i];
    for (var j = player.x + 1; j < player.x + PLAYERWIDTH - 1; j++) {
      if (player.y > o.y - PLAYERHEIGHT && player.y < (o.y - PLAYERHEIGHT) + COLLISIONBUFFERY && (j >= o.x && j <= o.x + o.width)) {
        touchingdown = true;
        colliding = true;
        player.y = o.y - PLAYERHEIGHT;
        player.y += 1;
        player.dy = 0;
      }
    }
    for (var j = player.x + 1; j < player.x + PLAYERWIDTH - 1; j++) {
      if (player.y < o.y + o.height && player.y > (o.y + o.height) - COLLISIONBUFFERY && (j >= o.x && j <= o.x + o.width)) {
        touchingup = true;
        colliding = true;
        player.y = o.y + o.height;
        player.y -= 0;
        player.dy = 0;
      }
    }
  }
  if ((touchingup || touchingdown) && !vibrated) {
    vibrated = true;
    //vibratedistance = vibratestartdistance;
    vibratedistance = Math.round(Math.abs(reservedy))
  }
  if (!(touchingup || touchingdown)) {
    vibrated = false;
  }
  if (touchingdown) {
    jumping = false;
  }
}



// Misc functions //////////////////////////////////////////////////////////////
function createTerrainData(data) {
  var data2 = {x: data.x, y: data.y, width: data.width, height: data.height};

  /*
  var rect = new Rectangle(data2.width, data2.height);
  rect.setColor(LEVELCOLOR);
  */
  data2.render = (ctx, x, y, width, height) => {
    ctx.fillStyle = LEVELCOLOR;
    ctx.fillRect(x, y, width, height)
  };
  return data2;
}

var started = false;

/*
onunhandledrejection = (e) => {
  console.log(e.message);
}
*/

var input = document.querySelector('#input');

input.onkeydown = (e) => {
  if (e.code == 'Enter' && e.ctrlKey && !started) {
    generate = new Function(input.value);
    document.querySelector('#start').style.display = 'none';
    output.style.display = 'block';
    start();
    started = true;
  }
}
