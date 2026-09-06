---
package: matt
name: engineering
slug: engineering
kind: phase
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# engineering

## Definition — verbatim
> "- `engineering/`: daily code work" — CLAUDE.md:3

## Also called — verbatim
`engineering/` — external/wizard.md:59

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/marketplace.json | 13 | used here | Specifies the plugin category in marketplace metadata. |
| CLAUDE.md | 3 | defined here | Defines the engineering bucket for daily code work skills. |
| external/wizard.md | 59 | used here | Notes the graduation of the wizard skill into the promoted engineering bucket. |

## Consumes
Codebase context, repository configuration, issue trackers, and implementation requests.

## Produces
Production code, specifications, regression tests, architecture decisions, and code reviews.

## When applied
Applied during daily software development workflows including planning, writing, testing, and debugging code.

## Sub-concepts
none

## Part of
mattpocock-skills

## Implementation status
clean

## Design notes
`engineering` is the primary promoted bucket and lifecycle categorization in `mattpocock-skills`. Covering the daily engineering lifecycle from discovery and specification to implementation, testing, and upkeep, every skill in the `skills/engineering/` directory is packaged in `.claude-plugin/plugin.json` and documented under `docs/engineering/`.
