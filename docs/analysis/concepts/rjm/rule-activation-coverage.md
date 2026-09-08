---
package: rjm
name: Rule Activation Coverage
slug: rule-activation-coverage
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rule Activation Coverage

## Definition — verbatim
> "Rule Activation Coverage" — scripts/validation/pre_pr_sequence.py:322

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 322 | defined here | Pre-PR ratchet gate checking that rules and skills have activation scenarios or recorded baselines. |

## Consumes
Rule files, skills, activation test scenarios, and the rule activation ratchet baseline.

## Produces
Pass/fail gate verdict enforcing activation coverage without regression.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Rule Activation Coverage is a ratcheted quality gate (Issue #3457) verifying that every rule and skill is backed by an activation test scenario confirming the agent invokes it when appropriate. Failing closed on missing scenarios or deleted artifacts, it guarantees rules are verified rather than theoretical.
