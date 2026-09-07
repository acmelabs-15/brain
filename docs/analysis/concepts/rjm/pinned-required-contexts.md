---
package: rjm
name: Pinned required contexts
slug: pinned-required-contexts
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pinned required contexts

## Definition — verbatim
> "Pinned required contexts (no LLM blocker)" — .claude/skills/ai-agents-change-control/references/provenance.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 22 | defined here | Provenance row citing ruleset_required_contexts.py for the list of deterministic required CI checks. |

## Consumes
GitHub ruleset configuration and CI status check names.

## Produces
The authoritative list of blocking status checks required for PR merge.

## When applied
Applied by GitHub branch protection rules during PR review and merge validation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Pinned required contexts designates the explicit list of deterministic CI checks that must pass prior to merging, specifically excluding non-deterministic AI review checks from blocking status to prevent merge gridlock.
