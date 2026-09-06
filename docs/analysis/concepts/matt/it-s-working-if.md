---
package: matt
name: It's working if
slug: it-s-working-if
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# It's working if

## Definition — verbatim
> "A few bullets naming what the reader sees when the skill is doing its job. The bar on each is that the reader can check it without opening `SKILL.md`: a signal in their own work, or in the trace in front of them." — .agents/writing-docs.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 58 | defined here | Defines the documentation section providing observable signals that confirm a skill is operating correctly. |

## Consumes
Observable behavioral signals, trace outputs, and artifact quality attributes.

## Produces
Empirical verification criteria that developers use to validate skill execution.

## When applied
Evaluated during and after skill execution to verify that intended behaviors occurred.

## Sub-concepts
none

## Part of
docs page

## Implementation status
clean

## Design notes
A practitioner-facing verification gate providing concrete signals visible in the terminal trace or working tree that confirm a skill is functioning properly, allowing users to verify success without inspecting internal skill source code.
