---
package: rjm
name: job-to-be-done
slug: job-to-be-done
kind: technique
package_phase: cross-phase
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

# job-to-be-done

## Definition — verbatim
(used, not defined)

> "re-expresses those boundaries in job-to-be-done terms and adds per-harness emission" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 41 | used here | Framing methodology used to reorganize architectural boundaries around developer intent |

## Consumes
Developer task observations and user workflow requirements.

## Produces
Intent-driven functional slices and cohesive capability groupings.

## When applied
Applied during requirements analysis and plugin boundary design.

## Sub-concepts
none

## Part of
jtbd-based-plugin-architecture

## Implementation status
defects: missing-path

## Design notes
Job-to-be-done (JTBD) is a product design and architectural technique that frames system boundaries around the high-level objectives users seek to accomplish ("ship code safely") rather than technical implementation details. In rjm, it is used to define stable plugin boundaries that remain consistent even as underlying multi-harness mechanics evolve.
