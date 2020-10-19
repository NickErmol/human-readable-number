module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 21) {
        return numbers[number];
    } else if (number < 100) {
        let dozen = dozens[Math.floor(number / 10) - 2];
        let num = number % 10 === 0 ? '': numbers[number % 10];
        return `${dozen.trim()} ${num.trim()}`.trim(); 
    }else {
        let hundred = numbers[Math.floor(number / 100)];
        let tempHundred = Math.floor(number / 100);
        if (number % 100 === 0){
            return `${hundred} hundred`;
        } else if (number - tempHundred * 100 < 21) {
            let num = numbers[(number - tempHundred * 100)];
            return `${hundred.trim()} hundred ${num.trim()}`.trim();
        } else {

            let num = number % 10 === 0 ? '': numbers[number % 10];
            let dozen = dozens[Math.floor((number - tempHundred * 100) / 10) - 2];
            return `${hundred.trim()} hundred ${dozen.trim()} ${num.trim()}`.trim();
        }
    }
}
