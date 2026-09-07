---
package: rjm
name: First Principles Algorithm
slug: first-principles-algorithm
kind: technique
package_phase: rjm:implement
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

# First Principles Algorithm

## Definition — verbatim
> "- **First Principles Algorithm**: Question the requirement → try to delete the step → optimize or simplify → speed up → automate. Never optimize something that should not exist." — .claude/agents/implementer.md:849

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 849 | applies | Behavioral constraint guiding implementation decisions and simplification passes. |
| templates/agents/implementer.shared.md | 838 | applies | Cross-platform implementation constraint mandating question-delete-optimize sequencing. |

## Consumes
Requirements, proposed architectural steps, and existing implementation patterns.

## Produces
Simplified code and eliminated unnecessary abstractions or redundant processing steps.

## When applied
Applied when analyzing requirements or designing solution steps to avoid over-engineering.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
An anti-over-engineering heuristic derived from first-principles engineering (Musk's 5-step algorithm). It forces agents to first question requirements and attempt to delete steps before attempting optimization or automation, preventing unnecessary complexity and speculative abstractions.
