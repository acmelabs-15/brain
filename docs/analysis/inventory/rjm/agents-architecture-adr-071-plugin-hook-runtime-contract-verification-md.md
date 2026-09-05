---
package: rjm
path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md
type: agent
bytes: 48525
unit: inv-rjm-28
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md

## Purpose — required, verbatim
> "This ADR records the verified contract and mandates verification for the class of artifact, so the same failure cannot recur silently." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:155-156

## Design intent — required
Establishes an empirical verification requirement and binding failure policy for plugin hooks across Claude Code and GitHub Copilot CLI. Addresses a severe P0 incident (#2205) where relative hook command paths emitted by the generator wedged customer environments for 33 days because Copilot CLI executes hooks from the user's working directory rather than the plugin installation directory, causing the python interpreter to fail before in-script fail-open handlers could run. Reverses the project's historical fail-open guidance to a strict "prevention-first, fail-closed-and-loud" principle (Decision item 5) with plugin-root anchoring (Decision item 1) and multi-layered verification (CI static anchoring validation, simulated non-plugin cwd execution, and version-pinned real-CLI smokes). Without this ADR, multi-harness hook generation would rely on unverified assumptions from analogy, allowing silent failures or breaking launcher bugs to escape to users without runtime contract enforcement.

## Phase — required
cross-phase

## Inputs — required
- Probe plugin environment measurement:
  > "Measured empirically (session 1873; probe plugin installed into each CLI, hook dumped its environment and executed the generated command from a non-plugin cwd). Recorded in Serena memory `decision-copilot-cli-hook-plugin-root-contract`." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:160-162
- Empirical probe environment dump:
  - "EVENT: preToolUse  PWD=/tmp" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:185
  - "COPILOT_PLUGIN_ROOT=[/home/.../installed-plugins/_direct/<plugin>]" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:186
  - "CLAUDE_PLUGIN_ROOT=[/home/.../installed-plugins/_direct/<plugin>]" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:187
  - "PR-form anchored=[${...}/hooks/probe_target.txt] exists=YES" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:188
  - "bare ./hooks/probe_target.txt exists=NO" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:189
- Incident history and generator behavior:
  > "The generator emitted Copilot hook commands as `python3 -u \"./hooks/<event>/<script>.py\"` with `cwd: \".\"`." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:128-129
- Six-agent review panel consensus:
  > "Accepted (2026-06-02, six-agent adr-review: 2 Accept, 4 Disagree-and-Commit, 0 Block)." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:16-17
- Vendor documentation contracts:
  - "Current official docs define hook `cwd` as repository-relative or absolute." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:237
  - "[GitHub Copilot hooks reference](https://docs.github.com/en/copilot/reference/hooks-reference)" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:201
  - "[probe-evidence.md, section 4](../../.claude/skills/agent-harness-reference/references/probe-evidence.md#4-copilot-cli-1072-1-contract-correction)" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:197
- Amendments and issue threads:
  - Issue #4874 (`require-subagent-model` gate addition and debate log `.agents/critique/ADR-068-071-085-metric-refresh-debate-log.md`)
  - Issue #5013 (ADR-085 Decision 7 exclusion of `push_pr_script_identity_guard` from Copilot generation and debate log `.agents/critique/ADR-068-071-085-5013-debate-log.md`)
  - Issue #5061 (`serena_memory_scope_guard` addition and debate log `.agents/critique/ADR-068-071-5061-debate-log.md`)
  - Issue #5154 (ADR-085 section 8 deletion of `push_pr_script_identity_guard`, `markdownlint_guard`, and `markdown_auto_lint`)
  - Issue #4917 (`serena_worktree_scope` anchoring fix)
  - ADR-097 (retirement of all tool-use runtime contracts)

## Outputs — required
- Mandatory anchoring policy (Decision item 1):
  > "Anchor every plugin hook command to the plugin root." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:619
- Pre-release runtime verification requirement (Decision item 2):
  > "Customer-facing generated artifacts MUST be runtime-verified before release." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:633-634
- Governance failure mode establishment (Decision item 3):
  > "Customer-facing generated artifact shipped without runtime verification." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:642
- Tool version recording mandate (Decision item 4):
  > "Record the verified contract with the measured tool versions." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:644
- Fail-closed and loud failure policy (Decision item 5):
  > "Hook launchers MUST fail closed and loud, not silently degrade." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:648
- Authenticated smoke testing constraints (Decision item 6):
  > "Authenticated smoke MUST install reviewed top-level CLI versions before receiving credentials." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:659-660
- Shipped verification mechanisms:
  - Enforced by `scripts/validation/validate_hook_anchoring.py`
  - Codified in `.claude/rules/generated-artifacts.md`
  - Registered as failure mode FM #11 in `.agents/governance/FAILURE-MODES.md`
  - Tested in CI by `.github/workflows/validate-plugin-manifests.yml` and `tests/build_scripts/test_generate_hooks_runtime_contract.py`
  - Tested in smoke by `tests/e2e/test_cli_hook_e2e.py` and `.github/workflows/nightly-cli-smoke.yml`

## Invokes — required
- doc .agents/critique/ADR-071-debate-log.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:20
- doc .agents/critique/ADR-068-071-085-metric-refresh-debate-log.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:37
- doc .agents/critique/ADR-068-071-085-5013-debate-log.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:48
- doc .agents/critique/ADR-068-071-5061-debate-log.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:58
- doc .agents/architecture/ADR-084-vendored-hook-roi-bar.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:64
- doc ADR-085 — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:40
- doc ADR-097 — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:25
- doc ADR-068 — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:55
- doc .agents/retrospective/2026-06-02-pr-2205-customer-wedge-incident.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:127
- doc .claude/rules/generated-artifacts.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:634
- doc .claude/rules/canonical-source-mirror.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:770
- doc .agents/governance/FAILURE-MODES.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:641
- script scripts/validation/validate_hook_anchoring.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:595
- script tests/build_scripts/test_generate_hooks_runtime_contract.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:677
- script tests/e2e/test_cli_hook_e2e.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:256
- script tests/test_nightly_cli_smoke_security.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:780
- script tests/e2e/copilot_hook_probe.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:782
- config renovate.json — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:784
- config .claude/hooks/hooks.json — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:121
- config .claude/hooks/dispatch_groups.json — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:106
- config .claude/settings.json — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:598
- config src/copilot-cli/hooks/hooks.json — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:122
- script build/scripts/generate_hooks.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:123
- script build/scripts/generate_hooks_emit.py — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:764
- reference agent-harness-reference/references/probe-evidence.md — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:274
- doc .github/workflows/validate-plugin-manifests.yml — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:626
- doc .github/workflows/nightly-cli-smoke.yml — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:660
- doc .github/workflows/pr-validation.yml — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:413
- doc .github/workflows/pytest.yml — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:727

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:136
- doc ADR-071 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:115
- doc ADR-071 — .agents/architecture/ADR-035-exit-code-standardization.md:494
- doc ADR-071 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- doc ADR-071 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:864
- doc ADR-071 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:223
- doc ADR-071 — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:26
- doc ADR-071 — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:897
- doc ADR-071 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:478
- doc ADR-071 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:586
- skill ADR-071 — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:89
- skill ADR-071 — src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:60
- skill ADR-071 — src/copilot-cli/skills/agent-harness-reference/SKILL.md:347
- skill ADR-071 — src/copilot-cli/skills/ai-agents-failure-archaeology/SKILL.md:171

## Concepts named — required, verbatim
- `ADR-071` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:2 — defined here
- `Plugin Hook Runtime-Contract Verification` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:12 — defined here
- `six-agent adr-review` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:16 — used here
- `fail-open` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:17 — used here
- `fail-closed` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:20 — used here
- `plugin-root anchoring` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:29 — defined here
- `require-subagent-model` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:34 — used here
- `PreToolUse` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:35 — used here
- `push_pr_script_identity_guard` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:41 — used here
- `serena_memory_scope_guard` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:50 — used here
- `markdownlint_guard` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:77 — used here
- `markdown_auto_lint` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:77 — used here
- `serena_worktree_scope` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:105 — used here
- `COPILOT_PLUGIN_ROOT` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:143 — used here
- `CLAUDE_PLUGIN_ROOT` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:143 — used here
- `validate-plugin-manifests` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:150 — used here
- `SessionEnd` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:211 — used here
- `SubagentStop` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:212 — used here
- `PermissionRequest` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:217 — used here
- `PreCompact` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:228 — used here
- `PostToolUse` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:243 — used here
- `SessionStart` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:247 — used here
- `UserPromptSubmit` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:248 — used here
- `PostToolUseFailure` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:248 — used here
- `Stop` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:248 — used here
- `validate_hook_anchoring.py` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:595 — defined here
- `FM #11` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:641 — defined here
- `silent-failure anti-pattern` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:652 — used here
- `nightly-cli-smoke` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:660 — used here
- `ADR-068` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:55 — used here
- `ADR-084` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:63 — used here
- `ADR-085` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:40 — used here
- `ADR-097` — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:25 — used here

## Structure
- # ADR-071: Plugin Hook Runtime-Contract Verification
- ## Status
- ## Date
- ## Context
- ## Verified Runtime Contract
- ### 2026-07-19 amendment: Copilot CLI 1.0.72-1
- ### 2026-08-11 amendment: require-subagent-model gate (issue #4874)
- ### 2026-08-14 amendment: push-pr identity guard excluded from Copilot generation (issue #5013)
- ### 2026-08-18 amendment: Serena memory worktree-scope guard (issue #5061)
- ### 2026-08-18 amendment: push-pr identity guard deleted from both harnesses (issue #5154, landed on `main` independently of #5061 above)
- ### 2026-08-19 reconciliation: merging issues #5061 and #5154
- ### 2026-08-19 reconciliation: merging issue #4917 into the #5061+#5154 tree
- ### 2026-08-19 amendment: every tool-use runtime contract retired (ADR-097)
- ## Decision
- ## Consequences
- ### Positive
- ### Negative / Costs
- ### Residual risk (mitigated by prevention and loud failure)
- ### Delivered follow-ups
- ## Alternatives Considered
- ## Reversibility and Vendor Lock-in
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:744 · References `PROTOCOL-ANTIPATTERNS.md` without path (the file is located at `.agents/governance/PROTOCOL-ANTIPATTERNS.md`).
- `doc-drift` · .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:25-33,570-616 · The 2026-08-19 amendment (ADR-097) notes that all tool-use gate runtime contracts documented in the 2026-08-11 through 2026-08-19 amendment sections describe retired code that was deleted from both harnesses, leaving only Decision item 1 (plugin-root anchoring) active.

## Observations
- Customer-wedging incident (#2205) root-cause analysis: Demonstrates a catastrophic multi-platform failure mode where relative paths in generated hook commands (`python3 -u "./hooks/<event>/<script>.py"` with `cwd: "."`) broke in Copilot CLI because it runs hooks in the user's working directory rather than the plugin install directory. Because the failure occurred at the launcher level, Python exited before reading the script, completely bypassing in-script fail-open wrappers and wedging customer environments for 33 days across versions 0.3.0 to 0.5.6.
- Strategic reversal from fail-open to prevention + fail-closed-and-loud: Resolves the tension between resilience and observability by mandating that hook launchers fail closed and loud (Decision item 5) rather than masking failures with a silent exit 0 (the silent-failure anti-pattern). The protection against environment wedging is placed entirely on prevention: static anchoring validation (`scripts/validation/validate_hook_anchoring.py`) and simulated runtime-contract tests (`tests/build_scripts/test_generate_hooks_runtime_contract.py`).
- Tripartite verification defense:
  1. Static validation: Verifies generated configuration against generator template shape before push and in CI (`validate-plugin-manifests.yml`).
  2. Simulated contract execution: Executes generated command strings under non-plugin working directories with negative controls in pytest without credentials.
  3. Authenticated CLI smoke: Runs nightly pinned versions of Claude Code and Copilot CLI (`nightly-cli-smoke.yml`) passing `--no-auto-update` to isolate vendor launcher drift.
- Multi-agent architectural governance: The ADR was reviewed by a six-agent panel (2 Accept, 4 Disagree-and-Commit, 0 Block), establishing Failure Mode FM #11 in `.agents/governance/FAILURE-MODES.md` and rule `.claude/rules/generated-artifacts.md`.

## Context cost
48525 bytes (~12131 tokens).
