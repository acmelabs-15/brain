# Install brain in Gemini CLI

Read [the prerequisites](prerequisites.md) first. Command help and the official
extension contract are checked on 2026-11-05; the installed CLI is 0.58.0.

## Install

```bash
gemini extensions install https://github.com/acmelabs-15/brain
```

From a local clone:

```bash
gemini extensions install /path/to/brain
```

Restart Gemini CLI before verifying the installation. Management changes,
including command changes, take effect only after restart.
[Official extension contract](https://geminicli.com/docs/extensions/reference/#manage-extensions).

The extension reads `gemini-extension.json` at the repository root, the `skills/`
folder, and `commands/*.toml`. Its context file, `GEMINI.md`, holds the plain-talk text and
the brain protocol. Gemini loads it as the extension's context file.

In each consumer repository, ask Gemini to use the setup-brain skill. Repeat
setup after Brain updates. It prepares workspace, domain and capabilities guidance;
normal Gemini setup leaves consumer root instructions and Codex configuration alone.

## Verify

`/skills list` shows the brain skills, including `domain-modeling`. `/memory show`
includes the brain context file. Then ask using-brain to resume a known effort and
compare the result with its saved rows and records. Catalog and memory listings
alone do not verify the selected workflow or complete state restoration.

## Update

```bash
gemini extensions update brain
```

Restart Gemini CLI, then repeat setup and verification. Installation creates a
copy; editing a separate source clone does not refresh that copy by itself.
[Official update contract](https://geminicli.com/docs/extensions/reference/#update-an-extension).

## Remove

```bash
gemini extensions uninstall brain
```

Restart Gemini CLI and confirm the extension is absent. Consumer workspace records
remain in the repository.

## Last run

Historical result: 2026-09-19, Gemini CLI 0.58.0, from the public repository: extension `brain` 0.3.0, source type
github-release, tag `v0.3.0`. A print-mode session in an empty trusted directory, asked for the
first heading of the brain context file, answered `# brain: talk plain`.

The 2026-11-05 refresh checks source, documentation and local CLI help. A new
install/update and native resume of the revised extension remain unverified.
