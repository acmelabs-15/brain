---
package: matt
name: workspace
slug: workspace
kind: name-only
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# workspace

## Definition — verbatim
(used, not defined)
> "Save to the temporary directory of the user's OS - not the current workspace." — skills/productivity/handoff/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/handoff/SKILL.md | 8 | used here | Contrasted with the OS temporary directory as the project repository location that should not receive ephemeral handoffs. |

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
clean

## Design notes
The active project repository directory contrasted with ephemeral storage locations; recorded as a name-only environment concept rather than an independent lifecycle concept.
