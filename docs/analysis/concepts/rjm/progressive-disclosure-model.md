---
package: rjm
name: Progressive Disclosure Model
slug: progressive-disclosure-model
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Progressive Disclosure Model

## Definition — verbatim
> "## 5. Progressive Disclosure Model" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:467

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 467 | defined here | Token-efficient loading architecture defining metadata, instructions, and on-demand resource tiers. |

## Consumes
none

## Produces
Tiered context-loading strategy: Metadata (~100 tokens), Instructions (<5000 tokens), and Resources (on demand).

## When applied
Applied during skill design to minimize prompt bloat and optimize context-window utilization across agent executions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
An architectural design pattern that limits initial agent context consumption by tiering skill content into small startup metadata, lean core instructions, and on-demand external references, preventing token bloat in long development sessions.
