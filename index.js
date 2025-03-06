// Function to greet based on the ride distance
function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return 'This one is on me!';
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

// Function to check the city
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to return different responses based on the tip
function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}

// Export the functions so they can be used in tests
module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};
