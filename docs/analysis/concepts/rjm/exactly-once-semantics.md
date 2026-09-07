---
package: rjm
name: Exactly-once semantics
slug: exactly-once-semantics
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exactly-once semantics

## Definition — verbatim
> "an end-to-end property achieved by combining at-least-once delivery with idempotent receivers. It is a property of the whole pipeline, never of a single hop." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 17 | defined here | Defined in core vocabulary as an end-to-end pipeline property combining at-least-once delivery and idempotent receivers. |

## Consumes
At-least-once transport pipelines, idempotent message consumers, durable deduplication storage.

## Produces
End-to-end execution guarantees producing exactly-once observable outcomes.

## When applied
When designing critical multi-step agent pipelines where duplicate operations would cause financial, structural, or state corruption.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Exactly-once semantics frames exactly-once execution not as a transport guarantee, but as an end-to-end system property realized only when at-least-once messaging is coupled with idempotent receivers in rjm. By focusing on observable system effects rather than wire delivery, it avoids the architectural fallacy of expecting flawless network hops.
