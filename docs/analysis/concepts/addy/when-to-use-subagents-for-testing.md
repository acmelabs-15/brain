---
package: addy
name: When to Use Subagents for Testing
slug: when-to-use-subagents-for-testing
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# When to Use Subagents for Testing

## Definition — verbatim
> "For complex bug fixes, spawn a subagent to write the reproduction test:" — skills/test-driven-development/SKILL.md:345

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 343 | defined here | Protocol for delegating bug reproduction test creation to a subagent without forward knowledge of the fix. |

## Consumes
Bug description, current failing codebase state, subagent orchestration mechanism.

## Produces
Independent reproduction test authored without foreknowledge of the eventual fix, verified to fail on unfixed code.

## When applied
When diagnosing and fixing complex bugs requiring an unbiased, robust reproduction test before implementing changes.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
An agent orchestration pattern that delegates reproduction test authoring to an isolated subagent so the test cannot be tailored to the fix implementation, ensuring genuine falsifiability.
