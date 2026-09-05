---
package: rjm
path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md
type: agent
bytes: 56562
unit: inv-rjm-35
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md

## Purpose — required, verbatim
> "A vendored guard hook may be replaced by host-native permissions only when all three hold:" — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:271-272

## Design intent — required
Establishes an architectural policy and three-part eligibility test (Portability, Fidelity, Policy safety) governing whether vendored agent hooks can be replaced by host-native permission declarations (such as Claude Code's `permissions.allow`/`deny`). Addresses the asymmetry between agent harnesses—specifically that Copilot CLI lacked a repo-committed permission surface and that Claude Code's separator-based command parsing cannot screen shell metacharacters like command substitution (`$(...)`) or redirects (`>`) on auto-approval paths. Crucially determines that a test-runner name (e.g., `pytest`) is not a security boundary because test collection and runners execute arbitrary repository-controlled code without prompt confirmation. Disposes of survivor hooks by retiring dogfood-only developer experience guards (`skill_first_guard`), removing memory-sync observers from plugin distribution (`observation_sync`), deleting unsafe auto-approval paths (`test_auto_approval`), governing temporary cross-harness exclusions (`copilotExclude` on `push_pr_script_identity_guard`), and relocating formatting checks (`markdownlint_guard`, `markdown_auto_lint`) to Git/Lefthook commit-time schedulers. Without it, the project would have introduced severe security regressions by auto-approving malicious command substitutions under the false assumption that host permissions were a drop-in replacement for hooks, while leaving orphaned and self-neutering hooks in distributed plugins.

## Phase — required
cross-phase

## Inputs — required
- Issue #3217 and #3197 vendored-hook ROI review (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:17-18)
- Historical debate record `.agents/analysis/ADR-085-permission-surface-debate.md` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:20)
- Superseding security-amendment debate log `.agents/critique/ADR-085-debate-log.md` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:23)
- Metric refresh debate log `.agents/critique/ADR-068-071-085-metric-refresh-debate-log.md` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:41)
- Containment incident debate log `.agents/critique/ADR-068-071-085-5013-debate-log.md` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:56)
- Copilot CLI 1.0.72-1 help probe recorded in `agent-harness-reference` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:160-163)
- Safety-audit findings 19 and 48 in `.agents/audits/2026-07-02-safety-audit.md` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:919)
- Full-context security review `.serena/memories/reviews/fix-copilot-hook-contract-213f3af.md` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:262)
- Execution timing benchmark of dispatch group (102 ms median over 5 runs with `python3 -u .claude/hooks/invoke_dispatch_claude.py`) (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:571-575)

## Outputs — required
- Decision 1: Three-part general eligibility test for hook-to-permissions migration (`Portability`, `Fidelity`, `Policy safety`) (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:269-285)
- Decision 2 (D-A): Removal of `skill_first_guard` from the vendored surface; terminal state 2 Retirement (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:287-337)
- Decision 3 (D-B): Superseding decision to delete `test_auto_approval` auto-approval path while retaining generic PermissionRequest translation adapter (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:339-356)
- Decision 4: Removal of `observation_sync` from vendored surface while retaining local repository hook (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:358-370)
- Decision 5: Component-level machinery disposition policy for dispatchers and adapters (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:371-382)
- Decision 6: Confirmation criteria and live hook inventory baseline (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:383-437)
- Decision 7 (D-C): Generic field governance (9 rules) and 8 reintroduction gates for `copilotExclude` (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:439-536)
- Decision 8 (D-D): Complete deletion of `push_pr_script_identity_guard` and dispatch group from both harnesses (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:538-617)
- Decision 9 (D-E): Complete deletion of `markdownlint_guard` push gate, relocating markdown linting to Git hooks / Lefthook (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:619-676)
- Decision 10 (D-F): Complete deletion of `markdown_auto_lint` PostToolUse hook, relocating auto-fixing to commit-time Lefthook (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:678-711)

## Invokes — required
- doc .agents/analysis/ADR-085-permission-surface-debate.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:20
- doc .agents/critique/ADR-085-debate-log.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:23
- doc .agents/critique/ADR-068-071-085-metric-refresh-debate-log.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:41
- doc .agents/critique/ADR-068-071-085-5013-debate-log.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:56
- doc .agents/architecture/ADR-084-vendored-hook-roi-bar.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:78
- config .github/workflows/pr-validation.yml — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:86
- script .github/scripts/parse_pr_standards.py — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:88
- script scripts/ci/enforce_pr_validation.py — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:89
- config lefthook.yml — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:99
- config .claude/settings.json — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:175
- script .claude/lib/hook_utilities/guards.py — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:187
- doc .serena/memories/reviews/fix-copilot-hook-contract-213f3af.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:262
- config .claude/hooks/hooks.json — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:412
- config .claude/hooks/dispatch_groups.json — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:416
- script .claude/hooks/invoke_dispatch_claude.py — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:573
- doc .agents/critique/ADR-084-debate-log.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:650
- doc .agents/audits/2026-07-02-safety-audit.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:919
- reference .claude/skills/agent-harness-reference/references/official-hook-contracts.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:923
- reference .claude/skills/agent-harness-reference/references/probe-evidence.md — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:925

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:145
- skill ADR-085 — src/copilot-cli/skills/ai-agents-portability-campaign/SKILL.md:273
- reference ADR-085 — src/copilot-cli/skills/agent-harness-reference/references/probe-evidence.md:218
- reference ADR-085 — src/copilot-cli/skills/context-optimizer/references/rule-audit-procedure.md:13

## Concepts named — required, verbatim
- `vendored-hook ROI review` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:18 — used here
- `Finding 3` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:26 — defined here
- `Retirement` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:30 — defined here
- `timed child-process deny` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:45 — used here
- `residual risk` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:51 — used here
- `copilotExclude` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:67 — defined here
- `Finding 1` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:156 — defined here
- `skip_if_consumer_repo` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:185 — used here
- `Finding 2` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:199 — defined here
- `DANGEROUS_METACHARACTERS` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:204 — used here
- `command-chaining bypass` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:213 — used here
- `Portability` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:274 — defined here
- `Fidelity` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:278 — defined here
- `Policy safety` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:282 — defined here
- `User Sovereignty` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:302 — used here
- `Repository-only agent-time carrier` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:319 — defined here
- `Generic field governance` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:483 — defined here
- `Reintroduction gates` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:517 — defined here
- `D-A` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:715 — defined here
- `D-B` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:737 — defined here
- `D-C` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:439 — defined here
- `D-D` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:538 — defined here
- `D-E` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:619 — defined here
- `D-F` — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:678 — defined here

## Structure
- # ADR-085: Cross-Harness Permission-Surface Asymmetry and Hook Survivor Disposition
- ## Status
- ## Amendment Record
- ## Date
- ## Context
- ### Finding 1: Copilot has no repo-committed permission surface, and the guard self-neutered before retirement
- ### Finding 2: Claude allow-rules do not screen the metacharacters the test hook rejects
- ### Finding 3: A runner name is not a trust boundary
- ## Decision
- ### 1. General eligibility test for hook-to-permissions migration
- ### 2. `skill_first_guard`: remove it from the vendored surface; preserve only enforceable policy (D-A)
- ### 3. `test_auto_approval`: delete the auto-approval path (D-B superseded)
- ### 4. `observation_sync`: remove from the vendored surface
- ### 5. Component-level machinery disposition
- ### 6. Confirmation
- ### 7. `push_pr_script_identity_guard`: temporary Copilot-only exclusion, Claude retained (D-C)
- ### 8. `push_pr_script_identity_guard`: deleted from both harnesses (D-D)
- ### 9. `markdownlint_guard`: deleted, markdown linting belongs in Git hooks (D-E)
- ### 10. `markdown_auto_lint`: deleted, the same placement judgment (D-F)
- ## Resolved Owner Decisions
- ### D-A: Is `skill_first_guard` customer-facing or internal?
- ### D-B: Keep, migrate, or delete `test_auto_approval`?
- ## Prior Art Investigation
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:422 · References .github/hooks/require-subagent-model.json and .github/hooks/*.json for local Copilot runs, but .github/hooks directory does not exist in the repository.
- missing-path · .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:413 · Asserts that src/copilot-cli/hooks/PreToolUse/_manifest.json lists three shims, but this file does not exist in the repository tree.
- missing-path · .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:922 · References test file tests/build_scripts/test_copilot_dispatcher_artifact.py in References, but the file does not exist in tests/build_scripts/.
- doc-drift · .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:650 · Notes prior debate log ADR-084-debate-log.md:17 erroneously credited a reviewer verification that markdownlint_guard was not skip_if_consumer_repo gated, which source inspection disproved.

## Observations
Exhaustive architectural analysis demonstrating why declarative host permission matching cannot faithfully replace programmatically executed hooks for auto-approval or security-sensitive paths. Identifies that Claude Code's separator-aware parsing does not screen command substitutions (`$(...)`) or redirects (`>`), opening prompt-injection code execution vectors if test commands are auto-approved via `permissions.allow`. Demonstrates that runner names (`pytest`) cannot serve as trust boundaries because test discovery and execution run untrusted repository code. Establishes a rigorous field governance protocol for cross-harness exclusions (`copilotExclude`) with 9 validation rules and 8 reintroduction gates to avoid permanent unmanaged technical debt. Demonstrates compliance with ADR-084's carve-out that actual security controls cannot be eliminated through cost-benefit ROI vetos, requiring owner security judgment instead.

## Context cost
56562 bytes, approximately 14000 tokens. When factoring in referenced architecture documents (ADR-084: 21 KB), debate logs (.agents/critique/ADR-085-debate-log.md: 31 KB, .agents/analysis/ADR-085-permission-surface-debate.md: 26 KB), security reviews (.serena/memories/reviews/fix-copilot-hook-contract-213f3af.md), and reference contracts, the total referenced context surface exceeds 135 KB (~34,000 tokens).
