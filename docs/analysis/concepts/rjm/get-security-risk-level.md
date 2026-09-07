---
package: rjm
name: get_security_risk_level
slug: get-security-risk-level
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

# get_security_risk_level

## Definition — verbatim
(used, not defined)

> "def get_security_risk_level(file_path: str) -> str:" — .claude/skills/security-detection/detect_infrastructure.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-detection/detect_infrastructure.py | 70 | defined here | Function evaluating a file path against CRITICAL_PATTERNS and HIGH_PATTERNS regexes. |

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
get_security_risk_level is a Python function in detect_infrastructure.py mapping individual file paths to security risk levels rather than an operational lifecycle concept.
