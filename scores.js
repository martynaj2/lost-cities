function gatherScores(scoreInputName, sumInputName) {
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
    document.getElementById("p1_final").value = 
        gatherScores("p1g1", "p1g1_score") +
        gatherScores("p1g2", "p1g2_score") +
        gatherScores("p1g3", "p1g3_score");
    document.getElementById("p2_final").value = 
        gatherScores("p2g1", "p2g1_score") +
        gatherScores("p2g2", "p2g2_score") +
        gatherScores("p2g3", "p2g3_score");

    var winner = "p1_final";
    var loser = "p2_final";
    if(document.getElementById("p2_final").value > document.getElementById("p1_final").value) {
        loser = [winner, winner = loser][0];
    }
    document.getElementById(winner).style.color = "#eee";
    document.getElementById(winner).style.backgroundColor = "#33ff33";
    document.getElementById(loser).style.color = "#eee";
    document.getElementById(loser).style.backgroundColor = "#ff3333";
}