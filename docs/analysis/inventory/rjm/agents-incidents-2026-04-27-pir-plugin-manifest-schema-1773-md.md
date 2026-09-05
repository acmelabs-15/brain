---
package: rjm
path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md
type: agent
bytes: 10130
unit: inv-rjm-56
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md, sha256: 3b68e11d9db7b25daccc5b46f4c2ec9ee5595e1d9161815396d0217d5050a76f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md

## Purpose — required, verbatim
> "PR #1773 (`feat(plugins): add plugin.json manifests for 3 marketplace plugins`, merged 2026-04-26 13:15 PT, commit `645f8689`) introduced explicit `plugin.json` manifests under three plugin source directories. Each manifest declared `agents`, `skills`, `commands`, and `hooks` keys with shapes that violate the Anthropic plugin schema. As a result, every consumer attempting to install or reload the `project-toolkit` plugin received:" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:13

## Design intent — required
Documents post-incident analysis for a P0 customer-facing outage where invalid plugin manifest schemas shipped in PR #1773 broke plugin loading across all consumers in Claude Code v2.1+. Analyzes root cause via Five Whys (inferring schemas without CI verification), details remediation (the validate_plugin_manifests.py validator and CI workflow in PR #1795), and establishes the governance invariant that introducing new artifact classes requires shipping corresponding deterministic schema gates in the same PR.

## Phase — required
none

## Inputs — required
- "commit `645f8689`" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:13, 30
- "/reload-plugins" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:17, 24, 32
- "caveman" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:34, 75, 141
- "claude-code-guide" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:35, 76

## Outputs — required
- "PR #1795" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:5, 39, 90, 138
- "validate_plugin_manifests.py" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:36, 92, 115
- ".github/actions/validate-plugin-manifests/" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:37
- ".github/workflows/validate-plugin-manifests.yml" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:37, 94
- ".claude/hooks/hooks.json" — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:38, 96

## Invokes — required
- agent claude-code-guide — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:35
- script validate_plugin_manifests.py — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:36
- config hooks.json — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:38
- file session-1759-fix-plugin-manifest-schema-regression.json — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:139

## Invoked by — required
- doc ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:272

## Concepts named — required, verbatim
- `Post-Incident Report` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:1 — defined here
- `PIR-2026-04-27-001` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:3 — defined here
- `P0` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:4 — used here
- `plugin.json` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:13, 33 — used here
- `project-toolkit` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:13, 33 — used here
- `claude-agents` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:17 — used here
- `copilot-cli-agents` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:17 — used here
- `caveman` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:34, 75, 141 — used here
- `claude-code-guide` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:35, 76 — used here
- `Five Whys` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:62 — used here
- `AGENTS.md` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:78 — used here

## Structure
- `## Summary` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:11
- `## Customer impact` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:19
- `## Timeline (UTC)` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:26
- `## Root cause` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:41
- `### Five Whys` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:62
- `## What went well` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:72
- `## What went poorly` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:80
- `## Remediation` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:88
- `### Shipped in PR #1795` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:90
- `### Follow-ups (separate work)` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:98
- `### Process` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:106
- `## Verification` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:112
- `## Lessons` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:128
- `## References` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:135

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `validate_marketplace_counts.py` — .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md:85 — referenced script validate_marketplace_counts.py does not exist on disk.

## Observations
Exemplar post-incident report highlighting the peril of schema inference in autonomous agent coding and high PR velocity (>30 PRs/day). Demonstrates how unverified bot commits slipped through human review due to diffuse attention. The incident led directly to architectural improvements in thin CI validation gates and requirements specifications (REQ-003, ADR-006).

## Context cost
10130 bytes, approximately 2400 tokens.
