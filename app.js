(function(){
	var app = angular.module('calcutta', [ ]);

	var GAMES = 7;

	app.controller('TeamsController', function() {
		this.players = 20;
		this.numTeams = 5;
		this.ante = 35;
		this.totalPot = 0;

		this.calcPot = function() {
			this.totalPot = (parseInt(this.players) * parseInt(this.ante) || 0);
		};

		this.getTeamList = function() {
			var teamList = [];
			for (i = 0; i < this.numTeams; i++) {
				teamList.push(
					{
						junk: null,
						frontA: null,
						frontB: null,
						backA: null,
						backB: null,
						totalA: null,
						totalB: null,
						junkPay: 0,
						frontAPay: 0,
						frontBPay: 0,
						backAPay: 0,
						backBPay: 0,
						totalAPay: 0,
						totalBPay: 0,
						payout: 0,
					}
				);
			}
			this.teams = teamList	
		};

		this.setTotalA = function(index) {
			this.teams[index].totalA = (parseInt(this.teams[index].frontA) || 0) + (parseInt(this.teams[index].backA) || 0);
		};

		this.setTotalB = function(index) {
			this.teams[index].totalB = (parseInt(this.teams[index].frontB) || 0) + (parseInt(this.teams[index].backB) || 0);
		};

		this.calculate = function() {
			// JUNK CALCS
			var winCount = 0;
			var winScore = -100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].junk) > winScore) {
					winScore = this.teams[i].junk;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].junk == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].junkPay = 0;
				if (this.teams[i].junk == winScore) {
					this.teams[i].junkPay = this.totalPot / GAMES / winCount;
				}
			}

			// FRONTA CALCS
			winCount = 0;
			winScore = 100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].frontA) < winScore) {
					winScore = this.teams[i].frontA;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].frontA == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].frontAPay = 0;
				if (this.teams[i].frontA == winScore) {
					this.teams[i].frontAPay = this.totalPot / GAMES / winCount;
				}
			}

			// FRONTB CALCS
			winCount = 0;
			winScore = 100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].frontB) < winScore) {
					winScore = this.teams[i].frontB;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].frontB == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].frontBPay = 0;
				if (this.teams[i].frontB == winScore) {
					this.teams[i].frontBPay = this.totalPot / GAMES / winCount;
				}
			}

			// BACKA CALCS
			winCount = 0;
			winScore = 100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].backA) < winScore) {
					winScore = this.teams[i].backA;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].backA == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].backAPay = 0;
				if (this.teams[i].backA == winScore) {
					this.teams[i].backAPay = this.totalPot / GAMES / winCount;
				}
			}

			// BACKB CALCS
			winCount = 0;
			winScore = 100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].backB) < winScore) {
					winScore = this.teams[i].backB;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].backB == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].backBPay = 0;
				if (this.teams[i].backB == winScore) {
					this.teams[i].backBPay = this.totalPot / GAMES / winCount;
				}
			}

			// TOTALA CALCS
			winCount = 0;
			winScore = 100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].totalA) < winScore) {
					winScore = this.teams[i].totalA;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].totalA == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].totalAPay = 0;
				if (this.teams[i].totalA == winScore) {
					this.teams[i].totalAPay = this.totalPot / GAMES / winCount;
				}
			}

			// TOTALB CALCS
			winCount = 0;
			winScore = 100;
			for (i = 0; i < this.numTeams; i++) {
				if (parseInt(this.teams[i].totalB) < winScore) {
					winScore = this.teams[i].totalB;
				}
			}
			
			for (i = 0; i < this.numTeams; i++) {
				if (this.teams[i].totalB == winScore) {
					winCount++;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].totalBPay = 0;
				if (this.teams[i].totalB == winScore) {
					this.teams[i].totalBPay = this.totalPot / GAMES / winCount;
				}
			}

			for (i = 0; i < this.numTeams; i++) {
				this.teams[i].payout = this.teams[i].junkPay + this.teams[i].frontAPay + this.teams[i].frontBPay + this.teams[i].backAPay + this.teams[i].backBPay + this.teams[i].totalAPay + this.teams[i].totalBPay;
			}
		};

		this.getTeamList();
		this.calcPot();
	});

})();