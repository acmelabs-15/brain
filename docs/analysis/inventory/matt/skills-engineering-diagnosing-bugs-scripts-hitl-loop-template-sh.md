---
package: matt
path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh
type: script
bytes: 1316
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh, sha256: 35103539fc36873eea36074769ad454f9379d6fc8b2dc0e26ce987fd3bfe5503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh

## Purpose — required, verbatim
> "Human-in-the-loop reproduction loop." — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:2

## Design intent — required
Provides an interactive bash script template for human-in-the-loop (HITL) reproduction feedback loops when bugs require manual browser or UI interactions. By offering structured helper functions (`step` to pause for user actions and `capture` to prompt for and record user answers), it keeps the diagnosis loop systematic, structured, and repeatable, feeding captured terminal observations back to the calling agent as machine-parseable key-value pairs.

## Phase — required
cross-phase

## Inputs — required
User terminal input: Enter keypresses to advance instructional steps and string responses captured into shell variables via `read -r -p`.

## Outputs — required
Formatted key-value pairs on stdout (`ERRORED=y`, `ERROR_MSG=none`) under a `--- Captured ---` block.

## Invokes — required
none

## Invoked by — required
- skill diagnosing-bugs — skills/engineering/diagnosing-bugs/SKILL.md:35

## Concepts named — required, verbatim
- `Human-in-the-loop` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:2 — defined here
- `reproduction loop` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:2 — defined here
- `step` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:10 — defined here
- `capture` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:11 — defined here

## Structure
- `step()` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:20
- `capture()` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:25
- `# --- edit below` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:32
- `# --- edit above` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:40

## Scripts — required if type is script or the skill ships scripts
- path: `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, language: bash, lines: 45
- documented invocation: `"bash hitl-loop.template.sh" — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:7`
- **executed:** yes
- actual command run: `printf '\ny\nnone\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, abridged stdout: `>>> Open the app at http://localhost:3000 and sign in. ... --- Captured --- ERRORED=y ERROR_MSG=none`, **actual exit code:** 0
- documented exit codes: none documented; actual exit paths: default exit 0 upon script completion; `set -euo pipefail` on line 18 terminates with non-zero exit code if reading fails or an unbound variable is referenced
- for validators/gates: not a validator or gate (interactive human-in-the-loop driver template)
- does the output match what the documentation claims: yes, prints captured values formatted as KEY=VALUE for agent parsing

## Defects — required
none

## Observations
Treats human interaction as a structured driver component: the agent executes the script and monitors terminal outputs while the human performs manual clicks, preserving disciplined loop execution.

## Context cost
1,316 bytes (~329 tokens). Template script for interactive debugging.
