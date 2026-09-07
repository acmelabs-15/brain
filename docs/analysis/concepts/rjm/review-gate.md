---
package: rjm
name: review gate
slug: review-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# review gate

## Definition — verbatim
> "Require handoff to reviewer before finalization." — .agents/governance/SKILL-PHASE-GATES.md:61

## Also called — verbatim
- "Review Gate" — .agents/governance/SKILL-PHASE-GATES.md:59

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-053-adr-exception-criteria.md | 100 | used here | Verified through the architect agent review gate in CI to prevent exceptions without Chesterton's Fence analysis. |
| .agents/governance/SKILL-PHASE-GATES.md | 59 | defined here | Defined as Phase Gate 3 requiring mandatory handoff to an independent reviewer before skill finalization. |
| .claude/skills/dx-review/SKILL.md | 242 | defined here | Implemented as developer experience gate verifying API ergonomics and documentation quality before release. |

## Consumes
Completed implementation artifacts, test reports, and phase deliverables.

## Produces
A documented review verdict (`PASS`, `PASS_WITH_CONCERNS`, or `CRITICAL_FAIL`) authorizing or blocking finalization.

## When applied
Triggered whenever a phase produces an artifact requiring independent validation before progression or PR merge.

## Sub-concepts
- critical-fail

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path, orphan

## Design notes
Review gates establish mandatory handoff checkpoints throughout rjm's execution pipeline, ensuring that autonomous workers cannot self-certify their own deliverables. By requiring an independent review agent (such as qa, security, or architect) to inspect artifacts against formal acceptance criteria, review gates enforce quality standards and prevent premature progression.
