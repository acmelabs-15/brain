---
package: rjm
name: get_staged_files
slug: get-staged-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-detection/detect_infrastructure.py, sha256: 81520cf02e43c0bb0325f6ba153a064d22e13d330926138888a3be42ad1afe9f}
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_staged_files

## Definition — verbatim
(used, not defined)

> "def get_staged_files() -> list[str]:" — .claude/skills/security-detection/detect_infrastructure.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-detection/detect_infrastructure.py | 80 | defined here | Retrieves staged file names from git diff --cached --name-only for infrastructure analysis. |
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 159 | defined here | Queries git diff --cached to obtain staged files for vulnerability scanning. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 201 | defined here | Returns sorted list of staged files from git diff --cached for deterministic style linting. |

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
defects: doc-drift, other

## Design notes
get_staged_files is a Python utility function implemented across several CLI scripts to inspect staged Git files rather than an independent lifecycle concept.
