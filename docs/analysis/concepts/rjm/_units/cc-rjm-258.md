---
unit: cc-rjm-258
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-258

## Files assigned
- [x] sources/rjm/scripts/ci/map_pr_description_result.py
- [x] sources/rjm/scripts/ci/materialize_installed_plugin.py
- [x] sources/rjm/scripts/ci/measure_npm_pack_size.py
- [x] sources/rjm/scripts/ci/merge_tree_materialization.py
- [x] sources/rjm/scripts/ci/merge_tree_ratchet_check.py
- [x] sources/rjm/scripts/ci/merge_tree_ratchet_registry.py
- [x] sources/rjm/scripts/ci/mutation_harness_ciperms.py
- [x] sources/rjm/scripts/ci/test_installed_plugin_hooks.py
- [x] sources/rjm/scripts/validation/checks_ratchet.py
- [x] docs/analysis/inventory/rjm/scripts-ci-map-pr-description-result-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-materialize-installed-plugin-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-test-installed-plugin-hooks-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-measure-npm-pack-size-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-merge-tree-materialization-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-merge-tree-ratchet-check-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-merge-tree-ratchet-registry-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-mutation-harness-ciperms-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-ratchet-py.md

## Outputs produced
- docs/analysis/concepts/rjm/status-for-exit-code.md (1025 bytes)
- docs/analysis/concepts/rjm/materialize.md (968 bytes)
- docs/analysis/concepts/rjm/create-consumer-repo.md (1149 bytes)
- docs/analysis/concepts/rjm/size-limit-bytes.md (895 bytes)
- docs/analysis/concepts/rjm/measure-pack-size.md (927 bytes)
- docs/analysis/concepts/rjm/cleanup-retry-delays.md (954 bytes)
- docs/analysis/concepts/rjm/transient-cleanup-errnos.md (1010 bytes)
- docs/analysis/concepts/rjm/make-writable-and-retry.md (983 bytes)
- docs/analysis/concepts/rjm/isolated-git-environment.md (1015 bytes)
- docs/analysis/concepts/rjm/remove-tree.md (932 bytes)
- docs/analysis/concepts/rjm/cleanup-materialization.md (1027 bytes)
- docs/analysis/concepts/rjm/checkout-tree.md (919 bytes)
- docs/analysis/concepts/rjm/materialize-tree.md (986 bytes)
- docs/analysis/concepts/rjm/initialize-repo.md (981 bytes)
- docs/analysis/concepts/rjm/init-scratch-repo.md (965 bytes)
- docs/analysis/concepts/rjm/merge-tree-ratchet.md (1339 bytes)
- docs/analysis/concepts/rjm/stale-branch-hole.md (1084 bytes)
- docs/analysis/concepts/rjm/concurrent-admission-hole.md (1081 bytes)
- docs/analysis/concepts/rjm/reserve-band.md (1166 bytes)
- docs/analysis/concepts/rjm/effective-baseline.md (991 bytes)
- docs/analysis/concepts/rjm/baselinestate.md (894 bytes)
- docs/analysis/concepts/rjm/baselineread.md (852 bytes)
- docs/analysis/concepts/rjm/shallow-fetch.md (1079 bytes)
- docs/analysis/concepts/rjm/synthetic-merge-tree.md (1131 bytes)
- docs/analysis/concepts/rjm/mergetreeratchet.md (925 bytes)
- docs/analysis/concepts/rjm/ratchets.md (1026 bytes)
- docs/analysis/concepts/rjm/dead.md (870 bytes)
- docs/analysis/concepts/rjm/survived.md (894 bytes)
- docs/analysis/concepts/rjm/did-not-apply.md (929 bytes)
- docs/analysis/concepts/rjm/not-run.md (915 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-258.md (7262 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/status-for-exit-code.md docs/analysis/concepts/rjm/materialize.md docs/analysis/concepts/rjm/create-consumer-repo.md docs/analysis/concepts/rjm/size-limit-bytes.md docs/analysis/concepts/rjm/measure-pack-size.md docs/analysis/concepts/rjm/cleanup-retry-delays.md docs/analysis/concepts/rjm/transient-cleanup-errnos.md docs/analysis/concepts/rjm/make-writable-and-retry.md docs/analysis/concepts/rjm/isolated-git-environment.md docs/analysis/concepts/rjm/remove-tree.md docs/analysis/concepts/rjm/cleanup-materialization.md docs/analysis/concepts/rjm/checkout-tree.md docs/analysis/concepts/rjm/materialize-tree.md docs/analysis/concepts/rjm/initialize-repo.md docs/analysis/concepts/rjm/init-scratch-repo.md docs/analysis/concepts/rjm/merge-tree-ratchet.md docs/analysis/concepts/rjm/stale-branch-hole.md docs/analysis/concepts/rjm/concurrent-admission-hole.md docs/analysis/concepts/rjm/reserve-band.md docs/analysis/concepts/rjm/effective-baseline.md docs/analysis/concepts/rjm/baselinestate.md docs/analysis/concepts/rjm/baselineread.md docs/analysis/concepts/rjm/shallow-fetch.md docs/analysis/concepts/rjm/synthetic-merge-tree.md docs/analysis/concepts/rjm/mergetreeratchet.md docs/analysis/concepts/rjm/ratchets.md docs/analysis/concepts/rjm/dead.md docs/analysis/concepts/rjm/survived.md docs/analysis/concepts/rjm/did-not-apply.md docs/analysis/concepts/rjm/not-run.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-258 completes 30 concept cards spanning CI helper scripts, merge-tree ratchets, plugin materialization, and mutation testing harnesses:
  1. CI validation adapters and plugin materialization (`_status_for_exit_code`, `materialize`, `create_consumer_repo`, `_SIZE_LIMIT_BYTES`, `measure_pack_size`).
  2. Git tree materialization and isolation utilities (`_CLEANUP_RETRY_DELAYS`, `_TRANSIENT_CLEANUP_ERRNOS`, `_make_writable_and_retry`, `isolated_git_environment`, `remove_tree`, `_cleanup_materialization`, `_checkout_tree`, `materialize_tree`, `_initialize_repo`, `init_scratch_repo`).
  3. Merge-tree verification and race mitigation architecture (`merge-tree ratchet`, `stale-branch hole`, `concurrent-admission hole`, `reserve-band`, `_effective_baseline`, `BaselineState`, `BaselineRead`, `shallow-fetch`, `synthetic merge tree`, `MergeTreeRatchet`, `RATCHETS`).
  4. CI permission mutation test harness statuses (`DEAD`, `SURVIVED`, `DID-NOT-APPLY`, `NOT-RUN`).
- Lifecycle concepts (`merge-tree ratchet` [gate], `stale-branch hole` [pattern], `concurrent-admission hole` [pattern], `reserve-band` [technique], `shallow-fetch` [technique], `synthetic merge tree` [artifact]) were classified with full lifecycle sections.
- Non-lifecycle concepts representing script functions, classes, and constants were authored with `kind: name-only` and `package_phase: none` per D-023.
- All 32 occurrences recorded in `facts/cc-rjm-258.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were propagated to `Implementation status` (`clean`, `defects: orphan`, `defects: script-bug`, `defects: script-bug, orphan`, `defects: orphan, script-bug, other`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,500 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
