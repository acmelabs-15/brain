---
package: matt
path: docs/engineering/diagnosing-bugs.md
type: doc
bytes: 10701
unit: inv-matt-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/diagnosing-bugs.md

## Purpose — required, verbatim
> "`diagnosing-bugs` runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — docs/engineering/diagnosing-bugs.md:3

## Design intent — required
Structured six-phase diagnostic methodology designed for complex bugs, intermittent flakes, and performance regressions (reproduce, minimize, rank hypotheses, instrument, fix with regression test, clean up). Eliminates the common agent failure mode of premature guessing and speculative code edits by enforcing an unyielding entry gate: the agent must establish and run a fast, deterministic, automated "tight feedback loop" (a command that fails red on this specific bug and passes green when resolved) before formulating or testing any hypotheses.

## Phase — required
cross-phase

## Inputs — required
A reported defect symptom, error traceback, or timing regression; execution environment access, minimal reproduction fixtures, or captured artifacts (HTTP HAR files, payload dumps, event logs).

## Outputs — required
A verified reproduction command and its failing red output, a minimized reproduction case, a ranked list of 3–5 falsifiable hypotheses, tagged instrumentation probes (`[DEBUG-a4f2]`), a regression test locking down the bug at a confirmed seam, a verified code fix, and a commit/PR message documenting the confirmed root cause.

## Invokes — required
- skill triage — docs/engineering/diagnosing-bugs.md:18
- skill prototype — docs/engineering/diagnosing-bugs.md:19
- skill tdd — docs/engineering/diagnosing-bugs.md:20
- skill improve-codebase-architecture — docs/engineering/diagnosing-bugs.md:21
- script scripts/hitl-loop.template.sh — docs/engineering/diagnosing-bugs.md:36
- skill ask-matt — docs/engineering/diagnosing-bugs.md:91

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `diagnosing-bugs` — docs/engineering/diagnosing-bugs.md:3 — defined here
- `regression test` — docs/engineering/diagnosing-bugs.md:3 — used here
- `tight` — docs/engineering/diagnosing-bugs.md:5 — defined here
- `triage` — docs/engineering/diagnosing-bugs.md:18 — used here
- `prototype` — docs/engineering/diagnosing-bugs.md:19 — used here
- `tdd` — docs/engineering/diagnosing-bugs.md:20 — used here
- `seam` — docs/engineering/diagnosing-bugs.md:21 — used here
- `human-in-the-loop` — docs/engineering/diagnosing-bugs.md:36 — used here
- `reproduction rate` — docs/engineering/diagnosing-bugs.md:38 — defined here
- `environment` — docs/engineering/diagnosing-bugs.md:40 — used here
- `gates` — docs/engineering/diagnosing-bugs.md:42 — defined here
- `phases` — docs/engineering/diagnosing-bugs.md:44 — defined here
- `model` — docs/engineering/diagnosing-bugs.md:59 — used here
- `harness` — docs/engineering/diagnosing-bugs.md:59 — used here
- `diagnose` — docs/engineering/diagnosing-bugs.md:77 — used here
- `standalone` — docs/engineering/diagnosing-bugs.md:91 — defined here
- `ask-matt` — docs/engineering/diagnosing-bugs.md:91 — used here
- `handoff` — docs/engineering/diagnosing-bugs.md:93 — used here
- `improve-codebase-architecture` — docs/engineering/diagnosing-bugs.md:93 — used here

## Structure
- What it does — docs/engineering/diagnosing-bugs.md:1
- When to reach for it — docs/engineering/diagnosing-bugs.md:7
- The tight loop is the skill — docs/engineering/diagnosing-bugs.md:23
- The gates between phases — docs/engineering/diagnosing-bugs.md:42
- Common questions — docs/engineering/diagnosing-bugs.md:56
- It's working if — docs/engineering/diagnosing-bugs.md:79
- Where it fits — docs/engineering/diagnosing-bugs.md:89

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/diagnosing-bugs.md:59 — Model invocation trigger over-fires on quick questions in models with lower activation thresholds (e.g. GPT-5.6-Sol), constructing formal reproduction harnesses rather than providing direct answers.
- doc-drift — docs/engineering/diagnosing-bugs.md:65 — Lacks a human review gate between hypothesis validation and fix implementation, permitting agents to modify code before the user agrees with the identified root cause.
- cross-file-contradiction — docs/engineering/diagnosing-bugs.md:68 — Step 3 of `/triage` overlaps with Phases 1–2 of `/diagnosing-bugs`, yet neither documentation file acknowledges the other's verification work or establishes an explicit artifact handoff.

## Observations
Defines a 10-tier preference ladder for constructing reproduction loops: failing test, curl/HTTP script against dev server, CLI fixture diff, headless browser assertion, replayed capture, throwaway harness, property/fuzz loop, git bisect script, differential loop, and human-in-the-loop bash script (`hitl-loop.template.sh`). Flags an escape hatch in Phase 5: if no clean test seam exists to lock down the bug, the agent must report the architectural seam absence rather than writing a shallow test, handing off the finding to `improve-codebase-architecture`. Documents security risks regarding unredacted secret leaks (tokens, credentials, HAR logs) during repro output reporting.

## Context cost
10701 bytes, ~2500 tokens. The shipped script `hitl-loop.template.sh` in the companion skill directory adds 1316 bytes.
