var story_el = document.getElementById("story");
var question_el = document.getElementById("question");
story_el.textContent = start_of_game.introduction;
question_el.textContent = start_of_game.begin_prompt;

function start_game() {
  story_el.textContent = start_of_game.introduction;
  question_el.textContent = start_of_game.begin_prompt;}
