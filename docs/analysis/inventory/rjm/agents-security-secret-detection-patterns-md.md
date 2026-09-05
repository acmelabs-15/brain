---
package: rjm
path: .agents/security/secret-detection-patterns.md
type: agent
bytes: 6363
unit: inv-rjm-59
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/security/secret-detection-patterns.md, sha256: f2f9003f9d40084d1277687cecae97e78008a3c6deb61867d6707f44f36e0104}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/secret-detection-patterns.md

## Purpose — required, verbatim
> "This document defines patterns for detecting hardcoded secrets, credentials, and sensitive data in code. Use these patterns to identify potential security risks before code reaches production." — .agents/security/secret-detection-patterns.md:5

## Design intent — required
Provides regex detection rules, high-risk file catalogs, automated scan workflows, and false-positive indicators to detect hardcoded API keys, private keys, authentication credentials, database connection strings, and leaked environment variables before commits reach version control.

## Phase — required
cross-phase

## Inputs — required
- "Candidate Files" — .agents/security/secret-detection-patterns.md:171
- "common secret patterns" — .agents/security/secret-detection-patterns.md:182

## Outputs — required
- "Finding: Hardcoded API Key" — .agents/security/secret-detection-patterns.md:198
- "Commit Prevention" — .agents/security/secret-detection-patterns.md:238

## Invokes — required
- doc static-analysis-checklist.md — .agents/security/secret-detection-patterns.md:257
- doc security-best-practices.md — .agents/security/secret-detection-patterns.md:258
- doc infrastructure-file-patterns.md — .agents/security/secret-detection-patterns.md:259

## Invoked by — required
- doc security-best-practices.md — .agents/security/security-best-practices.md:333

## Concepts named — required, verbatim
`Secret Detection Patterns` — .agents/security/secret-detection-patterns.md:1 — defined here
`API Keys and Tokens` — .agents/security/secret-detection-patterns.md:9 — defined here
`Cloud Provider Keys` — .agents/security/secret-detection-patterns.md:19 — defined here
`AWS Access Keys` — .agents/security/secret-detection-patterns.md:22 — used here
`Authentication Credentials` — .agents/security/secret-detection-patterns.md:46 — defined here
`Private Keys` — .agents/security/secret-detection-patterns.md:60 — used here
`SSH Keys` — .agents/security/secret-detection-patterns.md:71 — used here
`Tokens and Sessions` — .agents/security/secret-detection-patterns.md:78 — defined here
`JWT Tokens` — .agents/security/secret-detection-patterns.md:80 — used here
`Bearer Tokens` — .agents/security/secret-detection-patterns.md:87 — used here
`OAuth` — .agents/security/secret-detection-patterns.md:94 — used here
`Database Credentials` — .agents/security/secret-detection-patterns.md:101 — defined here
`Connection Strings` — .agents/security/secret-detection-patterns.md:103 — used here
`Encryption Keys` — .agents/security/secret-detection-patterns.md:121 — defined here
`Environment Variables (Leaks)` — .agents/security/secret-detection-patterns.md:130 — defined here
`High-Risk Files` — .agents/security/secret-detection-patterns.md:139 — defined here
`Detection Workflow` — .agents/security/secret-detection-patterns.md:169 — defined here
`False Positive Indicators` — .agents/security/secret-detection-patterns.md:205 — defined here
`Remediation Patterns` — .agents/security/secret-detection-patterns.md:220 — defined here

## Structure
# Secret Detection Patterns — .agents/security/secret-detection-patterns.md:1
## Purpose — .agents/security/secret-detection-patterns.md:3
## Detection Categories — .agents/security/secret-detection-patterns.md:7
### 1. API Keys and Tokens — .agents/security/secret-detection-patterns.md:9
#### Generic API Key Patterns — .agents/security/secret-detection-patterns.md:11
#### Cloud Provider Keys — .agents/security/secret-detection-patterns.md:19
### 2. Authentication Credentials — .agents/security/secret-detection-patterns.md:46
#### Passwords — .agents/security/secret-detection-patterns.md:48
#### Private Keys — .agents/security/secret-detection-patterns.md:60
#### SSH Keys — .agents/security/secret-detection-patterns.md:71
### 3. Tokens and Sessions — .agents/security/secret-detection-patterns.md:78
#### JWT Tokens — .agents/security/secret-detection-patterns.md:80
#### Bearer Tokens — .agents/security/secret-detection-patterns.md:87
#### OAuth — .agents/security/secret-detection-patterns.md:94
### 4. Database Credentials — .agents/security/secret-detection-patterns.md:101
#### Connection Strings — .agents/security/secret-detection-patterns.md:103
### 5. Encryption Keys — .agents/security/secret-detection-patterns.md:121
### 6. Environment Variables (Leaks) — .agents/security/secret-detection-patterns.md:130
## High-Risk Files — .agents/security/secret-detection-patterns.md:139
### Always Scan These Patterns — .agents/security/secret-detection-patterns.md:141
### Never Commit These — .agents/security/secret-detection-patterns.md:158
## Detection Workflow — .agents/security/secret-detection-patterns.md:169
### Step 1: Identify Candidate Files — .agents/security/secret-detection-patterns.md:171
### Step 2: Apply Pattern Matching — .agents/security/secret-detection-patterns.md:179
### Step 3: Validate Findings — .agents/security/secret-detection-patterns.md:186
### Step 4: Report and Remediate — .agents/security/secret-detection-patterns.md:195
## False Positive Indicators — .agents/security/secret-detection-patterns.md:205
## Remediation Patterns — .agents/security/secret-detection-patterns.md:220
### Instead of Hardcoding — .agents/security/secret-detection-patterns.md:222
### Commit Prevention — .agents/security/secret-detection-patterns.md:238
## Related Documents — .agents/security/secret-detection-patterns.md:255

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides concrete regex patterns for multi-cloud and service credentials including AWS access keys (`AKIA[0-9A-Z]{16}`), Azure storage keys, GCP service accounts, Stripe, SendGrid, and Twilio. Features a structured 4-step detection workflow and an explicit list of false positive indicators (`your-api-key-here`, `<API_KEY>`, test fixtures).

## Context cost
6363 bytes, approximately 1590 tokens.
