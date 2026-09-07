---
package: rjm
name: drift detection
slug: drift-detection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# drift detection

## Definition — verbatim
> "A drift detection script (`build/scripts/detect_agent_drift.py`) compares Claude agents against VS Code variants (and separately, the `.claude/agents`/`.github/agents` install copies) using Jaccard similarity on word tokens across a named-section allowlist." — .agents/architecture/ADR-052-template-strategy.md:48

## Also called — verbatim
- "Drift Detection" — templates/README.md:179

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-052-template-strategy.md | 48 | used here | Describes the automated script measuring lexical drift between Claude agents and generated platform variants. |
| .claude/agents/AGENTS.md | 84 | defined here | Establishes Rule 2 requiring weekly CI similarity checks to catch content drift across agent variants. |
| templates/README.md | 179 | defined here | Section heading documenting the weekly CI workflow detecting semantic divergence between Claude and Copilot agents. |

## Consumes
Agent prompt files across canonical directories (`src/claude/`, `.claude/agents/`) and generated platform target trees (`src/vs-code-agents/`, `.github/agents/`).

## Produces
Similarity scores, drift alerts, and automated GitHub issues when divergence exceeds allowed thresholds.

## When applied
Executed weekly via scheduled CI (`drift-detection.yml`) and during pre-push validation of multi-platform agent modifications.

## Sub-concepts
- jaccard-similarity

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
Drift detection is an automated verification technique that ensures prompt consistency across multiple target platforms. Because rjm maintains separate agent prompt trees for Claude Code and Copilot/VS Code environments, manual dual-edits risk content desynchronization. Drift detection uses automated lexical similarity comparisons with an 80% threshold to proactively catch unsynchronized prompt updates before behavioral divergence impacts production sessions.
