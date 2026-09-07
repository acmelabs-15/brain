---
package: rjm
name: _names_a_score_field_twice
slug: names-a-score-field-twice
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _names_a_score_field_twice

## Definition — verbatim
(used, not defined)

> "The guard that refuses exactly this, `_names_a_score_field_twice`, already" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 130 | used here | Guard function moved to run before any parse to reject nested duplicate score keys. |

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
`_names_a_score_field_twice` is an internal guard function in the evaluation parser that scans payloads for multiple occurrences of score field names, classified as kind: name-only per D-023.
