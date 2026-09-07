---
package: rjm
name: freshness requirement
slug: freshness-requirement
kind: pattern
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

# freshness requirement

## Definition — verbatim
> "The freshness requirement is a host constraint, not a repo preference." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 48 | used here | Identified as host runtime caching constraint necessitating changing manifest versions on release. |

## Consumes
Host runtime plugin caching mechanics and manifest consumption rules.

## Produces
Architectural constraint mandating in-tree manifest version updates on release.

## When applied
Applied when designing and enforcing version bumping policies for marketplace plugins.

## Sub-concepts
none

## Part of
plugin-version-management

## Implementation status
clean

## Design notes
The freshness requirement captures the host runtime constraint that client applications (such as Copilot CLI and Claude Code) key their installed plugin caches off manifest version declarations. Because the repository is consumed directly from HEAD without an intermediate packaging pipeline, manifest version changes are mandatory to force client-side re-synchronization.
