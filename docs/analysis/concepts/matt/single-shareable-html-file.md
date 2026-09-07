---
package: matt
name: single shareable HTML file
slug: single-shareable-html-file
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# single shareable HTML file

## Definition — verbatim
> "- **"Does this logic / state model feel right?"**: a **single shareable HTML file**. One self-contained page, no build and no server, that someone opens by double-clicking." — docs/engineering/prototype.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 19 | defined here | Defines the standalone HTML prototype artifact with embedded styles, scripts, and controls. |
| external/prototype.md | 34 | defined here | Describes delivering logic prototypes as single self-contained HTML files requiring no server. |

## Consumes
Domain logic, test scenarios, and interactive walkthrough steps.

## Produces
A zero-dependency HTML file containing embedded CSS, JavaScript, state inspector, and scenario buttons.

## When applied
When validating state machine logic with designers, product managers, or non-technical domain experts.

## Sub-concepts
state-panel, state-model

## Part of
none

## Implementation status
clean

## Design notes
The single shareable HTML file is Matt's signature logic prototyping artifact. Requiring no local build setup, npm install, or server, it allows non-technical stakeholders to double-click and interact directly with state machines and guided walkthroughs, closing alignment gaps before writing production code.
