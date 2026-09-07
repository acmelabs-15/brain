---
package: rjm
name: DROID
slug: droid
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bootstrap-vm.sh, sha256: a04fdf031ec3cd4858fbeef8991fc72ace1274da92327620cfc473b59bae43d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DROID

## Definition — verbatim
(used, not defined)

> "# Bootstrap Ubuntu VM for ai-agents repository (DROID/Factory.ai)" — scripts/bootstrap-vm.sh:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bootstrap-vm.sh | 2 | used here | Named in script header comment as a target virtual machine environment for repository bootstrapping. |

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
defects: missing-path, doc-drift

## Design notes
DROID is an external agent platform or VM environment name cited in script comments rather than a lifecycle concept.
