---
package: matt
name: docs/agents/issue-tracker.md
slug: docs-agents-issue-tracker-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/agents/issue-tracker.md

## Definition — verbatim
(used, not defined)
> "1. Issue references in the commit messages (`#123`, `Closes #45`, a GitLab `!67`), fetched through `docs/agents/issue-tracker.md`." — docs/engineering/code-review.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 28 | used here | Identified as the repository file through which code review fetches commit issue references. |

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
defects: missing-path (emitted into target repositories by setup-matt-pocock-skills but absent in the skills repository itself)

## Design notes
A generated repository configuration file path describing the active issue tracker integration, rather than an active development lifecycle concept.
