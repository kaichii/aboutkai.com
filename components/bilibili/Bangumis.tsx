import fetcher from 'lib/fetcher';
import { BilibiliBangumi } from 'lib/types';
import useSWR from 'swr';
import Image from 'next/image';

export default function Bangumis({
  bangumis
}: {
  bangumis: BilibiliBangumi[];
}) {
  if (!bangumis) return <p>暂无追番</p>;

  return (
    <div className="flex w-full gap-6 md:gap-8 flex-row">
      {bangumis.map((d, i) => {
        return (
          <div key={i}>
            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={d.title}
              className="md:hidden relative select-none"
            >
              <Image
                src={d.square_cover}
                alt={d.title}
                width={120}
                height={120}
                className="rounded-md"
                loading="lazy"
              />
            </a>
            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={d.title}
              className="relative hidden md:inline-block select-none"
            >
              <Image
                src={d.cover}
                alt={d.title}
                width={165}
                height={210}
                className="rounded-md"
                loading="lazy"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
