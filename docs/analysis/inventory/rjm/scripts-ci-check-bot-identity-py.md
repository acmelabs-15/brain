---
package: rjm
path: scripts/ci/check_bot_identity.py
type: script
bytes: 9119
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_bot_identity.py

## Purpose — required, verbatim
> "Report which GitHub identity a CI credential actually resolves to." — scripts/ci/check_bot_identity.py:1

## Design intent — required
Verifies at CI runtime whether the authentication credential (`BOT_PAT` or `IDENTITY_TOKEN`) resolves to the expected bot service account (`rjmurillo-bot`, account id `250269933`) rather than a human personal account, preventing accidental sharing and exhaustion of human GitHub API rate-limit quotas during CI runs (addressing issue #4607 and ADR-026 Decision 5). Without it, credential misconfigurations remain invisible until rate limits are hit.

## Phase — required
none

## Inputs — required
- Environment variable `IDENTITY_TOKEN` — bearer token credential to probe via GitHub API — scripts/ci/check_bot_identity.py:166
- Environment variable `TOKEN_LABEL` — display label for token in logs (default `"BOT_PAT"`) — scripts/ci/check_bot_identity.py:53,157
- Environment variable `EXPECTED_BOT_ID` — numeric account id of expected bot (default `"250269933"`) — scripts/ci/check_bot_identity.py:51,158
- Environment variable `EXPECTED_BOT_LOGIN` — login handle of expected bot (default `"rjmurillo-bot"`) — scripts/ci/check_bot_identity.py:52,159
- Environment variable `IDENTITY_STRICT` — boolean flag to enable strict non-zero exit codes — scripts/ci/check_bot_identity.py:150
- Environment variable `GITHUB_API_URL` — GitHub REST API base URL (default `"https://api.github.com"`) — scripts/ci/check_bot_identity.py:54,176
- Environment variable `GITHUB_STEP_SUMMARY` — destination path for GitHub Actions markdown summary — scripts/ci/check_bot_identity.py:142
- Environment variable `GITHUB_OUTPUT` — workflow step output file path — scripts/ci/check_bot_identity.py:145
- GitHub REST API `GET /user` endpoint — scripts/ci/check_bot_identity.py:93

## Outputs — required
- Job summary heading and detail appended to `GITHUB_STEP_SUMMARY` file — scripts/ci/check_bot_identity.py:141-144
- Step output `identity_verdict` (`MATCH`, `MISMATCH`, `MISSING`, or `UNKNOWN`) written to `GITHUB_OUTPUT` — scripts/ci/check_bot_identity.py:145
- GitHub Actions workflow notice, warning, or error log annotations — scripts/ci/check_bot_identity.py:172,184,196,209

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-026` — scripts/ci/check_bot_identity.py:3 — used here
- `rjmurillo-bot` — scripts/ci/check_bot_identity.py:4 — used here
- `Issue #4607` — scripts/ci/check_bot_identity.py:5 — used here
- `verify_github_auth.py` — scripts/ci/check_bot_identity.py:8 — used here
- `retrospective 2026-08-05-pr-queue-and-doctrine.md` — scripts/ci/check_bot_identity.py:11 — used here
- `MATCH` — scripts/ci/check_bot_identity.py:19 — defined here
- `EXPECTED_BOT_ID` — scripts/ci/check_bot_identity.py:19 — used here
- `MISMATCH` — scripts/ci/check_bot_identity.py:20 — defined here
- `IDENTITY_STRICT` — scripts/ci/check_bot_identity.py:22 — used here
- `MISSING` — scripts/ci/check_bot_identity.py:23 — defined here
- `UNKNOWN` — scripts/ci/check_bot_identity.py:25 — defined here
- `.claude/rules/ci-scripts.md` — scripts/ci/check_bot_identity.py:30 — used here
- `EXIT_OK` — scripts/ci/check_bot_identity.py:45 — defined here
- `EXIT_CONFIG` — scripts/ci/check_bot_identity.py:46 — defined here
- `EXIT_EXTERNAL` — scripts/ci/check_bot_identity.py:47 — defined here
- `EXIT_AUTH` — scripts/ci/check_bot_identity.py:48 — defined here
- `DEFAULT_EXPECTED_BOT_ID` — scripts/ci/check_bot_identity.py:51 — defined here
- `DEFAULT_EXPECTED_BOT_LOGIN` — scripts/ci/check_bot_identity.py:52 — defined here
- `DEFAULT_TOKEN_LABEL` — scripts/ci/check_bot_identity.py:53 — defined here
- `DEFAULT_API_URL` — scripts/ci/check_bot_identity.py:54 — defined here
- `ProbeResult` — scripts/ci/check_bot_identity.py:63 — defined here
- `AGENTS.md` — scripts/ci/check_bot_identity.py:68 — used here
- `probe_user` — scripts/ci/check_bot_identity.py:77 — defined here
- `check_bot_identity` — scripts/ci/check_bot_identity.py:153 — defined here
- `main` — scripts/ci/check_bot_identity.py:214 — defined here

## Structure
- Module docstring documenting motivation, verdicts, and rules (lines 1-32)
- Imports and exit code constants (lines 33-60)
- `ProbeResult` frozen dataclass (lines 62-75)
- `probe_user` HTTPS request handler with error classification (lines 77-129)
- `_append_line` and `_emit` output writers (lines 131-147)
- `_strict` configuration parser (lines 149-151)
- `check_bot_identity` comparison and verdict dispatcher (lines 153-212)
- `main` argument validator and runner (lines 214-224)
- `__main__` caller (lines 226-228)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/check_bot_identity.py`
- **language:** Python 3
- **lines:** 228
- **documented invocation:**
  > "The workflow step runs this file with bare ``python3``, so every import must" — scripts/ci/check_bot_identity.py:29
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/check_bot_identity.py`
- **stdout:**
  ```text
  ::warning::BOT_PAT identity MISSING: BOT_PAT is empty in this run (fork PRs and unset secrets both look like this). Identity cannot be verified.
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `> "- ``MATCH``: probe succeeded and the id equals ``EXPECTED_BOT_ID``. Exit 0." — scripts/ci/check_bot_identity.py:19`
  - `> "token for the wrong account; only the repository owner can rotate it. Warns" — scripts/ci/check_bot_identity.py:21`
  - `> "by default; ``IDENTITY_STRICT`` makes it exit 4 (auth)." — scripts/ci/check_bot_identity.py:22`
  - `> "- ``MISSING``: no credential supplied (fork PRs see empty secrets). Warns by" — scripts/ci/check_bot_identity.py:23`
  - `> "default; strict mode exits 2 (config)." — scripts/ci/check_bot_identity.py:24`
  - `> "- ``UNKNOWN``: the probe failed (HTTP error, network, malformed payload). This" — scripts/ci/check_bot_identity.py:25`
  - `> "is never reported as a pass. Warns by default; strict mode exits 3" — scripts/ci/check_bot_identity.py:26`
  - `> "(external)." — scripts/ci/check_bot_identity.py:27`
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/ci/check_bot_identity.py:164
  - `return EXIT_CONFIG if strict else EXIT_OK` — scripts/ci/check_bot_identity.py:174
  - `return EXIT_OK` — scripts/ci/check_bot_identity.py:187
  - `return EXIT_AUTH if result.auth_failure else EXIT_EXTERNAL` — scripts/ci/check_bot_identity.py:188
  - `return EXIT_OK` — scripts/ci/check_bot_identity.py:198
  - `return EXIT_AUTH if strict else EXIT_OK` — scripts/ci/check_bot_identity.py:211
  - `return EXIT_CONFIG` — scripts/ci/check_bot_identity.py:221
  - `raise SystemExit(main(sys.argv[1:]))` — scripts/ci/check_bot_identity.py:227
- **for validators/gates:** Can exit non-zero (exits 2 on invalid configuration or CLI args; in strict mode exits 2 on missing token, 3 on external API failure, or 4 on identity mismatch or auth failure). On default branch without arguments or environment variables, exits 0 (non-strict MISSING mode). When `IDENTITY_STRICT=true` is set without token, exits 2.
- **output matches documentation:** yes, logs structured annotations, writes summary to `GITHUB_STEP_SUMMARY`, and emits `identity_verdict` output.

## Defects — required
none

## Observations
Hardened against URL scheme confusion: explicitly validates that `api_url` uses the `https` scheme before making network requests (lines 90-91), preventing SSRF or unintended local file reads via `file://` URLs. Does not print, log, or leak token values under any circumstance (line 82).

## Context cost
9119 bytes, ~2280 tokens. Loads no other internal files. Total context cost: 9119 bytes.
