function charInRange(firstChar,secondChar){
    
    let firstSymbol = firstChar.charCodeAt(0);
    let secondSymbol = secondChar.charCodeAt(0);
    let minsFirstSymbol = Math.min(firstSymbol, secondSymbol);
    let maxSecondSymbol = Math.max(firstSymbol, secondSymbol);
    let result = [];

    for (let i = minsFirstSymbol + 1; i < maxSecondSymbol; i++) {
        let currentSybol = String.fromCharCode(i);
 result.push(currentSybol);
        
    }    
        console.log(result.join(" "))
    

}
charInRange("a","d");
charInRange('C','#');