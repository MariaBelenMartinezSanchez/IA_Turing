const buttonsData = [
    {
        id: 'trabajadores-btn',
        label: 'Trabajadores',
        color: '#847CEC'
    },
    {
        id: 'administrador-btn',
        label: 'Administrador',
        color: '#45AEF2'
    }
];

buttonsData.forEach(button => {
    document.getElementById(button.id).style.backgroundColor = button.color;
});



//<!--_______________________________CALCULAR EDAD_____________________________________________________________________-->


function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaComparacion = new Date(document.getElementById('fechaComparacion').value);
    
    const diferencia = fechaComparacion - fechaNacimiento;

    let edad = fechaComparacion.getFullYear() - fechaNacimiento.getFullYear();
    
    const mesNacimiento = fechaNacimiento.getMonth();
    const mesComparacion = fechaComparacion.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();
    const diaComparacion = fechaComparacion.getDate();

    if (mesComparacion < mesNacimiento || (mesComparacion === mesNacimiento && diaComparacion < diaNacimiento)) {
        edad--;
    }
    // Mostrar resultados
    document.getElementById('edad').innerHTML = `Edad: ${edad} años.`;
}

//<!--_______________________________CALCULADORA DE SALARIO POR HORA_____________________________________________________________________-->


function calcularSalario() {
    const salarioPorHora = parseFloat(document.getElementById('salarioPorHora').value);
    const horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    
    if (isNaN(salarioPorHora) || isNaN(horasTrabajadas)) {
        document.getElementById('salarioTotal').innerText = 'Por favor, ingresa valores válidos.';
        return;
    }

    const salarioTotal = salarioPorHora * horasTrabajadas;
    document.getElementById('salarioTotal').innerText = `Salario Total: $${salarioTotal.toFixed(2)}`;
}
