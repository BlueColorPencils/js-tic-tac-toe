// function TicTacToe() {
//
// }
//
// TicTacToe.prototype = {
// }


$(document).ready( function() {
  var playOnPlaya = {"1": 8, "2": 1, "3":6, "4":3, "5":5, "6":7, "7":4, "8":9, "9":2};
  var player1 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
  var player2 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
  var plays = 0;
  var winner = false;
  var player = player1;

  $("table tr td").on('click', function(event) {
    var text = $(this).text();
    var num = $(this).data().user;
    var turn = $("p").text();
    if (winner == true) {
      return false;
    } else if ((plays%2 == 0) && (text ==' ⚪️ ')) {
      $(this).text(text.replace('⚪️', '🍟'));
      player1[num] = playOnPlaya[num]
      player = player1;
      $(this).addClass('show');
      $("p").text(turn.replace('🍟', '🍔'))
      plays += 1;
    } else if ((plays%2 == 1) && (text ==' ⚪️ '))  {
      $(this).text(text.replace('⚪️', '🍔'));
      player2[num] = playOnPlaya[num]
      player = player2;
      $(this).addClass('show');
        $("p").text(turn.replace('🍔','🍟'))
      plays += 1;
    }

    if (plays > 4) {
       if (
       ((player[1] + player[2] + player[3]) == 15) ||
       ((player[4] + player[5] + player[6]) == 15) ||
       ((player[7] + player[8] + player[9]) == 15) ||

       ((player[1] + player[5] + player[9]) == 15) ||
       ((player[3] + player[5] + player[7]) == 15) ||

       ((player[1] + player[4] + player[7]) == 15) ||
       ((player[3] + player[6] + player[9]) == 15) ||
       ((player[2] + player[5] + player[8]) == 15) )  {
         winner = true;
       }
     }

    if (winner == true) {
     var r= $('<input id="playagain" type="button" value="Play again?"/>');
        $("h3").append(r);
      var headtext = $("h2").text()
        $("h2").text(headtext.replace(headtext, $(this).text()+" is the ULTIMATE CHAMPION!"));
        $("p").text(turn.replace(turn, "Game Over 🍕"));
    } else if (plays == 9)  {
        var r= $('<input id="playagain" type="button" value="Play again?"/>');
        $("h3").append(r);
        var headtext = $("h2").text()
        $("p").text(turn.replace(turn, "Game Over 🍕"));
        $("h2").text(headtext.replace(headtext, "It's a tie! 🍻"));
    }


    $("#playagain").on('click', function(e) {
      var newboard = $("table tr td").text();
      $("table tr td").empty().text(" ⚪️ ").removeClass('show');
      $("#playagain").remove()
      $("h2").text(headtext.replace(headtext, ""));
      $("p").text(turn.replace(turn, "Turn: 🍟"));

      playOnPlaya = {"1": 8, "2": 1, "3":6, "4":3, "5":5, "6":7, "7":4, "8":9, "9":2};
      player1 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
      player2 = {"1":0 , "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0};
      plays = 0;
      winner = false;
      player = player1;

    })
  })

})
