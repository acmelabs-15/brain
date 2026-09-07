---
package: rjm
name: format_json_output
slug: format-json-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
  - {path: .claude/skills/slo-designer/scripts/calculate_error_budget.py, sha256: c93bcddda600634ae423a52f821863f60cf8a9638f4a78f311523f24840c7d1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_json_output

## Definition — verbatim
(used, not defined)

> "def format_json_output(result: ScanResult) -> str:" — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 269 | defined here | Function formatting security scanner results into structured schema version 2 JSON. |
| .claude/skills/slo-designer/scripts/calculate_error_budget.py | 171 | defined here | Function formatting SLO error budget calculations and burn rates into JSON. |

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
defects: doc-drift, script-bug, cross-file-contradiction, exit-code-mismatch

## Design notes
format_json_output is a Python helper function implemented across several CLI scripts to serialize script outputs into JSON rather than an agent lifecycle concept.
