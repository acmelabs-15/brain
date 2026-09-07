---
package: rjm
name: ai-review
slug: ai-review
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-review

## Definition — verbatim
(used, not defined)

> "Build the ai-review composite action context outside workflow YAML." — scripts/ci/build_ai_review_context.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 161 | used here | Modified in CI action to pin Copilot CLI version and enforce auto-update flags |
| scripts/ci/build_ai_review_context.py | 2 | used here | Builds review context data outside workflow YAML for composite action steps |
| scripts/ci/check_ai_review_infra_gate.py | 2 | used here | Evaluates infrastructure failure skip gate opening Copilot CLI review invocation |
| scripts/ci/diagnose_copilot_cli.py | 1 | used here | Emits Copilot CLI diagnostics and connectivity checks for the composite action |
| scripts/ci/execute_ai_review_post_script.py | 1 | used here | Executes optional post-analysis analysis script following agent review |
| scripts/ci/install_copilot_cli.py | 1 | used here | Installs and verifies the pinned GitHub Copilot CLI release for review action |
| scripts/ci/invoke_copilot_cli.py | 1 | used here | Orchestrates Copilot CLI execution for composite action review steps |
| scripts/ci/load_ai_review_prompt.py | 1 | used here | Loads review prompt template and exports step outputs to workflow environment |
| scripts/ci/parse_ai_review_output.py | 1 | used here | Parses Copilot review output text and publishes action outputs to CI |
| scripts/ci/validate_ai_review_budgets.py | 2 | used here | Validates workflow wall-clock budgets for direct ai-review execution steps |
| scripts/ci/verify_github_auth.py | 1 | used here | Verifies GitHub CLI authentication status for ai-review diagnostics |
| scripts/gh_retry_helpers.py | 1 | used here | Provides GitHub CLI retry and invocation helpers supporting ai-review scripts |

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
defects: orphan, missing-path, doc-drift

## Design notes
ai-review is a GitHub Actions composite action name and workflow directory identifier (`.github/actions/ai-review/action.yml`) rather than an architectural lifecycle concept.
