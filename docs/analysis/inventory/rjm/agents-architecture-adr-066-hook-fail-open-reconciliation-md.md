---
package: rjm
path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md
type: agent
bytes: 18069
unit: inv-rjm-24
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-066-hook-fail-open-reconciliation.md

## Purpose — required, verbatim
> "Chosen option: **3 - prevention-first, fail-closed-and-loud**, because the #2205 incident proved that launcher-level fail-open does not protect users. It hides broken hooks until customers pay the cost." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:64

## Design intent — required
Comprehensive architectural reconciliation reversing the legacy repo-wide "hook runtime errors are fail-open" convention (codified in ADR-008, ADR-033, ADR-035, ADR-062). Catalyzed by incident #2205 where a launcher path bug silently wedged customer environments for 33 days. Establishes a prevention-first posture (generation-time anchoring, pre-push/CI validation, runtime-contract testing) and mandates fail-closed-and-loud behavior for invariant/policy gates. Classifies hooks into three distinct operational categories with explicit failure modes: invariant gates (fail closed, exit 2 on Claude blocking events), integration points (graceful degradation), and advisory/steering hooks (fail open). Forbids silent success (`try/except: pass`, `|| true`, unconditional `exit 0`), enforces AST governance checks, and provides an auditable break-glass mechanism (`SKIP_<GATE>_GATE`).

## Phase — required
cross-phase

## Inputs — required
- Historical incident records #2205, #2230, #2263, and audit #2271 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:26
- Prior hook governance decisions (ADR-008, ADR-033, ADR-035, ADR-062) — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- Hook anchor validator `scripts/validation/validate_hook_anchoring.py` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:43
- Claude Code and Copilot CLI hook execution event protocols — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:97

## Outputs — required
- Canonical hook exit-code specification (0: allow, 1: error/allow-on-Claude, 2: policy block/fail-closed, 3: dependency unavailable, 4: auth failure) — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:82-91
- Three-tier hook taxonomy and failure-mode policy (invariant gate: fail closed; integration point: degrade; advisory hook: fail open) — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:109-114
- AST-based governance test specification rejecting success suppression and scanning emitted stdout decisions — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:140-146
- Structured code marker contract for legitimate class-3 advisory bypasses (`# fail-open: class-3 advisory, ADR-066 D4`) — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:146
- Break-glass environment variable specification (`SKIP_<GATE>_GATE`) — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:157

## Invokes — required
- reference ADR-071 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- reference ADR-008 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- reference ADR-033 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- reference ADR-035 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- reference ADR-062 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28
- script validate_hook_anchoring.py — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:43
- doc lsp-first.md — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:101
- reference ADR-084 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:101
- reference ADR-070 — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:127
- file push_guard_base.py — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:129
- file guards.py — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:129

## Invoked by — required
- doc readme — .agents/architecture/README.md:134

## Concepts named — required, verbatim
- `fail-open` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:28 — used here
- `prevention-first, fail-closed-and-loud` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:32 — defined here
- `graceful degradation` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:34 — used here
- `generation-time anchoring` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:43 — defined here
- `runtime-contract test` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:74 — defined here
- `Invariant / policy gate` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:111 — defined here
- `Integration point` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:112 — defined here
- `Advisory / steering / precondition hook` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:113 — defined here
- `prevention contract` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:135 — defined here
- `Break-glass` — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:157 — defined here

## Structure
- # ADR-066: Hook Fail-Open Reconciliation (Prevention-First, Fail-Closed-and-Loud)
- ## Status
- ## Context and Problem Statement
- ## Decision Drivers
- ## Considered Options
- ## Decision Outcome
- ### Concretely this means
- #### D1. Hook failure-mode policy
- #### D2. Exit-code reconciliation
- #### D3. ADR-062 reconciliation (completed)
- #### D4. Graceful-degradation guidance reconciliation
- #### D5. Implementation plan for issue #2271
- #### D6. Lintable and testable prevention contract
- #### D7. Scope exclusion
- #### D8. Precedence and break-glass
- ### Consequences
- ### Confirmation
- ## Pros and Cons of the Options
- ### Option 1: Status quo
- ### Option 2: Launcher-level recovery
- ### Option 3 (chosen): Prevention-first, fail-closed-and-loud
- ## More Information

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.agents/architecture/ADR-066-hook-fail-open-reconciliation.md:129` · References `push_guard_base.py` which does not exist in the repository tree.
- `missing-path` · `.agents/architecture/ADR-066-hook-fail-open-reconciliation.md:215` · References Serena memory file `feedback-generated-artifact-runtime-verification.md` which is not present in repository files.
- `doc-drift` · `.agents/architecture/ADR-066-hook-fail-open-reconciliation.md:126` · Cites `ADR-062 LSP-first ADR` by conceptual shorthand rather than its actual file name `ADR-062-conditional-lsp-first-enforcement.md`.
- `doc-drift` · `.agents/architecture/ADR-066-hook-fail-open-reconciliation.md:127` · Cites `ADR-070 memory-first gate ADR` rather than its full filename `ADR-070-memory-first-gate-spec-pipeline.md`.

## Observations
Crucial insight that host-specific hook event semantics dictate exit codes: on Claude Code PreToolUse blocking events, exit 1 does NOT block execution (the tool call proceeds); only exit 2 (or structured `hookSpecificOutput.permissionDecision: "deny"`) blocks. Therefore, an exit 1 intended as fail-closed silently acts as fail-open on Claude Code. Reconciles this subtle harness distinction across Claude Code and Copilot CLI (where any non-zero exit blocks). Also highlights the requirement to scan AST stdout decisions emitted from error handlers, since emitting `decision: "allow"` before exiting non-zero is honored by hosts.

## Context cost
18069 bytes (~4517 tokens). In-depth architectural policy document with detailed exit-code mappings, AST lint specifications, and operational incident evidence.
