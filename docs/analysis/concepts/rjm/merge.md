---
package: rjm
name: merge
slug: merge
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: .claude/skills/panning-for-gold/scripts/pan.py, sha256: f448b2523db6e65590e2bf7fd22bd6426e17d2eb9424632d6d77019aff99b533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# merge

## Definition — verbatim
> "**merge** | Non-conflicting outputs | Combine all outputs" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 90 | defined here | Aggregation strategy row defining behavior for combining non-conflicting agent outputs. |
| .claude/skills/panning-for-gold/scripts/pan.py | 7 | defined here | CLI subcommand docstring defining the merge operation for pass1 and final inventories. |

## Consumes
Non-conflicting parallel agent outputs or multi-pass inventory files.

## Produces
A combined composite document or inventory unifying all non-conflicting records.

## When applied
Applied when concurrent agent results cover disjoint concerns without contradiction, or during panning-for-gold inventory consolidation.

## Sub-concepts
none

## Part of
aggregation-strategies

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights refined in downstream docs). Clean in .claude/skills/panning-for-gold/scripts/pan.py:7 (cmd_merge).

## Design notes
The default, non-conflicting aggregation strategy in multi-agent workflows and multi-pass data collection. In ADR-009, merge combines independent findings across specialist domains without requiring arbitration; in panning-for-gold, it unites first-pass and final inventory files into a single verified output.
