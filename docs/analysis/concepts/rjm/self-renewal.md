---
package: rjm
name: self-renewal
slug: self-renewal
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# self-renewal

## Definition — verbatim
> "Self-renewal keys on the verified author, never on the body's `owner`/`session` fields, which are display/traceability only and forgeable." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 91 | defined here | Defined as the mechanism by which an existing verified lease holder extends lease duration. |
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 34 | defined here | Refined to require both matching holder ID and matching verified GitHub actor. |

## Consumes
Existing active lease comment authored by the current verified caller credentials.

## Produces
An updated lease marker with extended `expires_at` timestamp and fresh base SHA.

## When applied
Executed periodically during long-running tasks or test suites to maintain active branch ownership.

## Sub-concepts
none

## Part of
pr-autofix-branch-ownership-lease, lease-ttl

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A lease management technique allowing an active lease holder to extend its ownership window before expiration. By binding renewal identity strictly to cryptographic or authenticated API credentials (`user.login` and holder ID) rather than unverified comment body text, it prevents malicious or accidental lease hijacking across multi-agent sessions.
