function personalTitle(age, gender) {
    age = Number(age);
    if (gender =='m') {
        if (age >= 16) {
            console.log("Mr.");
        }
        else{
            console.log("Master");
            
        }
    }
    else{
        if (age >= 16) {
            console.log("Ms.");
        }
        else{
            console.log("Miss");
        }
    }
}
personalTitle("12",
"f");