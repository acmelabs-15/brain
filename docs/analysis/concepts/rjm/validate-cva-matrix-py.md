---
package: rjm
name: validate-cva-matrix.py
slug: validate-cva-matrix-py
kind: name-only
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate-cva-matrix.py

## Definition — verbatim
(used, not defined)

> "python3 .claude/skills/cva-analysis/scripts/validate-cva-matrix.py cva-matrix.md" — .claude/skills/cva-analysis/SKILL.md:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 272 | defined here | Validation script executed in Phase 5 to verify matrix dimensions, cell population, and pattern suggestions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`validate-cva-matrix.py` is the CLI validation script in `cva-analysis` that programmatically checks matrix structure and outputs pattern suggestions, classified as `kind: name-only` per D-023 as a script file identifier rather than an SDLC lifecycle concept.
