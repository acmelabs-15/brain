---
package: addy
name: .windsurfrules
slug: windsurfrules
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/windsurf-setup.md, sha256: 1410af016060047d1a265365f8d98aadd00a58bcfa2a048edec06d61d337cd97}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .windsurfrules

## Definition — verbatim
> "Windsurf uses `.windsurfrules` for project-specific agent instructions:" — docs/windsurf-setup.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/windsurf-setup.md | 7 | used | Documents the project-specific configuration file used by Windsurf for agent instructions. |
| skills/context-engineering/SKILL.md | 76 | used | Listed as an equivalent rules file for Windsurf alongside other IDE rules files. |

## Consumes
Core skills concatenated or configured for project-specific workflows.

## Produces
Persistent project-level instructions loaded by the Codeium Windsurf IDE.

## When applied
When configuring the Windsurf IDE to follow agent skills on a project.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`.windsurfrules` provides the project-level persistence mechanism for injecting agent instructions into the Windsurf IDE. In addy's setup guidance, it serves as the container for combining 2-3 essential skills into active context, ensuring consistent agent behavior without exceeding IDE context bounds.
