---
package: addy
name: Anti-Rationalization
slug: anti-rationalization
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Anti-Rationalization

## Definition — verbatim
> "- **Anti-rationalization.** Every skill includes a table of common excuses agents use to skip steps" — README.md:342

## Also called — verbatim
> "### Anti-Rationalization" — AGENTS.md:56

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 56 | defines | Section heading listing explicit rationalizations agents must reject during execution |
| README.md | 342 | defines | Identifies anti-rationalization tables as a core architectural design principle across all skills |

## Consumes
Internal agent deliberation or shortcuts that attempt to bypass process requirements.

## Produces
Documented rebuttals that enforce adherence to required lifecycle steps.

## When applied
Applied continuously whenever an agent considers bypassing tests, specs, or reviews.

## Sub-concepts
none

## Part of
skills

## Implementation status
defects: doc-drift

## Design notes
Anti-rationalization is a defensive prompt-engineering technique that anticipates common cognitive excuses agents use to skip steps (such as "I'll write tests later") and binds them to strict counter-arguments.
