---
package: rjm
path: .agents/architecture/ADR-006-thin-workflows-testable-modules.md
type: agent
bytes: 25942
unit: inv-rjm-5
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-006-thin-workflows-testable-modules.md, sha256: 8b38180fac81c6d21839493e087f4d289e127ccd05f36b776bf3f2c82dd13da8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-006-thin-workflows-testable-modules.md

## Purpose — required, verbatim
> "GitHub Actions workflows cannot be tested locally. The feedback loop is:" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:24 (no explicit purpose statement)

## Design intent — required
Establishes the architectural standard of thin GitHub Actions workflows and testable modules to eliminate the slow CI feedback loop (1-5 minutes per push-wait cycle) caused by untestable embedded logic in workflow YAML run blocks. Workflows are restricted to orchestration under a 100-line ceiling, while business logic resides in modules tested locally with ≥80% coverage in seconds. The ADR's 2026-04-28 amendment formalizes a config-data exception for build pipelines, allowing pure-data YAML under seven strict conditions (no control flow, schema-validated CI gate, path-traversal safety, safe deserialization, and pattern hardening).

## Phase — required
none

## Inputs — required
- "AI workflow implementation" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:17
- "PR #60 Remediation Plan" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:18
- "ADR-005: PowerShell-Only Scripting" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:235
- "REQ-003 Multi-Tool Artifact Build System" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:271
- "PIR PR #1773 plugin manifest schema regression" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:272

## Outputs — required
- "Option 1 - Thin Workflows, Testable Modules" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:107
- "100 lines (orchestration only)" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:137
- "80% for all exported functions" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:153
- "Config-Data Exception for Build Pipelines" — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:266

## Invokes — required
- doc ADR-005-powershell-only-scripting.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:18
- doc 002-pr-60-remediation-plan.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:18
- doc REQ-003-multi-tool-artifact-build.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:271
- doc 2026-04-27-pir-plugin-manifest-schema-1773.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:272
- config copilot-cli.yaml — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:283
- doc req-003-multi-tool-artifact-build.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:424

## Invoked by — required
- doc ADR-005-powershell-only-scripting.md — .agents/architecture/ADR-005-powershell-only-scripting.md:228

## Concepts named — required, verbatim
`ADR-006` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:2, 12 — defined here
`ADR-005` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:18, 235 — used here
`OODA loop` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:32, 65, 84, 100, 277 — used here
`DRY Principle` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:43 — used here
`Option 1: Thin Workflows, Testable Modules` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:51 — defined here
`Pester` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:40, 61, 65 — used here
`AIReviewCommon.psm1` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:115, 179, 244 — used here
`pattern-thin-workflows` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:236 — used here
`REQ-003` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:271, 283, 301 — used here
`copilot-cli.yaml` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:283, 360, 371 — used here
`validate_templates_schema.py` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:301, 339, 356 — used here
`Chesterton's Fence` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:329 — used here

## Structure
- `## Context and Problem Statement` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:22
- `## Decision Drivers` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:38
- `## Considered Options` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:49
- `### Option 1: Thin Workflows, Testable Modules (CHOSEN)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:51
- `### Option 2: All Logic in Workflows` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:75
- `### Option 3: Hybrid (Simple Logic in Workflows)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:90
- `## Decision Outcome` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:105
- `### Rationale` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:109
- `### Implementation Rules` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:121
- `#### Workflows (YAML)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:123
- `#### Modules (.psm1)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:139
- `#### Example Pattern` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:155
- `## Consequences` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:190
- `### Positive` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:192
- `### Negative` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:201
- `### Neutral` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:210
- `## Validation Checklist` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:218
- `## Related Decisions` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:233
- `## References` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:241
- `## Migration Strategy` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:250
- `## Amendment 2026-04-28: Config-Data Exception for Build Pipelines` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:266
- `### Anchor: original rationale (verbatim, lines 13-21)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:275
- `### Context` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:281
- `### Decision` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:295
- `### Negative test case (loophole closure)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:307
- `### Rationale` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:318
- `### Implementation rules (additions to ADR-006)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:331
- `### Grandfathering and migration (Round 2)` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:358
- `### Reversibility Assessment` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:377
- `### Confirmation Method` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:385
- `### Consequences` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:396
- `### Out of scope` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:411
- `### References` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:421
- `## Round 3 amendment-of-amendment (2026-04-29): rules severity gate removed` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:429

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `AIReviewCommon.psm1` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:244 — referenced file `.github/scripts/AIReviewCommon.psm1` does not exist on disk in current repository state.
- missing-path: `AIReviewCommon.Tests.ps1` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:245 — referenced file `.github/scripts/AIReviewCommon.Tests.ps1` does not exist on disk in current repository state.
- missing-path: `Session log` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:246 — referenced session log `.agents/sessions/2025-12-18-session-15-pr-60-response.md` does not exist on disk.
- internal-contradiction: `uv run pytest tests/` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:227 — validation checklist specifies pytest command while the body and module rules mandate PowerShell `.psm1` modules and Pester tests.
- doc-drift: `lines 13-21` — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:275 — anchor header cites lines 13-21 for original rationale quote, but the quoted text actually appears at lines 24-32.

## Observations
Highlights the critical architectural separation between CI workflow orchestration and testable module business logic, achieving a 90x faster local test feedback loop (2 seconds locally vs 3 minutes in CI). The amendment provides an exemplary governance framework for config-data exceptions, applying 7 security conditions and Chesterton's Fence principles to permit build-pipeline declarative YAML without re-introducing untestable logic. Round 3 subsequently simplified rules handling by removing speculative severity gating.

## Context cost
25942 bytes, approximately 6200 tokens. Loading referenced companion ADR-005 (9895 bytes) and copilot-cli.yaml (4586 bytes) totals ~40.4 KB (~9800 tokens).
