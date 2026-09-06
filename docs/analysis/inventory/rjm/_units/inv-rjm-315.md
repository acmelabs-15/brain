---
unit: inv-rjm-315
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-315

## Files assigned
- [x] `templates/agents/code-simplifier.shared.md`
- [x] `templates/agents/comment-analyzer.shared.md`
- [x] `templates/agents/critic.shared.md`
- [x] `templates/agents/debug.shared.md`
- [x] `templates/agents/dependency-auditor.shared.md`
- [x] `templates/agents/devops.shared.md`

## Outputs produced
- `docs/analysis/inventory/rjm/templates-agents-code-simplifier-shared-md.md` (5764 bytes)
- `docs/analysis/inventory/rjm/templates-agents-comment-analyzer-shared-md.md` (5742 bytes)
- `docs/analysis/inventory/rjm/templates-agents-critic-shared-md.md` (7093 bytes)
- `docs/analysis/inventory/rjm/templates-agents-debug-shared-md.md` (4675 bytes)
- `docs/analysis/inventory/rjm/templates-agents-dependency-auditor-shared-md.md` (6687 bytes)
- `docs/analysis/inventory/rjm/templates-agents-devops-shared-md.md` (7114 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Divergence cards for variant pairs in the duplication ledger (V7: dependency-auditor, V16: critic, V17: debug, V18: code-simplifier, V20: comment-analyzer) pre-exist under `docs/analysis/inventory/rjm/_divergence/` and link each template agent to its `.claude/agents/*.md` counterpart.
- `templates/agents/devops.shared.md` has no `.claude/agents/` variant in `rjm-duplicates.md` and exists uniquely as a cross-platform shared template in `templates/agents/`.
- Cross-agent coordination: these agents integrate with `implementer`, `qa`, `architect`, `security`, and `milestone-planner` across rjm lifecycle phases (`rjm:build`, `rjm:review`, `rjm:plan`, `rjm:test`, `rjm:ship`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: 12456; approximate tokens of output written: 9718.
