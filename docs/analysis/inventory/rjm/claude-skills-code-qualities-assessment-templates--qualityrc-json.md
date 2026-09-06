---
package: rjm
path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json
type: skill
bytes: 660
unit: inv-rjm-102
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json, sha256: 31e9d74ee0b0c490d54d9ae9176b111a6b6bd6002550e4881e727afa7e3727d0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/templates/.qualityrc.json

## Purpose — required, verbatim
> "Test code doesn't need high testability" — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:23 (no explicit purpose statement)

## Design intent — required
Template configuration defining default minimum thresholds across five maintainability dimensions (cohesion: 7, coupling: 7, encapsulation: 7, testability: 6, nonRedundancy: 8), along with context-specific overrides (relaxing testability to 3 for test code, and excluding generated code) and path ignore patterns for generated code, protobufs, migrations, cache, and build directories. Without this configuration template, the quality assessment runner (`assess.py`) would lack standardized repository baselines and require manual CLI flag configuration for every invocation.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script assess.py — .claude/skills/code-qualities-assessment/scripts/assess.py:413
- skill code-qualities-assessment — .claude/skills/code-qualities-assessment/SKILL.md:196
- command build — .claude/commands/build.md:67

## Concepts named — required, verbatim
- `thresholds` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:2 — defined here
- `cohesion` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:3 — used here
- `coupling` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:6 — used here
- `encapsulation` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:9 — used here
- `testability` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:12 — used here
- `nonRedundancy` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:15 — used here
- `context` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:19 — defined here
- `ignore` — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:30 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides baseline numerical thresholds on a 1-10 scale for five core code qualities.
- Distinguishes production code from test code by reducing the testability requirement from 6 to 3.
- Excludes generated files, protobufs (`**/*.pb.py`, `**/*_pb2.py`), and compiler/package caches from assessment.

## Context cost
660 bytes (~165 tokens). Standalone JSON file.
