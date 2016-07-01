function TicTacToe() {
  this.playOnPlaya = {"1": 8, "2": 1, "3":6, "4":3, "5":5, "6":7, "7":4, "8":9, "9":2};
  this.player1 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
  this.player2 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
  this.player = this.player1;
  this.txt = "";
  this.headtext = "";
  this.plays = 0;
  this.num = 0;
  this.turn = 0;
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
      ((this.player[2] + this.player[5] + this.player[8]) == 15) )
      {
        return true;
      }
    }
  }
}

$(document).ready( function() {
  var ttt = new TicTacToe();

  $("table tr td").on('click', function(event) {
    ttt.txt = $(this).text();
    ttt.num = $(this).data().user;
    ttt.turn = $("p").text();

    if (ttt.hasWon()) {
      return false;
    } else if ((ttt.plays%2 == 0) && (ttt.txt ==' ⚪️ ')) {
      play('🍟','🍔', ttt.player1, $(this))
    } else if ((ttt.plays%2 == 1) && (ttt.txt ==' ⚪️ '))  {
      play('🍔','🍟', ttt.player2, $(this))
    }

    if (ttt.hasWon()) {
      replacements(($(this).text()+" is the ULTIMATE CHAMPION!"));
    } else if (ttt.plays == 9)  {
      replacements("It's a tie! 🍻");
    }

    // reset
    $("#playagain").on('click', function(e) {
      var newboard = $("table tr td").text();
      $("table tr td").empty().text(" ⚪️ ").removeClass('show');
      $("#playagain").remove()
      $("h2").text(ttt.headtext.replace(ttt.headtext, ""));
      $("p").text(ttt.turn.replace(ttt.turn, "Turn: 🍟"));

      ttt = new TicTacToe()
    })

    function play(emoji1, emoji2, playa, thss) {
      thss.text(ttt.txt.replace('⚪️', emoji1));
      playa[ttt.num] = ttt.playOnPlaya[ttt.num]
      ttt.player = playa
      console.log(playa);
      thss.addClass('show');
      $("p").text(ttt.turn.replace(emoji1, emoji2))
      ttt.plays += 1;
    }

     function replacements(replace) {
        var r = $('<input id="playagain" type="button" value="Play again?"/>');
        $("h3").append(r);
        ttt.headtext = $("h2").text()
        $("p").text(ttt.turn.replace(ttt.turn, "Game Over 🍕"));
        $("h2").text(ttt.headtext.replace(ttt.headtext, replace));
     }
  })
})
