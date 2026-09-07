---
package: matt
name: issues/<NN>-<slug>.md
slug: issues-nn-slug-md
kind: artifact
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issues/<NN>-<slug>.md

## Definition — verbatim
> "Implementation issues are one file per ticket at `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`, never a single combined tickets file" — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 9 | used here | Specifies file naming pattern and per-ticket file storage layout for local markdown issues. |

## Consumes
Feature specification (`spec.md`) broken down by the to-tickets skill.

## Produces
Individual numbered markdown ticket files ready for independent claiming and implementation.

## When applied
When decomposing a feature spec into discrete, numbered tasks in local-markdown tracking.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The file path convention for discrete implementation tickets in the local markdown tracker. Storing one ticket per file prevents multi-agent write conflicts and maintains clear task boundaries.
