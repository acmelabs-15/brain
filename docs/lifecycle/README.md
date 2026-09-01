# The lifecycle map — source of the two interactive artifacts

> 2026-09-01 · SES-014's second stream · the still is `../brain-lifecycle.svg`; the outline page
> Peter shaped is the content source (PLAN-005 § Open questions names the three pages).
> Where this finally lives is Part 8's closure call; this directory is the durable home meanwhile.

Two artifacts, one source:

| Artifact | URL | Built by |
| --- | --- | --- |
| **Brain Lifecycle** — the design canvas (Claude Design editor around the artboard) | https://claude.ai/code/artifact/f5e4791d-df1e-425c-a020-80b6dfacf371 | the `design` skill's `seed-canvas.mjs` over `Main.dc.html` + `canvas.json` |
| **Brain Lifecycle Map** — the full-page artifact, no editor chrome | https://claude.ai/code/artifact/339710f7-5d62-40a4-aac5-d2c9c3ec2f76 | `build-page.mjs` over `Main.dc.html` |

Both are private to Peter's account (claude.ai/code/artifacts lists them).

## Files

- `Main.dc.html` — the whole thing: the template (inside `<x-dc>`, the Design Components format:
  `{{holes}}`, `<sc-for>`, `<sc-if>`, `onClick="{{fn}}"`) and the logic class (`<script data-dc-script>`,
  plain JS, `class Component extends DCLogic`). Views, nodes, edges, the anatomy panel text (`D`),
  the switch model, the layout rules — all here. Edit this file only.
- `build-page.mjs` — extracts the template and the logic class and wraps them in a ~70-line renderer
  over Preact (cdnjs, pinned 10.19.3) → `lifecycle-map.html`. Run from this directory.
- `canvas.json` — the canvas layout: one artboard, 1440×900, `is_interactive`, launch focused.

## Rebuild, seed, publish

```bash
cd docs/lifecycle
node build-page.mjs                                   # → lifecycle-map.html
B=<the design skill's base directory>                 # printed when /design loads
node "$B/seed-canvas.mjs" --template "$B/payload.template.html" --out brain-lifecycle.html \
  --title "Brain Lifecycle" --artboard Main.dc.html --canvas canvas.json
node "$B/seed-canvas.mjs" --check brain-lifecycle.html
```

Publish with the Artifact tool, same file paths to keep the URLs: the canvas with
`contract: "0.1.31"` (every time) and, on a first publish only, `capabilities: {self: {}, downloads: {}}`;
the page as a plain publish. Favicons: canvas 🧠, page 🗺️. Keep the built `.html` files out of git.

## The model, in one screen

- A **view** builds `{ nodes, edges, subtitle }`: `overview`, `define`, `plan` (two doors via
  `planMode`), `build` (`buildMode`: one / auto / concurrent), `review`, `release`, `record`.
- The stage cards share one width, `CW` (284 px — the widest three-across beside the panel, and the
  narrowest that holds `docs/plan/PLAN-NNN.md` in a chip: a chip's text room is the card width less 140 px
  at 6 px a character), three columns `COLS` and a `GAP` of 36. Define keeps its 315s (two across). Build
  runs three rows: the forward path, the suite → commit → tick row right-to-left, the part close and
  converge with the suite's branch (doubt / diagnosing-bugs) under the suite; the return loops ride the
  corridors between rows and the strip right of the third column. Entries (Idea, the document, the brief,
  the commit) keep their subtitles; every other card carries INPUT / OUTPUT rows.
- `N(id, kind, x, y, w, h, title, sub, extra)` — kinds `entry · skill · cmd · file · note · art · jump ·
  group · row`. Card heights come from the header: measured after paint (`state.hh`, `offsetHeight`,
  scheduled from `renderVals` by a timer — never from lifecycle overrides, the runtime owns those),
  estimated for the first paint. `cy` places a card on a row's centre line; `io: [['input', …], ['output', …]]`
  renders the INPUT / OUTPUT rows; `toggles: [[id, label, detailsKey]]` and `choice` render the switches;
  `when: (t) => …` shows a node only in that switch state.
- `E(from, to, points, opts)` — two points → orthogonal with rounded bends at the mid-gap; more →
  the waypoints, snapped to the anchors; `loop: true` marks a return edge (excluded from the
  upstream walk, lit when it leaves the selected card); `label`, `at`, `color`, `dash`, `sw`.
- Selection: the card, every edge into it, its whole upstream path and those cards — full blue;
  forward edges out of it stay grey. Switch rows are their own layer over the cards (handlers inside
  nested loops never fire in the canvas runtime).
- Prose capitalised at render (`cap`), identifiers and paths left alone; fonts `"Google Sans", sans-serif`
  and Geist Mono; the switch on-colour `#39af46`; no `§` anywhere.

## Verified how

Chrome via the DevTools MCP, viewport emulated at 1600×1060×1 (a scaled artboard makes the tool's
clicks drift). Page state by script: `document.getElementById('stage').__k.__k[0].__c.state`; clicks by
finding text nodes and calling `.click()`. The DevTools bridge replays stale clicks before a screenshot —
trust the scripted state over the picture when they disagree.

## Open threads

- The concurrent Build view keeps its subtitles: its four columns cannot take 284-wide cards, and the mode
  is pending (PLAN-005 Part 7 Task 2). Rows there wait on the landing call.
- The canvas's editor is a preview: pinned runtime, read-only where saving isn't granted.
