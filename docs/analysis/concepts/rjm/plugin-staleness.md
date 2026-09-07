---
package: rjm
name: Plugin staleness
slug: plugin-staleness
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plugin staleness

## Definition — verbatim
> "with no `version` field, Claude Code resolves freshness from the git commit SHA, which changes on every merge, so the stale-cache class is closed per-commit rather than per-bump." — .claude/skills/ai-agents-change-control/references/incident-history.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/incident-history.md | 11 | defines | Incident history section detailing PR #1942 and the ADR-092 reversal governing plugin cache freshness. |

## Consumes
Plugin manifests (`plugin.json`), marketplace entries, and git commit SHAs.

## Produces
Automated gates (`validate_plugin_version_bump.py`) ensuring plugin manifests omit manual version fields to leverage commit-SHA caching.

## When applied
Applied during plugin builds and manifest validations to prevent stale client-side caches.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
clean

## Design notes
Plugin staleness addresses the failure mode where installed agent plugins continue executing outdated code from local caches. By removing manual `version` fields from manifests (per ADR-092), Claude Code resolves plugin freshness directly from the git commit SHA on each merge, automatically invalidating stale caches.
