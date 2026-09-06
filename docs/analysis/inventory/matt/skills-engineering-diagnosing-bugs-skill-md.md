---
package: matt
path: skills/engineering/diagnosing-bugs/SKILL.md
type: skill
bytes: 8529
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/SKILL.md

## Purpose — required, verbatim
> "Diagnosis loop for hard bugs and performance regressions. Use when the user says \"diagnose\"/\"debug this\", or reports something broken/throwing/failing/slow." — skills/engineering/diagnosing-bugs/SKILL.md:3

## Design intent — required
Rigorous six-phase debugging discipline for hard bugs, intermittent flakes, and performance regressions. Mandates building a tight, deterministic, red-capable feedback loop before generating any hypotheses, stopping the common failure of premature code inspection. Requires minimizing the reproduction to load-bearing elements only, formulating 3-5 ranked and falsifiable hypotheses, instrumenting with tagged debug logs (`[DEBUG-...]`), proving the fix with a regression test at the correct architectural seam, and executing strict cleanup before completion.

## Phase — required
cross-phase

## Inputs — required
Bug reports, error logs, user descriptions, `CONTEXT.md` terminology, architecture ADRs, network traces, reproduction environments.

## Outputs — required
Red-capable reproduction loop script/command, minimized repro case, 3-5 ranked falsifiable hypotheses, tagged instrumentation logs, regression test, bugfix commit/PR message with root cause hypothesis, and cleaned working tree.

## Invokes — required
- script hitl-loop.template.sh — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:7

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:42
- doc diagnosing-bugs — docs/engineering/diagnosing-bugs.md:9
- doc README.md — README.md:158
- doc code-review — docs/engineering/code-review.md:18
- doc triage — docs/engineering/triage.md:19

## Concepts named — required, verbatim
- `CONTEXT.md` — skills/engineering/diagnosing-bugs/SKILL.md:10 — used here
- `ADRs` — skills/engineering/diagnosing-bugs/SKILL.md:10 — used here
- `Redact` — skills/engineering/diagnosing-bugs/SKILL.md:12 — defined here
- `feedback loop` — skills/engineering/diagnosing-bugs/SKILL.md:18 — defined here
- `seam` — skills/engineering/diagnosing-bugs/SKILL.md:26 — used here
- `Playwright` — skills/engineering/diagnosing-bugs/SKILL.md:29 — used here
- `Puppeteer` — skills/engineering/diagnosing-bugs/SKILL.md:29 — used here
- `fuzz loop` — skills/engineering/diagnosing-bugs/SKILL.md:32 — defined here
- `Bisection harness` — skills/engineering/diagnosing-bugs/SKILL.md:33 — defined here
- `Differential loop` — skills/engineering/diagnosing-bugs/SKILL.md:34 — defined here
- `HITL bash script` — skills/engineering/diagnosing-bugs/SKILL.md:35 — defined here
- `Non-deterministic bugs` — skills/engineering/diagnosing-bugs/SKILL.md:49 — defined here
- `red-capable` — skills/engineering/diagnosing-bugs/SKILL.md:59 — defined here
- `falsifiable` — skills/engineering/diagnosing-bugs/SKILL.md:92 — defined here
- `Perf branch` — skills/engineering/diagnosing-bugs/SKILL.md:112 — defined here
- `regression test` — skills/engineering/diagnosing-bugs/SKILL.md:114 — defined here
- `correct seam` — skills/engineering/diagnosing-bugs/SKILL.md:116 — defined here
- `Cleanup` — skills/engineering/diagnosing-bugs/SKILL.md:130 — defined here

## Structure
- `# Diagnosing Bugs`
- `## Redact`
- `## Phase 1: Build a feedback loop`
- `### Ways to construct one, in roughly this order`
- `### Tighten the loop`
- `### Non-deterministic bugs`
- `### When you genuinely cannot build a loop`
- `### Completion criterion: a tight loop that goes red`
- `## Phase 2: Reproduce + minimise`
- `### Minimise`
- `## Phase 3: Hypothesise`
- `## Phase 4: Instrument`
- `## Phase 5: Fix + regression test`
- `## Phase 6: Cleanup`

## Scripts — required if type is script or the skill ships scripts
- path: `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, language: bash, lines: 45
- documented invocation: `scripts/hitl-loop.template.sh` — skills/engineering/diagnosing-bugs/SKILL.md:35
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
`docs/engineering/diagnosing-bugs.md:59` reports that on GPT-5.6-Sol models with lower activation thresholds, this skill frequently over-fires on simple problem descriptions and begins heavy formal reproduction construction before answering. The skill also provides an explicit architectural escape hatch (lines 120-121): if no correct seam exists to write a regression test, that architectural defect itself is recorded as the finding.

## Context cost
8529 bytes, 139 lines (plus 1316 bytes for hitl-loop.template.sh), approximately 1650 tokens.
