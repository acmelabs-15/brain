---
package: rjm
path: .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md
type: agent
bytes: 28734
unit: inv-rjm-41
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md, sha256: 592c104c4740fe8733f9677aef90a08e57b86ef8e584696483769e9e42f0c731}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md

## Purpose — required, verbatim
> "Redesign `validate_qa_report()` to require an explicit `head` argument and to perform the staleness check itself, rather than leaving staleness detection as a second call a caller can forget:" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:52

## Design intent — required
Architecture decision record defining the relaxation of QA report verification from strict commit SHA equality to code-change-aware staleness checking. Previously, any commit made after QA validation—even purely non-code bookkeeping, session-log touch-ups, or evidence updates—caused validation to hard-fail, resulting in extensive rebind churn (measured at 20+ commits across history and 23 occurrences across 15 review rounds on PR #4954). By making `head` a required keyword-only parameter and integrating `post_qa_code_changes()` directly into `validate_qa_report()`, the design eliminates false-positive failures while structurally preventing callers from checking session identity but silently skipping code staleness checks.

## Phase — required
cross-phase

## Inputs — required
- "Requested by issue #5164 (labels `enhancement`, `priority:P2`, `area-validation`; see the priority note at the end of this document)." — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16
- ".agents/critique/ADR-096-debate-log.md" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16
- ".agents/sessions/2026-08-19-session-99919-bc967748c-critical-review-open-issues-prs.json" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:33
- ".agents/sessions/handoffs/2026-08-15-2840-handoff.md" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:36
- ".claude/lib/qa_report.py" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24
- "scripts/validate_session_json.py" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:28
- ".claude/rules/ci-scripts.md" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:191

## Outputs — required
- "Change `validate_qa_report()`'s signature to `(path: Path, expected: QaBinding, *, head: str, repo_root: Path) -> QaReport`" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:171
- "Update `validate_qa_report_evidence()` in `scripts/validate_session_json.py`" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:172
- "Update `complete_session_log.py`'s QA-evidence path to pass `head=binding.commit`" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:173
- "Mirror to `src/copilot-cli/` via the standard sync-then-build pipeline." — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:175
- "tests/test_validate_session_json.py::test_rejects_qa_report_for_stale_commit" — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:95

## Invokes — required
- skill adr-review — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16
- script scripts/validate_session_json.py — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:28
- script .claude/lib/qa_report.py — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24
- script scripts/sync_plugin_lib.py — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:163
- script build/scripts/build_all.py — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:163
- doc .claude/rules/ci-scripts.md — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:191
- doc .agents/critique/ADR-096-debate-log.md — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:193
- doc .agents/sessions/handoffs/2026-08-15-2840-handoff.md — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:192

## Invoked by — required
- doc ADR-096 — .agents/architecture/README.md:149

## Concepts named — required, verbatim
`adr-review` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16 — used here
`MUST-NOT-2` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16 — used here
`adr-review-policy` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16 — used here
`acceptance-transition gate` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16 — used here
`AI Spec Validator` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:16 — used here
`validate_qa_report` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24 — defined here
`qaCommit` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24 — used here
`QaBinding` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24 — used here
`session_qa_binding` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24 — used here
`post_qa_code_changes` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24 — used here
`QA_EVIDENCE_PREFIXES` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:24 — used here
`validate_qa_report_evidence` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:28 — used here
`_qa_report_evidence` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:29 — used here
`endingCommit` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:36 — used here
`episodeMetrics.comparison.head` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:48 — used here
`QaReport` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:57 — used here
`load_qa_report` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:65 — used here
`validation_head` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:80 — used here
`validate_session_log` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:80 — used here
`_resolve_full_commit` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:80 — used here
`_get_ending_commit` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:87 — used here
`MUST-13` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:98 — used here
`AI_AGENTS_ARTIFACT_ROOT` — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:149 — used here

## Structure
# ADR-096: Relax QA-Evidence Commit Equality to a Code-Change-Aware Check — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:12
## Status — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:14
## Date — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:18
## Context — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:22
### Evidence this is a real, quantified cost — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:31
### What #5125/#5135 did NOT fix — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:42
### Explicitly out of scope: `session_qa_binding()`'s own equality — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:46
## Decision — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:50
### Choosing the head value at each call site — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:84
### Acceptance criteria — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:89
## Prior Art Investigation — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:100
### What Currently Exists — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:102
### Historical Rationale — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:108
### Why Change Now — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:114
## Rationale — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:120
### Alternatives Considered — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:122
### Trade-offs — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:132
## Consequences — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:136
### Positive — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:138
### Negative — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:144
### Neutral — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:151
## Impact on Dependent Components — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:156
## Implementation Notes — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:169
## Related Decisions — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:179
## References — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:186
## Priority note — .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:195

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:29 · Referenced caller script .claude/skills/session-end/scripts/complete_session_log.py does not exist in the repository.
- missing-path · .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:96 · Referenced test file .claude/skills/session-end/tests/test_complete_session_log.py does not exist in the repository.
- missing-path · .agents/architecture/ADR-096-relax-qa-evidence-commit-equality.md:163 · Referenced mirror file src/copilot-cli/skills/session-end/scripts/complete_session_log.py does not exist in the repository.

## Observations
ADR-096 was accepted following a 6-agent debate (`adr-review` involving architect, critic, independent-thinker, security, analyst, and high-level-advisor) resulting in 6/6 ACCEPT-WITH-CHANGES, followed by a Phase 3 resolution and a Round 2 correction for a Decision-section claim. The decision resolved process friction by relaxing QA report equality checks to code-change-aware staleness checks (`post_qa_code_changes`). The design structurally prevents fail-open validation by requiring the `head` keyword argument, preventing callers from validating session identity while omitting staleness checks. While ADR-096 treated `complete_session_log.py` in `session-end` as a production caller, that skill directory is absent in the current repository state; only `scripts/validate_session_json.py` calls `validate_qa_report()`.

## Context cost
28734 bytes, approximately 7200 tokens.
