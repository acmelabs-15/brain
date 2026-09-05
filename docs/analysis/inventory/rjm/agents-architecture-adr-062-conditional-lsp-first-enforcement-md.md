---
package: rjm
path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md
type: agent
bytes: 25046
unit: inv-rjm-23
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md

## Purpose — required, verbatim
> "Adopt a conditional, availability-gated LSP-first enforcement layer, ported to Python, wired into both harnesses, covering every LSP-navigable file type." — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:164-165

## Design intent — required
Enforces a Language Server Protocol (LSP)-first navigation pattern across coding agents to replace token-costly, noisy Grep, Glob, and full-file Read queries for symbol definition and reference lookup with precise file:line LSP responses. While originally architected as a graduated runtime enforcement system using PreToolUse and PostToolUse hooks across all configured languages (with graceful fail-open degradation), subsequent ROI review found runtime interception costly and prone to false positives. The design intent survives as three-tier static steering (Serena MCP symbolic tools first, then native LSP, then grep/glob/sed as fallback) embedded into session instructions and start protocols, preserving agent navigation efficiency without runtime blocking overhead.

## Phase — required
none

## Inputs — required
Target file path and language from agent tool calls (Read, Grep, bash grep/rg/egrep/fgrep/ag/ack); language configuration and capabilities from `.serena/project.yml` (8 configured languages: bash, yaml, python, markdown, powershell, typescript, json, toml); MCP server presence and harness native LSP capability configuration; runtime session gate state (warmup flag, nav_count, read_count, read-file set) from user-scoped state directory keyed by `hashlib.sha256(cwd)`; environment variables `SKIP_LSP_GATE` (kill switch) and `LSP_GATE_MODE` (`block` or `warn`); repository conflict markers (`.git/MERGE_HEAD`, `.git/rebase-merge`, `.git/rebase-apply`, or inline markers `<<<<<<<`, `=======`, `>>>>>>>`).

## Outputs — required
Hook decisions: exit 0 (allow/warn with systemMessage), exit 2 (block with guidance to call symbol overview/diagnostics first), or Copilot CLI `permissionDecision`; audit log entries: one-line decision records appended to hook `audit.log`; state file updates via PostToolUse usage tracker; static steering rules: `.claude/rules/lsp-first.md` mirrored to `.github/instructions/` and `src/copilot-cli/instructions/`.

## Invokes — required
- doc .claude/rules/lsp-first.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:42
- doc AGENTS.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:43
- doc .agents/critique/ADR-062-debate-log.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:99
- doc .claude/rules/claude-model-patches.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:116
- config .serena/project.yml — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:128
- config .claude/settings.json — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:291
- config .claude/hooks/hooks.json — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:291
- config src/copilot-cli/hooks/hooks.json — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:292
- script build/scripts/generate_hooks.py — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:292
- script build/scripts/generate_rules.py — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:296
- script build/scripts/validate_install_parity.py — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:297
- config .claude/.claude-plugin/plugin.json — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:366
- doc .claude/rules/canonical-source-mirror.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc .claude/rules/release-it.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc ADR-006 — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc ADR-008 — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc ADR-033 — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc ADR-035 — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc ADR-042 — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440
- doc .claude/skills/software-engineering-library/references/release-it.md — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:450

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:132
- doc .agents/critique/ADR-062-debate-log.md — .agents/critique/ADR-062-debate-log.md:3

## Concepts named — required, verbatim
- `Conditional LSP-First Navigation Enforcement` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:12 — defined here
- `runtime enforcement layer` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:18 — defined here
- `static steering` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:18 — defined here
- `Serena Init` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:43 — used here
- `BLOCKING` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:43 — used here
- `Three-tier navigation preference` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:48 — defined here
- `true positive` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:55 — used here
- `false positives` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:56 — used here
- `spawn tax` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:61 — defined here
- `fail-open` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:73 — used here
- `Language Server Protocol` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:106 — used here
- `native LSP` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:172 — used here
- `SYMBOL-NAVIGATION` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:183 — defined here
- `Read gate` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:192 — defined here
- `Graduated Read gate` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:195 — defined here
- `Warmup` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:205 — defined here
- `Soft warn` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:206 — defined here
- `Hard block` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:207 — defined here
- `Surgical` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:208 — defined here
- `kill switch` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:234 — defined here
- `Buy-vs-Build` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:321 — used here
- `User Sovereignty` — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:343 — used here

## Structure
- # ADR-062: Conditional LSP-First Navigation Enforcement — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:12
- ## Status — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:14
- ## Date — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:21
- ## Amendment 2026-07-17 (accepted): Retire the runtime enforcement layer, keep the static steering — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:25
- ## Context — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:101
- ## Decision Drivers — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:150
- ## Decision — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:162
- ### 1. Three-tier navigation preference — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:170
- ### 2. Conditional blocking, never unconditional — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:177
- ### 3. Graduated Read gate, three tiers, all configured languages — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:195
- ### 4. State: owned, outside the working tree, fail-open — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:215
- ### 5. Failure modes: fail-open is the default — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:228
- ### 6. Operability: kill switch and mode — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:234
- ### 7. Security — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:243
- ### 8. Performance — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:266
- ### 9. Module design (deep modules, thin guards) — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:275
- ### 10. Cross-harness via generation — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:289
- ## Prior Art Investigation — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:299
- ## Rationale — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:309
- ### Alternatives Considered — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:311
- ### Buy-vs-Build (Quick Tier, precondition) — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:321
- ## Consequences — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:329
- ### Positive — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:331
- ### Negative — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:337
- ### Architect-review dissent (recorded, overridden by user under User Sovereignty) — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:343
- ### Neutral — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:353
- ## Impact on Dependent Components — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:358
- ## Relationship to Prior ADRs — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:370
- ## Implementation Notes — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:390
- ## More Information — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:420
- ## References — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:434
- ## Amendment 2026-07-27 — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:446

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:440 · References .claude/rules/release-it.md which was relocated to .claude/skills/software-engineering-library/references/release-it.md per line 450 amendment.
- missing-path · .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:34-41 · References retired hooks and modules (.claude/hooks/PreToolUse/invoke_lsp_read_guard.py, etc.) which were deleted during issue #3216.
- doc-drift · .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:422-427 · Notes that two ADR-061 files and an ADR-058 duplicate existed; collision was partially resolved by renumbering to ADR-065, but mentions an unresolved ADR-062 duplicate.

## Observations
Exemplar of fail-open architectural design with empirical evidence-driven reversal: initial hard enforcement was replaced by static steering and session protocol after telemetry revealed a high false-positive rate and high Windows spawn latency.

## Context cost
25046 bytes, ~6100 tokens. When consulted, loads no external files directly.
