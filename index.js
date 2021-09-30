
var result = document.getElementById('result')

function submitHandler(event){
    event.preventDefault()
    var date = new Date()
    var currentYear = date.getFullYear()
    var birthYear = parseInt(event.target[0].value)
    if( birthYear > currentYear){
        result.innerHTML = 'WACHA UFALA!'
        result.style.color = 'red'
    }else{
        var age = currentYear - birthYear
        result.innerHTML = 'your age is: '+ age
        result.style.color = 'green'
    }
}

function resetHandler(event){
    result.innerHTML = ''
}