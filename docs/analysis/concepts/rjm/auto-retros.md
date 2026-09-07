---
package: rjm
name: Auto-retros
slug: auto-retros
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Auto-retros

## Definition — verbatim
> "Auto-retros are shallow." — .claude/skills/ai-agents-failure-archaeology/SKILL.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 121 | defined here | Defined as shallow, unfilled Stop-hook retrospective skeletons named `*-auto-retro.md` that can be superseded by human-written incident retros. |

## Consumes
Stop-hook execution triggers, session exit events.

## Produces
`*-auto-retro.md` skeleton files in `.agents/retrospective/`.

## When applied
Automatically generated upon session termination by stop hooks.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
Auto-retros are automated skeleton files (`*-auto-retro.md`) emitted by Stop hooks at session termination. In rjm's failure archaeology, they are explicitly recognized as shallow and provisional placeholders rather than thorough post-mortems, and are designed to be reviewed, fleshed out, or superseded by detailed incident investigations when significant failures occur.
