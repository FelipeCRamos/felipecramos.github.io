// Lists every draft marker still in the built site. Run before sharing the link.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});
let total = 0;
for (const file of walk('dist')) {
  const hits = [...readFileSync(file, 'utf8').matchAll(/<mark class="todo">(.*?)<\/mark>/gs)];
  for (const [, text] of hits) { console.log(`${file}: ${text}`); total++; }
}
console.log(total ? `\n${total} placeholders left. Not ready to share.` : 'No placeholders left.');
process.exit(total ? 1 : 0);
