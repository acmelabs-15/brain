---
package: matt
name: HITL bash script
slug: hitl-bash-script
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HITL bash script

## Definition — verbatim
> "10. **HITL bash script.** Last resort. If a human must click, drive _them_ with `scripts/hitl-loop.template.sh` so the loop is still structured. Captured output feeds back to you." — skills/engineering/diagnosing-bugs/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 35 | defined here | Listed as the tenth and last-resort way to construct a feedback loop when human interaction is required. |

## Consumes
Interactive reproduction steps requiring human actions (OAuth authentication, physical devices, UI clicks).

## Produces
A structured interactive reproduction script based on `scripts/hitl-loop.template.sh` returning captured `KEY=VALUE` output to the agent.

## When applied
As a last resort when a bug cannot be automated headlessly and requires human manual action.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A human-in-the-loop debugging technique using an interactive bash script to guide human actions and capture observations as structured key-value output. This ensures that even un-automatable bugs retain a structured, repeatable feedback loop.
