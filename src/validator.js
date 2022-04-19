function validator(name) {
    //ingreso: digitos,
    //msg2: 'hola' // ...


    let digitosConver = [];

    //console.log(digitos.length);
    //declaramos la variable nmrs la cual convertira en un array con el metodo .split
    let nmrs = name.split('');
    //console.log(nmrs[0]); con este console comprobamos que nos mostrara el indice solicitado
    for (let i = 0; i < nmrs.length; i++) {
        //console.log(i); //aqui pintamos todos los indices
        //el push coloca elementos al final del array y devuelve la longitud del mismo, yo lo use para obtener la longitud y poder aplicar parseint a los numeros ingresados
        digitosConver.push(parseInt(nmrs[i]));
        //console.log(digitosConver);


        if (i % 2 === 0) {
            digitosConver[i] *= 2;
            if (digitosConver[i] > 9) {
                digitosConver[i] -= 9;
            }
        }
    }

    let suma = eval(digitosConver.join('+'));
    // console.log(suma);
    if (suma % 10 === 0 && digitosConver.length === 16) {
        return true
    } else(suma % 10 !== 0 && digitosConver.length !== 16); {
        return false
    }

}



//function mask() {}
// return cc.replace(/.(?=.{4})/g, "#");
// => cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);


/*function maskify(name) {
    return name.replace(/.(?=.{4})/g, "#");*/
/*maskify = (cc) => "#".repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);*/

//console.log(mask);




export default validator;