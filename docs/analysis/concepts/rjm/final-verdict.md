---
package: rjm
name: FINAL VERDICT
slug: final-verdict
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FINAL VERDICT

## Definition — verbatim
> "set the FINAL VERDICT to the Stage-1 `CRITICAL_FAIL`, and emit only the Stage-1 findings." — .claude/skills/review/SKILL.md:73

## Also called — verbatim
> "merged verdict" — .claude/skills/review/SKILL.md:67

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 73 | defined here | Defines overall review result line emitted at completion. |

## Consumes
Stage-1 short-circuit outcome or aggregated verdict array from all evaluated review axes.

## Produces
Final bold verdict outcome line (`PASS`, `WARN`, `CRITICAL_FAIL`, `UNKNOWN`) gating downstream release.

## When applied
Emitted at the completion of `/review` evaluation (or immediately upon Stage-1 short-circuit).

## Sub-concepts
verdict-token

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
FINAL VERDICT represents the terminal gate assessment emitted by `/review`. It serves as the authoritative boundary condition gating release into the `/ship` phase, requiring either an unqualified PASS or fully acknowledged warnings before code can be deployed or merged.
