---
package: rjm
name: YAML Frontmatter Constraints
slug: yaml-frontmatter-constraints
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# YAML Frontmatter Constraints

## Definition — verbatim
(used, not defined)

> "## YAML Frontmatter Constraints" — .agents/governance/PROJECT-CONSTRAINTS.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/PROJECT-CONSTRAINTS.md | 184 | defined here | Section heading mandating block-style arrays for tool declarations in frontmatter. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction

## Design notes
A section heading in PROJECT-CONSTRAINTS.md mandating block-style YAML array syntax for cross-platform Copilot CLI compatibility rather than an independent lifecycle concept.
