---
package: rjm
name: information hiding by naming
slug: information-hiding-by-naming
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# information hiding by naming

## Definition — verbatim
> "`pr-quality-` prefix means the same thing. This is information hiding by naming:" — .agents/architecture/ADR-064-commands-to-skills-migration.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 215 | defined here | Defined as the architectural naming pattern embedding directory namespaces into flat file prefixes to support Copilot CLI. |

## Consumes
Nested hierarchical command directories (e.g. `.claude/commands/pr-quality/*`).

## Produces
Flat, prefixed skill filenames (e.g. `pr-quality-*`) encoding namespace semantics without nested folders.

## When applied
Used when flattening directory structures for compatibility with platforms that do not support nested skill paths.

## Sub-concepts
none

## Part of
commands-to-skills-migration

## Implementation status
defects: doc-drift

## Design notes
Information hiding by naming is a structural adaptation pattern in rjm. Because Claude Code supported hierarchical subdirectories under `.claude/commands/` while Copilot CLI only resolves top-level skills, rjm encodes the logical namespace directly into the skill name prefix (e.g. `pr-quality-check`). This maintains clear semantic grouping and backward familiarity for users without relying on nested directory structures that fail on other harnesses.
