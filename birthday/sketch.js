// Set global variables for messages
let message1 = [];
let message2 = [];
let song;
let button_start;
let img_nums = ["one", "two", "three", "four", "five", "six", "seven"];
let img_arr = [];

// Set global variables for counters, etc
let myFont;
let fade;
let tintNum;
let fadeAmount = 1;
let m1Count;
let imgCount;
let m2Count;

function preload() {
  myFont = loadFont('assets/Montserrat/Montserrat-Medium.ttf');
  message1 = loadStrings('assets/txt/messages.txt');
  message2 = loadStrings('assets/txt/messages_two.txt');
  song = loadSound('assets/other/sounds.mp3');
  for (let i = 0; i < img_nums.length; i++) {
    let img_str = "assets/img/" + img_nums[i] + ".jpg";
    let im = loadImage(img_str);
    img_arr.push(im);
  }
}

function setup() {
  // Don't start draw function yet
  noLoop();

  // Create the button to start the message
  let button_col = color(25, 23, 200, 50);
  button_start = createButton('Open Birthday Message').addClass('b1');
  button_start.mousePressed(begin);

  // Create the canvas for working on
  createCanvas(windowWidth, windowHeight);

  // Create the button to end the music and hide it
  button_end = createButton('Stop Music').addClass('b2');
  button_end.mousePressed(endSound);
  button_end.hide();

  // Initialize values
  fade = 0;
  m1Count = 0;
  imgCount = 0;
  m2Count = 0;
}

function draw() {
  // Initial settings
  background(255);

  // Visuals
  fill(0, 0, 0, fade)
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  let w = width / 2;
  let h = height / 2;
  let txtW = w / 2;
  let txtBoxW = w;
  let txtH = h / 2;
  let txtBoxH = h;
  let speed = 3;

  // RUN THROUGH MESSAGE ONE
  if (m1Count <= message1.length) {
    if (m1Count < message1.length) {
      let curr_text = message1[m1Count];
      text(curr_text, txtW, txtH, txtBoxW, txtBoxH);
    }
    if (fade < 0) {
      fadeAmount = speed;
      m1Count += 1;
    }
    if (fade > 255) {
      fadeAmount = speed * -1;
    }
    fade += fadeAmount;
  }

  // RUN THROUGH IMAGES
  if (m1Count > message1.length && imgCount <= img_arr.length) {
    imageMode(CENTER);
    tintNum = fade;
    tint(255, tintNum);
    if (imgCount < img_arr.length) {
      image(img_arr[imgCount], w, h);
    }
    if (fade < 0) {
      fadeAmount = speed;
      imgCount += 1;
    }
    if (fade > 500) {
      fadeAmount = speed * -1;
    }
    fade += fadeAmount;
  }

  // RUN THROUGH MESSAGE TWO
  if (m1Count > message1.length && imgCount > img_arr.length && m2Count <= message2.length) {
    if (m2Count < message2.length - 2) {
      let curr_text = message2[m2Count];
      text(curr_text, txtW, txtH, txtBoxW, txtBoxH);
    }
    if (fade < 0) {
      fadeAmount = speed;
      m2Count += 1;
    }
    if (fade > 255) {
      fadeAmount = speed * -1;
    }
    fade += fadeAmount;
  }

  if (m1Count > message1.length && imgCount > img_arr.length && m2Count > message2.length) {
    let curr_text = message2[message2.length - 2];
    text(curr_text, txtW, txtH, txtBoxW, txtBoxH);
    if (fade < 255) {
      fadeAmount = speed;
    }
    fade += fadeAmount;
    button_end.show();
  }
}


function endSound() {
  if (song.isPlaying()) {
    song.pause();
    button_end.html('Play Music');
  } else {
    song.play();
    button_end.html('Pause Music');
  }
}

function begin() {
  button_start.remove();
  song.setVolume(.1);
  song.play();
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
