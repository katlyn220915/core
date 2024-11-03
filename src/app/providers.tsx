'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { AuthProvider } from '@/provider/authProvider';

import type * as React from 'react'

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
        <AppRouterCacheProvider>
            <AuthProvider >
               {children}
            </AuthProvider>
        </AppRouterCacheProvider>
    </QueryClientProvider>
  )
}