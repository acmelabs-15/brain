---
package: matt
name: triage label vocabulary
slug: triage-label-vocabulary
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# triage label vocabulary

## Definition — verbatim
(used, not defined)
> "Engineering skills depend on per-repo config (issue tracker, triage label vocabulary, domain doc layout) seeded by `/setup-matt-pocock-skills`." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3

## Also called — verbatim
> "| **Triage labels** | keep the five canonical names (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) | only if the `triage` skill is installed |" — docs/engineering/setup-matt-pocock-skills.md:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 3 | used here | Named as one of the three core per-repo configurations seeded by setup |

## Consumes
User selections during `/setup-matt-pocock-skills` or existing issue labels in the repository.

## Produces
Committed mapping table in `docs/agents/triage-labels.md` linking canonical roles to repository-specific label strings.

## When applied
When `triage` or `to-spec` applies status labels to issues or queries issues by triage state.

## Sub-concepts
none

## Part of
per-repo-config

## Implementation status
clean

## Design notes
The mapping between five canonical triage roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) and actual tracker label strings. Configured per-repo in `docs/agents/triage-labels.md`, this vocabulary prevents hardcoding label strings across skills, allowing teams with existing label conventions (e.g. `status:ready`, `type/bug`) to adopt skills without changing their taxonomy.
