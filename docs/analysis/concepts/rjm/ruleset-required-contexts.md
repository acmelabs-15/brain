---
package: rjm
name: ruleset_required_contexts
slug: ruleset-required-contexts
kind: name-only
package_phase: none
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

# ruleset_required_contexts

## Definition — verbatim
(used, not defined)

> "required context (`scripts/ci/ruleset_required_contexts.py`)" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:480

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 480 | used here | Cited as the script defining required GitHub status check contexts for repository rulesets. |

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
defects: cross-file-contradiction, doc-drift

## Design notes
An identifier referencing the CI script `scripts/ci/ruleset_required_contexts.py` that configures required branch protection contexts rather than an operational lifecycle concept.
