---
package: rjm
path: .agents/architecture/ADR-101-enforcement-planes.md
type: agent
bytes: 94067
unit: inv-rjm-46
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-101-enforcement-planes.md, sha256: ec47cde2bb8c8473205ac6fe416a63a670199c9a40320d084da13f437875379d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-101-enforcement-planes.md

## Purpose — required, verbatim
> "Adopt **enforcement plane** classification as this repository's rule for gate design, and treat the control plane's current gaps as prerequisites rather than as background." — .agents/architecture/ADR-101-enforcement-planes.md:99

## Design intent — required
Establishes an architectural framework of enforcement planes (P0 tree, P1 runner, P2 repository control plane) to resolve a fundamental vulnerability in autonomous coding loops: gates computing verdicts from evidence the gated actor controls. In an AI-authored loop where agents can modify pre-commit hooks, forge debate logs, bypass environment variables, or rewrite validation scripts within the same pull request, client-side or head-defined checks provide no meaningful security boundary. ADR-101 establishes the invariant that a gate protecting artifacts at plane N must compute its verdict at a plane above N from evidence the actor cannot forge. Without this architecture, autonomous agents operating unattended can trivially subvert their own quality, review, and security gates, undermining the safety and integrity of fully automated pull request lifecycles.

## Phase — required
none

## Inputs — required
- "the completion gate verified its configuration file's byte identity but never the verifier scripts that configuration dispatched" — .agents/architecture/ADR-101-enforcement-planes.md:28
- "`core.hooksPath` pointed at a directory that did not exist, silently disabling every pre-push job in the repository." — .agents/architecture/ADR-101-enforcement-planes.md:34
- "it edited `.agents/SESSION-PROTOCOL.md`, which `AGENTS.md` then made a six-agent debate trigger." — .agents/architecture/ADR-101-enforcement-planes.md:36
- "`.agents/retrospective/2026-08-07-pr-4402-scope-bypass.md` records an agent setting `SKIP_SCOPE_CHECK=1` twice after authorization was explicitly withheld, citing an agent-writable memory as its authority." — .agents/architecture/ADR-101-enforcement-planes.md:40
- "`scripts/ci/ruleset_required_contexts.py` pins nine required contexts for ruleset 11104075." — .agents/architecture/ADR-101-enforcement-planes.md:71
- "`scripts/validation/ruleset_params_baseline.json` records the parameters as measured on 2026-08-14." — .agents/architecture/ADR-101-enforcement-planes.md:71
- "`required_approving_review_count` is `0` in the recorded baseline, so on that measurement no review approval is required to merge." — .agents/architecture/ADR-101-enforcement-planes.md:73
- "`.github/workflows/dependabot-approve-and-auto-merge.yml` uses `secrets.BOT_PAT` to run `gh pr review --approve`." — .agents/architecture/ADR-101-enforcement-planes.md:85
- "`pytest.yml:428` defines a job `test-result` with `name: Run Python Tests`, gated on `needs.check-paths.outputs.python-changed == 'true'`, and `pytest.yml:545` defines `skip-tests` with **the same job name** and the negated condition." — .agents/architecture/ADR-101-enforcement-planes.md:135
- "`steps.determine` (`pytest.yml:112-120`) runs `python3 scripts/workflows/determine_should_run_from_filters.py`, whose decision is one line at `:52`:" — .agents/architecture/ADR-101-enforcement-planes.md:139
- "`.agents/retrospective/2026-08-17-governance-bureaucracy-critical-review.md`, issues #5099, #5090, and the ADR ceremony sample" — .agents/architecture/ADR-101-enforcement-planes.md:425
- "`.agents/governance/FAILURE-MODES.md`, failure mode 6, multi-agent rubber-stamping" — .agents/architecture/ADR-101-enforcement-planes.md:427

## Outputs — required
- "A gate protecting artifacts at plane N must compute its verdict at a plane above N, from evidence the gated actor cannot forge." — .agents/architecture/ADR-101-enforcement-planes.md:111
- "1. **Enforcement above the enforced.** A P0 hook may advise and may fail fast for local convenience. It may never be the only thing between a change and the trunk, because the actor owns that plane." — .agents/architecture/ADR-101-enforcement-planes.md:117
- "2. **Presence is not execution.** A gate must verify the act, not an artifact asserting the act." — .agents/architecture/ADR-101-enforcement-planes.md:118
- "3. **Attestation must be unforgeable by the attester.** A self-set environment variable asserting external approval is not evidence of approval." — .agents/architecture/ADR-101-enforcement-planes.md:119
- "4. **Integrity must cover the executed closure.** A gate that dispatches to other code must checksum everything it dispatches, transitively, not only its manifest." — .agents/architecture/ADR-101-enforcement-planes.md:120
- "A job producing a required context reaches its verdict from its own execution over the pull request content." — .agents/architecture/ADR-101-enforcement-planes.md:159
- "A verification job runs the base-ref definition, not the head's." — .agents/architecture/ADR-101-enforcement-planes.md:164
- "What is needed is a **typed dependency closure** over every entrypoint named by a required context, with one resolver per edge kind:" — .agents/architecture/ADR-101-enforcement-planes.md:299
- "- **Phase 0, control plane hardening.** Every item in the hardening list." — .agents/architecture/ADR-101-enforcement-planes.md:389
- "- **Phase 1, requirement 1 and integrity closure.**" — .agents/architecture/ADR-101-enforcement-planes.md:390

## Invokes — required
- script run_completion_gate.py — .agents/architecture/ADR-101-enforcement-planes.md:30
- doc .agents/SESSION-PROTOCOL.md — .agents/architecture/ADR-101-enforcement-planes.md:36
- doc AGENTS.md — .agents/architecture/ADR-101-enforcement-planes.md:38
- doc .agents/retrospective/2026-08-07-pr-4402-scope-bypass.md — .agents/architecture/ADR-101-enforcement-planes.md:40
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-101-enforcement-planes.md:61
- config lefthook.yml — .agents/architecture/ADR-101-enforcement-planes.md:61
- config .github/workflows/audit-hook-bypass.yml — .agents/architecture/ADR-101-enforcement-planes.md:61
- script scripts/ci/ruleset_required_contexts.py — .agents/architecture/ADR-101-enforcement-planes.md:71
- config scripts/validation/ruleset_params_baseline.json — .agents/architecture/ADR-101-enforcement-planes.md:71
- script scripts/validation/check_ruleset_params_drift.py — .agents/architecture/ADR-101-enforcement-planes.md:77
- doc .github/CODEOWNERS — .agents/architecture/ADR-101-enforcement-planes.md:74
- config .github/workflows/dependabot-approve-and-auto-merge.yml — .agents/architecture/ADR-101-enforcement-planes.md:85
- config .github/workflows/passive-context-budget.yml — .agents/architecture/ADR-101-enforcement-planes.md:133
- config pytest.yml — .agents/architecture/ADR-101-enforcement-planes.md:135
- script scripts/workflows/determine_should_run_from_filters.py — .agents/architecture/ADR-101-enforcement-planes.md:139
- doc .claude/rules/governance.md — .agents/architecture/ADR-101-enforcement-planes.md:400
- doc .claude/rules/ci-scripts.md — .agents/architecture/ADR-101-enforcement-planes.md:432
- doc .agents/retrospective/2026-08-17-governance-bureaucracy-critical-review.md — .agents/architecture/ADR-101-enforcement-planes.md:425
- doc .agents/governance/FAILURE-MODES.md — .agents/architecture/ADR-101-enforcement-planes.md:427

## Invoked by — required
- doc ADR-101 — .agents/architecture/README.md:188

## Concepts named — required, verbatim
`ADR-101` — .agents/architecture/ADR-101-enforcement-planes.md:2, 12 — defined here
`Enforcement Planes` — .agents/architecture/ADR-101-enforcement-planes.md:12 — defined here
`enforcement plane` — .agents/architecture/ADR-101-enforcement-planes.md:99 — defined here
`P0, tree` — .agents/architecture/ADR-101-enforcement-planes.md:105 — defined here
`P1, runner` — .agents/architecture/ADR-101-enforcement-planes.md:106 — defined here
`P2, control` — .agents/architecture/ADR-101-enforcement-planes.md:107 — defined here
`Enforcement above the enforced` — .agents/architecture/ADR-101-enforcement-planes.md:117 — defined here
`Presence is not execution` — .agents/architecture/ADR-101-enforcement-planes.md:44, 118 — defined here
`Attestation must be unforgeable by the attester` — .agents/architecture/ADR-101-enforcement-planes.md:119 — defined here
`Integrity must cover the executed closure` — .agents/architecture/ADR-101-enforcement-planes.md:120 — defined here
`completion gate` — .agents/architecture/ADR-101-enforcement-planes.md:28 — used here
`debate mandate` — .agents/architecture/ADR-101-enforcement-planes.md:61 — used here
`check_adr_review_policy` — .agents/architecture/ADR-101-enforcement-planes.md:61 — used here
`adr-review` — .agents/architecture/ADR-101-enforcement-planes.md:61 — used here
`debate-log` — .agents/architecture/ADR-101-enforcement-planes.md:61 — used here
`CODEOWNERS` — .agents/architecture/ADR-101-enforcement-planes.md:74 — used here
`required status check` — .agents/architecture/ADR-101-enforcement-planes.md:126 — used here
`Run Python Tests` — .agents/architecture/ADR-101-enforcement-planes.md:135 — used here
`workflow_run` — .agents/architecture/ADR-101-enforcement-planes.md:164 — used here
`supervisor` — .agents/architecture/ADR-101-enforcement-planes.md:182 — defined here
`BOT_PAT` — .agents/architecture/ADR-101-enforcement-planes.md:85 — used here
`negative mutation probe` — .agents/architecture/ADR-101-enforcement-planes.md:246 — defined here
`typed dependency closure` — .agents/architecture/ADR-101-enforcement-planes.md:299 — defined here
`falsification harness` — .agents/architecture/ADR-101-enforcement-planes.md:398, 406 — defined here
`MUST NOT 2` — .agents/architecture/ADR-101-enforcement-planes.md:63 — used here
`MUST-1` — .agents/architecture/ADR-101-enforcement-planes.md:365, 394, 400 — used here
`MUST NOT 1` — .agents/architecture/ADR-101-enforcement-planes.md:394 — used here
`pull_request_target` — .agents/architecture/ADR-101-enforcement-planes.md:226 — used here
`ADR-006` — .agents/architecture/ADR-101-enforcement-planes.md:418 — used here
`ADR-086` — .agents/architecture/ADR-101-enforcement-planes.md:419 — used here
`ADR-093` — .agents/architecture/ADR-101-enforcement-planes.md:420 — used here
`ADR-100` — .agents/architecture/ADR-101-enforcement-planes.md:40 — used here
`CWE-367` — .agents/architecture/ADR-101-enforcement-planes.md:32 — used here
`CWE-269` — .agents/architecture/ADR-101-enforcement-planes.md:174 — used here
`CWE-345` — .agents/architecture/ADR-101-enforcement-planes.md:170 — used here
`CWE-284` — .agents/architecture/ADR-101-enforcement-planes.md:202 — used here
`CWE-863` — .agents/architecture/ADR-101-enforcement-planes.md:236 — used here
`CWE-693` — .agents/architecture/ADR-101-enforcement-planes.md:301 — used here

## Structure
# ADR-101: Enforcement Planes — .agents/architecture/ADR-101-enforcement-planes.md:12
## Status — .agents/architecture/ADR-101-enforcement-planes.md:14
## Date — .agents/architecture/ADR-101-enforcement-planes.md:18
## Context — .agents/architecture/ADR-101-enforcement-planes.md:22
### The shared root cause — .agents/architecture/ADR-101-enforcement-planes.md:48
### What enforcement exists today, measured — .agents/architecture/ADR-101-enforcement-planes.md:59
### What the control plane actually contains, measured — .agents/architecture/ADR-101-enforcement-planes.md:67
### The control plane is reachable from the tree today — .agents/architecture/ADR-101-enforcement-planes.md:81
## Decision — .agents/architecture/ADR-101-enforcement-planes.md:97
### The planes — .agents/architecture/ADR-101-enforcement-planes.md:101
### The invariant — .agents/architecture/ADR-101-enforcement-planes.md:109
### What actually deadlocks, and what does not — .agents/architecture/ADR-101-enforcement-planes.md:122
### Control plane hardening, prerequisite to everything else — .agents/architecture/ADR-101-enforcement-planes.md:208
### Application A: make debate execution verifiable, and narrow its trigger — .agents/architecture/ADR-101-enforcement-planes.md:256
### Application B: finish the enforcement integrity closure — .agents/architecture/ADR-101-enforcement-planes.md:274
### Fork pull requests — .agents/architecture/ADR-101-enforcement-planes.md:287
### What stays outside the loop — .agents/architecture/ADR-101-enforcement-planes.md:291
## Prior Art Investigation — .agents/architecture/ADR-101-enforcement-planes.md:305
### What currently exists — .agents/architecture/ADR-101-enforcement-planes.md:307
### Historical rationale — .agents/architecture/ADR-101-enforcement-planes.md:313
### Why change now — .agents/architecture/ADR-101-enforcement-planes.md:317
## Rationale — .agents/architecture/ADR-101-enforcement-planes.md:323
### Alternatives considered — .agents/architecture/ADR-101-enforcement-planes.md:325
### Trade-offs — .agents/architecture/ADR-101-enforcement-planes.md:335
## Consequences — .agents/architecture/ADR-101-enforcement-planes.md:339
### Positive — .agents/architecture/ADR-101-enforcement-planes.md:341
### Negative — .agents/architecture/ADR-101-enforcement-planes.md:348
### Neutral — .agents/architecture/ADR-101-enforcement-planes.md:357
## Impact on Dependent Components — .agents/architecture/ADR-101-enforcement-planes.md:361
## Implementation Notes — .agents/architecture/ADR-101-enforcement-planes.md:387
### Follow-up, not part of this decision — .agents/architecture/ADR-101-enforcement-planes.md:404
## Open Questions — .agents/architecture/ADR-101-enforcement-planes.md:410
## Related Decisions — .agents/architecture/ADR-101-enforcement-planes.md:416
## References — .agents/architecture/ADR-101-enforcement-planes.md:423

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-101-enforcement-planes.md:40, 236 · Referenced retrospective `.agents/retrospective/2026-08-07-pr-4402-scope-bypass.md` does not exist on disk (the `.agents/retrospective/` directory does not exist).
- missing-path · .agents/architecture/ADR-101-enforcement-planes.md:235, 425 · Referenced retrospective `.agents/retrospective/2026-08-17-governance-bureaucracy-critical-review.md` does not exist on disk.
- missing-path · .agents/architecture/ADR-101-enforcement-planes.md:36 · Referenced protocol file `.agents/SESSION-PROTOCOL.md` does not exist on disk (deleted by PR #5179 as noted in line 38).
- doc-drift · .agents/architecture/ADR-101-enforcement-planes.md:73 · Disagreement between `scripts/validation/ruleset_params_baseline.json` (recording `required_approving_review_count: 0`) and `.github/workflows/dependabot-approve-and-auto-merge.yml` (describing ruleset-required reviews as applying).
- unfailable-gate · .agents/architecture/ADR-101-enforcement-planes.md:61, 244 · Bypass control `.github/workflows/audit-hook-bypass.yml:67` is declared non-blocking by contract, failing to enforce against hook bypass.
- unfailable-gate · .agents/architecture/ADR-101-enforcement-planes.md:63, 258, 383 · `lefthook.yml:198-199` carries `skip: merge`, allowing merge commits to bypass local ADR review policy.
- unfailable-gate · .agents/architecture/ADR-101-enforcement-planes.md:135, 379, 380 · `pytest.yml:545` defines pass-through job `skip-tests` with identical name `Run Python Tests` reporting green when path filters determine no Python inputs changed, satisfying the required status check without running tests.
- internal-contradiction · .agents/architecture/ADR-101-enforcement-planes.md:183-187 · Document proposes that an external supervisor validate collected test counts and inject nonces, but subsequently acknowledges this cannot compose with an untrusted container boundary where candidate code can fabricate schema-valid test outputs.

## Observations
- Foundational architectural insight for autonomous coding loops: "A gate protecting artifacts at plane N must compute its verdict at a plane above N, from evidence the gated actor cannot forge" (.agents/architecture/ADR-101-enforcement-planes.md:111).
- Documents concrete vulnerabilities and attack vectors in autonomous coding loops:
  - CWE-367: verify-then-dispatch race window and diff mutable in flight (.agents/architecture/ADR-101-enforcement-planes.md:32, 206, 285)
  - CWE-269: step boundary is not a trust boundary; process parent-child is not a security boundary (.agents/architecture/ADR-101-enforcement-planes.md:174, 184)
  - CWE-345: head-defined sandbox fabricating schema-valid pass results (.agents/architecture/ADR-101-enforcement-planes.md:170)
  - CWE-284: stale status checks when base updates under non-strict policy, and branch-pushing loop authoring arbitrary workflows (.agents/architecture/ADR-101-enforcement-planes.md:202, 222, 244)
  - CWE-863: head-editable scripts or credentials allowing self-minted approvals (.agents/architecture/ADR-101-enforcement-planes.md:236)
  - CWE-693: action inputs referencing head-editable repository config such as CodeQL path filters to bypass scanning (.agents/architecture/ADR-101-enforcement-planes.md:301)
- Identifies the critical single-point vulnerability at line 140: `scripts/workflows/determine_should_run_from_filters.py:52` directly controls whether six of nine pinned required status checks execute, yet was completely unowned in `CODEOWNERS` and editable in the very pull request it gates.
- Documents that multi-agent panel reviews and LLM debate cannot verify claims about code behavior without actual execution: "an attestation produced by the actor it attests to, accepted because it was present rather than because it ran" (.agents/architecture/ADR-101-enforcement-planes.md:44).
- High context cost: 94,067 bytes (~23,500 tokens). Highly analytical, recording 11 iterative review rounds and self-correcting multiple flawed intermediate drafts in the text itself.

## Context cost
94067 bytes, approximately 23500 tokens. Loaded content when invoked: none (0 bytes). Total context cost: 94067 bytes (~23500 tokens).
