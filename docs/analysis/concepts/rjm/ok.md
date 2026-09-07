---
package: rjm
name: OK
slug: ok
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OK

## Definition — verbatim
> "- OK: the change is safe to merge; no unmitigated finding at or above MEDIUM." — .claude/skills/security-review/SKILL.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 190 | defined here | Security review verdict emitted when a change is safe to merge with no unmitigated finding at or above medium severity. |
| scripts/eval/eval-agent-vs-baseline.py | 100 | used here | Leading verdict token required by the standardized output shape contract for agent and baseline evaluation variants. |

## Consumes
Threat model analysis demonstrating absence of attack surface or confirming all findings are below medium severity.

## Produces
An unblocking security approval verdict allowing the code change to proceed.

## When applied
Returned when a complete diff reveals no unmitigated medium or higher risks, even if the change is trivial (e.g., pure renames or comment edits).

## Sub-concepts
none

## Part of
verdict-taxonomy

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
The positive approval verdict in inline security review and evaluation. OK unblocks changes where the threat model demonstrates that no reachable attack surface exists or that all residual risks are below the medium threshold, preventing unnecessary escalations on safe modifications.
