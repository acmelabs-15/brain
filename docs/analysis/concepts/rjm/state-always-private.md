---
package: rjm
name: State Always Private
slug: state-always-private
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

# State Always Private

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
Class variables, instance attributes, and internal state representations.

## Produces
Strictly private state fields manipulated exclusively through intention-revealing methods.

## When applied
Enforced for every field and state variable declared within domain classes.

## Sub-concepts
none

## Part of
encapsulation, software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
An uncompromising object-oriented practice requiring that internal state variables never be exposed as public or protected fields. Direct public state access invites external callers to bypass class invariants, producing temporal coupling and crippling maintainability.
