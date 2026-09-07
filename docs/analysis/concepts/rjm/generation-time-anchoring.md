---
package: rjm
name: generation-time anchoring
slug: generation-time-anchoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# generation-time anchoring

## Definition — verbatim
> "4. Prevent bad hook artifacts before release through generation-time anchoring, `scripts/validation/validate_hook_anchoring.py`, pre-push enforcement, CI enforcement, and runtime-contract tests." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 43 | defined here | Mandated prevention technique ensuring generated hook launchers resolve absolute repository root paths at generation time. |

## Consumes
Plugin root environment variables and generator templates.

## Produces
Anchored hook command strings immune to caller working-directory variations.

## When applied
Applied during multi-platform hook generation scripts (`generate_hooks_events.py`).

## Sub-concepts
none

## Part of
prevention-contract

## Implementation status
defects: doc-drift, missing-path

## Design notes
A critical prevention technique in rjm that anchors hook script paths to plugin/repo roots during artifact compilation rather than relying on runtime working directories, preventing environment-wedging defects like incident #2205.
