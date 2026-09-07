---
package: rjm
name: Architectural Alignment
slug: architectural-alignment
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architectural Alignment

## Definition — verbatim
> "### 3. Architectural Alignment (defer to the architect axis)" — .claude/skills/review/references/analyst.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/analyst.md | 87 | defined here | Focus area instructing analyst reviewers to defer architectural concerns to the architect axis. |

## Consumes
Architectural patterns and design decisions visible in a PR diff.

## Produces
Deferral of structural architectural findings to the architect axis while reviewing expression readability.

## When applied
Applied during analyst review when architectural patterns or structural decisions are encountered.

## Sub-concepts
none

## Part of
analyst

## Implementation status
clean

## Design notes
An analyst review focus area in rjm that enforces boundary discipline by mandating that high-level architectural patterns, anti-patterns, and module boundaries are deferred to the architect axis.
