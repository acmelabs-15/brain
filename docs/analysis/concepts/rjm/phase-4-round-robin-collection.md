---
package: rjm
name: Phase 4: Round-Robin Collection
slug: phase-4-round-robin-collection
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

# Phase 4: Round-Robin Collection

## Definition — verbatim
> "### Phase 4: Round-Robin Collection (5-10 minutes)" — .claude/skills/pre-mortem/SKILL.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 35 | used here | Maps Phase 4 to the Decide stage of the OODA loop for prioritizing and categorizing failure causes. |
| .claude/skills/pre-mortem/SKILL.md | 114 | defined here | Defines the fourth phase of pre-mortem gathering and categorizing failure reasons round-robin without debate. |

## Consumes
Lists of failure reasons generated during Phase 3 independent analysis.

## Produces
Consolidated, deduplicated pool of failure reasons grouped by category (Technical, People, Process, Organizational, External, Unknown).

## When applied
Executed after independent analysis, taking between 5 and 10 minutes.

## Sub-concepts
none

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
Phase 4: Round-Robin Collection provides a structured intake mechanism where participants contribute failure causes sequentially without immediate debate or justification. This eliminates conversational domination by senior voices, maintains equal contribution, and ensures comprehensive risk capture before mitigation planning.
