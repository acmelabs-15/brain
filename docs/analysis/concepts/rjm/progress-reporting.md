---
package: rjm
name: progress reporting
slug: progress-reporting
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# progress reporting

## Definition — verbatim
> "While a review runs longer than 30 seconds, it emits a progress checkpoint to stderr at 30-second intervals." — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:123

## Also called — verbatim
`progress checkpoint` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:123

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 121 | defined here | Section heading and specification for emitting periodic progress checkpoints during long-running security reviews. |

## Consumes
Review execution duration timer and current scan metrics (elapsed_ms, remaining_ms, files_scanned, findings_count).

## Produces
Structured JSON progress checkpoints emitted to stderr at 30-second intervals.

## When applied
Emitted automatically whenever security review analysis exceeds 30 seconds of wall-clock time.

## Sub-concepts
none

## Part of
diff-scope-classifier, security-review

## Implementation status
clean

## Design notes
Progress reporting resolves the silent window problem during prolonged agent execution. By emitting periodic checkpoints to stderr, orchestrators receive continuous liveness telemetry to differentiate healthy long-running analysis from wedged processes.
