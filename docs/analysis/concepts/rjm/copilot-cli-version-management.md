---
package: rjm
name: Copilot CLI Version Management
slug: copilot-cli-version-management
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Copilot CLI Version Management

## Definition — verbatim
> "## Copilot CLI Version Management" — CONTRIBUTING.md:760

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 760 | defined here | Section heading introducing governance and pinning policies for GitHub Copilot CLI versions in CI. |

## Consumes
Version pins in `.github/actions/ai-review/action.yml`, installation scripts (`scripts/ci/install_copilot_cli.py`), and denylist validator rules.

## Produces
Pinned, deterministic Copilot CLI execution environments that prevent runtime regressions caused by background auto-updates.

## When applied
Enforced during CI review execution and validated via `scripts/validation/check_copilot_version_pin.py`.

## Sub-concepts
copilot-version

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Copilot CLI version management is a release engineering practice in rjm designed to prevent silent regressions during automated pull request reviews. Because Copilot CLI's npm wrapper delegates to a self-updating binary, rjm pairs explicit version pinning with mandatory `--no-auto-update` execution flags and denylist validation (ADR-094) to guarantee consistent agent evaluation behavior.
