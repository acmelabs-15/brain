---
package: rjm
name: hard stop
slug: hard-stop
kind: pattern
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

# hard stop

## Definition — verbatim
> "Hard stop, not a guideline." — .claude/skills/review/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 33 | defined here | Mandatory non-negotiable termination rule at round 3. |

## Consumes
Round 3 evaluation results and unresolved non-PASS findings.

## Produces
Immediate halt of automated remediation and escalation to human operator.

## When applied
> "Round 3: `PASS` ships; `WARN`, `CRITICAL_FAIL`, or `UNKNOWN` escalates to the operator with every open finding (axis, verdict, location, recommendation); no self-acknowledging a `WARN` to ship." — .claude/skills/review/SKILL.md:33

## Sub-concepts
none

## Part of
self-audit-round-cap, review

## Implementation status
defects: missing-path, doc-drift

## Design notes
Hard stop transforms advisory loop limits into a strict, non-negotiable operational boundary that prohibits silent retries or autonomous waiver of warnings. It guarantees that unresolved quality defects cannot be bypassed autonomously without explicit human acknowledgment.
