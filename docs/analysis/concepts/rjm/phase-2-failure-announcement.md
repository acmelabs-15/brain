---
package: rjm
name: Phase 2: Failure Announcement
slug: phase-2-failure-announcement
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 2: Failure Announcement

## Definition — verbatim
> "### Phase 2: Failure Announcement (30 seconds)" — .claude/skills/pre-mortem/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 33 | used here | Maps Phase 2 to the Orient stage of the OODA loop for shifting mindset from optimism to prospective hindsight. |
| .claude/skills/pre-mortem/SKILL.md | 84 | defined here | Defines the second phase of pre-mortem declaring catastrophic project failure in the past tense. |

## Consumes
Completed Phase 1 project brief and established timeline endpoint.

## Produces
Psychological safety and prospective hindsight framing that prompts participants to identify failure causes.

## When applied
Executed immediately following the project brief, taking approximately 30 seconds.

## Sub-concepts
none

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
Phase 2: Failure Announcement is the psychological turning point of the pre-mortem. By stating unconditionally that the project has failed spectacularly in the past tense, it dissolves the social pressure to display optimism and encourages uninhibited, candid risk reporting.
