---
package: rjm
name: Refresh procedure
slug: refresh-procedure
kind: checklist
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Refresh procedure

## Definition — verbatim
> "## Refresh procedure" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:443

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 443 | defined here | Section heading establishing the five-step protocol for refreshing vendor hook contracts. |

## Consumes
Updated vendor docs, release changelogs, targeted local probes, and existing sidecar records.

## Produces
Synchronized updates across documentation, probe evidence, ADRs, tests, mirrors, and memories.

## When applied
Executed whenever Copilot CLI or Claude Code releases introduce new hook versions, features, or contract changes.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A standardized 5-step maintenance protocol in rjm ensuring that vendor contract changes are fetched, compared, probed for edge cases, and propagated systematically across all codebase artifacts in a single atomic update.
