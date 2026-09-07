---
package: rjm
name: CRITICAL_PATTERNS
slug: critical-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-detection/detect_infrastructure.py, sha256: 81520cf02e43c0bb0325f6ba153a064d22e13d330926138888a3be42ad1afe9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CRITICAL_PATTERNS

## Definition — verbatim
(used, not defined)

> "CRITICAL_PATTERNS = [" — .claude/skills/security-detection/detect_infrastructure.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-detection/detect_infrastructure.py | 20 | defined here | Python regex list matching critical infrastructure files (CI workflows, git hooks, auth modules). |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
CRITICAL_PATTERNS is a Python configuration list constant in detect_infrastructure.py defining file patterns requiring mandatory security review rather than a lifecycle concept.
