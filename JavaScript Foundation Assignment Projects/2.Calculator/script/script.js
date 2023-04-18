
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    var res = document.getElementById("result")

    document.getElementById("add").addEventListener("click", function() {
        res.value = parseInt(n1.value)+parseInt(n2.value)
    })
    document.getElementById("sub").addEventListener("click", function() {
        res.value = parseInt(n1.value)-parseInt(n2.value)
    })
    document.getElementById("multi").addEventListener("click", function() {
        res.value = parseInt(n1.value)*parseInt(n2.value)
    })
    document.getElementById("divi").addEventListener("click", function() {
        res.value = parseInt(n1.value)/parseInt(n2.value)
    })