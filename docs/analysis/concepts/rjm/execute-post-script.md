---
package: rjm
name: execute_post_script
slug: execute-post-script
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# execute_post_script

## Definition — verbatim
(used, not defined)

> "def execute_post_script(" — scripts/ci/execute_ai_review_post_script.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/execute_ai_review_post_script.py | 59 | defined here | Function locating and executing custom post-analysis hook scripts with review findings. |

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
defects: orphan, script-bug

## Design notes
A script execution runner function invoking post-analysis hook scripts rather than an operational lifecycle concept.
