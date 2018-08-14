var words = ["area", "book", "business", "case", "child", "company", "country", "day", "eye", "fact", "family", "government", "group", "hand", "home", "job", "life", "lot", "man", "money", "month", "mother", "Mr", "night", "number", "part", "people", "place", "point", "problem", "program", "question", "right", "room", "school", "state", "story", "student", "study", "system", "thing", "time", "water", "way", "week", "woman", "word", "work", "world", "year"];

function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

var counter = 0;

$(document).ready(function(){
  function randomWord() {
    return words[Math.floor(Math.random()*49)]
  }

  var mysteryWord = randomWord().split("");
  var blanks = []
  console.log(mysteryWord);
  mysteryWord.forEach(function(letter){
    blanks.push("  __  ")
  });
  $("#blanks").append(blanks);


$(".guess-form").submit(function(event){
  event.preventDefault();

  var guessLetter = $("#guess").val().toLowerCase();

  if ((/[A-Za-z]/).test(guessLetter) && guessLetter.length == 1){
    $("#usedletters").append(guessLetter);

    if (mysteryWord.includes(guessLetter)){
      var indexes = getAllIndexes(mysteryWord, guessLetter);
      indexes.forEach(function(pos){
        blanks[pos] = guessLetter
        $("#blanks").html(blanks);
      })
    } else {
      counter += 1;
      console.log(counter);
      if(counter > 5){
        alert("You lose! Play again!")
        location.reload();
      }
    }
  }
  $("#guess").val("");

  if(blanks.includes("  __  ") === false){
    alert("You win! Play again!");
    location.reload();
  };
  });
});
