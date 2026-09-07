---
package: rjm
name: security carve-out
slug: security-carve-out
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# security carve-out

## Definition — verbatim
> "security carve-out under \"What this ADR does NOT do\" is unchanged and still" — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 28 | defined here | Non-negotiable policy boundary ensuring that performance ROI reviews cannot retire genuine security controls. |

## Consumes
Security threat models and hook categorization inventory.

## Produces
Exemption shielding security controls from performance-based hook deprecation.

## When applied
Applied during ROI reviews of vendored hooks to protect customer security gates.

## Sub-concepts
none

## Part of
hook-governance

## Implementation status
defects: doc-drift

## Design notes
The security carve-out establishes an explicit exception to hook-ROI elimination bars. While performance and latency bars require eliminating wasteful dev-protocol hooks, genuine security controls that protect customer repositories from unauthorized execution or file tampering cannot be retired on latency grounds without dedicated owner security review.
