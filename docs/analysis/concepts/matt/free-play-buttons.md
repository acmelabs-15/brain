---
package: matt
name: free-play buttons
slug: free-play-buttons
kind: technique
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# free-play buttons

## Definition — verbatim
> "3. **Free-play buttons**: one button per action, always available, so anyone can poke at the model in any order. Each click dispatches its action and re-renders the state." — skills/engineering/prototype/LOGIC.md:45

## Also called — verbatim
`Free-play buttons` — skills/engineering/prototype/LOGIC.md:45

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 34 | defined here | Highlighted as an essential control element in shareable HTML demos allowing unstructured interaction with state models. |
| skills/engineering/prototype/LOGIC.md | 45 | defined here | Detailed requirement prescribing always-available action buttons that dispatch events and immediately re-render visible state. |

## Consumes
A state model or reducer with discrete executable actions.

## Produces
Interactive buttons that trigger state actions and update the UI state panel in real time.

## When applied
When authoring the shareable HTML prototype for exploring logic and state models.

## Sub-concepts
none

## Part of
the-prototype-skill, two-branches

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44)

## Design notes
Interactive controls in a logic prototype offering one button per domain action. They allow non-technical evaluators to poke at the state machine in arbitrary sequences, exposing unforeseen edge cases or invalid state transitions early.
