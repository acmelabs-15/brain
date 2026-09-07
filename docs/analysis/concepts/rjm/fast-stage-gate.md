---
package: rjm
name: fast-stage gate
slug: fast-stage-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fast-stage gate

## Definition — verbatim
(used, not defined)

> "| every fast-stage gate | 0.1s to 19.6s each |" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 60 | used here | Contrasted against whole-suite test runs as individual rapid verification checks executing between 0.1s and 19.6s. |

## Consumes
Staged files, diff slices, or local git tree state.

## Produces
Immediate binary verification pass/fail verdicts.

## When applied
Invoked in pre-commit and fast pre-push stages where checks must complete in seconds without delaying the developer workflow.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Fast-stage gates are lightweight, low-latency verification checks designed to complete in tenths of a second to under twenty seconds. In rjm's gate placement model (ADR-104), fast-stage gates are prioritized for pre-commit and pre-push hook execution to catch syntax, formatting, and policy errors early while preventing hook accretion from exceeding remote container reclamation timeouts.
