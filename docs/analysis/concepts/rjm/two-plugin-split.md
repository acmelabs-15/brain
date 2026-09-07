---
package: rjm
name: two-plugin split
slug: two-plugin-split
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# two-plugin split

## Definition — verbatim
> "base-alone e2e ship before the two-plugin split." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 22 | defined here | Architectural division of Copilot distributions into a shipped base and an internal overlay. |

## Consumes
Component surface tags (`surface: ship` vs `surface: internal`).

## Produces
Two separate plugin directory trees: `src/copilot-cli` and `src/copilot-cli-internal`.

## When applied
Applied during plugin build and distribution generation (`build_all.py`).

## Sub-concepts
none

## Part of
dogfood-surface-separation

## Implementation status
defects: missing-path, doc-drift

## Design notes
The two-plugin split divides the Copilot distribution into a customer-shipped base plugin and an internal overlay plugin. This topology allows internal developers to run specialized workflow tools while guaranteeing that unvetted internal commands, experimental agents, and proprietary hooks are excluded from the customer marketplace release.
