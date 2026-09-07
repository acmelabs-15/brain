---
package: rjm
name: PyYAML
slug: pyyaml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PyYAML

## Definition — verbatim
(used, not defined)

> "logger.warning(\"PyYAML not installed; falling back to regex YAML validation\")" — .codeql/scripts/test_codeql_config.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/test_codeql_config.py | 70 | used here | Warning log citing PyYAML library absence and falling back to regex YAML validation. |

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
defects: exit-code-mismatch, script-bug

## Design notes
PyYAML is an external Python library dependency identifier used for YAML parsing and validation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
