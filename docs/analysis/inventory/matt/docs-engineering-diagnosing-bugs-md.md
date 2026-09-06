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
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/diagnosing-bugs.md

## Purpose — required, verbatim
> "`diagnosing-bugs` runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — docs/engineering/diagnosing-bugs.md:3

## Design intent — required
Documents the methodology, phase gates, and operational boundaries of the `diagnosing-bugs` skill. Enforces a strict empirical gate: blocking agents from hypothesizing or writing fixes until a tight, deterministic, red-capable feedback loop has been executed and demonstrated. Details a ten-level preference ladder for constructing reproduction harnesses, ranging from unit tests to curl commands to human-in-the-loop bash scripts. Implements strict phase gates requiring minimized reproductions, 3–5 falsifiable hypotheses, tagged debug logging (`[DEBUG-a4f2]`), clean log removal, and regression tests written against authentic architectural seams. Warns of over-firing on low-threshold models, secret leakage in raw dumps, and security scanner false positives on shipped scripts.

## Phase — required
matt:standalone

## Inputs — required
- Defect report, bug symptom description, or performance timing regression.
- Running codebase, development servers, fixture inputs, or traffic captures.
- User authorization for environment access, temporary instrumentation, or interactive input.
- Template script: `scripts/hitl-loop.template.sh`.

## Outputs — required
- A verified, minimized reproduction command that reproduces the failure (red).
- Ranked list of 3–5 falsifiable hypotheses with predictions.
- Tagged debug probes and subsequent cleanup.
- Regression test written at a valid architectural seam.
- Verified fix turning the reproduction green, with root-cause hypothesis documented in commit or PR message.

## Invokes — required
- skill triage — docs/engineering/diagnosing-bugs.md:18
- skill prototype — docs/engineering/diagnosing-bugs.md:19
- skill tdd — docs/engineering/diagnosing-bugs.md:20
- skill improve-codebase-architecture — docs/engineering/diagnosing-bugs.md:21
- script scripts/hitl-loop.template.sh — docs/engineering/diagnosing-bugs.md:36
- skill ask-matt — docs/engineering/diagnosing-bugs.md:91
- skill handoff — docs/engineering/diagnosing-bugs.md:93

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `diagnosing-bugs` — docs/engineering/diagnosing-bugs.md:3 — defined here
- `regression test` — docs/engineering/diagnosing-bugs.md:3 — defined here
- `tight` — docs/engineering/diagnosing-bugs.md:5 — defined here
- `feedback loop` — docs/engineering/diagnosing-bugs.md:5 — defined here
- `agent` — docs/engineering/diagnosing-bugs.md:5 — used here
- `bisection` — docs/engineering/diagnosing-bugs.md:5 — used here
- `seam` — docs/engineering/diagnosing-bugs.md:21 — used here
- `harness` — docs/engineering/diagnosing-bugs.md:32 — used here
- `human-in-the-loop` — docs/engineering/diagnosing-bugs.md:36 — used here
- `scripts/hitl-loop.template.sh` — docs/engineering/diagnosing-bugs.md:36 — used here
- `reproduction rate` — docs/engineering/diagnosing-bugs.md:38 — defined here
- `environment` — docs/engineering/diagnosing-bugs.md:40 — used here
- `gates` — docs/engineering/diagnosing-bugs.md:44 — defined here
- `falsifiable hypotheses` — docs/engineering/diagnosing-bugs.md:50 — defined here
- `debug log` — docs/engineering/diagnosing-bugs.md:51 — used here
- `correct seam` — docs/engineering/diagnosing-bugs.md:54 — defined here
- `model` — docs/engineering/diagnosing-bugs.md:59 — used here
- `leak secrets` — docs/engineering/diagnosing-bugs.md:70 — used here
- `commit` — docs/engineering/diagnosing-bugs.md:86 — used here
- `PR` — docs/engineering/diagnosing-bugs.md:86 — used here

## Structure
- ## What it does — docs/engineering/diagnosing-bugs.md:1
- ## When to reach for it — docs/engineering/diagnosing-bugs.md:7
- ## The tight loop is the skill — docs/engineering/diagnosing-bugs.md:23
- ## The gates between phases — docs/engineering/diagnosing-bugs.md:42
- ## Common questions — docs/engineering/diagnosing-bugs.md:56
- ## It's working if — docs/engineering/diagnosing-bugs.md:79
- ## Where it fits — docs/engineering/diagnosing-bugs.md:89

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/diagnosing-bugs.md:59 — Over-triggering on low-activation threshold models (such as GPT-5.6-Sol), initiating heavy reproduction rituals for simple questions (issue #578).
- missing-path — docs/engineering/diagnosing-bugs.md:62 — Lacks proactive audit capability: does not support scanning codebases for general performance bottlenecks, only handling regressions with known symptoms (issue #431).
- other — docs/engineering/diagnosing-bugs.md:64 — Missing human checkpoint between instrumentation and fix: agent proceeds automatically on its own ranked hypotheses without waiting for human agreement on root cause (issue #124).
- doc-drift — docs/engineering/diagnosing-bugs.md:67 — Undocumented overlap with `triage`: both skills implement reproduction passes without cross-referencing each other.
- other — docs/engineering/diagnosing-bugs.md:70 — Credential and sensitive data leakage hazard: unredacted HAR files, logs, and core dumps can be captured and shared publicly (issue #674).
- doc-drift — docs/engineering/diagnosing-bugs.md:74 — Shipped executable shell script (`hitl-loop.template.sh`) and curl instructions trigger false positive high-risk alerts on static security scanners (Snyk).
- doc-drift — docs/engineering/diagnosing-bugs.md:77 — Breaking rename from `/diagnose` to `/diagnosing-bugs` in v1.0.0 broke wrapper prompts and chaining skills.

## Observations
Places primary diagnostic value on the empirical gate: constructing a tight, fast, deterministic feedback loop before any hypothesis generation is permitted. Details the ten-tier construction ladder. Outlines a crucial architectural escape hatch where inability to write a regression test at a clean seam is treated as an architectural finding routed to `improve-codebase-architecture`.

## Context cost
10701 bytes, approximately 2600 tokens.
