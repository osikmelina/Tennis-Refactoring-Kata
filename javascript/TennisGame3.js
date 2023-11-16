const TennisGame3 = function(player1Name, player2Name) {
    this.player1 = 0;
    this.player2 = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame3.prototype.getScore = function() {
    const MAX_REGULAR_POINTS = 4
    const MAX_POINTS_SUM_BEFORE_ADVANTAGE = 6
    let score;
    if ((this.player1 < MAX_REGULAR_POINTS && this.player2 < MAX_REGULAR_POINTS) && (this.player1 + this.player2 < MAX_POINTS_SUM_BEFORE_ADVANTAGE)) {
        var points = ["Love", "Fifteen", "Thirty", "Forty"];
        score = points[this.player1];
        return (this.player1 == this.player2) ? score + "-All" : score + "-" + points[this.player2];
    } else {
        if (this.player1 == this.player2)
            return "Deuce";
        score = this.player1 > this.player2 ? this.player1Name : this.player2Name;
        return ((this.player1 - this.player2) * (this.player1 - this.player2) == 1) ? "Advantage " + score : "Win for " + score;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    playerName == "player1" ? this.player1 += 1 : this.player2 += 1;
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
