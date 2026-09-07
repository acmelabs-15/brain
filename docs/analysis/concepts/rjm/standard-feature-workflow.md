---
package: rjm
name: Standard Feature Workflow
slug: standard-feature-workflow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Standard Feature Workflow

## Definition — verbatim
> "### Standard Feature Workflow" — docs/workflow-commands.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 17 | defined here | Section heading defining the default end-to-end slash command pipeline for new features. |

## Consumes
New feature requests, multi-file changes, or non-trivial engineering requirements.

## Produces
Fully specified, planned, test-driven, quality-verified, and reviewed code opened as a pull request.

## When applied
The default workflow applied when developing standard new features requiring full lifecycle rigor.

## Sub-concepts
none

## Part of
lifecycle-commands

## Implementation status
defects: doc-drift

## Design notes
The canonical baseline development pipeline in rjm chaining all six lifecycle commands (/spec -> /plan -> /build -> /test -> /review -> /ship) sequentially to ensure requirements are pinned, plans are decomposed, implementations follow TDD, and multi-agent gates pass before release.
