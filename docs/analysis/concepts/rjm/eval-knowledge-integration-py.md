---
package: rjm
name: eval-knowledge-integration.py
slug: eval-knowledge-integration-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-knowledge-integration.py

## Definition — verbatim
(used, not defined)

> "Skill context value measurement (baseline vs enhanced)." — scripts/eval/README.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 5 | used here | Referenced as a primary consumer script using the Anthropic API helper module. |
| scripts/eval/eval-skill-overlap.py | 4 | used here | Referenced in module docstring explaining complementary evaluation coverage. |
| scripts/eval/README.md | 91 | defined here | Listed in evaluation script matrix as measuring skill context value against baselines. |

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
defects: missing-path, doc-drift, script-bug, other

## Design notes
eval-knowledge-integration.py is a Python evaluation script filename measuring skill context value rather than an autonomous lifecycle concept, classified as kind: name-only per D-023.
