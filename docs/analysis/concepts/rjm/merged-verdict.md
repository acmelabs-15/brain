---
package: rjm
name: merged verdict
slug: merged-verdict
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

# merged verdict

## Definition — verbatim
> "The final merged verdict comes from `merge_verdicts`" — .claude/skills/review/SKILL.md:67

## Also called — verbatim
> "FINAL VERDICT" — .claude/skills/review/SKILL.md:140

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 67 | defined here | Defines final overall verdict computed from all executed axes. |

## Consumes
Array of verdict tokens collected from Stage-1 spec compliance and all executed Stage-2 and local skill axes.

## Produces
Unified top-level verdict token (`PASS`, `WARN`, `CRITICAL_FAIL`, or `UNKNOWN`).

## When applied
Computed during Step 7 of `/review` via `merge_verdicts` (unless short-circuited by a Stage-1 `CRITICAL_FAIL`).

## Sub-concepts
verdict-token

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The merged verdict resolves diverse, multi-perspective review findings into an authoritative final decision according to strict precedence rules. By prioritizing `CRITICAL_FAIL` over warnings and treating `UNKNOWN` as an informational flag that never overrides real findings, rjm ensures that critical issues always block deployment while inconclusive checks remain visible.
