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

function clearStyle(elementId) {
    document.getElementById(elementId).style.color = "";
    document.getElementById(elementId).style.backgroundColor = "";
    document.getElementById(elementId).style.backgroundImage = "none";
}

function calculate() {
    var player1 = parseInt(score("p1g1", "p1g1_score")
        + score("p1g2", "p1g2_score") + score("p1g3", "p1g3_score"));
    var player2 = parseInt(score("p2g1", "p2g1_score")
        + score("p2g2", "p2g2_score") + score("p2g3", "p2g3_score"));

    document.getElementById("p1_final").value = "Score: " + player1;
    document.getElementById("p2_final").value = "Score: " + player2;

    clearStyle("p1_final");
    clearStyle("p2_final");

    if(player1 != player2) {
        var loser = "p2_final";
        var winner = "p1_final";
        if(player2 > player1) { loser = [winner, winner = loser][0]; }
        document.getElementById(winner).style.color = "#eee";
        document.getElementById(winner).style.backgroundColor = "#33dd33";
        document.getElementById(winner).style.backgroundImage = "url('winner.png')";
        document.getElementById(winner).style.backgroundPosition = "5px 4px";
        document.getElementById(winner).style.backgroundRepeat = "no-repeat";
        document.getElementById(winner).style.backgroundSize = "20px 20px";
        document.getElementById(loser).style.color = "#eee";
        document.getElementById(loser).style.backgroundColor = "#ff3333";
    }
}