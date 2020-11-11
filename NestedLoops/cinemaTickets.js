function solve(input) {
    let movieName = input.shift();
    let totalTickets = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidsCounter = 0;
    while (movieName !== 'Finish') {
        let freeSpace = Number(input.shift());
        let ticketType = input.shift();
        let soldTickets = 0;
        while (ticketType !== 'End') {
            if (ticketType === 'student') {
                studentCounter++;
            } else if (ticketType === 'standard') {
                standardCounter++;
            } else {
                kidsCounter++;
            }
            totalTickets++;
            soldTickets++;
            if (soldTickets >= freeSpace) {
                break;
            }
            ticketType = input.shift();
        }
        console.log(`${movieName} - ${((soldTickets / freeSpace) * 100).toFixed(2)}% full.`);
        movieName = input.shift();
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentCounter / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCounter / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsCounter / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
