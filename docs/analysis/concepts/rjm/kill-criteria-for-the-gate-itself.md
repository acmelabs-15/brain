---
package: rjm
name: Kill criteria for the gate itself
slug: kill-criteria-for-the-gate-itself
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Kill criteria for the gate itself

## Definition — verbatim
> "Kill criteria for the gate itself" — .claude/skills/spec-generator/references/spec-step0-gates.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 131 | defined here | Quantitative governance criteria evaluated every 30 invocations to loosen or remove the gate if ineffective. |

## Consumes
Evaluation records in `.agents/metrics/STEP-0-METRICS.md` across 30 invocations.

## Produces
Governance determination to loosen, recalibrate, or delete the Step 0 gate based on false-positive or abandonment thresholds.

## When applied
> "at 30 invocations, this gate is reviewed against four kill criteria documented in `REQ-006-13`:" — .claude/skills/spec-generator/references/spec-step0-gates.md:131

## Sub-concepts
none

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Embeds empirical self-regulation into lifecycle governance by defining quantitative criteria (false positive rate ≥30%, bypass rate ≥20%, author abandonment ≥3 sessions/week) to eliminate ineffective gates and prevent bureaucratic calcification.
