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
	simon = [];
	player = [];
	addMove();
}

function addMove() {
	game.level += 1;
	var move = Math.floor(Math.random() * 4);
	simon.push(game.buttons[move]);
	simonSays();
}

function simonSays() {
	var i = 0;
	var id = setInterval(function() {
		play(simon[i]);
		i++;
		if (i >= simon.length) {
			clearInterval(id);
		}
	}, 600);
	player = [];
}

function play(s) {
	var audio = new Audio(game.sounds[s]);
	$("#" + s)
		.addClass("hover-" + s);
	audio.play();
	setTimeout(function() {
		$("#" + s)
			.removeClass("hover-" + s);
	}, 300);
}

function checkMove(id) {
	if (player[player.length - 1] !== simon[player.length - 1]) {
		if (game.strict) {
			alert("Start again");
			startGame();
		} else {
			alert("Wrong move");
			simonSays();
		}
	} else {
		play(id);
		if (simon.length === player.length) {
			if (checkWin()) {
				alert("You have won!");
			} else {
				addMove();
			}
		}
	}
}

function addPlayerMove(id) { //eslint-disable-line
	player.push(id);
	checkMove(id);
}

function checkWin() {
	return (player.length === 20);
}
