let size = ""
let array = ""
let arr = []
function sort(){
    //Take size data
    let sizeint = 0
    size = document.getElementById("size").value
    sizeint = parseInt(size)

    //Take input data
    let i,j = 0
    let arrint = []
    array = document.getElementById("Array").value
    arr = array.split(" ")
    console.log(arr)
    if (arr.length == sizeint){
        for(i=0;i<sizeint;i++){
            arrint[i] = parseInt(arr[i])
        }
        for(i=0;i<sizeint;i++){
            for(j=i+1;j<sizeint;j++){
                if(arrint[i]>arrint[j]){
                    temp = arrint[i]
                    arrint[i] = arrint[j]
                    arrint[j] = temp
                }
            }
        }
        document.getElementById("p").innerHTML = "Sorted Array:  " + arrint

    }
    else if(arr.length < sizeint){
        document.getElementById("p").innerHTML = "More elements than given size"
    }
    else{
        document.getElementById("p").innerHTML = "Less elements than given size"    
    }
}
let sizeS = ""
let arrayS = ""
let arrS = []
