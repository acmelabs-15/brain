---
id: RES-102
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-016#33
date: 2026-11-21
---
# RES-102: How tools handle a link to an item that does not exist yet

## Question
How do file-based knowledge and work tools, Basic Memory first, handle a link to an item that does not exist yet: the name the link uses, how it resolves, what checks it, and what goes wrong?

Needed by IDEA-016#36 and IDEA-016#34. Facts only: no design and no recommendation for Brain.

## Answer

Summary:

- Peter's statement is correct. Basic Memory accepts a relation to a note that does not exist yet.
- Its docs call this a "forward reference". The relation resolves when the target note is created.
- Correction 1: the relation is a line in the note body (`- blocks [[Target]]`), not a frontmatter field.
- Correction 2: the link names the target by free text. No ID is reserved ahead.
- The text is tried as permalink, then title, then file path. The match must be exact.
- Until then the tool stores the written text and an empty target. Nothing rejects it.
- A typo and a real future note look the same. The only signal is a count of unresolved relations.
- Two notes with one title stop resolution. The relation stays unresolved without a message.
- The findings list seven Basic Memory bugs in this area from 2026 and two older ones. All are fixed or closed.
- The note tools split in two groups. Obsidian, Foam and Basic Memory keep a link with no target. Logseq and org-roam create the target at once.
- The work trackers need an existing item. Jira and Taskwarrior refuse an ID with no item. GitHub Issues and Linear need the ID of the other issue; their response to a missing one is not tested.
- Beads is the exception. It stores a dependency on a named capability and resolves it at query time.
- Four ways to name a future item are in use: a name, a path, a reserved ID and a stub item. Each has a known cost; see the list below.

| Tool | Link to a missing item | Name the link uses | Resolves when | State while unresolved | How a user finds it |
|---|---|---|---|---|---|
| Basic Memory | Yes ("forward reference") | Free text: permalink, title or path | The target note is written or indexed | Row with empty `to_id`; text kept in `to_name` | Count in `bm project info`; no list command found |
| Obsidian | Yes | File name, or path and file name | When the file exists (inferred; the help does not state the moment) | Unresolved link | `unresolved` CLI command; graph filter "Existing files only" |
| Foam | Yes ("placeholder") | File name, or a unique path suffix | When the file exists (inferred) | Placeholder link | Placeholders panel; graph; warning for an ambiguous name |
| Dendron | Yes | Note name | When the note exists (inferred) | Broken link | Doctor: `findBrokenLinks`, `createMissingLinkedNotes` |
| Logseq | No: it creates the page | Page name | At once | An empty page | Not established |
| org-roam | `id:` link: no, it creates the node. `roam:Title` link: yes | UUID (`id:`), or title (`roam:`) | On save, `roam:` becomes `id:` when one node has the title | `roam:` link text | Not established |
| Zettlr | Yes | File name or file ID | The user follows the link; Zettlr can create the file | Not established | Not established |
| Jira | No | Issue ID or key | Not applicable | The request fails with 404 | Not applicable |
| GitHub Issues | No | Issue number, URL or ID | Not applicable | The API lists 404; the exact case is not tested | Not applicable |
| Linear | Not established; the input needs a target issue ID | Issue UUID or key | Not applicable | Not established | Not applicable |
| Taskwarrior | No for a task number | Task number or UUID | Not applicable | Error "not found" | Not applicable |
| Beads | Local ID: no. Other-project ID: yes, with a warning. Capability: yes | Issue ID, or `external:<project>:<capability>` | At query time, when an issue with the label `provides:<capability>` is closed | Stored "as-is"; the issue stays blocked | Warning on `bd dep add`; `bd doctor` |

Basic Memory in detail:

- Syntax: `- relation_type [[Target]]` in the note body. The docs give `blocks` as an example type.
- Key: the text in the brackets. A permalink is the stable key; it does not change on a move or a rename by default.
- Resolution: each note write starts a pass. The pass fills the target on each unresolved relation whose text now matches one note exactly.
- Rename and move: a link by permalink keeps its target. Basic Memory does not rewrite link text in other notes.
- Delete: the relation goes back to unresolved and keeps its text. A new note with that name links it again.
- Two matches: the forward-reference pass refuses to choose. The interactive resolver chooses the nearest note by folder.
- Typo: no error and no warning. The relation stays unresolved.
- UNVERIFIED: a link by title after the target's title changes. The code suggests that the link still resolves through the unchanged permalink, when the permalink came from the old title. No doc states this and it was not tested.

The four ways to name a future item, each with one real example and its cost:

1. A name or title, resolved later. Example: Basic Memory `[[Future Note]]`. Cost: a typo never resolves, two items with one name block or misdirect the link, and a loose match can select the wrong item (Basic Memory #1148, #1626).
2. A slug or path. Example: Rust RFCs start as `text/0000-my-feature.md` and get the number after the pull request exists. Cost: a rename step, and each link must change when the file moves, unless the tool rewrites links (Foam and Obsidian do).
3. An ID reserved ahead. Example: a DataCite draft record reserves an identifier before the item is public. Cost: a draft "can be deleted", so a reserved ID can point at nothing. Linear and Beads let the client set the ID at creation.
4. A stub item created at once. Example: Logseq creates the page when the link is typed. Cost: empty items collect (Logseq #3913), and a later write can collide with the stub (Basic Memory #93).

One more form is in use. Beads names a capability, not an item: `external:<project>:<capability>`. An item later declares, with a label, that it supplies the capability. org-roam joins form 1 and form 3: a `roam:Title` link becomes an `id:` link when the node exists.

What goes wrong:

- A link never resolves. Causes: a typo, an item that got another name, or two items with one name. Basic Memory shows only a count. Obsidian, Foam and Dendron list each unresolved link.
- A link resolves to the wrong item. Causes: a shared name with a silent tie-break, or a loose match. Foam warns on an ambiguous name. Basic Memory now fails with an error in its edit and move tools.
- Text that is not a link becomes an unresolved link. Foam reads `[[t]]` in a math formula as a placeholder (#1317).
- Stub items collect. A Logseq user reports empty pages in search results.

Limits:

- No tool was installed or run. All behavior comes from docs, source and issue text.
- Capability check at the start and at each stage: brain:source-driven-development loaded; Firecrawl search answered; Firecrawl scrape answered. `brain sdd-cache` is not a command in CLI 0.13.0, so no etag is recorded.
- The org-roam facts come from the manual's source file in the repo, not from the HTML manual.
- "Not established" marks behavior with no doc statement that was not tested.

## Findings

Basic Memory source is read at commit `7a1ff5ff8e454bd2e7f3c392bf0a08166eed7a42` (main, 2026-11-21). The repo paths below are relative to https://github.com/basicmachines-co/basic-memory/blob/7a1ff5ff8e454bd2e7f3c392bf0a08166eed7a42/ . The newest release in its changelog is v1.0.0 (2026-10-29).

### 1. Basic Memory

- Basic Memory supports a relation to an entity that does not exist yet. Its note format calls this a "Forward Reference": "Relations can link to entities that don't exist yet. Basic Memory resolves them when the target is created". Source: NOTE-FORMAT.md:161-163 in the repo, checked 2026-11-21.
- The public docs say the same in other words: "Relations can link to notes that don't exist yet. When those notes are created later, the connections are already in place. The reverse also holds: deleting a note leaves the links that pointed at it in place as unresolved references (since v0.24), so a broken-link check still finds them, and recreating the note reconnects them". Source: https://docs.basicmemory.com/concepts/knowledge-format#relations, checked 2026-11-21.
- The relation syntax is a list line with a relation type and a wikilink: `- relation_type [[Target]]`, for example `- depends_on [[User Database Schema]]`. A multi-word type takes quotes. A bare `- [[Target]]` and a wikilink in prose index as `links_to`. The docs name `blocks` as one possible relation type. Source: https://github.com/basicmachines-co/basic-memory#relations and https://docs.basicmemory.com/concepts/knowledge-format#relations, checked 2026-11-21.
- A relation lives in the note body, not in frontmatter. The frontmatter keys the docs list are `title`, `type`, `tags`, `permalink`, `created`, `modified` and a few managed keys. Source: https://docs.basicmemory.com/concepts/knowledge-format#frontmatter, checked 2026-11-21.
- The target is named by free text. The resolver tries the text as a permalink, then as a title, then as a file path: "Basic Memory tries exact identities first: permalink, title, and file path". Source: https://docs.basicmemory.com/concepts/knowledge-format#how-wikilinks-resolve, checked 2026-11-21.
- The full resolver order in code is: exact permalink, exact title, exact file path, file path with `.md` added, one unique file-path alias (no case, `_` equal to `-`), then full-text search as the "fuzzy last resort". Source: src/basic_memory/services/link_resolver.py:61-76 and :667-676, checked 2026-11-21.
- The forward-reference pass uses exact matches only; it has no fuzzy step. Its module is named "Portable exact link-text resolution for indexing follow-up passes", and the bulk resolver "Resolve strict relation targets". Source: src/basic_memory/indexing/link_resolution.py:1 and src/basic_memory/services/bulk_link_resolver.py:406-407, checked 2026-11-21.
- An unresolved relation is a stored row. `to_id` is empty and `to_name` holds the text the author wrote: "`to_name` preserves the author's target text even while the relation is unresolved". Source: docs/DOMAIN_MODEL.md:96-99, checked 2026-11-21.
- Resolution runs when a note is written or indexed. Each accepted write schedules a pass that fills `to_id` on other notes' unresolved relations that name the new note. A relation that still has no target "remain[s] unresolved until their target note exists". Source: src/basic_memory/indexing/relation_resolution.py:574-583 and the closing comment on https://github.com/basicmachines-co/basic-memory/issues/1015, checked 2026-11-21.
- The tool does not create a stub file for the missing target in the current code. An early version did: issue #93 (2025-04) describes "placeholders automatically generated by the sync process for unresolved [[WikiLinks]]" and write errors on those files ("file already exists", duplicate files). Whether a later release removed the stub files on purpose is not established. Source: https://github.com/basicmachines-co/basic-memory/issues/93, checked 2026-11-21.
- No check rejects an unresolved relation. The health check treats it as valid: "An unresolved relation target is valid and is not an orphan". Source: docs/DOCTOR.md:48, checked 2026-11-21.
- The user sees unresolved relations as a count. `bm project info` prints a row "Unresolved" from `total_unresolved_relations`. Source: src/basic_memory/cli/commands/project.py:1885 and src/basic_memory/schemas/project_info.py:20-21, checked 2026-11-21.
- The context tool prints the written target text for an unresolved relation. Source: src/basic_memory/mcp/tools/context.py:107-109, checked 2026-11-21.
- A CLI command that lists each unresolved relation by name is not established; a search for "unresolved" in the CLI commands found only the count. Source: src/basic_memory/cli/commands/ in the repo, checked 2026-11-21.
- Rename and move: the permalink stays the same by default, so a link by permalink keeps its target. "By default the permalink stays the same after a move, so links keep resolving. Projects with `update_permalinks_on_move` enabled rewrite it from the new path". Source: skills/memory-lifecycle/SKILL.md:111 and src/basic_memory/config_models.py:542-545 (default `False`), checked 2026-11-21.
- Basic Memory does not rewrite the link text in other notes: "Your Markdown is never rewritten". No doc statement says what happens to a link by title after the target's title changes; that is not established. Source: https://docs.basicmemory.com/concepts/knowledge-format#ordinary-markdown-links, checked 2026-11-21.
- Delete of the target returns the relation to the unresolved state, with `to_name` kept. A new note with that name links it again. Source: docs/DOMAIN_MODEL.md:110-115 and CHANGELOG.md:1114-1124 (#1344, v0.24.0), checked 2026-11-21.
- Two notes with one title: the forward-reference pass refuses to choose. The relation stays unresolved and no pass will resolve it: "`BulkLinkResolver.resolve_strict` deliberately refuses an ambiguous title". A permalink or a path still selects one note. Source: src/basic_memory/services/project_readiness.py:192-201 and src/basic_memory/services/bulk_link_resolver.py:165-223, checked 2026-11-21.
- The interactive resolver (read tools, not strict) chooses the note nearest to the source file's folder, then the shortest path, when several notes match one title. Source: src/basic_memory/services/link_resolver.py:444-478 and :779-842, checked 2026-11-21.
- A typo gives a forward reference to a note that never comes. The docs and code show no warning for it; it adds one to the "Unresolved" count. Source: docs/DOCTOR.md:48 and src/basic_memory/services/project_readiness.py:192-195 ("A link whose target does not exist. No pass creates the target"), checked 2026-11-21.
- Reported bug, fixed: unresolved forward references printed as `[[None]]` in `build_context`; the stored name was not used. Source: https://github.com/basicmachines-co/basic-memory/issues/955 (opened 2026-06-11, closed 2026-06-12), checked 2026-11-21.
- Reported bug, fixed: a forward reference did not resolve when its target was created through the write tool; only a full reindex resolved it. Source: https://github.com/basicmachines-co/basic-memory/issues/1015 (opened 2026-06-23, closed 2026-07-15), checked 2026-11-21.
- Reported bug, fixed: deleting a target deleted the relations that pointed at it, "So a query for unresolved relations returns nothing over a project that is full of them". Source: https://github.com/basicmachines-co/basic-memory/issues/1344 (closed 2026-08-28), checked 2026-11-21.
- Reported bug, fixed: a link by file name to a top-level note never resolved, and `[[alpha-note]]` did not find `alpha_note.md`. Source: https://github.com/basicmachines-co/basic-memory/issues/1253 (closed 2026-08-20), checked 2026-11-21.
- Reported bug, fixed: a title shared by two notes resolved to the wrong note in read, edit and move tools; the note with the shorter path won. The fix makes strict resolution fail with an ambiguity error. Source: https://github.com/basicmachines-co/basic-memory/issues/1148 (closed 2026-07-26) and CHANGELOG.md:1709-1712, checked 2026-11-21.
- Reported bug, fixed: fuzzy matching resolved a name to the wrong note. A title URL "resolved only through a fuzzy search that often picked a note linking to the target, and a miss returned whatever ranked first" (#1626). An older case: "Creating \"Node C\" would overwrite \"Node A.md\" due to fuzzy search incorrectly matching similar file paths" (v0.15.0). Source: CHANGELOG.md:964-970 and :3244-3247, checked 2026-11-21.
- Reported bug, fixed: after a forward reference resolved, the search embedding kept the unresolved text; "On one real vault, 317 of 1,323 relation chunks were in this state". Source: https://github.com/basicmachines-co/basic-memory/issues/1873 (closed 2026-10-28), checked 2026-11-21.

### 2. Other knowledge tools

- Obsidian accepts a link to a note that does not exist: "Since a note doesn't need to exist to link to it". The graph filter "Existing files only" hides such notes. Source: https://github.com/obsidianmd/obsidian-help/blob/master/en/Plugins/Graph%20view.md (line 43), checked 2026-11-21.
- Obsidian names the target by file name, with an optional folder path: `[[Three laws of motion]]` or `[[Projects/Three laws of motion]]`. "If the link points to a note that doesn't exist yet, Obsidian creates the note at that folder path instead of using your default location for new notes". Source: https://help.obsidian.md/links, checked 2026-11-21.
- Obsidian rewrites links on rename: "Obsidian can automatically update internal links in your vault when you rename a file." Whether this rewrites an unresolved link: not established. Source: https://help.obsidian.md/links, checked 2026-11-21.
- Obsidian lists unresolved links. The CLI command `unresolved` does "List unresolved links in vault", with options for a count and the source files. Source: https://github.com/obsidianmd/obsidian-help/blob/master/en/Extending%20Obsidian/Obsidian%20CLI.md (lines 594-603), checked 2026-11-21.
- Obsidian's plugin API holds the same data: `unresolvedLinks` "Contains all unresolved links. This object maps each source file to an object of unknown destinations with count". Source: https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts (lines 6507-6512), checked 2026-11-21.
- Obsidian with two files that match one link: the API returns "the best match for a linkpath". The rule that selects the best match: not established. Source: https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts (lines 6454-6466), checked 2026-11-21.
- Foam calls a link to a missing file a placeholder: "Wikilinks to non-existent files create placeholder links, styled differently to show they need files created. They're useful for planning your knowledge structure." The Placeholders panel and the graph show them. Source: https://github.com/foambubble/foam/blob/main/docs/user/features/wikilinks.md (lines 14-18), checked 2026-11-21.
- Foam names the target by file name or by a path suffix that is unique. On two matches: "Foam resolves it alphabetically (deterministic), and shows a warning diagnostic so you can use a more specific identifier". Source: same file (lines 55-68), checked 2026-11-21.
- Foam rewrites links on rename or move: "Foam automatically updates all wikilinks pointing to it". Source: same file (lines 49-51), checked 2026-11-21.
- Dendron has two doctor actions for missing targets. `createMissingLinkedNotes`: "Create notes that do not exist yet but has a wikilink to it." `findBrokenLinks`: "This simply lists all broken links in the scope." It also has `removeStubs`: "Remove all stub docs". Source: https://github.com/dendronhq/dendron-site/blob/master/vault/dendron.topic.doctor.md (lines 53-72), checked 2026-11-21.
- Logseq creates the target at once: "If you link to a page that doesn't exist yet, Logseq creates it for you." Whether it also writes a file for the empty page: not established. Source: https://github.com/logseq/docs/blob/master/pages/How%20to%20create%20pages%20in%20Logseq.md, checked 2026-11-21.
- org-roam links nodes by ID: "We link between nodes using Org's standard ID link (e.g. ~id:foo~)." Its insert command "creates a node if it does not exist, and inserts a link to the node at point". Source: https://github.com/org-roam/org-roam/blob/main/doc/org-roam.org (lines 301-305 and 349-351), checked 2026-11-21.
- org-roam also has a link by title, `roam:Title`. With `org-roam-link-auto-replace` (default on), the tool replaces `roam:` links to existing nodes with `id:` links before each save. To follow a `roam:` link with no node starts the creation of the node. Source: https://github.com/org-roam/org-roam/blob/main/org-roam-node.el (lines 155-156, 746-759 and 782-793), checked 2026-11-21.
- org-roam refuses a title that two nodes share, with the error `Multiple nodes exist with title or alias`. Source: https://github.com/org-roam/org-roam/blob/main/org-roam-node.el (lines 263-286), checked 2026-11-21.
- Zettlr can create the missing file on a click. The setting "Automatically create non-existing files in this folder when following internal links" names "a folder in which Zettlr will create files that do not yet exist when you click on a link to a non-existing file." A second setting, "Use the file ID as link target", selects the file ID as the link key. Source: https://github.com/Zettlr/zettlr-docs/blob/master/docs/en/reference/settings.md (lines 265-279), checked 2026-11-21.

### 3. Work trackers

- Jira: no. An issue link names each issue by "The ID of an issue" or "The key of an issue". The request returns 404 if "either of the link issues are not found". Source: https://dac-static.atlassian.com/cloud/jira/platform/swagger-v3.v3.json (path `/rest/api/3/issueLink`, post), also https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-post, checked 2026-11-21.
- GitHub Issues: no. The API call "Add a dependency an issue is blocked by" needs `issue_id`, "The id of the issue that blocks the current issue", and lists the response "404 Resource not found". The response for an ID with no issue: not tested. Source: https://docs.github.com/en/rest/issues/issue-dependencies, checked 2026-11-21.
- GitHub's web and CLI flows select existing issues: "search for and select all the issues", and each CLI flag "accepts a comma-separated list of issue numbers or URLs". Source: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies, checked 2026-11-21.
- Linear: the relation input needs two issues. `issueId` and `relatedIssueId` are required; `relatedIssueId` is the "UUID or identifier of the target issue". The response for a target that does not exist: not established. Source: https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql (lines 16547-16564), checked 2026-11-21.
- Linear lets the client set an issue's UUID at creation: "The identifier in UUID v4 format. If none is provided, the backend will generate one". Source: same file (lines 14796-14798), checked 2026-11-21.
- Taskwarrior: no for a task number. `depends:` takes "a comma-separated list of ID numbers, UUID numbers and ID ranges". A number with no task gives the error "Could not create a dependency on task {1} - not found". Source: https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/doc/man/task.1.in (lines 895-900) and https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/src/Task.cpp (lines 973-976), checked 2026-11-21.
- Taskwarrior stores a dependency by UUID from imported JSON with no lookup of the target. The result for a UUID on the command line that has no task: not established. Source: https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/src/Task.cpp (lines 601-631 and 991-1008), checked 2026-11-21.
Beads source is read at commit `78624109904655d7a4609f27d34eb0982cd8963f` (2026-11-20), cloned from https://github.com/steveyegge/beads . Its docs link to issues under `gastownhall/beads`. The Beads paths below are relative to that commit.

- Beads, a target ID with the local prefix that does not exist: error. "A same-prefix target that resolves nowhere is still an error". Source: cmd/bd/dep.go:211 and :235, checked 2026-11-21.
- Beads, a target ID with the prefix of another project: stored. "A bare ID whose prefix names another rig (`bd dep add bd-abc gt-123`) is stored even when bd cannot find it in this database or through routes. `bd dep add` then warns on stderr that the ID was not found". The command also "prints the `bd dep remove` command that deletes the edge if the ID was a typo". The code comment calls this the "add now, route later" shape. Source: docs/core-concepts/dependencies.md:182-187 and cmd/bd/dep.go:196-207, checked 2026-11-21.
- Beads, a capability reference: stored and resolved later. The form is `bd dep add <issue> external:<project>:<capability>`. "External references are stored as-is and resolved at query time using the external_projects config." "The capability is resolved when the external project has a closed issue with the provides:<capability> label". Source: docs/CLI_REFERENCE.md:2238-2241 and :8302-8305, checked 2026-11-21.
- Beads keeps such an issue blocked while the reference is open: "an unconfigured or unavailable project remains blocking". Source: docs/core-concepts/dependencies.md:176-180, checked 2026-11-21.
- Beads' health check reports a local dependency whose target is gone, and `--fix` removes it. It keeps an other-project edge that it cannot check. Source: docs/core-concepts/dependencies.md:192-196, checked 2026-11-21.
- Beads lets the caller set an issue ID at creation: `--id string  Explicit issue ID (e.g., 'bd-42' for partitioning)`. Source: docs/CLI_REFERENCE.md:548, checked 2026-11-21.

### 4. Ways to name an item before it exists

- Name resolved later: Basic Memory's onboarding guide says "`[[Future Note]]` is valid and resolves when the note is created — use this to sketch structure ahead of content". Source: skills/memory-onboarding/references/conventions.md:95 in the Basic Memory repo, checked 2026-11-21.
- Path: Basic Memory resolves a Markdown path link only to that exact file. "Basic Memory does not guess a title, add `.md`, apply filename aliases, or search another project when the target is missing"; "missing targets remain unresolved and can resolve when indexed later". Source: docs/MARKDOWN_RELATIONS.md:14-22 in the Basic Memory repo, checked 2026-11-21.
- Slug first, number later: Rust RFCs. "Copy `0000-template.md` to `text/0000-my-feature.md` (where "my-feature" is descriptive). Don't assign an RFC number yet; This is going to be the PR number and we'll rename the file accordingly if the RFC is accepted." After the pull request exists: "use the issue number of the PR to rename the file: update your `0000-` prefix to that number". Source: https://github.com/rust-lang/rfcs/blob/master/README.md (lines 106-118), checked 2026-11-21.
- ID reserved ahead: DataCite draft records. "Draft records are not yet registered within the global Handle System, which means the identifier can be deleted." "Drafts remain until the owner either deletes them or converts them to another state". Source: https://support.datacite.org/docs/doi-states#draft-records, checked 2026-11-21.
- Stub created at once: Logseq and org-roam's insert command create the target, and Dendron has a `removeStubs` action to delete stub notes. Source: the Logseq, org-roam and Dendron files cited in section 2, checked 2026-11-21.
- Stub cost, Basic Memory: placeholder files for unresolved links made `write_note` fail. "It frequently errors out with file already exists. It sometimes creates duplicate files in different locations. It rarely updates the placeholder correctly". Source: https://github.com/basicmachines-co/basic-memory/issues/93 (opened 2025-04-10, closed 2025-06-12), checked 2026-11-21.

### 5. What goes wrong

- Stub cost, Logseq: a user reports empty pages in search results. "These pages were probably accidentally created somehow and are both empty, but there is no way for me to see that easily from the search results". The issue is open. Source: https://github.com/logseq/logseq/issues/3913 (opened 2022-01-15), checked 2026-11-21.
- False unresolved link, Foam: a formula with `C[[t]]` "creates an entry `t` in the list of placeholders." The issue is open. Source: https://github.com/foambubble/foam/issues/1317 (opened 2024-01-08), checked 2026-11-21.
- A count is not a list. Basic Memory's readiness check leaves out a link whose target does not exist and a link whose title matches more than one note, because "no pass will ever wire it up". Source: src/basic_memory/services/project_readiness.py:192-201 in the Basic Memory repo, checked 2026-11-21.
- Wrong targets and links that never resolve in Basic Memory are reported in #1148, #1626, #1253, #1015 and #1344; section 1 holds each one. Source: https://github.com/basicmachines-co/basic-memory/issues and CHANGELOG.md in the repo, checked 2026-11-21.

## Follow-ups
None.

## Next action
None.
