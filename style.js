
const cesto = document.getElementById("cesto");
const linea = document.createElement("div");
linea.setAttribute("class", "row g-3 mt-4");
cesto.append(linea);
for (let numero = 1; numero <= 100; numero ++){

 if (numero % 3 == 0){
        const colonna2 = document.createElement("div");
        colonna2.setAttribute("class", "color-2");
        const colonna = document.createElement("div");
        colonna.setAttribute("class", "col-12");        
        const Testo = document.createTextNode("Fizz");
        colonna2.append(colonna);
        colonna.append(Testo);
        linea.append(colonna2);
        console.log("Fizz");
    }
 else if (numero % 5== 0){
        const colonna2 = document.createElement("div");
        colonna.setAttribute("class", "color-3");
        const colonna = document.createElement("div");
        colonna.setAttribute("class", "col-12");       
        const textNode = document.createTextNode("Buzz");
        colonna2.append(colonna);
        colonna.append(textNode);
        linea.append(colonna2);
        console.log("Buzz");}  
 else if ((numero % 3 == 0) && (numero % 5 == 0)) {
        const colonna2 = document.createElement("div");
        colonna.setAttribute("class", "color-4");
        const colonna = document.createElement("div");
        colonna.setAttribute("class", "col-12");       
        const textNode = document.createTextNode("FizzBuzz");
        colonna2.append(colonna);
        colonna.append(textNode);
        linea.append(colonna2);
        console.log("FizzBuzz")
 } else{        
        const colonna = document.createElement("div");
        colonna.setAttribute("class", "color-1");
        const textNode = document.createTextNode(numero);
        colonna.append(textNode);
        linea.append(colonna);
        console.log(numero);}     

    }




    /*if (numero % 3 == 0) && (numero % 5 == 0);{
        console.log("FizzBuzz")
    } */     