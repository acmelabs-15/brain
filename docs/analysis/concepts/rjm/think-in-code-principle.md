---
package: rjm
name: Think in Code Principle
slug: think-in-code-principle
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Think in Code Principle

## Definition — verbatim
> "## Think in Code Principle" — .claude/skills/analyze/references/context-budget-management.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/context-budget-management.md | 19 | defined here | Defines the core rule mandating code generation over serial data reading into context. |
| .claude/skills/analyze/SKILL.md | 72 | used here | References the principle under Context Budget Management. |

## Consumes
Analysis queries, large log files, directory hierarchies, and repetitive file transformations.

## Produces
Ephemeral code scripts executed via subprocess to extract precise answers.

## When applied
Applied whenever answering an inquiry would require reading multiple full files into context.

## Sub-concepts
none

## Part of
context-budget-management

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Think in Code Principle asserts that LLMs should generate code to inspect and transform data rather than reading data serially into prompt context. Serial ingestion burns tokens quadratically and introduces truncation risk; generating code executes deterministically, consumes minimal context, and scales to arbitrary data sizes.
