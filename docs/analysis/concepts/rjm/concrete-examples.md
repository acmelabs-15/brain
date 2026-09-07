---
package: rjm
name: Concrete examples
slug: concrete-examples
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

# Concrete examples

## Definition — verbatim
> "| Concrete examples | 3+ with context and outcomes | 2 |" — .claude/skills/research-and-incorporate/SKILL.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 128 | defined here | Blocking quality gate requiring 3 or more concrete examples with context and outcomes in Phase 2. |

## Consumes
Examples section of the Phase 2 analysis document.

## Produces
Verification assessment confirming at least 3 contextualized examples exist.

## When applied
Evaluated at the completion of Phase 2 in research-and-incorporate.

## Sub-concepts
none

## Part of
phase-2-analysis-document, research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
A quality gate enforcing pragmatic grounding by requiring analysis documents to include at least three real-world examples with operational context and outcomes.
