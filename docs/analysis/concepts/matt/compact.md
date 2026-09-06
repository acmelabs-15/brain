---
package: matt
name: /compact
slug: compact
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /compact

## Definition — verbatim
> "Compress this context and seed a fresh session with the summary." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 44 | defined here | Phase boundary option table row designating /compact as the fallback when other moves do not apply. |
| docs/engineering/to-spec.md | 63 | used here | Recommends compacting or clearing context after finalizing a spec. |
| docs/engineering/to-tickets.md | 74 | used here | Recommends compacting context after ticket generation before starting implementation. |
| docs/productivity/handoff.md | 5 | used here | Contrasts /compact against /handoff for in-place session compression within the same directory and harness. |
| external/ask-matt.md | 43 | used here | External catalog documentation detailing /compact usage rules at phase boundaries. |
| external/handoff.md | 26 | used here | External guide explaining why /compact is preferred over handoff when work does not need to travel. |
| external/to-tickets.md | 62 | used here | External reference on compacting context after generating issue tickets. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 15 | defined here | Defines /compact in the phase boundary options table. |

## Consumes
An active session whose context is relevant to upcoming work but approaching the smart zone token limit.

## Produces
A compressed conversational context summary seeding a fresh session in the same harness and workspace.

## When applied
At a phase boundary when context must be retained in the same environment and cheaper options are ruled out.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A conversational summarization command in Claude Code that compresses dialogue history to free token capacity. In matt's lifecycle philosophy, /compact is intentionally placed at the bottom of the phase boundary decision tree as a default fallback rather than a first reach; because automated summarization flattens nuances and decisions, developers are advised to supply an explicit focusing instruction when compacting.
