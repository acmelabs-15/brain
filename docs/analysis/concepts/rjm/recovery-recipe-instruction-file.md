---
package: rjm
name: recovery-recipe instruction file
slug: recovery-recipe-instruction-file
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# recovery-recipe instruction file

## Definition — verbatim
> "an auto-loaded recovery-recipe instruction file that teaches the `max(open-PR versions) + 1` plus immediate-auto-merge move (PR #2873, a mitigation for #2855)." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 72 | used here | Instruction file guiding agents and developers on resolving version-bump collisions during PR rebase. |

## Consumes
Repository instruction loader configuration (`.github/instructions/plugin-version-bump.instructions.md`).

## Produces
Contextual guidance instructing agents and developers on resolving version collisions.

## When applied
Automatically loaded when developers or agents encounter version bump conflicts during PR rebasing.

## Sub-concepts
none

## Part of
developer-tooling

## Implementation status
clean

## Design notes
The recovery-recipe instruction file provides automated in-context developer guidance for resolving version-bump contention. Rather than requiring developers to invent ad-hoc rebase procedures, the instruction file guides agents and developers to choose `max(open-PR versions) + 1` and trigger immediate auto-merge.
