---
package: rjm
name: claude-opus-4.5
slug: claude-opus-4-5
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# claude-opus-4.5

## Definition — verbatim
(used, not defined)

> "- Escalation: `claude-opus-4.5` (when confidence <70% or borderline verdict)" — .agents/architecture/ADR-021-model-routing-strategy.md:69

## Also called — verbatim
> "<model>claude-opus-4-5</model>" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 69 | used here | Designated as the escalation model for general reviews and primary model for security gates. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 12 | used here | Specified execution model for running the buy-vs-build framework skill requiring deep reasoning. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
An external model identifier designating Anthropic's Claude Opus 4.5 model leveraged for high-stakes security evaluations and complex strategic analysis, rather than an internal lifecycle concept.
