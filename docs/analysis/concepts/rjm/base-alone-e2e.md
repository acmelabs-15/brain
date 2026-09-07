---
package: rjm
name: base-alone e2e
slug: base-alone-e2e
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# base-alone e2e

## Definition — verbatim
> "base-alone e2e ship before the two-plugin split." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 22 | defined here | Smoke test testing the customer-facing plugin base in isolation without internal overlays. |

## Consumes
Shipped base plugin tree (`src/copilot-cli`) and end-to-end smoke test runner.

## Produces
Automated test verification that the customer-facing plugin functions without internal tooling dependencies.

## When applied
Executed in CI (`tests/e2e/test_plugin_load_smoke.py`, `.github/workflows/nightly-cli-smoke.yml`).

## Sub-concepts
none

## Part of
dogfood-surface-separation

## Implementation status
defects: missing-path, doc-drift

## Design notes
Base-alone e2e ensures that the customer-facing base plugin is tested in total isolation from internal development overlays and repository root tooling. Without base-alone testing, hidden dependencies on internal scripts, repo-local paths, or developer-only hooks slip into production undetected.
