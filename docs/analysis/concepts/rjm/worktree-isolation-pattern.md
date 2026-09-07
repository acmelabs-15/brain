---
package: rjm
name: Worktree Isolation Pattern
slug: worktree-isolation-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Worktree Isolation Pattern

## Definition — verbatim
> "When parallel agents need to modify files, use git worktrees to prevent conflicts." — .agents/AGENT-SYSTEM.md:1376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1374 | defines | Prescribes git worktree isolation procedures, branch naming, directory organization, and cleanup for concurrent agent modifications. |

## Consumes
Parallel tasks requiring file mutations across git branches.

## Produces
Isolated filesystem worktrees with dedicated tracking branches (`git worktree add -b <branch>`), avoiding detached HEADs and staging collisions.

## When applied
> "When parallel agents need to modify files, use git worktrees to prevent conflicts." — .agents/AGENT-SYSTEM.md:1376

## Sub-concepts
none

## Part of
parallel-execution

## Implementation status
clean

## Design notes
A filesystem and source control isolation pattern that creates independent git worktrees in a dedicated parent folder for parallel worker agents. By provisioning each agent with its own working directory and tracking branch, it prevents staging index corruption, branch confusion, and file collisions during concurrent implementation.
