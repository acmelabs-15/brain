---
package: rjm
path: .agents/architecture/ADR-043-scoped-tool-execution.md
type: agent
bytes: 9682
unit: inv-rjm-16
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-043-scoped-tool-execution.md

## Purpose — required, verbatim
> "**Session protocol tools MUST scope to changed files rather than the entire repository.**" — .agents/architecture/ADR-043-scoped-tool-execution.md:41

## Design intent — required
Addresses scope explosion and PR noise caused by repository-wide formatting and linting tools (demonstrated by PR #908 bundling 53 unrelated memory files) by mandating that session protocol tools scope execution strictly to changed files via git diff integration. Establishes the scoped command pattern and records a subsequent correction note clarifying the limitations of `--no-globs` in favor of a Python validation wrapper (`pre_pr.py`).

## Phase — required
none

## Inputs — required
Session protocol quality check tools (`markdownlint-cli2`, `prettier`, `PSScriptAnalyzer`), git repository change set (`git diff --name-only --diff-filter=d HEAD`), incident history (PR #908 scope explosion, Issue #948, Issue #4401), and linter configuration files (`.markdownlint-cli2.yaml`).

## Outputs — required
Decision mandating git-scoped execution pattern for session protocol quality tools, scoped command patterns for Bash and PowerShell, Python wrapper invocation pattern (`scripts/validation/pre_pr.py --markdown-lint-only -- <files>`), and protocol updates restricting full-repo formatting to dedicated cleanup PRs.

## Invokes — required
- doc AGENTS.md — .agents/architecture/ADR-043-scoped-tool-execution.md:181
- doc CLAUDE.md — .agents/architecture/ADR-043-scoped-tool-execution.md:181
- doc .github/copilot-instructions.md — .agents/architecture/ADR-043-scoped-tool-execution.md:181
- doc ADR-001 — .agents/architecture/ADR-043-scoped-tool-execution.md:205
- doc ADR-005 — .agents/architecture/ADR-043-scoped-tool-execution.md:206
- doc ADR-008 — .agents/architecture/ADR-043-scoped-tool-execution.md:207
- doc ADR-034 — .agents/architecture/ADR-043-scoped-tool-execution.md:208
- doc ADR-042 — .agents/architecture/ADR-043-scoped-tool-execution.md:209
- doc .agents/retrospective/2026-01-15-pr-908-comprehensive-retrospective.md — .agents/architecture/ADR-043-scoped-tool-execution.md:216
- config .markdownlint-cli2.yaml — .agents/architecture/ADR-043-scoped-tool-execution.md:242
- script scripts/validation/pre_pr.py — .agents/architecture/ADR-043-scoped-tool-execution.md:256

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:120
- doc .agents/critique/ADR-043-debate-log.md — .agents/critique/ADR-043-debate-log.md:5
- doc ADR-043 — docs/architecture.md:182
- doc ADR-043 — .agents/steering/documentation.md:274

## Concepts named — required, verbatim
- `Scoped Tool Execution` — .agents/architecture/ADR-043-scoped-tool-execution.md:12 — defined here
- `markdownlint` — .agents/architecture/ADR-043-scoped-tool-execution.md:24 — used here
- `scope explosion` — .agents/architecture/ADR-043-scoped-tool-execution.md:30 — defined here
- `working set` — .agents/architecture/ADR-043-scoped-tool-execution.md:37 — used here
- `Scoped Command Pattern` — .agents/architecture/ADR-043-scoped-tool-execution.md:43 — defined here
- `--no-globs` — .agents/architecture/ADR-043-scoped-tool-execution.md:71 — used here
- `Scope Definition` — .agents/architecture/ADR-043-scoped-tool-execution.md:73 — defined here
- `prettier` — .agents/architecture/ADR-043-scoped-tool-execution.md:90 — used here
- `PSScriptAnalyzer` — .agents/architecture/ADR-043-scoped-tool-execution.md:91 — used here
- `Periodic Cleanup` — .agents/architecture/ADR-043-scoped-tool-execution.md:183 — defined here
- `Correction Note` — .agents/architecture/ADR-043-scoped-tool-execution.md:224 — defined here

## Structure
- `# ADR-043: Scoped Tool Execution` — .agents/architecture/ADR-043-scoped-tool-execution.md:12
- `## Status` — .agents/architecture/ADR-043-scoped-tool-execution.md:14
- `## Date` — .agents/architecture/ADR-043-scoped-tool-execution.md:18
- `## Context` — .agents/architecture/ADR-043-scoped-tool-execution.md:22
- `## Decision` — .agents/architecture/ADR-043-scoped-tool-execution.md:39
- `### Scoped Command Pattern` — .agents/architecture/ADR-043-scoped-tool-execution.md:43
- `### Scope Definition` — .agents/architecture/ADR-043-scoped-tool-execution.md:73
- `### Tool Coverage` — .agents/architecture/ADR-043-scoped-tool-execution.md:83
- `### Exclusions` — .agents/architecture/ADR-043-scoped-tool-execution.md:93
- `## Rationale` — .agents/architecture/ADR-043-scoped-tool-execution.md:102
- `### Alternatives Considered` — .agents/architecture/ADR-043-scoped-tool-execution.md:104
- `### Trade-offs` — .agents/architecture/ADR-043-scoped-tool-execution.md:114
- `## Consequences` — .agents/architecture/ADR-043-scoped-tool-execution.md:128
- `### Positive` — .agents/architecture/ADR-043-scoped-tool-execution.md:130
- `### Negative` — .agents/architecture/ADR-043-scoped-tool-execution.md:138
- `### Neutral` — .agents/architecture/ADR-043-scoped-tool-execution.md:144
- `## Implementation Notes` — .agents/architecture/ADR-043-scoped-tool-execution.md:149
- `### Session Protocol Update` — .agents/architecture/ADR-043-scoped-tool-execution.md:151
- `### Agent Prompt Updates` — .agents/architecture/ADR-043-scoped-tool-execution.md:179
- `### Periodic Cleanup` — .agents/architecture/ADR-043-scoped-tool-execution.md:183
- `### Verification` — .agents/architecture/ADR-043-scoped-tool-execution.md:192
- `## Related Decisions` — .agents/architecture/ADR-043-scoped-tool-execution.md:203
- `## References` — .agents/architecture/ADR-043-scoped-tool-execution.md:211
- `## Correction Note (2026-08-03, Issue #4401)` — .agents/architecture/ADR-043-scoped-tool-execution.md:224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/architecture/ADR-043-scoped-tool-execution.md:153 · References `.agents/SESSION-PROTOCOL.md` which does not exist in the repository.
- `internal-contradiction` · .agents/architecture/ADR-043-scoped-tool-execution.md:224-266 · Implementation note originally claimed that `--no-globs` ensures only specified files are processed, which contradicted `.markdownlint-cli2.yaml` behavior where `ignores` still applies and silently drops files, as corrected in the appended Correction Note (Issue #4401).

## Observations
Demonstrates a rigorous approach to architectural corrections: rather than rewriting history, an explicit dated Correction Note (Issue #4401) was appended to the ADR to clarify the subtle behavior of `--no-globs` and document the active Python wrapper `scripts/validation/pre_pr.py --markdown-lint-only`.

## Context cost
9682 bytes, ~2400 tokens. Loads no external files directly when read as a decision record.
