---
package: rjm
name: Action Phase
slug: action-phase
kind: phase
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Action Phase

## Definition — verbatim
> "5. **Action Phase**: Create GitHub issue if implementation work identified, via `python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/github/scripts/issue/new_issue.py\"`" — .claude/commands/research.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 51 | defined here | Fifth and final phase in `/research`, converting actionable findings into tracked GitHub issues. |

## Consumes
Identified technical gaps or proposed architectural improvements from the research analysis.

## Produces
Newly created GitHub issue tracking the concrete implementation work.

## When applied
When research concludes with actionable engineering tasks that should enter the project backlog.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
The closure phase that translates theoretical insights into operational backlog items. If research reveals actionable engineering work, this phase ensures that findings do not evaporate in closed chat threads by publishing formal issues via the github skill scripts.
