---
package: rjm
path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md
type: agent
bytes: 6858
unit: inv-rjm-22
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-060-rework-warning-session-log-persistence.md

## Purpose — required, verbatim
> "Add an optional `reworkWarning` object under `protocolCompliance.sessionEnd` in the session log JSON." — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:55-56

## Design intent — required
Persists session-end rework warning diagnostic lines into the session log JSON schema under `protocolCompliance.sessionEnd.reworkWarning.Evidence`, resolving review feedback on PR #1989. Previously, rework warnings were only emitted ephemerally to stdout and summarized in a text list; persisting the full array of evidence lines directly in the machine-readable log enables retrospective and audit tools to evaluate rework signals across sessions without needing to re-run git diff analyses.

## Phase — required
none

## Inputs — required
- Rework warning evidence lines returned by `emit_rework_warning_lines` / `_run_rework_warning_step()` during session-end completion (.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:24-25, 38-39, 63-65)
- Session log JSON object before completion, governed by ADR-014 (.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30, 40-41)
- Review threads on PR #1989 and follow-up Issue #2063 requesting durable queryability (.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:26-28, 156-157)

## Outputs — required
- Optional `reworkWarning` object under `protocolCompliance.sessionEnd` in the session log JSON (.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:55-57)
- JSON string array `Evidence` containing lines such as `["rework-warning: none"]` or `["rework-warning: skipped (sibling unavailable)"]` (.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:59-64, 107-109)
- Updated session completion implementation in `complete_session_log.py` (canonical and mirror copies) (.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:66-70, 135)

## Invokes — required
- script complete_session_log.py — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:25
- doc ADR-014 — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30
- file HANDOFF.md — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30
- doc .claude/rules/data-intensive-applications.md — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:31
- script validate_session_json.py — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:42
- doc .agents/sessions/ — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:137
- doc ADR-088 — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:162
- reference .claude/skills/software-engineering-library/references/data-intensive-applications.md — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:164

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:131

## Concepts named — required, verbatim
- `REQ-009-07` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:24 — used here
- `REQ-009-08` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:24 — used here
- `rework warning` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:24 — defined here
- `complete_session_log.py` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:25 — used here
- `session log schema` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30 — used here
- `ADR-014` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30 — used here
- `HANDOFF.md` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30 — used here
- `SoR ownership` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:32 — used here
- `schema evolution` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:32 — used here
- `backward compatibility` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:33 — used here
- `_run_rework_warning_step()` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:38 — used here
- `protocolCompliance.sessionEnd` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:41 — used here
- `validate_session_json.py` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:42 — used here
- `SESSION_END_REQUIRED_ITEMS` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:42 — used here
- `reworkWarning` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:55 — defined here
- `Evidence` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:60 — defined here
- `emit_rework_warning_lines` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:64 — used here
- `markdownLintRun.Evidence` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:85 — used here
- `validate_checklist_section` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:87 — used here
- `DDIA rule` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:91 — used here
- `REQ-009-09` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:152 — used here
- `ADR-088` — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:162 — used here

## Structure
- # ADR-060: Rework Warning Evidence Persistence in Session Log JSON
- ## Status
- ## Date
- ## Context
- ### What Currently Exists
- ### Why Change Now
- ## Decision
- ## Prior Art Investigation
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References
- ## Amendment 2026-07-27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:25 · `complete_session_log.py` does not exist in the repository (previously lived under `.claude/skills/session-end/scripts/` before session-end skill removal).
- missing-path · .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:30 · `HANDOFF.md` does not exist in the repository root.
- missing-path · .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:31 · `.claude/rules/data-intensive-applications.md` does not exist (moved to `.claude/skills/software-engineering-library/references/data-intensive-applications.md` per Amendment 2026-07-27).
- doc-drift · .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:42 · References `validate_session_json.py` without its directory path prefix `scripts/validate_session_json.py`.
- internal-contradiction · .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:4,20 · Frontmatter date `2026-07-27` contradicts prose Date section `2026-05-25`.

## Observations
Illustrates the schema evolution pattern governing the session log JSON: fields are additive, optional, and default to neutral evidence when absent so older session logs continue to pass validation without migration. The change was driven directly by review feedback on PR #1989 and tracked in Issue #2063.

## Context cost
6858 bytes, ~1700 tokens. When factoring in referenced files (`scripts/validate_session_json.py`, `.agents/architecture/ADR-014-distributed-handoff-architecture.md`, and `.claude/skills/software-engineering-library/references/data-intensive-applications.md`), total referenced context is ~72420 bytes (~18100 tokens).
