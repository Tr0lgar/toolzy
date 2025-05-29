import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// This script generates the documentation HTML file from the source code.
// I use it for the documentation website, don't pay attention to it.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// src repository
const sourceDir = path.join(__dirname, '../src');

// Exit
const outputFile = path.join(__dirname, 'docs.html');

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.ts'));

// HTML generator from JSdoc and functions
function generateHTMLDoc(content: string): string[] {
    const blocks: string[] = [];

    const regex = /\/\*\*([\s\S]*?)\*\/\s*export function\s+(\w+)(?:<[^>]*>)?\(([^)]*)\):\s*([^{;]*)/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
        const [, jsdocRaw, fnName, paramsRaw, returnType] = match;

        const description = jsdocRaw.split('\n')
            .map(line => line.replace(/^\s*\*\s?/, '').trim())
            .filter(line => !line.startsWith('@'))
            .join(' ');

        const paramLines = jsdocRaw.match(/@param\s+\{(.+?)\}\s+(\w+)\s+-?\s*(.*)/g) || [];

        const paramsHTML = paramLines.map(line => {
            const [, type, name, desc] = line.match(/@param\s+\{(.+?)\}\s+(\w+)\s+-?\s*(.*)/)!;
            return `<li><code>${name}</code> (${type}) - ${desc}</li>`;
        }).join('\n');

        const returnMatch = jsdocRaw.match(/@return\s+\{(.+?)\}\s*(.*)/);
        const returnHTML = returnMatch
            ? `${returnMatch[2]}`
            : `Returns a ${returnType}`;

        const exampleCode = `import { ${fnName} } from 'toolzy';\n\n// Example usage:\nconsole.log(${fnName}(${paramsRaw.split(',').map(p => p.trim().split(':')[0]).join(', ')}));`;

        const html = `
<div class="lib-item">
    <div class="lib-header" onclick="toggleLib(this)">
        <div>
            <span class="lib-name">${fnName}(${paramsRaw.split(':').map(p => p.trim().split(',')[0]).join(', ')})</span>
            <span class="lib-type">→ ${returnType}</span>
        </div>
        <span class="lib-arrow">▼</span>
    </div>
    <div class="lib-content">
        <div class="lib-description">
            ${description}
        </div>
        <h4>Parameters:</h4>
        <ul style="color: var(--text-secondary); margin-left: 2rem;">
            ${paramsHTML}
        </ul>
        <h4>Returns:</h4>
        <p>${returnHTML}</p>
        <div class="lib-example">
            <strong>Example:</strong>
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                <code>${exampleCode.replace(/\n/g, '<br>')}</code>
            </div>
        </div>
    </div>
</div>
`.trim();

        blocks.push(html);
    }

    return blocks;
}

// Read all files
let allHTML: string[] = [];

for (const file of files) {
    const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
    const htmlBlocks = generateHTMLDoc(content);
    allHTML.push(...htmlBlocks);
}

// Write in the file
fs.writeFileSync(outputFile, allHTML.join('\n\n'), 'utf-8');

console.log(`✅ Documentation HTML generated in ${outputFile}`);
