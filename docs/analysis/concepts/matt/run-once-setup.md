---
package: matt
name: run-once setup
slug: run-once-setup
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# run-once setup

## Definition — verbatim
> "a **run-once setup** (`setup-matt-pocock-skills`)" — .agents/writing-docs.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 66 | defined here | Identifies setup-matt-pocock-skills as the exemplar of the run-once setup role. |
| external/setup-matt-pocock-skills.md | 70 | defined here | Defines setup-matt-pocock-skills as the one-time configuration operation preparing a repo for engineering skills. |

## Consumes
Initial project repository configuration and tracker preferences.

## Produces
Scaffolded configuration files in docs/agents/ needed by downstream engineering skills.

## When applied
Executed once when adopting the skill set or initializing a new repository.

## Sub-concepts
none

## Part of
Where it fits

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A lifecycle role designating initialization skills (like setup-matt-pocock-skills) that configure the repository environment, scaffolding issue tracker integrations and directory conventions once before regular workflows begin.
