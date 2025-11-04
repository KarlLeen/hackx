'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const logoContainerSvg = "/Logo Container.svg";
const sidebarIcon = "/figma-exported/sidebaricon.svg";
const imgLine1 = "/Vector.svg";
const imgLine6 = "/Vector.svg";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const isHostPage = pathname?.startsWith('/host');
  const isCoursesPage = pathname?.startsWith('/courses');
  const isDashboardPage = pathname?.startsWith('/dashboard') && !pathname?.startsWith('/dashboard/projects/create');
  const isHomePage = pathname === '/';
  const isCertificationsPage = pathname?.startsWith('/certifications');
  const isProjectArchivePage = pathname?.startsWith('/project-archive');
  const isMyCommunityPage = pathname?.startsWith('/my-community');
  const isCommunityEventsPage = pathname?.startsWith('/community-events');
  const isLearningCampsPage = pathname?.startsWith('/learning-camps');

  return (
    <aside className="fixed left-0 top-0 h-screen bg-bg-dark w-sidebar transition-all duration-300 z-20 md:w-sidebar-sm lg:w-sidebar hidden md:flex flex-col relative">
      <div className="relative flex flex-col h-full py-6 px-4 overflow-y-auto z-0">
        {/* Logo Container */}
        <div className="mb-6 flex-shrink-0 h-12 w-12 ml-2">
          <img 
            alt="HackX Logo" 
            className="block w-full h-full object-contain" 
            src={logoContainerSvg} 
          />
        </div>

        {/* Quest Container */}
        <div className="flex flex-col relative pb-4 mb-0">
          <div className="flex gap-2 items-center py-2 px-2">
            <div className="w-4 h-4 relative shrink-0">
              <img alt="" className="block w-full h-full" src={sidebarIcon} />
            </div>
            <p className="font-normal text-text-secondary text-sm">Quest</p>
          </div>
          
        </div>

        {/* Certifications Container */}
        <div className="flex flex-col gap-2 relative pb-4 mb-0">
          {/* My Certifications - with highlight background if on /certifications */}
          <Link href="/certifications" className="relative py-2 px-1 block">
            {isCertificationsPage && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src={sidebarIcon} />
              </div>
              <p className={`text-sm ${isCertificationsPage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>My Certifications</p>
            </div>
          </Link>
          {/* Explore Courses - with highlight background if on /courses or its subpages */}
          <Link href="/courses" className={`relative py-2 px-1 block`}>
            {isCoursesPage && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src={sidebarIcon} />
              </div>
              <p className={`text-sm ${isCoursesPage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Explore Courses</p>
            </div>
          </Link>
          
        </div>

        {/* Dashboard Container - Different content for Host page */}
        {isHostPage ? (
          <div className="flex flex-col gap-2 relative pb-4 mb-0">
            {/* Overview - with highlight background if on /host */}
            <Link href="/host" className="relative py-2 px-1 block">
              {pathname === '/host' && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${pathname === '/host' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Overview</p>
              </div>
            </Link>
            {/* Prizes - with highlight background if on /host/prizes */}
            <Link href="/host/prizes" className="relative py-2 px-1 block">
              {pathname === '/host/prizes' && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${pathname === '/host/prizes' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Prizes</p>
              </div>
            </Link>
            {/* Judges - with highlight background if on /host/judges */}
            <Link href="/host/judges" className="relative py-2 px-1 block">
              {pathname === '/host/judges' && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${pathname === '/host/judges' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Judges</p>
              </div>
            </Link>
            {/* Schedule - with highlight background if on /host/schedule */}
            <Link href="/host/schedule" className="relative py-2 px-1 block">
              {pathname === '/host/schedule' && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${pathname === '/host/schedule' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Schedule</p>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-2 relative pb-4 mb-0">
            {/* Dashboard - with highlight background if on /dashboard or its subpages (but not /dashboard/projects/create) */}
            <Link href="/dashboard" className={`relative py-2 px-1 block`}>
              {isDashboardPage && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${isDashboardPage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Dashboard</p>
              </div>
            </Link>
            {/* Explore Hackatons - with highlight background if on / */}
            <Link href="/" className={`relative py-2 px-1 block`}>
              {isHomePage && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${isHomePage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Explore Hackatons</p>
              </div>
            </Link>
            {/* Project Archive - with highlight background if on /project-archive */}
            <Link href="/project-archive" className="relative py-2 px-1 block">
              {isProjectArchivePage && (
                <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
              )}
              <div className="relative flex gap-2 items-center px-2">
                <div className="w-4 h-4 relative shrink-0">
                  <img alt="" className="block w-full h-full" src={sidebarIcon} />
                </div>
                <p className={`text-sm ${isProjectArchivePage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Project Archive</p>
              </div>
            </Link>
          </div>
        )}

        {/* Sidebar Container */}
        <div className="flex flex-col gap-2">
          {/* My Community - with highlight background if on /my-community */}
          <Link href="/my-community" className="relative py-2 px-1 block">
            {isMyCommunityPage && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src={sidebarIcon} />
              </div>
              <p className={`text-sm ${isMyCommunityPage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>My Community</p>
            </div>
          </Link>
          <Link href="/community-events" className="relative py-2 px-1 block">
            {isCommunityEventsPage && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src={sidebarIcon} />
              </div>
              <p className={`text-sm ${isCommunityEventsPage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Community Events</p>
            </div>
          </Link>
          <Link href="/learning-camps" className="relative py-2 px-1 block">
            {isLearningCampsPage && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src={sidebarIcon} />
              </div>
              <p className={`text-sm ${isLearningCampsPage ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Learning Camps</p>
            </div>
          </Link>
          <div className="flex gap-2 items-center py-2 px-2">
            <div className="w-4 h-4 relative shrink-0">
              <img alt="" className="block w-full h-full" src={sidebarIcon} />
            </div>
            <p className="font-normal text-text-secondary text-sm">Discussion & Support</p>
          </div>
          <div className="flex gap-2 items-center py-2 px-2">
            <div className="w-4 h-4 relative shrink-0">
              <img alt="" className="block w-full h-full" src={sidebarIcon} />
            </div>
            <p className="font-normal text-text-secondary text-sm">Advocate Program</p>
          </div>
          <div className="flex gap-2 items-center py-2 px-2">
            <div className="w-4 h-4 relative shrink-0">
              <img alt="" className="block w-full h-full" src={sidebarIcon} />
            </div>
            <p className="font-normal text-text-secondary text-sm">More</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

