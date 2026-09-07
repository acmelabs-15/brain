---
package: rjm
name: JTBD-Based Plugin Architecture
slug: jtbd-based-plugin-architecture
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JTBD-Based Plugin Architecture

## Definition — verbatim
> "ADR-072: JTBD-Based Plugin Architecture with Per-Harness Emission" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 12 | defined here | Architectural strategy defining plugin packaging by user jobs rather than source directory locations |

## Consumes
User workflows, harness integration points, and component capability definitions.

## Produces
Cohesive plugin boundaries aligned to developer jobs-to-be-done.

## When applied
Applied when structuring, partitioning, and publishing plugin distribution packages.

## Sub-concepts
job-to-be-done, per-harness-emission, dev-lifecycle, agent-team, project-toolkit

## Part of
framework-extraction

## Implementation status
defects: missing-path

## Design notes
JTBD-Based Plugin Architecture is an architectural approach proposed in ADR-072 that reorganizes plugin distribution boundaries around the user's jobs-to-be-done ("write and ship code safely", "delegate to specialists") rather than repository directory structures. This minimizes user migration churn across multiple host harnesses.
