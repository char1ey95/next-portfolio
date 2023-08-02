import Image from "next/image"
import Link from "next/link"

const ProjectItem = ({ data }: { data: any }) => {

    const title = data.properties.이름.title[0].plain_text
    const link = data.properties.Github.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url

    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-md">
            <Image
                className="rounded-md"
                src={imgSrc}
                alt=""
                width={100}
                height={100}
                layout="responsive"
                objectFit="none"
                quality={100}
            />
            <h1>{title}</h1>
            <h3>{description}</h3>
            <Link href={link} className="">깃허브 바로가기</Link>
        </div>
    )
}

export default ProjectItem