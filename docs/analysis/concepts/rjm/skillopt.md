---
package: rjm
name: SkillOpt
slug: skillopt
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillOpt

## Definition — verbatim
> "Prior art for held-out-gated skill" — .agents/architecture/ADR-087-held-out-validated-improvement.md:940

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 940 | used here | Cited in references as foundational prior art for held-out-gated skill optimization. |
| scripts/eval/_optimizer_core.py | 16 | used here | Cited in module docstring as the source of discipline for treating artifacts as trainable state. |

## Consumes
Scored rollouts of candidate artifact variants against held-out task splits.

## Produces
Optimization discipline and acceptance rules requiring candidate artifacts to strictly beat incumbents on unseen tasks.

## When applied
During iterative prompt and skill optimization loops.

## Sub-concepts
none

## Part of
none

## Implementation status
clean (citing inventory card `ADR-087` records defects: missing-path, doc-drift, internal-contradiction; `_optimizer_core.py` is clean)

## Design notes
SkillOpt is an academic methodology (Yang et al., Microsoft, arXiv:2605.23904) that treats agent skills and prompts as external trainable parameters optimized against scored rollouts. In rjm's architecture, it serves as the foundational reference for held-out validation, extended with cryptographic split fingerprinting and consultation caps to prevent unattended agents from exploiting writable evaluation fixtures.
