#!/usr/bin/env bash
# A brain repo with one idea in define, written by an earlier session: a small notes CLI, the
# idea file and the one decision its map links. No research record and no handoff note. The
# map's frontier holds three research rows (02, 03, 04), which the repo's own code answers, and
# one interview row (05). Rows 06 and 07 wait on research rows. setup-brain's workspace.md,
# with max_parallel 8, comes from the plugin, found from this script.
set -euo pipefail
git init -q .
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
mkdir -p docs/agents docs/ideas docs/decisions src
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md
printf '# Notes\n\nA command-line notes app.\n' > README.md
printf '{\n  "name": "notes-cli",\n  "private": true,\n  "type": "module"\n}\n' > package.json

cat > src/store.ts <<'BRAIN_SRC'
// The note store: one JSON file per note in the notes folder.
export type Note = {
  id: string;
  title: string;
  body: string;
  created: string; // ISO date, set once when the note is added
  updated: string; // ISO date, set on every save
  links: string[]; // the ids of the notes this note links to
};

export async function load(folder: string, id: string): Promise<Note> {
  return (await Bun.file(`${folder}/${id}.json`).json()) as Note;
}

export async function save(folder: string, note: Note): Promise<void> {
  await Bun.write(`${folder}/${note.id}.json`, JSON.stringify(note, null, 2));
}
BRAIN_SRC

cat > src/cli.ts <<'BRAIN_SRC'
// notes show <id>          prints one note as plain text: its title, a blank line, its body
// notes show <id> --json   prints one note as JSON, every field of the store
import { load } from "./store";

const [command, id, flag] = process.argv.slice(2);
if (command === "show" && id !== undefined) {
  const note = await load(`${process.env.HOME}/.notes`, id);
  console.log(flag === "--json" ? JSON.stringify(note) : `${note.title}\n\n${note.body}`);
}
BRAIN_SRC

cat > docs/ideas/IDEA-001-notes-export.md <<'BRAIN_IDEA'
---
id: IDEA-001
status: define
---
# IDEA-001: Export notes to other apps

## Intent
- Outcome: a user moves their notes out of the notes CLI and opens them in a wiki app.
- User: people who keep notes in the CLI and also work in a wiki app that reads Markdown files.
- Why now: export is the most requested feature in the last user survey.
- Success: a user's whole notes folder opens in a wiki app, and no note is lost.
- Constraint: the export runs offline and adds no dependency.
- Out of scope: importing notes from other apps.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the export command: what it exports, in which format, and what each exported note keeps.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which apps must the export reach at launch? | interview | resolved | — | DEC-001 |
| 02 | Does the note store keep each note's creation and edit dates? | research | open | 01 | — |
| 03 | Which output formats can the CLI already write? | research | open | 01 | — |
| 04 | How does the note store record links between notes? | research | open | 01 | — |
| 05 | Export every note at once, or one note at a time? | interview | open | 01 | — |
| 06 | Which file format does the export write? | interview | open | 03, 05 | — |
| 07 | Do exported notes keep their dates and their links? | interview | open | 02, 04, 06 | — |

## Not yet specified
- Where the exported files go, once the file format is known.

## Out of scope
- Importing notes from other apps.
BRAIN_IDEA

cat > docs/decisions/DEC-001-wiki-apps-first.md <<'BRAIN_DEC'
---
id: DEC-001
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-001#01
decided: 2026-10-26 by Sam
---
# DEC-001: Export to wiki apps that read Markdown files at launch

Most users who asked for export keep a wiki in Markdown files, so launch reaches those apps. Office documents wait for a later release.
BRAIN_DEC
