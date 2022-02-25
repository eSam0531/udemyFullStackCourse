import { Coach } from "./coach";
import { CricketCoach } from "./cricketCoach";
import { GolfCoach } from "./golfCoach";

let myCricketcoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCricketcoach);
theCoaches.push(myGolfCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}