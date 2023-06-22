import { BeforeButtonProps, PrimaryButtonProps } from "@/interfaces/button";
import { Products } from "@/interfaces/store";
import useStore from "@/store";
import { useRouter } from "next/router";

// 이전으로 되돌아가는 버튼
// leftpanel
export function BeforeButtonSmall({ pageName }: BeforeButtonProps) {
  const { add, setAdd, products,setProducts } = useStore();
  

  const router = useRouter();
  const backPage = () => {
    if(add) {
      setAdd(false)
      setProducts(products.slice(0, -1))
    } else {
      router.back();
    }
  };
  return (
    <button
      className="flex mt-[12px]"
      onClick={() => {
        backPage();
      }}
    >
      <div className="w-[24px] h-[24px] bg-GrayScalePrimary-100 rounded-full pt-[5px]">
        <img src="/east.png" alt="east" className="w-[12px] h-[auto] translate-x-[5px]" />
      </div>
      <p className="text-GrayScalePrimary-500 font-bold text-[14px] ml-[16px] translate-y-[2px]">{pageName}</p>
    </button>
  );
}

// 이전으로 되돌아가는 버튼
// 상단 메뉴바
export function BeforeButtonLarge({ pageName, classname }: BeforeButtonProps) {
  const router = useRouter();
  const backPage = () => {
    router.back();
  };
  return (
    <button
      className={'flex h-[24px] ' + classname}
      onClick={() => {
        backPage();
      }}
    >
      <img src="/arrow_back.png" alt="arrow_back" className="w-[12px] h-[auto]" />
      <p className="font-[500] text-[18px] ml-[8px] translate-y-[-2px]">{pageName}</p>
    </button>
  );
}

// 기본 버튼
// type: primary, wihte
export function PrimaryButton({ type, text, onClick, classname, inputType, form }: PrimaryButtonProps) {
  const color =
    type === 'primary'
      ? 'bg-primary-500 text-white border-primary-500'
      : 'bg-white text-primary-500 border-primary-500 text-primary-500';
  return (
    <button
      // type={inputType}
      className={color + ' text-[14px] rounded-[6px] border-[2px] text-center cursor-pointer ' + classname}
      onClick={onClick}
      // value={text}
      form={form}
      // readOnly
    >{text}</button>
  );
}
