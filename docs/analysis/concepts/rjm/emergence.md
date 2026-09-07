---
package: rjm
name: Emergence
slug: emergence
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Emergence

## Definition — verbatim
> "System behavior not predictable from individual parts" — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 68 | used here | Framed as a Zettelkasten outcome where insights and patterns emerge organically from the growing memory network. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 18 | defined here | Defined in systems thinking reference as system behavior not predictable from individual parts. |

## Consumes
Interconnected atomic notes, auto-linking relations, and complex system interactions.

## Produces
Higher-level architectural insights, unexpected failure mode detections, and cross-session pattern syntheses.

## When applied
During systems thinking reviews and automated memory graph traversals when assessing complex multi-agent behavior.

## Sub-concepts
none

## Part of
systems-thinking

## Implementation status
clean

## Design notes
A systems thinking and knowledge architecture pattern wherein higher-order behaviors, systemic risks, or architectural patterns arise from the interplay of individual components rather than being explicitly coded into any single unit. In memory design, it describes how cohesive domain insights emerge naturally from a dense network of atomic notes.
