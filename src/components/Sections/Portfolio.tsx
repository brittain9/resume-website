import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-slate-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, bulletPoints, technologies, date}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(overlayRef, () => setShowOverlay(false));
  useDetectOutsideClick(popupRef, () => setShowPopup(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      if (mobile && !showOverlay) {
        setShowOverlay(!showOverlay);
      } else {
        setShowPopup(true);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <>
      <div
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        onClick={handleItemClick}
        ref={overlayRef}>
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            ref={popupRef}
            className="relative w-full max-w-3xl rounded-lg bg-white shadow-2xl"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">{title}</h2>
              <div className="mb-6 max-h-96 overflow-y-auto">
                <p className="mb-6 text-lg text-gray-700">{description}</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">Key Features</h3>
                    <ul className="list-inside list-disc space-y-2">
                      {bulletPoints.map((point, index) => (
                        <li key={index} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">Technologies Used</h3>
                    <p className="text-gray-700">{technologies.join(', ')}</p>
                    <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-800">Completed</h3>
                    <p className="text-gray-700">{date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-8">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-600 px-8 py-3 font-bold text-white transition-colors hover:bg-blue-700"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
});