---
package: rjm
name: NO_DATA
slug: no-data
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NO_DATA

## Definition — verbatim
> "- NO_DATA: no skills were scored (empty results). This is distinct from" — scripts/eval/eval-knowledge-integration.py:368

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-knowledge-integration.py | 368 | defined here | Defined as a distinct kill gate verdict representing empty evaluation runs to prevent false-negative STOP failures. |

## Consumes
Evaluation assessment results dictionary.

## Produces
Non-failing or informational gate verdict identifying unexecuted evaluations due to missing prompts.

## When applied
When evaluation yields empty results dictionaries, separating absence of data from regression failures.

## Sub-concepts
none

## Part of
kill-gate

## Implementation status
defects: doc-drift

## Design notes
A gate verdict in rjm's knowledge integration harness distinguishing vacuous or unconfigured test runs from genuine skill performance failures, preventing empty suites from masking configuration bugs as test failures.
