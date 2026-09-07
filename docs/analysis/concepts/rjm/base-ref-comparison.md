---
package: rjm
name: base-ref comparison
slug: base-ref-comparison
kind: technique
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

# base-ref comparison

## Definition — verbatim
> "The base-ref comparison has a baseline the branch cannot edit" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 131 | defined here | Contrasted against local ceilings as an immutable baseline check executed in CI against the target branch. |

## Consumes
Git history and committed file state on the merge target ref (such as `origin/main`).

## Produces
Tamper-resistant validation comparisons preventing local feature branches from relaxing budgets or baselines.

## When applied
Executed in CI and pre-push environments where full git history or remote refs are available to compare working changes against upstream baselines.

## Sub-concepts
none

## Part of
gate-tier-placement

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A base-ref comparison is a verification technique that evaluates metrics and constraints against the state committed on the target branch (base ref) rather than against values checked into the current feature branch. In rjm's architecture (ADR-104), base-ref comparisons prevent developers or agents from secretly raising test ceilings or budget limits alongside failing edits, guaranteeing that ratchets remain genuine and unforgeable.
