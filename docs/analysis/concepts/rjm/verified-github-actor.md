---
package: rjm
name: verified GitHub actor
slug: verified-github-actor
kind: role
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# verified GitHub actor

## Definition — verbatim
> "Self-renewal requires both the same holder id and the same verified actor. GitHub actor alone is never enough." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 34 | defined here | Defined as the authenticated GitHub API author identity required alongside holder id for lease mutations. |

## Consumes
GitHub API authentication token credentials and comment author metadata.

## Produces
Verified actor identity string (`actor` field) validated via the GitHub API.

## When applied
Evaluated on every lease acquisition, renewal, and release to prevent unauthenticated comment spoofing.

## Sub-concepts
none

## Part of
holder-lease, pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The authenticated user identity verified directly through the GitHub API rather than trusted from unstructured comment body text. When paired with `holder_id`, it guarantees that lease ownership cannot be hijacked by spoofed comment text or cross-account impersonation.
