---
package: rjm
name: judge-failure count
slug: judge-failure-count
kind: artifact
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

# judge-failure count

## Definition — verbatim
> "A refusal is visible. It sets a marker, it moves the judge-failure count, and" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 141 | used here | Visible metric incremented when an evaluation response is refused. |

## Consumes
Parse refusal events and validation failure markers.

## Produces
Measurable failure tallies reflecting harness rejection rates.

## When applied
Recorded whenever a model response fails validation or strict parsing.

## Sub-concepts
none

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
An observable metric tracked during model evaluations that records refused or unparseable judge outputs, ensuring evaluation failures remain visible to reviewers.
