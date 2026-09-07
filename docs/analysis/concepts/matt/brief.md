---
package: matt
name: Brief
slug: brief
kind: artifact
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

# Brief

## Definition — verbatim
> "**Brief**: what a checkpoint presents, a tight, decision-ready summary (what was produced, why, and a link down to the asset itself), never the raw output." — skills/in-progress/loop-me/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 23 | defined here | Decision-ready presentation format submitted to the user at checkpoints instead of raw output. |

## Consumes
Output assets, execution rationale, and asset links produced by workflow steps.

## Produces
A concise, structured review document optimized for quick human decision-making.

## When applied
Rendered and presented to the human reviewer upon reaching a workflow checkpoint.

## Sub-concepts
none

## Part of
checkpoint, loop-me

## Implementation status
clean

## Design notes
The human interface artifact in loop-me workflows. Instead of flooding human reviewers with raw drafts or large outputs, the system generates a concise brief summarizing what was produced, why, and providing direct links to underlying assets, prioritizing speed of human review.
