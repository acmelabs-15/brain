---
package: rjm
name: FM-8
slug: fm-8
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-8

## Definition — verbatim
> "Security drift" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 90 | used here | Mapped as failure mode FM-8 representing security drift anchored by the 2026-01-04 PR 760 security suppression failure. |

## Consumes
Security scanner rules, secret detection patterns, suppression configs, vulnerability reports.

## Produces
Undetected security vulnerabilities, exposed credentials, or silenced static analysis warnings.

## When applied
When reviewing security gate bypasses, rule suppression additions, or audit findings on insecure code merges.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-8 denotes security drift, where security scanning rules, credential leak detectors, or vulnerability checks are incrementally suppressed, bypassed, or silenced during rapid feature development. In rjm, tracking FM-8 mandates static analysis checklists, unbypassable pre-push security gates, and audit logs of all rule suppressions.
