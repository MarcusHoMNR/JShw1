function plus(targetComponentId) {
    var currentNum = parseInt(document.getElementById(targetComponentId).innerHTML)
    document.getElementById(targetComponentId).innerHTML = (currentNum + 1).toString()
    calculateSum()
}     

function minus(targetComponentId) {
    var currentNum = parseInt(document.getElementById(targetComponentId).innerHTML)
    document.getElementById(targetComponentId).innerHTML = (currentNum - 1).toString()
    calculateSum()
} 

function calculateSum() {
    var currentNum1 = parseInt(document.getElementById('addend1').innerHTML)
    var currentNum2 = parseInt(document.getElementById('addend2').innerHTML)

    document.getElementById('sum').innerHTML = (currentNum1 + currentNum2).toString()
} 