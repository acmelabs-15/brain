---
package: rjm
name: Pre-Work Context Analysis
slug: pre-work-context-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Work Context Analysis

## Definition — verbatim
> "Prevents the model from diving into execution without understanding the environment. This addresses a common failure mode where the model acts on instructions without considering relevant context." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1160 | defined here | Defined as a behavioral shaping technique requiring models to analyze environmental context before beginning execution. |

## Consumes
Task instructions, filenames, directory structures, document style conventions, and environment state.

## Produces
Grounded understanding of the operating environment prior to executing actions.

## When applied
> "Before you begin work, think about what the code you're editing is supposed to do" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1167

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
In rjm's prompt engineering framework, Pre-Work Context Analysis prevents agents from rushing into tool execution without first surveying the surrounding repository or document context. While Plan-and-Solve structures reasoning about the problem itself, Pre-Work Context Analysis structures comprehension of the external environment in which the problem exists.
