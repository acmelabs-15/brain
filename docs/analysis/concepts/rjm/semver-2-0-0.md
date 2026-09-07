---
package: rjm
name: SemVer 2.0.0
slug: semver-2-0-0
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

# SemVer 2.0.0

## Definition — verbatim
(used, not defined)

> "- SemVer 2.0.0 (https://semver.org/#spec-item-11)." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 171 | used here | Formal specification cited for plugin semantic version format and precedence ordering. |

## Consumes
Semantic Versioning 2.0.0 specification.

## Produces
Version string formatting rules (`MAJOR.MINOR.PATCH`) for plugin manifests.

## When applied
Consulted when parsing, validating, and comparing manifest version strings in CI gates.

## Sub-concepts
none

## Part of
versioning-strategy

## Implementation status
clean

## Design notes
SemVer 2.0.0 provides the formal semantic versioning format used across package manifests. Although host tools (like Copilot CLI) only check string inequality rather than semantic ordering, rjm adheres to SemVer 2.0.0 to maintain monotonic human-readable releases and prevent downgrade anomalies.
