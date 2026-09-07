---
package: matt
name: smoke test
slug: smoke-test
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# smoke test

## Definition — verbatim
> "This will run through the new pre-commit hooks: a good smoke test that everything works." — skills/misc/setup-pre-commit/SKILL.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/setup-pre-commit/SKILL.md | 85 | defined here | Recommended as the final verification step by committing changes to trigger and validate the pre-commit pipeline. |

## Consumes
Newly created Git hooks and configuration files.

## Produces
Verification evidence that pre-commit hooks execute and pass successfully.

## When applied
Per-commit gate applied when verifying the newly configured pre-commit toolchain.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Preliminary verification gate where an initial commit is created to execute the newly configured hooks end-to-end, confirming that formatting, typechecking, and test scripts run without errors before handing off the repository.
