---
package: addy
name: Skills are not reference docs
slug: skills-are-not-reference-docs
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Skills are not reference docs

## Definition — verbatim
> "**Skills are not reference docs.** They're step-by-step processes the agent follows." — docs/getting-started.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 9 | used here | Core design principle statement contrasting executable skill workflows with passive documentation. |

## Consumes
Engineering process steps, verification gates, and rationalization tables.

## Produces
Operational guidance that dictates active agent execution steps rather than static reading material.

## When applied
In the design and structure of all skills across the repository.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Establishes that agent skills must be actionable, step-by-step procedures with explicit verification gates and exit criteria, rather than conceptual reference documentation that an agent merely summarizes or reads passively.
