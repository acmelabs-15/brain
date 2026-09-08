---
session: 030
date: 2026-09-08
phase_at_start: 4
phase_at_end: 4
units_completed: [techniques-concordance-decisions]
units_rolled_back: []
units_blocked: []
decisions_added: [D-273, D-274, D-275, D-276, D-277, D-278, D-279, D-280, D-281, D-282, D-283, D-284, D-285, D-286, D-287, D-288, D-289, D-290, D-291, D-292, D-293, D-294, D-295, D-296, D-297, D-298, D-299, D-300, D-301, D-302, D-303, D-304, D-305, D-306, D-307, D-308, D-309, D-310, D-311, D-312, D-313, D-314, D-315, D-316, D-317, D-318, D-319, D-320, D-321, D-322, D-323, D-324, D-325, D-326, D-327, D-328, D-329, D-330, D-331, D-332, D-333, D-334, D-335, D-336, D-337, D-338, D-339, D-340, D-341, D-342, D-343, D-344, D-345, D-346, D-347, D-348, D-349, D-350, D-351, D-352, D-353, D-354, D-355, D-356, D-357, D-358, D-359, D-360, D-361, D-362, D-363, D-364, D-365, D-366, D-367, D-368, D-369, D-370, D-371, D-372, D-373, D-374, D-375, D-376, D-377, D-378, D-379, D-380, D-381, D-382, D-383, D-384, D-385, D-386, D-387, D-388, D-389, D-390, D-391, D-392, D-393, D-394, D-395, D-396, D-397, D-398, D-399, D-400, D-401, D-402, D-403, D-404, D-405, D-406, D-407, D-408, D-409, D-410, D-411, D-412, D-413, D-414, D-415, D-416, D-417, D-418, D-419, D-420, D-421, D-422, D-423, D-424, D-425, D-426, D-427, D-428, D-429, D-430, D-431, D-432, D-433, D-434, D-435, D-436, D-437, D-438, D-439, D-440, D-441, D-442, D-443, D-444, D-445, D-446, D-447, D-448, D-449, D-450, D-451, D-452, D-453, D-454, D-455, D-456, D-457, D-458, D-459, D-460, D-461, D-462, D-463, D-464, D-465, D-466, D-467, D-468, D-469, D-470, D-471, D-472, D-473, D-474, D-475, D-476, D-477, D-478, D-479, D-480, D-481, D-482, D-483, D-484, D-485, D-486, D-487, D-488, D-489, D-490, D-491, D-492, D-493, D-494, D-495, D-496, D-497, D-498, D-499, D-500, D-501, D-502, D-503, D-504, D-505, D-506, D-507, D-508, D-509, D-510, D-511]
needs_peter: no
prefix_hash_start: ab91999586e051d8
prefix_hash_end: 3a66c666f060504d
context_used_start: 7.85%
context_used_peak: 16.14%
runs: []
compactions: 0
---

# Session 030 — Alignment decisions

## Start state
- phase: 4
- phase_name: Alignment decisions
- current_unit: D-273 (techniques concordance decisions)
- last_session: 029
- next_action: Phase 4 — Alignment decisions (single-threaded orchestrator; continue with techniques family [239 decisions needed] per METHOD.md §5)
- human_approval: PENDING
- human_approval_date: —
- landscape_scan: no
- Last-unit check (§8.1 step 6): `units.ts show cc-rjm-376` → done; `memo.ts check cc-rjm-376` → HIT across 9 cards; `quote-check.ts --summary` → 9 PASS, 0 FAIL across 9 cards; `units.ts status` → 876 total done, 0 pending, 0 in-progress.
- Source-pin verification (§8.1 step 7): branch `v2`; addy `d2c37ef6225dd8726cdd369a8030307f48592d26`; matt `6654f6b60cd9d5be8b54c6fafe44346dabeb3b76`; rjm `2abef31dc6812b62696297bd1065b58727a35786`; external snapshots exist; working tree clean.
- prefix-check.ts (§8.1 step 8): 31 files, combined ab91999586e051d8
- partition.ts --check: partition: units.md matches the manifests (1585 rows, 416 units)
- units.ts check: units: table, manifest and STATE.md agree — units: 876 total — pending 0 · in-progress 0 · done 876 · blocked 0 · rolled-back 0
- coverage.ts: clean (rows 1595, covered 1567, uncovered 0, orphan cards 0, empty required 0, R11 alias problems 0, R11 variant problems 0, concepts without card 0, index problems 0)
- glossary-lint.ts: clean
- memo.ts audit: 15331 OK, 0 STALE, 0 UNSTAMPED across 15331 card(s)
- partition-concepts.ts --check: units-p2.md matches the inventory (13765 concepts, 460 units)
- concept-index.ts --check: clean (addy 1313, matt 1193, rjm 11259 cards)
- budget.ts --record start: used=7.85% peak=7.85% governing=25.00% close=1.39% headroom=15.76% pending=0 → STOP — nothing pending in the unit table: this phase's dispatch is complete

## What was done
- Completed §8.1 session-start protocol with zero errors.
- Executed Phase 4 (Alignment decisions) in single-threaded orchestrator mode per METHOD.md §5, resolving the entire `techniques` concept family (all 239 non-ALIGNED / judgment rows requiring decisions in `docs/analysis/concordance/techniques.md`).
- Authored and appended 239 formal alignment decisions (`D-273` through `D-511`) to `docs/decisions/DECISIONS.md` per `docs/plan/templates/decision.md`:
  - `D-273`: `yagni` (resolves `techniques.md#yagni`)
  - `D-274`: `dialogue-driven-discovery` (resolves `techniques.md#dialogue-driven-discovery`)
  - `D-275`: `skill-discovery` (resolves `techniques.md#addy-skill-discovery`)
  - `D-276`: `scope-discipline-enforcement` (resolves `techniques.md#addy-maintain-scope-discipline`)
  - `D-277`: `on-demand-skill-activation` (resolves `techniques.md#addy-on-demand-skill-activation`)
  - `D-278`: `discover-the-stack-first` (resolves `techniques.md#addy-discover-the-stack-first`)
  - `D-279`: `constraints-guard` (resolves `techniques.md#addy-constraints-guard`)
  - `D-280`: `agent-skill-dispatch-meta-pattern` (resolves `techniques.md#addy-using-agent-skills`)
  - `D-281`: `tracer-bullet-vertical-slices` (resolves `techniques.md#matt-tracer-bullet-vertical-slices`)
  - `D-282`: `prompt-driven-skill-architecture` (resolves `techniques.md#matt-prompt-driven`)
  - `D-283`: `most-important-first` (resolves `techniques.md#matt-most-important-first`)
  - `D-284`: `hitl-capture-helper` (resolves `techniques.md#matt-capture`)
  - `D-285`: `exercise-skeleton-stubbing` (resolves `techniques.md#matt-stubbing`)
  - `D-286`: `implement-spec-orchestration` (resolves `techniques.md#matt-implement-spec`)
  - `D-287`: `writing-great-skills` (resolves `techniques.md#matt-writing-great-skills`)
  - `D-288`: `scaffold-exercises` (resolves `techniques.md#matt-scaffold-exercises`)
  - `D-289`: `prototype-exploration-technique` (resolves `techniques.md#matt-the-prototype-skill`)
  - `D-290`: `scoping-decision-tree` (resolves `techniques.md#matt-decision-tree`)
  - `D-291`: `spike-prototyping` (resolves `techniques.md#matt-prototype`)
  - `D-292`: `relentless-interview` (resolves `techniques.md#matt-relentless-interview`)
  - `D-293`: `to-prd-synthesis` (resolves `techniques.md#matt-to-prd`)
  - `D-294`: `to-spec-synthesis` (resolves `techniques.md#matt-to-spec`)
  - `D-295`: `afk-research-investigation` (resolves `techniques.md#matt-research`)
  - `D-296`: `interview-rounds-structure` (resolves `techniques.md#matt-rounds`)
  - `D-297`: `facts-elicitation` (resolves `techniques.md#matt-facts`)
  - `D-298`: `context-hygiene` (resolves `techniques.md#matt-context-hygiene`)
  - `D-299`: `to-questionnaire` (resolves `techniques.md#matt-to-questionnaire`)
  - `D-300`: `blast-radius-containment` (resolves `techniques.md#blast-radius-containment`)
  - `D-301`: `thin-vertical-slices` (resolves `techniques.md#vertical-slices`)
  - `D-302`: `git-worktree-isolation` (resolves `techniques.md#git-worktrees`)
  - `D-303`: `integration-test` (resolves `techniques.md#addy-integration-test`)
  - `D-304`: `ubiquitous-language` (resolves `techniques.md#matt-ubiquitous-language`)
  - `D-305`: `domain-modeling` (resolves `techniques.md#matt-domain-modeling`)
  - `D-306`: `seam-placement` (resolves `techniques.md#matt-seam-placement`)
  - `D-307`: `replace-don-t-layer` (resolves `techniques.md#matt-replace-don-t-layer`)
  - `D-308`: `demo-path` (resolves `techniques.md#matt-demo-path`)
  - `D-309`: `red-green-slice` (resolves `techniques.md#matt-red-green-slice`)
  - `D-310`: `one-slice-at-a-time` (resolves `techniques.md#matt-one-slice-at-a-time`)
  - `D-311`: `native-blocking-edges` (resolves `techniques.md#matt-native-blocking-edges`)
  - `D-312`: `improve-codebase-architecture` (resolves `techniques.md#matt-improve-codebase-architecture`)
  - `D-313`: `tracer-bullet` (resolves `techniques.md#matt-tracer-bullet`)
  - `D-314`: `teaching-decision` (resolves `techniques.md#matt-teaching-decision`)
  - `D-315`: `anti-rationalization-guards` (resolves `techniques.md#addy-anti-rationalization-guards`)
  - `D-316`: `to-tickets` (resolves `techniques.md#matt-to-tickets`)
  - `D-317`: `perf-branch` (resolves `techniques.md#matt-perf-branch`)
  - `D-318`: `prefactoring` (resolves `techniques.md#matt-prefactoring`)
  - `D-319`: `incremental-implementation` (resolves `techniques.md#incremental-implementation`)
  - `D-320`: `surface-assumptions` (resolves `techniques.md#addy-surface-assumptions`)
  - `D-321`: `push-back-when-warranted` (resolves `techniques.md#addy-push-back-when-warranted`)
  - `D-322`: `worktree` (resolves `techniques.md#matt-worktree`)
  - `D-323`: `replayed-capture` (resolves `techniques.md#matt-replayed-capture`)
  - `D-324`: `context-pointers` (resolves `techniques.md#matt-context-pointers`)
  - `D-325`: `recommendation` (resolves `techniques.md#matt-recommendation`)
  - `D-326`: `red-green` (resolves `techniques.md#matt-red-green`)
  - `D-327`: `background-worktrees` (resolves `techniques.md#matt-background-worktrees`)
  - `D-328`: `variant` (resolves `techniques.md#matt-variant`)
  - `D-329`: `depth-as-leverage` (resolves `techniques.md#matt-depth-as-leverage`)
  - `D-330`: `codebase-terminology` (resolves `techniques.md#matt-codebase-terminology`)
  - `D-331`: `resolving-merge-conflicts` (resolves `techniques.md#matt-resolving-merge-conflicts`)
  - `D-332`: `desirable-difficulty` (resolves `techniques.md#matt-desirable-difficulty`)
  - `D-333`: `diagnosing-bugs` (resolves `techniques.md#matt-diagnosing-bugs`)
  - `D-334`: `prefactor` (resolves `techniques.md#matt-prefactor`)
  - `D-335`: `git-guardrails-claude-code` (resolves `techniques.md#matt-git-guardrails-claude-code`)
  - `D-336`: `six-phase-diagnosis` (resolves `techniques.md#matt-six-phase-diagnosis`)
  - `D-337`: `git-bisect-run` (resolves `techniques.md#matt-git-bisect-run`)
  - `D-338`: `bisection-harness` (resolves `techniques.md#matt-bisection-harness`)
  - `D-339`: `git-worktree-isolation-technique` (resolves `techniques.md#matt-git-worktrees`)
  - `D-340`: `scoping` (resolves `techniques.md#matt-scoping`)
  - `D-341`: `set-var` (resolves `techniques.md#matt-set-var`)
  - `D-342`: `parallel-worktrees` (resolves `techniques.md#matt-parallel-worktrees`)
  - `D-343`: `refactoring` (resolves `techniques.md#matt-refactoring`)
  - `D-344`: `characterization-testing` (resolves `techniques.md#characterization-testing`)
  - `D-345`: `sandbox-mode` (resolves `techniques.md#addy-sandbox-mode`)
  - `D-346`: `competing-hypothesis-debugging` (resolves `techniques.md#addy-competing-hypothesis-debugging`)
  - `D-347`: `debug-logging` (resolves `techniques.md#addy-debug-logging`)
  - `D-348`: `e2e-test` (resolves `techniques.md#addy-e2e-test`)
  - `D-349`: `type-assertions` (resolves `techniques.md#matt-type-assertions`)
  - `D-350`: `shoehorn` (resolves `techniques.md#matt-shoehorn`)
  - `D-351`: `hypothesis-testing` (resolves `techniques.md#matt-hypothesis-testing`)
  - `D-352`: `falsifiable-hypotheses` (resolves `techniques.md#matt-falsifiable-hypotheses`)
  - `D-353`: `acquiring-wisdom` (resolves `techniques.md#matt-acquiring-wisdom`)
  - `D-354`: `temporary-instrumentation` (resolves `techniques.md#matt-temporary-instrumentation`)
  - `D-355`: `falsifiable` (resolves `techniques.md#matt-falsifiable`)
  - `D-356`: `no-op-test` (resolves `techniques.md#matt-no-op-test`)
  - `D-357`: `reproduction-rate` (resolves `techniques.md#matt-reproduction-rate`)
  - `D-358`: `pruning` (resolves `techniques.md#matt-pruning`)
  - `D-359`: `deletion-test` (resolves `techniques.md#matt-deletion-test`)
  - `D-360`: `performance-branch` (resolves `techniques.md#matt-performance-branch`)
  - `D-361`: `testability` (resolves `techniques.md#matt-testability`)
  - `D-362`: `migrate-to-shoehorn` (resolves `techniques.md#matt-migrate-to-shoehorn`)
  - `D-363`: `three-dot-diff` (resolves `techniques.md#three-dot-diff`)
  - `D-364`: `dependency-security` (resolves `techniques.md#addy-dependency-security`)
  - `D-365`: `operational-metrics` (resolves `techniques.md#operational-metrics`)
  - `D-366`: `hyrum-s-law` (resolves `techniques.md#addy-hyrum-s-law`)
  - `D-367`: `constraint-driven-development` (resolves `techniques.md#addy-constraint-driven-development`)
  - `D-368`: `dialogue-evals` (resolves `techniques.md#addy-dialogue-evals`)
  - `D-369`: `information-access` (resolves `techniques.md#matt-information-access`)
  - `D-370`: `scheduler-yield` (resolves `techniques.md#addy-scheduler-yield`)
  - `D-371`: `context-aware-loading` (resolves `techniques.md#addy-context-aware-loading`)
  - `D-372`: `decision-flow` (resolves `techniques.md#addy-decision-flow`)
  - `D-373`: `rationalization-tables` (resolves `techniques.md#addy-rationalization-tables`)
  - `D-374`: `enforce-simplicity` (resolves `techniques.md#addy-enforce-simplicity`)
  - `D-375`: `constraints-check` (resolves `techniques.md#addy-constraints-check`)
  - `D-376`: `yieldtomain` (resolves `techniques.md#addy-yieldtomain`)
  - `D-377`: `keyboard-navigation` (resolves `techniques.md#addy-keyboard-navigation`)
  - `D-378`: `contain-intrinsic-size` (resolves `techniques.md#addy-contain-intrinsic-size`)
  - `D-379`: `content-visibility-auto` (resolves `techniques.md#addy-content-visibility-auto`)
  - `D-380`: `native-skills-system` (resolves `techniques.md#addy-native-skills-system`)
  - `D-381`: `stampede-protection` (resolves `techniques.md#addy-stampede-protection`)
  - `D-382`: `manage-confusion-actively` (resolves `techniques.md#addy-manage-confusion-actively`)
  - `D-383`: `trigger-evals` (resolves `techniques.md#addy-trigger-evals`)
  - `D-384`: `ttfb-diagnosis` (resolves `techniques.md#addy-ttfb-diagnosis`)
  - `D-385`: `bfcache` (resolves `techniques.md#addy-bfcache`)
  - `D-386`: `subagents` (resolves `techniques.md#addy-subagents`)
  - `D-387`: `scheduler-posttask` (resolves `techniques.md#addy-scheduler-posttask`)
  - `D-388`: `skill-execution-harness` (resolves `techniques.md#addy-skills`)
  - `D-389`: `explicit-context-loading` (resolves `techniques.md#addy-explicit-context-loading`)
  - `D-390`: `cross-session-memory` (resolves `techniques.md#addy-cross-session-memory`)
  - `D-391`: `requestidlecallback` (resolves `techniques.md#addy-requestidlecallback`)
  - `D-392`: `aria-live-regions` (resolves `techniques.md#addy-aria-live-regions`)
  - `D-393`: `isinputpending` (resolves `techniques.md#addy-isinputpending`)
  - `D-394`: `mcp-integration` (resolves `techniques.md#addy-mcp-integration`)
  - `D-395`: `anti-rationalization` (resolves `techniques.md#addy-anti-rationalization`)
  - `D-396`: `evals-framework` (resolves `techniques.md#addy-evals-framework`)
  - `D-397`: `context-efficiency` (resolves `techniques.md#addy-context-efficiency`)
  - `D-398`: `intent-skill-mapping` (resolves `techniques.md#addy-intent-skill-mapping`)
  - `D-399`: `eval-framework` (resolves `techniques.md#addy-eval-framework`)
  - `D-400`: `session-hooks` (resolves `techniques.md#addy-session-hooks`)
  - `D-401`: `pulling-from-the-pile` (resolves `techniques.md#matt-pulling-from-the-pile`)
  - `D-402`: `redact` (resolves `techniques.md#matt-redact`)
  - `D-403`: `merge-rebase` (resolves `techniques.md#matt-merge-rebase`)
  - `D-404`: `upserts` (resolves `techniques.md#matt-upserts`)
  - `D-405`: `write-env` (resolves `techniques.md#matt-write-env`)
  - `D-406`: `cross-skill-invocation` (resolves `techniques.md#matt-cross-skill-invocation`)
  - `D-407`: `pause` (resolves `techniques.md#matt-pause`)
  - `D-408`: `typechecking` (resolves `techniques.md#matt-typechecking`)
  - `D-409`: `writing-beats` (resolves `techniques.md#matt-writing-beats`)
  - `D-410`: `grilling-discipline` (resolves `techniques.md#matt-grilling-discipline`)
  - `D-411`: `drill` (resolves `techniques.md#matt-drill`)
  - `D-412`: `talk-normal` (resolves `techniques.md#matt-talk-normal`)
  - `D-413`: `native-blocking-link` (resolves `techniques.md#matt-native-blocking-link`)
  - `D-414`: `compaction` (resolves `techniques.md#matt-compaction`)
  - `D-415`: `decision-mapping` (resolves `techniques.md#matt-decision-mapping`)
  - `D-416`: `conversational-wizard-flow` (resolves `techniques.md#matt-wizard`)
  - `D-417`: `shellcheck` (resolves `techniques.md#matt-shellcheck`)
  - `D-418`: `grill-me` (resolves `techniques.md#matt-grill-me`)
  - `D-419`: `the-research-skill` (resolves `techniques.md#matt-the-research-skill`)
  - `D-420`: `plan-step-decomposition` (resolves `techniques.md#matt-step`)
  - `D-421`: `writing-shape` (resolves `techniques.md#matt-writing-shape`)
  - `D-422`: `terminal-clearing-technique` (resolves `techniques.md#matt-clearing`)
  - `D-423`: `wayfinder-routing` (resolves `techniques.md#matt-wayfinder-routing`)
  - `D-424`: `domain-modelling` (resolves `techniques.md#matt-domain-modelling`)
  - `D-425`: `push-right` (resolves `techniques.md#matt-push-right`)
  - `D-426`: `steps-and-completion-criteria` (resolves `techniques.md#matt-steps-and-completion-criteria`)
  - `D-427`: `execution-continuation-prompt` (resolves `techniques.md#matt-continue`)
  - `D-428`: `lint-staged` (resolves `techniques.md#matt-lint-staged`)
  - `D-429`: `single-interview-round` (resolves `techniques.md#matt-round`)
  - `D-430`: `multi-topic-grilling` (resolves `techniques.md#matt-grills`)
  - `D-431`: `when-to-split` (resolves `techniques.md#matt-when-to-split`)
  - `D-432`: `progressive-disclosure` (resolves `techniques.md#matt-progressive-disclosure`)
  - `D-433`: `cli-banner-display` (resolves `techniques.md#matt-banner`)
  - `D-434`: `call-graph-collapse` (resolves `techniques.md#matt-call-graph-collapse`)
  - `D-435`: `conversational-feel` (resolves `techniques.md#matt-conversational-feel`)
  - `D-436`: `changeset-versioning-technique` (resolves `techniques.md#matt-changesets`)
  - `D-437`: `ai-navigability` (resolves `techniques.md#matt-ai-navigability`)
  - `D-438`: `setup-matt-pocock-skills` (resolves `techniques.md#matt-setup-matt-pocock-skills`)
  - `D-439`: `decision-note-capture` (resolves `techniques.md#matt-note`)
  - `D-440`: `splitting-by-invocation` (resolves `techniques.md#matt-splitting-by-invocation`)
  - `D-441`: `open-url` (resolves `techniques.md#matt-open-url`)
  - `D-442`: `mock` (resolves `techniques.md#matt-mock`)
  - `D-443`: `frontier-query` (resolves `techniques.md#matt-frontier-query`)
  - `D-444`: `grill-with-docs` (resolves `techniques.md#matt-grill-with-docs`)
  - `D-445`: `task-completion-verification` (resolves `techniques.md#matt-finish`)
  - `D-446`: `prototyping` (resolves `techniques.md#matt-prototyping`)
  - `D-447`: `configuration-management` (resolves `techniques.md#matt-configuration-management`)
  - `D-448`: `exploratory-legwork` (resolves `techniques.md#matt-legwork`)
  - `D-449`: `native-issue-dependencies` (resolves `techniques.md#matt-native-issue-dependencies`)
  - `D-450`: `fromany` (resolves `techniques.md#matt-fromany`)
  - `D-451`: `tool-economy` (resolves `techniques.md#matt-tool-economy`)
  - `D-452`: `subagent-dispatch` (resolves `techniques.md#matt-subagent-dispatch`)
  - `D-453`: `milestone-retrospective` (resolves `techniques.md#matt-retro`)
  - `D-454`: `multi-session-planning` (resolves `techniques.md#matt-multi-session-planning`)
  - `D-455`: `wait-what` (resolves `techniques.md#matt-wait-what`)
  - `D-456`: `writing-fragments` (resolves `techniques.md#matt-writing-fragments`)
  - `D-457`: `grounding` (resolves `techniques.md#matt-grounding`)
  - `D-458`: `conflict-resolution-technique` (resolves `techniques.md#matt-resolve`)
  - `D-459`: `hidden-entry` (resolves `techniques.md#matt-hidden-entry`)
  - `D-460`: `hidden-secret-entry` (resolves `techniques.md#matt-hidden-secret-entry`)
  - `D-461`: `deduplication` (resolves `techniques.md#matt-deduplication`)
  - `D-462`: `re-pitches` (resolves `techniques.md#matt-re-pitches`)
  - `D-463`: `grill-the-send-not-the-subject` (resolves `techniques.md#matt-grill-the-send-not-the-subject`)
  - `D-464`: `session-clear-command` (resolves `techniques.md#matt-clear`)
  - `D-465`: `skill-execution-harness-technique` (resolves `techniques.md#matt-skills`)
  - `D-466`: `trigger-phrasing` (resolves `techniques.md#matt-trigger-phrasing`)
  - `D-467`: `tldr-abbreviation-command` (resolves `techniques.md#matt-tldr`)
  - `D-468`: `adversarial-grilling-technique` (resolves `techniques.md#matt-grilling`)
  - `D-469`: `post-mortem` (resolves `techniques.md#matt-post-mortem`)
  - `D-470`: `no-fluff` (resolves `techniques.md#matt-no-fluff`)
  - `D-471`: `retrieval-practice` (resolves `techniques.md#matt-retrieval-practice`)
  - `D-472`: `instrumentation` (resolves `techniques.md#matt-instrumentation`)
  - `D-473`: `existing-code-exploration` (resolves `techniques.md#matt-existing`)
  - `D-474`: `fromexact` (resolves `techniques.md#matt-fromexact`)
  - `D-475`: `hitl-bash-script` (resolves `techniques.md#matt-hitl-bash-script`)
  - `D-476`: `mermaid-graph` (resolves `techniques.md#matt-mermaid-graph`)
  - `D-477`: `facts-vs-decisions` (resolves `techniques.md#matt-facts-vs-decisions`)
  - `D-478`: `retrieval-spacing-discipline` (resolves `techniques.md#matt-spacing`)
  - `D-479`: `chart-the-map` (resolves `techniques.md#matt-chart-the-map`)
  - `D-480`: `setup-pre-commit` (resolves `techniques.md#matt-setup-pre-commit`)
  - `D-481`: `leading-word` (resolves `techniques.md#matt-leading-word`)
  - `D-482`: `single-session-planning` (resolves `techniques.md#matt-single-session-planning`)
  - `D-483`: `grilling-session` (resolves `techniques.md#matt-grilling-session`)
  - `D-484`: `interleaving` (resolves `techniques.md#matt-interleaving`)
  - `D-485`: `npx-skills` (resolves `techniques.md#matt-npx-skills`)
  - `D-486`: `leading-words` (resolves `techniques.md#matt-leading-words`)
  - `D-487`: `prompt-quality` (resolves `techniques.md#matt-prompt-quality`)
  - `D-488`: `claims-verification-technique` (resolves `techniques.md#matt-claims`)
  - `D-489`: `wayfinder-exploration-skill` (resolves `techniques.md#matt-wayfinder`)
  - `D-490`: `zone-of-proximal-development` (resolves `techniques.md#matt-zone-of-proximal-development`)
  - `D-491`: `frompartial` (resolves `techniques.md#matt-frompartial`)
  - `D-492`: `context-compaction-command` (resolves `techniques.md#matt-compact`)
  - `D-493`: `fluency-strength` (resolves `techniques.md#matt-fluency-strength`)
  - `D-494`: `guided-walkthroughs` (resolves `techniques.md#matt-guided-walkthroughs`)
  - `D-495`: `multi-commit-rebase` (resolves `techniques.md#matt-multi-commit-rebase`)
  - `D-496`: `warning-escalation-helper` (resolves `techniques.md#matt-warn`)
  - `D-497`: `delegating` (resolves `techniques.md#matt-delegating`)
  - `D-498`: `plain-english` (resolves `techniques.md#matt-plain-english`)
  - `D-499`: `prettier` (resolves `techniques.md#matt-prettier`)
  - `D-500`: `intent-dispatch-send` (resolves `techniques.md#matt-send`)
  - `D-501`: `work-through-the-map` (resolves `techniques.md#matt-work-through-the-map`)
  - `D-502`: `natural-language-steering` (resolves `techniques.md#matt-natural-language-steering`)
  - `D-503`: `safe-read-command` (resolves `techniques.md#matt-read-r`)
  - `D-504`: `bash-syntax-check` (resolves `techniques.md#matt-bash-n`)
  - `D-505`: `execution-wait-helper` (resolves `techniques.md#matt-wait`)
  - `D-506`: `interactive-teaching-dialogue` (resolves `techniques.md#matt-teach`)
  - `D-507`: `introduced-change-tracking` (resolves `techniques.md#matt-introduced`)
  - `D-508`: `no-ops` (resolves `techniques.md#matt-no-ops`)
  - `D-509`: `ask-secret` (resolves `techniques.md#matt-ask-secret`)
  - `D-510`: `free-play-buttons` (resolves `techniques.md#matt-free-play-buttons`)
  - `D-511`: `direct-feedback-utterance` (resolves `techniques.md#matt-say`)
- Populated `docs/plan/GLOSSARY.md` with 239 canonical technique terms in strict alphabetical order under `### Techniques` (totaling 241 technique terms), each citing definition, kind, verbatim source names, decision, concordance link, and distinctions.
- Updated `docs/analysis/concordance/techniques.md` marking all 239 decision rows with their resolved decision IDs (`D-273`–`D-511`).
- Updated `docs/analysis/concordance/_summary.md` recording 0 unresolved rows remaining for Techniques (total remaining across all families down to 130).
- Updated `docs/plan/STATE.md` with current unit `D-512 (gates concordance decisions)`, decision counts (430 active), glossary terms (415), and next action.
- Checkpointed to disk after completing the `techniques` concept family per METHOD.md §5 and §8.2.

## What the next session must know
- The `techniques` concept family is fully resolved: all 239 decision rows mapped to decisions `D-273` through `D-511` and 239 terms populated in `docs/plan/GLOSSARY.md`.
- Next family to resolve is `gates` (`docs/analysis/concordance/gates.md`), which requires 7 alignment decisions starting at `D-512` per the work list in `_summary.md`.
- `prefix-check.ts` combined hash changed from `ab91999586e051d8` to `3a66c666f060504d` because `GLOSSARY.md` was updated as required by Phase 4.

## Blocked
none

## Next action
Phase 4 — Alignment decisions: begin resolving the `gates` concordance family starting at decision `D-512` for `docs/analysis/concordance/gates.md` per `_summary.md` and METHOD.md §5.

## For Peter
none

## Scripts run
- `bun scripts/synthesis/budget.ts --line` → exit 0 (used=6.80%)
- `bun scripts/synthesis/units.ts show cc-rjm-376` → exit 0 (done)
- `bun scripts/synthesis/memo.ts check cc-rjm-376` → exit 0 (9 cards HIT)
- `bun scripts/synthesis/quote-check.ts --summary ...` → exit 0 (9 PASS, 0 FAIL across 9 cards)
- `bun scripts/synthesis/units.ts status` → exit 0 (876 total — pending 0 · in-progress 0 · done 876 · blocked 0 · rolled-back 0)
- `git branch --show-current && git -C sources/addy rev-parse HEAD && git -C sources/matt rev-parse HEAD && git -C sources/rjm rev-parse HEAD && ls -d sources/addy-external sources/matt-external && git status --porcelain` → exit 0 (v2, pins match, clean tree)
- `bun scripts/synthesis/prefix-check.ts` → exit 0 (31 files, combined ab91999586e051d8)
- `bun scripts/synthesis/partition.ts --check && bun scripts/synthesis/units.ts check && bun scripts/synthesis/coverage.ts --quiet && bun scripts/synthesis/glossary-lint.ts && bun scripts/synthesis/memo.ts audit | tail -1 && bun scripts/synthesis/partition-concepts.ts --check && bun scripts/synthesis/concept-index.ts --check` → exit 0 (all clean)
- `bun scripts/synthesis/budget.ts --record start` → exit 0 (used=7.85%)
- `bun /Users/peterkloss/.gemini/antigravity-cli/brain/cbb27186-9f87-4fc6-8430-0f88c17f3c66/scratch/apply-p4-techniques.ts` → exit 0 (applied D-273–D-511, updated GLOSSARY.md, techniques.md, _summary.md, STATE.md)
- `bun scripts/synthesis/glossary-lint.ts && bun scripts/synthesis/coverage.ts --quiet && bun scripts/synthesis/units.ts check && bun scripts/synthesis/partition.ts --check && bun scripts/synthesis/partition-concepts.ts --check && bun scripts/synthesis/concept-index.ts --check` → exit 0 (all clean)
- `bun scripts/synthesis/units.ts sync` → exit 0
- `bun scripts/synthesis/prefix-check.ts --compare ab91999586e051d8` → exit 1 (prefix CHANGED: was ab91999586e051d8, now 3a66c666f060504d; GLOSSARY.md updated in Phase 4)
- `bun scripts/synthesis/budget.ts --record close` → exit 0 (used=16.14%)
- `bun scripts/synthesis/budget.ts --measure` → exit 0

## Context note
- `start`: `budget 2026-09-08T01:28:48.283Z conv=cbb27186 model="Gemini 3.8 Flash (High)" used=7.85% peak=7.85% governing=25.00% close=1.39% headroom=15.76% pending=0 → STOP`
- `close`: `budget 2026-09-08T01:32:55.604Z conv=cbb27186 model="Gemini 3.8 Flash (High)" used=16.14% peak=16.14% governing=25.00% close=1.39% headroom=7.47% pending=0 → STOP`
- `verdict at stop`: `STOP — checkpointed to disk after techniques concept family per METHOD.md §5 and §8.2`
- `rot metrics`: 0 observed across conversation
- `compactions`: 0
