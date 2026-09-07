---
package: rjm
name: Hidden Failures
slug: hidden-failures
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hidden Failures

## Definition — verbatim
> "### 4. Check for Hidden Failures" — .claude/agents/silent-failure-hunter.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 94 | defined here | Review step cataloging patterns that conceal failures, such as empty catch blocks and silent returns. |
| templates/agents/silent-failure-hunter.shared.md | 104 | defined here | Shared template review step detailing detection patterns for hidden failures. |

## Consumes
Catch-and-continue blocks, null-coalescing expressions, retry exhaustion logic, and disabled tests.

## Produces
Detection and flagging of error suppression anti-patterns that prevent system failures from surfacing.

## When applied
Applied during pull request review as step 4 of the silent failure audit process.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
Hidden Failures denotes a specific audit step that checks for anti-patterns that mask defects, including empty catch blocks, catch-and-continue without propagation, silent null returns, suppressed lint or test rules, and unlogged null-coalescing operations.
