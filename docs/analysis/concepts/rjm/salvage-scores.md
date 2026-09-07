---
package: rjm
name: _salvage_scores
slug: salvage-scores
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _salvage_scores

## Definition — verbatim
(used, not defined)

> "`_salvage_scores`. Successful samples store no payload" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:321

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 321 | used here | Cited as the salvage function to feed truncated raw judge payloads to after stripping the error prefix. |
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 178 | used here | Analyzed alongside `_recover_verdict` for divergent payload acceptance on broken strings versus fenced blocks. |

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
`_salvage_scores` is a helper function in the rule audit evaluation parser that extracts numerical score triples from malformed LLM judge outputs, classified as kind: name-only per D-023.
