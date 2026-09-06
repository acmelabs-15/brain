---
package: addy
name: skill-gap
slug: skill-gap
kind: template
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: .github/ISSUE_TEMPLATE/skill-gap.yml, sha256: f6a7748bfe8a1a43c42c7a5e7317c66689b66afd514ee091eb6f8ce07e46d5a4}
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skill-gap

## Definition — verbatim
> "title: \"[skill-gap]: \"" — .github/ISSUE_TEMPLATE/skill-gap.yml:3

## Also called — verbatim
`Skill gap` — .github/ISSUE_TEMPLATE/skill-gap.yml:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/ISSUE_TEMPLATE/skill-gap.yml | 3 | defines | Defines the title format for the skill gap issue reporting template. |
| CONTRIBUTING.md | 116 | references | Directs contributors to use the skill gap issue form when guidance fails. |

## Consumes
Observed skill failures, outdated instructions, ecosystem incompatibilities, and project context

## Produces
A structured GitHub issue containing the affected skill, excerpt, project context, failure description, and workaround

## When applied
Used whenever a skill provides inaccurate, obsolete, or inapplicable instructions in a specific project context.

## Sub-concepts
affected-skill, relevant-instruction-or-excerpt, project-context, what-did-not-work-or-did-not-apply, what-you-did-instead

## Part of
none

## Implementation status
defects: orphan (.github/ISSUE_TEMPLATE/skill-gap.yml:1 issue template is not invoked by repository workflows)

## Design notes
The skill-gap template provides a structured feedback mechanism for reporting defects in skill guidance. Rather than freeform bug reports, it collects the exact misleading excerpt, environment details, and workarounds to enable maintainers to rapidly triage and repair skill instructions.
