---
package: addy
name: ARTIFACT_RE
slug: artifact-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-artifact-paths.js, sha256: 689a1c9b12391bdfe92b0102fb0f09278f5e4f07b2340a694f443b139d20c0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ARTIFACT_RE

## Definition — verbatim
(used, not defined)
> "const ARTIFACT_RE = /(?:[A-Za-z0-9._[\]-]+\/)*(?:spec|plan|todo)\.md/gi;" — scripts/validate-artifact-paths.js:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths.js | 58 | defines | Regular expression pattern matching path-like tokens ending in spec/plan/todo artifact filenames. |

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
clean

## Design notes
Regular expression constant used internally by the artifact validation script to match file paths rather than an independent lifecycle concept.
