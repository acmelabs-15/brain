---
package: rjm
name: Agent Harness Reference
slug: agent-harness-reference
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Agent Harness Reference

## Definition — verbatim
> "Use this reference before changing a hook, dispatcher, generator, hook config, or runtime test. Do not repeat web research unless the refresh rules below say the recorded contract is stale." — .claude/skills/agent-harness-reference/SKILL.md:10-12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 8 | defines | Defines the primary reference skill documenting host CLI hook contracts, runtime fields, and refresh policies. |
| .claude/skills/CLAUDE.md | 7 | references | Directs agents working on skills that configure or test harnesses to consult agent-harness-reference first. |
| scripts/validation/check_adr_links_baseline.txt | 79 | references | Cites the agent-harness-reference skill path convention for cross-plugin-root documentation citations. |
| scripts/validation/rule_activation_coverage_baseline.json | 27 | references | Records agent-harness-reference in the baseline inventory of uncovered skills for rule activation. |
| templates/AGENTS.md | 9 | references | Mandates reading agent-harness-reference before adding platform-specific behavior or modifying agent templates. |

## Consumes
Pinned official vendor contracts, commit-pinned source sidecars, and versioned runtime probe evidence.

## Produces
Standardized runtime hook contracts, verified lifecycle event policies, and platform-specific generated configurations.

## When applied
Consulted before authoring, modifying, or testing any hook, dispatcher, generator, hook configuration, or runtime harness test.

## Sub-concepts
authority-order, docs-silent, repository-loading-surfaces, when-to-refresh, github-copilot-cli-contract

## Part of
orchestrator

## Implementation status
defects: doc-drift, missing-path, cross-file-contradiction

## Design notes
The definitive reference authority in rjm establishing ground truth for Claude Code and GitHub Copilot CLI runtime contracts. By anchoring harness behavior in commit-pinned official documentation and empirical probe evidence while strictly penalizing unverified web re-research, it prevents multi-agent divergence across supported coding agent platforms.
