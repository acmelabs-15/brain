---
package: rjm
name: clean-parse branch
slug: clean-parse-branch
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# clean-parse branch

## Definition — verbatim
> "clean-parse branch, sets nothing, and is indistinguishable from a judge that" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 144 | used here | Control path returning valid scores without setting salvage markers. |

## Consumes
Syntactically valid evaluation output payloads.

## Produces
Direct score values admitted into reduction without salvage markers.

## When applied
Traversed when an incoming payload passes strict schema validation without error.

## Sub-concepts
none

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
The standard execution path in an evaluation parser that processes well-formed responses without setting salvage markers, posing risks if malformed data passes through undetected.
