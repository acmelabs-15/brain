---
package: rjm
name: skillbook
slug: skillbook
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skillbook

## Definition — verbatim
> "**Role**: Manages learned strategies and patterns" — .agents/AGENT-SYSTEM.md:722

## Also called — verbatim
- `Skillbook Agent` — .claude/agents/skillbook.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 718 | defined here | Defined as a support agent responsible for storing, deduplicating, and validating learned skills. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 106 | used here | Analyzed for model assignment and classified under pattern-matching lookup tasks. |
| .claude/agents/skillbook.md | 2 | defined here | System prompt frontmatter defining the skillbook agent with role metadata support. |
| docs/agent-catalog.md | 44 | used here | Cataloged as the skill manager transforming reflections into atomic skillbook updates. |
| README.md | 408 | defined here, used here | Listed in the agents table as the support agent managing atomic strategy updates and deduplication. |
| src/claude/AGENTS.md | 176 | used here | Tabulated in the support agent category mapped to `skillbook.md`. |
| templates/AGENTS.md | 178 | used here | Documented in the shared agent catalog for learned strategy updates and deduplication. |

## Consumes
Retrospective reflections, pattern observations, candidate skills, or update requests.

## Produces
Atomic skill entries in `.agents/skills/`, deduplication results, and skill quality scores.

## When applied
> "- After retrospective analysis" — .agents/AGENT-SYSTEM.md:740

## Sub-concepts
none

## Part of
- support
- retrospective

## Implementation status
defects: missing-path, internal-contradiction, doc-drift, unfailable-gate (from .agents/AGENT-SYSTEM.md broken relative paths and ADR-039 governance drift)

## Design notes
`skillbook` acts as the repository's institutional memory curator within rjm's multi-agent architecture. Invoked downstream of retrospective analysis, it enforces strict atomicity (one concept per skill file), evaluates learning quality, and runs deduplication checks against existing skills before committing new patterns. Without `skillbook`, agent learnings would fragment, duplicate, or degrade into vague, un-actionable documentation.
