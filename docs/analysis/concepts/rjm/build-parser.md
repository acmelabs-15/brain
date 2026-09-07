---
package: rjm
name: build_parser
slug: build-parser
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
  - {path: .codeql/scripts/install_codeql.py, sha256: 9a0a3b59f671c9f1ae78245806b03e827f679f49145347dc81d37ef1772f16f0}
  - {path: .codeql/scripts/install_codeql_integration.py, sha256: adbf946c456edd42fee06b3b1b9f5aa133615fc62a8ef671279817400e886012}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: .github/scripts/parse_feature_review.py, sha256: a2dc22ac513a841bb2088d12659ef8126e08cc1bf396f3a5c04b3e72f7938951}
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
  - {path: .github/scripts/set_item_milestone.py, sha256: ce831ca6f6b26304284c8e4b1adf94e2f46165b58f91459c8b95ef1d3a6dbd1b}
  - {path: .github/scripts/validate_investigation_claims.py, sha256: 1f0feb2769dc14326138f021a99ada12834bbe4fa94539850b90fdc0c55b233a}
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
  - {path: scripts/ci/verify_codeql_artifacts.py, sha256: abda124f6dbe8089fa9e0659ed6070f298394457ab3a81a9543008035bec8e46}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
  - {path: scripts/maintenance/repair_packed_refs.py, sha256: c0e763bf8c2cc05cf4c726dc8efc6fc169cbc3330fbc39cae78bb5aceb3b6e14}
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
  - {path: scripts/update_memory_index_tokens.py, sha256: 7fb67cc56917e1fef3076e74f714b60137c1d81223e031fb057cf29820598fea}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
  - {path: scripts/validation/token_budget.py, sha256: 02ab5e547356da50e609eac3e1cf435dc4ab028583074fe3a9f445757651ffe4}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_parser

## Definition — verbatim
(used, not defined)

> "def build_parser() -> argparse.ArgumentParser:" — .claude/skills/slashcommandcreator/scripts/new_slash_command.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 26 | defined here | Constructs argparse parser for command scaffolding arguments. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 26 | defined here | Constructs argparse parser for command validation options. |
| .codeql/scripts/get_codeql_diagnostics.py | 31 | defined here | Constructs argparse parser for CodeQL diagnostics retrieval. |
| .codeql/scripts/install_codeql_integration.py | 28 | defined here | Constructs argparse parser for CodeQL integration installer. |
| .codeql/scripts/install_codeql.py | 29 | defined here | Constructs argparse parser for CodeQL CLI installation script. |
| .github/scripts/generate_spec_report.py | 42 | defined here | Constructs argparse parser for spec report generation. |
| .github/scripts/invoke_pr_comment_processing.py | 262 | defined here | Constructs argparse parser for PR comment handling automation. |
| .github/scripts/invoke_pr_maintenance.py | 519 | defined here | Constructs argparse parser for PR maintenance workflow orchestration. |
| .github/scripts/measure_workflow_coalescing.py | 596 | defined here | Constructs argparse parser for workflow coalescing measurement. |
| .github/scripts/parse_feature_review.py | 30 | defined here | Constructs argparse parser for feature review parsing. |
| .github/scripts/post_issue_comment.py | 137 | defined here | Constructs argparse parser for posting issue comments. |
| .github/scripts/set_item_milestone.py | 201 | defined here | Constructs argparse parser for setting project item milestones. |
| .github/scripts/validate_investigation_claims.py | 233 | defined here | Constructs argparse parser for investigation claims validation. |
| scripts/analyze_pr_failure.py | 381 | defined here | Constructs argparse parser for PR failure analysis. |
| scripts/bulk_cancel_guard.py | 99 | defined here | Constructs argparse parser for bulk run cancellation guard. |
| scripts/ci/check_pr_merge_state.py | 130 | defined here | Constructs argparse parser for PR merge state checking. |
| scripts/ci/collect_metrics_and_report.py | 57 | defined here | Constructs argparse parser for metrics collection and reporting. |
| scripts/ci/commit_and_push.py | 63 | defined here | Constructs argparse parser for automated commit and push operations. |
| scripts/ci/count_ratchet.py | 487 | defined here | Constructs argparse parser for count ratchet metric enforcement. |
| scripts/ci/measure_npm_pack_size.py | 67 | defined here | Constructs argparse parser for npm pack size measurement. |
| scripts/ci/update_needs_split_label.py | 114 | defined here | Constructs argparse parser for needs-split label management. |
| scripts/ci/validate_ai_review_budgets.py | 129 | defined here | Constructs argparse parser for AI review budget validation. |
| scripts/ci/verify_codeql_artifacts.py | 54 | defined here | Constructs argparse parser for CodeQL artifact verification. |
| scripts/eval/optimize-artifact.py | 3058 | defined here | Constructs argparse parser for artifact optimization evaluation. |
| scripts/maintenance/repair_packed_refs.py | 135 | defined here | Constructs argparse parser for git packed-refs repair utility. |
| scripts/new_validated_pr.py | 39 | defined here | Constructs argparse parser for validated PR creation script. |
| scripts/report_pr_supersession.py | 301 | defined here | Constructs argparse parser for PR supersession reporting. |
| scripts/skillbook.py | 593 | defined here | Constructs argparse parser for skillbook utility CLI. |
| scripts/update_memory_index_tokens.py | 190 | defined here | Constructs argparse parser for memory index token updater. |
| scripts/update_reviewer_signal_stats.py | 639 | defined here | Constructs argparse parser for reviewer signal stats updater. |
| scripts/validation/active_plan_closeout.py | 179 | defined here | Constructs argparse parser for active plan closeout validation. |
| scripts/validation/check_adr_lifecycle.py | 1213 | defined here | Constructs argparse parser for ADR lifecycle validation. |
| scripts/validation/check_adr_links.py | 1027 | defined here | Constructs argparse parser for ADR link consistency checking. |
| scripts/validation/check_agent_skill_discriminator.py | 581 | defined here | Constructs argparse parser for agent skill discriminator checks. |
| scripts/validation/check_build_gates.py | 183 | defined here | Constructs argparse parser for build gate validation. |
| scripts/validation/check_ci_dependency_pins.py | 270 | defined here | Constructs argparse parser for CI dependency pin checking. |
| scripts/validation/check_citation_freshness.py | 380 | defined here | Constructs argparse parser for citation freshness verification. |
| scripts/validation/check_doc_interpreter_portability.py | 499 | defined here | Constructs argparse parser for doc interpreter portability validation. |
| scripts/validation/check_skill_md_exec_portability.py | 392 | defined here | Constructs argparse parser for skill markdown execution portability. |
| scripts/validation/check_skill_portability.py | 259 | defined here | Constructs argparse parser for skill portability checks. |
| scripts/validation/check_skill_skip_clauses.py | 227 | defined here | Constructs argparse parser for skill skip clause validation. |
| scripts/validation/check_zero_collection_tests.py | 474 | defined here | Constructs argparse parser for zero collection test detection. |
| scripts/validation/hook_contracts.py | 942 | defined here | Constructs argparse parser for git hook contract validation. |
| scripts/validation/instruction_budget.py | 74 | defined here | Constructs argparse parser for instruction budget validation. |
| scripts/validation/passive_context_budget.py | 168 | defined here | Constructs argparse parser for passive context budget enforcement. |
| scripts/validation/pr_commit_count.py | 252 | defined here | Constructs argparse parser for PR commit count checking. |
| scripts/validation/pr_description.py | 1055 | defined here | Constructs argparse parser for PR description schema verification. |
| scripts/validation/pre_pr.py | 253 | defined here | Constructs argparse parser for pre-PR sanity validation. |
| scripts/validation/sha_pinning.py | 260 | defined here | Constructs argparse parser for commit SHA pin verification. |
| scripts/validation/skill_frontmatter.py | 548 | defined here | Constructs argparse parser for skill frontmatter schema validation. |
| scripts/validation/stale_script_refs.py | 172 | defined here | Constructs argparse parser for stale script reference checking. |
| scripts/validation/test_docs_only_eligibility.py | 148 | defined here | Constructs argparse parser for docs-only PR eligibility tests. |
| scripts/validation/test_investigation_eligibility.py | 141 | defined here | Constructs argparse parser for investigation eligibility checks. |
| scripts/validation/token_budget.py | 156 | defined here | Constructs argparse parser for token budget verification. |
| scripts/validation/traceability.py | 515 | defined here | Constructs argparse parser for requirements traceability checks. |
| scripts/validation/validate_skill_shells.py | 157 | defined here | Constructs argparse parser for skill shell execution validation. |

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
defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug, missing-path, cross-file-contradiction

## Design notes
A Python CLI argument parser constructor function identifier used across utility and validation scripts rather than an agent lifecycle concept.
