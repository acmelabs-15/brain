---
package: rjm
name: Firm finding
slug: firm-finding
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Firm finding

## Definition — verbatim
> "- `Firm finding`: directly supported by the user's answer or confirmed prior record." — .claude/skills/world-model-diagnostic/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 52 | defined here | Mandatory diagnostic finding classification applied to statements directly supported by user answers or verified records. |

## Consumes
Direct user statements, confirmed repository artifacts, and validated historical records.

## Produces
Verified, factually grounded conclusions in diagnostic reports.

## When applied
Enforced under Non-Negotiable Rule 2 when labeling diagnostic conclusions.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
An epistemic classification in rjm requiring assertions to be explicitly anchored in observable facts or confirmed user statements. By distinguishing firm findings from inferences, it prevents diagnostic assessments from presenting speculative deductions as established ground truth.
