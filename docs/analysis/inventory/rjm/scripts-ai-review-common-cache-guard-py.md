---
package: rjm
path: scripts/ai_review_common/cache_guard.py
type: script
bytes: 5630
unit: inv-rjm-195
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ai_review_common/cache_guard.py

## Purpose — required, verbatim
> "Cache population guard for the agent-review composite action." — scripts/ai_review_common/cache_guard.py:1

## Design intent — required
Guards the saving of AI review results into the review cache during CI runs. It validates agent names against regex patterns to prevent path traversal (CWE-22), refuses to cache malformed results (empty verdicts, infrastructure failures, or `NEEDS_REVIEW`), anchors cache storage to the repository root instead of the caller's working directory, and uses atomic file replacement to ensure cache consistency.

## Phase — required
rjm:REVIEW

## Inputs — required
- "github_output = os.environ.get("GITHUB_OUTPUT", "").strip()" — scripts/ai_review_common/cache_guard.py:134
- "agent=os.environ.get("AGENT", "")" — scripts/ai_review_common/cache_guard.py:141
- "verdict=os.environ.get("VERDICT", "")" — scripts/ai_review_common/cache_guard.py:142
- "findings=os.environ.get("FINDINGS", "")" — scripts/ai_review_common/cache_guard.py:143
- "infra_failure=os.environ.get("INFRA_FAILURE", "")" — scripts/ai_review_common/cache_guard.py:144

## Outputs — required
- "verdict.txt" — scripts/ai_review_common/cache_guard.py:114
- "findings.txt" — scripts/ai_review_common/cache_guard.py:115
- "infrastructure-failure.txt" — scripts/ai_review_common/cache_guard.py:117
- "cache_populated" — scripts/ai_review_common/cache_guard.py:127

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `agent-review composite action` — scripts/ai_review_common/cache_guard.py:1 — used here
- `NON_CACHEABLE_VERDICTS` — scripts/ai_review_common/cache_guard.py:13 — defined here | used here
- `NEEDS_REVIEW` — scripts/ai_review_common/cache_guard.py:13 — used here
- `_atomic_write_text` — scripts/ai_review_common/cache_guard.py:16 — defined here | used here
- `get_repo_root` — scripts/ai_review_common/cache_guard.py:38 — defined here | used here
- `CacheGuardConfigError` — scripts/ai_review_common/cache_guard.py:55 — defined here | used here
- `validate_agent_name` — scripts/ai_review_common/cache_guard.py:59 — defined here | used here
- `skip_cache_reason` — scripts/ai_review_common/cache_guard.py:68 — defined here | used here
- `append_github_output` — scripts/ai_review_common/cache_guard.py:79 — defined here | used here
- `populate_cache` — scripts/ai_review_common/cache_guard.py:85 — defined here | used here
- `main` — scripts/ai_review_common/cache_guard.py:132 — defined here | used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/cache_guard.py`
- language: Python
- lines: 158
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/ai_review_common/cache_guard.py`, stderr: `::error::GITHUB_OUTPUT is required`, actual exit code: 2
- second test run with environment variables set: `Populated cache directory for critic`, actual exit code: 0
- documented exit codes: none vs. actual exit paths: `return 0` on success (line 153), `return 2` on missing GITHUB_OUTPUT (line 137), `return 2` on CacheGuardConfigError (line 149), `return 3` on OSError (line 152)
- for validators/gates: acts as an execution gate for caching review findings; can exit non-zero (exits 2 when required environment variable GITHUB_OUTPUT is missing or agent name is invalid; exits 3 on filesystem errors)
- does the output match what the documentation claims? yes, guards against non-cacheable verdicts and writes cache entries atomically

## Defects — required
- orphan · scripts/ai_review_common/cache_guard.py:1 · invoked by out-of-scope GitHub Actions composite action .github/actions/agent-review/ and not by in-scope lifecycle scripts.

## Observations
Anchors cache directories to the repository root via `.git` or `.claude` markers rather than process CWD to eliminate CWE-22 path traversal risks. Implements atomic writes via temporary files (`tempfile.mkstemp` and `os.replace`) to prevent corrupted partial cache files from concurrent processes or crashes.

## Context cost
5630 bytes, ~1407 tokens.
