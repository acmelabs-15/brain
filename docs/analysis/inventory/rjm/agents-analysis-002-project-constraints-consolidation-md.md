---
package: rjm
path: .agents/analysis/002-project-constraints-consolidation.md
type: agent
bytes: 34898
unit: inv-rjm-2
deprecated: false
in_scope_via: inv-rjm-2
aliases: []
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/analysis/002-project-constraints-consolidation.md

## Purpose — required, verbatim
> "Consolidating scattered project constraints into a single, authoritative document would reduce agent violations by providing a clear, verifiable checkpoint in the session protocol. This analysis evaluates whether consolidation addresses the root cause of constraint violations seen in Session 15." — .agents/analysis/002-project-constraints-consolidation.md:5

## Design intent — required
Evaluate whether consolidating scattered project constraints (across ADRs, memories, styleguides, and protocols) into a single authoritative index reference backed by verification-based gates addresses repeated agent violations. Without this analysis, the system would continue relying on ineffective trust-based compliance, incurring recurring user interventions and rework when agents violate language rules, script formats, tool preferences, and commit boundaries.

## Phase — required
none

## Inputs — required
- Session 15 retrospective (`.serena/memories/retrospective-2025-12-18-session-15-pr-60.md` and `.agents/retrospective/2025-12-18-session-15-retrospective.md`)
- Architecture decision records (`ADR-005-powershell-only-scripting.md`, `ADR-006-thin-workflows-testable-modules.md`, `ADR-001-markdown-linting.md`)
- Serena memories (`skill-usage-mandatory.md`, `user-preference-no-bash-python.md`, `task-completion-checklist.md`, `code-style-conventions.md`)
- Governance protocols (`SESSION-PROTOCOL.md`, `naming-conventions.md`, `consistency-protocol.md`)
- Code standards (`.gemini/styleguide.md`)
- Web research on Single Source of Truth (SSOT), DRY principle, and documentation drift prevention

## Outputs — required
- Proposed structure and initial draft for `.agents/governance/PROJECT-CONSTRAINTS.md` (lines 576-785)
- Proposal for Phase 1.5 Constraint Validation gate in `SESSION-PROTOCOL.md` (lines 383-395)
- Recommendations for automated enforcement tooling: `Check-SkillExists.ps1` and commit-msg hook (lines 516-527)
- Recommendation verdict: Option 5 (Hybrid approach combining index-style reference with automated validation tooling and blocking protocol gates)

## Invokes — required
none

## Invoked by — required
- doc PROJECT-CONSTRAINTS.md — .agents/governance/PROJECT-CONSTRAINTS.md:266

## Concepts named — required, verbatim
- `PROJECT-CONSTRAINTS.md` — .agents/analysis/002-project-constraints-consolidation.md:1 — defined here
- `Value Statement` — .agents/analysis/002-project-constraints-consolidation.md:3 — defined here
- `Business Objectives` — .agents/analysis/002-project-constraints-consolidation.md:7 — defined here
- `session protocol` — .agents/analysis/002-project-constraints-consolidation.md:5 — used here
- `BLOCKING gate` — .agents/analysis/002-project-constraints-consolidation.md:25 — used here
- `Trust-based compliance` — .agents/analysis/002-project-constraints-consolidation.md:36 — used here
- `Verification-based compliance` — .agents/analysis/002-project-constraints-consolidation.md:92 — used here
- `Single Source of Truth` — .agents/analysis/002-project-constraints-consolidation.md:118 — used here
- `SSOT` — .agents/analysis/002-project-constraints-consolidation.md:48 — used here
- `DRY principle` — .agents/analysis/002-project-constraints-consolidation.md:131 — used here
- `Documentation drift` — .agents/analysis/002-project-constraints-consolidation.md:127 — used here
- `Check-SkillExists.ps1` — .agents/analysis/002-project-constraints-consolidation.md:253 — defined here
- `commit-msg hook` — .agents/analysis/002-project-constraints-consolidation.md:254 — defined here
- `MUST Constraints` — .agents/analysis/002-project-constraints-consolidation.md:292 — defined here
- `SHOULD Constraints` — .agents/analysis/002-project-constraints-consolidation.md:306 — defined here
- `MAY Constraints` — .agents/analysis/002-project-constraints-consolidation.md:725 — defined here
- `Phase 1.5` — .agents/analysis/002-project-constraints-consolidation.md:384 — defined here
- `Constraint Validation Checklist` — .agents/analysis/002-project-constraints-consolidation.md:755 — defined here
- `Analyst Agent` — .agents/analysis/002-project-constraints-consolidation.md:853 — used here

## Structure
- `# Analysis: PROJECT-CONSTRAINTS.md Consolidation` — .agents/analysis/002-project-constraints-consolidation.md:1
- `## Value Statement` — .agents/analysis/002-project-constraints-consolidation.md:3
- `## Business Objectives` — .agents/analysis/002-project-constraints-consolidation.md:7
- `## Context` — .agents/analysis/002-project-constraints-consolidation.md:14
- `### Problem Statement` — .agents/analysis/002-project-constraints-consolidation.md:16
- `### Session 15 Evidence` — .agents/analysis/002-project-constraints-consolidation.md:27
- `## Methodology` — .agents/analysis/002-project-constraints-consolidation.md:41
- `### Data Collection` — .agents/analysis/002-project-constraints-consolidation.md:43
- `### Research Tools Used` — .agents/analysis/002-project-constraints-consolidation.md:51
- `## Findings` — .agents/analysis/002-project-constraints-consolidation.md:58
- `### Facts (Verified)` — .agents/analysis/002-project-constraints-consolidation.md:60
- `#### Finding 1: Constraints Are Scattered Across 12+ Locations` — .agents/analysis/002-project-constraints-consolidation.md:62
- `#### Finding 2: Enforcement Gap Between Documentation and Compliance` — .agents/analysis/002-project-constraints-consolidation.md:83
- `#### Finding 3: Constraint Categories Map to Workflow Phases` — .agents/analysis/002-project-constraints-consolidation.md:101
- `#### Finding 4: Industry Best Practices Support Consolidation with Caveats` — .agents/analysis/002-project-constraints-consolidation.md:116
- `#### Finding 5: ADRs Are Canonical Sources, Not Derived Documents` — .agents/analysis/002-project-constraints-consolidation.md:139
- `#### Finding 6: Session 15 Proposed PROJECT-CONSTRAINTS.md as P0 Action` — .agents/analysis/002-project-constraints-consolidation.md:155
- `#### Finding 7: Verification-Based Gates More Effective Than Documentation` — .agents/analysis/002-project-constraints-consolidation.md:173
- `### Hypotheses (Unverified)` — .agents/analysis/002-project-constraints-consolidation.md:196
- `#### Hypothesis 1: Consolidation Without Gates Won't Prevent Violations` — .agents/analysis/002-project-constraints-consolidation.md:198
- `#### Hypothesis 2: Index-Style Doc More Maintainable Than Duplication` — .agents/analysis/002-project-constraints-consolidation.md:208
- `## Language Constraints` — .agents/analysis/002-project-constraints-consolidation.md:213
- `#### Hypothesis 3: Tiered Constraint Structure Improves Discoverability` — .agents/analysis/002-project-constraints-consolidation.md:231
- `#### Hypothesis 4: Automated Constraint Validation Reduces Violations` — .agents/analysis/002-project-constraints-consolidation.md:248
- `## Consolidation Options Analysis` — .agents/analysis/002-project-constraints-consolidation.md:261
- `### Option 1: Full Consolidation (Single File, All Constraints)` — .agents/analysis/002-project-constraints-consolidation.md:263
- `### Option 2: Index-Style Reference (RECOMMENDED)` — .agents/analysis/002-project-constraints-consolidation.md:281
- `# Project Constraints` — .agents/analysis/002-project-constraints-consolidation.md:288
- `## MUST Constraints (Blocking)` — .agents/analysis/002-project-constraints-consolidation.md:292
- `### Language: PowerShell Only` — .agents/analysis/002-project-constraints-consolidation.md:294
- `### GitHub Operations: Use Skills, Not Raw Commands` — .agents/analysis/002-project-constraints-consolidation.md:300
- `## SHOULD Constraints (Strong Recommendations)` — .agents/analysis/002-project-constraints-consolidation.md:306
- `### Commit Discipline: Atomic Commits` — .agents/analysis/002-project-constraints-consolidation.md:308
- `### Option 3: Enhanced CONTRIBUTING.md` — .agents/analysis/002-project-constraints-consolidation.md:332
- `### Option 4: Status Quo + Improved Discoverability` — .agents/analysis/002-project-constraints-consolidation.md:349
- `### Option 5: Hybrid (Index + Automated Checks)` — .agents/analysis/002-project-constraints-consolidation.md:370
- `### Phase 1.5: Constraint Validation (BLOCKING)` — .agents/analysis/002-project-constraints-consolidation.md:384
- `## Risk Analysis` — .agents/analysis/002-project-constraints-consolidation.md:413
- `### Risk 1: Documentation Drift` — .agents/analysis/002-project-constraints-consolidation.md:415
- `### Risk 2: Over-Engineering` — .agents/analysis/002-project-constraints-consolidation.md:429
- `### Risk 3: Agent Ignores New File` — .agents/analysis/002-project-constraints-consolidation.md:442
- `### Risk 4: Constraint Proliferation` — .agents/analysis/002-project-constraints-consolidation.md:455
- `### Risk 5: False Sense of Security` — .agents/analysis/002-project-constraints-consolidation.md:469
- `## Recommendations` — .agents/analysis/002-project-constraints-consolidation.md:483
- `### Primary Recommendation: Implement Option 5 (Hybrid Approach)` — .agents/analysis/002-project-constraints-consolidation.md:485
- `#### Phase A: Create Index (Week 1)` — .agents/analysis/002-project-constraints-consolidation.md:491
- `#### Phase B: Add Verification Gate (Week 1)` — .agents/analysis/002-project-constraints-consolidation.md:504
- `#### Phase C: Implement Automation (Week 2)` — .agents/analysis/002-project-constraints-consolidation.md:514
- `#### Phase D: Validate and Iterate (Week 3-4)` — .agents/analysis/002-project-constraints-consolidation.md:529
- `### Alternative Recommendation: Start with Option 2, Add Gates Incrementally` — .agents/analysis/002-project-constraints-consolidation.md:541
- `## Open Questions` — .agents/analysis/002-project-constraints-consolidation.md:552
- `## Proposed Structure for PROJECT-CONSTRAINTS.md` — .agents/analysis/002-project-constraints-consolidation.md:574
- `# Project Constraints` — .agents/analysis/002-project-constraints-consolidation.md:577
- `## How to Use This Document` — .agents/analysis/002-project-constraints-consolidation.md:588
- `## MUST Constraints (Blocking - Non-Negotiable)` — .agents/analysis/002-project-constraints-consolidation.md:597
- `### 1. Session Initialization` — .agents/analysis/002-project-constraints-consolidation.md:599
- `### 2. Language: PowerShell Only` — .agents/analysis/002-project-constraints-consolidation.md:612
- `### 3. GitHub Operations: Use Skills, Not Raw Commands` — .agents/analysis/002-project-constraints-consolidation.md:626
- `### 4. Context Retrieval` — .agents/analysis/002-project-constraints-consolidation.md:640
- `### 5. Session Logging` — .agents/analysis/002-project-constraints-consolidation.md:653
- `## SHOULD Constraints (Strong Recommendations)` — .agents/analysis/002-project-constraints-consolidation.md:668
- `### 1. Workflow Architecture: Thin Workflows, Testable Modules` — .agents/analysis/002-project-constraints-consolidation.md:670
- `### 2. Commit Discipline: Atomic Commits` — .agents/analysis/002-project-constraints-consolidation.md:684
- `### 3. Naming Conventions` — .agents/analysis/002-project-constraints-consolidation.md:697
- `### 4. Cross-Reference Validation` — .agents/analysis/002-project-constraints-consolidation.md:710
- `## MAY Constraints (Optional Guidance)` — .agents/analysis/002-project-constraints-consolidation.md:725
- `### 1. Markdown Linting` — .agents/analysis/002-project-constraints-consolidation.md:727
- `### 2. Commit Message Details` — .agents/analysis/002-project-constraints-consolidation.md:740
- `## Constraint Validation Checklist` — .agents/analysis/002-project-constraints-consolidation.md:755
- `## Existing Violations (Grandfathered)` — .agents/analysis/002-project-constraints-consolidation.md:767
- `## Maintenance` — .agents/analysis/002-project-constraints-consolidation.md:773
- `## Related Work` — .agents/analysis/002-project-constraints-consolidation.md:787
- `### Session 15 Retrospective` — .agents/analysis/002-project-constraints-consolidation.md:789
- `### SESSION-PROTOCOL.md` — .agents/analysis/002-project-constraints-consolidation.md:798
- `### ADR-005 and ADR-006` — .agents/analysis/002-project-constraints-consolidation.md:809
- `## Sources` — .agents/analysis/002-project-constraints-consolidation.md:817

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/analysis/002-project-constraints-consolidation.md:72: references `SESSION-PROTOCOL.md` (and line 608: `[SESSION-PROTOCOL.md](../SESSION-PROTOCOL.md#phase-1-serena-initialization)`), but no `SESSION-PROTOCOL.md` exists at repository root or `.agents/SESSION-PROTOCOL.md` in the current source tree.
- missing-path — .agents/analysis/002-project-constraints-consolidation.md:642: references `.agents/HANDOFF.md`, but `.agents/HANDOFF.md` does not exist in the root of `.agents/`.
- missing-path — .agents/analysis/002-project-constraints-consolidation.md:70: references `.serena/memories/skill-usage-mandatory.md`, but `.serena/` directory is not present in repository checkout.

## Observations
- Proposes a hybrid governance approach (Option 5) combining an index-style constraint reference with blocking verification gates (Phase 1.5) and automated verification scripts (`Check-SkillExists.ps1`, commit-msg hook).
- Formulates a critical distinction between trust-based compliance (which failed repeatedly in Session 15) and verification-based compliance with technical controls.
- The proposed `PROJECT-CONSTRAINTS.md` was later adopted and created in the repository at `.agents/governance/PROJECT-CONSTRAINTS.md`, validating the impact of this analysis.

## Context cost
34,898 bytes (~8,725 tokens). Standalone analysis document; loads no external runtime files.
