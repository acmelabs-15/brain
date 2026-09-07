---
package: rjm
name: Shallow class
slug: shallow-class
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shallow class

## Definition — verbatim
> "**Shallow class**: a class that exposes everything it does. Combine it with its caller, push behavior down, or absorb it into a deeper sibling." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 172 | defined here | Defined in anti-patterns as a class that exposes everything it does rather than encapsulating meaningful behavior. |

## Consumes
none

## Produces
none

## When applied
Identified during code review and refactoring to target classes that should be combined with callers or absorbed into deeper modules.

## Sub-concepts
none

## Part of
shallow-module

## Implementation status
clean

## Design notes
An object-oriented anti-pattern in rjm where a class merely mirrors internal mechanics in its public surface. It provides no information hiding, adding indirection without paying for its cognitive and structural overhead.
