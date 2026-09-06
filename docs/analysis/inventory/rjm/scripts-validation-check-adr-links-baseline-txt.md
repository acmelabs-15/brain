---
package: rjm
path: scripts/validation/check_adr_links_baseline.txt
type: script
bytes: 5725
unit: inv-rjm-274
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_adr_links_baseline.txt

## Purpose — required, verbatim
> "Known broken ADR links that this gate reports but does not block on." — scripts/validation/check_adr_links_baseline.txt:1

## Design intent — required
Provides an explicit, version-controlled baseline ratchet of known pre-existing broken ADR references across the repository (14 entries across 8 files) that the `check_adr_links.py` validation gate reports without blocking PR merges. By keying entries as `<kind>:<file>:<target>` without line numbers, it allows edits in the surrounding files without invalidating the baseline while strictly forbidding line drift, new violation kinds, or newly introduced broken links. Without it, the ADR link validation gate would either fail unconditionally on legacy debt owned by outside teams or be forced to use broad file-level exemptions that silently permit new broken citations.

## Phase — required
rjm:test

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts/validation/check_adr_links.py — scripts/validation/check_adr_links.py:63
- script scripts/validation/check_adr_links.py — scripts/validation/check_adr_links.py:102

## Concepts named — required, verbatim
- `kind` — scripts/validation/check_adr_links_baseline.txt:4 — used here
- `number-mismatch` — scripts/validation/check_adr_links_baseline.txt:8 — used here
- `absolute` — scripts/validation/check_adr_links_baseline.txt:9 — used here
- `unresolved` — scripts/validation/check_adr_links_baseline.txt:10 — used here
- `test_baseline_header_counts_match_the_live_file` — scripts/validation/check_adr_links_baseline.txt:14 — used here
- `ci-scripts.md` — scripts/validation/check_adr_links_baseline.txt:22 — used here
- `check_adr_links.py` — scripts/validation/check_adr_links_baseline.txt:24 — used here
- `HISTORICAL_ROOTS` — scripts/validation/check_adr_links_baseline.txt:31 — used here
- `stale_script_refs.py` — scripts/validation/check_adr_links_baseline.txt:31 — used here
- `ADR-021` — scripts/validation/check_adr_links_baseline.txt:34 — used here
- `ADR-019-debate-log.md` — scripts/validation/check_adr_links_baseline.txt:34 — used here
- `ADR-019-debate-log` — scripts/validation/check_adr_links_baseline.txt:36 — used here
- `ADR-021-debate-log` — scripts/validation/check_adr_links_baseline.txt:36 — used here
- `ADR-017` — scripts/validation/check_adr_links_baseline.txt:39 — used here
- `ADR-021-model-routing-strategy.md` — scripts/validation/check_adr_links_baseline.txt:42 — used here
- `ADR-041-codeql-integration-REVIEW.md` — scripts/validation/check_adr_links_baseline.txt:47 — used here
- `ADR-005-powershell-only-scripting.md` — scripts/validation/check_adr_links_baseline.txt:47 — used here
- `ADR-006-thin-workflows-testable-modules.md` — scripts/validation/check_adr_links_baseline.txt:48 — used here
- `ADR-035-exit-code-standardization.md` — scripts/validation/check_adr_links_baseline.txt:49 — used here
- `ADR-041-codeql-integration.md` — scripts/validation/check_adr_links_baseline.txt:50 — used here
- `pr-req003-body.md` — scripts/validation/check_adr_links_baseline.txt:54 — used here
- `ADR-006-amendment-2026-04-28-debate-log.md` — scripts/validation/check_adr_links_baseline.txt:55 — used here
- `workflow-coalescing.md` — scripts/validation/check_adr_links_baseline.txt:56 — used here
- `ADR-026-pr-automation-concurrency-and-safety.md` — scripts/validation/check_adr_links_baseline.txt:56 — used here
- `ADR-023-quality-gate-prompt-testing.md` — scripts/validation/check_adr_links_baseline.txt:57 — used here
- `ADR-057-prompt-behavioral-evaluation.md` — scripts/validation/check_adr_links_baseline.txt:58 — used here
- `ADR-006` — scripts/validation/check_adr_links_baseline.txt:60 — used here
- `ADR-042` — scripts/validation/check_adr_links_baseline.txt:61 — used here
- `ADR-042-python-migration-strategy.md` — scripts/validation/check_adr_links_baseline.txt:61 — used here
- `python-cicd-patterns.md` — scripts/validation/check_adr_links_baseline.txt:62 — used here
- `ADR-006-thin-workflows.md` — scripts/validation/check_adr_links_baseline.txt:62 — used here
- `ADR-042-python-first.md` — scripts/validation/check_adr_links_baseline.txt:63 — used here
- `ADR-037` — scripts/validation/check_adr_links_baseline.txt:67 — used here
- `ADR-037-memory-router-implementation.md` — scripts/validation/check_adr_links_baseline.txt:67 — used here
- `PRD-memory-enhancement-layer-for-serena-forgetful.md` — scripts/validation/check_adr_links_baseline.txt:68 — used here
- `ADR-007-memory-first-architecture.md` — scripts/validation/check_adr_links_baseline.txt:68 — used here
- `ADR-037-memory-router-architecture.md` — scripts/validation/check_adr_links_baseline.txt:69 — used here
- `agent-harness-reference` — scripts/validation/check_adr_links_baseline.txt:79 — used here

## Structure
- "Known broken ADR links that this gate reports but does not block on." — scripts/validation/check_adr_links_baseline.txt:1
- "Owner decision. ADR-021 cites ../critique/ADR-019-debate-log.md for its own" — scripts/validation/check_adr_links_baseline.txt:34
- ".agents/architecture/reviews/ is a review archive, not one of the roots" — scripts/validation/check_adr_links_baseline.txt:44
- "Repo-root-relative targets written without the leading ../ hops needed from" — scripts/validation/check_adr_links_baseline.txt:52
- "Stale slugs. ADR-006 is ADR-006-thin-workflows-testable-modules.md and" — scripts/validation/check_adr_links_baseline.txt:60
- "Leading-slash targets. GitHub resolves a leading slash against the site root," — scripts/validation/check_adr_links_baseline.txt:65
- "Issue #2796: the four" — scripts/validation/check_adr_links_baseline.txt:71

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_adr_links_baseline.txt`, language: Plain text / baseline data, lines: 82
- documented invocation:
  - "scripts/validation/check_adr_links_baseline.txt" — scripts/validation/check_adr_links.py:63
  - "scripts/validation/check_adr_links_baseline.txt" — scripts/validation/check_adr_links.py:102
- **executed:** yes
- actual command run: `python3 scripts/validation/check_adr_links.py --base-ref none`, abridged stdout: `check_adr_links: 0 violation(s) across 1591 tracked markdown file(s)`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: "Exit codes follow ADR-035: 0 clean, 1 violations found, 2 configuration error." — scripts/validation/check_adr_links.py:78
  - actual exit paths: none in baseline text file (direct invocation via bash fails with exit code 127); consuming validator `check_adr_links.py` implements exit code handling via `main()` return values: exit code 2 on empty scanned list (`scripts/validation/check_adr_links.py:1082`), exit code 2 on missing ADR corpus (`scripts/validation/check_adr_links.py:1088`), exit code 2 on exception (`scripts/validation/check_adr_links.py:1098`), and exit code 1 on findings (`scripts/validation/check_adr_links.py:1107`), wrapped in `raise SystemExit(main())` at `scripts/validation/check_adr_links.py:1111`
- for validators/gates: baseline data file defining allowances for `check_adr_links.py`. On the source repo's default branch, `check_adr_links.py --base-ref none` exits 0 (0 violations across 1591 files). `check_adr_links.py` exits 2 if baseline entries are malformed or added on a branch without base ref presence.
- does the output match what the documentation claims? yes — baseline entries accurately match known pre-existing defects and allow `check_adr_links.py` to pass with 0 violations on the default branch.

## Defects — required
none

## Observations
- The baseline contains 14 allowance entries across 8 files: 12 entries of kind `unresolved` and 2 entries of kind `absolute`.
- The header comment explicitly tracks the exact count ("2 of the 14 entries below are `absolute`, not `unresolved`" at lines 9-10) and is verified against drift by a regression test in `tests/validation/test_check_adr_links.py:1671` (`test_baseline_header_counts_match_the_live_file`).
- Entries use exact `<kind>:<file>:<target>` tripartite keys without line numbers to be immune to unrelated line edits while preventing silent suppression of other violation kinds on the same file/target.
- Historical roots exempted in code via `stale_script_refs.py:HISTORICAL_ROOTS` are omitted by design (lines 31-32).

## Context cost
5725 bytes, approximately 1431 tokens.
