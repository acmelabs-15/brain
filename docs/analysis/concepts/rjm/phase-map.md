---
package: rjm
name: Phase Map
slug: phase-map
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase Map

## Definition — verbatim
(used, not defined)

> "### Phase Map" — .claude/skills/analyze/references/DEVELOPMENT.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 24 | defined here | Tabular specification mapping analysis phases (1 to N) to step numbers and python functions. |

## Consumes
Step index and total steps count in analyze workflow.

## Produces
Mapping between user-facing phases and underlying script dispatch logic.

## When applied
Implementing, debugging, or extending the `analyze.py` step progression.

## Sub-concepts
exploration, focus-selection, investigation-planning, deep-analysis, synthesis

## Part of
development-guide

## Implementation status
defects: orphan

## Design notes
The structural table in `DEVELOPMENT.md` defining the 6 canonical phases of `skills/analyze/` (Exploration, Focus Selection, Investigation Planning, Deep Analysis, Verification, Synthesis) and their mapping to internal functions in `analyze.py`.
