---
package: rjm
name: Negative controls
slug: negative-controls
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Negative controls

## Definition — verbatim
> "Every contract test needs a case where the wrong artifact fails." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 92 | defined here | Defined as requiring every contract test to include a case where an invalid artifact demonstrably fails. |
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 13 | used here | Cited in measurement discipline retrospective where two negative controls were initially false passes. |

## Consumes
Intentionally mutated inputs, invalid artifacts, or corrupted environment contracts.

## Produces
Empirical demonstration that test assertions actively reject improper inputs.

## When applied
Required in all runtime-contract tests and rule audit suites.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A negative control proves that a test or audit check is capable of failing when presented with flawed inputs. It prevents self-referential tautologies where tests pass simply because both generator and test share the same flaw or because the test never actually executed the code under test.
