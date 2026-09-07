---
package: rjm
name: Block-style arrays
slug: block-style-arrays
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Block-style arrays

## Definition — verbatim
> "**Required Format**: Block-style arrays (hyphen-bulleted)" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:333

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 333 | defined here | Specified as the mandatory YAML array syntax for cross-platform frontmatter compatibility. |
| .agents/governance/PROJECT-CONSTRAINTS.md | 188 | used here | Mandated in project constraints for tool fields in agent, prompt, and command frontmatter. |

## Consumes
Frontmatter metadata schemas and array-formatted property values (tools, allowed-tools, tags).

## Produces
Valid, parser-agnostic YAML frontmatter blocks compatible across VS Code, Copilot CLI, and Claude Code engines.

## When applied
Applied when formatting multi-element frontmatter fields in all agents, prompts, commands, and skills.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
A YAML frontmatter authoring pattern mandating hyphen-bulleted block arrays instead of inline bracketed flow arrays. This standard prevents serialization bugs and parser inconsistencies across Claude Code, GitHub Copilot CLI, and custom generator scripts.
