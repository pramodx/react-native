import { api } from '@/Services/api'
import fetchJobs from './fetchJobs'

// Injecting Redux-Toolkit query into our api
export const jobAPI = api.injectEndpoints({
  endpoints: build => ({
    getJobs: fetchJobs(build),
  }),
  overrideExisting: false,
})

export const { useLazyGetJobsQuery } = jobAPI
