/** @jsx h */
import { h } from "preact"; 
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from '@twind';

export const handler: Handlers = {
  async GET(req, ctx) {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();

    return ctx.render(data);
  },
};

interface Photo {
  'albumId': number;
  'id': number;
  'title': string;
  'thumbnailUrl': string;
}

const Photos = (props: PageProps) => {
  return (
    <div>
      <h1>Photos</h1>
      <ul class={tw`grid grid-cols-3 gap-4`}>
        {props.data.map((photo: Photo) => (
          <li key={photo.id} className={tw`bg-gray-500`}>
            <h1>{photo.title}</h1>
            <img src={photo.thumbnailUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;