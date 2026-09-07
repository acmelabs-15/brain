---
package: rjm
name: Idempotency guard
slug: idempotency-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Idempotency guard

## Definition — verbatim
> "#### AC-9: Idempotency guard {#req-ac9}" — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 135 | defines | Persistence gate preventing duplicate records for the same fixture, variant, and run index. |

## Consumes
Target run directory, existing JSONL records, incoming run record key.

## Produces
DuplicateRunError exception or permission to write record.

## When applied
Checked before writing each evaluation record during eval harness execution.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A safety gate in the evaluation persistence layer ensuring that each `(fixture_id, variant, run_index)` tuple is written exactly once in fresh runs, detecting accidental duplication or concurrency errors.
