---
package: rjm
name: main
slug: main
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/generate_experiment.py, sha256: 73b8a865a5fda70135d588b957fadcea836fc97f915b8e10accd54420010934e}
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
  - {path: .claude/skills/observability/scripts/query_logs.py, sha256: 52b5d64d98daf4538a5dae49954b3d548feb8e0f606cc81ab8b991f0f17e909b}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: .claude/skills/slo-designer/scripts/calculate_error_budget.py, sha256: c93bcddda600634ae423a52f821863f60cf8a9638f4a78f311523f24840c7d1e}
  - {path: .claude/skills/slo-designer/scripts/generate_slo_document.py, sha256: 6cfedee270c2143f72cb05e1d5d1984bd31db0761caa9f91c1d71d621d547e80}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
  - {path: .codeql/scripts/install_codeql.py, sha256: 9a0a3b59f671c9f1ae78245806b03e827f679f49145347dc81d37ef1772f16f0}
  - {path: .codeql/scripts/install_codeql_integration.py, sha256: adbf946c456edd42fee06b3b1b9f5aa133615fc62a8ef671279817400e886012}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
  - {path: .github/scripts/parse_feature_review.py, sha256: a2dc22ac513a841bb2088d12659ef8126e08cc1bf396f3a5c04b3e72f7938951}
  - {path: .github/scripts/parse_pr_standards.py, sha256: adc2d57b18d0bd54ff66d68244d1aaf1487755715dbc172042fc15d3442415f4}
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
  - {path: .github/scripts/test_rate_limit.py, sha256: 51a6e37f475906db141e0afebf83f4c6d67a90e503092fdff6a0e745f60fe9f9}
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
  - {path: scripts/audit_orphaned_branches.py, sha256: e08032e7dd3c0100f1c85b2e9f1c35ba9a15629b509f090f1b70691b46c14b01}
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
  - {path: scripts/ci/check_ai_review_infra_gate.py, sha256: fcc4034f1ade9de3980298877acd16390171096679d20e7b081657457f8c531f}
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/ci/check_claude_authorization.py, sha256: 02d1029955d370a06572aac4b1f500a8043a0f588edfd0aca83258ccf33b7297}
  - {path: scripts/ci/check_codeql_sarif.py, sha256: e20a24e447806fac29fce1245d20683d67b25fda571e06fd6ee6c5d1ac359c13}
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
  - {path: scripts/ci/check_plugin_lib_mirrors.py, sha256: 2ba1360dfea77be673c75b9acac6c476472966335816f1b3cedb061ce32bbab5}
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
  - {path: scripts/ci/classify_semantic_title_result.py, sha256: b9414829dc1a70004dc8c0803990761701d761ee85c9800cc1ff89e6a57b960d}
  - {path: scripts/ci/detect_human_changes_requested.py, sha256: 54c20c8899411a5c94c089ced5574b0ca47d2597c231025d1edcc08f894bdab1}
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
  - {path: scripts/ci/drift_run_detection.py, sha256: a8ff6e4e1b35f8e278ca8d09a96e6ef4f7f561741cb99c9257eaca6e77d57b58}
  - {path: scripts/ci/drift_write_summary.py, sha256: 2f1c81b0c3802b7e47ef4e4aa76a1664ec5d97998c4382e31001515c9703317c}
  - {path: scripts/ci/enforce_pr_validation.py, sha256: 98055348aecaa5267abc1dc2013bb1698ab930049bacdeebcae3166c0ee0d44d}
  - {path: scripts/ci/establish_ai_review_deadline.py, sha256: 54901cf4d6d02196ebc876a3be82c92f9e8bb550d804f5e1027d13daa35a2a0a}
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/ci/find_copilot_ready_issues.py, sha256: faf9bb06e7fd11b6e0fd37e7d397cd119e07631df2eb92a142facbeabe9205a7}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
  - {path: scripts/ci/install_locked_deps.py, sha256: 8fbaf932b42e746f6d6ce2a3b41c8ae0ae36f0144c988bad8f0a4aea54f97e69}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
  - {path: scripts/ci/main_pytest_failure_alert.py, sha256: bb367255b46c592ece4b2e1018fb1ad9befd29cad8627942838779241c92984a}
  - {path: scripts/ci/map_pr_description_result.py, sha256: d66a421358b9d32edb77d5b838d4121c0c70d7e0ed27d436e524b8acafb46fc7}
  - {path: scripts/ci/materialize_installed_plugin.py, sha256: de098ac790298c060997e8a1fe7fd94a7a19bf0e4762b41d497af93cb7a26c2c}
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/sweep_copilot_synthesis.py, sha256: 6e2ee8a4efeefcaf6a250ad485ea4cab481fdaf8d9024465b82c936a6a4360d7}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
  - {path: scripts/external_signals/gate_aggregator.py, sha256: f9f7a2f2f9ebcc47353b79aad06d7aeeafbb32ccc699027030b5673c83df71e3}
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/repair_packed_refs.py, sha256: c0e763bf8c2cc05cf4c726dc8efc6fc169cbc3330fbc39cae78bb5aceb3b6e14}
  - {path: scripts/maintenance/repair_worktree_venv.py, sha256: cd05ba426c3cb9d88b1ffef12885c1bc5a0485b9b1a6db3413769625d1ee5d91}
  - {path: scripts/measure_context_retrieval_metrics.py, sha256: 02cfed6442a9a6f67c9374b9808c64b11b04ed0fb0791e1b287b90180ffe27ea}
  - {path: scripts/metrics/check_vendored_install.py, sha256: 8086464e6162330cf2fd6d5f848b550de245841f06ce4ec0f4000f52c36ccc45}
  - {path: scripts/metrics/emit_verdict_mismatch.py, sha256: bb9b925ea22ea3bba761f71fb4a48fe260babaacee0fd4cb0c9e1302c7be8e50}
  - {path: scripts/metrics_writer.py, sha256: 7a9d4b92bf72b4f8881fbb900d4586a83289d0055caf7f50b556927e6fdafed1}
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
  - {path: scripts/pr_branch_mapping.py, sha256: ef68513a8490b248236707bb35a76c73fa2d9f58999d1f43b973d7cf72fe4340}
  - {path: scripts/redact_secrets.py, sha256: def1d7ea6d1ac0b380277b817a9ca13a072d1e076ce59e8513eff753691eba61}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
  - {path: scripts/restructure_memories.py, sha256: 6afb99a67dca2706ea92372b1468fabea9aa75087d238398671098e5e754af11}
  - {path: scripts/review_memory_export_security.py, sha256: d8e98211aeb8e9412aa1bc516f5a90b054306e33e2390b486e8c2571a279060f}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
  - {path: scripts/split_bundled_skills.py, sha256: 984becd29092df0d723645aa4250697a65d743f72cab46212c1934501d747257}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
  - {path: scripts/sync_mcp_config.py, sha256: 121e1c3cf83183f12974ea194d84fb4bb3e5f5827fcd336a323acd5a6fa494df}
  - {path: scripts/sync_plugin_lib.py, sha256: 8311587c8a293fb29bddf255c8f8d6adcf33b4821de992b06dbb6d831bb3f982}
  - {path: scripts/test_selection/select_tests.py, sha256: 55afa726a2f4e6a81d372ad357019fb4af318250ffd3c84775545b54f076c03c}
  - {path: scripts/testing/mutation_harness.py, sha256: 4a358071a44d214624a13c240c270f7c41c84e78d36caabcde41d075a9bba262}
  - {path: scripts/traceability/show_traceability_graph.py, sha256: e9b88963e496c97a549a3156d97c00b7aed0f63b8317ba49cb10edf1ccc3b3cb}
  - {path: scripts/traceability/update_spec_references.py, sha256: c247562ca5f32a067a056a068c18179a30a0a23790cd0b64efd0ff0273ae7282}
  - {path: scripts/update_memory_index_tokens.py, sha256: 7fb67cc56917e1fef3076e74f714b60137c1d81223e031fb057cf29820598fea}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
  - {path: scripts/validate_memory_tier.py, sha256: 4f87d202ac44cf05d5246d8261c6fc3a501aeb568f36370317b3f1d833e1e6c0}
  - {path: scripts/validate_phase_gates.py, sha256: c2a815e2ce0a260c4f706854a1879f790b3d2bcd21b628e77cff85e4778aa8de}
  - {path: scripts/validate_pr_review_config.py, sha256: 6ecb12ec366c7eabe944f9e19f33e45d830ff1783fd7e899fcc516bae7dbeb79}
  - {path: scripts/validate_quality_gate_output.py, sha256: db9a15f636b9951529468e3f6573531aa337ebb2f1a6071184a6eb2341595fb4}
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
  - {path: scripts/validate_skill_format.py, sha256: 4d8c399c6ce129fb80fef18d4e6a864284b5566ad91c4c6c3c22c8ccb8621508}
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
  - {path: scripts/validate_workspace_budget.py, sha256: 5d0155b8ada925ac4e13f5f662812bbe8d8d5aa79e289536d08af70250d0aecc}
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
  - {path: scripts/validation/check_colocated_skill_tests.py, sha256: 49ed724b3e8cedbd9917a596e3dd3fdec039097bbdc3ce64c4c058834b9225f9}
  - {path: scripts/validation/check_duplicate_test_helpers.py, sha256: 8906f18524078aa443be6371e81d6f866fc50df83b93e3be976f4b34b50fc0b5}
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
  - {path: scripts/validation/check_spec_id_uniqueness.py, sha256: 3423d17958f2be14d7d061d2172e3818165520ca8603b9374b446c32c95b36fa}
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
  - {path: scripts/validation/check_test_tree_writes.py, sha256: 3be035ef1a8fa8f3129bdba85305786b374ca532615d1c04b49aabf1d6806550}
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
  - {path: scripts/validation/check_unreachable_code.py, sha256: 1e8ae7aab96a8cc6eab3ea1f5b553811c20ab01b48ad7aca0932ef198e63509e}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
  - {path: scripts/validation/ruleset_params_baseline.json, sha256: 02f34be33d286be3183642951eefeebfeebbdb6490b05ea7c8d45767393b7e91}
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
  - {path: scripts/validation/token_budget.py, sha256: 02ab5e547356da50e609eac3e1cf435dc4ab028583074fe3a9f445757651ffe4}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
  - {path: scripts/validation/validate_skillbook.py, sha256: b414daf9f7283aa07ac84ac29d87b726bca25f0845a465a3df01d28667f22607}
  - {path: scripts/validation/validate_sync_registry.py, sha256: 734ce57ac1a577046d451345bd66d40918335da96ccd787a5e70d203acef74e8}
  - {path: scripts/workflows/determine_should_run_from_filters.py, sha256: a6f201bd6a65cb7033d31e82c0e14b5cb9a30fafdd98006a42e15754c40bdb26}
  - {path: scripts/workflows/resolve_dispatch_input.py, sha256: 35d272602e2bc342d438f73d230f9bfc7c092cdd82e0623fbbfa5915113e7612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# main

## Definition — verbatim
(used, not defined)

> "def main() -> Result:" — .claude/skills/chaos-experiment/scripts/generate_experiment.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/generate_experiment.py | 136 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 339 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/observability/scripts/query_logs.py | 204 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 985 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/skillforge/scripts/validate-skill.py | 813 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 41 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 202 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/slo-designer/scripts/calculate_error_budget.py | 224 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/slo-designer/scripts/generate_slo_document.py | 429 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 330 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .codeql/scripts/get_codeql_diagnostics.py | 453 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .codeql/scripts/install_codeql_integration.py | 208 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .codeql/scripts/install_codeql.py | 242 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/generate_spec_report.py | 232 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/invoke_pr_comment_processing.py | 304 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/invoke_pr_maintenance.py | 552 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/measure_workflow_coalescing.py | 631 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/parse_artifact_insights.py | 210 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/parse_feature_review.py | 43 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/parse_pr_standards.py | 23 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/post_issue_comment.py | 173 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| .github/scripts/test_rate_limit.py | 31 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ai_review_common/cache_guard.py | 132 | defined here | CLI entry point and internal execution routine for cache guarding. |
| scripts/analyze_pr_failure.py | 401 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/audit_orphaned_branches.py | 215 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/bulk_cancel_guard.py | 340 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/check_skill_exists.py | 133 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/artifact_write_summary.py | 69 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/build_ai_review_context.py | 476 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/build_pr_validation_report.py | 126 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/build_retrospective_prompt.py | 53 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_ai_review_infra_gate.py | 125 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_bot_identity.py | 214 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_claude_authorization.py | 72 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_codeql_sarif.py | 156 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_metrics_thresholds.py | 85 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_plugin_lib_mirrors.py | 34 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/check_pr_merge_state.py | 139 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/classify_semantic_title_result.py | 143 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/detect_human_changes_requested.py | 33 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/diagnose_copilot_cli.py | 239 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/drift_collect_details.py | 98 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/drift_create_alert_issue.py | 98 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/drift_run_detection.py | 66 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/drift_write_summary.py | 63 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/enforce_pr_validation.py | 30 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/establish_ai_review_deadline.py | 40 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/execute_ai_review_post_script.py | 92 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/find_copilot_ready_issues.py | 53 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/install_copilot_cli.py | 89 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/install_locked_deps.py | 82 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/invoke_copilot_cli.py | 471 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/load_ai_review_prompt.py | 61 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/main_pytest_failure_alert.py | 135 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/map_pr_description_result.py | 32 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/materialize_installed_plugin.py | 51 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/measure_npm_pack_size.py | 77 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/spec_extract_refs.py | 187 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/spec_load_content.py | 171 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/spec_prepare_context.py | 84 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 95 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/sweep_copilot_synthesis.py | 53 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/taste_count_ratchet.py | 293 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/test_installed_plugin_hooks.py | 251 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/type_ignore_count_ratchet.py | 125 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/update_needs_split_label.py | 120 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/ci/validate_ai_review_budgets.py | 135 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/eval/eval_skill_router.py | 492 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/eval/eval-agents.py | 900 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/eval/eval-model-panel.py | 245 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/eval/eval-model-sweep.py | 560 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/eval/eval-oneshot-vs-shipped.py | 251 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/eval/optimize-artifact.py | 3335 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/external_signals/gate_aggregator.py | 142 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/generate_third_party_notices.py | 430 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/incoherence.py | 902 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/maintenance/detect_orphan_commits.py | 227 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/maintenance/detect_unlanded_commits.py | 126 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/maintenance/gc_worktrees.py | 481 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/maintenance/repair_packed_refs.py | 147 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/maintenance/repair_worktree_venv.py | 283 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/measure_context_retrieval_metrics.py | 199 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/metrics_writer.py | 186 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/metrics/check_vendored_install.py | 58 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/metrics/emit_verdict_mismatch.py | 56 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/openclaw_bridge.py | 367 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/pr_branch_mapping.py | 400 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/redact_secrets.py | 408 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/report_pr_supersession.py | 316 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/restructure_memories.py | 390 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/review_memory_export_security.py | 218 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/skill_description_budget.py | 228 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/skill_registry.py | 391 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/skillbook.py | 661 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/split_bundled_skills.py | 112 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/sync_mcp_config.py | 120 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/sync_plugin_lib.py | 396 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/sync/detect_spec_drift.py | 415 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/test_selection/select_tests.py | 209 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/testing/mutation_harness.py | 350 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/traceability/show_traceability_graph.py | 264 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/traceability/update_spec_references.py | 74 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/update_memory_index_tokens.py | 205 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/update_reviewer_signal_stats.py | 662 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_memory_tier.py | 242 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_phase_gates.py | 193 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_pr_review_config.py | 363 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_quality_gate_output.py | 108 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_session_json.py | 1614 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_skill_format.py | 85 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_skill_installation.py | 166 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_skill_output.py | 315 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_workflows.py | 594 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validate_workspace_budget.py | 132 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/active_plan_closeout.py | 186 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_adr_lifecycle.py | 1241 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_adr_links.py | 1050 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_canonical_citations.py | 287 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_ci_dependency_pins.py | 279 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_citation_freshness.py | 394 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_colocated_skill_tests.py | 131 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_duplicate_test_helpers.py | 174 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_generated_staleness.py | 406 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_git_hook_health.py | 293 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_repo_health.py | 489 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_rule_activation_coverage.py | 466 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_ruleset_params_drift.py | 110 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_shipped_skill_routes.py | 574 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_skill_contract_tests.py | 107 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_skill_md_exec_portability.py | 556 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_skill_memory_references.py | 330 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_skill_portability.py | 316 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_skill_resolver_anchoring.py | 192 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_skill_skip_clauses.py | 244 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_spec_id_uniqueness.py | 76 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_subprocess_encoding.py | 1781 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_test_tree_writes.py | 265 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_tmp_worktrees.py | 346 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_unreachable_code.py | 167 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_vendor_portability.py | 556 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_worktree_recipes.py | 302 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/check_zero_collection_tests.py | 485 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/checks_ratchet.py | 257 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/command_size.py | 140 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/hook_contracts.py | 973 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/instruction_budget.py | 80 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/passive_context_budget.py | 202 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/pr_description.py | 1095 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/pre_pr.py | 288 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/push_ref_staleness.py | 187 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/ruleset_params_baseline.json | 3 | used here | Target git reference branch name recorded in baseline repository ruleset parameters. |
| scripts/validation/run_install_parity_ci.py | 40 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/run_plugin_version_bump_ci.py | 41 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/sha_pinning.py | 286 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/skill_frontmatter.py | 582 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/stale_script_refs.py | 184 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/test_docs_only_eligibility.py | 175 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/test_investigation_eligibility.py | 159 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/token_budget.py | 181 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/traceability.py | 547 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/validate_skill_shells.py | 170 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/validate_skillbook.py | 336 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/validation/validate_sync_registry.py | 180 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/workflows/determine_should_run_from_filters.py | 85 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |
| scripts/workflows/resolve_dispatch_input.py | 70 | defined here | Standard CLI entry point function executing the script's core workflow and returning an exit code. |

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
defects: doc-drift, exit-code-mismatch, missing-path, script-bug, internal-contradiction

## Design notes
`main` is a standard executable CLI entry point function identifier and top-level execution routine across Python utility and validation scripts rather than an operational lifecycle concept, classified as `name-only` per D-023.
