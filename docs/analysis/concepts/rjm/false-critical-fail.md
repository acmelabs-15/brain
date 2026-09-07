---
package: rjm
name: False CRITICAL_FAIL
slug: false-critical-fail
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# False CRITICAL_FAIL

## Definition — verbatim
> "1. **False CRITICAL_FAIL** - Blocks legitimate PRs (Issue #357)" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 28 | defined here | Highlighted as a primary quality gate defect blocking legitimate pull requests. |

## Consumes
Pull request changes and overly rigid or context-blind quality gate prompts.

## Produces
An erroneous blocking failure verdict on non-defective pull requests.

## When applied
Occurs when quality gate prompts inappropriately apply code-level failure criteria to non-code changes.

## Sub-concepts
docs-only-exemptions

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path

## Design notes
A quality gate defect wherein benign pull requests (such as documentation updates) are incorrectly failed by automated review prompts. False critical failures halt development flow and degrade maintainer trust in AI evaluation, prompting structural test coverage and context-aware prompt refinement.
