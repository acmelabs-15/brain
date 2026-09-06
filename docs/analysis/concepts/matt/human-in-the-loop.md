---
package: matt
name: human-in-the-loop
slug: human-in-the-loop
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# human-in-the-loop

## Definition — verbatim
(used, not defined)

> "A [human-in-the-loop](https://www.aihero.dev/ai-coding-dictionary/human-in-the-loop) bash script, last resort. The skill ships `scripts/hitl-loop.template.sh` for this: the agent runs the script, you follow prompts in your terminal, and your answers come back as parseable output." — docs/engineering/diagnosing-bugs.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 36 | used here | Ranked as the tenth and last-resort option for constructing a feedback loop when automated methods fail. |
| external/diagnosing-bugs.md | 43 | used here | Described in external documentation as an interactive terminal prompting script used as a fallback. |

## Consumes
Human manual verification responses via interactive terminal prompts.

## Produces
Parseable command exit codes and outputs indicating pass or fail status.

## When applied
As a last resort in Phase 1 of bug diagnosis when an unattended automated repro cannot be constructed.

## Sub-concepts
scripts-hitl-loop-template-sh

## Part of
diagnosing-bugs

## Implementation status
clean in core concept; documented security scanner false positive in docs/engineering/diagnosing-bugs.md:74 due to shipped shell script

## Design notes
A fallback verification pattern where the agent interacts with a human operator via terminal prompts to determine pass/fail status when an automated test harness cannot be built.
