---
package: rjm
name: digest scrubber
slug: digest-scrubber
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# digest scrubber

## Definition — verbatim
(used, not defined)

> "The preflight runs under the same digest scrubber as the ledger paths." — .agents/architecture/ADR-087-held-out-validated-improvement.md:339-340

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 340 | defined here | Security mechanism that sanitizes error messages, paths, and lock outputs to prevent held-out group digest leaks. |

## Consumes
Error messages, exception strings, file paths, and log output.

## Produces
Redacted output with held-out key digests replaced by placeholders.

## When applied
Active during all gate operations and error reporting in `optimize-artifact.py`.

## Sub-concepts
none

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An information leakage prevention pattern that redacts held-out task digests from filenames, lock contention notices, and exception tracebacks, preventing callers from reconstructing withheld task group membership.
