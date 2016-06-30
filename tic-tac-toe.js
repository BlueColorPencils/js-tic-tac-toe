function TicTacToe() {

}

TicTacToe.prototype = {
  // $("table tr").on('click')
}


$(document).ready( function() {
  var player = 0;

  $("table tr td").on('click', function(event) {
    var text = $(this).text();

    if ((player%2 == 0) && ($(this).text()==' ⚪️ ')) {
      $(this).text(text.replace('⚪️', '🍟')).fadeTo( 1, 1 );
      player += 1;
    } else if ((player%2 == 1) && ($(this).text()==' ⚪️ '))  {
      $(this).text(text.replace('⚪️', '🍔')).fadeTo( 1, 1 );
      player += 1;
    }
          
    if (player == 9) {
     var r= $('<input id="playagain" type="button" value="Play again?"/>');
        $("h3").append(r);
      var headtext = $("h2").text()
        $("h2").text(headtext.replace(" ", "It's a tie! 🍻"));
      // ).replace('⚪️','🍻'));
    };


    $("#playagain").on('click', function(e) {
      // $("table tbody tr td").attr({ 'style' : '' });
      // $("td").attr('style', "");
      // $("td").css("style", "");
      // $("td").removeAttr("style")
      var newboard = $("table tr td").text();
        $("table tr td").empty().text("⚪️").fadeTo( 1 , 0);
      var headtext = $("h2").text();
        $("h2").text(headtext.replace("It's a tie! 🍻", ""));
        // console.log("MEOW")
        // $("td").removeAttr("style")
        // console.log("DOG")
        // $("td").removeAttr("style")
        // console.log("UGH")
        // $("tr").removeAttr("style")
        // pieces.removeAttr("style");
        for (var xx = 0; xx < 9; xx++) {
          document.getElementsByTagName("td")[xx].removeAttribute("style");
        }
    })
  // }
    // }
    // console.log("MEOW")
    // console.log(player)
    // (document.body.getElementsByTagName("h1")[k].innerHTML = arrayOfPlaces[k])
  })

})
