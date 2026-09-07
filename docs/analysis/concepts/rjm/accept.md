---
package: rjm
name: Accept
slug: accept
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Accept

## Definition — verbatim
> "| **Accept** | Cost of mitigation exceeds risk | Low-impact, unlikely threat |" — .claude/skills/threat-modeling/SKILL.md:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 244 | defined here | Threat mitigation strategy selected when the cost of mitigation exceeds the evaluated risk. |
| scripts/eval/_optimizer_adapters.py | 21 | used here | Strict held-out evaluation threshold decision where candidate optimizations must satisfy all assertions to earn acceptance. |

## Consumes
Risk assessments, cost-benefit analyses, business justifications, or evaluation pass rates.

## Produces
Documented accepted risk justifications with compensating controls, or optimizer gate adoption verdicts.

## When applied
Applied in threat modeling when risk reduction cost is disproportionate to threat severity, and in eval gating when candidate changes meet strict quality thresholds.

## Sub-concepts
none

## Part of
threat-modeling, optimizer-adapters

## Implementation status
defects: exit-code-mismatch, missing-path, other

## Design notes
`Accept` represents a deliberate operational decision in `rjm`—either formalizing business tolerance of low-impact risks with explicit justification, or granting gate approval in automated evaluation adapters when all verification assertions pass.
