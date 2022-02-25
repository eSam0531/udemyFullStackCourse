"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketCoach_1 = require("./cricketCoach");
const golfCoach_1 = require("./golfCoach");
let myCricketcoach = new cricketCoach_1.CricketCoach();
let myGolfCoach = new golfCoach_1.GolfCoach();
let theCoaches = [];
theCoaches.push(myCricketcoach);
theCoaches.push(myGolfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
