---
package: matt
name: /clear
slug: clear
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
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /clear

## Definition — verbatim
> "Empty the context window and start from nothing." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 41 | defined here | Router phase boundary option table describing /clear as the cheapest move when context is disposable. |
| docs/engineering/to-spec.md | 63 | used here | Recommends clearing or compacting context after completing a specification. |
| docs/engineering/to-tickets.md | 74 | used here | Recommends running /clear between implementation tickets to prevent context carryover. |
| docs/productivity/handoff.md | 5 | used here | Contrasts /clear against handoff when starting a new session without needing past context. |
| external/ask-matt.md | 43 | used here | External catalog documentation detailing /clear at phase boundaries. |
| external/handoff.md | 26 | used here | External documentation discussing clearing context versus exporting handoffs. |
| external/to-tickets.md | 62 | used here | External reference on clearing context between discrete ticket executions. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 12 | defined here | Defines /clear in the phase boundary options table. |
| skills/engineering/wizard/template.sh | 33 | defined here | Generates a shell template that recommends clearing context after setup completion. |

## Consumes
A session where previous reasoning, experiments, or completed tickets are entirely disposable.

## Produces
An empty context window with maximum token space restored for the subsequent task.

## When applied
At a phase boundary when what comes next does not depend on past conversational context.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A context-management command in Claude Code that erases conversational history to reclaim the full token window. In matt's lifecycle, /clear is the highest-priority context reset move on the phase boundary tree when past work is disposable (such as between independent implementation tickets), eliminating conversational noise and preventing token degradation in the smart zone.
