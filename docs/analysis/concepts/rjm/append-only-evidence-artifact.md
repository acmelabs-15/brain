---
package: rjm
name: append-only evidence artifact
slug: append-only-evidence-artifact
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# append-only evidence artifact

## Definition — verbatim
> "**Rename, never content-merge.** An add/add conflict on an append-only evidence artifact (session logs `.agents/sessions/*`, QA reports `.agents/qa/*`, retrospectives `.agents/retrospective/*`) means two branches wrote different records to the same filename. Keep both files: accept the base branch version at the original name, rename the head branch version with a distinguishing suffix (keep the session number, append an issue or topic slug), and update any index or report that references the renamed file. Never merge the two contents into one file. PR #4856 proved the anti-pattern: merging both sessions' prose into one file would have destroyed two accurate records to produce one false one (`.agents/retrospective/2026-08-10-pr-4856-session-log-collision.md`). Issue #4751 tracks preventing the collision at allocation time." — .claude/skills/merge-resolver/SKILL.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/SKILL.md | 120 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (append-only evidence artifact) utilized within the rjm ecosystem to ensure consistency and systematic execution.
