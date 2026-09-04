---
unit: inv-addy-22
phase: 1
package: addy
session: 014
subagent_returned: complete
---

# Unit inv-addy-22

## Files assigned
- [x] `external/performance-optimization.md` (26,603 bytes)
- [x] `external/planning-and-task-breakdown.md` (22,310 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-performance-optimization-md.md` (18,587 bytes)
- `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md` (16,120 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-22.md` (4,249 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Self-Contradictory Command Binding on External Performance Optimization Page**:
  `external/performance-optimization.md` exhibits an internal contradiction between its header badge and sidebar metadata. The header badge at line 5 and purpose text at lines 1, 5 specify `/webperf` ("Run the audit via /webperf."), whereas the sidebar card at line 12 specifies "Command: /review". In the upstream repository, `/webperf` (`commands/webperf.toml:1-4`) is a dedicated single-persona web application performance auditing command invoking the `web-performance-auditor` subagent with Lighthouse/CrUX/DevTools MCP inputs, whereas `/review` (`commands/review.toml:1-12`) conducts a broader five-axis code review across correctness, readability, architecture, security, and performance.
- **Review Phase Cluster and Related Skills Discovery**:
  `external/performance-optimization.md` clusters `performance-optimization` with `code-review-and-quality` (command `/review`), `code-simplification` (command `/code-simplify`), and `security-and-hardening` under `Review phase` (`external/performance-optimization.md:12`). This positions performance optimization as an integral pre-merge quality and verification gate alongside security and code simplification.
- **Plan Phase Taxonomy & Lifecycle Mapping for Planning and Task Breakdown**:
  `external/planning-and-task-breakdown.md` positions `planning-and-task-breakdown` under `Plan phase` and maps it to slash command `/plan` (aligning with `commands/planning.toml`). It addresses the transition from high-level spec to ordered, verifiable implementation tasks.
- **Standardized 6-Part Anatomy Framework vs Operational SKILL.md Reality**:
  Both external web pages render a standardized 6-row anatomy table (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`) with the slogan "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" (lines 9-10). In the actual repository implementations, neither skill contains a section titled `Process` (`skills/performance-optimization/SKILL.md:30` has `The Optimization Workflow`, and `skills/planning-and-task-breakdown/SKILL.md:22` has `The Planning Process`), both title their rationalizations `Common Rationalizations`, and both omit substantial operational content (Core Web Vitals targets, diagnostic decision trees, task sizing heuristics, output file schemas `tasks/plan.md`/`tasks/todo.md`, and verification checklists).
- **Distribution via Vercel Labs open skills CLI**:
  Both external pages promote skill installation via `npx skills add addyosmani/agent-skills --skill <name>` using the Vercel Labs open `skills CLI` (`github.com/vercel-labs/skills`), which is not documented in `README.md`, `CLAUDE.md`, or `package.json`.
- **Heavy Static Packaging Overhead in Snapshots**:
  Over 90-94% of the raw 48,913 bytes across both snapshot files consists of Astro-compiled markup, CSS stylesheets, navigation chrome, and Netlify telemetry scripts rather than semantic agent instructions.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,228 tokens (48,913 bytes across 2 external HTML docs).
- Approximate tokens of output written: ~9,600 tokens across 2 inventory cards and 1 unit report.
