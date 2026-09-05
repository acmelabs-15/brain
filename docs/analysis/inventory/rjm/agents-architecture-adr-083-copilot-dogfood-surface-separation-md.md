---
package: rjm
path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md
type: agent
bytes: 27155
unit: inv-rjm-34
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md

## Purpose — required, verbatim
> "Adopt a per-item surface tag, split the Copilot form-factor into a shipped base plus a local-only internal overlay, and dogfood both by installing them the way a customer installs the base." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:111-113

## Design intent — required
Establishes architectural separation between customer-facing shipped plugin artifacts and repository-internal development tooling for Copilot CLI. Solves the dogfooding asymmetry where contributors only ran `.claude` while shipping an unexercised, rotted Copilot mirror (`src/copilot-cli` was pinned to 0.5.248 while HEAD was 0.6.70). Mandates a declarative `surface: ship|internal` frontmatter tag on skills, agents, and instructions enforced by a strict CI build gate; specifies a local copy-based dogfood installer (`scripts/dev/dogfood_copilot_plugin.py --install`) with hash-based freshness checking; adds isolated base-artifact end-to-end smoke testing; and designs an on-demand internal overlay plugin (`src/copilot-cli-internal`) governed by a kill criterion that defers instantiation until an internal skill exists. Without this, customer artifacts would continue to drift silently from daily developer usage and break at runtime on consumer installations.

## Phase — required
cross-phase

## Inputs — required
- "Three owner decisions are locked in that issue thread (D1, D2, D3 below); this ADR is the design of record they point to." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:16-18
- "We ship one toolkit as two marketplace plugins. We only dogfood one of them." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:56
- "The ship-vs-internal call is a subtle per-item judgment, so the build forces the decision to be made and recorded at the item, not inferred from a name pattern." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:122-124

## Outputs — required
- "The build hard-fails on any untagged item. There is no silent default." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:117-118
- "Our Copilot sessions can run the real shipped base, so form-factor bugs surface in our own use instead of in a customer install." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:273-274
- "Customers receive a clean base without this repo's internal session and governance machinery." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:278-279

## Invokes — required
- script dogfood_copilot_plugin.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:142
- file test_plugin_load_smoke.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:73
- file test_cli_hook_e2e.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:74
- file build_all.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:121
- file generate_skills.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:95
- file generate_rules.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:204
- file generate_hooks.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:206
- file check_plugin_manifest_parity.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:309
- file validate_plugin_version_bump.py — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:310
- config copilot-cli.yaml — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:96
- config marketplace.json — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:58
- config nightly-cli-smoke.yml — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:168
- doc ADR-083-debate-log.md — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:20
- reference ADR-079 — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:411
- reference ADR-042 — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:413
- reference ADR-092 — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:390

## Invoked by — required
- doc README — .agents/architecture/README.md:143

## Concepts named — required, verbatim
- `overlay decision gate` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:20 — defined here
- `dogfood install` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:21 — defined here
- `base-alone e2e` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:22 — defined here
- `two-plugin split` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:22 — defined here
- `surface: ship` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:24 — defined here
- `surface: internal` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:25 — defined here
- `project-toolkit` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:58 — used here
- `dogfood parity` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:59 — defined here
- `COPILOT_PLUGIN_ROOT` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:66 — used here
- `internal overlay` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:112 — defined here
- `surface: ship|internal` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:115 — defined here
- `PRIMARY signal` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:156 — defined here
- `CO-PRIMARY signal` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:158 — defined here
- `SECONDARY soft signal` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:159 — defined here
- `delete-and-re-home` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:175 — defined here
- `kill criterion` — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:185 — defined here

## Structure
- # ADR-083: Dogfood the Shipped Copilot Base and Separate Ship-vs-Internal Surface
- ## Status
- ## Amendment 2026-07-27: Security hook absence recorded, authorization not found
- ## Date
- ## Context
- ## Decision
- ## Prior Art Investigation (Required when changing existing systems)
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
- ## Reversibility
- ## Confirmation Criteria
- ## Review Date
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:306 · Component impact table references `build/scripts/generate_agents.py` which does not exist in the repository.
- doc-drift · .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:43-48 · Shipped security hooks `invoke_security_gate` and `invoke_security_commit_gate` required by this ADR were removed in PR #3488 without an authorizing ADR superseding this ADR's decision.

## Observations
Exposes the reality of multi-platform packaging where untracked manual installs resulted in developers running outdated 0.5.248 plugins while shipping 0.6.70. Establishes a disciplined signal hierarchy for plugin testing where fired hooks are primary proof of loading and execution, clean skill listing is co-primary, and `source: plugin` JSON enumeration is demoted to a secondary soft signal due to known Copilot CLI omission bugs (#2990, #3014, #3090, #3135). Uses an overlay decision gate to avoid building empty trees and manifests until an internal skill actually exists.

## Context cost
27155 bytes, approximately 6800 tokens. Architecture decision record and specification for Copilot packaging and dogfooding.
