---
package: rjm
name: accept decision
slug: accept-decision
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# accept decision

## Definition — verbatim
> "The accept decision reads the selection group and nothing else." — .agents/architecture/ADR-087-held-out-validated-improvement.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 154 | defined here | Defined as the evaluation gate decision that inspects selection group results to determine whether a candidate is adopted. |

## Consumes
Baseline and candidate evaluation results on the selection group, split commitment, and consultation budget ledger.

## Produces
ACCEPT or REJECT gate verdict, updated ledger state, and decision payload.

## When applied
Invoked via `optimize-artifact.py gate` to determine whether candidate modifications are integrated into the artifact.

## Sub-concepts
discordant-pairs, mcnemar-s-exact-test

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The core validation gate deciding whether an artifact modification represents a genuine performance gain. It enforces that decisions only inspect the selection group, increments the consultation counter, rejects any pass-to-fail regression, and verifies corpus alignment.
