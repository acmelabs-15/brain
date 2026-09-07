---
package: rjm
name: strictly-greater SemVer
slug: strictly-greater-semver
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# strictly-greater SemVer

## Definition — verbatim
(used, not defined)

> "(strictly-greater SemVer). Triggered by `.github/workflows/validate-plugin-version-bump.yml`" — .agents/architecture/ADR-091-post-merge-version-bot.md:49

## Also called — verbatim
> "Strict-greater enforcement" — .agents/architecture/ADR-091-post-merge-version-bot.md:151

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 49 | used here | Version validation rule requiring plugin manifest versions to strictly exceed base branch versions. |

## Consumes
Manifest version strings from base branch and PR branch.

## Produces
CI validation verdict allowing or blocking pull request merge.

## When applied
Enforced during PR CI checks when plugin source files are modified.

## Sub-concepts
none

## Part of
pr-time-gate

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Quality gate check enforced by `validate_plugin_version_bump.py` requiring PR authors to bump SemVer patch/minor/major versions above base HEAD, replaced in ADR-091 for parity manifests by no-manual-bump enforcement.
