const headquarters = 42; // Scuber's HQ is on 42nd Street

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
  } else {
    return "cannot travel that far"; // More than 2500 feet is not allowed
  }
}
