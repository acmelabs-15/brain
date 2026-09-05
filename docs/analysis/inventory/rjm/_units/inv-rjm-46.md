---
unit: inv-rjm-46
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-46

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-101-enforcement-planes.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-101-enforcement-planes-md.md` (18474 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-46 covers ADR-101 (`.agents/architecture/ADR-101-enforcement-planes.md`, 94,067 bytes, 435 lines across 1 file).
- Key architectural findings and relevance to lifecycle synthesis:
  - Establishes a formal classification of enforcement planes: P0 (version-controlled tree, advisory only), P1 (runner / GitHub Actions, binding under base-ref execution), P2 (control plane / repository rulesets and API configuration, root of trust).
  - Codifies the foundational invariant: "A gate protecting artifacts at plane N must compute its verdict at a plane above N, from evidence the gated actor cannot forge" (.agents/architecture/ADR-101-enforcement-planes.md:111).
  - Derives four architectural rules:
    1. Enforcement above the enforced: P0 local hooks may advise and fail fast, but trunk protection must compute at plane N+1.
    2. Presence is not execution: gates must verify the act of execution, not artifacts asserting the act.
    3. Attestation must be unforgeable by the attester: self-set variables, labels, or logs written by the actor are not evidence of approval.
    4. Integrity must cover the executed closure: transitive closures of dispatched scripts, actions, and configurations must be verified, not merely entry-point manifests.
  - Uncovers the single-point failure pattern in CI pipelines: `scripts/workflows/determine_should_run_from_filters.py:52` was head-editable within the same pull request it gated, standing behind six of nine pinned required status checks with no CODEOWNERS protection.
  - Implements two primary requirements:
    - Requirement 1: required context jobs must decide pass/fail through their own execution over candidate content, prohibiting condition relocation or manufactured green pass-through jobs (`skip-tests` in `pytest.yml:545`).
    - Requirement 2: verification jobs must execute base-ref definitions, decoupling the unprivileged execution runner (ephemeral, no secrets) from the privileged publication runner (separate runner, holds App credentials with pinned `integration_id`).
  - Highlights failure modes in multi-agent review panels: panel debate without primary source execution failed to catch behavioral flaws across 11 rounds of six-role debate.
- Defects discovered via METHOD.md §4 checklist:
  - `missing-path`: `.agents/retrospective/2026-08-07-pr-4402-scope-bypass.md` (lines 40, 236) does not exist on disk (no `.agents/retrospective/` directory exists).
  - `missing-path`: `.agents/retrospective/2026-08-17-governance-bureaucracy-critical-review.md` (lines 235, 425) does not exist on disk.
  - `missing-path`: `.agents/SESSION-PROTOCOL.md` (line 36) does not exist on disk (deleted by PR #5179 as documented in line 38).
  - `doc-drift`: `scripts/validation/ruleset_params_baseline.json` (recording `required_approving_review_count: 0`) vs `.github/workflows/dependabot-approve-and-auto-merge.yml` (describing ruleset-required reviews as applying).
  - `unfailable-gate`: `.github/workflows/audit-hook-bypass.yml:67` non-blocking by contract.
  - `unfailable-gate`: `lefthook.yml:198-199` `skip: merge` bypass.
  - `unfailable-gate`: `pytest.yml:545` pass-through job `skip-tests` reporting green under required name `Run Python Tests`.
  - `internal-contradiction`: Lines 183-187 regarding supervisor-injected nonces vs untrusted container sandbox boundaries.
- Duplication ledger status: none of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md`; no divergence card required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,500 tokens (94,067 bytes, 435 lines across 1 file); approximate tokens of output written: ~4,600 tokens (18,474 bytes for inventory card, ~3,500 bytes for unit report).
