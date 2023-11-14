function start_game (){
  document.getElementById("ending_path").innerHTML = ""
  document.getElementById("story").innerHTML = start_of_game.introduction;
  document.getElementById("question").innerHTML = start_of_game.begin_prompt;
  document.getElementById("choice1_button").value = "Begin";
  document.getElementById("choice1_button").onclick = route1;
  document.getElementById("choice2_button").style.display="inline"}

function route1 (){
  document.getElementById("story").innerHTML = stage1.backstory;
  document.getElementById("question").innerHTML = stage1.question;
  document.getElementById("choice1_button").value = stage1.choice1;
  document.getElementById("choice1_button").onclick = route1_1;
  document.getElementById("choice2_button").disabled = false;
  document.getElementById("choice2_button").style.display="inline";
  document.getElementById("choice2_button").value = stage1.choice2;
  document.getElementById("choice2_button").onclick = route1_2;}

function route1_1 (){
  document.getElementById("story").innerHTML = stage1_1.backstory;
  document.getElementById("question").innerHTML = stage1_1.question;
  document.getElementById("choice1_button").value = stage1_1.choice1;
  document.getElementById("choice1_button").onclick = route1_1_1;
  document.getElementById("choice2_button").value = stage1_1.choice2;
  document.getElementById("choice2_button").onclick = route1_1_2;}

function route1_2 (){
  document.getElementById("story").innerHTML = stage1_2.backstory;
  document.getElementById("question").innerHTML = stage1_2.question;
  document.getElementById("choice1_button").value = stage1_2.choice1;
  document.getElementById("choice1_button").onclick = route1_2_1;
  document.getElementById("choice2_button").value = stage1_2.choice2;
  document.getElementById("choice2_button").onclick = route1_2_2;}

function route1_1_1 (){
  document.getElementById("story").innerHTML = stage1_1_1.backstory;
  document.getElementById("question").innerHTML = stage1_1_1.question;
  document.getElementById("choice1_button").value = stage1_1_1.choice1;
  document.getElementById("choice1_button").onclick = end_route1_1_1_1;
  document.getElementById("choice2_button").value = stage1_1_1.choice2;
  document.getElementById("choice2_button").onclick = end_route1_1_1_2;}

function route1_1_2 (){
  document.getElementById("story").innerHTML = stage1_1_2.backstory;
  document.getElementById("question").innerHTML = stage1_1_2.question;
  document.getElementById("choice1_button").value = stage1_1_2.choice1;
  document.getElementById("choice1_button").onclick = end_route1_1_2_1;
  document.getElementById("choice2_button").value = stage1_1_2.choice2;
  document.getElementById("choice2_button").onclick = end_route1_1_2_2;}

function route1_2_1 (){
  document.getElementById("story").innerHTML = stage1_2_1.backstory;
  document.getElementById("question").innerHTML = stage1_2_1.question;
  document.getElementById("choice1_button").value = stage1_2_1.choice1;
  document.getElementById("choice1_button").onclick = end_route1_2_1_1;
  document.getElementById("choice2_button").value = stage1_2_1.choice2;
  document.getElementById("choice2_button").onclick = end_route1_2_1_2;}

function route1_2_2 (){
  document.getElementById("story").innerHTML = stage1_2_2.backstory;
  document.getElementById("question").innerHTML = stage1_2_2.question;
  document.getElementById("choice1_button").value = stage1_2_2.choice1;
  document.getElementById("choice1_button").onclick = end_route1_2_2_1;
  document.getElementById("choice2_button").value = stage1_2_2.choice2;
  document.getElementById("choice2_button").onclick = end_route1_2_2_2;}

function end_route1_1_1_1 (){
  document.getElementById("story").innerHTML = ending1_1_1_1;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 1 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_1_1_2 (){
  document.getElementById("story").innerHTML = ending1_1_1_2;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 2 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_1_2_1 (){
  document.getElementById("story").innerHTML = ending1_1_2_1;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 3 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_1_2_2 (){
  document.getElementById("story").innerHTML = ending1_1_2_2;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 4 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_2_1_1 (){
  document.getElementById("story").innerHTML = ending1_2_1_1;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 5 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_2_1_2 (){
  document.getElementById("story").innerHTML = ending1_2_1_2;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 6 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_2_2_1 (){
  document.getElementById("story").innerHTML = ending1_2_2_1;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 7 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

function end_route1_2_2_2 (){
  document.getElementById("story").innerHTML = ending1_2_2_2;
  document.getElementById("question").innerHTML = start_of_game.restart_prompt;
  document.getElementById("ending_path").innerHTML = "Ending 8 of 8"
  document.getElementById("choice1_button").value = "Restart";
  document.getElementById("choice1_button").onclick = start_game;
  document.getElementById("choice2_button").disabled = true;
  document.getElementById("choice2_button").style.display="none";}

start_game();
