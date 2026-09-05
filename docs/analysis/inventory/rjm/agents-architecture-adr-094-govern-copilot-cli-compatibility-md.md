---
package: rjm
path: .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md
type: agent
bytes: 8579
unit: inv-rjm-40
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md, sha256: feb7623313cfeffbcd3c34f0efe0a1973bef60bffe98143a75aacc872f80f866}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md

## Purpose — required, verbatim
> "Govern Copilot CLI Compatibility Through Executable Surfaces" — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:12

## Design intent — required
Architecture decision record superseding ADR-044 to establish that GitHub Copilot CLI version pins and compatibility policies are governed directly by executable configuration files rather than frozen in ADR prose. Assigns ownership of the required review path version to `.github/actions/ai-review/action.yml` and the nightly smoke version to `.github/workflows/nightly-cli-smoke.yml`, clarifies that `scripts/validation/check_copilot_version_pin.py` serves as a known-bad guard (blocking deprecated version `0.0.397`) rather than an allowlist or compatibility proof, retires instructions recommending `0.0.397`, and delegates model and frontmatter policy to active owners (ADR-080 and platform templates).

## Phase — required
cross-phase

## Inputs — required
- "`.github/actions/ai-review/action.yml` now configures `COPILOT_VERSION=\"1.0.63\"`." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:32
- "`.github/workflows/nightly-cli-smoke.yml` independently configures a Renovate-managed smoke version." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:33
- "`scripts/validation/check_copilot_version_pin.py` blocks `0.0.397` as known bad." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:34
- "ADR-080 now governs model pins and requires evidence for versioned model identifiers." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:35
- "Session 2586 on 2026-06-17 verified agent loading on Copilot CLI 1.0.63 with `argument-hint` present and no unsupported-field warning." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:36

## Outputs — required
- "**Supersede ADR-044 in full.** Keep ADR-044 unchanged except for lifecycle metadata and its supersession notice." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:42
- "Treat executable configuration as the version record." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:43
- "**Retire `0.0.397` immediately.** Keep it in `KNOWN_BAD_VERSIONS` as historical evidence." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:48
- "**Keep runtime drift detection warn-only.** `scripts/ci/install_copilot_cli.py` warns when the installed binary differs from the configured version." — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:49

## Invokes — required
- doc ADR-044 — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:6
- file .github/actions/ai-review/action.yml — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:32
- file .github/workflows/nightly-cli-smoke.yml — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:33
- script scripts/validation/check_copilot_version_pin.py — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:34
- doc ADR-080 — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:35
- script scripts/ci/install_copilot_cli.py — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:49
- doc CONTRIBUTING.md — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:128
- doc ADR-093 — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:143
- doc .claude/skills/adr-generator/references/adr-best-practices.md — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:153

## Invoked by — required
- doc ADR-094 — .agents/architecture/README.md:148
- agent ADR-094 — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:7
- agent ADR-094 — .agents/architecture/ADR-095-scoped-re-review-axes.md:18
- script ADR-094 — scripts/ci/install_copilot_cli.py:84
- script ADR-094 — scripts/validation/check_adr_lifecycle.py:182
- script ADR-094 — build/scripts/generate_adr_index.py:149

Concepts named:
- `COPILOT_VERSION` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:32 — used here
- `nightly-cli-smoke` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:33 — used here
- `argument-hint` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:36 — used here
- `KNOWN_BAD_VERSIONS` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:48 — used here
- `runtime drift detection` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:49 — defined here
- `bounded mutability rule` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:89 — used here
- `executable owners` — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:93 — defined here

## Structure
- # ADR-094: Govern Copilot CLI Compatibility Through Executable Surfaces
- ## Status
- ## Date
- ## Context
- ## Decision
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
none

## Observations
- Distinguishes between long-lived architectural policy (ownership, upgrade verification rules) and volatile version values, placing the latter in executable files (`action.yml`, `nightly-cli-smoke.yml`, `install_copilot_cli.py`) rather than freezing specific versions into ADR prose.
- Permits deliberate variation between the required review path (pinned to known-stable version `1.0.63`) and the nightly smoke workflow (managed by Renovate to track newer versions) to catch breaking CLI changes before they impact required developer gates.
- Records the six-role adversarial ADR review process (`.agents/critique/ADR-094-debate-log.md`) that blocked the initial draft until denylist validation was clearly separated from proof of runtime compatibility.

## Context cost
8579 bytes, approximately 2150 tokens.
