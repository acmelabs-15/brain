---
package: rjm
name: _recover_verdict
slug: recover-verdict
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _recover_verdict

## Definition — verbatim
(used, not defined)

> "`_recover_verdict` returning `None` means no *embedded complete object* was" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 108 | used here | Function returning `None` when no embedded complete object is found. |
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 178 | used here | Contrasted with `_salvage_scores` as handling fenced verdicts rather than broken strings. |

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
`_recover_verdict` is a Python helper function in the evaluation parser that recovers complete JSON verdict objects embedded inside fenced markdown blocks, classified as kind: name-only per D-023.
