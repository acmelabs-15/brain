---
package: matt
name: The /prototype Skill
slug: the-prototype-skill
kind: technique
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The /prototype Skill

## Definition — verbatim
> "Answer a design question with code you then delete." — external/prototype.md:24

## Also called — verbatim
`prototype` — external/prototype.md:25
`/prototype` — external/prototype.md:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 24 | defined here | Web documentation title and definition for building throwaway code to resolve design ambiguities. |

## Consumes
An unresolved design question regarding state logic or user interface structure.

## Produces
A self-contained HTML demo file or UI variant routes, plus a durable design verdict captured in an issue or ADR.

## When applied
"Reach for it the moment you hit a question you can&#x27;t settle by talking: a state machine whose edge cases you can&#x27;t hold in your head, a screen you can&#x27;t picture until you see three versions side by side." — external/prototype.md:29

## Sub-concepts
two-branches, free-play-buttons, pure-module, variant, the-prototype-is-a-primary-source

## Part of
shaping

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44 documents retaining prototypes on dedicated branches rather than deleting them), doc-drift (external/prototype.md:46 documents replacing terminal apps with HTML files), other (external/prototype.md:48 notes agents prematurely recommending prototyping for settled designs)

## Design notes
A shaping technique that resolves thorny design questions through disposable, runnable code rather than abstract conversational debate. By focusing strictly on answering one question, it prevents agents and developers from over-engineering unverified designs into production.
