---
package: rjm
path: .agents/architecture/ADR-052-template-strategy.md
type: agent
bytes: 21564
unit: inv-rjm-19
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-052-template-strategy.md

## Purpose — required, verbatim
> "ADR-052 replaces the template-first Copilot/VS Code generation model with a Claude-first one that formalizes Claude's existing canonical role." — .agents/architecture/ADR-052-template-strategy.md:36

## Design intent — required
Architectural decision record establishing Option B (Claude-First) as the target multi-platform agent distribution architecture across Claude Code, VS Code, and Copilot CLI. It addresses the maintenance cost and schema divergence in the historical three-layer system (shared templates in `templates/agents/`, authoritative hand-maintained Claude agents in `src/claude/`, and generated derived agents in `src/vs-code-agents/` and `src/copilot-cli/`). By formalizing Claude Code agents as canonical and transforming them directly into derived variants, it eliminates the redundant intermediate template layer while preserving synchronization across derived outputs.

## Phase — required
none

## Inputs — required
- Canonical Claude Code agent definitions in `src/claude/`
- Prior decision ADR-036 (Two-Source Agent Template Architecture)
- Drift analysis reports (`.agents/analysis/drift-analysis-claude-vs-templates.md`, `.agents/analysis/template-strategy-debate.md`, `.agents/retrospective/2025-12-15-accountability-analysis.md`)
- Six-agent debate log `.agents/critique/ADR-052-debate-log.md`
- Tracking issues #124, #5192, and #5282, and autonomous review feedback from PR #5291

## Outputs — required
- Decision to adopt Option B (Claude-First) architecture and supersede ADR-036
- Specification for `build/scripts/generate_platform_agents.py` (extracting shared prompt bodies and applying platform frontmatter)
- Migration plan to retire `templates/agents/`, update `build/generate_agents.py`, migrate `build/generate_agent_catalog.py`, and introduce `platform-overrides/`
- Drift detection configuration for `build/scripts/detect_agent_drift.py`

## Invokes — required
- agent ADR-036 — .agents/architecture/ADR-052-template-strategy.md:6
- script build/generate_agents.py — .agents/architecture/ADR-052-template-strategy.md:18
- doc build/AGENTS.md — .agents/architecture/ADR-052-template-strategy.md:46
- script build/scripts/detect_agent_drift.py — .agents/architecture/ADR-052-template-strategy.md:48
- script build/generate_agent_catalog.py — .agents/architecture/ADR-052-template-strategy.md:65
- file docs/agent-catalog.md — .agents/architecture/ADR-052-template-strategy.md:65
- script build/scripts/build_all.py — .agents/architecture/ADR-052-template-strategy.md:65
- script scripts/validation/validate_agent_catalog.py — .agents/architecture/ADR-052-template-strategy.md:145
- script scripts/validation/checks_spec.py — .agents/architecture/ADR-052-template-strategy.md:145
- config lefthook.yml — .agents/architecture/ADR-052-template-strategy.md:148
- script scripts/validation/check_skill_md_portability.py — .agents/architecture/ADR-052-template-strategy.md:148
- agent ADR-042 — .agents/architecture/ADR-052-template-strategy.md:189
- agent ADR-044 — .agents/architecture/ADR-052-template-strategy.md:190

## Invoked by — required
- doc README.md — .agents/architecture/README.md:126

## Concepts named — required, verbatim
- `adr-review` — .agents/architecture/ADR-052-template-strategy.md:16 — used here
- `Migration Plan` — .agents/architecture/ADR-052-template-strategy.md:18 — defined here
- `Intentional Divergence` — .agents/architecture/ADR-052-template-strategy.md:20 — used here
- `Two-Source Agent Template Architecture` — .agents/architecture/ADR-052-template-strategy.md:34 — used here
- `drift detection` — .agents/architecture/ADR-052-template-strategy.md:48 — used here
- `Jaccard similarity` — .agents/architecture/ADR-052-template-strategy.md:48 — used here
- `Option B: Claude-First` — .agents/architecture/ADR-052-template-strategy.md:79 — defined here
- `Option A: Template-First` — .agents/architecture/ADR-052-template-strategy.md:83 — used here
- `Option C: Independent Platforms` — .agents/architecture/ADR-052-template-strategy.md:99 — used here
- `CatalogError` — .agents/architecture/ADR-052-template-strategy.md:144 — used here
- `platform-overrides` — .agents/architecture/ADR-052-template-strategy.md:18 — defined here

## Structure
- "ADR-052: Template Strategy for Multi-Platform Agent Distribution" — .agents/architecture/ADR-052-template-strategy.md:12
- "Status" — .agents/architecture/ADR-052-template-strategy.md:14
- "Author" — .agents/architecture/ADR-052-template-strategy.md:24
- "Date" — .agents/architecture/ADR-052-template-strategy.md:28
- "Prior Art" — .agents/architecture/ADR-052-template-strategy.md:32
- "Context" — .agents/architecture/ADR-052-template-strategy.md:38
- "Evidence of Failure" — .agents/architecture/ADR-052-template-strategy.md:50
- "Platform Differences" — .agents/architecture/ADR-052-template-strategy.md:67
- "Decision" — .agents/architecture/ADR-052-template-strategy.md:77
- "Options Evaluated" — .agents/architecture/ADR-052-template-strategy.md:81
- "Option A: Template-First (Current)" — .agents/architecture/ADR-052-template-strategy.md:83
- "Option B: Claude-First (Selected)" — .agents/architecture/ADR-052-template-strategy.md:91
- "Option C: Independent Platforms" — .agents/architecture/ADR-052-template-strategy.md:99
- "Rationale" — .agents/architecture/ADR-052-template-strategy.md:107
- "Consequences" — .agents/architecture/ADR-052-template-strategy.md:114
- "Positive" — .agents/architecture/ADR-052-template-strategy.md:116
- "Negative" — .agents/architecture/ADR-052-template-strategy.md:123
- "Migration Plan" — .agents/architecture/ADR-052-template-strategy.md:128
- "Phase 1: Script Creation" — .agents/architecture/ADR-052-template-strategy.md:130
- "Phase 2: Template Removal" — .agents/architecture/ADR-052-template-strategy.md:140
- "Phase 3: Override Mechanism" — .agents/architecture/ADR-052-template-strategy.md:153
- "Confirmation" — .agents/architecture/ADR-052-template-strategy.md:159
- "Implementation Status" — .agents/architecture/ADR-052-template-strategy.md:167
- "Security Considerations" — .agents/architecture/ADR-052-template-strategy.md:175
- "References" — .agents/architecture/ADR-052-template-strategy.md:179

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-052-template-strategy.md:148 · references check_agent_skill_discriminator.py without its directory path (actual file is scripts/validation/check_agent_skill_discriminator.py).
- internal-contradiction · .agents/architecture/ADR-052-template-strategy.md:30 · frontmatter date states 2026-08-25 while the Date section states 2026-03-01 without inline reconciliation (the frontmatter date reflects the accepted target state amendment).

## Observations
- ADR-052 represents an accepted target state that was initially rejected by a separate autonomous session in PR #5291 before repository owner confirmation (Status lines 18 and 22).
- Downstream generators like build/generate_agent_catalog.py expect top-level frontmatter keys rather than nested metadata, meaning retiring templates requires frontmatter compatibility adjustments.

## Context cost
21564 bytes, ~4800 tokens. Loads no external files.
