---
package: rjm
name: COPILOT_VERSION
slug: copilot-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COPILOT_VERSION

## Definition — verbatim
(used, not defined)

> "The required review path reads `COPILOT_VERSION` from `.github/actions/ai-review/action.yml`." — CONTRIBUTING.md:766

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 766 | used here | Environment variable identifier read from GitHub Action workflow to establish required Copilot CLI review version. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
copilot-cli-version-management

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
COPILOT_VERSION is an environment variable identifier specifying the required Copilot CLI version pin in CI workflow actions rather than an operational lifecycle concept.
