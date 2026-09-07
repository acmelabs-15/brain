---
package: rjm
name: Session-Local Cache
slug: session-local-cache
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

# Session-Local Cache

## Definition — verbatim
> "### Option 2: Session-Local Cache (In-Context)" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:59

> "**Store cache in agent's working memory during session**" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 59 | defined here | Architectural caching option selected as primary strategy to eliminate git merge conflicts across agent sessions. |

## Consumes
Agent working memory and context window during session execution.

## Produces
Ephemeral in-memory cache of GitHub API query results that automatically discards at session boundary.

## When applied
Applied during agent sessions making frequent GitHub API reads (PRs, issues, labels) to reduce API rate limit pressure without git tracking.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Architectural pattern of confining cached API query results to an agent's active execution context, guaranteeing automatic cache disposal at session completion and completely avoiding git merge conflicts between parallel agent sessions.
