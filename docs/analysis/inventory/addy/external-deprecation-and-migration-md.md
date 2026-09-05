---
package: addy
path: external/deprecation-and-migration.md
type: doc
bytes: 26252
unit: inv-addy-18
aliases: []
memo_inputs:
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/deprecation-and-migration.md

## Purpose — required, verbatim
> "Manages deprecation and migration. A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code." — external/deprecation-and-migration.md:5

## Design intent — required
Serves as the public web documentation and discovery page for the `deprecation-and-migration` skill on `skills.addy.ie`. It outlines the skill's core mission (treating code as liability, compulsory vs advisory deprecation, safe migration patterns, and zombie-code removal), provides direct CLI install commands via the skills CLI, situates the skill in the Ship lifecycle phase (associating it with `/ship`), links to adjacent Ship phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `documentation-and-adrs`), and links to the full canonical `SKILL.md` in the GitHub repository. Without this page, developers browsing the agent-skills web documentation would lack an accessible reference and CLI install command for safely sunsetting features and retiring legacy code.

## Phase — required
addy:Ship

## Inputs — required
- Triggering conditions: "Removing old systems, migrating users, or sunsetting features." — external/deprecation-and-migration.md:5
- User action: selection of CLI install command for standalone skill (`npx skills add addyosmani/agent-skills --skill deprecation-and-migration`) or full catalog pack (`npx skills add addyosmani/agent-skills`) — external/deprecation-and-migration.md:8

## Outputs — required
- Guidance on code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal across 6 anatomy sections: Overview, When to Use, Process, Rationalizations, Red Flags, Verification — external/deprecation-and-migration.md:10
- Navigation links to repository source `SKILL.md`, related Ship phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `documentation-and-adrs`), and lifecycle overview — external/deprecation-and-migration.md:11-12

## Invokes — required
- skill deprecation-and-migration — external/deprecation-and-migration.md:8
- command /ship — external/deprecation-and-migration.md:12
- skill git-workflow-and-versioning — external/deprecation-and-migration.md:12
- skill ci-cd-and-automation — external/deprecation-and-migration.md:12
- skill documentation-and-adrs — external/deprecation-and-migration.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `code-as-liability` — external/deprecation-and-migration.md:5 — used here
- `compulsory vs advisory deprecation` — external/deprecation-and-migration.md:5 — used here
- `migration patterns` — external/deprecation-and-migration.md:5 — used here
- `zombie-code removal` — external/deprecation-and-migration.md:5 — used here
- `Ship phase` — external/deprecation-and-migration.md:5, 12 — used here
- `skills CLI` — external/deprecation-and-migration.md:6 — used here
- `Overview` — external/deprecation-and-migration.md:10 — used here
- `When to Use` — external/deprecation-and-migration.md:10 — used here
- `Process` — external/deprecation-and-migration.md:10 — used here
- `Rationalizations` — external/deprecation-and-migration.md:10 — used here
- `Red Flags` — external/deprecation-and-migration.md:10 — used here
- `Verification` — external/deprecation-and-migration.md:10 — used here
- `/ship` — external/deprecation-and-migration.md:12 — used here
- `git-workflow-and-versioning` — external/deprecation-and-migration.md:12 — used here
- `ci-cd-and-automation` — external/deprecation-and-migration.md:12 — used here
- `documentation-and-adrs` — external/deprecation-and-migration.md:12 — used here

## Structure
- `deprecation-and-migration` — external/deprecation-and-migration.md:5
- `Install just this skill` — external/deprecation-and-migration.md:5
- `How this skill is structured` — external/deprecation-and-migration.md:8
- `Ship phase` — external/deprecation-and-migration.md:12
- `More in the Ship phase` — external/deprecation-and-migration.md:12
- `git-workflow-and-versioning` — external/deprecation-and-migration.md:12
- `ci-cd-and-automation` — external/deprecation-and-migration.md:12
- `documentation-and-adrs` — external/deprecation-and-migration.md:12
- `Product` — external/deprecation-and-migration.md:15
- `Setup` — external/deprecation-and-migration.md:15
- `Resources` — external/deprecation-and-migration.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/deprecation-and-migration.md:10 · The page asserts in "How this skill is structured" that every skill follows a 6-part anatomy including "03 Process", but skills/deprecation-and-migration/SKILL.md defines its workflow under "The Migration Process" (line 34) and "Migration Patterns" (line 79) without a generic "Process" section.
- doc-drift · external/deprecation-and-migration.md:12 · Places deprecation-and-migration in the Ship phase (associated with command /ship), whereas docs/adoption-guide.md:104 places deprecation-and-migration in "Phase 4 | Pay down, deprecate, observe" after shipping new features.

## Observations
Provides web-based skill discovery and standalone CLI installation instructions (`npx skills add addyosmani/agent-skills --skill deprecation-and-migration`). Encapsulates core principles of code-as-liability, compulsory vs advisory deprecation, migration patterns, and zombie-code removal. Emphasizes safe sunsetting workflows and connects to Ship phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `documentation-and-adrs`).

## Context cost
26,252 bytes (approx. 6,400 tokens) for this external documentation HTML snapshot. Loads standalone without external dependencies.
