function worldSwimmingRecord(recordInSeconds, distanceInMeters, timePerOneMeter) {
    recordInSeconds = Number(recordInSeconds);
    distanceInMeters = Number(distanceInMeters);
    timePerOneMeter = Number(timePerOneMeter);

    let distanceToSwim = distanceInMeters * timePerOneMeter;
    let addedExtraTime = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distanceToSwim + addedExtraTime;

    if(recordInSeconds <= totalTime) {
        let secondsNotEnough = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${secondsNotEnough.toFixed(2)} seconds slower.`);
    }
    else if(recordInSeconds > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }

}

worldSwimmingRecord("55555.67",
"3017",
"5.03");