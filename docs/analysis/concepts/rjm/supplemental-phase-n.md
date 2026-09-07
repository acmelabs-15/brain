---
package: rjm
name: Supplemental (Phase N)
slug: supplemental-phase-n
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Supplemental (Phase N)

## Definition — verbatim
> "as a `### Supplemental (Phase N)` sub-block. Do NOT replace the original subsections." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 94 | defined here | Defined as the sub-block appended beneath Connected Context in PriorArtBlock when supplemental graph traversal runs. |

## Consumes
New entity-linked memories and relationships surfaced from higher-tier graph traversal phases.

## Produces
Markdown sub-block appended to `## Prior Art / Constraints` documenting additional findings without overwriting original sections.

## When applied
Appended when Step 3 tier escalation triggers the supplemental traversal hook.

## Sub-concepts
none

## Part of
step-0-5-supplemental-traversal-hook, priorartblock

## Implementation status
defects: missing-path, doc-drift

## Design notes
An additive markdown section in the PriorArtBlock that preserves the original triage context while recording deeper architectural entities uncovered when complexity tier escalation triggers extra graph traversal phases.
