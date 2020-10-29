function birthdayParty(rent) {
    rent = Number(rent);
    let cake = rent * 20 / 100;
    let drinks = cake - (cake * 0.45);
    let animator = rent / 3;
    let totalSum = rent + cake + drinks + animator;
    console.log(totalSum);
}

birthdayParty("3720")