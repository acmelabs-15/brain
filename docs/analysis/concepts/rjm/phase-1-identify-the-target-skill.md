---
package: rjm
name: Phase 1: Identify the Target Skill
slug: phase-1-identify-the-target-skill
kind: phase
package_phase: rjm:reflect
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

# Phase 1: Identify the Target Skill

## Definition — verbatim
> "### Phase 1: Identify the Target Skill" — .claude/skills/reflect/SKILL.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/SKILL.md | 59 | defined here | First phase of the reflect process locating or establishing the target skill observation memory. |

## Consumes
Current conversation context and existing memory files in `.serena/memories/`.

## Produces
Target skill identifier and resolved path (`.serena/memories/{skill-name}-observations.md`).

## When applied
Initial step of the reflect workflow upon invocation.

## Sub-concepts
none

## Part of
reflect-skill

## Implementation status
clean

## Design notes
Phase 1 of the reflect skill determines which skill memory to target based on skills active in the conversation, ensuring that new learnings attach to the correct sidecar file in .serena/memories/ or scaffolding a new observation file when none exists.
