---
package: rjm
name: CI Drift Detection
slug: ci-drift-detection
kind: gate
package_phase: cross-phase
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

# CI Drift Detection

## Definition — verbatim
> "The `agent-drift-detection.yml` workflow runs on every PR that touches agent-related files. It:" — CONTRIBUTING.md:499

## Also called — verbatim
> "## CI Drift Detection" — CONTRIBUTING.md:497

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 497 | defined here | Section heading establishing automated pull request validation to detect divergence between templates and generated files. |

## Consumes
Committed pull request files, source agent templates, and committed generated platform files.

## Produces
Deterministic pass/fail verdict with diff output alerting developers to out-of-sync generated files.

## When applied
Executed in GitHub Actions on every pull request that modifies agent templates or platform configurations.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
clean

## Design notes
Continuous integration gate that guarantees generated platform files remain perfectly synchronized with their source templates, preventing manual out-of-band edits to generated artifacts.
