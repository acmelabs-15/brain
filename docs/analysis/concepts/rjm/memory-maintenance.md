---
package: rjm
name: memory-maintenance
slug: memory-maintenance
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# memory-maintenance

## Definition — verbatim
(used, not defined)

> "memory-maintenance" — scripts/validation/skill_contract_test_baseline.txt:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_contract_test_baseline.txt | 10 | defined here | Listed in baseline ratchet of skills documenting exit-code contracts without binding tests. |

## Consumes
Long-term memory stores, entity knowledge graphs, and session memory logs.

## Produces
Pruned, deduplicated, and re-indexed persistent memory artifacts.

## When applied
Scheduled periodically or triggered during maintenance to keep persistent memory repositories clean and coherent.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
out-of-scope

## Design notes
An excluded skill under rjm's memory exclusion boundary (§1.2), recorded from its citation in the contract test baseline; implementation is out of scope.
