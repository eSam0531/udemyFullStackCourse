let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

console.log("===using traditional for loop===")
for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

console.log();
console.log("===using simplified loop===")
for (let tempSport of sports){
    if(tempSport == "Cricket"){
        console.log(tempSport + " << Favorite Sport!")
    }else {
        console.log(tempSport);
    }
}