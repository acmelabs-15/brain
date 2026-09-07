---
package: rjm
name: preflight
slug: preflight
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

# preflight

## Definition — verbatim
> "The preflight reads headers only and answers unknown to every content problem, so the converse also holds: a malformed verdict mapping cannot answer in place of the ledger, and the full read happens after the guards." — .agents/architecture/ADR-087-held-out-validated-improvement.md:310-312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 310 | defined here | Preliminary header-only verification stage in gate execution that detects invalid comparisons before touching the ledger. |

## Consumes
Input file headers, split fingerprint, and declared corpus identifiers.

## Produces
Early zero-cost refusal verdict or authorization to proceed to ledger locking and full scoring.

## When applied
Executed as the initial validation step of `optimize-artifact.py gate` before acquiring locks or debiting consultations.

## Sub-concepts
none

## Part of
accept-decision

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A zero-cost validation gate executing before consultation ledger charging. By checking file headers, split drift, and corpus mismatches prior to reading full task outcome mappings, preflight ensures invalid comparisons are refused without wasting consultations or leaking held-out information.
