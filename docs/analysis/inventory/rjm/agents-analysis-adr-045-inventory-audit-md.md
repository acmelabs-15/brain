---
package: rjm
path: .agents/analysis/adr-045-inventory-audit.md
type: agent
bytes: 26808
unit: inv-rjm-3
in_scope_via: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md
aliases: []
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .agents/analysis/adr-045-inventory-audit.md

## Purpose — required, verbatim
> "Verify the 65/25/10 (framework/domain/hybrid) classification claimed in ADR-045 through systematic file-by-file analysis." — .agents/analysis/adr-045-inventory-audit.md:7

## Design intent — required
Audits the claimed 65/25/10 (framework/domain/hybrid) classification in ADR-045 by conducting an empirical file-by-file grep analysis across 168 files (18 agent templates, 41 skills, 18 hooks, 30 workflows, 61 scripts) in `rjmurillo/ai-agents`. It discovers that the actual distribution is 55% framework, 8% domain, and 37% hybrid—crucially exceeding the 20% hybrid threshold defined in ADR-045 for triggering extraction boundary re-evaluation. It reveals that 100% of agent templates and 77% of hooks contain hard-coded `.agents/` paths that require parameterization before extraction into standalone plugins can succeed. Without this audit, the project would have attempted framework extraction based on inaccurate decoupling assumptions, underestimating the path parameterization work across 63 files and risking broken agent paths and hook enforcement failures.

## Phase — required
none

## Inputs — required
- Architectural proposals and classification claims: `ADR-045` (.agents/analysis/adr-045-inventory-audit.md:7, 24, 36)
- Repository files across 5 categories totaling 168 files: 18 agent templates, 41 skills, 18 hooks, 30 workflows, and 61 scripts (.agents/analysis/adr-045-inventory-audit.md:15-22, 558)
- Grep pattern matching queries across the codebase: `.agents/`, `ai-agents`, `templates/`, and `rjmurillo` (.agents/analysis/adr-045-inventory-audit.md:9, 559)

## Outputs — required
- Audit verdict on ADR-045 claims: "The 65/25/10 claim is **INACCURATE**." — .agents/analysis/adr-045-inventory-audit.md:11, with actual distribution of 55% framework, 8% domain, and 37% hybrid (.agents/analysis/adr-045-inventory-audit.md:25)
- Category breakdown and classification tables for 168 files (.agents/analysis/adr-045-inventory-audit.md:15-22, 56-76, 103-132, 137-153, 183-213, 241-287, 324-399)
- Prioritized catalog of files requiring path parameterization across 5 categories (.agents/analysis/adr-045-inventory-audit.md:430-553)
- Revised extraction recommendations: update ADR-045 estimates (.agents/analysis/adr-045-inventory-audit.md:576), proceed with parameterization (.agents/analysis/adr-045-inventory-audit.md:600), create automated Python parameterization script (.agents/analysis/adr-045-inventory-audit.md:602), revise timeline to 8-12 sessions (.agents/analysis/adr-045-inventory-audit.md:623), and add CI pre-extraction validation (.agents/analysis/adr-045-inventory-audit.md:633)

## Invokes — required
none

## Invoked by — required
- doc ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:48
- doc PLAN.md — .agents/projects/v0.4.0/PLAN.md:613

## Concepts named — required, verbatim
- `ADR-045` — .agents/analysis/adr-045-inventory-audit.md:1 — used here
- `Inventory Audit` — .agents/analysis/adr-045-inventory-audit.md:1 — defined here
- `Framework vs Domain Classification` — .agents/analysis/adr-045-inventory-audit.md:1 — defined here
- `INACCURATE` — .agents/analysis/adr-045-inventory-audit.md:11 — defined here
- `Framework` — .agents/analysis/adr-045-inventory-audit.md:15 — defined here
- `Domain` — .agents/analysis/adr-045-inventory-audit.md:15 — defined here
- `Hybrid` — .agents/analysis/adr-045-inventory-audit.md:15 — defined here
- `Agent Templates` — .agents/analysis/adr-045-inventory-audit.md:17 — used here
- `Skills` — .agents/analysis/adr-045-inventory-audit.md:18 — used here
- `Hooks` — .agents/analysis/adr-045-inventory-audit.md:19 — used here
- `Workflows` — .agents/analysis/adr-045-inventory-audit.md:20 — used here
- `Scripts` — .agents/analysis/adr-045-inventory-audit.md:21 — used here
- `extraction boundary` — .agents/analysis/adr-045-inventory-audit.md:38 — used here
- `re-evaluation threshold` — .agents/analysis/adr-045-inventory-audit.md:40 — defined here
- `path parameterization` — .agents/analysis/adr-045-inventory-audit.md:40 — defined here
- `AWESOME_AI_AGENTS_DIR` — .agents/analysis/adr-045-inventory-audit.md:88 — defined here
- `AWESOME_AI_SESSIONS_DIR` — .agents/analysis/adr-045-inventory-audit.md:169 — defined here
- `AWESOME_AI_ANALYSIS_DIR` — .agents/analysis/adr-045-inventory-audit.md:170 — defined here
- `Pre-Extraction Validation` — .agents/analysis/adr-045-inventory-audit.md:633 — defined here

## Structure
- ADR-045 Inventory Audit: Framework vs Domain Classification
- Executive Summary
- Summary Results
- Key Findings
- Impact on ADR-045
- Classification Criteria
- 1. Agent Templates (18 files)
- 2. Skills (41 files)
- Framework Skills (27 files)
- Hybrid Skills (14 files)
- 3. Hooks (18 files)
- Framework Hooks (3 files)
- Domain Hooks (1 file)
- Hybrid Hooks (14 files)
- 4. Workflows (30 files)
- Framework Workflows (18 files)
- Domain Workflows (6 files)
- Hybrid Workflows (6 files)
- 5. Scripts (61 files)
- Framework Scripts (44 files)
- Domain Scripts (6 files)
- Hybrid Scripts (11 files)
- Comparison: Claimed vs Actual
- Files Requiring Path Parameterization
- Priority 1: Agent Templates (18 files)
- Priority 2: Hooks (14 files)
- Priority 3: Skills (14 files)
- Priority 4: Scripts (11 files)
- Priority 5: Workflows (6 files)
- Evidence Transparency
- Data Gathered
- Data NOT Found
- Limitations
- Recommendations
- 1. Revise ADR-045 Estimates
- 2. Re-evaluate Extraction Boundary
- 3. Create Parameterization Script
- 4. Update Phase 1 Timeline
- 5. Add Pre-Extraction Validation
- Conclusion

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/analysis/adr-045-inventory-audit.md:638 · References non-existent script path `scripts/classify_inventory.py` in proposed validation command `python scripts/classify_inventory.py --repo-root . --output audit.csv`.
- internal-contradiction · .agents/analysis/adr-045-inventory-audit.md:384 · Section header claims `Hybrid Scripts (11 files)` and summary table (line 21) counts 11 hybrid scripts, but only 9 scripts are listed in the table and in Priority 4 (lines 525-540), causing the prioritized total to sum to 61 rather than the stated 63 files.

## Observations
- Empirically disproves ADR-045's claim that framework code is decoupled by demonstrating that 100% of agent templates and 77% of hooks hard-code `.agents/` directory paths.
- Establishes a concrete path parameterization pattern using environment variables (`AWESOME_AI_AGENTS_DIR`, `AWESOME_AI_SESSIONS_DIR`, `AWESOME_AI_ANALYSIS_DIR`) with sensible fallback defaults.
- Accurately identifies that the 37% hybrid distribution exceeds the 20% re-evaluation threshold defined in ADR-045, triggering an extension of Phase 1 from 4-6 sessions to 8-12 sessions.

## Context cost
26808 bytes, ~6,700 tokens. Detailed file-by-file audit of 168 repository files; referenced by ADR-045 and the v0.4.0 project plan.
