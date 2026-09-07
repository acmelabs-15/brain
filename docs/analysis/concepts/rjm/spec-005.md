---
package: rjm
name: SPEC-005
slug: spec-005
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SPEC-005

## Definition — verbatim
(used, not defined)

> "| `context-gather` | Direct skill invocation or programmatic call from build, plan, research commands (SPEC-005) |" — .claude/skills/context-gather/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-gather/SKILL.md | 19 | used here | Cited in invocation matrix as the specification defining programmatic skill calls from build, plan, and research commands. |

## Consumes
Lifecycle command interface requirements and context gathering orchestration designs.

## Produces
Standardized programmatic invocation contracts linking slash commands to automated context gathering.

## When applied
Applied when automating preflight context collection across build, plan, and research workflows.

## Sub-concepts
none

## Part of
specification-hierarchy

## Implementation status
clean

## Design notes
An architectural specification in rjm that governs programmatic invocation interfaces, specifying how core workflow commands automatically invoke supporting skills to gather relevant context before execution.
