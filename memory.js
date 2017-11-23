function background(){
    var backgroundMenu = document.getElementById("backgroundMenu");    
    backgroundMenu.classList.toggle("open");
    
    var forest = document.getElementById("forest");
    var desert = document.getElementById("desert");
    var sea = document.getElementById("sea");
    var mountains = document.getElementById("mountains");
    var body = document.querySelector("body");
        
    forest.addEventListener("click", function(){setBackground("forest")});
    desert.addEventListener("click", function(){setBackground("desert")});
    sea.addEventListener("click", function(){setBackground("sea")});
    mountains.addEventListener("click", function(){setBackground("mountains")});
    
    function setBackground(whichOne){
        switch(whichOne){
            case "forest":{
                body.style.backgroundImage = "url('backgrounds/forest.jpeg')";
                break;
            }
            case "desert":{
                body.style.backgroundImage = "url('backgrounds/desert.jpeg')";
                break;
            }
            case "sea":{
                body.style.backgroundImage = "url('backgrounds/sea.jpeg')";
                break;
            }
            case "mountains":{
                body.style.backgroundImage = "url('backgrounds/mountains.jpeg')";
                break;
            }
        }
        backgroundMenu.classList.remove("open");
    }
}

function openSelection(){
    var selectionWindow = document.getElementById("selectionWindow");
    var game = document.getElementById("game");
    game.style.display = "none";
    selectionWindow.classList.remove("hidden");
    selectionWindow.classList.add("visible");
}

function playGame(mode){
selectionWindow.classList.add("hidden");
setTimeout(function(){game.style.display = "flex";}, 1200);
var fields = [[document.getElementById('field_0'), -1, false],
[document.getElementById('field_1'), -1, false],
[document.getElementById('field_2'), -1, false],
[document.getElementById('field_3'), -1, false],
[document.getElementById('field_4'), -1, false],
[document.getElementById('field_5'), -1, false],
[document.getElementById('field_6'), -1, false],
[document.getElementById('field_7'), -1, false],
[document.getElementById('field_8'), -1, false],
[document.getElementById('field_9'), -1, false],
[document.getElementById('field_10'), -1, false],
[document.getElementById('field_11'), -1, false],
[document.getElementById('field_12'), -1, false],
[document.getElementById('field_13'), -1, false],
[document.getElementById('field_14'), -1, false],
[document.getElementById('field_15'), -1, false],
[document.getElementById('field_16'), -1, false],
[document.getElementById('field_17'), -1, false],
[document.getElementById('field_18'), -1, false],
[document.getElementById('field_19'), -1, false],
[document.getElementById('field_20'), -1, false],
[document.getElementById('field_21'), -1, false],
[document.getElementById('field_22'), -1, false],
[document.getElementById('field_23'), -1, false],
[document.getElementById('field_24'), -1, false],
[document.getElementById('field_25'), -1, false],
[document.getElementById('field_26'), -1, false],
[document.getElementById('field_27'), -1, false],
[document.getElementById('field_28'), -1, false],
[document.getElementById('field_29'), -1, false],
[document.getElementById('field_30'), -1, false],
[document.getElementById('field_31'), -1, false],
[document.getElementById('field_32'), -1, false],
[document.getElementById('field_33'), -1, false],
[document.getElementById('field_34'), -1, false],
[document.getElementById('field_35'), -1, false],
[document.getElementById('field_36'), -1, false],
[document.getElementById('field_37'), -1, false],
[document.getElementById('field_38'), -1, false],
[document.getElementById('field_39'), -1, false],
];

var faces = [];
    
function Card(faceLink){
    this.img = document.createElement("img");
    this.img.setAttribute("height", "100%");
    this.img.setAttribute("width", "100%");
    this.img.src = faceLink;
    faces.push(this.img);
}

var bears1 = new Card("cards/bears.jpg");     
var bears2 = new Card("cards/bears.jpg");  
var butterfly1 = new Card("cards/butterfly.jpg");  
var butterfly2 = new Card("cards/butterfly.jpg");  
var dolpin1 = new Card("cards/dolphin.jpg");
var dolphin2 = new Card("cards/dolphin.jpg");
var ducks1 = new Card("cards/ducks.jpg");
var ducks2 = new Card("cards/ducks.jpg");
var elephant1 = new Card("cards/elephant.jpg");
var elephant2 = new Card("cards/elephant.jpg");
var fish1 = new Card("cards/fish.jpg");
var fish2 = new Card("cards/fish.jpg");
var flamingos1 = new Card("cards/flamingos.jpg");
var flamingos2 = new Card("cards/flamingos.jpg");
var fox1 = new Card("cards/fox.jpg");
var fox2 = new Card("cards/fox.jpg");
var frog1 = new Card("cards/frog.jpg");
var frog2 = new Card("cards/frog.jpg");
var horse1 = new Card("cards/horse.jpg");
var horse2 = new Card("cards/horse.jpg");
var hummingbird1 = new Card("cards/hummingbird.jpg");
var hummingbird2 = new Card("cards/hummingbird.jpg");
var jellyfish1 = new Card("cards/jellyfish.jpg");
var jellyfish2 = new Card("cards/jellyfish.jpg");
var lions1 = new Card("cards/lions.jpg");
var lions2 = new Card("cards/lions.jpg");
var parrot1 = new Card("cards/parrot.jpg");
var parrot2 = new Card("cards/parrot.jpg");
var peacock1 = new Card("cards/peacock.jpg");
var peacock2 = new Card("cards/peacock.jpg");
var rabbits1 = new Card("cards/rabbits.jpg");
var rabbits2 = new Card("cards/rabbits.jpg");
var starfish1 = new Card("cards/starfish.jpg");
var starfish2 = new Card("cards/starfish.jpg");
var tiger1 = new Card("cards/tiger.jpg");
var tiger2 = new Card("cards/tiger.jpg");
var wolf1 = new Card("cards/wolf.jpg");
var wolf2 = new Card("cards/wolf.jpg");
var zebras1 = new Card("cards/zebras.jpg");
var zebras2 = new Card("cards/zebras.jpg");


// here I'll insert all the necessary images



var back = new Array(40);

//Here I create elements for all card backs to append in the "coverAll()" function

for (var a =0; a<back.length; a++){
    back[a] = document.createElement("img");
        back[a].setAttribute("height", "100%");
        back[a].setAttribute("width", "100%");
        back[a].src="cards/cardBack.jpg";
}


fields[0][0].addEventListener("click", function(){uncover(0)});
fields[1][0].addEventListener("click", function(){uncover(1)});
fields[2][0].addEventListener("click", function(){uncover(2)});
fields[3][0].addEventListener("click", function(){uncover(3)});
fields[4][0].addEventListener("click", function(){uncover(4)});
fields[5][0].addEventListener("click", function(){uncover(5)});
fields[6][0].addEventListener("click", function(){uncover(6)});
fields[7][0].addEventListener("click", function(){uncover(7)});
fields[8][0].addEventListener("click", function(){uncover(8)});
fields[9][0].addEventListener("click", function(){uncover(9)});
fields[10][0].addEventListener("click", function(){uncover(10)});
fields[11][0].addEventListener("click", function(){uncover(11)});
fields[12][0].addEventListener("click", function(){uncover(12)});
fields[13][0].addEventListener("click", function(){uncover(13)});
fields[14][0].addEventListener("click", function(){uncover(14)});
fields[15][0].addEventListener("click", function(){uncover(15)});
fields[16][0].addEventListener("click", function(){uncover(16)});
fields[17][0].addEventListener("click", function(){uncover(17)});
fields[18][0].addEventListener("click", function(){uncover(18)});
fields[19][0].addEventListener("click", function(){uncover(19)});
fields[20][0].addEventListener("click", function(){uncover(20)});
fields[21][0].addEventListener("click", function(){uncover(21)});
fields[22][0].addEventListener("click", function(){uncover(22)});
fields[23][0].addEventListener("click", function(){uncover(23)});
fields[24][0].addEventListener("click", function(){uncover(24)});
fields[25][0].addEventListener("click", function(){uncover(25)});
fields[26][0].addEventListener("click", function(){uncover(26)});
fields[27][0].addEventListener("click", function(){uncover(27)});
fields[28][0].addEventListener("click", function(){uncover(28)});
fields[29][0].addEventListener("click", function(){uncover(29)});
fields[30][0].addEventListener("click", function(){uncover(30)});
fields[31][0].addEventListener("click", function(){uncover(31)});
fields[32][0].addEventListener("click", function(){uncover(32)});
fields[33][0].addEventListener("click", function(){uncover(33)});
fields[34][0].addEventListener("click", function(){uncover(34)});
fields[35][0].addEventListener("click", function(){uncover(35)});
fields[36][0].addEventListener("click", function(){uncover(36)});
fields[37][0].addEventListener("click", function(){uncover(37)});
fields[38][0].addEventListener("click", function(){uncover(38)});
fields[39][0].addEventListener("click", function(){uncover(39)});


var uncoverCount = 0;
var lastUncover = 0;
var pairsUncovered = 0;
coverAll(); // Called for the first time, as the game starts.



//var faces = [tass1.img, tass2.img, illi1.img, illi2.img, dia1, dia2, aba1, aba2, anub1, anub2, arthas1, arthas2, BW1, BW2, etc1, etc2, fals1, fals2, jaina1, jaina2, leo1, leo2, lili1, lili2, tlv1, tlv2, naz1, naz2, malf1, malf2, uther1, uther2, zera1, zera2, hammer1, hammer2, ming1, ming2, nova1, nova2];

var identifiers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//This loop assigns identifiers to fields.
for (var i=0; i<identifiers.length; i++){
    while (true){
        var a = getRandomIntInclusive(0, fields.length-1); 
        if(fields[a][1]==-1){             
            fields[a][1]=identifiers[i];
            ;
            break;
        }
    }
}

//The function covers all the cards.
function coverAll(){    
    for (var a = 0; a<fields.length; a++){
        fields[a][0].innerHTML="";
        fields[a][0].appendChild(back[a]);
        fields[a][2] = false;
    }
    pairsUncovered = 0;
}

firstUncover = 0;
secondUncover = 0;
function coverLastTwo(){
    fields[firstUncover][0].innerHTML="";
    fields[firstUncover][0].appendChild(back[firstUncover]);
    fields[firstUncover][2] = false;
    fields[secondUncover][0].innerHTML="";
    fields[secondUncover][0].appendChild(back[secondUncover]);
    fields[secondUncover][2] = false;
}

function uncover(a){
    if (fields[a][2]==false && uncoverCount<2){
        fields[a][0].removeChild(back[a]);
        fields[a][0].appendChild(faces[fields[a][1]]); //swap image
        if(uncoverCount == 0)
            firstUncover=a;
        else
            secondUncover=a;
        uncoverCount++;     
        fields[a][2]=true;  //make it impossible to run when uncovered
        checkPair(a);
    }
}

function checkPair(a){
    if (uncoverCount == 2){  //check if there were 2 uncover actions 
        if ((fields[a][1] - lastUncover == 1 || fields[a][1]-lastUncover == -1) && (fields[a][1] + lastUncover + 3) % 4 == 0) {
                pairsUncovered++;    
                if(pairsUncovered == 20)
                    youWin();
            }
            else {

                switch(mode){
                    case "easy":{
                        setTimeout(coverLastTwo, 1200); 
                        break;
                    }
                    case "hard":{
                        setTimeout(coverAll, 1200);
                        break;
                    }
                }
                
            }
            setTimeout(function(){uncoverCount = 0}, 1200);
        }
        else lastUncover = fields[a][1];
}
    
function youWin(){
    alert("You win!");
}

    
};




