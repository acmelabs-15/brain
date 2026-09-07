---
package: rjm
name: Path-scoped instructions
slug: path-scoped-instructions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Path-scoped instructions

## Definition — verbatim
> "Before editing any file, read matching rules in `.claude/rules/*.md`. Each file's `applyTo` frontmatter targets a path glob." — CLAUDE.md:37

## Also called — verbatim
> "## Path-scoped instructions" — CLAUDE.md:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 35 | defined here | Section heading prescribing pre-edit rule lookup based on path glob pattern matches. |

## Consumes
Target file path to be edited, and matching glob-based rule definitions in `.claude/rules/*.md`.

## Produces
Contextually activated instruction constraints and conventions bound to the target file path.

## When applied
Mandatory precondition evaluated before any file modification operation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Context-minimization pattern ensuring that domain-specific coding guidelines are loaded just-in-time based on file path globs rather than loaded globally.
