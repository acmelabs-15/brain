---
package: matt
name: cross-references
slug: cross-references
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cross-references

## Definition — verbatim
(used, not defined)

> "not deep `../other-skill/FILE.md` cross-references, and not a bare `/skill`-style mention left for the model to interpret." — .agents/invocation.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 16 | used here | Prohibits deep filesystem cross-references across skill directories in favor of explicit Skill tool calls. |

## Consumes
Skill directory structures and shared reference documentation.

## Produces
Modular skill boundaries where shared materials are reached via tool invocation rather than folder coupling.

## When applied
When defining cross-skill dependencies or accessing documentation owned by other skills.

## Sub-concepts
none

## Part of
Dependencies between them

## Implementation status
clean

## Design notes
Represents relative filesystem paths reaching across skill directories (`../other-skill/FILE.md`), an anti-pattern that matt explicitly forbids to maintain strict skill encapsulation and avoid brittle filesystem coupling.
