$(document)
	.ready(function() {
		$("#start")
			.click(function() {
				startGame(); //eslint-disable-line (no-undef)
			});
		$("#reset")
			.click(function() {
				startGame(); //eslint-disable-line (no-undef)
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
	});
