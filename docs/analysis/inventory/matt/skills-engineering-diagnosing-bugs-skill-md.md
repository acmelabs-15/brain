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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/SKILL.md

## Purpose — required, verbatim
> "Diagnosis loop for hard bugs and performance regressions. Use when the user says \"diagnose\"/\"debug this\", or reports something broken/throwing/failing/slow." — skills/engineering/diagnosing-bugs/SKILL.md:3

## Design intent — required
Enforces a structured, six-phase scientific debugging discipline for difficult bugs, intermittent flakes, and performance regressions. Strictly prohibits jumping to hypotheses, speculative root-cause theories, or code changes until Phase 1 delivers a tight, deterministic feedback loop (one command) that actively goes red on the user's specific symptom. Guides systematic reproduction minimization, multi-hypothesis generation (3–5 ranked falsifiable predictions), isolated probe instrumentation with uniquely tagged logs (`[DEBUG-...]`), and pre-fix regression testing at a verified architectural seam.

## Phase — required
cross-phase

## Inputs — required
User bug descriptions, stack traces, reproduction instructions, domain context from `CONTEXT.md`, architectural ADRs, captured network/log artifacts, and environment variables.

## Outputs — required
Deterministic single-command feedback loop, minimal reproduction scenario, ranked falsifiable hypotheses, tagged debug logging probes, verified regression test, bug fix, and cleanup commit documentation.

## Invokes — required
- script hitl-loop.template.sh — skills/engineering/diagnosing-bugs/SKILL.md:35

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:42
- doc README.md — README.md:158
- doc docs/engineering/diagnosing-bugs.md — docs/engineering/diagnosing-bugs.md:3
- doc docs/engineering/improve-codebase-architecture.md — docs/engineering/improve-codebase-architecture.md:26
- doc docs/engineering/triage.md — docs/engineering/triage.md:19

## Concepts named — required, verbatim
- `diagnosing-bugs` — skills/engineering/diagnosing-bugs/SKILL.md:2 — defined here
- `CONTEXT.md` — skills/engineering/diagnosing-bugs/SKILL.md:10 — used here
- `ADRs` — skills/engineering/diagnosing-bugs/SKILL.md:10 — used here
- `Redact` — skills/engineering/diagnosing-bugs/SKILL.md:12 — defined here
- `feedback loop` — skills/engineering/diagnosing-bugs/SKILL.md:18 — defined here
- `Failing test` — skills/engineering/diagnosing-bugs/SKILL.md:26 — defined here
- `Throwaway harness` — skills/engineering/diagnosing-bugs/SKILL.md:31 — defined here
- `Bisection harness` — skills/engineering/diagnosing-bugs/SKILL.md:33 — defined here
- `Differential loop` — skills/engineering/diagnosing-bugs/SKILL.md:34 — defined here
- `HITL bash script` — skills/engineering/diagnosing-bugs/SKILL.md:35 — defined here
- `Red-capable` — skills/engineering/diagnosing-bugs/SKILL.md:61 — defined here
- `Deterministic` — skills/engineering/diagnosing-bugs/SKILL.md:62 — defined here
- `Minimise` — skills/engineering/diagnosing-bugs/SKILL.md:78 — defined here
- `Hypothesise` — skills/engineering/diagnosing-bugs/SKILL.md:88 — defined here
- `falsifiable` — skills/engineering/diagnosing-bugs/SKILL.md:92 — defined here
- `Instrument` — skills/engineering/diagnosing-bugs/SKILL.md:100 — defined here
- `regression test` — skills/engineering/diagnosing-bugs/SKILL.md:114 — defined here
- `correct seam` — skills/engineering/diagnosing-bugs/SKILL.md:116 — defined here
- `Cleanup` — skills/engineering/diagnosing-bugs/SKILL.md:130 — defined here

## Structure
- # Diagnosing Bugs
- ## Redact
- ## Phase 1: Build a feedback loop
- ### Ways to construct one, in roughly this order
- ### Tighten the loop
- ### Non-deterministic bugs
- ### When you genuinely cannot build a loop
- ### Completion criterion: a tight loop that goes red
- ## Phase 2: Reproduce + minimise
- ### Minimise
- ## Phase 3: Hypothesise
- ## Phase 4: Instrument
- ## Phase 5: Fix + regression test
- ## Phase 6: Cleanup

## Scripts — required if type is script or the skill ships scripts
- path: `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, language: bash, lines: 45
- documented invocation: `"bash hitl-loop.template.sh" — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:7`
- **executed:** yes
- actual command run: `printf '\ny\nnone\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, abridged stdout: `>>> Open the app at http://localhost:3000 and sign in. ... --- Captured --- ERRORED=y ERROR_MSG=none`, **actual exit code:** 0
- documented exit codes: none documented; actual exit paths: default exit 0 upon reaching EOF; `set -euo pipefail` on line 18 terminates with non-zero exit code on read error or unbound variable
- for validators/gates: not a validator or gate (interactive human-in-the-loop helper template)
- does the output match what the documentation claims: yes, prints captured values formatted as KEY=VALUE for agent parsing

## Defects — required
- `doc-drift` · skills/engineering/diagnosing-bugs/SKILL.md:64 Refers to `scripts/hitl-loop.template.sh` relative to skill root without documenting path resolution across working directories.

## Observations
Mandates tagging all debug log statements with unique identifiers (e.g. `[DEBUG-a4f2]`) to enable clean one-line removal via grep during cleanup. Identifies the absence of a proper test seam as an architectural finding to surface rather than forcing a shallow or fragile unit test.

## Context cost
8,529 bytes (~2,132 tokens). Plus `scripts/hitl-loop.template.sh` (1,316 bytes) when invoked, total ~9,845 bytes (~2,461 tokens).
