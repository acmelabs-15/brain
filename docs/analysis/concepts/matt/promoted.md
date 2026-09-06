---
package: matt
name: promoted
slug: promoted
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# promoted

## Definition — verbatim
> "Skills live in bucket folders under `skills/`: `engineering/` and `productivity/` are **promoted** (shipped); `misc/`, `personal/`, `in-progress/`, and `deprecated/` are **not**." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:9
> "Every skill in `engineering/` or `productivity/` (the **promoted** buckets) must have a reference in the top-level `README.md` and an entry in `.claude-plugin/plugin.json`'s `skills` array (the Claude Code plugin ships exactly the promoted set)." — CLAUDE.md:9

## Also called — verbatim
> "Only these two buckets are promoted; the rest (`misc/`, `in-progress/`, `deprecated/`) ship no docs page." — .agents/writing-docs.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 9 | defined here | Defines the promoted status boundary between shipped and non-shipped bucket folders |
| .agents/writing-docs.md | 3 | used here | States documentation rule that only promoted bucket skills receive human-facing docs pages |
| CLAUDE.md | 9 | defined here | Establishes the rule that promoted skills must be listed in plugin.json and README.md |

## Consumes
Candidate skills evaluated for quality, stability, and production readiness.

## Produces
Inclusion in `.claude-plugin/plugin.json`, root `README.md`, and human-facing docs under `docs/<bucket>/`.

## When applied
When deciding whether a skill is included in official plugin releases and documentation.

## Sub-concepts
none

## Part of
bucket-folders

## Implementation status
clean

## Design notes
The gating standard that determines whether a skill is officially shipped in the Claude Code plugin and documented on `aihero.dev`. Restricted strictly to `skills/engineering/` and `skills/productivity/`, promotion requires full test coverage, documentation syncing, and explicit manifest registration, separating production skills from experimental or deprecated assets.
