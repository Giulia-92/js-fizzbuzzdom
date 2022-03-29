
const cesto = document.getElementById("cesto");
const linea = document.createElement("div");
linea.setAttribute("class", "row g-3 mt-4");
cesto.append(linea);
for (let numero = 1; numero <= 100; numero++) {
    const colonna = document.createElement("div");
    colonna.setAttribute("class", "col-12 col-sm-6 col-md-4 col-lg-2");
    const colonna2 = document.createElement("div");
    let Testo;

    if ((numero % 3 == 0) && (numero % 5 == 0)) {
        colonna2.setAttribute("class", "color-4");
        Testo = document.createTextNode("FizzBuzz");
        console.log("FizzBuzz")

    }
    else if (numero % 5 == 0) {
        colonna2.setAttribute("class", "color-3");
        Testo = document.createTextNode("Buzz");
        console.log("Buzz");
    }
    else if
        (numero % 3 == 0) {
        colonna2.setAttribute("class", "color-2");
        Testo = document.createTextNode("Fizz");
        console.log("Fizz");
    } else {

        colonna2.setAttribute("class", "color-1");
        Testo = document.createTextNode(numero);
        console.log(numero);
    }

    colonna2.append(Testo);
    colonna.append(colonna2);
    linea.append(colonna);
}


/*if (numero % 3 == 0) && (numero % 5 == 0);{
    console.log("FizzBuzz")
} */