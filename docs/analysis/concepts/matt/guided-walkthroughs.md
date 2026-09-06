---
package: matt
name: guided walkthroughs
slug: guided-walkthroughs
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# guided walkthroughs

## Definition — verbatim
> "4. **Guided walkthroughs**: a set of **scenarios**, one per tab. Each tab holds a short plain-language description of the scenario (the situation it sets up and what to watch for) and underneath it, the ordered **buttons to press** for that scenario." — skills/engineering/prototype/LOGIC.md:46

## Also called — verbatim
`scenarios` — skills/engineering/prototype/LOGIC.md:46

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 56 | defined here | Introduces guided walkthroughs as a core UI feature of the single-file HTML logic prototype. |
| docs/engineering/prototype.md | 19 | defined here | Explains that logic prototypes include guided walkthroughs allowing stakeholders to explore scenarios. |
| external/prototype.md | 34 | defined here | Documents tabbed guided walkthroughs in shareable HTML prototype files. |
| skills/engineering/prototype/LOGIC.md | 46 | defined here | Specifies the layout, reset behavior, and interactive button sequence for prototype walkthrough tabs. |

## Consumes
State model actions and key domain scenarios requiring validation.

## Produces
Interactive tabs in the HTML prototype that reset state and guide users through ordered button sequences.

## When applied
When authoring logic prototypes to validate edge cases, happy paths, and illegal actions with stakeholders.

## Sub-concepts
none

## Part of
none

## Implementation status
clean (in docs/engineering/prototype.md, skills/engineering/prototype/LOGIC.md); defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Guided walkthroughs provide structured, reproducible scenario sequences inside self-contained logic prototype HTML files, enabling non-technical stakeholders to test domain logic and edge cases before code is written.
