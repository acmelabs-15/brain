---
package: rjm
name: Drift-gate failures
slug: drift-gate-failures
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Drift-gate failures

## Definition — verbatim
> "The output shows a difference, not a direction. Identify the canonical side before editing anything" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 68 | defined here | Settled battle position establishing that drift output indicates difference rather than edit direction, mandating canonical identification before editing. |

## Consumes
Drift detection output, diff between canonical sources and generated artifacts.

## Produces
Correct remediation direction (regenerating from canonical source rather than editing source to match generated artifact).

## When applied
When any drift gate (agent templates, build_all, sync_plugin_lib, etc.) reports a mismatch during local verification or CI.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
Drift-gate failures represent a critical failure mode where agents misinterpret drift gate output (which shows difference between files) as a directive to edit whichever file is easier, often modifying the canonical source to match stale generated output. In rjm's architecture, this settled battle codifies the principle that canonical sources must always be identified first and updated, followed by rerunning generators, preventing backwards propagation of stale or incorrect state.
