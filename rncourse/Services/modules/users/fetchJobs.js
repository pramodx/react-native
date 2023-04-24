import { Config } from '@/Config'

export default build =>
  build.query({
    query: () => Config.JOBS,
  })
