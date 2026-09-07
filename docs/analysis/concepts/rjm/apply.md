---
package: rjm
name: Apply
slug: apply
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Apply

## Definition — verbatim
> "What skill updates or process changes follow?" — .claude/skills/retrospective/references/frameworks.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 23 | defined here | Step 4 of the 4-Step Debrief determining skill updates, process changes, and actionable improvements. |
| scripts/eval/README.md | 495 | defined here | Optimizer CLI subcommand that applies bounded candidate patches to an artifact file. |

## Consumes
Analyzed retrospective insights or validated prompt/artifact optimization diffs.

## Produces
Actionable skill updates, process modifications, or patched artifact files.

## When applied
Applied in Step 4 of the 4-Step Debrief to translate retrospective insights into process/skill changes, or executed during prompt evaluation loops to apply proposed mutations.

## Sub-concepts
none

## Part of
4-step-debrief

## Implementation status
defects: missing-path, doc-drift, script-bug in scripts/eval/README.md; clean in .claude/skills/retrospective/references/frameworks.md

## Design notes
Apply appears in two distinct roles in the rjm package: as the final action-oriented phase of the 4-Step Debrief converting analytical findings into systemic skill updates, and as an eval optimizer CLI subcommand that modifies candidate artifact files with bounded patches. In both contexts, it represents the transition from analysis to concrete modification.
