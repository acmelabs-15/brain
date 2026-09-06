---
package: matt
name: secondary source
slug: secondary-source
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# secondary source

## Definition — verbatim
> "Every move except **Continue** turns a **primary source** into a **secondary source**: the session as it happened, replaced by a summary of it." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:44

## Also called — verbatim
`secondary sources` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 90 | defined here | Explains that the router is a secondary source over the skills it describes, yielding to SKILL.md. |
| docs/productivity/handoff.md | 42 | used here | Contrasts handoff documents as secondary sources against the full primary session context. |
| external/ask-matt.md | 70 | used here | External catalog documentation describing secondary sources in skill routing. |
| external/handoff.md | 43 | used here | External documentation discussing information loss when converting primary context to secondary summaries. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 44 | defined here | Canonical definition of secondary sources resulting from context compaction or handoffs. |

## Consumes
Primary conversational history or authoritative source documentation.

## Produces
A compressed, higher-level summary or description trading detailed reasoning for reduced token footprint.

## When applied
Whenever context is compacted, exported to a handoff file, or summarized by an indexing router.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An epistemic classification in matt's context management framework. While continuing in an unbroken session retains a primary source with full reasoning nuance, any context reset mechanism (/compact or /handoff) converts the history into a lossy secondary source. Understanding this distinction prevents agents and developers from prematurely collapsing rich technical reasoning into flattened summaries before phase goals are achieved.
