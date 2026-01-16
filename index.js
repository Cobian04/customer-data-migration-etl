const fs = require('fs');
const csv = require('csv-parser');

const cleanData = [];
const rejectedData = [];

const isValidEmail = (email) => {
    return email && email.includes('@') && email.includes('.');
};

console.log('Iniciando proceso de extracción, transformación y Carga (ETL)...');


fs.createReadStream('datos_entrada.csv')
    .pipe(csv())
    .on('data', (row) => {
        const age = parseInt(row.edad);
        
        // 2. Validar reglas: Edad positiva y Email correcto
        if (isNaN(age) || age <= 0) {
            rejectedData.push({ ...row, error: 'Edad inválida' });
        } else if (!isValidEmail(row.email)) {
            rejectedData.push({ ...row, error: 'Formato de email incorrecto' });
        } else {
            cleanData.push({
                id: row.id,
                name: row.nombre.trim(),
                email: row.email.toLowerCase().trim(), 
                age: age,
                status: 'active' 
            });
        }
    })
    .on('end', () => {
        fs.writeFileSync('clean_data.json', JSON.stringify(cleanData, null, 2));
        
        fs.writeFileSync('errors_report.json', JSON.stringify(rejectedData, null, 2));

        console.log('Proceso Terminado.');
        console.log(`Registros Procesados: ${cleanData.length + rejectedData.length}`);
        console.log(`Datos Limpios: ${cleanData.length}`);
        console.log(`Datos Rechazados: ${rejectedData.length} (Ver errors_report.json)`);
    });