//QUESTION-TWO
function speedDetector() {
    // const prompt = require('prompt-sync');

    let speedOfCar = prompt('Enter speed of car');
    let speedLimit = 70;
    let speedLevel;

if (speedOfCar<=speedLimit){// Checks if speedOfCar is less than or equal to speedLimit. If true, it logs "Ok" indicating the speed is within the limit
    speedLevel = 'Ok';

}else if(speedOfCar>speedLimit && speedOfCar<speedLimit+2*12){ // check if speedOfCar is greater than speedLimit and less than speedLimit + 2 * 12. This ensures that demerit points are calculated only when the speed exceeds the limit but is within the range where demerit points apply.
    let kmAboveSpeedLimit = speedOfCar-speedLimit;
    const kmPerDemeritPoint = 5; 
    let demeritPoints = Math.floor(kmAboveSpeedLimit/kmPerDemeritPoint);

    speedLevel = `Points: ${demeritPoints}`;

} 
else if (speedOfCar >= (speedLimit+2*12)) {//Third else if Statement: Checks if speedOfCar exceeds
    speedLevel = 'License Suspended';
}
console.log(`The car speed is ${speedLevel}`);

// Display speed on HTML page
let speed = document.getElementById('speed');
speed.textContent = `Status: ${speedLevel}`;

}






// function demeritPointsCalculator (speed) {
//     let speedLimit = 70;
//     let kmPerDemeritPoint = 5;
//     const pointsPerKmOverLimit = 1;

//     if (speed < speedLimit) {
//         console.log("Ok");
//         return; // No demerit points if speed is below the limit
//     }

//     // Calculate how many km/h over the speed limit
//     const distancdPastLimit = speed - speedLimit;

//     // Calculate demerit points
//     const demeritPoints = Math.floor(distancdPastLimit / kmPerDemeritPoint);

//     // Output demerit points
//     console.log(`Points: ${demeritPoints}`);

//     // Check if license should be suspended
//     if (demeritPoints > 12) {
//         console.log("License suspended");
//     }
// }

