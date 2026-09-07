---
package: rjm
name: harness-inherited model
slug: harness-inherited-model
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# harness-inherited model

## Definition — verbatim
> "Per ADR-080, skills default to the harness-inherited model. Omit the `model:`" — .claude/skills/CLAUDE.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 50 | defined here | Established under ADR-080 as the default model execution policy by omitting the frontmatter `model:` field. |

## Consumes
Skill frontmatter without an explicit `model:` configuration.

## Produces
Dynamic runtime inheritance of the host agent harness's default model.

## When applied
Applied as the standard baseline for all skill definitions per ADR-080.

## Sub-concepts
none

## Part of
model-selection

## Implementation status
clean

## Design notes
The harness-inherited model pattern represents the baseline execution architecture for skills in rjm, avoiding static version pinning and allowing skills to dynamically benefit from whichever foundation model powers the host harness or session.
