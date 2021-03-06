$(document).ready(function(){

			var wins = 0;
			var losses = 0;
			
			// This is the sum of the guesses added together. 
			var counter = 0;

			var crystal1 = 0;
			var crystal2 = 0;
			var crystal3 = 0;
			var crystal4 = 0;

			var audioElement1 = document.createElement("audio");
      		audioElement1.setAttribute("src", "https://s3-us-west-1.amazonaws.com/week4sounds/sounds/register.WAV");

      		var audioElement2 = document.createElement("audio");
      		audioElement2.setAttribute("src", "https://s3-us-west-1.amazonaws.com/week4sounds/sounds/register.mp3");

      		var song = document.createElement("audio");
      		song.setAttribute("src", "https://s3-us-west-1.amazonaws.com/week4sounds/sounds/song.mp3");


			// This function chooses the random number for each crystal. 
			function CrystalNumber(crystalName) {
				return Math.ceil(Math.random() * 12 - 1) + 1;
			};

			crystal1 = CrystalNumber(crystal1);
			crystal2 = CrystalNumber(crystal2);
			crystal3 = CrystalNumber(crystal3);
			crystal4 = CrystalNumber(crystal4);
			console.log(crystal1, crystal2, crystal3, crystal4);

			var numberGuess = Math.floor(Math.random() * 120) + 19;

			// Check to see if the numberGuess is working. 
			console.log(numberGuess);

			// This sends the number the player is trying to reach to the #numberToGuess div.
			$("#numberToGuess").html(numberGuess);

			// This is the function that controls the game play. 

			// song.play();

			function game () {

				// These show the current score. 
				$("#playerCounter").html(counter);
				$("#playerWins").html(wins);
				$("#playerLosses").html(losses);


				$("#startButton").on("click", function(){
					// song.play();
					audioElement1.play();
					$( "#startButton" ).effect( "puff" );
					$( "#crystal1_span" ).effect( "pulsate" );
					$( "#crystal2_span" ).effect( "pulsate" );
					$( "#crystal3_span" ).effect( "pulsate" );
					$( "#crystal4_span" ).effect( "pulsate" );
				});

				//Crystal #1 function. 
				$("#crystal1_span").on("click", function(){
					$( "#crystal1_span" ).effect( "pulsate" );
					audioElement1.play();
					counter = counter + crystal1;
					$("#playerCounter").html(counter);
					console.log(counter);

					if (counter > numberGuess) {
						
						gameLose();

					} else if (counter === numberGuess) {
							
						gameWin();

					};


				});

				// Crystal 2 function. 
				$("#crystal2_span").on("click", function(){

					audioElement2.play();
					$( "#crystal2_span" ).effect( "pulsate" );
					counter = counter + crystal2;
					$("#playerCounter").html(counter);
					console.log(counter);

					if (counter > numberGuess) {
						
						gameLose();

					} else if (counter === numberGuess) {
							
						gameWin();

					};

				});

				// Crystal 3 function. 
				$("#crystal3_span").on("click", function(){

					audioElement1.play();
					$( "#crystal3_span" ).effect( "pulsate" );
					counter = counter + crystal3;
					$("#playerCounter").html(counter);
					console.log(counter);

					if (counter > numberGuess) {
						
						gameLose();

					} else if (counter === numberGuess) {
							
						gameWin();

					};

				});

				// Crystal 4 function. 
				$("#crystal4_span").on("click", function(){

					audioElement2.play();
					$( "#crystal4_span" ).effect( "pulsate" );
					counter = counter + crystal4;
					$("#playerCounter").html(counter);
					console.log(counter);

					if (counter > numberGuess) {
						
						gameLose();

					} else if (counter === numberGuess) {
							
						gameWin();

					};

				});

				function gameLose () {


					losses = losses + 1;

					$("#playerLosses").html(losses);

					alert("You lost Crystal Collector!");


					crystal1 = CrystalNumber(crystal1);
					crystal2 = CrystalNumber(crystal2);
					crystal3 = CrystalNumber(crystal3);
					crystal4 = CrystalNumber(crystal4);
					console.log(crystal1, crystal2, crystal3, crystal4);

					// This resets the counter back to zero.
					counter = 0;

					$("#playerCounter").html(counter);

					numberGuess = 0;

					numberGuess = Math.floor(Math.random() * 120) + 19;

					// Check to see if the numberGuess is working. 
					console.log(numberGuess);

					// This sends the number to guess to the #numberToGuess div
					$("#numberToGuess").html(numberGuess);


				};


				function gameWin () {

					song.play();

					wins = wins + 1;

					$("#playerWins").html(wins);

					alert("You Win!");

					crystal1 = CrystalNumber(crystal1);
					crystal2 = CrystalNumber(crystal2);
					crystal3 = CrystalNumber(crystal3);
					crystal4 = CrystalNumber(crystal4);
					console.log(crystal1, crystal2, crystal3, crystal4);		

					counter = 0;

					$("#playerCounter").html(counter);

					numberGuess = Math.floor(Math.random() * 120) + 19;

					// Check to see if the numberGuess is working. 
					console.log(numberGuess);

					// This sends the number to guess to the #numberToGuess div
					$("#numberToGuess").html(numberGuess);

				};


			};

			game();

});		