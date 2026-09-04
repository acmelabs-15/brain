---
unit: inv-addy-14
phase: 1
package: addy
session: 013
subagent_returned: complete
---

# Unit inv-addy-14

## Files assigned
- [x] `external/documentation-and-adrs.md` (26,223 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-documentation-and-adrs-md.md` (21,867 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-14.md` (3,705 bytes)

## Scripts executed
- `external/documentation-and-adrs.md:8` — `bunx --yes skills add addyosmani/agent-skills --skill documentation-and-adrs -y --copy` (in isolated temp directory) — Exit code: `0` (Output: Agent detected — installing non-interactively, cloned repository, selected and copied 1 skill: documentation-and-adrs → ./.agents/skills/documentation-and-adrs)
- `external/documentation-and-adrs.md:8, 15` — `bunx --yes skills add addyosmani/agent-skills -l` — Exit code: `0` (Output: Listed all 25 skills from addyosmani/agent-skills including documentation-and-adrs with summary description)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Ship Phase Alignment and Relationship to inv-addy-28 / inv-addy-36**:
  `external/documentation-and-adrs.md` positions `documentation-and-adrs` within the `Ship phase` alongside sibling skills `git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`. It associates the phase with slash command `/ship`, which is primarily implemented by `shipping-and-launch` (`inv-addy-28`). The canonical in-repo skill definition is `skills/documentation-and-adrs/SKILL.md` (`inv-addy-36`).
- **Command Binding Ambiguity and Doc Drift**:
  The external page sidebar pairs `documentation-and-adrs` with `Command /ship`. However, `/ship` in `.claude/commands/ship.md:5` and `commands/ship.toml:4` specifically invokes `shipping-and-launch`. In Phase B step 6 (`.claude/commands/ship.md:37`), `/ship` directs the agent to verify documentation (README, ADRs, changelog) directly without invoking the `documentation-and-adrs` skill. There is no dedicated slash command (e.g. `/adr` or `/doc`) in `commands/`.
- **Skill Anatomy vs In-Repo Structure**:
  The external page asserts a standardized 6-section skill anatomy ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"). However, the underlying repository skill `skills/documentation-and-adrs/SKILL.md` contains no section titled `Process`, organizing its core guidance instead around concrete documentation artifacts and workflows: `Architecture Decision Records (ADRs)`, `Inline Documentation`, `API Documentation`, `README Structure`, `Changelog Maintenance`, and `Documentation for Agents`. It also titles its rationalization section `Common Rationalizations` (line 259) rather than `Rationalizations`.
- **Packaging Overhead in External Docs**:
  Like other external doc snapshots in the `agent-skills` package, `external/documentation-and-adrs.md` is an Astro-compiled static HTML page (26,223 bytes) with significant boilerplate (CSS, SVG icons, Netlify RUM scripts, navigation chrome). The actual skill-specific content comprises less than 1,500 bytes (~6% of total file weight).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,555 tokens (26,223 bytes across 1 file).
- Approximate tokens of output written: ~5,500 tokens across 1 inventory card and 1 unit report.
