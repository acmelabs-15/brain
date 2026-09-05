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
verified: 2026-09-05 quote-check+coverage
---

# .agents/analysis/adr-045-inventory-audit.md

## Purpose — required, verbatim
> "Verify the 65/25/10 (framework/domain/hybrid) classification claimed in ADR-045 through systematic file-by-file analysis." — .agents/analysis/adr-045-inventory-audit.md:7

## Design intent — required
An empirical verification audit that evaluates the architectural classification asserted in ADR-045 (Framework Extraction via Plugin Marketplace). ADR-045 claimed a 65% framework, 25% domain, and 10% hybrid distribution across the codebase. By conducting grep-based pattern matching for project-specific references across 168 files in 5 categories (agent templates, skills, hooks, workflows, and scripts), this audit proves the claimed distribution inaccurate (actual: 55% framework, 8% domain, 37% hybrid). Because the 37% hybrid share exceeds the 20% re-evaluation threshold defined in ADR-045, this audit quantifies the required path parameterization effort across 63 files and prevents underestimating the extraction scope.

## Phase — required
none

## Inputs — required
- 168 repository files evaluated across 5 categories: 18 agent templates (`templates/agents/*.shared.md`), 41 skills, 18 hooks, 30 workflows, and 61 scripts.
- ADR-045 inventory verification criteria and re-evaluation rule:
> "If the hybrid percentage exceeds 20%, re-evaluate the extraction boundary." — .agents/analysis/adr-045-inventory-audit.md:38
- Grep pattern matching targets for repository-specific references: `ai-agents`, `rjmurillo`, `.agents/`, and `templates/`.

## Outputs — required
- Complete 168-file inventory classification table establishing empirical breakdown:
> "55% framework, 8% domain, 37% hybrid" — .agents/analysis/adr-045-inventory-audit.md:25
- Threshold evaluation verdict:
> "The 37% hybrid percentage triggers the re-evaluation threshold. Phase 1 (path parameterization) will require more effort than estimated." — .agents/analysis/adr-045-inventory-audit.md:40
- Priority-ranked backlog of 63 hybrid files requiring path parameterization (18 agent templates, 14 hooks, 14 skills, 11 scripts, 6 workflows) with environment variable substitution patterns (`${AWESOME_AI_AGENTS_DIR}`, `AWESOME_AI_SESSIONS_DIR`, `AWESOME_AI_ANALYSIS_DIR`).
- Revised Phase 1 timeline estimate (8-12 sessions, revised upward from 4-6 sessions) and recommendations for an automated parameterization script and CI classification check.

## Invokes — required
none

## Invoked by — required
- doc .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:48
- doc .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:149
- doc .agents/projects/v0.4.0/PLAN.md — .agents/projects/v0.4.0/PLAN.md:146

## Concepts named — required, verbatim
- `ADR-045` — .agents/analysis/adr-045-inventory-audit.md:1 — used here
- `Agent Templates` — .agents/analysis/adr-045-inventory-audit.md:17 — used here
- `Skills` — .agents/analysis/adr-045-inventory-audit.md:18 — used here
- `Hooks` — .agents/analysis/adr-045-inventory-audit.md:19 — used here
- `Workflows` — .agents/analysis/adr-045-inventory-audit.md:20 — used here
- `Scripts` — .agents/analysis/adr-045-inventory-audit.md:21 — used here
- `Inventory Verification` — .agents/analysis/adr-045-inventory-audit.md:36 — used here
- `Framework` — .agents/analysis/adr-045-inventory-audit.md:46 — defined here
- `Domain` — .agents/analysis/adr-045-inventory-audit.md:47 — defined here
- `Hybrid` — .agents/analysis/adr-045-inventory-audit.md:48 — defined here
- `Path Parameterization` — .agents/analysis/adr-045-inventory-audit.md:77 — used here
- `Extraction Boundary` — .agents/analysis/adr-045-inventory-audit.md:584 — used here

## Structure
- ADR-045 Inventory Audit: Framework vs Domain Classification — .agents/analysis/adr-045-inventory-audit.md:1
- Executive Summary — .agents/analysis/adr-045-inventory-audit.md:3
- Summary Results — .agents/analysis/adr-045-inventory-audit.md:13
- Key Findings — .agents/analysis/adr-045-inventory-audit.md:27
- Impact on ADR-045 — .agents/analysis/adr-045-inventory-audit.md:34
- Classification Criteria — .agents/analysis/adr-045-inventory-audit.md:42
- 1. Agent Templates (18 files) — .agents/analysis/adr-045-inventory-audit.md:50
- 2. Skills (41 files) — .agents/analysis/adr-045-inventory-audit.md:91
- Framework Skills (27 files) — .agents/analysis/adr-045-inventory-audit.md:99
- Hybrid Skills (14 files) — .agents/analysis/adr-045-inventory-audit.md:133
- 3. Hooks (18 files) — .agents/analysis/adr-045-inventory-audit.md:173
- Framework Hooks (3 files) — .agents/analysis/adr-045-inventory-audit.md:181
- Domain Hooks (1 file) — .agents/analysis/adr-045-inventory-audit.md:189
- Hybrid Hooks (14 files) — .agents/analysis/adr-045-inventory-audit.md:195
- 4. Workflows (30 files) — .agents/analysis/adr-045-inventory-audit.md:229
- Framework Workflows (18 files) — .agents/analysis/adr-045-inventory-audit.md:237
- Domain Workflows (6 files) — .agents/analysis/adr-045-inventory-audit.md:262
- Hybrid Workflows (6 files) — .agents/analysis/adr-045-inventory-audit.md:275
- 5. Scripts (61 files) — .agents/analysis/adr-045-inventory-audit.md:312
- Framework Scripts (44 files) — .agents/analysis/adr-045-inventory-audit.md:320
- Domain Scripts (6 files) — .agents/analysis/adr-045-inventory-audit.md:371
- Hybrid Scripts (11 files) — .agents/analysis/adr-045-inventory-audit.md:384
- Comparison: Claimed vs Actual — .agents/analysis/adr-045-inventory-audit.md:414
- Files Requiring Path Parameterization — .agents/analysis/adr-045-inventory-audit.md:430
- Priority 1: Agent Templates (18 files) — .agents/analysis/adr-045-inventory-audit.md:434
- Priority 2: Hooks (14 files) — .agents/analysis/adr-045-inventory-audit.md:467
- Priority 3: Skills (14 files) — .agents/analysis/adr-045-inventory-audit.md:496
- Priority 4: Scripts (11 files) — .agents/analysis/adr-045-inventory-audit.md:525
- Priority 5: Workflows (6 files) — .agents/analysis/adr-045-inventory-audit.md:541
- Evidence Transparency — .agents/analysis/adr-045-inventory-audit.md:554
- Data Gathered — .agents/analysis/adr-045-inventory-audit.md:556
- Data NOT Found — .agents/analysis/adr-045-inventory-audit.md:562
- Limitations — .agents/analysis/adr-045-inventory-audit.md:568
- Recommendations — .agents/analysis/adr-045-inventory-audit.md:574
- 1. Revise ADR-045 Estimates — .agents/analysis/adr-045-inventory-audit.md:576
- 2. Re-evaluate Extraction Boundary — .agents/analysis/adr-045-inventory-audit.md:584
- 3. Create Parameterization Script — .agents/analysis/adr-045-inventory-audit.md:602
- 4. Update Phase 1 Timeline — .agents/analysis/adr-045-inventory-audit.md:620
- 5. Add Pre-Extraction Validation — .agents/analysis/adr-045-inventory-audit.md:633
- Conclusion — .agents/analysis/adr-045-inventory-audit.md:643

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` — `scripts/classify_inventory.py` referenced at .agents/analysis/adr-045-inventory-audit.md:638 does not exist in the repository (proposed as a pre-extraction CI validation tool, but never created).
- `internal-contradiction` — Section 5 counts 11 hybrid scripts in the summary table (.agents/analysis/adr-045-inventory-audit.md:384), but Priority 4 lists only 9 script files (.agents/analysis/adr-045-inventory-audit.md:529), omitting 2 hybrid scripts from the priority itemization.

## Observations
- Key architectural discovery: "Agent templates are 100% hybrid" — .agents/analysis/adr-045-inventory-audit.md:29.
- Rigorous empirical methodology: directly challenged and disproved ADR-045's original 65/25/10 assertion by measuring the actual 55/8/37 distribution across 168 tracked files.
- Establishes environment variable substitution pattern (`${AWESOME_AI_AGENTS_DIR}`) to decouple reusable framework definitions from consumer directory structures.

## Context cost
26808 bytes, ~6700 tokens. Standalone audit report; references ADR-045 and 168 repository files.
