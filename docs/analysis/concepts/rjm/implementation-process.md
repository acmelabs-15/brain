---
package: rjm
name: Implementation Process
slug: implementation-process
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Implementation Process

## Definition — verbatim
> "## Implementation Process" — .claude/agents/implementer.md:332

## Also called — verbatim
> "## Implementation Process" — templates/agents/implementer.shared.md:321

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 332 | defined here | Section heading defining the standard multi-step task execution workflow for implementer agents. |
| templates/agents/implementer.shared.md | 321 | defined here | Section heading defining the sequential implementation workflow in shared templates. |

## Consumes
Task decomposition specifications, issue tickets, and architectural designs.

## Produces
Verified code diffs, passing test suites, and structured commit histories.

## When applied
When executing any development task assigned to the implementer agent.

## Sub-concepts
commit-discipline, test-rigor

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Implementation Process provides a disciplined, step-by-step lifecycle workflow for coding tasks in rjm. By sequencing impact analysis, test creation, minimal diff implementation, verification passes, and atomic commits, it maintains repeatability and high code quality.
