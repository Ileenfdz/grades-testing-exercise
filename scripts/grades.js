function getGrade(grade){
    result = Math.round(grade);
    return (result < 3 && result >= 0?'Muy deficiente':result < 5?'Insuficiente':result < 6?'Suficiente':result < 7?'Bien':result < 9?'Notable':result <= 10?'Sobresaliente':'Introduce un número válido, entre 0 y 10');}

module.exports= getGrade;