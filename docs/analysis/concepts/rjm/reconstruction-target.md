---
package: rjm
name: reconstruction target
slug: reconstruction-target
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reconstruction target

## Definition — verbatim
> "Treat customization as designing a **reconstruction target**, not editing a continuous identity." — docs/customization.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/customization.md | 7 | defined here | Core architectural principle establishing that customization defines the substrate from which ephemeral agent instances reconstruct identity. |

## Consumes
Stable substrate files (`SOUL.md`, `AGENTS.md`, `CLAUDE.md`, `SKILL.md`).

## Produces
Coherent and consistent agent persona, operating context, and procedural workflows reconstructed at session start.

## When applied
Applied when authoring, customizing, or structuring agent instructions, prompts, and identity files across platforms.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
In rjm's architecture, sessions do not survive and model instances lack continuous cross-session memory. Customization is therefore framed as designing a stable reconstruction target in durable markdown files from which a fresh model reconstructs its persona, operating rules, and procedural skills at each session start.
