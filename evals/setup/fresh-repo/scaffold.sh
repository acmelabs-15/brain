#!/usr/bin/env bash
set -euo pipefail
git init -q .
printf '# Probe\n\nA small repo.\n' > CLAUDE.md
printf '{ "name": "probe", "version": "0.0.1" }\n' > package.json
