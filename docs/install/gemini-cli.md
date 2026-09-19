# Install brain in Gemini CLI

Checked against Gemini CLI 0.58.0.

## Install

```bash
gemini extensions install https://github.com/acmelabs-15/brain
```

From a local clone:

```bash
gemini extensions install /path/to/brain
```

The extension reads `gemini-extension.json` at the repository root, the `skills/`
folder, and `commands/*.toml`. Its context file, `GEMINI.md`, is sent with every prompt.

## Verify

`/skills list` shows the brain skills, including `domain-modeling`. `/memory show`
includes the brain context file.

## Update

```bash
gemini extensions update brain
```

## Remove

```bash
gemini extensions uninstall brain
```

## Last run

Not yet run from the public repository.
