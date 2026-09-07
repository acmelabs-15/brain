---
package: matt
name: Loop Me
slug: loop-me
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
  - {path: skills/in-progress/loop-me/agents/openai.yaml, sha256: b66fa10079957051be6a812f45e55b67ac394b71d5ba88349962b4c9205802c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Loop Me

## Definition — verbatim
> "Grill yourself into implementable workflow specs over multiple sessions, using the current directory as a stateful workspace. User-invoked." — skills/in-progress/README.md:11

## Also called — verbatim
`loop-me` — skills/in-progress/loop-me/SKILL.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/agents/openai.yaml | 2 | defined here | Declares agent interface display name as "Loop Me" for Codex environments. |
| skills/in-progress/loop-me/SKILL.md | 2 | defined here | Skill frontmatter declaring name: loop-me for grilling workflow specifications. |
| skills/in-progress/README.md | 11 | used here | Catalog summary describing loop-me for grilling workflow specs across sessions. |

## Consumes
User intent, repeated daily/weekly tasks, and workspace notes in NOTES.md.

## Produces
Workflow specifications in workflows/*.md and refined domain terminology in NOTES.md.

## When applied
Invoked directly by the user to interrogate recurring patterns and produce automated workflow specs.

## Sub-concepts
loop, workflow, grilling-discipline, delegating, trigger, checkpoint, push-right, brief, definition-of-done

## Part of
none

## Implementation status
clean

## Design notes
An interactive grilling skill that helps users identify recurring loops in their work and life and convert them into delegatable workflow specifications. Operating within a stateful workspace, it applies the loop lens and relentless questioning to produce specs ready for autonomous implementation without structural over-engineering.
