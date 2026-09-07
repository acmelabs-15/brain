---
package: rjm
name: expected answer
slug: expected-answer
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# expected answer

## Definition — verbatim
(used, not defined)

> "Each response is scored against the prompt's expected answer on a 1-5 scale by" — scripts/eval/eval-skill-overlap.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 13 | used here | Explains that model responses across evaluation conditions are scored against the prompt's expected answer. |

## Consumes
Domain reference documentation and expert specification of expected agent behavior.

## Produces
Reference evaluation artifact and benchmark criterion used by the LLM judge to score response quality.

## When applied
Provided inside scenario fixture files to guide judge evaluation when scoring model completions.

## Sub-concepts
none

## Part of
eval-skill-overlap

## Implementation status
defects: doc-drift, other

## Design notes
An evaluation fixture artifact providing the ground truth or reference standard against which an LLM judge evaluates candidate model outputs across comparative conditions.
