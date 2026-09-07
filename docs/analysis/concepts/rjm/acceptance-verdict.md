---
package: rjm
name: acceptance_verdict
slug: acceptance-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/spec_external_signal_gate.py, sha256: 510ded18b54df99fd7301f7c667dede1238db6d73fedc9cc195e61b081bd4604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# acceptance_verdict

## Definition — verbatim
(used, not defined)

> "def acceptance_verdict(body: str) -> str:" — scripts/quality_gate/spec_external_signal_gate.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/spec_external_signal_gate.py | 81 | defined here | Function evaluating PR body markdown to compute a deterministic PASS, FAIL, or UNKNOWN acceptance criteria verdict token. |

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
defects: orphan

## Design notes
acceptance_verdict is a Python helper function identifier in spec_external_signal_gate.py computing acceptance criteria status tokens rather than an autonomous lifecycle concept.
