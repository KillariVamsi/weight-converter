// Converter // Converter // Converter
function convert() {

    var userValue = document.getElementById("num1").value
    var s1 = document.getElementById("c1").value
    var s2 = document.getElementById("c2").value
    var output = document.getElementById("num2")

    if (s1 == "Gram" && s2 == "Kilogram") {
        var calc2 = userValue * 0.001
        output.value = calc2
    }
    else if (s1 == "Gram" && s2 == "Pound") {
        var calc2 = userValue * 0.00220462
        output.value = calc2
    }
    else if (s1 == "Gram" && s2 == "Tonne") {
        var calc2 = userValue * 0.000001
        output.value = calc2
    }
    else if (s1 == "Gram" && s2 == "Gram") {
        var calc2 = userValue * 1
        output.value = calc2
    }
    
    if (s1 == "Kilogram" && s2 == "Gram") {
        var calc2 = userValue * 1000
        output.value = calc2
    }
    else if (s1 == "Kilogram" && s2 == "Pound") {
        var calc2 = userValue * 2.20462
        output.value = calc2
    }
    else if (s1 == "Kilogram" && s2 == "Tonne") {
        var calc2 = userValue * 0.001
        output.value = calc2
    }
    else if (s1 == "Kilogram" && s2 == "Kilogram") {
        var calc2 = userValue * 1
        output.value = calc2
    }
    if (s1 == "Pound" && s2 == "Gram") {
        var calc2 = userValue * 453.592
        output.value = calc2
    }
    else if (s1 == "Pound" && s2 == "Kilogram") {
        var calc2 = userValue * 0.453592
        output.value = calc2
    }
    else if (s1 == "Pound" && s2 == "Tonne") {
        var calc2 = userValue * 0.000453592
        output.value = calc2
    }
    else if (s1 == "Pound" && s2 == "Pound") {
        var calc2 = userValue * 1
        output.value = calc2
    }
    if (s1 == "Tonne" && s2 == "Gram") {
        var calc2 = userValue * 1000000
        output.value = calc2
    }
    else if (s1 == "Tonne" && s2 == "Kilogram") {
        var calc2 = userValue * 1000
        output.value = calc2
    }
    else if (s1 == "Tonne" && s2 == "Pound") {
        var calc2 = userValue * 2204.62
        output.value = calc2
    }
    else if (s1 == "Tonne" && s2 == "Tonne") {
        var calc2 = userValue * 1
        output.value = calc2
    }
}

