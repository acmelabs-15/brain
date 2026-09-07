---
package: rjm
name: allowed-tools
slug: allowed-tools
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-030-skills-pattern-superiority.md, sha256: 2b4476fb3d8bdabdef259ffe5e1758e9ae519b3575b1d85b21319793202765bd}
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# allowed-tools

## Definition — verbatim
(used, not defined)

> "allowed-tools: Read, Grep   # Optional (Official): tool restrictions" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-030-skills-pattern-superiority.md | 39 | used here | Architecture diagram illustrating tool permission binding for the GitHub skill. |
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 119 | defined here | Specification of optional frontmatter field defining tool restrictions. |
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 93 | used here | Default frontmatter template variable for generated slash commands. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 7 | used here | Security gate requiring allowed-tools when bash execution syntax is present. |
| .claude/skills/slashcommandcreator/SKILL.md | 56 | used here | Frontmatter schema rule mandating tool restrictions for commands using bash execution or file references. |

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
defects: missing-path, doc-drift, exit-code-mismatch, internal-contradiction, script-bug

## Design notes
YAML frontmatter configuration field defining the whitelist of executable tools available to an agent, skill, or slash command, not an operational lifecycle concept.
