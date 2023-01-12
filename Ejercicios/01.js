
function palabraPalindromo (palabra){

    let size = palabra.length;
    let sizeRound = Math.round(size/2);
    let fp = string.substring(sizeRound).split("").reverse().join("");

    return string.startsWith(fp);
}

