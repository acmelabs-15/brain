---
package: rjm
name: Verdict Taxonomy
slug: verdict-taxonomy
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verdict Taxonomy

## Definition — verbatim
> "## Verdict Taxonomy" — .claude/skills/security-review/SKILL.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 184 | defined here | Defines the three mutually exclusive terminal verdicts (IDENTIFY, OK, ESCALATE) and their binding trigger criteria for security review. |

## Consumes
Threat model evaluation, risk severity ratings, and diff completeness.

## Produces
Standardized verdict assignment governing whether code is approved, remediated, or escalated.

## When applied
Applied at the conclusion of security reviews to format the final evaluation output.

## Sub-concepts
identify, ok, escalate

## Part of
security-review

## Implementation status
clean

## Design notes
The classification gate defining permitted terminal outcomes for inline security review. In contrast to the multi-agent PR review verdicts (APPROVED, CONDITIONAL, BLOCKED), this taxonomy defines three tokens (IDENTIFY, OK, ESCALATE) tailored for benchmark scoring and deterministic evaluation in eval-agent-vs-baseline.py.
