---
package: rjm
name: Trust-anchor
slug: trust-anchor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/validate_vendor_provenance.py, sha256: 65858093c108f169cc0e34423abc589c0d79f7047b2211c82c7e4457c57d0a9c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trust-anchor

## Definition — verbatim
(used, not defined)

> "Trust-anchor pin changes require a separate bootstrap PR merged into main." — scripts/ci/validate_vendor_provenance.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/validate_vendor_provenance.py | 7 | used here | Refers to pinned cryptographic hash anchors for vendor artifacts requiring bootstrap PR approval to modify. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
`Trust-anchor` is a cryptographic provenance verification term referring to pinned artifact hashes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
