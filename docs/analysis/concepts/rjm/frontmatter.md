---
package: rjm
name: frontmatter
slug: frontmatter
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/validation/check_spec_id_uniqueness.py, sha256: 3423d17958f2be14d7d061d2172e3818165520ca8603b9374b446c32c95b36fa}
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# frontmatter

## Definition — verbatim
> "# Frontmatter is metadata. A block that has not closed by here is not" — .claude/skills/taste-lints/scripts/taste_lints.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 2 | used here | Cited in docstring for scaffolding new slash commands with frontmatter template. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 5 | used here | Category 1 validation requiring YAML frontmatter with description. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 24 | used here | Defines frontmatter as metadata with bounded line scan limits. |
| scripts/validation/check_spec_id_uniqueness.py | 2 | used here | Docstring describing verification of spec ID frontmatter values. |
| scripts/validation/spec_contradiction.py | 8 | used here | Docstring describing CI gate comparing agent frontmatter against PR descriptions. |

## Consumes
Markdown document headers bounded by `---` delimiters.

## Produces
Structured key-value configuration metadata parsed by agents, commands, and validation scripts.

## When applied
Required on all skills, commands, agent definitions, and formal specifications.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug, other

## Design notes
A standardized YAML metadata block placed at the beginning of markdown documents providing declarative schema attributes (such as name, description, tools, model, and identifiers) that govern routing, execution permissions, and CI validation.
