---
package: rjm
name: Content-addressable freshness key
slug: content-addressable-freshness-key
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

# Content-addressable freshness key

## Definition — verbatim
(used, not defined)

> "Content-addressable freshness key (hash of packaged source)" — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 105 | used here | Evaluated alternative using content hashing for freshness, rejected due to human legibility preferences. |

## Consumes
SHA-256 digest or content hash of packaged plugin directory contents.

## Produces
Content-derived version strings that change only when packaged contents change.

## When applied
Evaluated as a collision-free alternative to sequential integer versions.

## Sub-concepts
none

## Part of
versioning-strategy

## Implementation status
clean

## Design notes
Content-addressable freshness key replaces sequential SemVer versions with content hashes of plugin files. While it prevents version collisions between independent sibling PRs, it was rejected because human developers expect monotonically increasing version numbers, and checked-in hashes still suffer from the write-timing dilemma.
