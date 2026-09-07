---
package: rjm
name: Merge queue
slug: merge-queue
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Merge queue

## Definition — verbatim
(used, not defined)

> "| **2. Merge queue** | Not sufficient alone: the strictly-greater gate fails when two queue entries set the same version (N+1). Serializes without removing the conflict. |" — .agents/architecture/ADR-091-post-merge-version-bot.md:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 225 | used here | Analyzed as an alternative merge management approach that fails to eliminate scalar counter conflicts. |
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 475 | used here | Describes test execution rules where pytest unconditionally executes full partition matrix in merge_group events. |

## Consumes
Approved pull requests staged for trunk integration.

## Produces
Serialized speculative branch merges and CI verification runs.

## When applied
Applied to automate integration and test verification of concurrent pull requests.

## Sub-concepts
none

## Part of
branch-management

## Implementation status
clean

## Design notes
Git branch integration technique managing concurrent merges via speculative queues. Evaluated in ADR-091 (where it failed to solve scalar version conflicts) and integrated in ADR-104 (where merge queue events bypass path filters to guarantee full test coverage before final commit to main).
