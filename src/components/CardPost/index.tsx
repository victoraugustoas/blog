import clsx from "clsx";
import Link from "next/link";
import React from "react";

export interface CardPostProps {
  title: string;
  description?: string;
  authorImage?: string;
  authorName: string;
  authorOffice?: string;
  imagePost?: string;
  slug: string;
}

const CardPost: React.FC<CardPostProps> = ({
  title,
  description,
  authorImage,
  authorName,
  authorOffice,
  imagePost,
  slug,
}) => {
  return (
    <Link href={slug}>
      <div className="p-1 mb-6 transition sm:transform hover:-translate-y-6 cursor-pointer break-inside">
        <img src={imagePost} className="object-cover w-full max-h-64 mb-4" />
        <div>
          <h4 className="font-serif font-semibold text-4xl">{title}</h4>
          {description && <p className="font-sans base mt-5">{description}</p>}
        </div>
        <div
          className={clsx(
            "flex items-center",
            authorImage && authorOffice ? "mt-7" : "mt-4"
          )}
        >
          {authorImage && authorOffice ? (
            <>
              <img
                src={authorImage}
                className="m-1 w-12 h-12 object-cover rounded-2xl"
              />
              <div className="p-1">
                <p className="font-sans font-medium">{authorName}</p>
                <p className="font-sans font-light text-sm">{authorOffice}</p>
              </div>
            </>
          ) : (
            <p className="font-sans font-normal">Por {authorName}</p>
          )}
        </div>

        {!imagePost || !(authorImage && authorOffice) ? (
          <div className="border-b border-gray-300 py-4" />
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
};

export { CardPost };
