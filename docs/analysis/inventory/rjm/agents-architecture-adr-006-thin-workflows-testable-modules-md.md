---
package: rjm
path: .agents/architecture/ADR-006-thin-workflows-testable-modules.md
type: agent
bytes: 25942
unit: inv-rjm-5
deprecated: false
in_scope_via: inv-rjm-5
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-006-thin-workflows-testable-modules.md, sha256: 8b38180fac81c6d21839493e087f4d289e127ccd05f36b776bf3f2c82dd13da8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-006-thin-workflows-testable-modules.md

## Purpose — required, verbatim
> "GitHub Actions workflows cannot be tested locally. The feedback loop is:" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:24 (no explicit purpose statement)

## Design intent — required
Establishes the architectural requirement that GitHub Actions workflow files must serve strictly as thin orchestrators (capped at 100 lines), while all parsing, validation, and business logic is extracted into testable modules covered by comprehensive unit tests (≥80% coverage). Solves the slow feedback loop (1–5 minutes per CI run vs. ~2 seconds for local tests) and eliminates untestable, duplicated logic in workflow YAML run: blocks. The 2026-04-28 amendment extends this architecture to build pipelines, permitting pure-data configuration YAML (e.g. for Copilot CLI platform mappings) only when seven rigorous conditions are met (schema-validated, ≥80% coverage on consuming modules, path-traversal hardened, safe YAML deserialization, regex length and complexity limits). The 2026-04-29 Round 3 amendment further simplifies rules generation by removing the rules severity gate.

## Phase — required
cross-phase

## Inputs — required
PR #60 AI workflow implementation (lines 17, 111, 243), PR #60 Remediation Plan (line 18), ADR-005 PowerShell-Only Scripting (lines 18, 235), REQ-003 Multi-Tool Artifact Build System (lines 271, 423), PIR PR #1773 plugin manifest schema regression (lines 272, 320, 425), and existing platform templates templates/platforms/{copilot-cli,visual-studio,vscode}.yaml (lines 283, 360, 426).

## Outputs — required
Workflow sizing constraint (<100 lines for orchestration, lines 137, 222), module test coverage requirement (≥80% line coverage for business logic, lines 153, 226, 300), validation checklist (lines 218-230), migration strategy (lines 250-258), and the seven-condition config-data exception for build pipelines (lines 297-306, 331-356).

## Invokes — required
- agent ADR-005 — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:235
- skill github — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:237
- script validate_templates_schema.py — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:301
- script generate_rules.py — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:441

## Invoked by — required
- agent ADR-005 — .agents/architecture/ADR-005-powershell-only-scripting.md:228
- agent ADR-042 — .agents/architecture/ADR-042-python-migration-strategy.md:153
- template README.md — templates/README.md:314
- doc WORKFLOW-VALIDATION.md — docs/WORKFLOW-VALIDATION.md:229
- doc codeql-architecture.md — docs/codeql-architecture.md:699

## Concepts named — required, verbatim
- `ADR-006` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:2 — defined here
- `Thin Workflows, Testable Modules` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:12 — defined here
- `slow OODA loop` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:32 — defined here
- `Pester` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:40 — used here
- `DRY Principle` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:43 — used here
- `ADR-005` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:18 — used here
- `pattern-thin-workflows` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:236 — used here
- `REQ-003` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:271 — used here
- `Config-Data Exception for Build Pipelines` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:266 — defined here
- `safe_load` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:301 — used here
- `CWE-22` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:329 — used here
- `CWE-502` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:329 — used here
- `CWE-1333` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:329 — used here
- `Chesterton's Fence` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:329 — used here

## Structure
- # ADR-006: Thin Workflows, Testable Modules — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:12
- ## Context and Problem Statement — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:22
- ## Decision Drivers — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:38
- ## Considered Options — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:49
- ### Option 1: Thin Workflows, Testable Modules (CHOSEN) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:51
- ### Option 2: All Logic in Workflows — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:75
- ### Option 3: Hybrid (Simple Logic in Workflows) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:90
- ## Decision Outcome — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:105
- ### Rationale — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:109
- ### Implementation Rules — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:121
- #### Workflows (YAML) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:123
- #### Modules (.psm1) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:139
- #### Example Pattern — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:155
- ## Consequences — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:190
- ### Positive — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:192
- ### Negative — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:201
- ### Neutral — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:210
- ## Validation Checklist — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:218
- ## Related Decisions — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:233
- ## References — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:241
- ## Migration Strategy — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:250
- ## Amendment 2026-04-28: Config-Data Exception for Build Pipelines — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:266
- ### Anchor: original rationale (verbatim, lines 13-21) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:275
- ### Context — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:281
- ### Decision — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:295
- ### Negative test case (loophole closure) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:307
- ### Rationale — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:318
- ### Implementation rules (additions to ADR-006) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:331
- ### Grandfathering and migration (Round 2) — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:358
- ### Reversibility Assessment — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:377
- ### Confirmation Method — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:385
- ### Consequences — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:396
- ### Out of scope — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:411
- ### References — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:421
- ## Round 3 amendment-of-amendment (2026-04-29): rules severity gate removed — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:429

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-006-thin-workflows-testable-modules.md:115 Referenced PowerShell module ".github/scripts/AIReviewCommon.psm1" does not exist in repository.
- missing-path · .agents/architecture/ADR-006-thin-workflows-testable-modules.md:245 Referenced Pester test file ".github/scripts/AIReviewCommon.Tests.ps1" does not exist in repository.
- missing-path · .agents/architecture/ADR-006-thin-workflows-testable-modules.md:246 Referenced session log ".agents/sessions/2025-12-18-session-15-pr-60-response.md" does not exist in repository.
- missing-path · .agents/architecture/ADR-006-thin-workflows-testable-modules.md:370 Referenced documentation "templates/platforms/README.md" does not exist in repository.
- missing-path · .agents/architecture/ADR-006-thin-workflows-testable-modules.md:392 Referenced script "build/scripts/validate_yaml_locations.py" does not exist in repository.
- internal-contradiction · .agents/architecture/ADR-006-thin-workflows-testable-modules.md:227 Validation checklist references "uv run pytest tests/" despite the preceding rules and checklist items specifying PowerShell (.psm1) modules and Pester (.Tests.ps1) tests.

## Observations
Comprehensive architectural decision record demonstrating the evolution of the repository from PowerShell-only workflows to Python-based build-pipeline automation. Contains two major amendments: the 2026-04-28 amendment establishing a seven-condition Chesterton's Fence rule allowing pure-data YAML in build pipelines (motivated by REQ-003 multi-tool build and the PIR PR #1773 manifest schema regression), and the 2026-04-29 Round 3 amendment simplifying rules emission by removing the rules severity gate.

## Context cost
25,942 bytes, ~6,485 tokens.
