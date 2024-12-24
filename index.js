// Define the headquarters block
const headquarters = 42;

// Function to calculate distance in blocks
function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquarters);
}

// Function to calculate distance in feet (1 block = 264 feet)
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free for the first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return ((distance - 400) * 0.02); 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // Not allowed for distances over 2500 feet
  }
}

// Export functions for testing
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
