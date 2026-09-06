---
package: rjm
path: docs/copilot-cli-setup.md
type: doc
bytes: 4801
unit: inv-rjm-191
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/copilot-cli-setup.md, sha256: 59024c233a64c24d142b282be6874ab91ab23cc063663ad1c4331c54973a9519}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/copilot-cli-setup.md

## Purpose — required, verbatim
> "This guide explains how to configure GitHub Copilot CLI authentication for use in GitHub Actions workflows." — docs/copilot-cli-setup.md:3-4

## Design intent — required
Provides operational guidance and authentication configuration steps for enabling GitHub Copilot CLI inside non-interactive CI/CD environments (GitHub Actions). Solves the silent failure mode where Copilot CLI exits with code 1 and no error output when using standard `GH_TOKEN` or `GITHUB_TOKEN` by detailing the setup of a dedicated fine-grained personal access token (PAT) with explicit "Copilot Requests: Read" permission, environment variable precedence rules, diagnostic inspection fields, and security scoping practices. Without this documentation, automated CI workflows attempting to run Copilot CLI agents or AI reviews would fail silently without actionable diagnostics.

## Phase — required
rjm:cross-phase

## Inputs — required
- GitHub account with Copilot subscription ("GitHub account with **Copilot subscription** (Individual, Business, or Enterprise)" — docs/copilot-cli-setup.md:8)
- Repository admin access to configure secrets ("Repository admin access to configure secrets" — docs/copilot-cli-setup.md:9)
- Fine-grained Personal Access Token with "Copilot Requests" permission ("Fine-Grained PAT with Copilot Requests Permission" — docs/copilot-cli-setup.md:21)
- Environment variables `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, and `GITHUB_TOKEN` ("The Copilot CLI checks environment variables in this order:" — docs/copilot-cli-setup.md:67)

## Outputs — required
- Repository secret `COPILOT_GITHUB_TOKEN` configured in GitHub repository settings ("Name: `COPILOT_GITHUB_TOKEN`" — docs/copilot-cli-setup.md:40)
- GitHub Actions workflow environment configuration and action step inputs ("bot-pat: ${{ secrets.BOT_PAT }}" — docs/copilot-cli-setup.md:61; "copilot-token: ${{ secrets.COPILOT_GITHUB_TOKEN }}" — docs/copilot-cli-setup.md:62)
- Diagnostics outputs from AI review action: `copilot-health`, `copilot-diagnostic`, `auth-status` ("The AI review action outputs detailed diagnostics:" — docs/copilot-cli-setup.md:113)

## Invokes — required
- file ./.github/actions/ai-review — docs/copilot-cli-setup.md:59

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Copilot subscription` — docs/copilot-cli-setup.md:8 — used here
- `GH_TOKEN` — docs/copilot-cli-setup.md:16 — used here
- `Copilot Requests` — docs/copilot-cli-setup.md:17 — used here
- `Fine-grained token` — docs/copilot-cli-setup.md:26 — used here
- `COPILOT_GITHUB_TOKEN` — docs/copilot-cli-setup.md:28 — used here
- `GITHUB_TOKEN` — docs/copilot-cli-setup.md:73 — used here
- `DIAGNOSTIC SUMMARY` — docs/copilot-cli-setup.md:84 — used here
- `FAILURE ANALYSIS` — docs/copilot-cli-setup.md:88 — used here
- `copilot-health` — docs/copilot-cli-setup.md:115 — used here
- `copilot-diagnostic` — docs/copilot-cli-setup.md:116 — used here
- `auth-status` — docs/copilot-cli-setup.md:117 — used here
- `BOT_PAT` — docs/copilot-cli-setup.md:123 — used here

## Structure
- ## Prerequisites — docs/copilot-cli-setup.md:6
- ## The Problem — docs/copilot-cli-setup.md:11
- ## Solution: Fine-Grained PAT with Copilot Requests Permission — docs/copilot-cli-setup.md:21
- ### Step 1: Create a Fine-Grained Personal Access Token — docs/copilot-cli-setup.md:23
- ### Step 2: Add Repository Secret — docs/copilot-cli-setup.md:36
- ### Step 3: Verify Workflow Configuration — docs/copilot-cli-setup.md:44
- ## Token Precedence — docs/copilot-cli-setup.md:65
- ## Troubleshooting — docs/copilot-cli-setup.md:77
- ### Symptom: CLI exits with code 1, no output — docs/copilot-cli-setup.md:79
- ### Symptom: Authentication works but review fails — docs/copilot-cli-setup.md:103
- ### Viewing Diagnostics — docs/copilot-cli-setup.md:111
- ## Security Considerations — docs/copilot-cli-setup.md:119
- ## References — docs/copilot-cli-setup.md:128

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan: File is not referenced or linked by any other documentation or workflow file in the repository despite documenting core GitHub Actions Copilot CLI setup.

## Observations
- Documents undocumented CLI failure mode where Copilot CLI silently exits code 1 without error output if `Copilot Requests` scope is missing.
- Outlines token precedence table (COPILOT_GITHUB_TOKEN > GH_TOKEN > GITHUB_TOKEN) and token separation principle (BOT_PAT for repo writes vs COPILOT_GITHUB_TOKEN for LLM requests).

## Context cost
4,801 bytes. Approximately 1,200 tokens.
