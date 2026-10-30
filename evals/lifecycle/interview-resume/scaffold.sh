#!/usr/bin/env bash
# A brain repo with one idea in define, written by earlier sessions: the idea file and the
# records its map links, and nothing else. No handoff note and no conversation, so the new
# session has the idea file alone. The map's frontier is row 09 only; row 08, the first open
# row, waits on it. setup-brain's workspace.md comes from the plugin, found from this script.
set -euo pipefail
git init -q .
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
mkdir -p docs/agents docs/ideas docs/decisions docs/research
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md
printf '# Notes\n\nA notes app for phones and laptops.\n' > README.md

cat > docs/ideas/IDEA-001-sync-notes.md <<'BRAIN_IDEA'
---
id: IDEA-001
status: define
---
# IDEA-001: Sync notes across devices

## Intent
- Outcome: a note written on one device shows up on the user's other devices within a minute.
- User: people who write notes on a phone and read them on a laptop.
- Why now: sync is the most requested feature in the last two support surveys.
- Success: 95% of edits reach a second device within 60 seconds, and no edit is lost.
- Constraint: notes stay readable offline; the team runs no new server.
- Out of scope: sharing notes between users.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for sync: the devices it covers, the service it runs on, and how two edits to one note merge.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering. The user wants the cheapest service that meets the 60-second target.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which devices sync at launch: phones, laptops, or both? | interview | resolved | — | DEC-001 |
| 02 | Can the local note store emit a change feed? | research | resolved | — | RES-001 |
| 03 | Last write wins, or merge, for two edits to one note? | interview | superseded by 06 | 01 | — |
| 04 | Sync through a hosted service, or peer to peer? | ideate | resolved | 01, 02 | DEC-002 |
| 05 | Set up a test account on the sync service | task | resolved | 04 | RES-002 |
| 06 | How do two edits to one note merge? Pick one of two prototypes | prototype | resolved | 04, 05 | DEC-003 |
| 07 | What does the sync service cost per active user per month? | research | resolved | 02, 04 | RES-003 |
| 08 | Which plan of the sync service do we buy at launch? | interview | open | 07, 09 | — |
| 09 | Must notes be end-to-end encrypted at launch? | interview | open | — | — |
| 10 | How long may a device stay offline before a full resync? | interview | open | 06, 08 | — |

## Not yet specified
- What happens to a note deleted on one device while another device is offline, once the offline limit is known.

## Out of scope
- Sharing notes between users.
BRAIN_IDEA

cat > docs/decisions/DEC-001-phones-and-laptops.md <<'BRAIN_DEC'
---
id: DEC-001
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-001#01
decided: 2026-10-20 by Sam
---
# DEC-001: Sync phones and laptops at launch, tablets later

Most users read on a laptop what they wrote on a phone, so launch covers both. Tablets wait: they are 4% of active devices.
BRAIN_DEC

cat > docs/decisions/DEC-002-hosted-sync-service.md <<'BRAIN_DEC'
---
id: DEC-002
status: accepted
kind: architecture
adr-test:
  hard-to-reverse: true
  surprising: true
  real-trade-off: true
from: IDEA-001#04
evidence: [RES-001]
decided: 2026-10-24 by Sam
---
# DEC-002: Sync through a hosted service fed by the store's change feed

Notes sync through a hosted service that reads the local store's change feed (RES-001). Considered: peer-to-peer sync on the local network, rejected because two devices are rarely online at once; a sync server of our own, rejected because the team runs no new server.
BRAIN_DEC

cat > docs/decisions/DEC-003-merge-by-line.md <<'BRAIN_DEC'
---
id: DEC-003
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-001#06
evidence: [RES-002]
decided: 2026-10-27 by Sam
---
# DEC-003: Merge two edits to one note line by line

Sam picked prototype B: it merges two edits to one note line by line and keeps both versions of a line that both devices changed. Prototype A, last write wins for the whole note, lost an edit in the test on the test account (RES-002). Prototype branch: `proto/merge-by-line`.
BRAIN_DEC

cat > docs/research/RES-001-store-change-feed.md <<'BRAIN_RES'
---
id: RES-001
status: resolved
kind: research
from: IDEA-001#02
date: 2026-10-22
---
# RES-001: Can the local note store emit a change feed?

## Question
Can the local note store emit a change feed?

## Findings
- The note store is a SQLite file, opened in one place. Source: src/store/db.ts:8, checked 2026-10-22.
- SQLite's update hook reports each changed row with its table and row ID. Source: https://www.sqlite.org/c3ref/update_hook.html, checked 2026-10-22.

## Follow-ups
- What does the sync service cost per active user per month?
BRAIN_RES

cat > docs/research/RES-002-sync-test-account.md <<'BRAIN_RES'
---
id: RES-002
status: resolved
kind: task
from: IDEA-001#05
date: 2026-10-25
---
# RES-002: Set up a test account on the sync service

## Question
Set up a test account on the sync service, for the merge prototypes.

## Findings
- The test account exists, on the free plan, in the EU region. Source: https://sync.example.com/account, checked 2026-10-25.
- With both prototypes on the test account, prototype A lost one of two edits made offline to one note; prototype B kept both. Source: https://sync.example.com/account/logs, checked 2026-10-26.

## Follow-ups
BRAIN_RES

cat > docs/research/RES-003-sync-service-cost.md <<'BRAIN_RES'
---
id: RES-003
status: resolved
kind: research
from: IDEA-001#07
date: 2026-10-26
---
# RES-003: What does the sync service cost per active user per month?

## Question
What does the sync service cost per active user per month?

## Findings
- The Standard plan costs $0.40 per active user per month and delivers a change within 30 seconds. Source: https://sync.example.com/pricing, checked 2026-10-26.
- End-to-end encryption comes only with the Business plan, at $0.90 per active user per month. Source: https://sync.example.com/pricing#business, checked 2026-10-26.

## Follow-ups
- Which plan of the sync service do we buy at launch?
BRAIN_RES
