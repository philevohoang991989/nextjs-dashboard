'use client'

import { Session } from 'next-auth';
import { SessionProvider} from 'next-auth/react'
import { ReactNode} from 'react'

interface ProvidersProps {
  session?: Session | null;
  children: ReactNode;
}

function Providers({ children,session  }: ProvidersProps) {
  

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}

export default Providers;