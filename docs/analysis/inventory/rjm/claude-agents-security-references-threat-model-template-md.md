---
package: rjm
path: .claude/agents/security/references/threat-model-template.md
type: agent
bytes: 774
unit: inv-rjm-73
in_scope_via: .claude/agents/security.md
aliases: []
memo_inputs:
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/security/references/threat-model-template.md

## Purpose — required, verbatim
> "Save to: `.agents/security/TM-NNN-[feature].md`" — .claude/agents/security/references/threat-model-template.md:3 (no explicit purpose statement)

## Design intent — required
A compact template format for documenting feature-level threat models (.agents/security/TM-NNN-[feature].md). It specifies a structured layout containing Assets, Threat Actors, Attack Vectors with STRIDE categorization, Data Flow Diagrams, and Recommended Controls prioritized by P0/P1/P2. Without it, security assessments would produce inconsistent threat models with missing severity ratings, overlooked threat actors, or untracked mitigation controls.

## Phase — required
rjm:spec

## Inputs — required
- Feature designs, architectural specifications, or system components undergoing security analysis.
- Identified threats, assets, threat actor profiles, and control recommendations.

## Outputs — required
- Threat model specification file saved to:
  `.agents/security/TM-NNN-[feature].md` — .claude/agents/security/references/threat-model-template.md:3

## Invokes — required
none

## Invoked by — required
- agent security — .claude/agents/security.md:719

## Concepts named — required, verbatim
- `Threat Model Format` — .claude/agents/security/references/threat-model-template.md:1 — defined here
- `Assets` — .claude/agents/security/references/threat-model-template.md:8 — defined here
- `Threat Actors` — .claude/agents/security/references/threat-model-template.md:13 — defined here
- `Attack Vectors` — .claude/agents/security/references/threat-model-template.md:18 — defined here
- `STRIDE Analysis` — .claude/agents/security/references/threat-model-template.md:20 — defined here
- `STRIDE` — .claude/agents/security/references/threat-model-template.md:20 — used here
- `Data Flow Diagram` — .claude/agents/security/references/threat-model-template.md:25 — defined here
- `Recommended Controls` — .claude/agents/security/references/threat-model-template.md:28 — defined here

## Structure
- # Threat Model Format
- # Threat Model: [Feature Name]
- ## Assets
- ## Threat Actors
- ## Attack Vectors
- ### STRIDE Analysis
- ## Data Flow Diagram
- ## Recommended Controls

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/agents/security/references/threat-model-template.md:5 — Compact 33-line outline template drifts from the comprehensive 211-line skill template at .claude/skills/threat-modeling/templates/threat-model-template.md which includes extensive field instructions and guidance.

## Observations
Concise template designed for rapid insertion by the security agent. Targets output destination `.agents/security/TM-NNN-[feature].md`.

## Context cost
774 bytes, approximately 190 tokens. Loads no additional files when invoked.
