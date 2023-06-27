let numberOne = prompt('Digite o primeiro número: ')
let numbertwo = prompt('Digite o segundo número: ')

numberOne = Number(numberOne)
numbertwo = Number(numbertwo)

const rSum = numberOne + numbertwo
const rSub = numberOne - numbertwo
const rMult = numberOne * numbertwo
const rDiv = numberOne / numbertwo
const rRestDiv = numberOne % numbertwo

alert('Soma dos dois números é: ' + rSum)
alert('Subtração dos dois números é: ' + rSub)
alert('Multiplicação dos dois números é: ' + rMult)
alert('Divisão dos dois números é: ' + rDiv)
alert('Resto da divisão dos dois números é: ' + rRestDiv)

if ((rSum % 2) == 0)
  alert('A soma dos dois números é par')
else
  alert('A soma dos dois números é impar')

if (numberOne == numbertwo)
  alert('Os dois números são iguais') 
else
  alert('Os dois números são diferentes') 