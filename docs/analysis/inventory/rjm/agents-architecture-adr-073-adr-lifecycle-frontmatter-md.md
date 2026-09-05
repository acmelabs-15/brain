---
package: rjm
path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md
type: agent
bytes: 18309
unit: inv-rjm-29
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md

## Purpose — required, verbatim
> "Adopt a queryable lifecycle frontmatter schema as the machine-readable source of truth for ADR state, retaining the human-readable `## Status` prose section as a secondary rendering." — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:42

## Design intent — required
Architecture decision record establishing a standardized YAML frontmatter schema (`id`, `status`, `date`, `decision-makers`, `supersedes`, `superseded-by`, `explainer`, `implemented`) for architecture decision records across the repository. It addresses the limitation of prose-only status in human-centric MADR templates, which blocks machine-readable status querying, automated supersession tracking, and CI enforcement by agents and automation. Crucially, it commits to a phased rollout where only Phase 1 (optional, unenforced frontmatter) is active immediately, deferring backfill and blocking enum gate enforcement until real consumers (such as `generate_adr_index.py` or `check_adr_lifecycle.py`) are created. It establishes two key integrity rules: `status: accepted` requires binding adr-review debate-log consensus evidence under `.agents/critique/`, and `explainer` links remain display-only to mitigate SSRF/injection risks. Without this record, tooling would continue scraping unstructured Markdown prose with brittle regexes.

## Phase — required
none

## Inputs — required
- Issue #2583 (labels `agent-architect`, `agent-explainer`, `area-skills`, `priority:P1`, `adr-followup`) — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:16
- Six-agent adr-review debate log at `.agents/critique/ADR-073-debate-log.md` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:18, 20
- MADR convention and canonical ADR template in `.agents/architecture/ADR-TEMPLATE.md` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:28, 75
- Status parsing logic in `.claude/skills/adr-review/scripts/detect_adr_changes.py` (`_get_adr_status`) — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:34
- Guidance in `adr-best-practices.md` (line 42, issue #2582 / PR #2586) — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:18, 36, 122, 167
- Python frontmatter parser dependency `python-frontmatter` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:18, 111

## Outputs — required
- Machine-readable YAML frontmatter schema definition for ADRs — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:46-55
- Frontmatter integration into `.agents/architecture/ADR-TEMPLATE.md` and `adr-generator` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:144-145, 157
- Governance integrity rule binding `status: accepted` to `.agents/critique/` debate logs — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:61, 130
- Security constraint establishing `explainer` as a display-only, no-auto-fetch link — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:62, 131

## Invokes — required
- file .agents/critique/ADR-073-debate-log.md — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:18
- template .agents/architecture/ADR-TEMPLATE.md — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:28
- doc adr-best-practices.md — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:28
- script .claude/skills/adr-review/scripts/detect_adr_changes.py — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:34
- agent ADR-072 — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:165
- agent ADR-066 — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:166
- agent ADR-055 — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:128
- agent ADR-042 — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:111

## Invoked by — required
- doc README.md — .agents/architecture/README.md:137

## Concepts named — required, verbatim
- `Machine-Readable ADR Lifecycle Frontmatter` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:12 — defined here
- `adr-review` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:18 — used here
- `DISAGREE-AND-COMMIT` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:18 — used here
- `MADR` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:28 — used here
- `Nygard` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:38 — used here
- `supersedes` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:51 — defined here
- `superseded-by` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:52 — defined here
- `explainer` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:53 — defined here
- `implemented` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:54 — defined here
- `SSRF` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:62 — used here
- `CWE-918` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:62 — used here
- `python-frontmatter` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:111 — used here
- `ReDoS` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:124 — used here
- `validate-adr` — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:147 — used here

## Structure
- # ADR-073: Machine-Readable ADR Lifecycle Frontmatter
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Prior Art Investigation (Required when changing existing systems)
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
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

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:150 · Mentions `scripts/sync_adr_protocol.py` in the Impact table ("Confirm no prose-status assumption breaks"), but this script does not exist in the repository (also noted as absent in ADR-050).

## Observations
- Foundational architectural standard in rjm: both `build/scripts/generate_adr_index.py` and `scripts/validation/check_adr_lifecycle.py` directly implement ADR-073's frontmatter schema and validation rules.
- Contains an explicit governance anti-forgery check: manually setting `status: accepted` in frontmatter is disallowed without corresponding multi-agent consensus debate evidence under `.agents/critique/`.

## Context cost
18309 bytes (~4300 tokens). Architecture decision record specifying ADR lifecycle frontmatter schema and rollout.
