let size = ""
let array = ""
let arr = []
function display(){
    //Take size data
    let sizeint = 0
    size = document.getElementById("size").value
    sizeint = parseInt(size)

    //Take input data
    let i = 0
    let arrint = []
    let sum = 0
    array = document.getElementById("Array").value
    arr = array.split(" ")
    console.log(arr)
    if (arr.length == sizeint){
        for(i=0;i<sizeint;i++){
            arrint[i] = parseInt(arr[i])
            sum += arrint[i]
        }
        document.getElementById("p").innerHTML = "Sum of Array:  " + sum

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
