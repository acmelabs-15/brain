---
package: rjm
name: Synthesis Panel Frontmatter Standard
slug: synthesis-panel-frontmatter-standard
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md, sha256: 456c2b45675af44c0b9b0ab432e98a4f33d1b5b3d57a0fa91fccb9ae5e4ca239}
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Synthesis Panel Frontmatter Standard

## Definition — verbatim
> "ADR-051: Synthesis Panel Frontmatter Standard" — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:12

## Also called — verbatim
- "synthesis-panel frontmatter standard" — .agents/architecture/ADR-065-orchestrator-as-router.md:107

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md | 12 | defined here | Title of ADR-051 establishing structured metadata requirements for design review synthesis panels. |
| .agents/architecture/ADR-065-orchestrator-as-router.md | 107 | used here | Cited as architectural precedent for enforcing structured frontmatter schemas to enable automated CI gates. |

## Consumes
Architect design review evaluations and synthesis panel outcomes.

## Produces
Standardized YAML frontmatter blocks (`status`, `priority`, `reviewer`, `date`, `pr-branch`, `scope`) on design review documents.

## When applied
Applied whenever an architect agent creates or updates a `DESIGN-REVIEW-*.md` document in `.agents/architecture/`.

## Sub-concepts
- frontmatter-schema
- field-semantics
- ci-gate-logic
- gate-override

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The Synthesis Panel Frontmatter Standard establishes a required, machine-readable YAML frontmatter schema for all architect design review documents. Prior to this standard, critical review verdicts were embedded purely in unstructured prose, creating an enforcement gap that allowed pull requests with blocking architect verdicts to be merged. By requiring structured frontmatter, automated CI workflows can deterministically block merges for non-approved evaluations (`NEEDS_CHANGES` or `BLOCKED` at `P0` or `P1`).
