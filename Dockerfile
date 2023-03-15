# generates a tiny static nextjs build for production use

FROM node:16-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

# next will only use NEXT_PUBLIC env vars if they are available at build time
# they get inserted as part of the static build defeating the purpose
# of them being environment variables (lol, wtf nextjs!)
# (there are other hacky workarounds for this)
# below are for TESTNET!
ENV NEXT_PUBLIC_IS_LIVE true
ENV NEXT_PUBLIC_NAME_SERVICE_ADDR 1H3k4zttAjF7qfTqfmKZ4ZCdUL3pRdGnpG

RUN yarn --frozen-lockfile && \
    yarn build

FROM node:16-alpine AS runner

WORKDIR /app

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production
# this disables nextjs's built-in spyware to collect usage data
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]