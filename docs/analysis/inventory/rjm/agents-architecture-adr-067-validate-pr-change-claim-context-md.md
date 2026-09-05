---
package: rjm
path: .agents/architecture/ADR-067-validate-pr-change-claim-context.md
type: agent
bytes: 20032
unit: inv-rjm-25
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-067-validate-pr-change-claim-context.md, sha256: 7a0d36410ed523d6e278b869ebefe9e06febdcfc2bc200b3aaea1533716f4faa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-067-validate-pr-change-claim-context.md

## Purpose — required, verbatim
> "Adopt **Option (c) Hybrid**: keep patterns 1 (bold `**path.ext**`) and 2 (bullet-list `^[-*+] path.ext`) firing in any context. Restrict patterns 0 (inline-backtick `` `path.ext` ``) and 3 (markdown-link `[path.ext](...)`) to fire only inside an explicit change-claim H2 section. The set of change-claim section names is `## Changes`, `## Per-file changes`, `## Files Changed`, `## Changed Files` (case-insensitive, exact match modulo trailing whitespace)." — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:43

## Design intent — required
Establishes the architectural decision to flip the default behavior of Check 1 ("File mentioned but not in diff") in `scripts/validation/pr_description.py` from global path extraction to context-scoped extraction. Solves the recurrent problem of false-positive CI blocks where pull request authors cite reference files in narrative prose (such as `## Testing`, `## Summary`, or pre-flight checklists) by restricting inline-backtick (pattern 0) and markdown-link (pattern 3) mentions to explicit change-claim sections (`## Changes`, `## Per-file changes`, `## Files Changed`, `## Changed Files`), while preserving unrestricted detection for unambiguous bold (pattern 1) and bulleted-list (pattern 2) file mentions across any section. Without this hybrid policy, autonomous PR generation and human PR authors would remain trapped on an endless heading-stripper patch treadmill or be forced to seek manual bypass labels whenever reference files are legitimately cited in narrative text.

## Phase — required
rjm:ship

## Inputs — required
- PR body compared against `gh pr view --json files`: "is the BLOCKING gate that compares paths extracted from the PR body against `gh pr view --json files`." — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24
- Canonical PR template: "`.github/PULL_REQUEST_TEMPLATE.md` is the canonical template. It emits `## Changes` at line 64 as the change-claim section, with a bulleted-list scaffold (`-`)." — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:81
- 40 merged PR sample: "Method: 40 PRs sampled uniformly at random (seed 2252) from the 208 PRs merged into `rjmurillo/ai-agents` between 2026-05-03 and 2026-06-02." — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:108
- Issue analyst findings: "- Analyst findings: the issue analyst handoff" — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:220

## Outputs — required
- Architectural decision: "Adopt **Option (c) Hybrid**: keep patterns 1 (bold `**path.ext**`) and 2 (bullet-list `^[-*+] path.ext`) firing in any context. Restrict patterns 0 (inline-backtick `` `path.ext` ``) and 3 (markdown-link `[path.ext](...)`) to fire only inside an explicit change-claim H2 section. The set of change-claim section names is `## Changes`, `## Per-file changes`, `## Files Changed`, `## Changed Files` (case-insensitive, exact match modulo trailing whitespace)." — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:43
- Validator implementation updates: "Add `_CHANGE_CLAIM_SECTION_NAMES` constant; add `_change_claim_regions()` helper; thread region check into `extract_mentioned_files` loop" — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:175
- Test suite additions: "Add regression tests for PR #2214 / #2225 / #1873 / #1903 body shapes; add coverage for the four change-claim heading variants; add coverage for the \"inline-backtick under `## Changes` IS still a claim\" case" — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:176
- Rollback plan: "Reverts the `_CHANGE_CLAIM_SECTION_NAMES` constant and the `_change_claim_regions()` helper." — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:206

## Invokes — required
- script scripts/validation/pr_description.py — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24
- command .claude/commands/spec.md — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:28
- script scan_vulnerabilities.py — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:29
- agent ADR-035 — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:29
- template .github/PULL_REQUEST_TEMPLATE.md — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:35
- command push-pr.md — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:37
- script 2252-pr-description-default-flip-regression-sim.py — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:200

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:174

## Concepts named — required, verbatim
`validate-pr` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:12 — used here
`Check 1` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:12 — used here
`File mentioned but not in diff` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24 — used here
`BLOCKING gate` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24 — used here
`change claim` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24 — used here
`fenced code block` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24 — used here
`GitHub admonition` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24 — used here
`contextual H2 heading` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:24 — used here
`issue analyst` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:26 — used here
`Option (c) Hybrid` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:43 — defined here
`extract_mentioned_files` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:45 — used here
`_strip_informational_sections` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:47 — used here
`_CHANGE_CLAIM_SECTION_NAMES` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:47 — defined here
`FILE_MENTION_PATTERNS` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:48 — used here
`Prior Art Investigation` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:57 — used here
`validate_pr_description` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:61 — used here
`CRITICAL` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:61 — used here
`Strict` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:68 — used here
`Permissive` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:68 — used here
`Hybrid` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:68 — defined here
`Autonomous PR-Template Surface Audit` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:77 — used here
`canonical template` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:81 — used here
`Regression Analysis` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:106 — used here
`_change_claim_regions` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:175 — defined here
`Rollback Plan` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:202 — used here
`description-validation-bypass` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:210 — used here
`ADR-035` — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:214 — used here

## Structure
# ADR-067: validate-pr Check 1 default-flip - change-claim context required — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:12
## Status — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:14
## Date — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:18
## Context — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:22
## Decision — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:41
## Prior Art Investigation — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:57
### What Currently Exists — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:59
### Historical Rationale — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:65
### Why Change Now — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:71
## Autonomous PR-Template Surface Audit — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:77
## Regression Analysis (sample of 40 merged PRs) — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:106
## Rationale — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:133
### Alternatives Considered — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:135
### Trade-offs — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:145
## Consequences — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:151
### Positive — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:153
### Negative — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:160
### Neutral — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:166
## Impact on Dependent Components — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:171
## Implementation Notes — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:184
### Rollback Plan — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:202
## Related Decisions — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:212
## References — .agents/architecture/ADR-067-validate-pr-change-claim-context.md:218

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-067-validate-pr-change-claim-context.md:123 · Cites SOUL.md from PR #1903 sample which does not exist in the repository.
- script-bug · .agents/architecture/ADR-067-validate-pr-change-claim-context.md:200 · Referenced regression simulator script .agents/analysis/2252-pr-description-default-flip-regression-sim.py fails with FileNotFoundError due to missing .agents/analysis/2252-regression-data/sample_prs.txt data directory.
- internal-contradiction · .agents/architecture/ADR-067-validate-pr-change-claim-context.md:3 · Frontmatter specifies status: proposed while simultaneously marking implemented: true at line 9.
- cross-file-contradiction · .agents/architecture/ADR-067-validate-pr-change-claim-context.md:188 · Specified _CHANGE_CLAIM_SECTION_NAMES tuple (4 headings) and scoped pattern indexes (0, 3) drifted from scripts/validation/pr_description.py:114-127 which added What changed and pattern index 4.

## Observations
Exhaustive empirical analysis of pull request bodies (sampling 40 merged PRs with seed 2252 out of 208 merged PRs) to establish a data-driven justification for flipping validator default behavior from global path extraction to context-scoped extraction. Quantifies false-positive reductions (reducing Check 1 CRITICAL findings from 4 to 1 across the sample with zero reduction in true drift detection). Demonstrates mature ADR practices within the rjm package, complete with explicit rollback criteria, leading-indicator monitoring via description-validation-bypass label metrics, and regression simulator verification requirements tied to kanban task t_f23fc721.

## Context cost
20032 bytes, approximately 5000 tokens.
