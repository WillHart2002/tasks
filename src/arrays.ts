/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //return numbers.length === 0 ? numbers : newA;
    if (numbers.length === 0) return [];
    const newA = [numbers[0], numbers[numbers.length - 1]];
    //const newA: number[] = [];
    //newA.push(numbers[0]);
    //newA.push(numbers[numbers.length - 1]);
    return newA;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((numbers: string): number =>
        isNaN(parseInt(numbers)) === true ? 0 : parseInt(numbers)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    if (amounts.length === 0) return [];
    const no$ = amounts.map((amounts: string): string =>
        amounts[0] === "$" ? amounts.slice(1) : amounts
    );
    const strings = no$.map((no$: string): number =>
        isNaN(parseInt(no$)) === true ? 0 : parseInt(no$)
    );
    return strings;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const arr = messages.filter(
        (messages: string): boolean => messages[messages.length - 1] !== "?"
    );
    const arr2 = arr.map((arr: string): string =>
        arr[arr.length - 1] === "!" ? arr.toUpperCase() : arr
    );
    return arr2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((words: string): boolean => words.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    const rgb = colors.filter(
        (colors: string): boolean =>
            colors === "red" || colors === "blue" || colors === "green"
    );
    if (colors.length === rgb.length) return true;
    else return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const txtsum = sum.toString() + "=";
    const arr = [...addends];
    const firstnum = arr.shift();
    const firstTxtNum = firstnum?.toString();
    const txtnums = arr.map((arr: number): string => "+" + arr.toString());
    const txtnum = txtnums.reduce(
        (totalString: string, line: string) => totalString + line,
        ""
    );
    return txtsum + firstTxtNum + txtnum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negIndex = 0;
    let sum = 0;
    negIndex = values.findIndex((values: number): boolean => values < 0);
    const sumArr = values.slice(0, negIndex);
    const otherArr = values.slice(negIndex + 1, values.length);
    if (negIndex === -1) {
        sum = values.reduce(
            (totalSum1: number, num1: number) => totalSum1 + num1,
            0
        );
    } else {
        sum = sumArr.reduce(
            (totalSum2: number, num2: number) => totalSum2 + num2,
            0
        );
    }
    let ans = [];
    if (negIndex === -1) {
        ans = [...values, sum];
    } else {
        ans = [...sumArr, values[negIndex], sum, ...otherArr];
    }
    return ans;
}
