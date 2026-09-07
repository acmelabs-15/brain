---
unit: cc-rjm-81
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-81

## Files assigned
- [x] .claude/agents/security.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-md.md

## Outputs produced
- docs/analysis/concepts/rjm/owasp-a02-2021.md (1197 bytes)
- docs/analysis/concepts/rjm/cwe-327-broken-or-risky-cryptographic-algorithm.md (1378 bytes)
- docs/analysis/concepts/rjm/cwe-759-one-way-hash-without-salt.md (1293 bytes)
- docs/analysis/concepts/rjm/cwe-326-inadequate-encryption-strength.md (1319 bytes)
- docs/analysis/concepts/rjm/cwe-295-improper-certificate-validation.md (1350 bytes)
- docs/analysis/concepts/rjm/cwe-20-improper-input-validation.md (1302 bytes)
- docs/analysis/concepts/rjm/cwe-79-cross-site-scripting-xss.md (1321 bytes)
- docs/analysis/concepts/rjm/cwe-129-improper-validation-of-array-index.md (1355 bytes)
- docs/analysis/concepts/rjm/cwe-1333-inefficient-regular-expression.md (1360 bytes)
- docs/analysis/concepts/rjm/owasp-a04-2021.md (1187 bytes)
- docs/analysis/concepts/rjm/cwe-400-uncontrolled-resource-consumption.md (1363 bytes)
- docs/analysis/concepts/rjm/cwe-770-allocation-without-limits.md (1325 bytes)
- docs/analysis/concepts/rjm/cwe-772-missing-release-of-resource.md (1308 bytes)
- docs/analysis/concepts/rjm/cwe-404-improper-resource-shutdown.md (1311 bytes)
- docs/analysis/concepts/rjm/owasp-a09-2021.md (1251 bytes)
- docs/analysis/concepts/rjm/cwe-209-error-message-information-exposure.md (1372 bytes)
- docs/analysis/concepts/rjm/cwe-532-sensitive-information-in-log-file.md (1358 bytes)
- docs/analysis/concepts/rjm/cwe-117-improper-output-neutralization-for-logs.md (1369 bytes)
- docs/analysis/concepts/rjm/owasp-a08-2021.md (1235 bytes)
- docs/analysis/concepts/rjm/cwe-306-missing-authentication-for-critical-function.md (1400 bytes)
- docs/analysis/concepts/rjm/cwe-862-missing-authorization.md (1293 bytes)
- docs/analysis/concepts/rjm/cwe-426-untrusted-search-path.md (1299 bytes)
- docs/analysis/concepts/rjm/cwe-502-deserialization-of-untrusted-data.md (1355 bytes)
- docs/analysis/concepts/rjm/cwe-362-race-condition.md (1262 bytes)
- docs/analysis/concepts/rjm/cwe-367-toctou-race-condition.md (1309 bytes)
- docs/analysis/concepts/rjm/cwe-484-omitted-break-statement.md (1312 bytes)
- docs/analysis/concepts/rjm/cwe-665-improper-initialization.md (1315 bytes)
- docs/analysis/concepts/rjm/cwe-1321-prototype-pollution.md (1296 bytes)
- docs/analysis/concepts/rjm/owasp-agentic-top-10-2026.md (1216 bytes)
- docs/analysis/concepts/rjm/asi01-cwe-94-agent-goal-hijack.md (1292 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-81.md

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- bun scripts/synthesis/memo.ts stamp-unit cc-rjm-81 --model "Gemini 3.8 Flash" --effort high, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The 30 concept cards in unit cc-rjm-81 cover security vulnerability taxonomy categories, common weakness enumerations (CWE), and OWASP guidelines mapped in the security agent specification (`.claude/agents/security.md`).
- Categories include Cryptographic Failures (`OWASP A02:2021`, `CWE-327`, `CWE-759`, `CWE-326`, `CWE-295`), Input Validation and Sanitization (`CWE-20`, `CWE-79`, `CWE-129`, `CWE-1333`), Insecure Design and Resource Management (`OWASP A04:2021`, `CWE-400`, `CWE-770`, `CWE-772`, `CWE-404`), Security Logging and Monitoring Failures (`OWASP A09:2021`, `CWE-209`, `CWE-532`, `CWE-117`), Software and Data Integrity Failures (`OWASP A08:2021`, `CWE-306`, `CWE-862`, `CWE-426`, `CWE-502`), Concurrency and Logic Flaws (`CWE-362`, `CWE-367`, `CWE-484`, `CWE-665`, `CWE-1321`), and Agentic Security (`OWASP Agentic Top 10:2026`, `ASI01/CWE-94`).
- All cards are categorized as `kind: name-only` following METHOD.md R6 and D-023 as external vulnerability taxonomy references.
- All 30 cards pass byte-exact quote verification with `quote-check.ts` and are stamped with `memo.ts stamp-unit cc-rjm-81`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens across 1 source file and 1 citing inventory card; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
