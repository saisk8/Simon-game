var game = {
	strict: false,
	level: 0,
	buttons: ["red", "green", "blue", "yellow"],
	sounds: {
		red: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
		blue: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
		green: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
		yellow: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
	}
};

var simon = [];
var player = [];

function startGame() {
	game.level += 1;
	simon = [];
	player = [];
	addMove();
	addEventListeners();
}

function addMove() {
	var move = Math.floor(Math.random() * 4);
	simon.push(game.buttons[move]);
	simonSays();
}

function simonSays() {
	for (var i = 0; i < simon.length; i++) {
		$("#" + simon[i])
			.addClass("hover-" + simon[i]);
		setTimeout(1000, playAudio(simon[i]));
	}
}

function playAudio(s) {
	var audio = new Audio(game.sounds[s]);
	audio.play();
	$("#" + s)
		.removeClass("hover-" + s);
}

function checkMoves() {
	for (var i = 0; i < player.length; i++) {
		if (player[i] !== simon[i]) {
			return false;
		}
	}
	return true;
}

function addEventListeners() {
	document.getElementById("red")
		.addEventListener("click", addPlayerMove);
	document.getElementById("blue")
		.addEventListener("click", addPlayerMove);
	document.getElementById("green")
		.addEventListener("click", addPlayerMove);
	document.getElementById("yellow")
		.addEventListener("click", addPlayerMove);
}

function addPlayerMove(e) {
	player.push(e.target.id);
	if (checkMoves()) {
		if (checkWin()) {
			alert("You have Won!");
			reset();
		} else {
			addMove();
		}
	} else {
		if (game.strict) {
			alert("Too bad, try again!");
			reset();
		} else {
			simonSays();
		}
	}
}

function checkWin() {
	return (player.length === 20);
}

function reset() {
	document.getElementById("red")
		.removeEventListner("click", addPlayerMove);
	document.getElementById("blue")
		.removeEventListner("click", addPlayerMove);
	document.getElementById("green")
		.removeEventListner("click", addPlayerMove);
	document.getElementById("yellow")
		.removeEventListner("click", addPlayerMove);
	game.level = 0;
	startGame();
}
