---
package: rjm
name: SAFE_NAME_PATTERN
slug: safe-name-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SAFE_NAME_PATTERN

## Definition — verbatim
(used, not defined)

> "SAFE_NAME_PATTERN = re.compile(" — scripts/ai_review_common/verdict.py:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/parse_artifact_insights.py | 32 | used here | Imported from `scripts.ai_review_common` to sanitize artifact names. |
| scripts/ai_review_common/__init__.py | 27 | used here | Re-exported in package initializer for shared review tools. |
| scripts/ai_review_common/quality_gate.py | 8 | used here | Imported from `scripts.ai_review_common.verdict` for validating safe identifier names in quality gate checks. |
| scripts/ai_review_common/verdict.py | 235 | defined here | Regular expression compiled to validate safe alphanumeric names up to 50 characters. |

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
defects: doc-drift, orphan, script-bug, internal-contradiction

## Design notes
A regular expression constant validating safe alphanumeric identifier strings rather than an independent lifecycle concept.
