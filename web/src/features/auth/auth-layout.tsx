/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeSwitch } from '@/components/theme-switch'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useSystemConfig } from '@/hooks/use-system-config'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { systemName, logo, loading } = useSystemConfig()

  return (
    <div className='relative grid min-h-svh max-w-none overflow-hidden'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10'
      >
        <div className='absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-orange-400/25 blur-3xl dark:bg-orange-500/15' />
        <div className='absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-500/15' />
        <div className='absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/20 blur-3xl dark:bg-indigo-500/10' />
        <div className='absolute inset-0 bg-[radial-gradient(circle,var(--color-foreground)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]' />
      </div>

      <div className='absolute top-4 right-4 z-10 flex items-center gap-1 sm:top-8 sm:right-8'>
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>

      <Link
        to='/'
        className='absolute top-4 left-4 z-10 flex items-center gap-2 transition-opacity hover:opacity-80 sm:top-8 sm:left-8'
      >
        <div className='relative h-8 w-8'>
          {loading ? (
            <Skeleton className='absolute inset-0 rounded-full' />
          ) : (
            <img
              src={logo}
              alt={t('Logo')}
              className='h-8 w-8 rounded-full object-cover'
            />
          )}
        </div>
        {loading ? (
          <Skeleton className='h-6 w-24' />
        ) : (
          <h1 className='text-xl font-medium'>{systemName}</h1>
        )}
      </Link>
      <div className='container flex items-center px-4 pt-20 pb-10 sm:py-20'>
        <div className='relative mx-auto w-full sm:w-[480px]'>
          <div
            aria-hidden='true'
            className='mb-[-1.25rem] flex items-end justify-center gap-6 lg:hidden'
          >
            <img
              src='/claude.webp'
              alt=''
              draggable={false}
              className='auth-mascot-float h-24 w-auto select-none'
            />
            <img
              src='/gpt.webp'
              alt=''
              draggable={false}
              className='auth-mascot-float auth-mascot-float-delay h-24 w-auto select-none'
            />
          </div>

          <div
            aria-hidden='true'
            className='landing-animate-fade-right pointer-events-none absolute right-full bottom-6 -mr-10 hidden w-56 lg:block xl:w-64'
          >
            <img
              src='/claude.webp'
              alt=''
              draggable={false}
              className='auth-mascot-float w-full drop-shadow-[0_12px_24px_rgba(234,88,12,0.25)] select-none'
            />
          </div>

          <div
            aria-hidden='true'
            className='landing-animate-fade-left pointer-events-none absolute bottom-6 left-full -ml-10 hidden w-56 lg:block xl:w-64'
          >
            <img
              src='/gpt.webp'
              alt=''
              draggable={false}
              className='auth-mascot-float auth-mascot-float-delay w-full drop-shadow-[0_12px_24px_rgba(139,92,246,0.25)] select-none'
            />
          </div>

          <Card
            data-card-hover='false'
            className='landing-animate-fade-up bg-background/75 dark:bg-background/60 relative z-10 gap-0 rounded-2xl py-0 shadow-2xl shadow-orange-500/5 backdrop-blur-xl dark:shadow-black/40'
          >
            <div
              aria-hidden='true'
              className='h-1 w-full bg-gradient-to-r from-orange-400 via-amber-300 to-violet-400'
            />
            <CardContent className='auth-surface flex flex-col justify-center space-y-2 p-6 sm:p-8'>
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
