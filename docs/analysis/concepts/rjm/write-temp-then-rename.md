---
package: rjm
name: write-temp-then-rename
slug: write-temp-then-rename
kind: pattern
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write-temp-then-rename

## Definition — verbatim
(used, not defined)

> "write-temp-then-rename" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 39 | used here | Specified in data flow diagram as the persistence pattern for RunPersistence ensuring atomic writes and idempotency. |

## Consumes
Serialized run record content and temporary filesystem staging path.

## Produces
Atomically renamed destination file in `evals/security-spike/runs/<RUN_ID>/` preventing partial or corrupted writes.

## When applied
Applied whenever persisting execution logs or evaluation runs to disk where unhandled process crashes must not leave corrupted records.

## Sub-concepts
none

## Part of
runrecord

## Implementation status
clean

## Design notes
`write-temp-then-rename` is an atomic filesystem persistence pattern used in rjm's offline evaluation harness. By writing complete run records to a temporary file before renaming it into final position, the harness guarantees that consumers of `runs.jsonl` never encounter corrupted or partially-written execution records if an execution run terminates unexpectedly.
