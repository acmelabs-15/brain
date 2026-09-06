---
package: matt
name: phase boundary
slug: phase-boundary
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# phase boundary

## Definition — verbatim
> "The **phase boundary** is the gap between two phases, and it is the only place this decision belongs." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 16 | defined here | Router situation table explaining the decision tree for managing context when a session runs long. |
| external/ask-matt.md | 42 | defined here | External catalog documentation detailing the phase boundary context management decision tree. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 5 | defined here | Canonical definition establishing the transition point between distinct lifecycle work chunks. |

## Consumes
Completion of a lifecycle phase (e.g. grilling, prototyping, or ticket implementation).

## Produces
A decision selecting one of five context moves: Continue, /clear, /handoff, Subagent, or /compact.

## When applied
Strictly between distinct phases of work within a session; never mid-phase.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural gate in matt's lifecycle governing LLM context transitions. Instead of arbitrarily clearing or compacting context during ongoing reasoning, decisions about context preservation or disposal are deferred strictly to the boundary between phases. At this juncture, developers evaluate an ordered five-option decision tree (Continue -> /clear -> /handoff -> Subagent -> /compact) to maximize reasoning fidelity while staying within the smart zone.
