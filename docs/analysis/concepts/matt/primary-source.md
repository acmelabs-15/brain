---
package: matt
name: primary source
slug: primary-source
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
  - {path: skills/engineering/prototype/SKILL.md, sha256: 714de632d116bb73f65cdb5a882db15b9369a6713b9a47c0fad827848f0bfbe3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# primary source

## Definition — verbatim
> "Every move except **Continue** turns a **primary source** into a **secondary source**: the session as it happened, replaced by a summary of it." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 77 | used here | Listed as an AI Coding Dictionary vocabulary term requiring proper linkage. |
| docs/engineering/ask-matt.md | 40 | used here | Advises continuing in a session when the next phase requires the original verbatim discussion as a primary source. |
| docs/engineering/code-review.md | 44 | used here | Refers to original tickets and specifications as primary sources against which implementation is judged. |
| docs/engineering/prototype.md | 35 | used here | Instructs capturing prototype code and verdicts as primary sources on throwaway branches. |
| docs/engineering/resolving-merge-conflicts.md | 5 | used here | Emphasizes consulting commit histories and PR descriptions as primary sources during merge resolution. |
| docs/productivity/handoff.md | 42 | used here | Warns that handoff summaries convert primary source context into lossy secondary summaries. |
| external/ask-matt.md | 43 | used here | Discusses preserving primary source conversational nuance when transitioning phases. |
| external/code-review.md | 43 | used here | Evaluates code changes against primary source intent rather than derived interpretations. |
| external/handoff.md | 43 | used here | Contrasts primary source conversation history with secondary handoff summaries. |
| external/prototype.md | 44 | used here | Outlines storing prototype spikes as primary source evidence for architectural decisions. |
| external/resolving-merge-conflicts.md | 26 | used here | Stresses using original author commits as primary source intent. |
| external/teach.md | 41 | used here | Mentions using official framework documentation as primary source material. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 21 | defined here | Names primary source retention as the key reason to choose Continue at a phase boundary. |
| skills/engineering/prototype/SKILL.md | 26 | defined here | Directs capturing prototype code as a primary source on a throwaway branch with issue context pointers. |

## Consumes
Raw conversation history, unflattened transcripts, throwaway prototype branches, official third-party documentation.

## Produces
High-fidelity ground-truth context and evidence that prevents speculative hallucination or summary degradation.

## When applied
When deciding whether to Continue in a session at a phase boundary, or when verifying requirements and bug hypotheses.

## Sub-concepts
none

## Part of
ask-matt, ai-coding-dictionary

## Implementation status
clean

## Design notes
The unedited, loss-free original record of work or documentation (the live conversation session, original git commit, executable prototype, or first-party API document) as opposed to a summarized secondary source. Retaining primary sources avoids the lossiness of summarization when downstream tasks require precise reasoning context.
