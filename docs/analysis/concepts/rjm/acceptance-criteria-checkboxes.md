---
package: rjm
name: acceptance-criteria checkboxes
slug: acceptance-criteria-checkboxes
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# acceptance-criteria checkboxes

## Definition — verbatim
> "Mechanically extract acceptance-criteria checkboxes from a PR/issue body." — scripts/external_signals/acceptance_criteria.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/acceptance_criteria.py | 2 | defines | Module docstring defining mechanical extraction of acceptance-criteria checkboxes from PR or issue bodies. |

## Consumes
Markdown task-list checkboxes (`- [ ]` / `- [x]`) located under an acceptance criteria heading in a PR or issue body.

## Produces
Parsed `Criterion` objects evaluated for checked status and unified diff keyword evidence.

## When applied
Executed in `ai-spec-validation.yml` CI quality gates to prevent changes from merging with unchecked acceptance criteria.

## Sub-concepts
criterion

## Part of
acceptance-criteria

## Implementation status
clean

## Design notes
Markdown task-list checkboxes located under an acceptance criteria section in a PR or issue body, mechanically evaluated as an externally-grounded quality gate signal to prevent LLMs from being the sole arbiter of spec compliance.
