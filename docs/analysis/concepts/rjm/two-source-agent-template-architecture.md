---
package: rjm
name: Two-Source Agent Template Architecture
slug: two-source-agent-template-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Two-Source Agent Template Architecture

## Definition — verbatim
> "# ADR-036: Two-Source Agent Template Architecture" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:12

## Also called — verbatim
`two-source architecture` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 12 | defined here | Establishes the architectural decision maintaining separate Claude-specific and shared-template source trees. |
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 193 | used here | Cites ADR-036 as the governing template inheritance model affected by Copilot CLI frontmatter requirements. |
| .agents/architecture/ADR-052-template-strategy.md | 34 | used here | Evaluates the operational history and limitations of the two-source architecture while establishing ADR-052 as superseding governance. |
| .claude/agents/AGENTS.md | 15 | used here | Documents ADR-036 as the operative procedure governing multi-platform agent synchronization pending ADR-052 implementation. |
| templates/AGENTS.md | 15 | used here | References ADR-036 as the operative procedure for template synchronization and agent compilation. |
| templates/README.md | 5 | used here | Designates ADR-036 as the active procedure governing shared agent template maintenance. |

## Consumes
Multi-platform agent specifications, platform capability constraints, and shared governance requirements.

## Produces
Hand-maintained Claude Code agent files (`src/claude/*.md`) and generated Copilot CLI and VS Code agent files from `templates/agents/*.shared.md`.

## When applied
Operative procedure for authoring and synchronizing agent instructions across supported execution harnesses.

## Sub-concepts
two-source-architecture, shared-templates, synchronization-requirement, intentional-divergence

## Part of
template-strategy

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
An architectural pattern balancing platform-specific prompt features with multi-harness code generation. Hand-crafted Claude prompts access advanced tools and memory while shared templates compile Copilot CLI and VS Code agent files, requiring manual synchronization of universal governance sections across both source trees.
