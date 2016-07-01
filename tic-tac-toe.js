function TicTacToe() {
  this.playOnPlaya = {"1": 8, "2": 1, "3":6, "4":3, "5":5, "6":7, "7":4, "8":9, "9":2};
  this.player1 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
  this.player2 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
  this.plays = 0;
  // this.winner = false;
  this.player = this.player1;
}

TicTacToe.prototype = {
  hasWon: function() {
      if (this.plays > 4) {
         if (
         ((this.player[1] + this.player[2] + this.player[3]) == 15) ||
         ((this.player[4] + this.player[5] + this.player[6]) == 15) ||
         ((this.player[7] + this.player[8] + this.player[9]) == 15) ||

         ((this.player[1] + this.player[5] + this.player[9]) == 15) ||
         ((this.player[3] + this.player[5] + this.player[7]) == 15) ||

         ((this.player[1] + this.player[4] + this.player[7]) == 15) ||
         ((this.player[3] + this.player[6] + this.player[9]) == 15) ||
         ((this.player[2] + this.player[5] + this.player[8]) == 15) )  {
          //  this.winner = true;
          return true;
         }
       }
     }

}


$(document).ready( function() {
  var ttt = new TicTacToe();
  $("table tr td").on('click', function(event) {
    var text = $(this).text();
    var num = $(this).data().user;
    var turn = $("p").text();
    if (ttt.hasWon()) {
      return false;
    } else if ((ttt.plays%2 == 0) && (text ==' ⚪️ ')) {
      play('🍟','🍔', ttt.player1, $(this))
    } else if ((ttt.plays%2 == 1) && (text ==' ⚪️ '))  {
      play('🍔','🍟', ttt.player2, $(this))
    }

    if (ttt.hasWon()) {
      var r= $('<input id="playagain" type="button" value="Play again?"/>');
      $("h3").append(r);
      var headtext = $("h2").text()
      $("h2").text(headtext.replace(headtext, $(this).text()+" is the ULTIMATE CHAMPION!"));
      $("p").text(turn.replace(turn, "Game Over 🍕"));
    } else if (this.plays == 9)  {
      var r= $('<input id="playagain" type="button" value="Play again?"/>');
      $("h3").append(r);
      var headtext = $("h2").text()
      $("p").text(turn.replace(turn, "Game Over 🍕"));
      $("h2").text(headtext.replace(headtext, "It's a tie! 🍻"));
    }

    // reset
    $("#playagain").on('click', function(e) {
      var newboard = $("table tr td").text();
      $("table tr td").empty().text(" ⚪️ ").removeClass('show');
      $("#playagain").remove()
      $("h2").text(headtext.replace(headtext, ""));
      $("p").text(turn.replace(turn, "Turn: 🍟"));

      ttt = new TicTacToe()
    })

    // emoji 1 is fries for player%2 ==0
    // playa should be ttt.player1 or 2
     function play(emoji1, emoji2, playa, thss) {
         thss.text(text.replace('⚪️', emoji1));
         console.log("play thss: ", thss)
         console.log("play text: ", text)
         playa[num] = ttt.playOnPlaya[num]
         ttt.player = ttt.player1;
         thss.addClass('show');
         $("p").text(turn.replace(emoji1, emoji2))
         ttt.plays += 1;
     }
  })
})
