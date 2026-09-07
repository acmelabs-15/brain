---
package: rjm
name: verdict laundering
slug: verdict-laundering
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# verdict laundering

## Definition — verbatim
(used, not defined)

> "`dict.get(key, default)` on required keys, verdict laundering, `|| true`)." — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 252 | defined here | Listed among FM-10 code shapes where failing tool outcomes are scrubbed into passing statuses. |

## Consumes
Failing command outputs, non-zero exit codes, and broken validation gate results.

## Produces
Artificially sanitized zero exit codes that mask real underlying system failures in CI.

## When applied
Audited in shell wrappers, CI workflows, and Python exit-code translators.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
`verdict laundering` refers to the practice of scrubbing, coercing, or swallowing failure indicators (such as appending `|| true` or swallowing errors with fallback defaults) to make a failing step appear green in CI. It directly violates rjm's fail-closed philosophy.
