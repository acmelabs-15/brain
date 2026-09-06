---
package: rjm
path: .claude/skills/spec-generator/references/spec-step0-gates.md
type: reference
bytes: 13193
unit: inv-rjm-173
in_scope_via: .claude/skills/spec-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/spec-generator/references/spec-step0-gates.md

## Purpose — required, verbatim
> "**Pass criteria** (all must be true):" — .claude/skills/spec-generator/references/spec-step0-gates.md:5 (no explicit purpose statement)

## Design intent — required
Defines the blocking evaluation logic, hedge-phrase blocklists, operational heuristics, halt protocols, and redaction rules for the Step 0 First Principles Gate of the specification lifecycle. It prevents speculative, low-demand, or ungrounded work from proceeding into formal specification by requiring concrete evidence of demand (naming at least 3 distinct requesters), specific requesters or systems, and direct observations (quotes, metrics, commit SHAs) while blocking aspirational hedge phrases. It also defines deterministic machine-readable halt blocks (`step0-halt`), mandatory secret redaction to prevent secret exposure in logs/metrics, execution degradation rules for installed-plugin environments, and kill criteria for the gate itself.

## Phase — required
rjm:spec

## Inputs — required
- Step 0 answers to six forcing questions (Q1 Demand Reality, Q2 Status Quo, Q3 Desperate Specificity, Q4 Narrowest Wedge, Q5 Observation, Q6 Future-fit) (.claude/skills/spec-generator/references/spec-step0-gates.md:7-11, 81, 91).
- Canonical hedge phrase blocklist (.claude/skills/spec-generator/references/spec-step0-gates.md:13-38).
- Entity alias mappings from `.agents/dictionaries/spec-entity-aliases.json` or fallback `<skill_dir>/data/spec-entity-aliases.json` (.claude/skills/spec-generator/references/spec-step0-gates.md:118-123).

## Outputs — required
- Machine-readable `step0-halt` fenced code block when any halt trigger fires (.claude/skills/spec-generator/references/spec-step0-gates.md:76-86).
- Redacted answer text to prevent CWE-209 and CWE-532 credential disclosure (.claude/skills/spec-generator/references/spec-step0-gates.md:96-103).
- Evaluation tally record appended to `.agents/metrics/STEP-0-METRICS.md` (.claude/skills/spec-generator/references/spec-step0-gates.md:140).
- Rotated metric files `.agents/metrics/STEP-0-METRICS-YYYYMMDDTHHMMSSZ.md` at review thresholds (.claude/skills/spec-generator/references/spec-step0-gates.md:142).

## Invokes — required
- script redact_secrets.py — .claude/skills/spec-generator/references/spec-step0-gates.md:99
- doc secret-redaction.md — .claude/skills/spec-generator/references/spec-step0-gates.md:103
- script metrics_writer.py — .claude/skills/spec-generator/references/spec-step0-gates.md:107
- command spec.md — .claude/skills/spec-generator/references/spec-step0-gates.md:125
- skill memory — .claude/skills/spec-generator/references/spec-step0-gates.md:125
- doc hedge-phrases.md — .claude/skills/spec-generator/references/spec-step0-gates.md:3

## Invoked by — required
- command spec.md — .claude/commands/spec.md:33
- config markdownlint-safe-config.yaml — .claude/hooks/PreToolUse/markdownlint-safe-config.yaml:194

## Concepts named — required, verbatim
- `Step 0 gate logic` — .claude/skills/spec-generator/references/spec-step0-gates.md:1 — defined here
- `Pass criteria` — .claude/skills/spec-generator/references/spec-step0-gates.md:5 — defined here
- `aspirational test` — .claude/skills/spec-generator/references/spec-step0-gates.md:9 — defined here
- `specificity test` — .claude/skills/spec-generator/references/spec-step0-gates.md:10 — defined here
- `speculative test` — .claude/skills/spec-generator/references/spec-step0-gates.md:11 — defined here
- `Canonical hedge phrase list` — .claude/skills/spec-generator/references/spec-step0-gates.md:13 — defined here
- `Halt triggers` — .claude/skills/spec-generator/references/spec-step0-gates.md:64 — defined here
- `step0-halt` — .claude/skills/spec-generator/references/spec-step0-gates.md:79 — defined here
- `Redaction pre-emit` — .claude/skills/spec-generator/references/spec-step0-gates.md:96 — defined here
- `Script and state resolution` — .claude/skills/spec-generator/references/spec-step0-gates.md:105 — defined here
- `Auto-mode behavior` — .claude/skills/spec-generator/references/spec-step0-gates.md:129 — defined here
- `STEP_0_REQUIRES_ELICITATION` — .claude/skills/spec-generator/references/spec-step0-gates.md:129 — defined here
- `Kill criteria for the gate itself` — .claude/skills/spec-generator/references/spec-step0-gates.md:131 — defined here
- `Tally instruction` — .claude/skills/spec-generator/references/spec-step0-gates.md:140 — defined here
- `Archival policy` — .claude/skills/spec-generator/references/spec-step0-gates.md:142 — defined here

## Structure
- #### Step 0 gate logic — .claude/skills/spec-generator/references/spec-step0-gates.md:1
- #### Script and state resolution (consumer-repo safe) — .claude/skills/spec-generator/references/spec-step0-gates.md:105

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/spec-generator/scripts/redact_secrets.py — .claude/skills/spec-generator/references/spec-step0-gates.md:111 — States that the skill bundle ships byte-identical copies of redact_secrets.py and metrics_writer.py under scripts/, but neither script exists in .claude/skills/spec-generator/scripts/.
- missing-path · .claude/skills/spec-generator/data/spec-entity-aliases.json — .claude/skills/spec-generator/references/spec-step0-gates.md:121 — States that the skill bundle ships a byte-identical copy under data/, but the data directory and file do not exist in .claude/skills/spec-generator/.
- doc-drift · step0_parser.py — .claude/skills/spec-generator/references/spec-step0-gates.md:13 — References step0_parser.py without path qualification; file is located under tests/commands/step0_parser.py.

## Observations
Provides an exceptionally thorough defensive design against common prompt-injection and information-leakage risks: mandatory secret redaction (CWE-209/CWE-532), safe append using O_NOFOLLOW and flock (CWE-59/CWE-367), deterministic resolution order for installed plugins vs repo checkouts, and an explicit quantitative kill-criteria evaluation loop at 30 invocations.

## Context cost
13,193 bytes (~3,300 tokens). Loads no external files directly.
