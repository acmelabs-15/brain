---
package: rjm
name: controlled vocabulary
slug: controlled-vocabulary
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# controlled vocabulary

## Definition — verbatim
> "canonical labels (the controlled vocabulary)." — scripts/eval/eval-prompt-change.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-prompt-change.py | 49 | defined here | Defined as the fixed set of canonical labels that the judge prompt instructs the LLM to emit. |

## Consumes
Allowed categorical verdict options specified in scenario configurations.

## Produces
Constrained LLM judge classification responses restricted to permitted canonical labels.

## When applied
Applied during scenario judgment to force binary or categorical classification.

## Sub-concepts
verdict-options, expected-verdict

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
An evaluation pattern that instructs LLM judges to select only from a fixed set of canonical verdict labels, eliminating free-form parsing ambiguity and enabling deterministic pass/fail comparison.
