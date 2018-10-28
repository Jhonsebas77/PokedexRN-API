import * as production from './production.json'
import * as staging from './staging.json'
import * as development from './development.json'
import * as test from './test.json'
export const PRODUCTION = (production as any).server.env
export const STAGING = (staging as any).server.env
export const DEVELOPMENT = (development as any).server.env
export const TEST = (test as any).server.env