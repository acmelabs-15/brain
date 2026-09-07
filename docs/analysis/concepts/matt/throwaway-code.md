---
package: matt
name: throwaway code
slug: throwaway-code
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: skills/engineering/prototype/SKILL.md, sha256: 714de632d116bb73f65cdb5a882db15b9369a6713b9a47c0fad827848f0bfbe3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# throwaway code

## Definition — verbatim
> "A prototype is **throwaway code that answers a question**. The question decides the shape." — skills/engineering/prototype/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 3 | defined here | Defines prototype code as disposable code authored strictly to resolve an empirical question. |
| external/prototype.md | 25 | defined here | Explains that prototyping writes throwaway code designed to answer specific behavior or layout questions. |
| skills/engineering/prototype/SKILL.md | 8 | defined here | Opens the skill by declaring a prototype to be throwaway code that answers a question. |

## Consumes
An empirical question about system behavior, UX layout, or state management.

## Produces
Temporary, disposable code written to settle the question and subsequently discarded or cleanly lifted.

## When applied
During prototyping sessions under the prototype skill.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Throwaway code is the foundational mental model for prototyping in Matt's lifecycle. Treating prototype code as explicitly disposable frees the engineer or agent from premature architectural perfectionism, focusing effort solely on answering the immediate uncertainty.
