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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh

## Purpose — required, verbatim
> "Human-in-the-loop reproduction loop." — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:2

## Design intent — required
Interactive bash reproduction harness for human-in-the-loop debugging when browser UI clicks, OAuth authentication, or physical hardware steps cannot be automated headlessly. Provides `step` for instructions requiring confirmation and `capture` for collecting interactive user terminal input, returning structured key-value output for agent consumption while ensuring credentials remain outside the captured stdout stream.

## Phase — required
cross-phase

## Inputs — required
User terminal input responses: pressing Enter to acknowledge instructions (`step`) and entering text responses to diagnostic questions (`capture`).

## Outputs — required
Standardized `KEY=VALUE` lines printed to stdout following `--- Captured ---` marker (e.g. `ERRORED=y`, `ERROR_MSG=none`).

## Invokes — required
none

## Invoked by — required
- skill diagnosing-bugs — skills/engineering/diagnosing-bugs/SKILL.md:35

## Concepts named — required, verbatim
- `step` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:10 — defined here
- `capture` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:11 — defined here
- `KEY=VALUE` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:13 — defined here
- `ERRORED` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:36 — defined here
- `ERROR_MSG` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:38 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, language: bash, lines: 45
- documented invocation: `bash hitl-loop.template.sh` — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:7
- **executed:** yes
- actual command run: `printf '\ny\nnone\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`
- abridged stdout:
```
>>> Open the app at http://localhost:3000 and sign in.

>>> Click the 'Export' button. Did it throw an error? (y/n)

>>> Paste the error message (or 'none'):

--- Captured ---
ERRORED=y
ERROR_MSG=none
```
- **actual exit code:** 0
- documented exit codes vs actual exit paths: no documented exit codes in comments; exits 0 on normal script completion, exits non-zero if subshell errors or unbound variable under `set -euo pipefail`.
- for validators/gates: not a validator or gate; template reproduction runner.
- does the output match what the documentation claims: yes, formats captured inputs as `KEY=VALUE` lines.

## Defects — required
none

## Observations
Template is intended to be copied and customized per bug scenario (`# --- edit below ---` to `# --- edit above ---`). It explicitly warns to leave sign-in steps as `step` rather than `capture` to prevent auth tokens from being printed back to the terminal where the agent reads it.

## Context cost
1316 bytes, 45 lines, approximately 230 tokens.
