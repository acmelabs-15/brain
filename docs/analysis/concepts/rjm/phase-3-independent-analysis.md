---
package: rjm
name: Phase 3 (Independent Analysis)
slug: phase-3-independent-analysis
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3 (Independent Analysis)

## Definition — verbatim
> "### Phase 3: Independent Analysis (3-5 minutes)" — .claude/skills/pre-mortem/SKILL.md:94

## Also called — verbatim
- `Phase 3: Independent Analysis` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:34

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 21 | used here | Cites Phase 3 as an application stage where Gall's Law prompts surface complexity-driven risks. |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 34 | used here | Maps Phase 3 to the Orient stage of the OODA loop for analyzing causes of imagined failure. |
| .claude/skills/pre-mortem/SKILL.md | 94 | defined here | Defines the third operational phase of pre-mortem where participants independently brainstorm failure reasons. |

## Consumes
Project context established during Phase 1 and the failure announcement triggered in Phase 2.

## Produces
Unfiltered lists of 5-10 brainstormed failure causes per participant spanning technical, human, organizational, and external categories.

## When applied
Executed during a pre-mortem exercise immediately after the failure announcement (Phase 2), typically allotted 3 to 5 minutes.

## Sub-concepts
none

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
Phase 3 (Independent Analysis) enforces silent, independent brainstorming before any group discussion occurs. By requiring each participant to record failure causes privately without filtering or debate, it mitigates cognitive biases such as groupthink, social loafing, and hierarchical deference.
