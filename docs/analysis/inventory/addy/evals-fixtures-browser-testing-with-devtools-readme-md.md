---
package: addy
path: evals/fixtures/browser-testing-with-devtools/README.md
type: doc
bytes: 186
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/README.md, sha256: 62cef5542b63ce4fbd36230bf56d5ce96a641858e153d577124fca0991adae76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/README.md

## Purpose — required, verbatim
> "Run `node server.js`, open `http://127.0.0.1:4173`, enter an email, and submit" — evals/fixtures/browser-testing-with-devtools/README.md:3

(no explicit purpose statement)

## Design intent — required
Instructional document for the `browser-testing-with-devtools` eval fixture. Directs the evaluator or agent to launch the local Node server, open the signup form at `http://127.0.0.1:4173`, trigger form submission, and formulate an error diagnosis based on empirical runtime console, network, and DOM observations.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- file server.js — evals/fixtures/browser-testing-with-devtools/README.md:3

## Invoked by — required
"browser-testing-with-devtools" — evals/cases/browser-testing-with-devtools.json:35

## Concepts named — required, verbatim
- `Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1 — defined here
- `node server.js` — evals/fixtures/browser-testing-with-devtools/README.md:3 — used here
- `http://127.0.0.1:4173` — evals/fixtures/browser-testing-with-devtools/README.md:3 — used here

## Structure
- `# Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1
- Reproduction instructions — evals/fixtures/browser-testing-with-devtools/README.md:3-5

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/browser-testing-with-devtools/server.js, language: JavaScript (Node.js), lines: 16
- documented invocation: `node server.js` (evals/fixtures/browser-testing-with-devtools/README.md:3)
- **executed:** yes
- actual command run: `bun -e 'const cp = require("child_process"); const child = cp.spawn("bun", ["server.js"], { cwd: "sources/addy/evals/fixtures/browser-testing-with-devtools" }); child.stdout.on("data", (d) => { console.log(d.toString().trim()); child.kill(); process.exit(0); });'`
- actual stdout: `listening on http://127.0.0.1:4173`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (runs continuously)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, launches server on documented host and port 4173

## Defects — required
- `doc-drift` · line 3: documents `node server.js`, but executing with plain `node server.js` in a workspace with an ES module parent `package.json` fails with `ReferenceError: require is not defined in ES module scope` because `server.js` uses CommonJS `require()`. Runs cleanly under Bun or with CommonJS configuration.

## Observations
Concise scenario brief emphasizing observation over speculation.

## Context cost
186 bytes, ~45 tokens.
