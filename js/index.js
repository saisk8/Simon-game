$(document)
	.ready(function() {
		$("#start")
			.click(function() {
				startGame(); //eslint-disable-line (no-undef)
				$("#start")
					.addClass("hide");
				$("#reset")
					.removeClass("hide");
			});
		$("#reset")
			.click(function() {
				reset(); //eslint-disable-line (no-undef)
				$("#reset")
					.addClass("hide");
				$("#start")
					.removeClass("hide");
				$("#level")
					.html("<h4> Stage: " + game.level + "</h4>"); //eslint-disable-line (no-undef)

			});

		$("#red")
			.click(function() {
				addPlayerMove(this.id); //eslint-disable-line (no-undef)
			});
		$("#blue")
			.click(function() {
				addPlayerMove(this.id); //eslint-disable-line (no-undef)
			});
		$("#green")
			.click(function() {
				addPlayerMove(this.id); //eslint-disable-line (no-undef)
			});
		$("#yellow")
			.click(function() {
				addPlayerMove(this.id); //eslint-disable-line (no-undef)
			});
		$("#strict-text")
			.html("<h4> Strict mode: Off </h4>");
		$("#strict-text")
			.addClass("start");

		$("#strict-text")
			.click(function() {
				var strict = toggleStrict(); //eslint-disable-line (no-undef)
				if (strict) {
					$("#strict-text")
						.html("<h4> Strict mode: On </h4>");
					$("#strict-text")
						.addClass("reset");
					$("#strict-text")
						.removeClass("start");
				} else {
					$("#strict-text")
						.html("<h4> Strict mode: Off </h4>");
					$("#strict-text")
						.addClass("start");
					$("#strict-text")
						.removeClass("reset");
				}
			});
	});
