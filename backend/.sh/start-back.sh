#!/bin/bash

set -e

npx prisma migrate dev --name init --preview-feature
pnpm run build
pnpm run start
