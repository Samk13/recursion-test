// recursion fundemanntal

// countdown function
function countDown(num) {
    console.log(num);
    if (num != 0) {
        num--;
        return countDown(num);
    }
    return
}
// countDown(19) // 19 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0

// summ an array of numbers

function sum(arr) {
    console.log(arr);
    if (arr.length === 0) {
        return 0;
    } else {
        const [head, ...rest] = arr
        return head + sum(rest)
    }
}

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 15

// calculate the power of a number

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else {
        return base * power(base, exponent - 1);
    }
}

// console.log(power(10, 3)); // 1000

// fill array with random numbers

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// iterate throw tree structure


const root = {
    node: 'root',
    children: [
        {
            node: 'child1',
            children: []
        },
        {
            node: 'child2',
            children: [
                {
                    node: 'child2.1',
                    children: [
                        {
                            node: 'child2.1.1',
                            children: []
                        },
                        {
                            node: 'child2.1.2',
                            children: []
                        }
                    ]
                },
                {
                    node: 'child2.2',
                    children: []
                }
            ]
        }
    ]
}

function printTree({ node, children }) {
    console.group(node)
    children.forEach(child => printTree(child))
    console.groupEnd(node)
}

printTree(root)
//root
// child1
// child2
//   child2.1
//     child2.1.1
//     child2.1.2
//   child2.2