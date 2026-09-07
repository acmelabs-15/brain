---
package: matt
name: --abort
slug: abort
kind: name-only
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --abort

## Definition — verbatim
(used, not defined)

> "and <code class=\"ah-code-inline\">--abort</code> is not an option it has: the merge is always carried to a finished commit." — external/resolving-merge-conflicts.md:26

> "Always resolve; never `--abort`." — skills/engineering/resolving-merge-conflicts/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 26 | used here | Prohibited CLI flag; resolving merge conflicts explicitly disallows aborting in-progress operations. |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 10 | used here | Normative rule instructing the agent to always resolve and never abort the merge or rebase. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
resolving-merge-conflicts

## Implementation status
clean

## Design notes
A Git CLI flag (`git merge --abort`, `git rebase --abort`) that cancels an in-progress merge or rebase, classified as name-only because it is an external command-line flag rather than an agent lifecycle concept.
