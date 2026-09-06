---
package: rjm
path: scripts/github_core/protocol.py
type: script
bytes: 823
unit: inv-rjm-242
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/protocol.py, sha256: 76c0595da9bf62dbe6851c5ef98b2d32a8a75106eaafcbd9338ba03c92ed8c76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/protocol.py

## Purpose — required, verbatim
> "GitHubClient protocol: transport-layer abstraction for testable API access." — scripts/github_core/protocol.py:1

## Design intent — required
Defines a PEP 544 structural subtyping protocol (GitHubClient) for GitHub API transports. By decoupling consumers from concrete network transports (such as the gh CLI or httpx), it allows automation scripts to be easily tested with mock or fake transport implementations without performing live remote network operations.

## Phase — required
cross-phase

## Inputs — required
- API endpoint string (`endpoint: str`) at `scripts/github_core/protocol.py:16`, `scripts/github_core/protocol.py:18`, and `scripts/github_core/protocol.py:20`.
- Request payload dictionary (`payload: dict[str, Any]`) at `scripts/github_core/protocol.py:18` and `scripts/github_core/protocol.py:20`.
- GraphQL query string (`query: str`) and optional variables dictionary (`variables: dict[str, Any] | None`) at `scripts/github_core/protocol.py:22-23`.

## Outputs — required
- JSON response dictionary (`dict[str, Any]`) returned by `rest_get`, `rest_post`, `rest_patch`, and `graphql` at `scripts/github_core/protocol.py:16-24`.
- Boolean authentication status (`bool`) returned by `is_authenticated` at `scripts/github_core/protocol.py:26`.

## Invokes — required
none

## Invoked by — required
- script protocol — scripts/github_core/__init__.py:55
- script protocol — scripts/github_core/pull_request_targets.py:20
- script protocol — scripts/github_core/workflow_runs.py:19
- script protocol — scripts/bulk_cancel_guard.py:58

## Concepts named — required, verbatim
- `GitHubClient` — scripts/github_core/protocol.py:9 — defined here
- `rest_get` — scripts/github_core/protocol.py:16 — defined here
- `rest_post` — scripts/github_core/protocol.py:18 — defined here
- `rest_patch` — scripts/github_core/protocol.py:20 — defined here
- `graphql` — scripts/github_core/protocol.py:22 — defined here
- `is_authenticated` — scripts/github_core/protocol.py:26 — defined here

## Structure
none (python module; protocol: GitHubClient; methods: rest_get, rest_post, rest_patch, graphql, is_authenticated)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/protocol.py`, language: Python 3, lines: 27
- documented invocation: none (pure protocol definition module)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/protocol.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.protocol import GitHubClient; print('protocol:', GitHubClient)"`
  abridged stdout: `protocol: <class 'scripts.github_core.protocol.GitHubClient'>`
  **actual exit code:** 0
- documented exit codes: none (protocol definition) vs. actual exit paths in code: no exit paths; execution exits 0
- for validators/gates:
  - can it exit non-zero? no (defines typing protocol without executable control flow)
  - does it fail on the source repo's own default branch? no, module execution exits 0
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Runtime checkability: marked with `@runtime_checkable` at line 8, enabling runtime protocol conformance checks via `isinstance(client, GitHubClient)`.
- Transport abstraction: completely decouples high-level GitHub workflow scripts (`bulk_cancel_guard`, `workflow_runs`, `workflow_provenance`) from CLI execution details.
- Context cost: 823 bytes, approximately 206 tokens.
