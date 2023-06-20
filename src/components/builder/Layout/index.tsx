import { BeforeButtonLarge, PrimaryButton } from '@/components/common/button';
import { ToggleInText } from '@/components/common/toggle';
import React from 'react';
import Preview from '../Preview';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* topbar */}
      <div className="w-[1280px] h-[72px] border-b-[2px] border-GrayScalePrimary-400 flex">
        <BeforeButtonLarge pageName="대시보드" classname="my-[auto] ml-[22px] w-[232px]" />
        <div className="text-center w-[240px] h-[44px] ml-[266px] my-[auto] text-GrayScalePrimary-500">
          <p className="font-[500] text-[14px]">질링스 회사 소개</p>
          <p className="text-[12px] font-[400]">zillinks.com/corp/zillinks</p>
        </div>
        <ToggleInText classname="w-[90px] h-[32px] my-[auto] ml-[293px]" />
        <PrimaryButton
          type="primary"
          text={'게시하기'}
          onClick={() => {}}
          classname={'w-[89px] h-[36px] my-[auto] ml-[16px]'}
        />
      </div>
      <div className="flex">
        {/* leftpanel */}
        <div className="w-[336px] h-[calc(100vh-72px)] overflow-y-scroll">{children}</div>
        {/* preview */}
        <Preview />
      </div>
    </>
  );
}
