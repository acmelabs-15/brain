---
package: rjm
name: description-validation-bypass
slug: description-validation-bypass
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# description-validation-bypass

## Definition — verbatim
(used, not defined)

> "ask a human maintainer to apply the `description-validation-bypass` label. Do not apply it yourself." — CONTRIBUTING.md:902

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 902 | defined here | Documented as the human-only PR label used to bypass non-dash description validation failures. |
| scripts/validation/pr_description.py | 73 | defined here | Defined as the default label string constant (`DEFAULT_BYPASS_LABEL`) that suppresses critical validation failures in CI. |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
description-validation-bypass is a GitHub pull request label identifier and script constant used by maintainers to suppress non-dash PR description validation errors rather than an SDLC lifecycle concept.
