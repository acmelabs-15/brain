---
package: rjm
name: six-role adr-review
slug: six-role-adr-review
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# six-role adr-review

## Definition — verbatim
(used, not defined)

> "six-role adr-review re-affirmed consolidation; the dispatcher is retained and" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 70 | used here | References the mandatory multi-agent consensus review that evaluated and reaffirmed hook dispatcher consolidation. |

## Consumes
ADR proposals, amendment text, and architectural diffs.

## Produces
Formal multi-agent debate logs and consensus ratification verdicts.

## When applied
Triggered on any creation, modification, or amendment of architectural decision records.

## Sub-concepts
none

## Part of
adr-review, architecture-governance

## Implementation status
defects: doc-drift, missing-path

## Design notes
A specialized multi-agent review panel in rjm composed of six diverse personas (architect, critic, independent-thinker, security, analyst, high-level-advisor). It acts as a mandatory governance gate before any architectural decision or amendment is accepted into the codebase.
