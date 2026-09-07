---
package: rjm
name: golden test corpus
slug: golden-test-corpus
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# golden test corpus

## Definition — verbatim
(used, not defined)

> "**Recommendation**: Add golden test corpus for known-vulnerable samples" — .agents/critique/ADR-023-debate-log.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 69 | used here | Recommended by Security agent as an evaluation benchmark for prompt testing. |

## Consumes
Curated test cases, known-vulnerable code snippets, expected agent verdicts.

## Produces
Repeatable evaluation benchmark for scoring agent prompt performance and regression detection.

## When applied
Utilized during prompt behavioral evaluation and regression testing to measure agent efficacy against validated baselines.

## Sub-concepts
none

## Part of
efficacy-testing

## Implementation status
defects: internal-contradiction

## Design notes
A golden test corpus is a curated set of benchmark test samples with verified ground truth used in rjm to evaluate AI agent efficacy and prompt resilience. It ensures that modifications to agent instructions or quality gates do not degrade core detection performance across known failure cases.
