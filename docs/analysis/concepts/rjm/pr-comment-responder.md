---
package: rjm
name: pr-comment-responder
slug: pr-comment-responder
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-comment-responder

## Definition — verbatim
> "**Role**: Handles PR review comments" — .agents/AGENT-SYSTEM.md:758

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 754 | defined here | Defined as a support agent specialized in PR comment triage, reviewer communication, and resolution tracking. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Assigned to Sonnet 4.5 model tier for handling complex PR comment interactions. |
| .claude/skills/context-optimizer/SKILL.md | 88 | used here | Cited as an example of an agent routed via AGENTS.md whose scripts reside within its skill directory. |
| .claude/skills/github-url-intercept/SKILL.md | 373 | used here | Mapped to handling systematic PR review feedback when GitHub URLs are intercepted. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 20 | used here | Listed in documentation validation script as shipping both agent prompt and skill definitions. |
| docs/agent-catalog.md | 36 | used here | Cataloged as a coordinator role agent managing PR review comments, feedback threads, and bot responses. |
| README.md | 413 | defined here, used here | Documented in agent overview table for PR review handling, triaged responses, and resolution tracking. |
| scripts/validation/check_skill_memory_references.py | 4 | used here | Referenced in historical context for skill memory reference validation. |
| src/claude/AGENTS.md | 179 | used here | Tabulated in coordinator agents table mapped to `pr-comment-responder.md`. |
| templates/AGENTS.md | 185 | used here | Documented in shared agents reference catalog as PR review handler for human and bot comments. |
| templates/agents/comment-analyzer.shared.md | 23 | used here | Identified as the executor agent that applies proposed comment changes to code or documentation. |

## Consumes
Pull request numbers, review comments, bot suggestions, or code review threads.

## Produces
Comment resolution maps in `.agents/pr-comments/PR-[N]/`, atomic task lists, and reviewer reply drafts.

## When applied
> "- Responding to GitHub PR review comments" — .agents/AGENT-SYSTEM.md:776

## Sub-concepts
none

## Part of
- coordinator

## Implementation status
defects: missing-path, internal-contradiction, unfailable-gate, doc-drift (from .agents/AGENT-SYSTEM.md relative path errors, ADR-039 governance failures, and missing-doc issues)

## Design notes
`pr-comment-responder` orchestrates the complete lifecycle of pull request feedback in rjm. Rather than reacting piecemeal to GitHub comments, it aggregates all reviewer and bot feedback into structured comment maps, triages comments by actionability, delegates fixes to implementer or documentation agents, and drafts verified responses. Without `pr-comment-responder`, pull request feedback would be vulnerable to overlooked comments, unresolved bot warnings, and disjointed author replies.
