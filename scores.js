function score(scoreInputName, sumInputName) {
    var scores = document.getElementsByName(scoreInputName);
    var sum = 0;
    for(var i = 0; i < scores.length; ++i) {
        if(parseInt(scores[i].value)) {
            sum += parseInt(scores[i].value);
        }
    }
    document.getElementById(sumInputName).value = sum;
    return sum;
}

function calculate() {
    var player1 = score("p1g1", "p1g1_score") + score("p1g2", "p1g2_score") + score("p1g3", "p1g3_score");
    var player2 = score("p2g1", "p2g1_score") + score("p2g2", "p2g2_score") + score("p2g3", "p2g3_score");

    document.getElementById("p1_final").value = player1;
    document.getElementById("p2_final").value = player2;

    if(player1 != player2) {
        var loser = "p2_final";
        var winner = "p1_final";
        if(player2 > player1) { loser = [winner, winner = loser][0]; }
        document.getElementById(winner).style.color = "#eee";
        document.getElementById(winner).style.backgroundColor = "#33ff33";
        document.getElementById(loser).style.color = "#eee";
        document.getElementById(loser).style.backgroundColor = "#ff3333";
    }
    else {
        document.getElementById("p1_final").style.color = "";
        document.getElementById("p1_final").style.backgroundColor = "";
        document.getElementById("p2_final").style.color = "";
        document.getElementById("p2_final").style.backgroundColor = "";
    }
}