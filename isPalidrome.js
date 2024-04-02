var isPalindrome = function(head) {

    let left = head
    
    function checkPalidrome(right){

        if(right === null){
            return true     // checks to see if you reached the end of the list
        }

        let isPalidrome = checkPalidrome(right.next)    // recur to the end first

        isPalidrome = isPalidrome && (left.val === right.val) // check to see if the values match
        left = left.next    // move the left pointer

        return isPalidrome
    }

    return checkPalidrome(head)
};