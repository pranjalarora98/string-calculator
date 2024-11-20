export const add = (numbers) => {
    if (numbers === "") {
        return 0; // If the string is empty, return 0
    }

    let delimiter = /[,\n]/; // Default delimiters are comma and newline
    let numString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const customDelimiterSection = numbers.substring(2, delimiterEndIndex);

        // Extract custom delimiters
        const customDelimiters = customDelimiterSection.match(/(\[.*?\])/g);
        if (customDelimiters) {
            // Escape special regex characters and join them with OR
            const escapedDelimiters = customDelimiters
                .map(d => d.replace(/[\[\]\\\.\+\*\?\^\$\(\)\[\]\{\}\|]/g, '\\$&')) // Escape special characters
                .join('|');
            delimiter = new RegExp(escapedDelimiters);
        } else {
            // If no custom delimiters found, just use the first delimiter
            delimiter = new RegExp(customDelimiterSection.replace(/[\[\]]/g, ''));
        }

        numString = numbers.substring(delimiterEndIndex + 1);
    }

    // Split numbers using the delimiter(s) and clean up any extra spaces or empty values
    const numArray = numString.split(delimiter)
        .filter(num => num.trim() !== "") // Remove any empty strings
        .map(Number);

    // Handle negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    // Filter out numbers greater than 1000
    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}
