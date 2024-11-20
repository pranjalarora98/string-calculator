function Add(numbers) {
    if (!numbers) return 0;

    let delimiters = [',', '\n'];
    let customDelimiterRegex = /^\/\/(.*)\n/;

    let match = numbers.match(customDelimiterRegex);
    if (match) {
        let delimiterSection = match[1];
        numbers = numbers.slice(match[0].length);

        if (delimiterSection.startsWith('[') && delimiterSection.endsWith(']')) {
            delimiters = delimiterSection.split('][').map((delimiter) => {
                return delimiter.replace(/\[|\]/g, '');
            });
        } else {
            delimiters = [delimiterSection];
        }
    }

    let splitPattern = new RegExp(`[${delimiters.map((d) => escapeRegExp(d)).join('')}]`);

    let numberList = numbers.split(splitPattern).map(Number);


    let negatives = numberList.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return numberList.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}


function escapeRegExp(string) {
    return string.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

export default Add;
