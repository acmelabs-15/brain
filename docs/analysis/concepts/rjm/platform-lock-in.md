---
package: rjm
name: "Platform Lock-in"
slug: platform-lock-in
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Platform Lock-in

## Definition — verbatim
> "**Platform Lock-in**: This architecture depends on GitHub-specific infrastructure:" — .agents/architecture/ADR-041-codeql-integration.md:369

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 369 | defined here | Acknowledged in trade-offs as a dependency on GitHub-specific Actions, Security tab, and Releases. |

## Consumes
Platform-specific APIs, services, and proprietary tooling dependencies.

## Produces
Documented architectural risk and trade-off assessments in ADR records.

## When applied
Evaluated when adopting proprietary vendor infrastructure or hosting-specific capabilities.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural risk concept acknowledged in ADR-041 describing the costs and migration friction incurred when tying automation to GitHub-proprietary features (Actions, Security tab, and CLI releases).
