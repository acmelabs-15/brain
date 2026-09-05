---
package: rjm
path: .agents/analysis/adr-045-inventory-audit.md
type: agent
bytes: 26808
unit: inv-rjm-3
deprecated: false
in_scope_via: inv-rjm-3
aliases: []
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/analysis/adr-045-inventory-audit.md

## Purpose — required, verbatim
> "Verify the 65/25/10 (framework/domain/hybrid) classification claimed in ADR-045 through systematic file-by-file analysis." — .agents/analysis/adr-045-inventory-audit.md:7

## Design intent — required
Audits 168 files across agent templates, skills, hooks, workflows, and scripts in the repository to rigorously test the framework/domain/hybrid distribution claimed in ADR-045. It determines that the claimed 65/25/10 ratio is inaccurate (actual: 55% framework, 8% domain, 37% hybrid), primarily because hardcoded `.agents/` directory coupling renders 100% of agent templates and 77% of hooks hybrid. Because the 37% hybrid rate exceeds ADR-045's 20% re-evaluation threshold, it mandates environment-variable path parameterization across 63 files before framework extraction can proceed.

## Phase — required
none

## Inputs — required
- Architectural claim in ADR-045 Section "Inventory Verification" asserting a 65% framework, 25% domain, and 10% hybrid file distribution
- 168 repository files across 5 categories: 18 agent templates (`templates/agents/`), 41 skills (`.claude/skills/`), 18 hooks (`.claude/hooks/`), 30 workflows (`.github/workflows/`), and 61 scripts (`scripts/`)
- Pattern matches for project-specific strings: `ai-agents`, `rjmurillo`, `.agents/`, and `templates/`

## Outputs — required
- Empirical distribution metrics: 55% framework (92 files), 8% domain (13 files), 37% hybrid (63 files)
- Categorized inventory tables listing match counts and classifications for all 168 files
- Recommendations: revise ADR-045 estimates, proceed with path parameterization across 63 files, implement automated path substitution script, update Phase 1 timeline to 8–12 sessions, and add pre-extraction CI validation

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-045` — .agents/analysis/adr-045-inventory-audit.md:7 — used here
- `Agent Templates` — .agents/analysis/adr-045-inventory-audit.md:17 — used here
- `Skills` — .agents/analysis/adr-045-inventory-audit.md:18 — used here
- `Hooks` — .agents/analysis/adr-045-inventory-audit.md:19 — used here
- `Workflows` — .agents/analysis/adr-045-inventory-audit.md:20 — used here
- `Scripts` — .agents/analysis/adr-045-inventory-audit.md:21 — used here
- `Inventory Verification` — .agents/analysis/adr-045-inventory-audit.md:36 — used here
- `extraction boundary` — .agents/analysis/adr-045-inventory-audit.md:38 — used here
- `path parameterization` — .agents/analysis/adr-045-inventory-audit.md:40 — used here
- `Framework` — .agents/analysis/adr-045-inventory-audit.md:46 — defined here
- `Domain` — .agents/analysis/adr-045-inventory-audit.md:47 — defined here
- `Hybrid` — .agents/analysis/adr-045-inventory-audit.md:48 — defined here

## Structure
- `## Executive Summary`
- `## Summary Results`
- `### Key Findings`
- `### Impact on ADR-045`
- `## Classification Criteria`
- `## 1. Agent Templates (18 files)`
- `## 2. Skills (41 files)`
- `### Framework Skills (27 files)`
- `### Hybrid Skills (14 files)`
- `## 3. Hooks (18 files)`
- `### Framework Hooks (3 files)`
- `### Domain Hooks (1 file)`
- `### Hybrid Hooks (14 files)`
- `## 4. Workflows (30 files)`
- `### Framework Workflows (18 files)`
- `### Domain Workflows (6 files)`
- `### Hybrid Workflows (6 files)`
- `## 5. Scripts (61 files)`
- `### Framework Scripts (44 files)`
- `### Domain Scripts (6 files)`
- `### Hybrid Scripts (11 files)`
- `## Comparison: Claimed vs Actual`
- `## Files Requiring Path Parameterization`
- `### Priority 1: Agent Templates (18 files)`
- `### Priority 2: Hooks (14 files)`
- `### Priority 3: Skills (14 files)`
- `### Priority 4: Scripts (11 files)`
- `### Priority 5: Workflows (6 files)`
- `## Evidence Transparency`
- `### Data Gathered`
- `### Data NOT Found`
- `### Limitations`
- `## Recommendations`
- `### 1. Revise ADR-045 Estimates`
- `### 2. Re-evaluate Extraction Boundary`
- `### 3. Create Parameterization Script`
- `### 4. Update Phase 1 Timeline`
- `### 5. Add Pre-Extraction Validation`
- `## Conclusion`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/analysis/adr-045-inventory-audit.md:638 · References `scripts/classify_inventory.py`, which does not exist on disk in the repository.
- `orphan` · .agents/analysis/adr-045-inventory-audit.md:1 · Nothing in scope invokes or references this analysis document.

## Observations
- The audit demonstrates how hardcoded directory conventions (`.agents/`) create architectural gravity that impedes modular extraction even when agent/hook logic is otherwise generic.
- Recommends environment-variable parameterization (e.g. `${AWESOME_AI_AGENTS_DIR}`, `AWESOME_AI_SESSIONS_DIR`, `AWESOME_AI_ANALYSIS_DIR`) as the standard portability layer.

## Context cost
26808 bytes (~6702 tokens). Self-contained analysis document with no external inclusions or runtime dependencies.
