---
package: rjm
name: _judge_parse_failure
slug: judge-parse-failure
kind: name-only
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

# _judge_parse_failure

## Definition — verbatim
(used, not defined)

> "extractable, and the function named `_judge_parse_failure` extracts them. Its" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 110 | used here | Function extracting top-level integers despite its misleading name implying failure. |

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
`_judge_parse_failure` is an internal function in the evaluation parser that extracts numerical score fields from malformed payloads, classified as kind: name-only per D-023.
