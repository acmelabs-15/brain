---
unit: inv-addy-42
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-42

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/git-workflow-and-versioning/SKILL.md` (14063 bytes, 356 lines)

## Outputs produced
- `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md` (12365 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/git-workflow-and-versioning/SKILL.md` references four skills: `code-review-and-quality` (inv-addy-40), `api-and-interface-design` (inv-addy-37), `deprecation-and-migration` (inv-addy-41), and `shipping-and-launch` (inv-addy-45). All exist on disk.
- Taxonomy placement: The skill defines its trigger as "Always. Every code change flows through git." (line 14), but Addy's documentation and command taxonomy (`CLAUDE.md`, `README.md`, and `skills/using-agent-skills/SKILL.md`) places it under the `Ship` phase. This cross-phase vs single-phase tension should be considered in Phase 3 concordance / Phase 4 lifecycle alignment.
- Evaluation fixture overlap: `evals/fixtures/git-workflow-and-versioning/` contains fixtures (`app.js`, `app.test.js`, `.eval/working-tree.patch`) and `evals/cases/git-workflow-and-versioning.json` which test atomic commit behaviors and dirty worktree assertions; those were inventoried under earlier units (inv-addy-9, inv-addy-10, inv-addy-11).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3,515 tokens (14,063 bytes). Approximate tokens of output written: ~3,100 tokens (12,365 bytes).
