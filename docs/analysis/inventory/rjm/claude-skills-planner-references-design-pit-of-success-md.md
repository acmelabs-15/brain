---
package: rjm
path: .claude/skills/planner/references/design-pit-of-success.md
type: reference
bytes: 3275
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/design-pit-of-success.md, sha256: c4ff5d944193baea5ecd7c5d5cd000c773ccf709f300a953e8ea17ab634a2064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/design-pit-of-success.md

## Purpose — required, verbatim
> "Make correct behavior the path of least resistance. The developer who does the obvious, easy thing should end up with a correct result. Wrong behavior should require deliberate effort." — .claude/skills/planner/references/design-pit-of-success.md:13

## Design intent — required
Adapts Rico Mariani's "Pit of Success" philosophy to implementation planning, interface definition, and migration design. It emphasizes structuring milestones, configurations, and plans such that the default, obvious actions lead directly to correct, deployable software. This is especially vital for AI-native planning, where autonomous agents aggressively take the path of least resistance and will fail if correctness depends on memorizing or interpreting fragile caveats.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/design-pit-of-success.md — .claude/skills/planner/SKILL.md:289

## Concepts named — required, verbatim
- `Pit of Success` — .claude/skills/planner/references/design-pit-of-success.md:7 — defined here
- `Pit of despair` — .claude/skills/planner/references/design-pit-of-success.md:19 — defined here
- `Plan Quality Checklist` — .claude/skills/planner/references/design-pit-of-success.md:27 — defined here
- `AI-Native Planning` — .claude/skills/planner/references/design-pit-of-success.md:47 — defined here
- `Pit of despair with guardrails` — .claude/skills/planner/references/design-pit-of-success.md:55 — defined here
- `Pit of success with no escape hatch` — .claude/skills/planner/references/design-pit-of-success.md:56 — defined here
- `Enforcement over design` — .claude/skills/planner/references/design-pit-of-success.md:57 — defined here
- `Golden Path` — .claude/skills/planner/references/design-pit-of-success.md:61 — used here
- `Shift Left` — .claude/skills/planner/references/design-pit-of-success.md:62 — used here
- `Gall's Law` — .claude/skills/planner/references/design-pit-of-success.md:63 — used here

## Structure
# Pit of Success — .claude/skills/planner/references/design-pit-of-success.md:7
## Core Principle — .claude/skills/planner/references/design-pit-of-success.md:11
## The Asymmetry — .claude/skills/planner/references/design-pit-of-success.md:15
## Planner Application — .claude/skills/planner/references/design-pit-of-success.md:23
### Plan Quality Checklist — .claude/skills/planner/references/design-pit-of-success.md:27
### Milestone Design Patterns — .claude/skills/planner/references/design-pit-of-success.md:37
### AI-Native Planning — .claude/skills/planner/references/design-pit-of-success.md:47
### Anti-Patterns — .claude/skills/planner/references/design-pit-of-success.md:53
## Related Concepts — .claude/skills/planner/references/design-pit-of-success.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/references/design-pit-of-success.md:2 · Frontmatter source `wiki/concepts/Design Principles/Pit of Success.md` does not exist in the repository.

## Observations
Contrasts enforcement vs. design: blocking wrong behavior at review time is merely a gate, whereas pit-of-success design makes wrong behavior impossible to express at authoring time. Emphasizes that AI agents follow the path of least resistance even more aggressively than humans, necessitating deterministic milestone success criteria.

## Context cost
3275 bytes, approximately 800 tokens.
