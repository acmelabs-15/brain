---
package: addy
name: ARTIFACT_ALLOWLIST
slug: artifact-allowlist
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

# ARTIFACT_ALLOWLIST

## Definition — verbatim
(used, not defined)

> "const ARTIFACT_ALLOWLIST = new Set([" — scripts/validate-artifact-paths.js:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths.js | 35 | defined here | Constant defining the canonical set of approved spec, plan, and todo artifact file paths. |

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
Constant identifier in `scripts/validate-artifact-paths.js` enumerating the canonical allowed artifact paths (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`) enforced in CI, rather than an agent lifecycle methodology concept.
