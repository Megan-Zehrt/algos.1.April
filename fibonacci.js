var fib = function(n) {
    
    let table = [0,1]



    // creating fibonacci sequence
    while(table.length != n+1){
        let first = table[table.length-1]
        let second = table[table.length-2]

        let sum = first + second
        table.push(sum)
    }

    // base case
    if(n <= 1){
        return n
    }

    // final sum
    let expected = table[n] = table[n-1] + table[n-2]

    return expected
};