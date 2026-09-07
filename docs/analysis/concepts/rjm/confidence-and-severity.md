---
package: rjm
name: Confidence and Severity
slug: confidence-and-severity
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Confidence and Severity

## Definition — verbatim
> "Rate every finding 0-100. Report only findings scored 80 or higher:" — .claude/agents/code-reviewer.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 68 | defined here | Quantitative scoring model rating findings 0-100 and suppressing issues below confidence threshold 80. |
| templates/agents/code-reviewer.shared.md | 78 | defined here | Quantitative scoring model rating findings 0-100 and suppressing issues below confidence threshold 80. |

## Consumes
Candidate code review findings, bug reports, and convention observations.

## Produces
Scored review findings categorized into Critical (90-100), High (80-89), or suppressed (<80).

## When applied
Applied during code review before formatting the final findings list.

## Sub-concepts
none

## Part of
code-reviewer

## Implementation status
clean

## Design notes
Confidence and Severity establishes an objective numerical threshold (0-100 scale) for code review findings, suppressing all observations scored below 80. This eliminates review noise, style nits, and speculative concerns, ensuring developers only receive actionable, high-confidence defect reports with verified impact.
