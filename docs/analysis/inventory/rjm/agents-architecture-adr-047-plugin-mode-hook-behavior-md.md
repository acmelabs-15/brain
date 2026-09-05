---
package: rjm
path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md
type: agent
bytes: 13382
unit: inv-rjm-18
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-047-plugin-mode-hook-behavior.md

## Purpose — required, verbatim
> "All hooks and skills run in plugin mode. No hook uses `CLAUDE_PLUGIN_ROOT` as a skip signal." — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:44

## Design intent — required
Architectural decision record establishing that all hooks and skills execute in marketplace plugin mode rather than bypassing enforcement when `CLAUDE_PLUGIN_ROOT` is present. Mandates a standardized library import bootstrapping pattern (using manifest walk-up to locate `.claude-plugin/plugin.json`), project directory resolution via `CLAUDE_PROJECT_DIR`, idempotent directory creation, and strict path boundary containment validation to protect against path traversal vulnerabilities (CWE-22) in consumer environments.

## Phase — required
cross-phase

## Inputs — required
- Environment variables `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PROJECT_DIR` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:30-31
- Consumer project paths and file system boundaries — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:64-66

## Outputs — required
- Standardized 7-line import boilerplate and path traversal validation logic for hooks and skill scripts — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:76-100

## Invokes — required
- file utilities.py — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:185
- script req003_inline_plugin_root_bootstrap.py — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:246
- file test_plugin_path_resolution.py — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:261
- reference ADR-045 — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:267
- reference ADR-042 — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:268
- reference ADR-035 — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:269
- doc claude-code-plugin-marketplaces.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:274
- doc styleguide.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:276
- doc ADR-047-debate-log.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:283
- doc SR-002-ADR-047-plugin-mode-security-review.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:284
- doc 001-adr-047-plugin-mode-hook-behavior-analysis.md — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:285

## Invoked by — required
- doc readme — .agents/architecture/README.md:123

## Concepts named — required, verbatim
- `Plugin-Mode Hook Behavior` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:12 — defined here
- `marketplace plugin` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:24 — used here
- `CLAUDE_PLUGIN_ROOT` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:30 — used here
- `CLAUDE_PROJECT_DIR` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:31 — used here
- `ADR review enforcement` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38 — used here
- `skill-first guards` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38 — used here
- `session protocol` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38 — used here
- `QA validation` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38 — used here
- `Path Resolution` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:46 — defined here
- `Project Directory Resolution` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:64 — defined here
- `Standard Import Boilerplate` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:72 — defined here
- `Path Normalization` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:144 — defined here
- `Containment Validation` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:154 — defined here
- `Pre-Validation` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:171 — defined here
- `Path Traversal` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:278 — used here
- `Untrusted Search Path` — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:279 — used here

## Structure
- # ADR-047: Plugin-Mode Hook Behavior
- ## Status
- ## Date
- ## Context
- ## Decision
- ### Path Resolution
- ### Project Directory Resolution
- ### Directory Creation
- ### Standard Import Boilerplate
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ### Security Considerations
- ## Implementation Notes
- ### Test Coverage
- ### Error Handling
- ### Checklist for New Hooks
- ## Amendments
- ### 2026-04-29: Manifest walk-up replaces GITHUB_WORKSPACE/parents[N] resolver
- ## Related Decisions
- ## References
- ## Review Evidence

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.agents/architecture/ADR-047-plugin-mode-hook-behavior.md:273` · References `hooks.md` which does not exist in repository root or source tree.
- `missing-path` · `.agents/architecture/ADR-047-plugin-mode-hook-behavior.md:89` · Manifest walk-up searches for `.claude-plugin/plugin.json` at repository root, whereas plugin manifests reside in `.claude/.claude-plugin/plugin.json` and `src/claude/.claude-plugin/plugin.json`.

## Observations
Identifies and resolves the Python bootstrap paradox where library modules cannot be imported prior to manipulating `sys.path`, requiring a documented 7-line boilerplate across 37+ files. Formalizes security defenses against environment variable manipulation in untrusted CI contexts (`pull_request_target`) by enforcing `Path.resolve()` normalization and containment checks.

## Context cost
13382 bytes (~3345 tokens). Architecture decision record and security guide for hook execution.
