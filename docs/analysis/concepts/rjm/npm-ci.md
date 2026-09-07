---
package: rjm
name: npm ci
slug: npm-ci
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

# npm ci

## Definition — verbatim
(used, not defined)

> "Run npm ci in vendor dir. Returns (exit_code, stderr)." — scripts/ci/validate_vendor_provenance.py:584

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/validate_vendor_provenance.py | 584 | used here | Docstring describing the isolated reconstruction step that executes npm ci in a temporary directory. |

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
`npm ci` is a standard npm CLI command for clean automated installs from a lockfile rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
