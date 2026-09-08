---
package: rjm
name: _emit_bypass_audit
slug: emit-bypass-audit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _emit_bypass_audit

## Definition — verbatim
(used, not defined)

> "def _emit_bypass_audit(pr_number: int, label: str, issues: list[Issue]) -> None:" — scripts/validation/pr_description.py:1296

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pr_description.py | 1296 | defined here | Coordinator function writing bypass audit markers to GITHUB_STEP_SUMMARY and GITHUB_OUTPUT. |

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
defects: doc-drift

## Design notes
`_emit_bypass_audit` is a Python helper function identifier emitting audit markers for PR description bypasses rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
