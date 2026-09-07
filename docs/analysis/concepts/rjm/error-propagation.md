---
package: rjm
name: Error Propagation
slug: error-propagation
kind: pattern
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

# Error Propagation

## Definition — verbatim
> "**Error Propagation:**" — .claude/agents/silent-failure-hunter.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 77 | defined here | Review axis examining whether errors bubble up to appropriate handlers or are prematurely swallowed. |
| templates/agents/silent-failure-hunter.shared.md | 87 | defined here | Shared template review axis defining error propagation scrutiny rules. |

## Consumes
Call stack hierarchies, error-return signatures, and exception-handling control flows.

## Produces
Audit verdicts determining whether exceptions must bubble to higher-level orchestrators rather than being handled locally.

## When applied
Applied when reviewing error handling to verify that errors surface to the layer best positioned to resolve or report them.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
Error Propagation is a review evaluation dimension ensuring that errors bubble up to the layer best positioned to handle or report them, preventing premature swallowing that aborts proper cleanup or masks upstream component failures.
