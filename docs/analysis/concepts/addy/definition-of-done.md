---
package: addy
name: Definition of Done
slug: definition-of-done
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Definition of Done

## Definition — verbatim
> "A standing, project-wide bar that every change must clear before it counts as done." — references/definition-of-done.md:3

## Also called — verbatim
- `The Standing Checklist` — references/definition-of-done.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 54 | used here | Cited as one of seven reference checklists provided with the skill catalog. |
| references/definition-of-done.md | 1 | defined here | Defined as the standing project-wide bar that every change must clear before it counts as done. |
| scripts/validate-reference-links.js | 13 | used here | Cited as an example where broken reference links caused agent workflows to stall. |
| skills/planning-and-task-breakdown/SKILL.md | 257 | used here | Referenced as the standing project bar underlying task-specific acceptance criteria. |
| skills/shipping-and-launch/SKILL.md | 268 | used here | Referenced as a mandatory prerequisite checklist before applying the shipping checklist. |
| skills/using-agent-skills/SKILL.md | 114 | used here | Referenced as the universal project bar applying across all tasks regardless of active skill. |

## Consumes
Task implementation, candidate code modifications, automated test execution, and documentation.

## Produces
Verified completion status across Correctness, Quality, Integration, Documentation, and Ship-readiness.

## When applied
Evaluated at the conclusion of every task increment, feature implementation, and release launch.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
The Definition of Done provides a universal, non-negotiable quality floor across the entire repository. While acceptance criteria are dynamic and specific to individual tasks, the Definition of Done remains constant, ensuring that every code change satisfies standards for runtime verification, code cleanliness, architectural integration, documentation, and operational safety before being marked complete.
