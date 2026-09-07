---
package: rjm
name: overlay decision gate
slug: overlay-decision-gate
kind: gate
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

# overlay decision gate

## Definition — verbatim
> "The review added an overlay decision gate" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:20

## Also called — verbatim
"kill criterion" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:185

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 20 | defined here | Gate and kill criterion deferring creation of the internal overlay until an internal skill exists. |

## Consumes
Surface tagging audit of all skills, agents, and instructions.

## Produces
Decision gate controlling whether to materialize the `src/copilot-cli-internal` plugin tree and manifest.

## When applied
Applied during build configuration to prevent creating empty plugin trees and manifests.

## Sub-concepts
none

## Part of
dogfood-surface-separation

## Implementation status
defects: missing-path, doc-drift

## Design notes
The overlay decision gate acts as a kill criterion preventing premature architecture. While the two-plugin split is architecturally designed, the gate prevents generating empty directory trees and dummy manifests until at least one item is marked `surface: internal`.
