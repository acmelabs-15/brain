---
package: rjm
name: Quick Fix Workflow
slug: quick-fix-workflow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Fix Workflow

## Definition — verbatim
> "### Quick Fix Workflow" — docs/workflow-commands.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 30 | used here | Contrasted against the hotfix task shape which adds review before shipping. |
| docs/workflow-commands.md | 28 | defined here | Abbreviated lifecycle sequence (/build, /test, /ship) for localized defect remediation. |

## Consumes
Localized bug fix descriptions with known root causes and small blast radii.

## Produces
Rapid three-step remediation sequence bypassing specification and planning phases.

## When applied
Applied to resolve single known defects with clear root causes and contained blast radii.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A compressed lifecycle execution pattern in rjm that bypasses /spec and /plan to execute /build, /test, and /ship directly for urgent, well-understood defect mitigations.
