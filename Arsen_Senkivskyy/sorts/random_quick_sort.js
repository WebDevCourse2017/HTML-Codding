/**
 * Created by arsen on 27.11.17.
 */
function swap(lst, i, j){
    var temp = lst[i];
    lst[i] = lst[j];
    lst[j] = temp;
}


function partition(arr, pivot, left, right){
    pivotValue = arr[pivot],
        partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function quickSort(arr, left, right){
    var len = arr.length,
        pivot,
        partitionIndex;


    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([5,4,3,2,1,0],0,Math.floor(Math.random()*(5-0+1)+0)));
