---
package: rjm
name: Creation Triggers
slug: creation-triggers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/overview-and-triggers.md, sha256: 663351048ad745ba6e3141bb5d51ed670959475e88412c9a7c304fd37ce46b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Creation Triggers

## Definition — verbatim
> "### Creation Triggers" — .claude/skills/skillforge/references/overview-and-triggers.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/overview-and-triggers.md | 30 | defined here | Section heading enumerating command and natural language patterns that trigger autonomous skill creation. |

## Consumes
Explicit creation prompt phrases, goal parameters, or command flags (`SkillForge: {goal}`, `create skill`, `design skill for {purpose}`).

## Produces
Activation of the SkillForge autonomous creation workflow.

## When applied
Applied when a user explicitly requests the authoring, design, or planning of a new skill.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
Creation Triggers define the explicit command syntaxes and natural language phrases that activate SkillForge in creation mode. In rjm, recognizing these specific patterns ensures requests are immediately funneled into Phase 0 triage to guard against duplicate skill creation before engineering begins.
