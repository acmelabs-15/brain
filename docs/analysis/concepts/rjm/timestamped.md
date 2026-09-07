---
package: rjm
name: Timestamped
slug: timestamped
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Timestamped

## Definition — verbatim
> "- **Timestamped**: Identify when each item is written. Important for aspects that change over time (costs, schedules, scaling)." — .claude/skills/adr-generator/references/adr-best-practices.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 9 | defined here | Listed as a key characteristic of a good ADR ensuring temporal context is captured for evolving aspects. |

## Consumes
Temporal metadata and authoring timestamps for decision items.

## Produces
Time-indexed architectural records preserving context for time-dependent parameters.

## When applied
Applied when authoring ADR sections containing parameters that change over time (such as infrastructure costs, roadmaps, and scaling thresholds).

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural documentation pattern in rjm emphasizing the explicit dating of decision elements. Because technical constraints, vendor costs, and organizational requirements evolve, timestamping ensures future readers evaluate architectural rationale against the actual conditions and time horizon under which the choice was originally justified.
