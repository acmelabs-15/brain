---
package: rjm
name: skip_if_consumer_repo
slug: skip-if-consumer-repo
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
  - {path: scripts/hook_utilities/__init__.py, sha256: 6da956883f74db3b17a744d1a96adfc5810f5fe26d04265957dd16aed6688967}
  - {path: scripts/hook_utilities/guards.py, sha256: 9e1ceb95f567fff54f584d47b1e0cf9691eaa40ae85f38b0a1284bd07e6cdfb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skip_if_consumer_repo

## Definition — verbatim
> "def skip_if_consumer_repo(hook_name: str) -> bool:" — scripts/hook_utilities/guards.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 48 | used here | Cited as the guard function causing 12 of 13 vendored hooks to no-op in external consumer repos. |
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 185 | used here | Cited in analysis of self-neutering guard behavior in external consumer installations. |
| scripts/hook_utilities/__init__.py | 11 | used here | Exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/guards.py | 162 | defined here | Function returning True to skip hook execution when running outside the project repository. |

## Consumes
Git remote origin URL and fallback repository identity checks (`pyproject.toml`).

## Produces
Boolean flag directing hooks to skip execution when running in external consumer repositories.

## When applied
Evaluated at the entry point of hook scripts to prevent internal guards from executing on consumers.

## Sub-concepts
none

## Part of
hook-governance

## Implementation status
clean for script implementations; defects: missing-path, doc-drift on citing ADR-084 and ADR-085

## Design notes
`skip_if_consumer_repo` is a runtime guard function that checks whether the executing repository is the canonical `ai-agents` repo or an external consumer. If running in a consumer repo, it immediately returns `True` and outputs a skip notice, preventing repo-specific internal protocols from breaking or delaying consumer workflows.
