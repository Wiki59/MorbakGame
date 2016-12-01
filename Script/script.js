$("#jouer").one("click", function () {
    matrice = initMatrice();
    allInterval = initMatrice(0);
    numbers = initMatrice(0);

    for (i = 0; i < matrice.length; i++) {
        for (j = 0; j < matrice[i].length; j++) {
            allInterval[i][j] = randNumb(matrice[i][j], true);
        }
    }
    $(this).html("Spin");
    $(this).one("click", function () {
        for (i = 0; i < matrice.length; i++) {
            for (j = 0; j < matrice[i].length; j++) {
                numbers[i][j] = randNumb(matrice[i][j], false, allInterval[i][j]);
            }
        }
        setTimeout(function () {
            solve(numbers, matrice);
        }, 3000);
        $(this).html("Good luck");
        $(this).css("cursor", "default");
    })
});


$.post("score.php", {
    pseudo: "bob",
    score: "5"
}, function() {
    console.log("ok");
});


initMatrice = function (toInit) {
    var ret = Array();
    for (i = 0, x = 1; i < 3; i++, x++) {
        var tmp = new Array();
        for (j = 0, y = 1; j < 3; j++, y++) {
            if (toInit == undefined) {
                tmp[j] = $("#" + x + y);
            } else {
                tmp[j] = toInit;
            }
        }
        ret[i] = tmp;
    }
    return ret;
};

randNumb = function (target, infinite, toClear) {
    var number = Math.floor(Math.random() * 6 + 1);
    if (infinite == true) {
        return setInterval(function () {
            target.html(Math.floor(Math.random() * 6 + 1));
        }, 150);
    } else {
        setTimeout(function () {
            clearInterval(toClear);
            target.html(number);
        }, Math.floor(Math.random() * 3000));
        return number;
    }
};

solve = function (numbers, matrice) {
    var point = 0;
    var elem = "background";
    var toCss = "rgba(0, 250, 20, 0.5)";

    // Check matrice time
    for (i = 0; i < 3; i++) {
        if (numbers[i][0] == numbers[i][1] && numbers[i][1] == numbers[i][2]) {
            matrice[i][0].css(elem, toCss);
            matrice[i][0].css(elem, toCss);
            matrice[i][1].css(elem, toCss);
            matrice[i][2].css(elem, toCss);
            point += numbers[i][0];
        }
    }
    for (i = 0; i < 3; i++) {
        if (numbers[0][i] == numbers[1][i] && numbers[1][i] == numbers[2][i]) {
            matrice[0][i].css(elem, toCss);
            matrice[1][i].css(elem, toCss);
            matrice[2][i].css(elem, toCss);
            point += numbers[0][i];
        }
    }
    if (numbers[0][0] == numbers[1][1] && numbers[1][1] == numbers[2][2]) {
        matrice[0][0].css(elem, toCss);
        matrice[1][1].css(elem, toCss);
        matrice[2][2].css(elem, toCss);
        point += numbers[1][1];
    }
    if (numbers[0][3] == numbers[1][1] && numbers[1][1] == numbers[2][0]) {
        matrice[0][3].css(elem, toCss);
        matrice[1][1].css(elem, toCss);
        matrice[2][0].css(elem, toCss);
        point += numbers[1][1];
    }

    // Show score
    var initialMargin = $("#morbak").css("margin");
    $("#morbak").animate({
        margin: "0 0"
    }, 1000);
    result = (point > 0) ? ((point > 1) ? "Vous avez gagné " + point + " points" : "Vous avez gagné " + point + " point") : "Vous n'avez rien gagné";
    setTimeout(function () {
        var buttonJouer = $("#jouer");
        var bouttonSave = $("#saveIt");
        var resultPanel = $("#result");
        buttonJouer.html("Reload");
        bouttonSave.show();
        resultPanel.html(result);
        resultPanel.show();

        // Reload part
        buttonJouer.one("click", function () {
            resultPanel.hide();
            bouttonSave.hide();
            $("#morbak").animate({
                margin: initialMargin,
            }, 1000, function () {
                $(this).css("margin", "0 auto");
            });
            for (i = 0; i < matrice.length; i++) {
                for (j = 0; j < matrice[i].length; j++) {
                    matrice[i][j].html("?");
                    matrice[i][j].css("background", "transparent");
                }
            }
            buttonJouer.html("Lancer les dés");
            buttonJouer.one("click", function () {
                resultPanel.hide();
                for (i = 0; i < matrice.length; i++) {
                    for (j = 0; j < matrice[i].length; j++) {
                        allInterval[i][j] = randNumb(matrice[i][j], true);
                    }
                }
                $(this).html("Spin");
                $(this).one("click", function () {
                    for (i = 0; i < matrice.length; i++) {
                        for (j = 0; j < matrice[i].length; j++) {
                            numbers[i][j] = randNumb(matrice[i][j], false, allInterval[i][j]);
                        }
                    }
                    setTimeout(function () {
                        solve(numbers, matrice);
                    }, 3000);
                    $(this).html("Good luck");
                    $(this).css("cursor", "default");
                })
            });
        });

        // Save part
        bouttonSave.one("click", function () {
            $("#game").append("<input class='typicalButton' id='pseudoLogger' type='text' placeholder='Pseudo'/>");
            $(this).hide();
            $("#pseudoLogger").on("keypress", function (e) {
                if (e.which === 13) {
                    var pseudo = $(this).val();

                }
            });
        });

    }, 1000);
    return point;
};