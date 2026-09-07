---
package: rjm
name: Encapsulate Constructors
slug: encapsulate-constructors
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Encapsulate Constructors

## Definition — verbatim
(used, not defined)

> "3. **Practices**: Coding Standards, State Always Private, Programming by Intention, CVA, Encapsulate Constructors" — .claude/agents/implementer.md:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 172 | defined here | Listed under Level 3 Practices in the Software Hierarchy of Needs. |

## Consumes
Raw class constructors, direct instantiation calls, and object lifecycle bindings.

## Produces
Static factory methods, builder interfaces, or abstract factories concealing constructor invocation.

## When applied
Applied whenever object construction involves validation, caching, type specialization, or complex setup.

## Sub-concepts
none

## Part of
encapsulation, software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Encapsulating constructors hides direct class instantiation behind factory methods or builders. Direct constructor usage couples callers to concrete types and inflexible parameter lists; encapsulating creation allows returned types, instances, and validation logic to evolve without disturbing callers.
