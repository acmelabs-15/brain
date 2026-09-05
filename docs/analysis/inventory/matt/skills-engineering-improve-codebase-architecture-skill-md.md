---
package: matt
path: skills/engineering/improve-codebase-architecture/SKILL.md
type: skill
bytes: 5993
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/improve-codebase-architecture/SKILL.md

## Purpose — required, verbatim
> "Surface architectural friction and propose **deepening opportunities**: refactors that turn shallow modules into deep ones." — skills/engineering/improve-codebase-architecture/SKILL.md:9

## Design intent — required
An architectural maintenance and refactoring discovery skill designed to improve codebase testability and AI-navigability by turning shallow, leaky abstractions into deep modules. Executes in three structured phases: (1) organic exploration weighted toward active Git commit churn and guided by the deletion test and domain glossary; (2) generation of a visual, self-contained HTML report in the OS temp directory showing side-by-side before/after candidate cards; and (3) interactive conversational interrogation via `grilling` and `domain-modeling` to refine the chosen architecture candidate, update `CONTEXT.md`, and record ADRs. Configured with `disable-model-invocation: true` to prevent automatic model triggering.

## Phase — required
none

## Inputs — required
Recent commit history (`git log --oneline`), domain definitions (`CONTEXT.md`), architectural records (`docs/adr/`), and optional user guidance on targeted subsystems.

## Outputs — required
An interactive visual HTML architecture report written to `<tmpdir>/architecture-review-<timestamp>.html`, updated domain terms in `CONTEXT.md`, and ADRs recorded in `docs/adr/`.

## Invokes — required
- skill codebase-design — skills/engineering/improve-codebase-architecture/SKILL.md:13
- doc HTML-REPORT.md — skills/engineering/improve-codebase-architecture/SKILL.md:58
- skill grilling — skills/engineering/improve-codebase-architecture/SKILL.md:64
- skill domain-modeling — skills/engineering/improve-codebase-architecture/SKILL.md:66

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:52
- doc README.md — skills/engineering/README.md:12

## Concepts named — required, verbatim
- `deepening opportunities` — skills/engineering/improve-codebase-architecture/SKILL.md:9 — defined here
- `testability` — skills/engineering/improve-codebase-architecture/SKILL.md:9 — used here
- `AI-navigability` — skills/engineering/improve-codebase-architecture/SKILL.md:9 — used here
- `codebase-design` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `module` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `interface` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `depth` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `seam` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `adapter` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `leverage` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `locality` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `deletion test` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `CONTEXT.md` — skills/engineering/improve-codebase-architecture/SKILL.md:14 — used here
- `ADRs` — skills/engineering/improve-codebase-architecture/SKILL.md:14 — used here
- `YAGNI` — skills/engineering/improve-codebase-architecture/SKILL.md:20 — used here
- `sub-agent` — skills/engineering/improve-codebase-architecture/SKILL.md:27 — used here
- `shallow` — skills/engineering/improve-codebase-architecture/SKILL.md:30 — used here
- `HTML report` — skills/engineering/improve-codebase-architecture/SKILL.md:37 — defined here
- `grilling loop` — skills/engineering/improve-codebase-architecture/SKILL.md:62 — defined here
- `design-it-twice` — skills/engineering/improve-codebase-architecture/SKILL.md:71 — used here

## Structure
- Improve Codebase Architecture — skills/engineering/improve-codebase-architecture/SKILL.md:7
- Process — skills/engineering/improve-codebase-architecture/SKILL.md:16
- 1. Explore — skills/engineering/improve-codebase-architecture/SKILL.md:18
- 2. Present candidates as an HTML report — skills/engineering/improve-codebase-architecture/SKILL.md:37
- 3. Grilling loop — skills/engineering/improve-codebase-architecture/SKILL.md:62

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies clean tool composition: using Git history to avoid YAGNI speculative refactoring, offloading report rendering to ephemeral OS temp paths to prevent repo pollution, and reusing `grilling` and `domain-modeling` primitives to resolve the chosen candidate into concrete ADRs.

## Context cost
5993 bytes, 72 lines, ~1400 tokens. Dynamically invokes `codebase-design`, `grilling`, and `domain-modeling`.
