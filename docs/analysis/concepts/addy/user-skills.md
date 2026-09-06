---
package: addy
name: User skills
slug: user-skills
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# User skills

## Definition — verbatim
(used, not defined)
> "| **User skills** (optional) | `~/.cursor/skills/` | Global skills available in every workspace |" — docs/cursor-setup.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 16 | used here | Defined in table as ~/.cursor/skills/ providing global skills in every workspace. |

## Consumes
User-authored or user-installed skill definitions located in the user home directory.

## Produces
Globally available agent workflows accessible across all projects on the local machine.

## When applied
Loaded on demand in any workspace session when the active task matches a globally installed skill.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
User skills provide a personal repository of agent skills stored globally in the user directory (`~/.cursor/skills/`). They make customized engineering workflows and personal automations available across all local workspaces without modifying individual project repositories.
