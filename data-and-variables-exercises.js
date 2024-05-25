// Variable declarations and assignments
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;

// Print out the type of each variable
console.log(typeof shuttleName);         // Should print "string"
console.log(typeof shuttleSpeedMph);     // Should print "number"
console.log(typeof distanceToMarsKm);    // Should print "number"
console.log(typeof distanceToMoonKm);    // Should print "number"
console.log(typeof milesPerKm);          // Should print "number"

// Calculate the trip to Mars
let milesToMars = distanceToMarsKm * milesPerKm; // Convert km to miles
let hoursToMars = milesToMars / shuttleSpeedMph; // Calculate the hours to Mars
let daysToMars = hoursToMars / 24; // Convert hours to days

// Print the result for Mars trip
console.log(`${shuttleName} will take ${daysToMars.toFixed(2)} days to reach Mars.`);

// Calculate the trip to the Moon
let milesToMoon = distanceToMoonKm * milesPerKm; // Convert km to miles
let hoursToMoon = milesToMoon / shuttleSpeedMph; // Calculate the hours to the Moon
let daysToMoon = hoursToMoon / 24; // Convert hours to days

// Print the result for Moon trip
console.log(`${shuttleName} will take ${daysToMoon.toFixed(2)} days to reach the Moon.`);
