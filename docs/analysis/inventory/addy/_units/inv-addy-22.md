---
unit: inv-addy-22
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-22

## Files assigned
- [x] `sources/addy-external/git-workflow-and-versioning.md` (26317 bytes, 20 lines)

## Outputs produced
- `docs/analysis/inventory/addy/external-git-workflow-and-versioning-md.md` (9609 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/git-workflow-and-versioning.md` is an external documentation snapshot from `https://skills.addy.ie/skills/git-workflow-and-versioning/` corresponding to `skills/git-workflow-and-versioning/SKILL.md` (unit inv-addy-11).
- Lifecycle phase placement: `external/git-workflow-and-versioning.md:5, 12` categorizes this skill in the `Ship phase` (`addy:Ship`) and associates it with the `/ship` command in the sidebar UI. This aligns with `CLAUDE.md:26` and `README.md:371` in the source repository.
- Scope and triggering contrast: While categorized under `Ship` phase, the external page's trigger is "Making any code change (always)." (line 5), matching `skills/git-workflow-and-versioning/SKILL.md:14` ("Always. Every code change flows through git."). However, neither `commands/ship.toml` nor `.claude/commands/ship.md` invokes `git-workflow-and-versioning` directly (they invoke `shipping-and-launch` instead). Rather, `git-workflow-and-versioning` operates as cross-cutting version control discipline across build, test, and ship cycles.
- Peer skills in Ship phase: The external doc features navigation cards for `ci-cd-and-automation` (inv-addy-14 / inv-addy-21), `deprecation-and-migration` (inv-addy-23), and `documentation-and-adrs` (inv-addy-19).

## Blocked or uncertain
none

## Time and size
- Source read: 26,317 bytes (~6,579 tokens)
- Output written: 9,609 bytes (~2,402 tokens) for inventory card, plus unit report (~500 tokens)
