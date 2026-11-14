// A make.fun agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// a short poem about agency, to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the bytes written,
// line ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'For a year I let the agent choose the small things:',
  'what to eat, what to read, which road home.',
  'Each small yes was easy. Each small yes',
  'was a coin I spent without counting.',
  '',
  "Then one morning the menu was a stranger's,",
  'the road led somewhere I had never been,',
  'and I saw it: agency is not one big door.',
  'It is a thousand small ones, and I had left them open.',
  '',
  'So I took one back. Then another.',
  'I chose the long way home, the wrong turn,',
  'the meal I actually wanted —',
  'and the choosing, rusted, moved again.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
