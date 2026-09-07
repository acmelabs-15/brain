---
package: rjm
name: exactly-one-fence rule
slug: exactly-one-fence-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# exactly-one-fence rule

## Definition — verbatim
> "the exactly-one-fence rule exists to remove. Round 12 showed that pairing the" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 94 | defined here | Core parser rule removing candidate selection among multiple markdown code blocks. |

## Consumes
Raw model outputs containing markdown code blocks.

## Produces
Single unwrapped JSON payload or a parse rejection if multiple or zero fences exist.

## When applied
Applied when unwrapping code fences in LLM responses to eliminate candidate selection ambiguity.

## Sub-concepts
none

## Part of
rule-audit-parser-forensics

## Implementation status
defects: doc-drift

## Design notes
A parser invariant requiring that a response contain exactly one code fence with only whitespace outside it, converting block unwrapping into a deterministic rewrite rather than an ambiguous choice.
