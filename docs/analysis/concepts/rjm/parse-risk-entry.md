---
package: rjm
name: parse_risk_entry
slug: parse-risk-entry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/scripts/pre-mortem.py, sha256: 0aced954bc1e31acd2fedc4e9bb52abece6b0666c4fb2daab207bcab735c6fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_risk_entry

## Definition — verbatim
(used, not defined)

> "def parse_risk_entry(text: str) -> Risk | None:" — .claude/skills/pre-mortem/scripts/pre-mortem.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/scripts/pre-mortem.py | 75 | defined here | Parsing function that extracts structured Risk dataclass fields (ID, name, scores, mitigations) from markdown blocks. |

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
defects: exit-code-mismatch, other

## Design notes
parse_risk_entry is a Python helper function identifier in pre-mortem.py that parses markdown text sections into structured Risk instances rather than an independent lifecycle concept.
