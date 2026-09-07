---
package: rjm
name: Retro Command
slug: retro-command
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/retro.md, sha256: fbb66599fec7bacf613b20b35c9178a06bce46793cdca2f019063e2ecba02014}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Retro Command

## Definition — verbatim
> "# Retro Command" — .claude/commands/retro.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/retro.md | 7 | defined here | Defined as the slash command used to fill pending retrospective skeletons or draft new retrospectives from scratch. |

## Consumes
Existing unfilled retrospective skeleton files or completed session logs.

## Produces
Fully populated, validated retrospective document with Five Whys root cause analysis and learning matrix.

## When applied
Invoked on demand after milestone completion, session close, or when prompted by SessionStart unfilled skeleton warnings.

## Sub-concepts
retro-state, skeleton-pending-fill, post-pr-retrospective, unfilled-skeleton

## Part of
retrospective-lifecycle

## Implementation status
clean

## Design notes
The operational slash command for retrospective authoring in rjm. After the deletion of invasive session-end Stop hooks that dirtied working trees, `/retro` enables developer-directed or CI-triggered retrospective generation on demand, ensuring team learnings are captured without disrupting normal workflow.
