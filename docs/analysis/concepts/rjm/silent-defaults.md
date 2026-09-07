---
package: rjm
name: Silent Defaults
slug: silent-defaults
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Silent Defaults

## Definition — verbatim
> "No neutral default for a missing signal: raise or block, never assume PASS" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 238 | defined here | Chronicled as Incident 8 (PR #1965), showing how missing signals defaulted to non-blocking states. |
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 69 | defined here | Settled Battles List entry affirming that missing signals must raise or block rather than assume PASS. |

## Consumes
Exit codes, verdict strings, status flags, and sensory signals.

## Produces
Suppressed failures, masked regressions, and false PASS verdicts.

## When applied
Monitored in parsers, CI gates, and failure mode FM-10 governance.

## Sub-concepts
verdict-laundering

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
`Silent Defaults` is the dangerous anti-pattern of assigning neutral or passing values to missing or truncated status signals. Rooted in FM-10, rjm strictly forbids neutral defaults ("there is no neutral default for a missing signal"), requiring systems to fail closed and raise alarms.
