const fs = require('fs');
const path = require('path');

// Nome da pasta que será criada (podemos mudar para receber via terminal depois)
const nomeDoProjeto = 'meu-novo-projeto';

// Estrutura de pastas que queremos criar
const pastas = ['css', 'js', 'img', 'assets'];

// Conteúdo básico para o index.html
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
    // 1. Cria a pasta principal do projeto
    if (!fs.existsSync(nomeDoProjeto)) {
        fs.mkdirSync(nomeDoProjeto);
        console.log(`✅ Pasta [${nomeDoProjeto}] criada.`);

        // 2. Cria as subpastas
        pastas.forEach(pasta => {
            fs.mkdirSync(path.join(nomeDoProjeto, pasta));
            console.log(`  └─ Subpasta [${pasta}] criada.`);
        });

        // 3. Cria o index.html
        fs.writeFileSync(path.join(nomeDoProjeto, 'index.html'), htmlBase.trim());
        
        // 4. Cria arquivos vazios de CSS e JS
        fs.writeFileSync(path.join(nomeDoProjeto, 'css', 'style.css'), '/* Estilos iniciados */');
        fs.writeFileSync(path.join(nomeDoProjeto, 'js', 'script.js'), '// Script iniciado');

        console.log('\n🚀 Estrutura completa gerada com sucesso! Pronto para codar.');
    } else {
        console.log('❌ Erro: Uma pasta com esse nome já existe.');
    }
} catch (err) {
    console.error('❌ Erro ao gerar projeto:', err);
}