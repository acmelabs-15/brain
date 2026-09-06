---
package: matt
name: subagent
slug: subagent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# subagent

## Definition — verbatim
> "| **Subagent** | Send the task to its own context window and get a report back. |" — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14

## Also called — verbatim
`sub-agent` — docs/engineering/code-review.md:3
`background agent` — CHANGELOG.md:177

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 77 | used here | Listed as an AI Coding Dictionary term that must be linked on first mention. |
| docs/engineering/implement.md | 57 | used here | Explains that subagent fan-out across multiple tickets is unsupported in single-checkout implement sessions. |
| docs/engineering/research.md | 35 | used here | Describes spawning an unattended subagent to investigate documentation and return findings. |
| docs/engineering/wayfinder.md | 50 | used here | Discusses delegating bounded exploratory questions to subagents. |
| docs/productivity/handoff.md | 5 | used here | Distinguishes handoff files from subagents when transitioning across session boundaries. |
| external/ask-matt.md | 43 | used here | Details subagent execution as an option at phase boundaries for AFK work. |
| external/handoff.md | 26 | used here | Compares subagent delegation with context compaction and file-based handoff. |
| external/implement.md | 52 | used here | Addresses user inquiries regarding subagent ticket processing. |
| external/research.md | 38 | used here | Explains how research subagents operate asynchronously in the background. |
| external/wayfinder.md | 47 | used here | Outlines delegating frontier spikes to isolated subagents. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 14 | defined here | Defined in the phase boundary table as sending a task to its own context window and getting a report back. |

## Consumes
A tightly scoped task definition, context pointers, and objective criteria.

## Produces
A report, diagnosis, code diff, or markdown artifact returned to the orchestrating session.

## When applied
Triggered at phase boundaries when a task is scoped tightly enough to run unattended ("AFK") without steering.

## Sub-concepts
implementer-subagents, merger-subagent

## Part of
ask-matt, ai-coding-dictionary

## Implementation status
clean

## Design notes
An isolated, secondary agent session spawned to execute a bounded task in its own context window. It prevents context pollution in the parent session while enabling independent exploration, automated dual-axis code review, or concurrent ticket implementation.
