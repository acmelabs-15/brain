---
package: rjm
name: Impact Analysis
slug: impact-analysis
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Impact Analysis

## Definition — verbatim
(used, not defined)

> "Impact Analysis (Planning Phase)" — .claude/agents/security.md:354

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 354 | defined here | Planning-phase analysis evaluating attack surface changes, threat vectors, security controls, and testing needs. |
| .claude/skills/review/references/analyst.md | 82 | defined here | Code review evaluation assessing impact on call-site readability and verification. |
| .claude/skills/review/references/roadmap.md | 128 | defined here | Strategic review evaluating user value, business impact, technical leverage, and competitive position. |
| templates/agents/security.shared.md | 325 | defined here | Shared template definition for security impact analysis during milestone planning. |

## Consumes
Feature requests, milestone specifications, or proposed code diffs.

## Produces
Structured assessments of downstream consequences across security, code readability, or strategic alignment dimensions.

## When applied
Executed during milestone planning when requested by milestone-planner, and during multi-agent code/roadmap review passes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A cross-cutting evaluation technique used both during planning (to anticipate architectural, security, and operational ramifications of planned changes) and during code/roadmap reviews (to gauge ripple effects on maintainability, readability, and business value).
