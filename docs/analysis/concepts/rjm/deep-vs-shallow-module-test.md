---
package: rjm
name: deep-vs-shallow module test
slug: deep-vs-shallow-module-test
kind: technique
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

# deep-vs-shallow module test

## Definition — verbatim
> "The single sharpest lens is the deep-vs-shallow module test. Most other rules in this file follow from it. When you cannot decide between two designs, pick the one that hides more complexity behind a smaller interface." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 6 | defined here | Defined as the primary evaluation heuristic for choosing between alternative software designs by favoring the option that hides more complexity behind a smaller interface. |

## Consumes
Alternative architectural designs or candidate module interfaces.

## Produces
An architectural decision selecting the module design with the highest capability-to-interface-surface ratio.

## When applied
"When you cannot decide between two designs, pick the one that hides more complexity behind a smaller interface." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:6

## Sub-concepts
deep-module, shallow-module

## Part of
none

## Implementation status
clean

## Design notes
The definitive design evaluation technique in rjm's modular philosophy. It resolves trade-offs between competing interface proposals by systematically favoring designs that maximize encapsulated functionality while minimizing cognitive load on callers.
