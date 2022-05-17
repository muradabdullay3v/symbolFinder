function symbolCount(string) {
    let counter = 0;
    let olanlar = [];
    var isExists = false;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if(string[i] === string[j]){
                counter++;
            }
        }
        for (let m = 0; m < string.length; m++) {
            if(string[i] === olanlar[m]){
                isExists = true;
            }
        }
        if(!isExists){
            olanlar[i] = string[i];
        }
        if(olanlar[i] != undefined){
            console.log(`${olanlar[i]} : ${counter}`);
        }
        counter = 0;
        isExists = false;
    }
}

symbolCount("This is my example");