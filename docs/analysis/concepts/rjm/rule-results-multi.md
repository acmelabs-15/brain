---
package: rjm
name: rule_results_multi
slug: rule-results-multi
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rule_results_multi

## Definition — verbatim
> "Reduce a rule scenario across repeated runs, then threshold once." — scripts/eval/_optimizer_adapters.py:472

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 635 | used here | Cited as the multi-run reduction mechanism addressing LLM judge noise on rule evaluations. |
| scripts/eval/_optimizer_adapters.py | 464 | defined here | Defined as an adapter function reducing repeated rule evaluation runs before applying activation score thresholds. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other (omitted from `__all__` in `scripts/eval/_optimizer_adapters.py:34`); citing file `ADR-087` records defects: missing-path, doc-drift, internal-contradiction

## Design notes
`rule_results_multi` is a Python function identifier in `scripts/eval/_optimizer_adapters.py` that reduces scenario evaluations across repeated LLM judge runs before thresholding; it is a code-level implementation function rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
