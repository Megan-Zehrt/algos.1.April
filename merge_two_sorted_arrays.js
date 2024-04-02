var list1 = [1,2,4]
var list2 = [1,3,4]

var mergeTwoLists = function(list1, list2) {
    
    // base case
    if(!list1){     // if list1 is empty, return list2
        return list2
    }

    if(!list2){     // if list2 is empty, return list1
        return list1
    }

    // recursive function

    if(list1.val < list2.val){ // if the list1's value is less than list2's value
        list1.next = mergeTwoLists(list1.next, list2) //  the current node from list1 should come before the current node from list2
        return list1    //  we set the next pointer of the current node in list1 to the result of recursively merging list1.next with list2. This step effectively links the merged part of list1 with the rest of list1 and list2.
    }
    else{   // if the list2's value is less than list1's value
        list2.next = mergeTwoLists(list1, list2.next) // the current node from list2 should come before the current node of list1
        return list2
    }
};

console.log(mergeTwoLists(list1, list2))