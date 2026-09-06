---
package: matt
name: Simplified Technical English
slug: simplified-technical-english
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Simplified Technical English

## Definition — verbatim
(used, not defined)
> "Type it the moment a message doesn't land, and the agent re-pitches it: a little context, ASD-STE100 Simplified Technical English, and the ubiquitous language from your `CONTEXT.md`." — CHANGELOG.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 76 | used here | Cited as the controlled language standard (ASD-STE100) used by `wait-what` to eliminate model verbosity. |

## Consumes
Verbose, confusing, or jargon-heavy model output.

## Produces
Concise, clear, and unambiguous technical prose adhering to controlled vocabulary rules.

## When applied
Triggered by the `/wait-what` skill when an agent's response is unclear or overly verbose.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Simplified Technical English (specifically ASD-STE100) serves as an authoritative reference standard for clarity and concision in agent communications, curbing verbosity by enforcing short sentences and restricted vocabulary.
