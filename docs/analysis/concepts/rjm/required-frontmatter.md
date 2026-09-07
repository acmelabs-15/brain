---
package: rjm
name: Required Frontmatter
slug: required-frontmatter
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Required Frontmatter

## Definition — verbatim
> "**Required Frontmatter:**" — CONTRIBUTING.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 221 | defined here | Heading defining mandatory YAML frontmatter attributes for shared agent templates. |

## Consumes
Agent description, argument hint, and platform tool configurations.

## Produces
Valid YAML header block required for agent compilation.

## When applied
Applied when creating or validating agent shared templates in `templates/agents/`.

## Sub-concepts
tools_vscode, tools_copilot

## Part of
agent-template-system

## Implementation status
clean

## Design notes
Template specification defining the mandatory metadata fields (`description`, `argument-hint`, `tools_vscode`, `tools_copilot`) that every shared agent definition must declare.
