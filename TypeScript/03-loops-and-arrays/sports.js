var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
console.log("===using traditional for loop===");
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log();
console.log("===using simplified loop===");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << Favorite Sport!");
    }
    else {
        console.log(tempSport);
    }
}
