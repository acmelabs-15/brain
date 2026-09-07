---
package: rjm
name: Force-Push Safety
slug: force-push-safety
kind: technique
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

# Force-Push Safety

## Definition — verbatim
> "## Force-Push Safety (Pre-Push Audit)" — docs/autonomous-pr-monitor.md:745
> "Force-push is in the project MUST NOT list (`AGENTS.md`). The agent must NEVER" — docs/autonomous-pr-monitor.md:747
> "force-push without explicit user authorization in the transcript." — docs/autonomous-pr-monitor.md:748

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 745 | defined here | Prescribes strict authorization protocols, pinned commit-SHA leases, and `FORCE_PUSH_OK=1` environment variable guards for push operations. |

## Consumes
Explicit transcript user authorization, known-good commit SHA, and expected remote branch head SHA.

## Produces
Guarded git push execution utilizing atomic `--force-with-lease` pinned to explicit SHAs and `FORCE_PUSH_OK=1`.

## When applied
Applied whenever pushing commits to remote branches, particularly in rare situations requiring authorized branch history rewrites.

## Sub-concepts
pre-push-audit

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Force-Push Safety establishes defense-in-depth protocols around git push operations, prohibiting unprompted force-pushes and mandating pinned commit-SHA leases to prevent race-condition data destruction between concurrent agents.
