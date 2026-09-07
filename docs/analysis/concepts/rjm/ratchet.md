---
package: rjm
name: ratchet
slug: ratchet
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
  - {path: scripts/validation/agent_skill_discriminator_baseline.py, sha256: 25e7f6b164c7be6361c22acacc683a54b4b053fb01051e8c0643d223f09dfef3}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ratchet

## Definition — verbatim
> "Ratchet: entries may be removed, never added. Burn down over time." — scripts/validation/skill_contract_test_baseline.txt:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 125 | defined here | Establishes the hook budget ratchet that recalculates declared worst-case durations against the base ref. |
| scripts/validation/agent_skill_discriminator_baseline.py | 14 | used here | Implements isolated baseline comparison logic to ratchet discriminator scores across repository agents. |
| scripts/validation/check_adr_lifecycle.py | 11 | used here | Notes that scan, check violation reporting, and ratchet arithmetic must be managed together as unified invariants. |
| scripts/validation/check_adr_lifecycle.py | 60 | used here | Governs ADR schema verification through per-check baselines where count reductions pass and any increase fails. |
| scripts/validation/checks_ratchet.py | 42 | defined here | Declares the `Ratchet` dataclass structure used to run registered baseline-tracked validation commands. |
| scripts/validation/skill_contract_test_baseline.txt | 2 | defined here | Defines the grandfathered test baseline policy mandating that entries may only burn down and never be added. |
| scripts/validation/skill_size.py | 11 | used here | Enforces prompt size constraints using a ratchet that decreases toward the target ceiling as skills decompose. |

## Consumes
Committed baseline files, base-ref repository states, and current working tree measurement counts.

## Produces
Pass/fail regression verdicts indicating whether violation counts, timeout budgets, or sizes have increased relative to the baseline.

## When applied
Executed in pre-push and CI validation pipelines to prevent quality regressions, cap creep, and technical debt accumulation without requiring immediate complete remediation of existing legacy code.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path

## Design notes
A ratchet is an automated verification mechanism in rjm that enforces monotonic improvement by ensuring metrics, violation counts, and timeout budgets may only stay flat or decrease, never rise. Rather than establishing all-or-nothing quality gates that block active development on grandfathered code, ratchets freeze current state into baselines and fail on any net regression, enabling gradual burndown over time.
