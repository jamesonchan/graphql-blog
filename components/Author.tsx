import React from "react";
import Image from 'next/image'

type author = {
  bio: string;
  id: string;
  name: string;
  photo: {
    url: string;
  };
};
interface AuthorProps {
  author: author;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <div className="text-center text-white mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14 ">
        <Image
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-lg"
          objectFit="cover"
        />
      </div>
      <h3 className="my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
