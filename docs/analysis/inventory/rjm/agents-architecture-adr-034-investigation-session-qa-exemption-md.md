---
package: rjm
path: .agents/architecture/ADR-034-investigation-session-qa-exemption.md
type: agent
bytes: 16447
unit: inv-rjm-13
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-034-investigation-session-qa-exemption.md, sha256: e3de2dc83d3231209ab1a6c0cda49006c8bbca831cce66b782f9d0d14c31514f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-034-investigation-session-qa-exemption.md

## Purpose — required, verbatim
> "Add investigation-only session exemption to pre-commit QA validation with staged-file guardrails." — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:66

## Design intent — required
Pre-commit validation in rjm historically required QA validation for all sessions on branches with code changes, regardless of whether a particular session made code changes or merely performed read-only investigation, research, or CI debugging. Without an exemption, investigation sessions were forced to either fabricate QA reports or bypass validation using `--no-verify`. ADR-034 establishes an explicit, opt-in `SKIPPED: investigation-only` exemption mechanism guarded by a strict allowlist of staged file patterns (permitting only session logs, analysis documents, retrospectives, security assessments, memory graphs, and critique/review artifacts). This removes the incentive for bypass normalization while preserving strict pre-commit verification integrity.

## Phase — required
cross-phase

## Inputs — required
- Pre-commit session evidence rows matching `(?i)SKIPPED:\s*investigation-only` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:72
- Staged files list obtained via `git diff --cached --name-only` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:121
- Canonical 8-pattern investigation allowlist defined in `scripts/modules/investigation_allowlist.py` (`get_investigation_allowlist()`) — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:95
- Session history and analysis data: Analyst Report identifying 72/245 sessions (29.4%) as investigation-only, Session 106 reference (`.agents/sessions/2025-12-30-session-106-pr-593-ci-fix.md`), and multi-agent reviews — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:45, 46, 49, 53

## Outputs — required
- Pre-commit validation verdict: pass (skipping QA requirement) or exit failure raising `E_INVESTIGATION_HAS_IMPL` listing disallowed implementation files — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:134, 151
- Skip metrics tracking: `Write-Verbose "Investigation-only skip: $($stagedFiles.Count) files"` and validator skip counter — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:149, 283
- Mixed session recovery protocol and session log documentation updates in `SESSION-PROTOCOL.md` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:288

## Invokes — required
- script scripts/modules/investigation_allowlist.py — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:95
- script .github/scripts/validate_investigation_claims.py — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:96
- script scripts/validate_session_json.py — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:98
- script Validate-Session.ps1 — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:279
- doc SESSION-PROTOCOL.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:288
- doc .agents/sessions/2025-12-30-session-106-pr-593-ci-fix.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:49
- doc .agents/analysis/pre-commit-qa-investigation-sessions-gap.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:337
- doc .agents/analysis/investigation-session-patterns-analyst-report.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:338
- doc .agents/architecture/ASSESSMENT-session-qa-validation-options.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:339
- doc .agents/security/SA-pre-commit-qa-skip-options.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:340
- doc .agents/critique/investigation-qa-exemption-proposal-critique.md — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:341
- doc ADR-004 — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:332
- doc ADR-006 — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:333

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:114
- doc CONTRIBUTING.md — CONTRIBUTING.md:722
- skill src/copilot-cli/skills/ai-agents-change-control/SKILL.md — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:52
- reference src/copilot-cli/skills/ai-agents-change-control/references/provenance.md — src/copilot-cli/skills/ai-agents-change-control/references/provenance.md:11

## Concepts named — required, verbatim
`Investigation Session QA Exemption` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:20 — defined here
`session protocol pre-commit validator` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:32 — used here
`investigation-only sessions` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:32 — defined here
`QA validation` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:32, 66 — used here
`--no-verify` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:39, 46 — used here
`SKIPPED: docs-only` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:58 — used here
`Explicit Investigation Mode` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:53 — defined here
`staged-file guardrails` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:66 — defined here
`SKIPPED: investigation-only` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:79, 163 — defined here
`Investigation Artifact Allowlist` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:77 — defined here
`Allowlist Owner` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:103, 232 — defined here
`E_INVESTIGATION_HAS_IMPL` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:134, 218 — defined here
`Mixed Session Recovery Path` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:155 — defined here
`INVESTIGATION SESSION MODE CHANGE` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:160 — defined here
`Pester` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:259 — used here
`MADR` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:355, 375 — used here

## Structure
- `# ADR-034: Investigation Session QA Exemption` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:20
- `## Status` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:22
- `## Date` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:26
- `## Context` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:30
- `### Problem Statement` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:34
- `### Evidence` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:41
- `### Multi-Agent Review` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:51
- `## Decision` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:64
- `### Evidence Pattern` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:68
- `### Investigation Artifact Allowlist` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:77
- `### Validation Logic` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:117
- `### Mixed Session Recovery Path` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:155
- `## Rationale` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:185
- `### Alternatives Considered` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:187
- `### Trade-offs` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:196
- `## Amendment (2026-07-08): Reconcile Allowlist to 8 Patterns` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:204
- `## Consequences` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:235
- `### Positive` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:237
- `### Negative` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:244
- `### Neutral` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:250
- `### Confirmation` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:255
- `## Reversibility Assessment` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:265
- `## Implementation Notes` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:275
- `### Phase 1: Validator Update (P0)` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:277
- `### Phase 2: Documentation (P0)` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:286
- `### Phase 3: Defense-in-Depth (P1-P2)` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:300
- `### Metrics Collection` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:306
- `### Test Cases` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:315
- `## Related Decisions` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:330
- `## References` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:335
- `## ADR Review Debate Summary` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:347
- `### Round 1: Independent Reviews` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:349
- `### Conflict Resolutions` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:362
- `### Changes Applied` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:373
- `### Consensus Status` — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:386

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — "The original allowlist above authorized 5 patterns." — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:206 — The original ADR text defined 5 allowlist patterns while the implementation code drifted to 9 patterns across uncoordinated changes before being reconciled to 8 patterns in `scripts/modules/investigation_allowlist.py`; furthermore, `.github/scripts/validate_investigation_claims.py` retained an inline hardcoded pattern list for commit scans, the session skill pre-check maintained a parallel hardcoded copy, and `scripts/validate_session_json.py` does not consume the allowlist at all.
- doc-drift — "date: 2026-07-08" — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:4 — Frontmatter date reads 2026-07-08 reflecting amendment date while the document Date section records "2025-12-30" — .agents/architecture/ADR-034-investigation-session-qa-exemption.md:28 without reconciling the discrepancy.

## Observations
ADR-034 preserves a complete record of a multi-agent architectural debate, detailing verdicts from six specialist agent personas (Analyst, Architect, Security, Critic, Independent Thinker, High-Level Advisor) and formal conflict resolution rules (e.g. initially excluding `.agents/critique/` as an overly broad loophole before re-evaluating in the 2026-07-08 amendment). The document also standardizes a clean branch strategy for mixed sessions: committing investigation artifacts first with `SKIPPED: investigation-only` before commencing implementation on the same branch.

## Context cost
16447 bytes, approximately 3900 tokens.
