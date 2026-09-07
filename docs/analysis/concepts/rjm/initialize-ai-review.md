---
package: rjm
name: initialize_ai_review
slug: initialize-ai-review
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/workflow.py, sha256: afc062433185e6daf4a066162000ab7a13caa0b4e33383ff2dd450065de240ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# initialize_ai_review

## Definition — verbatim
(used, not defined)

> "Create the AI review working directory if it does not exist." — scripts/ai_review_common/workflow.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 36 | used here | Imported and invoked to ensure the review output directory exists before generating reports. |
| scripts/ai_review_common/quality_gate.py | 24 | used here | Imported to initialize the review directory structure before running quality gate checks. |
| scripts/ai_review_common/workflow.py | 17 | defined here | Utility function creating and returning the directory path for AI review artifacts. |

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
defects: orphan, missing-path, script-bug, internal-contradiction

## Design notes
`initialize_ai_review` is a utility function identifier in `workflow.py` ensuring the temporary review directory exists before review artifacts are written rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
