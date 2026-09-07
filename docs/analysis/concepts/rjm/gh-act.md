---
package: rjm
name: gh act
slug: gh-act
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gh act

## Definition — verbatim
(used, not defined)

> "### Local Workflow Testing with gh act" — CONTRIBUTING.md:791

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 791 | used here | Documented as the recommended local CLI extension for simulating GitHub Actions CI workflows. |
| scripts/validation/run_workflow_local_test.py | 13 | used here | Listed as stage 2 (dry-run) and stage 3 (full execution) in local-run workflow testing gate. |

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
gh act is a GitHub CLI extension identifier (nektos/gh-act) used to execute GitHub Actions workflows locally inside Docker containers rather than an SDLC lifecycle concept.
