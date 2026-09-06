---
unit: cc-matt-4
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-4

## Files assigned
- [x] .agents/writing-docs.md
- [x] .changeset/add-implement-spec-skill.md
- [x] .changeset/config.json
- [x] .changeset/fix-yaml-frontmatter-colons.md
- [x] .changeset/skill-tool-invocation-terminology.md
- [x] .changeset/user-invoked-skill-invocation.md
- [x] .claude-plugin/marketplace.json
- [x] .claude-plugin/plugin.json
- [x] .github/workflows/release.yml
- [x] CHANGELOG.md
- [x] CONTEXT.md
- [x] README.md
- [x] docs/engineering/ask-matt.md
- [x] docs/engineering/code-review.md
- [x] docs/engineering/diagnosing-bugs.md
- [x] docs/engineering/domain-modeling.md
- [x] docs/engineering/grill-with-docs.md
- [x] docs/engineering/implement.md
- [x] docs/engineering/improve-codebase-architecture.md
- [x] docs/engineering/prototype.md
- [x] docs/engineering/research.md
- [x] docs/engineering/resolving-merge-conflicts.md
- [x] docs/engineering/setup-matt-pocock-skills.md
- [x] docs/engineering/tdd.md
- [x] docs/engineering/to-spec.md
- [x] docs/engineering/to-tickets.md
- [x] docs/engineering/triage.md
- [x] docs/engineering/wayfinder.md
- [x] docs/engineering/wizard.md
- [x] docs/productivity/grill-me.md
- [x] docs/productivity/handoff.md
- [x] docs/productivity/teach.md
- [x] docs/productivity/writing-for-agents.md
- [x] external/ask-matt.md
- [x] external/code-review.md
- [x] external/domain-modeling.md
- [x] external/grill-me.md
- [x] external/grill-with-docs.md
- [x] external/handoff.md
- [x] external/implement.md
- [x] external/improve-codebase-architecture.md
- [x] external/prototype.md
- [x] external/research.md
- [x] external/resolving-merge-conflicts.md
- [x] external/setup-matt-pocock-skills.md
- [x] external/tdd.md
- [x] external/teach.md
- [x] external/to-spec.md
- [x] external/to-tickets.md
- [x] external/triage.md
- [x] external/wayfinder.md
- [x] external/writing-for-agents.md
- [x] package-lock.json
- [x] package.json
- [x] skills/engineering/ask-matt/PHASE-BOUNDARIES.md
- [x] skills/engineering/ask-matt/SKILL.md
- [x] skills/engineering/code-review/SKILL.md
- [x] skills/engineering/implement/SKILL.md
- [x] skills/engineering/implement/agents/openai.yaml
- [x] skills/engineering/prototype/SKILL.md
- [x] skills/engineering/tdd/SKILL.md
- [x] skills/engineering/to-spec/SKILL.md
- [x] skills/engineering/to-spec/agents/openai.yaml
- [x] skills/engineering/to-tickets/SKILL.md
- [x] skills/in-progress/README.md
- [x] skills/in-progress/implement-spec/SKILL.md
- [x] skills/in-progress/implement-spec/agents/openai.yaml

## Outputs produced
- docs/analysis/concepts/matt/tracer-bullet.md (2999 bytes)
- docs/analysis/concepts/matt/ai-coding-dictionary.md (1478 bytes)
- docs/analysis/concepts/matt/context-window.md (3242 bytes)
- docs/analysis/concepts/matt/subagent.md (2678 bytes)
- docs/analysis/concepts/matt/harness.md (3415 bytes)
- docs/analysis/concepts/matt/primary-source.md (3357 bytes)
- docs/analysis/concepts/matt/agent-mode.md (1348 bytes)
- docs/analysis/concepts/matt/implement-spec.md (2419 bytes)
- docs/analysis/concepts/matt/in-progress-bucket.md (1414 bytes)
- docs/analysis/concepts/matt/spec.md (5856 bytes)
- docs/analysis/concepts/matt/tickets.md (4577 bytes)
- docs/analysis/concepts/matt/pr.md (1992 bytes)
- docs/analysis/concepts/matt/task-graph.md (1745 bytes)
- docs/analysis/concepts/matt/blocking-edges.md (2251 bytes)
- docs/analysis/concepts/matt/implementer-subagents.md (1554 bytes)
- docs/analysis/concepts/matt/background-worktrees.md (1816 bytes)
- docs/analysis/concepts/matt/ready-frontier.md (1755 bytes)
- docs/analysis/concepts/matt/concurrency.md (1500 bytes)
- docs/analysis/concepts/matt/merger-subagent.md (1506 bytes)
- docs/analysis/concepts/matt/pr-branch.md (1655 bytes)
- docs/analysis/concepts/matt/code-review.md (3858 bytes)
- docs/analysis/concepts/matt/schema.md (817 bytes)
- docs/analysis/concepts/matt/changelog.md (806 bytes)
- docs/analysis/concepts/matt/changesets-changelog-github.md (1060 bytes)
- docs/analysis/concepts/matt/commit.md (987 bytes)
- docs/analysis/concepts/matt/privatepackages.md (847 bytes)
- docs/analysis/concepts/matt/fixed.md (793 bytes)
- docs/analysis/concepts/matt/linked.md (802 bytes)
- docs/analysis/concepts/matt/access.md (778 bytes)
- docs/analysis/concepts/matt/basebranch.md (803 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Multiple concepts originate from `.changeset/add-implement-spec-skill.md:5`, which densely introduces 14 concepts relating to parallel multi-subagent spec execution (`implement-spec`, `in-progress bucket`, `spec`, `tickets`, `PR`, `task graph`, `blocking edges`, `implementer subagents`, `background worktrees`, `ready frontier`, `concurrency`, `merger subagent`, `PR branch`, `/code-review`).
- Concepts from `.changeset/config.json` (`$schema`, `changelog`, `@changesets/changelog-github`, `commit`, `privatePackages`, `fixed`, `linked`, `access`, `baseBranch`) represent configuration and dependency names rather than lifecycle concepts; per D-023, these were classified with `kind: name-only`.
- The slug `code-review` corresponds to verbatim `/code-review` and is modeled as a `kind: gate` with 21 occurrences across the package.
- In `spec` and `tickets`, defect fields reflect upstream missing command paths (`missing-path`) identified in `skills/engineering/to-spec/SKILL.md` and `skills/engineering/to-tickets/SKILL.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 67 source files and citing inventory entries; approximate tokens of output written: ~16,500 tokens across 30 concept cards and this unit report.
