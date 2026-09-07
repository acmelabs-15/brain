---
package: rjm
name: steering-matcher
slug: steering-matcher
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
  - {path: .claude/skills/steering-matcher/steering-matcher.skill, sha256: 528fcbe473cd2fe26f50130e3972a84a6646f17661f43330673cf4b74700362b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# steering-matcher

## Definition — verbatim
> "name: steering-matcher" — .claude/skills/steering-matcher/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-gather/SKILL.md | 136 | used here | Listed in skill composition as a sibling preflight skill in the /build command chain. |
| .claude/skills/steering-matcher/SKILL.md | 2 | defined here | Frontmatter name defining the steering glob matching skill. |
| .claude/skills/steering-matcher/steering-matcher.skill | 2 | defined here | Name attribute in skill manifest describing the steering matcher tool. |

## Consumes
Modified file paths and repository steering rule definitions.

## Produces
Applicable steering guidance matching the specific paths being changed.

## When applied
Invoked during build preflight when an orchestrator must inject context-aware architectural constraints based on affected files.

## Sub-concepts
none

## Part of
build

## Implementation status
clean

## Design notes
A context-filtering technique in rjm that maps modified files against glob patterns to dynamically deliver relevant architectural steering rules to agents without bloating prompt context.
