$(document).ready(function(){

    var Game = function(){};
    newgame = new Game();
    var board = $('.board');

      board.find('td').on('click', function(){

        if ($(this).text() == ""){
            $(this).text('X').css("font-size", "4em").css("text-align", "center");
                newgame.computerPlay();
                newgame.checkWin();
        }
      });

    Game.prototype.computerPlay = function(){
        computerPick();
    };

    Game.prototype.checkWin = function(){
        firstCheck();
        secondCheck();
        thirdCheck();
        fourthCheck();
        fifthCheck();
    };

// go through and tell computer to pick spot with best likelihood of win (3rd spot)
    var computerPick = function() {
        // start checking for winning move
        // if one is free and either row, col, or diagonal are filled
        if ($('.one').text() == '' && (($('.three').text() == 'X' && $('.two').text() == 'X') || ($('.nine').text() == 'X' && $('.five').text() == 'X') || ($('.seven').text() == 'X' && $('.four').text() == 'X' ))) {
            $('.one').text("O").css("font-size", "4em").css("text-align", "center");
            // if two is free...
        } else if ($('.two').text() == '' && ($('.one').text() == 'X' && $('.three').text() == 'X' || $('.eight').text() == 'X' && $('.five').text() == 'X')){
            $('.two').text("O").css("font-size", "4em").css("text-align", "center");
            // if three is free
        } else if ($('.three').text() == '' && ($('.one').text() == 'X' && $('.two').text() == 'X' || $('.seven').text() == 'X' && $('.five').text() == 'X' || $('.nine').text() == 'X' && $('.six').text() == 'X')){
            $('.three').text("O").css("font-size", "4em").css("text-align", "center");
            // four
        } else if ($('.four').text() == '' && ($('.one').text() == 'X' && $('.seven').text() == 'X' || $('.five').text() == 'X' && $('.six').text() == 'X')){
            $('.four').text("O").css("font-size", "4em").css("text-align", "center");
            // five
        } else if ($('.five').text() == '' && ($('.three').text() == 'X' && $('.seven').text() == 'X' || $('.one').text() == 'X' && $('.nine').text() == 'X' || $('.four').text() == 'X' && $('.six').text() == 'X' || $('.two').text() == 'X' && $('.eight').text() == 'X')){
            $('.five').text("O").css("font-size", "4em").css("text-align", "center");
            // six
        } else if ($('.six').text() == '' && ($('.three').text() == 'X' && $('.nine').text() == 'X' || $('.four').text() == 'X' && $('.five').text() == 'X')){
            $('.six').text("O").css("font-size", "4em").css("text-align", "center");
            // seven
        } else if ($('.seven').text() == '' && ($('.one').text() == 'X' && $('.four').text() == 'X' || $('.eight').text() == 'X' && $('.nine').text() == 'X' || $('.five').text() == 'X' && $('.three').text() == 'X')){
            $('.seven').text("O").css("font-size", "4em").css("text-align", "center");
            // eight
        } else if ($('.eight').text() == '' && ($('.seven').text() == 'X' && $('.nine').text() == 'X' || $('.two').text() == 'X' && $('.five').text() == 'X')){
            $('.eight').text("O").css("font-size", "4em").css("text-align", "center");
            // nine
        } else if ($('.nine').text() == '' && ($('.seven').text() == 'X' && $('.eight').text() == 'X' || $('.one').text() == 'X' && $('.five').text() == 'X' || $('.three').text() == 'X' && $('.six').text() == 'X')){
            $('.nine').text("O").css("font-size", "4em").css("text-align", "center");
        // if no winning move, fill in one of empty
        } else if ($('.one').text() == ''){
            $('.one').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.two').text() == ''){
            $('.two').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.three').text() == ''){
            $('.three').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.four').text() == ''){
            $('.four').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.five').text() == ''){
            $('.five').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.six').text() == ''){
            $('.six').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.seven').text() == ''){
            $('.seven').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.eight').text() == ''){
            $('.eight').text("O").css("font-size", "4em").css("text-align", "center");
        } else if ($('.nine').text() == ''){
            $('.nine').text("O").css("font-size", "4em").css("text-align", "center");
        }
    }

// checks for win in in top row, first col, or right diagonal
    var firstCheck = function(player){
        if (board.find('.one').text() !== ''){
            if (board.find('.one').text() == board.find('.two').text()) {
                if (board.find('.one').text() == $('.three').text()) {
                    if (board.find('.one').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }

            if (board.find('.one').text() == board.find('.four').text()) {
                if (board.find('.one').text() == $('.seven').text()) {
                    if (board.find('.one').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }

            if (board.find('.one').text() == board.find('.five').text()) {
                if (board.find('.one').text() == $('.nine').text()) {
                    if (board.find('.one').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }
        }
    };


// checks for win in mid column
     var secondCheck = function(player){
        if (board.find('.two').text() !== ''){
            if (board.find('.two').text() == board.find('.five').text()) {
                if (board.find('.two').text() == $('.eight').text()) {
                    if (board.find('.two').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }
        }
    };

// checks for win in third col and left diagonal
    var thirdCheck = function(player){
        if (board.find('.three').text() !== ''){
            if (board.find('.three').text() == board.find('.six').text()) {
                if (board.find('.three').text() == $('.nine').text()) {
                    if (board.find('.three').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }

            if (board.find('.three').text() == board.find('.five').text()) {
                if (board.find('.three').text() == $('.seven').text()) {
                    if (board.find('.three').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }
        }
    };


// checks for win in middle row
    var fourthCheck = function(player){
        if (board.find('.four').text() !== ''){
            if (board.find('.four').text() == board.find('.five').text()) {
                if (board.find('.four').text() == $('.six').text()) {
                    if (board.find('.four').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }
        }
    };

// checks for win in bottom row
     var fifthCheck = function(player){
        if (board.find('.seven').text() !== ''){
            if (board.find('.seven').text() == board.find('.eight').text()) {
                if (board.find('.seven').text() == $('.nine').text()) {
                    if (board.find('.seven').text() == "X") {
                        alert("You win, okay?");
                    }
                    else {
                        alert("Try again next time!");
                    }
                }
            }
        }

    };

    var clearBoard = function(){
        $('.btn').on('click',function(){
            $('td').each(function(){
                $(this).text('');
            });
        });
    };

    clearBoard();

});