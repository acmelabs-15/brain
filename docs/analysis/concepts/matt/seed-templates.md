---
package: matt
name: seed templates
slug: seed-templates
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

# seed templates

## Definition — verbatim
(used, not defined)
> "The skill is prompt-driven, so the maintainer can scope it to a verification pass (\"don't rewrite anything, just check my existing files against the current seed templates and report drift\") without needing a separate code path." — .out-of-scope/setup-skill-verify-mode.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/setup-skill-verify-mode.md | 9 | used here | Standard starter templates against which repository configuration documents are generated and verified. |

## Consumes
Skill installation packages.

## Produces
Baseline markdown files for issue tracking, domain docs, and triage labels in target projects.

## When applied
During initial execution of `/setup-matt-pocock-skills` to scaffold project agent configuration.

## Sub-concepts
none

## Part of
seed-template-schema

## Implementation status
clean

## Design notes
Seed templates provide the baseline configuration content packaged within setup skills, allowing agents to populate new project repositories with standardized markdown files without requiring remote network fetching.
