import Sidebar from '@/components/Dashboard/Sidebar';
import Links from '@/utils/static.json';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-row flex-nowrap w-full h-full'>
      <Sidebar navLinks={Links.navLinks} />
      <div className='flex flex-col flex-nowrap w-full h-full'>
        <main className='flex flex-col flex-nowrap w-full h-full p-4'>{children}</main>
      </div>
    </div>
  );
}