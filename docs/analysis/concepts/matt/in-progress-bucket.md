---
package: matt
name: in-progress bucket
slug: in-progress-bucket
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# in-progress bucket

## Definition — verbatim
(used, not defined)

> "Add the `implement-spec` skill (in-progress bucket, user-invoked)." — .changeset/add-implement-spec-skill.md:5

## Also called — verbatim
`In Progress` — skills/in-progress/README.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Identifies the categorization bucket into which implement-spec is placed upon initial release. |

## Consumes
Experimental, emerging, or beta skills under active iteration.

## Produces
Publicly installable beta skills excluded from the default plugin distribution and top-level documentation.

## When applied
Applied to stage and distribute experimental skills (`skills/in-progress/`) prior to full graduation into stable buckets.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A repository categorization pattern designating experimental or beta skills residing under `skills/in-progress/`. These skills are distributed publicly via explicit npx package installation commands, allowing early testing and feedback while keeping them excluded from the core plugin manifest and official documentation until mature.
