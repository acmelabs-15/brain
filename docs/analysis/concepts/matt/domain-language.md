---
package: matt
name: domain language
slug: domain-language
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# domain language

## Definition — verbatim
> "Domain language is the thing this skill is actually building: the project&#x27;s own words, agreed once, so you, the agent and your colleagues stop paying to re-derive them." — external/grill-with-docs.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 39 | used here | Explains that the core outcome of grilling is establishing ubiquitous project terminology in a shared glossary. |
| skills/engineering/prototype/LOGIC.md | 39 | used here | Mandates that UI prototype labels and state descriptions use domain language rather than code implementation terms. |

## Consumes
Ambiguous business concepts, domain discussions, or existing codebase terminology.

## Produces
Explicit vocabulary entries in CONTEXT.md and user-facing terminology in UI and logic models.

## When applied
During domain modeling, grilling, and prototype UI development to ensure consistent terminology.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
defects: orphan, doc-drift

## Design notes
Domain language is the project's canonical vocabulary, reflecting domain-driven design principles. Establishing clear domain terms prevents semantic confusion between human engineers and AI models, allowing both to communicate efficiently and consistently across specifications, code, and UI elements.
