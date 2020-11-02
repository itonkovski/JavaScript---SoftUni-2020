function readTheElements(input) {
    let index = 0;
    while (true) {
        let current = input[index];
        index++;
        if (current === "Stop") {
            break;
        }
        console.log(current);
    }
}
readTheElements(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);