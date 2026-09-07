---
package: rjm
name: Stop hook
slug: stop-hook
kind: technique
package_phase: rjm:session-end
implementation_in_scope: false
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Stop hook

## Definition — verbatim
(used, not defined)

> "Retrospective workflow in CI. Until #3349 a Stop hook also wrote a skeleton" — .claude/skills/ai-agents-docs-of-record/SKILL.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 116 | used here | Documented as the discontinued session-end hook that automatically generated retrospective skeleton placeholders. |

## Consumes
Session termination signals.

## Produces
Retrospective skeleton placeholder files (historically).

## When applied
Triggered at session termination prior to its removal in issue #3349.

## Sub-concepts
none

## Part of
ai-agents-docs-of-record

## Implementation status
not-implemented

## Design notes
An automated lifecycle hook invoked at session completion to stamp retro skeleton templates. It was discontinued and deleted in issue #3349 because unattended skeleton generation created empty placeholder records and desynchronized catalog indices.
