---
package: matt
name: handoff
slug: handoff
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
  - {path: skills/productivity/handoff/agents/openai.yaml, sha256: 5c479fd562c691851690e8b18c8501045bef0943c10743d636b2fae26add1d28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# handoff

## Definition — verbatim
> "`handoff` compacts the conversation you are in into a **handoff document**: one markdown file, written to your OS's temporary directory rather than into the workspace, that a fresh [agent](https://www.aihero.dev/ai-coding-dictionary/agent) can read to pick the work up." — docs/productivity/handoff.md:3

## Also called — verbatim
`handoff document` — docs/productivity/handoff.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 42 | used here | Phase boundary option table row indicating handoff when work must travel to a new harness or directory. |
| docs/productivity/handoff.md | 3 | defined here | Canonical definition of handoff as compacting a conversation into a portable temporary markdown document. |
| docs/productivity/teach.md | 20 | used here | Describes using handoff documents to bridge learning across separate instructional sessions. |
| external/ask-matt.md | 43 | used here | External catalog documentation on handoff triggers at phase boundaries. |
| external/diagnosing-bugs.md | 78 | used here | External documentation describing bug investigation post-mortem handoffs. |
| external/handoff.md | 28 | defined here | External catalog definition of the handoff skill and document format. |
| external/prototype.md | 52 | used here | External guide on using handoffs to bridge between main codebases and prototype directories. |
| external/teach.md | 74 | used here | External documentation on educational session handoffs. |
| external/to-questionnaire.md | 74 | used here | External reference on handoff mechanisms in questionnaire workflows. |
| external/wayfinder.md | 30 | used here | External documentation describing handoffs from wayfinder maps to specifications. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 13 | defined here | Defines /handoff in the phase boundary options table. |
| skills/productivity/handoff/agents/openai.yaml | 2 | defined here | Configuration interface for the handoff agent skill. |
| skills/productivity/handoff/SKILL.md | 2 | defined here | Skill frontmatter declaring handoff's purpose and invocation triggers. |
| skills/productivity/README.md | 10 | used here | Directory README listing handoff under core productivity skills. |

## Consumes
An active conversation thread and an optional note describing the intended scope of the receiving session.

## Produces
A portable markdown document written to the OS temporary directory containing task context, goals, and state.

## When applied
When work must travel across harnesses, directories, colleagues, or into a forked side task.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other (OS temporary directory paths vary across platforms, temp files risk automatic deletion, shell command escaping hazards)

## Design notes
A specialized context transfer mechanism and artifact in matt designed specifically to provide portability rather than general compression. Rather than staying inside an increasingly crowded session or performing lossy compaction, handoff serializes the relevant goals, context, and immediate next steps into an external markdown file so that a fresh agent session in any harness or directory can immediately resume work without inheriting conversation baggage.
