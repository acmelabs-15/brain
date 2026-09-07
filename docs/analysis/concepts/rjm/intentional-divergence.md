---
package: rjm
name: Intentional Divergence
slug: intentional-divergence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Intentional Divergence

## Definition — verbatim
> "### Intentional Divergence" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 18 | defined here | Preserves Intentional Divergence as an authoritative architectural reading despite template strategy supersession. |
| .agents/architecture/ADR-052-template-strategy.md | 20 | used here | Reaffirms that low similarity scores between Claude and templates reflect deliberate platform differentiation. |
| CONTRIBUTING.md | 528 | defined here | Outlines the bypass procedure for intentional divergence during emergency hotfixes. |

## Consumes
Platform-specific harness features and tool integration capabilities.

## Produces
Justified variances in agent prompt implementations without triggering drift violation alerts.

## When applied
Applied when designing prompt sections tailored to harness-unique features like MCP tools or persistent memory.

## Sub-concepts
none

## Part of
two-source-agent-template-architecture

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An architectural principle recognizing that prompt differences between execution platforms represent deliberate feature optimization rather than maintenance failure, establishing that similarity metrics should only enforce parity on shared governance rules.
