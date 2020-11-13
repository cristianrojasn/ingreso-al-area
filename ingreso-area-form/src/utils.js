const Utf8ToAscii = (word) => {
    let newWord = (word || '' ).toLowerCase()
    newWord = newWord.replace('á', 'a')
    newWord = newWord.replace('é', 'e')
    newWord = newWord.replace('í', 'i')
    newWord = newWord.replace('ó', 'o')
    newWord = newWord.replace('ú', 'u')
    newWord = newWord.replace('ñ', 'n')
    return newWord
}
export default Utf8ToAscii