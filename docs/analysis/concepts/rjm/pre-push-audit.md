---
package: rjm
name: Pre-Push Audit
slug: pre-push-audit
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Push Audit

## Definition — verbatim
> "## Force-Push Safety (Pre-Push Audit)" — docs/autonomous-pr-monitor.md:745
> "Before any push (force or not):" — docs/autonomous-pr-monitor.md:750

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 745 | defined here | Defines the mandatory three-point audit (branch tip check, remote URL verification, divergence detection) executed before any git push. |

## Consumes
Local branch tip resolved via `git rev-parse`, remote origin URL, and PR head SHA from `get_pr_context.py`.

## Produces
Integrity verification verdict confirming branch tip alignment and repository identity before permitting a push.

## When applied
Applied before every git push operation, whether fast-forward or force-push.

## Sub-concepts
none

## Part of
force-push-safety

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Pre-Push Audit verifies local repository identity and branch tip alignment against remote metadata prior to pushing, protecting against local repository corruption and bootstrap-commit overwrites.
