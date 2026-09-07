---
package: rjm
name: Phase 5 (Review and Mitigate)
slug: phase-5-review-and-mitigate
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

# Phase 5 (Review and Mitigate)

## Definition — verbatim
> "### Phase 5: Review and Mitigate (10-15 minutes)" — .claude/skills/pre-mortem/SKILL.md:140

## Also called — verbatim
- `Phase 5: Review and Mitigate` — .claude/skills/pre-mortem/references/strategy-ooda-loop.md:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 21 | used here | Cites Phase 5 as an application stage where Gall's Law mitigation patterns are applied. |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 36 | used here | Maps Phase 5 to the Act stage of the OODA loop for assigning mitigations, owners, and review dates. |
| .claude/skills/pre-mortem/SKILL.md | 140 | defined here | Defines the final phase of pre-mortem assessing likelihood and impact and establishing mitigation plans. |

## Consumes
Categorized failure reasons produced during Phase 4 round-robin collection.

## Produces
Scored risk items (likelihood and impact from 1 to 5), designated risk owners, Prevention/Detection/Response mitigation plans, and an action items schedule.

## When applied
Executed as the final step of the pre-mortem risk identification workflow, typically taking 10 to 15 minutes.

## Sub-concepts
none

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
Phase 5 (Review and Mitigate) transitions prospective hindsight from risk discovery into concrete engineering accountability. By mandating quantitative likelihood/impact scoring and a Prevention/Detection/Response mitigation triad for high-priority items, it ensures that risks are systematically owned and reviewed rather than merely acknowledged.
