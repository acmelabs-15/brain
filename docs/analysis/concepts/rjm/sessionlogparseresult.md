---
package: rjm
name: SessionLogParseResult
slug: sessionlogparseresult
kind: name-only
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/extract_evidence.py, sha256: a48eb99dbb8bf1d848093e8a5454641f6d9c478181bca655de52ff7835f826e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SessionLogParseResult

## Definition — verbatim
(used, not defined)

> "class SessionLogParseResult:" — .claude/skills/retrospective/scripts/extract_evidence.py:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/extract_evidence.py | 123 | defined here | Python dataclass encapsulating parsed session-log fields (work items, outcomes) and parsing error states. |

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
`SessionLogParseResult` is a code-level Python dataclass identifier in `extract_evidence.py` rather than an agent lifecycle concept, classified as `kind: name-only` per D-023.
