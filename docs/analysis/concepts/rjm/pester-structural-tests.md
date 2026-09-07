---
package: rjm
name: Pester Structural Tests
slug: pester-structural-tests
kind: technique
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

# Pester Structural Tests

## Definition — verbatim
> "### Option 2: Pester Structural Tests (Chosen)" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 55 | defined here | Selected test strategy validating prompt structure, required sections, and consistency via Pester. |

## Consumes
Quality gate prompt files in `.github/prompts/` and Pester test specifications.

## Produces
Deterministic pass/fail test results validating prompt markdown syntax and structure.

## When applied
Run in CI prior to merging any pull request that modifies quality gate prompt files or test suites.

## Sub-concepts
none

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path

## Design notes
An automated verification technique using PowerShell Pester to enforce structural rules, required sections, and pattern consistency in AI prompt markdown files. It provides immediate, zero-cost CI feedback on prompt edits without relying on nondeterministic live model executions.
