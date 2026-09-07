---
package: rjm
name: _SYNTHESIS_SCRIPT
slug: synthesis-script
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/sweep_copilot_synthesis.py, sha256: 6e2ee8a4efeefcaf6a250ad485ea4cab481fdaf8d9024465b82c936a6a4360d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SYNTHESIS_SCRIPT

## Definition — verbatim
(used, not defined)

> "_SYNTHESIS_SCRIPT = \".claude/skills/github/scripts/issue/invoke_copilot_assignment.py\"" — scripts/ci/sweep_copilot_synthesis.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/sweep_copilot_synthesis.py | 22 | defined here | Constant path pointing to the issue context synthesis script. |

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
_SYNTHESIS_SCRIPT is a private Python constant specifying the file path to the synthesis script rather than an SDLC lifecycle concept.
