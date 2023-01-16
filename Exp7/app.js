const exec =()=>{
    var first = Number(document.getElementById("firstnum").value)
    var second = Number(document.getElementById("secondnum").value)
    var result = document.getElementById("answer")
    var res = first + second
    
    result.innerHTML = "<p>Sum of numbers: " + res + "</p>"
    
}