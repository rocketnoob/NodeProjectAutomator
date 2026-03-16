const fs = require('fs');
const path = require('path');


const nomeDoProjeto = 'meu-novo-projeto';


const pastas = ['css', 'js', 'img', 'assets'];


const htmlBase = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${nomeDoProjeto}</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Projeto Criado via Automação Node.js 🚀</h1>
    <script src="js/script.js"></script>
</body>
</html>`;

try {
 
    if (!fs.existsSync(nomeDoProjeto)) {
        fs.mkdirSync(nomeDoProjeto);
        console.log(`✅ Pasta [${nomeDoProjeto}] criada.`);

        
        pastas.forEach(pasta => {
            fs.mkdirSync(path.join(nomeDoProjeto, pasta));
            console.log(`  └─ Subpasta [${pasta}] criada.`);
        });

        
        fs.writeFileSync(path.join(nomeDoProjeto, 'index.html'), htmlBase.trim());
        
        
        fs.writeFileSync(path.join(nomeDoProjeto, 'css', 'style.css'), '/* Estilos iniciados */');
        fs.writeFileSync(path.join(nomeDoProjeto, 'js', 'script.js'), '// Script iniciado');

        console.log('\n🚀 Estrutura completa gerada com sucesso! Pronto para codar.');
    } else {
        console.log('❌ Erro: Uma pasta com esse nome já existe.');
    }
} catch (err) {
    console.error('❌ Erro ao gerar projeto:', err);
}
