---
package: rjm
name: Memory count
slug: memory-count
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory count

## Definition — verbatim
> "| Memory count | 5-10 Forgetful memories created | 4 |" — .claude/skills/research-and-incorporate/SKILL.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 132 | defined here | Blocking quality gate enforcing creation of 5 to 10 Forgetful memories in Phase 4. |

## Consumes
Generated Forgetful memories batch.

## Produces
Numerical verification pass confirming 5 to 10 memories exist.

## When applied
Evaluated during Phase 4 memory creation in research-and-incorporate.

## Sub-concepts
none

## Part of
phase-4-memory-integration, research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
A volume constraint quality gate ensuring research topics produce sufficient coverage across frameworks, patterns, failure modes, and examples without overwhelming the store.
