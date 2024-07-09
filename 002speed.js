//QUESTION-TWO

let speedOfCar = 76;//speedOfCar variable declared and assigned a value

let speedLimit =70//speedLImit variable declared and assigned a value

if (speedOfCar<=speedLimit){// Checks if speedOfCar is less than or equal to speedLimit. If true, it logs "Ok" indicating the speed is within the limit
    console.log('Ok');
    return

}else if(speedOfCar>speedLimit  && speedOfCar<70+2*12){ // check if speedOfCar is greater than speedLimit and less than speedLimit + 2 * 12. This ensures that demerit points are calculated only when the speed exceeds the limit but is within the range where demerit points apply.
    let kmAboveSpeedLimit = speedOfCar-speedLimit;
    const kmPerDemeritPoint = 5; 
    let demeritPoints = Math.floor(kmAboveSpeedLimit/kmPerDemeritPoint);

    console.log(`Points: ${demeritPoints}`);

} 
else if (speedOfCar >= (speedLimit+2*12)) {//Third else if Statement: Checks if speedOfCar exceeds
    console.log('License Suspended');
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

