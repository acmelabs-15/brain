---
package: rjm
name: extract_scope
slug: extract-scope
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py, sha256: 1941714a412d29e03cb5aaca38a66fbff2cbc71e3ff9c7491192f63f73455c4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# extract_scope

## Definition — verbatim
(used, not defined)

> "def extract_scope(content: str) -> str:" — .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py | 250 | defined here | Python function extracting the scope title from threat model markdown headers. |

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
clean

## Design notes
`extract_scope` is a Python parsing helper function in `generate_mitigation_roadmap.py` extracting document scope headings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
