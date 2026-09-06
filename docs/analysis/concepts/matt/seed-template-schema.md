---
package: matt
name: seed-template schema
slug: seed-template-schema
kind: template
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# seed-template schema

## Definition — verbatim
> "A second skill (or a `--verify` flag) for checking whether `docs/agents/*.md` artifacts still match the seed-template schema would duplicate work the existing setup skill already handles in conversation." — .out-of-scope/setup-skill-verify-mode.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/setup-skill-verify-mode.md | 7 | defined here | Refers to the canonical baseline structural schema defined by seed templates in `setup-matt-pocock-skills`. |

## Consumes
Seed template definitions bundled with setup skills.

## Produces
Structural expectations against which emitted repository configuration files can be checked for drift.

## When applied
During initial configuration generation and subsequent verification passes in consumer repositories.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The seed-template schema defines the canonical structure and frontmatter layout for agent configuration files, establishing the baseline against which prompt-driven verification assesses configuration drift.
