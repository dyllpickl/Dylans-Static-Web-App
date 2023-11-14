var story_el = document.getElementById("story");
var question_el = document.getElementById("question");
var choice1_button_el = document.getElementById("choice1_button");
var choice2_button_el = document.getElementById("choice2_button");

story_el.innerHTML = start_of_game.introduction;
question_el.innerHTML = start_of_game.begin_prompt;
choice1_button_el.value = "Begin";
choice1_button_el.onclick = route1;
choice2_button_el.disabled = true;

function start_game() {
  story_el.innerHTML = start_of_game.introduction;
  question_el.innerHTML = start_of_game.begin_prompt;
  choice1_button_el.value = "Begin";
  choice1_button_el.onclick = route1();}

function route1() {
  story_el.innerHTML = stage1.backstory;
  question_el.innerHTML = stage1.question;
  choice1_button_el.value = stage1.choice1;
  choice1_button_el.onclick = route1_1();
  choice2_button_el.disabled = false;
  choice2_button_el.style.display="block";
  choice2_button_el.value = stage1.choice2;
  choice2_button_el.onclick = route1_2();}

function route1_1() {
  story_el.innerHTML = stage1_1.backstory;
  question_el.innerHTML = stage1_1.question;
  choice1_button_el.value = stage1_1.choice1;
  choice1_button_el.onclick = route1_1_1();
  choice2_button_el.value = stage1_1.choice2;
  choice2_button_el.onclick = route1_1_2();}

function route1_2() {
  story_el.innerHTML = stage1_2.backstory;
  question_el.innerHTML = stage1_2.question;
  choice1_button_el.value = stage1_2.choice1;
  choice1_button_el.onclick = route1_2_1();
  choice2_button_el.value = stage1_2.choice2;
  choice2_button_el.onclick = route1_2_2();}

function route1_1_1() {
  story_el.innerHTML = stage1_1_1.backstory;
  question_el.innerHTML = stage1_1_1.question;
  choice1_button_el.value = stage1_1_1.choice1;
  choice1_button_el.onclick = end_route1_1_1_1();
  choice2_button_el.value = stage1_1_1.choice2;
  choice2_button_el.onclick = end_route1_1_1_2();}

function route1_1_2() {
  story_el.innerHTML = stage1_1_2.backstory;
  question_el.innerHTML = stage1_1_2.question;
  choice1_button_el.value = stage1_1_2.choice1;
  choice1_button_el.onclick = end_route1_1_2_1();
  choice2_button_el.value = stage1_1_2.choice2;
  choice2_button_el.onclick = end_route1_1_2_2();}

function route1_2_1() {
  story_el.innerHTML = stage1_2_1.backstory;
  question_el.innerHTML = stage1_2_1.question;
  choice1_button_el.value = stage1_2_1.choice1;
  choice1_button_el.onclick = end_route1_2_1_1();
  choice2_button_el.value = stage1_2_1.choice2;
  choice2_button_el.onclick = end_route1_2_1_2();}

function route1_2_2() {
  story_el.innerHTML = stage1_2_2.backstory;
  question_el.innerHTML = stage1_2_2.question;
  choice1_button_el.value = stage1_2_2.choice1;
  choice1_button_el.onclick = end_route1_2_2_1();
  choice2_button_el.value = stage1_2_2.choice2;
  choice2_button_el.onclick = end_route1_2_2_2();}

function ending1_1_1_1() {
  story_el.innerHTML = ending1_1_1_1;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_1_1_2() {
  story_el.innerHTML = ending1_1_1_2;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_1_2_1() {
  story_el.innerHTML = ending1_1_2_1;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_1_2_2() {
  story_el.innerHTML = ending1_1_2_2;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_2_1_1() {
  story_el.innerHTML = ending1_2_1_1;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_2_1_2() {
  story_el.innerHTML = ending1_2_1_2;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_2_2_1() {
  story_el.innerHTML = ending1_2_2_1;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}

function ending1_2_2_2() {
  story_el.innerHTML = ending1_2_2_2;
  question_el.innerHTML = start_of_game.restart_prompt;
  choice1_button_el.value = "Restart";
  choice1_button_el.onclick = start_game();
  choice2_button_el.disabled = true;
  choice2_button_el.style.display="none";}
