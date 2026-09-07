---
package: rjm
name: generate_experiment_id
slug: generate-experiment-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/generate_experiment.py, sha256: 73b8a865a5fda70135d588b957fadcea836fc97f915b8e10accd54420010934e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# generate_experiment_id

## Definition — verbatim
(used, not defined)

> "def generate_experiment_id(name: str) -> str:" — .claude/skills/chaos-experiment/scripts/generate_experiment.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/generate_experiment.py | 65 | defined here | Utility function generating a slugified date-stamped experiment ID from an experiment name. |

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
defects: doc-drift

## Design notes
generate_experiment_id is a Python function identifier in generate_experiment.py that constructs standardized experiment identifiers, classified as name-only per D-023.
