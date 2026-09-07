---
package: rjm
name: AI_REVIEW_DIR
slug: ai-review-dir
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/workflow.py, sha256: afc062433185e6daf4a066162000ab7a13caa0b4e33383ff2dd450065de240ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI_REVIEW_DIR

## Definition — verbatim
(used, not defined)

> "review_dir = os.environ.get(\"AI_REVIEW_DIR\", \"\")" — scripts/ai_review_common/workflow.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/workflow.py | 23 | used here | Environment variable queried to determine the working filesystem directory for review execution artifacts. |

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
`AI_REVIEW_DIR` is an environment variable identifier specifying the storage directory for AI review working artifacts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
