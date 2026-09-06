---
package: matt
name: portability
slug: portability
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# portability

## Definition — verbatim
> "What `/handoff` buys is **portability**: a file that travels. If nothing is travelling, you don't need it." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 46 | defined here | Explains that portability is the whole of what /handoff buys, clarifying it is not a general bridge. |
| docs/productivity/handoff.md | 5 | defined here | Establishes that handoff buys portability rather than compression. |
| external/handoff.md | 26 | used here | External catalog documentation detailing portability requirements across agent environments. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 34 | defined here | Canonical statement that handoff exists exclusively to provide context portability. |
| skills/engineering/ask-matt/SKILL.md | 67 | defined here | Identifies portability as the sole benefit of generating a handoff file. |

## Consumes
A task or conversational state that needs to transition across external system boundaries.

## Produces
A self-contained, portable markdown artifact readable by any agent harness or human developer.

## When applied
When switching harnesses, changing workspace directories, sharing work with colleagues, or forking subtasks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The core architectural property in matt distinguishing external document export from internal session compression. Portability represents the ability of a task's context to travel across tooling or environmental boundaries (e.g. Claude to Codex, main project to prototype repo, or between developers). Without portability requirements, generating an external handoff document is considered unnecessary overhead compared to continuing in-session or using /compact.
