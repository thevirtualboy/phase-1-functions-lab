// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    let blocks;

    if (pickUpLocation <= 42) {
        blocks = 42 - pickUpLocation;
        return blocks;
    } else if (pickUpLocation > 42) {
        blocks = pickUpLocation - 42;
        return blocks;
    }
}

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else if (start < destination) {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let farePrice;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        farePrice = 0;
        return farePrice;
    } else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
        return farePrice;
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
        return farePrice;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    } 
}