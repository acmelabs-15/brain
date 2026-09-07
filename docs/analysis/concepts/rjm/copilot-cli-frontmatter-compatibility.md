---
package: rjm
name: copilot-cli-frontmatter-compatibility
slug: copilot-cli-frontmatter-compatibility
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

# copilot-cli-frontmatter-compatibility

## Definition — verbatim
(used, not defined)

> "(copilot-cli-frontmatter-compatibility) originally constrained frontmatter fields" — .agents/architecture/ADR-064-commands-to-skills-migration.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 85 | used here | Cited from ADR-044 as the constraint baseline governing frontmatter schema compatibility for Copilot CLI. |

## Consumes
YAML frontmatter specifications across Claude Code and Copilot CLI harnesses.

## Produces
Compatibility constraints and schema validators ensuring frontmatter fields parse cleanly across both platforms.

## When applied
Applied when defining or generating skill and rule frontmatter intended for cross-harness execution.

## Sub-concepts
none

## Part of
cross-harness-parity

## Implementation status
defects: doc-drift

## Design notes
`copilot-cli-frontmatter-compatibility` refers to the architectural schema rules established in ADR-044 (and later updated in ADR-094) governing frontmatter attributes. Because Claude Code and Copilot CLI parse YAML frontmatter with different schema tolerances, this concept ensures skill and rule generators emit only fields that both harnesses support, preventing syntax rejections or execution failures in Copilot environments.
