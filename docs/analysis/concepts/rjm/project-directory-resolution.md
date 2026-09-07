---
package: rjm
name: Project Directory Resolution
slug: project-directory-resolution
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Project Directory Resolution

## Definition — verbatim
> "All hooks use `CLAUDE_PROJECT_DIR` (via `get_project_directory()`) for consumer project paths. Never assume the project root is the plugin install directory." — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 64 | defined here | Defined as the requirement to locate consumer project files via CLAUDE_PROJECT_DIR |

## Consumes
`CLAUDE_PROJECT_DIR` environment variable and `os.getcwd()` fallback.

## Produces
Validated absolute filesystem path to the active consumer workspace directory.

## When applied
Applied by lifecycle hooks and scripts when accessing or writing session logs, plans, or repository files.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Project directory resolution is the technique of locating consumer project files via `CLAUDE_PROJECT_DIR` rather than assuming the plugin installation directory is the repository root.
