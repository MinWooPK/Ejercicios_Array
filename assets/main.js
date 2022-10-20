//EJERCICIO ARRAY 1

//A

let month = ["January", "February", "Marj", "April", "Mei"];
month[2] = "Mars"
month[4] = "May"
console.log(month)

//B

function month() {
  let month1 = ["January", "February", "Marj", "April", "Mei"];

  month1[2] = "Mars";
  month1[4] = "May";


  let newMonths = ["June", "July", "August", "September"];

  return month1.concat(newMonths);

}
console.log(month())

//C

function month() {
  let month1 = ["January", "February", "Marj", "April", "Mei"];

  month1[2] = "Mars";
  month1[4] = "May";


  let newMonths = ["June", "July", "August", "September"];
  let totalMonths = ["October", "November", "December"];

  let firstmonth = month1.concat(newMonths);
  let secondmonth = firstmonth.concat(totalMonths)
  return secondmonth


}
console.log(month());




//4

const totalMonths = ["January", "February", "Mars", "April", "May", "June", "July", "August",

  "September", "October", "November", "December"];

function changeArray(num1, num2, num3) {


  if (num1 > num2) {




    let aResultado = totalMonths.pop()

    return totalMonths
  }



  else if (num2 > num3 && 10 > num2) {

    let bResultado = totalMonths.shift();

    return totalMonths
  } else if (num2 > num3 || num2 > num1) {



    let aResultado = totalMonths.push("october")

    return totalMonths
  }
  else {




    return "Bad Luck"

  }

} console.log(changeArray(7, 7, 7))
console.log(totalMonths)



//3a

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function semana() {




  return (week[2])


}
console.log(semana())

//3b


const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function semana(d1, d2) {


  let longitud1 = week[d1].length
  let longitud2 = week[d2].length


  if (longitud1 > longitud2) {

    return "la posicion uno es mayor que la segunda"

  }

  else if (longitud1 == longitud2) {

    return "ambas posiciones son iguales"

  }

  else {


    return "la posicion uno es menor que la segunda"

  }

}

console.log(semana(1, 2))
