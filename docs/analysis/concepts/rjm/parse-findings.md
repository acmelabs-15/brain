---
package: rjm
name: parse_findings
slug: parse-findings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_findings

## Definition — verbatim
(used, not defined)

> "def parse_findings(json_str: str) -> dict[str, Any]:" — .github/scripts/invoke_pr_comment_processing.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_comment_processing.py | 44 | defined here | Parses AI findings JSON payloads and strips markdown code fences if present. |
| .github/scripts/parse_artifact_insights.py | 144 | defined here | Parses FINDING blocks from raw AI output into structured Finding dataclass instances. |

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
defects: doc-drift, orphan, script-bug

## Design notes
parse_findings is a Python parser function identifier in triage and insight analysis scripts rather than an SDLC lifecycle concept, classified as name-only per D-023.
