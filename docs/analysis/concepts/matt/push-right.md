---
package: matt
name: Push right
slug: push-right
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Push right

## Definition — verbatim
> "**Push right**: defer the checkpoint as far as it will go. Do maximal work before involving the human, so they are asked once, late, with everything prepared." — skills/in-progress/loop-me/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 22 | defined here | Architectural heuristic instructing workflow designers to defer human checkpoints as late as possible. |

## Consumes
Draft workflow steps and proposed human intervention points.

## Produces
Workflow sequencing that performs maximal autonomous work before prompting the user.

## When applied
Applied during workflow design when deciding where to place human checkpoints.

## Sub-concepts
none

## Part of
loop-me, workflow

## Implementation status
clean

## Design notes
A core workflow design heuristic in loop-me: defer human involvement as far right in the process timeline as possible. By executing all preparatory, research, and generation work autonomously first, the human reviewer is engaged only once, late, with fully prepared decision briefs.
