---
package: rjm
name: pattern_synthesis
slug: pattern-synthesis
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pattern_synthesis

## Definition — verbatim
> "<pattern_synthesis>" — .claude/skills/analyze/scripts/analyze.py:361

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 361 | defined here | Synthesis step instruction guiding identification of systemic cross-file patterns and root causes. |

## Consumes
Consolidated findings across multiple files and investigation focus areas.

## Produces
Systemic pattern identifications, shared root cause explanations, and architectural prevention recommendations.

## When applied
Invoked during Phase 6 (Synthesis) alongside final consolidation before presenting recommendations.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`pattern_synthesis` elevates codebase analysis from a laundry list of point defects to systemic architectural diagnosis, identifying recurring anti-patterns and cross-cutting causes that explain multiple symptoms.
