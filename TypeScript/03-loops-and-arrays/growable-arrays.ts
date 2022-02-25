let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Baseball");
sportsTwo.push("Football");

for (let tempSport of sportsTwo){
    if(tempSport == "Baseball"){
        console.log(tempSport + " << Favorite Sport!")
    }else {
        console.log(tempSport);
    }
}