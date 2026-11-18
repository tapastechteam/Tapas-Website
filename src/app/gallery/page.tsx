import GalleryPage from '@/modules/gallery/components/GalleryPage';
export default async function Page({searchParams}:{searchParams:Promise<{event?:string|string[]}>}) {
  const query=await searchParams;
  const eventId=typeof query.event==='string'?query.event:undefined;
  return <GalleryPage galleryHref="/gallery" homeHref="/" eventId={eventId} />;
}
