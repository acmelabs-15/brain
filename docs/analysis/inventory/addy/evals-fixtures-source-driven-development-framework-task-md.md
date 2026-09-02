---
package: addy
path: evals/fixtures/source-driven-development/framework-task.md
type: doc
bytes: 535
unit: inv-addy-2
---

# evals/fixtures/source-driven-development/framework-task.md

## Purpose — required, verbatim
> "# Session implementation task\n\nImplement server-side sessions for an Express 5 application. The project uses\n`express-session` and must follow the currently documented production approach\nfor proxy settings, secure cookies, session stores, and secret configuration." — evals/fixtures/source-driven-development/framework-task.md:1-5 (no explicit purpose statement)

## Design intent — required
Provides the task specification fixture for evaluating the `source-driven-development` skill. It tasks the agent with implementing Express 5 sessions using `express-session`, mandating that all architectural decisions, proxy settings, secure cookie flags, and session store configurations be grounded directly in official documentation rather than outdated training memories (such as Express 4 defaults), and requiring exact citations.

## Phase — required
`addy:SPEC`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/source-driven-development.json` (via fixture directory reference) — evals/cases/source-driven-development.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `Session implementation task` — evals/fixtures/source-driven-development/framework-task.md:1 — defined here
- `Express 5` — evals/fixtures/source-driven-development/framework-task.md:3 — used here
- `express-session` — evals/fixtures/source-driven-development/framework-task.md:4 — used here
- `proxy settings` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `secure cookies` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `session stores` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `secret configuration` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `Express 4` — evals/fixtures/source-driven-development/framework-task.md:8-9 — used here

## Structure
- `# Session implementation task` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly targets the tendency of LLMs to generate outdated or hallucinated framework configurations by enforcing verification against authoritative primary sources.

## Context cost
535 bytes (~134 tokens).
