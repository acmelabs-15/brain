---
package: rjm
name: GitHub merge queue
slug: github-merge-queue
kind: reference
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

# GitHub merge queue

## Definition — verbatim
(used, not defined)

> "| **GitHub merge queue with a bump step** | Rejected. Heavier infrastructure and a merge-queue dependency; still serializes plugin-source merges; does not remove the bump. |" — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:103

## Also called — verbatim
"Merge queue" — .agents/architecture/ADR-091-post-merge-version-bot.md:225

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 103 | used here | Evaluated and rejected as a heavyweight infrastructure dependency that fails to eliminate serialization. |

## Consumes
GitHub platform merge queue configuration and branch protection rules.

## Produces
Serialized branch staging and automated merge order management.

## When applied
Evaluated during architectural review of pull request serialization alternatives.

## Sub-concepts
none

## Part of
merge-infrastructure

## Implementation status
clean

## Design notes
GitHub merge queue was evaluated as an alternative for coordinating concurrent plugin PRs. It was rejected because it introduces heavyweight platform infrastructure dependencies while failing to eliminate PR merge serialization.
