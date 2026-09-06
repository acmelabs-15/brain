---
package: addy
name: findViolations
slug: findviolations
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

# findViolations

## Definition — verbatim
(used, not defined)
> "function findViolations(relPath) {" — scripts/validate-artifact-paths.js:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths.js | 60 | defines | Helper function scanning a guarded file against ARTIFACT_RE and returning unapproved path violations. |

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
Internal validator function that inspects a single guarded markdown file and collects invalid artifact references rather than an independent lifecycle concept.
