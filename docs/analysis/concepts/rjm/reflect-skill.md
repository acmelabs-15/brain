---
package: rjm
name: Reflect Skill
slug: reflect-skill
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reflect Skill

## Definition — verbatim
> "**Critical learning capture system** that prevents repeating mistakes and preserves successful patterns across sessions." — .claude/skills/reflect/SKILL.md:13

## Also called — verbatim
> "name: reflect" — .claude/skills/reflect/SKILL.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/SKILL.md | 11 | defined here | Main title and definition of the reflect skill as a critical learning capture system. |

## Consumes
Conversation history, user corrections, praise, discovered edge cases, and existing skill-based memories.

## Produces
Proposals for updated skill sidecar memories (`.serena/memories/{skill-name}-observations.md`).

## When applied
Invoked proactively after user corrections ("no", "wrong"), praise ("perfect"), edge case discoveries, or at session end.

## Sub-concepts
phase-1-identify-the-target-skill, phase-2-analyze-the-conversation, phase-3-propose-learnings, phase-4-persist-learnings-to-memory

## Part of
none

## Implementation status
clean

## Design notes
The reflect skill is rjm's continuous improvement engine, extracting high/medium/low confidence observations from interactive sessions and persisting them to skill-specific sidecar memories in .serena/memories/. Without proactive reflection, empirical user feedback and edge cases are lost across sessions, leading to repeated agent mistakes.
