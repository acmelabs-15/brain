---
package: matt
name: per-repo config
slug: per-repo-config
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# per-repo config

## Definition — verbatim
(used, not defined)
> "Engineering skills depend on per-repo config (issue tracker, triage label vocabulary, domain doc layout) seeded by `/setup-matt-pocock-skills`." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 3 | used here | Characterized as the configuration trio (tracker, labels, domain layout) seeded by setup |

## Consumes
Initial user choices and repository discovery inputs during `/setup-matt-pocock-skills`.

## Produces
Committed markdown files under `docs/agents/` (`issue-tracker.md`, `triage-labels.md`, `domain.md`).

## When applied
Consulted by engineering skills whenever determining issue destinations, label taxonomy, or domain documentation paths.

## Sub-concepts
issue-tracker, triage-label-vocabulary, domain-doc-layout

## Part of
setup-matt-pocock-skills

## Implementation status
clean

## Design notes
Repository-specific settings encoded as human-readable Markdown files committed under `docs/agents/`. By segregating repo-level variance (which issue tracker is used, what labels exist, where domain specs live) into local documents rather than global tooling configuration, all engineering skills remain generic, immutable, and universally portable across projects.
