---
package: rjm
name: FormFactorComparison
slug: formfactorcomparison
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FormFactorComparison

## Definition — verbatim
> "Three pairwise recall deltas + CIs and a form-factor verdict." — scripts/eval/_report_aggregator.py:509

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_aggregator.py | 508 | defined here | Dataclass encapsulating three pairwise recall deltas, bootstrap CIs, token totals, and the form factor verdict. |
| scripts/eval/_report_writer.py | 21 | used here | Imported type annotation and payload source for rendering form-factor comparison sections in evaluation reports. |

## Consumes
Evaluation run records across agent, baseline, and skill prompt variants.

## Produces
Pairwise deltas, bootstrap confidence intervals, token totals, and FormFactorVerdict.

## When applied
Computed when evaluating agent prompts against inline skill equivalents to select between packaging formats.

## Sub-concepts
none

## Part of
reportaggregator, reportwriter

## Implementation status
clean

## Design notes
FormFactorComparison is an evaluation artifact capturing statistical recall comparisons and token costs across prompt formats (agent vs skill vs baseline) to decide optimal delivery form.
