let arr=[12,2,24,17,84,47,23,19];
//arr max
// arr min
//difference =max-min
//array reverse

for(let i=0;i<arr.length;i++){
    for(let j=0;j<=arr.length-1;j++){
        if(arr[i]>arr[j]){
            console.log("Is greater number in the array");
        }else if(arr[j]>arr[i]){
            console.log("is greater ");
        }
        console.log(arr[i]);
    }  
    
}


