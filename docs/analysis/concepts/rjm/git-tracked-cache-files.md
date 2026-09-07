---
package: rjm
name: Git-Tracked Cache Files
slug: git-tracked-cache-files
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-018-cache-invalidation-strategy.md, sha256: 22609083ce567ec0d1ec08676d19df35943dc5d29c8a7e86e959436b5954719b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Git-Tracked Cache Files

## Definition — verbatim
> "### Option 1: Git-Tracked Cache Files" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 46 | used here | Evaluated as Option 1 for caching GitHub API data in git-tracked memory files, rejected due to merge conflicts. |

## Consumes
Ephemeral GitHub API responses (PR lists, issues, labels).

## Produces
Cache files committed to version control (.serena/memories/github-*-cache.md).

## When applied
Evaluated during cache architecture design in ADR-018.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Git-tracked cache files is an architectural anti-pattern in rjm where dynamic API cache payloads are saved in git repositories, rejected because frequent automated writes cause merge conflicts that halt agent workflow velocity.
