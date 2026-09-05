---
package: rjm
path: .agents/architecture/ADR-029-skill-file-line-ending-normalization.md
type: agent
bytes: 3884
unit: inv-rjm-11
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-029-skill-file-line-ending-normalization.md, sha256: 4091b5d7ea04f98e821d7a3921be5979436e4d460c86b2baf14113c85cdc0001}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-029-skill-file-line-ending-normalization.md

## Purpose — required, verbatim
> "Generated `*.skill` files in `.claude/skills/` exhibit inconsistent line endings across platforms:" — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:24

## Design intent — required
Eliminates cross-platform line ending discrepancies (CRLF vs LF) in generated `.skill` files within `.claude/skills/` by enforcing LF endings via git attributes (`*.skill text eol=lf`). Prevents false-positive diffs during code reviews, avoids merge conflicts across Windows and Linux/macOS developer environments, and ensures byte-identical skill generation in CI pipelines.

## Phase — required
none

## Inputs — required
Generated `*.skill` files produced across multi-platform developer machines (Windows CRLF vs Linux/macOS LF), git diff and status outputs, and local developer git configuration (`core.autocrlf`).

## Outputs — required
Repository `.gitattributes` normalization directives (`*.skill text eol=lf`), explicit newline generation in skill build tooling (`build/scripts/build_all.py`), and recommended Windows git configuration (`core.autocrlf input`).

## Invokes — required
- script build/scripts/build_all.py — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:108
- file .claude/skills/github/GitHub.skill — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:128
- file .gitattributes — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:135
- script build/scripts/Generate-Skills.ps1 — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:136

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:111

## Concepts named — required, verbatim
- `*.skill` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:24 — used here
- `eol=lf` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:43 — used here
- `autocrlf` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:68 — used here
- `Normalize-Newlines` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:136 — used here

## Structure
- `# ADR-029: Skill File Line Ending Normalization` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:12
- `## Status` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:14
- `## Date` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:18
- `## Context` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:22
- `## Decision` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:37
- `## Rationale` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:53
- `### Alternatives Considered` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:55
- `### Trade-offs` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:64
- `## Consequences` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:75
- `## Implementation Notes` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:94
- `### .gitattributes Entry` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:96
- `### Generate-Skills.ps1 Support` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:103
- `### Developer Setup (Windows)` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:113
- `### Verification` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:123
- `## References` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:132
- `## Related ADRs` — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:136 — Referenced script `build/scripts/Generate-Skills.ps1` does not exist in repository (superseded by `build/scripts/build_all.py`).
- missing-path — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:128 — Example target `.claude/skills/github/GitHub.skill` does not exist in repository.
- doc-drift — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:135 — Cites `.gitattributes lines 125-126` as configuring skill normalization, but lines 125-126 configure shell scripts, and `*.skill` is configured at line 430 as `diff=markdown` without `text eol=lf`.

## Observations
- Directs Windows developers to configure git checkout settings: "git config core.autocrlf input" — .agents/architecture/ADR-029-skill-file-line-ending-normalization.md:118.
- Resolves cross-platform git noise from multi-platform contributors generating text artifacts.

## Context cost
3884 bytes, ~1000 tokens.
