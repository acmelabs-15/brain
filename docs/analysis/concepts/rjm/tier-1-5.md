---
package: rjm
name: Tier 1-5
slug: tier-1-5
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tier 1-5

## Definition — verbatim
> "Classify as Tier 1-5." — .claude/commands/build.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 28 | used here | Used to classify task complexity and calibrate implementation oversight and review requirements. |
| .claude/skills/review/SKILL.md | 76 | used here | Used in `/review` to assess change risk and calibrate the depth and selection of review axes. |

## Consumes
Task briefs, diffs, and the engineering complexity tiers reference guide.

## Produces
A 1-5 complexity rating governing required oversight levels and review intensity.

## When applied
Prior to coding in `/build` and prior to Stage-2 canonical axis execution in `/review`.

## Sub-concepts
none

## Part of
complexity-assessment

## Implementation status
defects: missing-path, doc-drift (.claude/skills/review/SKILL.md:51, 4); clean in .claude/commands/build.md

## Design notes
Tier 1-5 establishes a standard taxonomy for grading engineering effort and risk from trivial fixes (Tier 1) to multi-system architectural redesigns (Tier 5). In rjm, it prevents one-size-fits-all process bottlenecks by allowing low-tier changes to move quickly while enforcing strict proof-of-concept gating and deep multi-axis audits on higher-tier tasks.
