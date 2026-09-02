---
unit: inv-addy-3
phase: 1
package: addy
session: 003
subagent_returned: complete
---

# Unit inv-addy-3

## Files assigned
- [x] sources/addy/references/performance-checklist.md
- [x] sources/addy/references/orchestration-patterns.md
- [x] sources/addy/references/testing-patterns.md

## Outputs produced
- docs/analysis/inventory/addy/references-performance-checklist-md.md (12,637 bytes)
- docs/analysis/inventory/addy/references-orchestration-patterns-md.md (11,608 bytes)
- docs/analysis/inventory/addy/references-testing-patterns-md.md (9,011 bytes)

## Scripts executed
- scripts/synthesis/coverage.ts, `bun run scripts/synthesis/coverage.ts`, exit code: 1 (expected: unchecked rows remaining across repository)
- scripts/synthesis/glossary-lint.ts, `bun run scripts/synthesis/glossary-lint.ts`, exit code: 0
- test suite, `bun test`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Performance Optimization Reference (`references/performance-checklist.md`)**:
  - Establishes concrete, measurable targets for Core Web Vitals (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).
  - Bridges frontend render scheduling (`yieldToMain`, `scheduler.yield()`, `isInputPending()`, `requestIdleCallback`) with network and backend database optimizations.
  - Formulates a formal caching strategy taxonomy (cache-aside, read-through, write-through, write-behind, negative caching, stampede protection with request coalescing `loadOnce`).
  - Connects runtime measurement tooling (`CrUX Vis`, `Lighthouse CLI`, `web-vitals/attribution`, DevTools Performance panel CPU throttling) directly to anti-pattern mitigations.

- **Orchestration Patterns Reference (`references/orchestration-patterns.md`)**:
  - Foundational architectural reference setting the governing composition rule: "the user (or a slash command) is the orchestrator. Personas do not invoke other personas. Skills are mandatory hops inside a persona's workflow."
  - Codifies 5 endorsed patterns:
    1. *Direct invocation*: Single persona, single artifact, single round trip (baseline).
    2. *Single-persona slash command*: Saved prompt wrapping one persona with skills.
    3. *Parallel fan-out with merge*: Multiple subagents dispatched in a single turn with independent context windows; merge happens in main context.
    4. *Sequential pipeline as user-driven slash commands*: User runs `/spec` → `/plan` → `/build` → `/test` → `/review` → `/ship` retaining human checkpoints and avoiding lossy summarization hops.
    5. *Research isolation*: Spawning read-only subagents (e.g. built-in `Explore`) returning only a concise digest to preserve main session context.
  - Clarifies Claude Code integration primitives: Subagents (isolated reporting) vs. Agent Teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, collaborative peer messaging), built-in subagents (`Explore`, `Plan`, `general-purpose`), plugin agent frontmatter restrictions (no `hooks`, `mcpServers`, `permissionMode` in plugin agents).
  - Outlines 4 critical anti-patterns with failure mechanisms: Router persona ("meta-orchestrator"), Persona calling persona, Sequential paraphrasing orchestrator, Deep persona trees.
  - Provides a complete worked example of competing-hypothesis debugging using Agent Teams with prompt templates and lead cleanup workflows.
  - Highlights a documentation drift defect (`doc-drift`): `orchestration-patterns.md` fully endorses and illustrates Agent Teams, whereas `AGENTS.md:80`, `docs/agents.md:46`, and `docs/developer-onboarding.md:23` claim parallel fan-out with merge is the "only" multi-persona orchestration pattern endorsed.

- **Testing Patterns Reference (`references/testing-patterns.md`)**:
  - Provides reference implementations in JavaScript/TypeScript for the core testing pyramid: Unit (Jest), Component UI (React Testing Library with accessible role queries), HTTP API Integration (Supertest), and E2E Browser Testing (Playwright).
  - Codifies strict "Mock at Boundaries Only" discipline with an explicit boundary tree: mock external I/O (Database, HTTP, Filesystem, External APIs, Time/Date) while forbidding mocks on internal application logic (Utilities, Business logic, Transformations, Validation, Pure functions).
  - Details an 8-row anti-pattern reference matrix (Testing implementation details, Snapshot everything, Shared mutable state, Testing third-party code, Skipping tests to pass CI, Using `test.skip` permanently, Overly broad assertions, No async error handling).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,700 tokens (3 source files, 38,800 bytes, 844 total lines)
- Approximate tokens of output written: ~8,312 tokens (3 inventory entries, 33,250 bytes)
