// app/jobs/layout.tsx
import RootLayout from '@/app/layout'

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      <div className="job-layout">
        {children}
      </div>
    </RootLayout>
  );
}